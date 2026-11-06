import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeSyntheticVoice, authorize, qualityAndFeatures, verifySyntheticProvenance, VERSIONS, TOOLS } from './core.mjs';
import { handleRequest } from './server.mjs';

const context = (capability = TOOLS[0]) => ({
  agentId: 'anika-voiceos-demo', tenantId: 'synthetic-lab', classification: 'SYNTHETIC',
  origin: 'GENERATED', purpose: 'nonclinical-signal-research', capability,
});
const samples = () => Array.from({ length: 1600 }, (_, i) => 0.4 * Math.sin(i * 2 * Math.PI / 40));
const input = () => ({ context: context(), sampleRate: 8000, samples: samples() });

test('versioned synthetic features and deterministic record digest', () => {
  const a = analyzeSyntheticVoice(input()), b = analyzeSyntheticVoice(input());
  assert.equal(a.authorization.decision, 'ALLOW');
  assert.equal(a.quality.pass, true);
  assert.equal(a.features.version, VERSIONS.features);
  assert.equal(a.features.durationMs, 200);
  assert.deepEqual(a, b);
  assert.match(a.provenance.recordHashSha256, /^[a-f0-9]{64}$/);
  assert.equal(a.provenance.attestation, 'UNSIGNED_HASH_ONLY');
});
test('quality rejects silence and clips before feature release', () => {
  const silence = analyzeSyntheticVoice({ ...input(), samples: Array(1600).fill(0) });
  const clipped = analyzeSyntheticVoice({ ...input(), samples: Array(1600).fill(1) });
  assert.equal(silence.quality.pass, false);
  assert.equal(silence.features, null);
  assert.ok(silence.quality.flags.includes('INSUFFICIENT_SIGNAL_ACTIVITY'));
  assert.equal(clipped.quality.pass, false);
  assert.ok(clipped.quality.flags.includes('EXCESSIVE_CLIPPING'));
});
test('quality rejects malformed, nonfinite, undersized and out-of-range input', () => {
  for (const bad of [
    { ...input(), sampleRate: 1234 },
    { ...input(), samples: [0, 0] },
    { ...input(), samples: Array(1600).fill(0.3).map((v, i) => i === 10 ? NaN : v) },
    { ...input(), samples: Array(1600).fill(1.2) },
  ]) {
    assert.equal(analyzeSyntheticVoice(bad).quality.pass, false);
  }
});
test('authorization denies PHI, other tenant, agent, purpose, origin and unapproved capabilities', () => {
  for (const patch of [
    { classification: 'PHI' }, { tenantId: 'other' }, { agentId: 'rogue' },
    { purpose: 'diagnosis' }, { origin: 'RECORDED' }, { capability: 'diagnose_depression' },
  ]) {
    const result = analyzeSyntheticVoice({ ...input(), context: { ...context(), ...patch } });
    assert.equal(result.authorization.decision, 'DENY');
    assert.equal(result.provenance, undefined);
  }
  assert.equal(authorize(context('write_ehr'), 'write_ehr').decision, 'DENY');
  assert.equal(authorize(context('submit_claim'), 'submit_claim').decision, 'DENY');
});
test('strict schema blocks injected metadata or forged clinical labels', () => {
  assert.equal(analyzeSyntheticVoice({ ...input(), diagnosis: 'depression' }).authorization.decision, 'DENY');
  assert.equal(analyzeSyntheticVoice({ ...input(), context: { ...context(), patientName: 'Test' } }).authorization.decision, 'DENY');
});
test('provenance digest reproducible, detects tampering, does not assert authenticity', () => {
  const provenance = analyzeSyntheticVoice(input()).provenance;
  const verification = verifySyntheticProvenance({ context: context(TOOLS[1]), provenance });
  assert.equal(verification.verification.integrity, 'HASH_MATCH');
  assert.equal(verification.verification.authenticity, 'NOT_VERIFIED');
  const tampered = structuredClone(provenance);
  tampered.record.features.rmsAmplitude = 0.999999;
  assert.equal(verifySyntheticProvenance({ context: context(TOOLS[1]), provenance: tampered }).verification.integrity, 'HASH_MISMATCH');
  assert.equal(verifySyntheticProvenance({ context: { ...context(TOOLS[1]), classification: 'PHI' }, provenance }).authorization.decision, 'DENY');
});
test('MCP initialize, tool discovery and authorized tool invocation', () => {
  const initialize = handleRequest({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} });
  assert.equal(initialize.result.serverInfo.name, 'anika-voiceos-synthetic-mcp');
  const tools = handleRequest({ jsonrpc: '2.0', id: 2, method: 'tools/list' });
  assert.equal(tools.result.tools.length, 3);
  const result = handleRequest({ jsonrpc: '2.0', id: 3, method: 'tools/call',
    params: { name: TOOLS[0], arguments: input() } });
  assert.equal(result.result.isError, false);
  assert.equal(JSON.parse(result.result.content[0].text).quality.pass, true);
});
test('MCP denies unregistered tools and PHI requests', () => {
  const unknown = handleRequest({ jsonrpc: '2.0', id: 4, method: 'tools/call',
    params: { name: 'submit_claim', arguments: input() } });
  assert.equal(unknown.error.code, -32602);
  const denied = handleRequest({ jsonrpc: '2.0', id: 5, method: 'tools/call',
    params: { name: TOOLS[0], arguments: { ...input(), context: { ...context(), classification: 'PHI' } } } });
  assert.equal(denied.result.isError, true);
});
