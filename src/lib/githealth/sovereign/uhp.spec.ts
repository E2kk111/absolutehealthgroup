import { describe, expect, it } from 'vitest';
import { authorizeSyntheticTask, executeGovernedSyntheticTask, SyntheticLocalAdapter, type AgentPassport, type TaskContract } from './uhp';

const agent: AgentPassport = {
  agentId: 'wound-demo', ownerId: 'absolute-health-group', tenantId: 'demo',
  purpose: 'wound-documentation-quality',
  permittedCapabilities: ['read_synthetic_wound_record', 'propose_clarification', 'write_ehr', 'submit_claim'],
};
const task: TaskContract = {
  taskId: 'synthetic-1', tenantId: 'demo', purpose: 'wound-documentation-quality',
  classification: 'SYNTHETIC', requestedCapability: 'read_synthetic_wound_record', humanApproved: false,
};
describe('AION-UHP synthetic conformance', () => {
  it('allows bounded synthetic reads', () => expect(authorizeSyntheticTask(agent, task).decision).toBe('ALLOW'));
  it('fails closed on PHI', () => expect(authorizeSyntheticTask(agent, { ...task, classification: 'PHI' }).decision).toBe('DENY'));
  it('fails closed on tenant mismatch', () => expect(authorizeSyntheticTask(agent, { ...task, tenantId: 'other' }).decision).toBe('DENY'));
  it('fails closed on purpose mismatch', () => expect(authorizeSyntheticTask(agent, { ...task, purpose: 'billing' }).decision).toBe('DENY'));
  it('blocks EHR writes even if listed in passport', () => expect(authorizeSyntheticTask(agent, { ...task, requestedCapability: 'write_ehr' }).decision).toBe('DENY'));
  it('blocks claims even if listed in passport', () => expect(authorizeSyntheticTask(agent, { ...task, requestedCapability: 'submit_claim' }).decision).toBe('DENY'));
  it('requires review for a proposed clarification', () => expect(authorizeSyntheticTask(agent, { ...task, requestedCapability: 'propose_clarification' }).decision).toBe('REVIEW'));
  it('does not execute denied tasks', async () => {
    const result = await executeGovernedSyntheticTask(agent, { ...task, classification: 'PHI' }, new SyntheticLocalAdapter(), {});
    expect(result.result).toBeUndefined();
    expect(result.event.decision).toBe('DENY');
  });
});
