# GitHealth VoiceOS™ — Developer Architecture v0.1

## Logical boundaries

```text
Customer-owned application (ANIKA, Navigator, HomeCare, WoundOS)
    |
VoiceOS Workspace (tenant config, Agent/Voice/Knowledge/Workflow Studios)
    |
Realtime session service (WebRTC signaling, audio streams, interruptions)
    |
Model proposes typed tool invocation
    |
Yovak Healthcare policy gateway [SERVER SIDE, DENY BY DEFAULT]
    |  authenticated subject + tenant + agent version + tool scope
    |  policy version + patient-context permission + human approval
    +-- deny -> audit evidence -> safe response / human escalation
    +-- allow -> controlled tool adapter -> event evidence
    |
Command Center (tenant-scoped metrics, audit review, revocation)
```

**Trust boundary:** Browser-side controls, LLM instructions, model tool schemas and prompt text are not authorization. The server must validate every consequential call and block tool dispatch on denial. No direct model-to-EHR/payment credentials.

## Proposed data entities
`Organization(id, status)`; `Membership(userId, orgId, role)`; `Agent(id, orgId, version, status, voiceId, instructionHash)`; `KnowledgeDocument(id, orgId, version, approvedBy, accessPolicy)`; `ToolGrant(orgId, agentId, tool, scope, expiresAt)`; `Approval(id, orgId, agentId, tool, actionHash, approverId, expiresAt)`; `Session(id, orgId, agentVersion, subjectId, status)`; `PolicyDecision(id, orgId, policyVersion, decision, reasonCode, evidenceRef)`. No PHI in this scaffold.

## Proposed API (not implemented)
- `POST /v1/workspaces`: create tenant after platform identity checks.
- `POST /v1/agents`, `POST /v1/agents/{id}/versions`: version and publish configuration.
- `POST /v1/voice/sessions`: mint short-lived scoped realtime session credentials.
- `POST /v1/knowledge/documents`: upload approved document with provenance and tenant ACL.
- `POST /v1/tools/authorize`: evaluate action and return bounded decision token or denial.
- `POST /v1/approvals`: authenticated human approval bound to exact action digest.
- `POST /v1/simulations`: synthetic regression suite.
- `GET /v1/audit/events`: tenant-scoped, permissioned event retrieval.

All endpoints require explicit authn/authz, schema validation, replay protection, idempotency for mutations, rate limits and audit policy. No endpoint is wired by this PR.

## Yovak contract
Input: verified principal, tenant, agent identity/version, tool, exact action digest, policy version, scoped grants, approval evidence, context.
Output: allow/deny, reason code, policy version, trace ID, expiration. Deny for missing or stale facts, cross-tenant requests, revoked agent, unknown tool, missing approval, or gateway unavailability. Approval is scoped to exact action and cannot be reused for changed arguments.

## Brand migration
AION references in existing pages and developer materials describe **legacy proposed governance branding**. Introduce Yovak Healthcare as the new assurance identity in new VoiceOS documentation; inventory and migrate public pages, API identifiers and contractual terms in a separately reviewed PR. Do not assume a text replacement implements an authorization gateway.

## Repository approach
Preserve existing Vite website under `src/`. `apps/voiceos/` documents the future standalone workspace. `packages/yovak-healthcare/` contains a **local synthetic policy example and tests only**, not a production security component. Do not deploy this example as the gateway.

## Engineering verification checklist
- Tenant isolation tests on data access, documents, sessions and telemetry.
- Deny-before-dispatch integration test with mocked downstream tool.
- Revocation effective during active session; stale approvals rejected.
- Prompt injection cannot change tool grants.
- Browser mic permissions, audio disconnect, reconnection and interruption tests.
- PHI redaction, retention, BAA/vendor security review before any live data.
