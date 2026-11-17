import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeSyntheticVoice, TOOLS } from './core.mjs';
import { planSyntheticFollowup, FOLLOWUP_VERSION } from './followup.mjs';
import { handleRequest } from './server.mjs';

const context = capability => ({
  agentId: 'anika-voiceos-demo', tenantId: 'synthetic-lab', classification: 'SYNTHETIC',
  origin: 'GENERATED', purpose: 'nonclinical-signal-research', capability,
});
const samples = amplitude => Array.from({ length: 1600 }, (_, i) =>
  amplitude * Math.sin(i * 2 * Math.PI / 40));
const record = amplitude => analyzeSyntheticVoice({
  context: context(TOOLS[0]), sampleRate: 8000, samples: samples(amplitude),
}).provenance;
const args = (baseline, current, concern = 'NONE') => ({
  context: context(TOOLS[2]), baselineProvenance: baseline,
  currentProvenance: current, reportedConcern: concern,
});

test('simulated acoustic change requests a repeat measurement, never diagnosis', () => {
  const result = planSyntheticFollowup(args(record(0.1), record(0.6)));
  assert.equal(result.status, 'SIMULATED');
  assert.equal(result.record.version, FOLLOWUP_VERSION);
  assert.equal(result.record.acousticChange, true);
  assert.equal(result.record.disposition, 'SIMULATED_REPEAT_MEASUREMENT');
  assert.equal(result.record.evidenceGrade, 'UNVALIDATED_ENGINEERING_DEMONSTRATION');
  assert.equal(result.provenance.attestation, 'UNSIGNED_HASH_ONLY');
  assert.deepEqual(result, planSyntheticFollowup(args(record(0.1), record(0.6))));
});
test('simulated self-report routes to human review without diagnosing', () => {
  const result = planSyntheticFollowup(args(record(0.2), record(0.2), 'REPORTED_MOOD_CONCERN'));
  assert.equal(result.record.disposition, 'SIMULATED_HUMAN_REVIEW');
  assert.ok(result.record.actions.includes('QUEUE_SIMULATED_REVIEW'));
  assert.ok(!JSON.stringify(result).includes('depression'));
});
test('no change and no concern yields no simulated trigger', () => {
  assert.equal(planSyntheticFollowup(args(record(0.2), record(0.2))).record.disposition, 'NO_FOLLOWUP_TRIGGER');
});
test('PHI, wrong tenant, invalid concern and unknown keys are denied or rejected', () => {
  const baseline = record(0.2), current = record(0.4);
  assert.equal(planSyntheticFollowup({
    ...args(baseline, current), context: { ...context(TOOLS[2]), classification: 'PHI' },
  }).authorization.decision, 'DENY');
  assert.equal(planSyntheticFollowup({
    ...args(baseline, current), context: { ...context(TOOLS[2]), tenantId: 'outside' },
  }).authorization.decision, 'DENY');
  assert.equal(planSyntheticFollowup(args(baseline, current, 'DIAGNOSE_ANXIETY')).status, 'REJECTED');
  assert.equal(planSyntheticFollowup({ ...args(baseline, current), patientName: 'Nope' }).status, 'REJECTED');
});
test('tampered provenance and quality failures cannot trigger a plan', () => {
  const baseline = record(0.2), current = record(0.4);
  const tampered = structuredClone(current);
  tampered.record.features.rmsAmplitude = 0.999;
  assert.equal(planSyntheticFollowup(args(baseline, tampered)).reason, 'PROVENANCE_INTEGRITY_FAILURE');
  const badQuality = analyzeSyntheticVoice({
    context: context(TOOLS[0]), sampleRate: 8000, samples: Array(1600).fill(0),
  });
  assert.equal(badQuality.provenance, null);
  assert.equal(planSyntheticFollowup(args(baseline, badQuality.provenance)).status, 'REJECTED');
});
test('MCP exposes and invokes the simulated follow-up tool', () => {
  const tools = handleRequest({ jsonrpc: '2.0', id: 1, method: 'tools/list' });
  assert.equal(tools.result.tools.length, 3);
  const response = handleRequest({
    jsonrpc: '2.0', id: 2, method: 'tools/call',
    params: { name: TOOLS[2], arguments: args(record(0.2), record(0.5), 'REPORTED_VOICE_CHANGE') },
  });
  assert.equal(response.result.isError, false);
  const result = JSON.parse(response.result.content[0].text);
  assert.equal(result.record.disposition, 'SIMULATED_HUMAN_REVIEW');
});
