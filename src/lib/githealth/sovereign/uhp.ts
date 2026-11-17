/** AION-UHP v0.1 synthetic-only reference implementation.
 * NOT a security boundary: production must enforce policy in an isolated tool gateway.
 */
export type Classification = 'SYNTHETIC' | 'PUBLIC' | 'PHI';
export type Decision = 'ALLOW' | 'DENY' | 'REVIEW';
export type Capability = 'read_synthetic_wound_record' | 'propose_clarification' | 'write_ehr' | 'submit_claim';
export interface AgentPassport {
  agentId: string;
  ownerId: string;
  tenantId: string;
  purpose: string;
  permittedCapabilities: Capability[];
}
export interface TaskContract {
  taskId: string;
  tenantId: string;
  purpose: string;
  classification: Classification;
  requestedCapability: Capability;
  humanApproved: boolean;
}
export interface PolicyDecision {
  decision: Decision;
  reason: string;
  policyVersion: 'synthetic-v0.1';
}
export interface EvidenceEvent {
  eventId: string;
  taskId: string;
  agentId: string;
  decision: Decision;
  reason: string;
  adapter: string;
  classification: Classification;
  recordedAt: string;
}
export function authorizeSyntheticTask(agent: AgentPassport, task: TaskContract): PolicyDecision {
  const policyVersion = 'synthetic-v0.1' as const;
  if (!agent.agentId || !task.taskId || !agent.ownerId || !agent.tenantId || !task.tenantId)
    return { decision: 'DENY', reason: 'Missing required identity', policyVersion };
  if (agent.tenantId !== task.tenantId) return { decision: 'DENY', reason: 'Tenant mismatch', policyVersion };
  if (agent.purpose !== task.purpose) return { decision: 'DENY', reason: 'Purpose mismatch', policyVersion };
  if (task.classification !== 'SYNTHETIC') return { decision: 'DENY', reason: 'Only synthetic data permitted', policyVersion };
  if (!agent.permittedCapabilities.includes(task.requestedCapability))
    return { decision: 'DENY', reason: 'Capability not granted', policyVersion };
  if (task.requestedCapability === 'write_ehr' || task.requestedCapability === 'submit_claim')
    return { decision: 'DENY', reason: 'Clinical and financial writes prohibited in demo', policyVersion };
  if (task.requestedCapability === 'propose_clarification' && !task.humanApproved)
    return { decision: 'REVIEW', reason: 'Human review required before releasing proposal', policyVersion };
  return { decision: 'ALLOW', reason: 'Synthetic-only permitted capability', policyVersion };
}
export interface RuntimeAdapter {
  readonly id: string;
  execute(task: TaskContract, input: Readonly<Record<string, unknown>>): Promise<Readonly<Record<string, unknown>>>;
}
export class SyntheticLocalAdapter implements RuntimeAdapter {
  readonly id = 'synthetic-local';
  async execute(task: TaskContract, input: Readonly<Record<string, unknown>>) {
    return { taskId: task.taskId, status: 'SIMULATED', requestedCapability: task.requestedCapability, inputKeys: Object.keys(input) };
  }
}
export async function executeGovernedSyntheticTask(
  agent: AgentPassport,
  task: TaskContract,
  adapter: RuntimeAdapter,
  input: Readonly<Record<string, unknown>>,
  now: () => string = () => new Date().toISOString(),
): Promise<{ decision: PolicyDecision; event: EvidenceEvent; result?: Readonly<Record<string, unknown>> }> {
  const decision = authorizeSyntheticTask(agent, task);
  const event: EvidenceEvent = {
    eventId: task.taskId + ':' + decision.decision,
    taskId: task.taskId,
    agentId: agent.agentId,
    decision: decision.decision,
    reason: decision.reason,
    adapter: adapter.id,
    classification: task.classification,
    recordedAt: now(),
  };
  if (decision.decision !== 'ALLOW') return { decision, event };
  // Demonstration only: a real tool gateway MUST reauthorize each call and isolate credentials.
  const result = await adapter.execute(task, input);
  return { decision, event, result };
}
