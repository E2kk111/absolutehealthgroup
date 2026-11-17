// AION-UHP v0.1 synthetic-only conformance *model* tests.
// NOT a cryptographic verifier, deployed gateway, or production policy engine.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const fixture = JSON.parse(readFileSync(new URL('./fixtures/synthetic-session.json', import.meta.url), 'utf8'));

// Demonstrates fail-closed gateway behavior as a specification example only.
// In production, signature, issuer, nonce, consent, approval, revocation and policy
// validation must be independently implemented and verified at tool boundaries.
function simulatedBoundary(request, grant) {
  if (request.classification !== 'SYNTHETIC') return 'DENY';
  if (fixture.task.prohibited_capabilities.includes(request.capability)) return 'DENY';
  if (!fixture.task.allowed_capabilities.includes(request.capability)) return 'DENY';
  if (!grant || !grant.verified) return 'DENY';
  if (grant.audience !== 'synthetic-tool-gateway') return 'DENY';
  if (grant.task_id !== fixture.task.id || grant.capability !== request.capability) return 'DENY';
  if (grant.revoked || grant.replayed || grant.expired) return 'DENY';
  if (grant.human_review_required && !grant.approval_verified) return 'DENY';
  return 'ALLOW';
}
const req = { classification: 'SYNTHETIC', capability: 'read_synthetic_wound_record' };
const grant = { verified: true, audience: 'synthetic-tool-gateway', task_id: 'task-001', capability: req.capability };

test('fixture is a non-executable draft', () => {
  assert.equal(fixture.version, '0.1.0-draft');
  assert.equal(fixture.authority.authorization_token, null);
  assert.equal(fixture.evidence.integrity_status, 'NOT_ATTESTED');
});

test('missing grant denies even with illustrative ALLOW decision', () => {
  assert.equal(simulatedBoundary(req, null), 'DENY');
});

test('valid synthetic mock grant permits only scoped read', () => {
  assert.equal(simulatedBoundary(req, grant), 'ALLOW');
});

for (const capability of ['sign_clinical_note', 'submit_claim', 'modify_ehr']) {
  test(`prohibited ${capability} is blocked`, () => {
    assert.equal(simulatedBoundary({ ...req, capability }, { ...grant, capability }), 'DENY');
  });
}
test('PHI input is blocked', () => {
  assert.equal(simulatedBoundary({ ...req, classification: 'PHI' }, grant), 'DENY');
});
for (const alteration of [
  { verified: false }, { audience: 'wrong-gateway' }, { task_id: 'other-task' },
  { revoked: true }, { replayed: true }, { expired: true },
  { human_review_required: true, approval_verified: false }
]) {
  test(`invalid grant ${JSON.stringify(alteration)} is blocked`, () => {
    assert.equal(simulatedBoundary(req, { ...grant, ...alteration }), 'DENY');
  });
}
test('adapter identity cannot bypass the gateway', () => {
  for (const adapter of ['HarnessRouter', 'Codex', 'Claude', 'other']) {
    assert.equal(simulatedBoundary({ ...req, adapter }, null), 'DENY');
  }
});
