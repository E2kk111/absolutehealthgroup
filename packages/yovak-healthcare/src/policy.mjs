/**
 * Synthetic-only Yovak Healthcare policy example.
 * NOT a production gateway: accepts caller-supplied facts and has no authentication,
 * durable audit log, signed approvals, revocation store or downstream dispatch.
 * Production callers must never trust these inputs without server verification.
 */
export function evaluateSyntheticToolRequest(request) {
  const deny = (reason) => Object.freeze({ allowed: false, reason });
  if (!request || typeof request !== "object") return deny("invalid_request");
  const { tenantId, identityVerified, agent, action, approval, now } = request;
  if (!identityVerified) return deny("unverified_identity");
  if (typeof tenantId !== "string" || !tenantId) return deny("missing_tenant");
  if (!agent || agent.tenantId !== tenantId || !action || action.tenantId !== tenantId) return deny("tenant_mismatch");
  if (!agent.id || agent.active !== true) return deny("agent_inactive");
  if (typeof action.tool !== "string" || !action.tool || !Array.isArray(agent.allowedTools) || !agent.allowedTools.includes(action.tool)) return deny("tool_not_granted");
  if (typeof action.digest !== "string" || !action.digest) return deny("missing_action_digest");
  if (action.sensitivity !== "ordinary" && action.sensitivity !== "sensitive") return deny("unknown_sensitivity");
  if (action.sensitivity === "sensitive") {
    if (!approval || approval.status !== "approved") return deny("approval_required");
    if (approval.tenantId !== tenantId || approval.agentId !== agent.id || approval.tool !== action.tool || approval.actionDigest !== action.digest) return deny("approval_scope_mismatch");
    if (!Number.isFinite(now) || !Number.isFinite(approval.expiresAt) || approval.expiresAt <= now) return deny("approval_expired");
  }
  return Object.freeze({ allowed: true, reason: "synthetic_grant" });
}
