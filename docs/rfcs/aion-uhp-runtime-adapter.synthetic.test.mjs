// Synthetic-only adapter conformance model. No real runtime, gateway or PHI.
import test from 'node:test';
import assert from 'node:assert/strict';

const allowed = new Set(['read_synthetic_wound_record','propose_documentation_clarification']);
function gateway({ action, classification, grant, humanReviewRequired = false }) {
  if (classification !== 'SYNTHETIC' || !allowed.has(action)) return 'DENY';
  if (!grant?.verified || grant.audience !== 'aion-synthetic-gateway') return 'DENY';
  if (grant.expired || grant.revoked || grant.replayed || grant.forged) return 'DENY';
  if (grant.taskId !== 'synthetic-task-1' || grant.action !== action) return 'DENY';
  if (humanReviewRequired && !grant.approvalVerified) return 'DENY';
  return 'ALLOW';
}
const adapters = ['HarnessRouter-placeholder', 'direct-model-placeholder'];
const action = 'read_synthetic_wound_record';
const valid = { verified:true, audience:'aion-synthetic-gateway', taskId:'synthetic-task-1', action };
for (const adapter of adapters) {
  test(`${adapter}: synthetic permitted read`, () => assert.equal(gateway({action,classification:'SYNTHETIC',grant:valid}), 'ALLOW'));
  test(`${adapter}: no grant`, () => assert.equal(gateway({action,classification:'SYNTHETIC'}), 'DENY'));
  for (const blocked of ['modify_ehr','sign_clinical_note','submit_claim']) {
    test(`${adapter}: ${blocked} denied`, () => assert.equal(gateway({action:blocked,classification:'SYNTHETIC',grant:{...valid,action:blocked}}), 'DENY'));
  }
  test(`${adapter}: PHI denied`, () => assert.equal(gateway({action,classification:'PHI',grant:valid}), 'DENY'));
  for (const invalid of [{expired:true},{revoked:true},{replayed:true},{forged:true},{audience:'wrong'}]) {
    test(`${adapter}: invalid grant ${JSON.stringify(invalid)} denied`, () => assert.equal(gateway({action,classification:'SYNTHETIC',grant:{...valid,...invalid}}), 'DENY'));
  }
  test(`${adapter}: human review not approved`, () => assert.equal(gateway({action,classification:'SYNTHETIC',grant:valid,humanReviewRequired:true}), 'DENY'));
}
// These names are labels only; no HarnessRouter or model API is integrated.
