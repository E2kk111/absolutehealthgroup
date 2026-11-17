import test from "node:test";
import assert from "node:assert/strict";
import { evaluateSyntheticToolRequest as evaluate } from "../src/policy.mjs";

const baseline = () => ({
  tenantId: "org-a",
  identityVerified: true,
  agent: { id: "anika", tenantId: "org-a", active: true, allowedTools: ["education.read", "appointment.request"] },
  action: { tenantId: "org-a", tool: "education.read", sensitivity: "ordinary", digest: "sha256:example-1" },
  now: 1000,
});
const decision = (patch = {}) => evaluate({ ...baseline(), ...patch });
test("unverified identity denied", () => assert.equal(decision({ identityVerified: false }).reason, "unverified_identity"));
test("missing tenant denied", () => assert.equal(decision({ tenantId: "" }).allowed, false));
test("cross-tenant action denied", () => assert.equal(decision({ action: { ...baseline().action, tenantId: "org-b" } }).reason, "tenant_mismatch"));
test("revoked agent denied", () => assert.equal(decision({ agent: { ...baseline().agent, active: false } }).reason, "agent_inactive"));
test("ungranted tool denied", () => assert.equal(decision({ action: { ...baseline().action, tool: "payment.submit" } }).reason, "tool_not_granted"));
test("unknown sensitivity denied", () => assert.equal(decision({ action: { ...baseline().action, sensitivity: "critical" } }).reason, "unknown_sensitivity"));
test("ordinary granted synthetic action allowed", () => assert.equal(decision().allowed, true));
const sensitive = () => ({ ...baseline().action, tool: "appointment.request", sensitivity: "sensitive" });
const approval = () => ({ status: "approved", tenantId: "org-a", agentId: "anika", tool: "appointment.request", actionDigest: "sha256:example-1", expiresAt: 1200 });
test("sensitive action without approval denied", () => assert.equal(decision({ action: sensitive() }).reason, "approval_required"));
test("expired approval denied", () => assert.equal(decision({ action: sensitive(), approval: { ...approval(), expiresAt: 999 } }).reason, "approval_expired"));
test("wrong-action approval denied", () => assert.equal(decision({ action: { ...sensitive(), digest: "changed" }, approval: approval() }).reason, "approval_scope_mismatch"));
test("matching scoped synthetic approval allowed", () => assert.equal(decision({ action: sensitive(), approval: approval() }).allowed, true));
