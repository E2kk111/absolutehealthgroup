# AION Unified Harness Protocol™ (AION-UHP) — v0.1.0 DRAFT

**Status:** Proposal; not implemented, security-reviewed, clinically validated, or production authorized.  
**Scope:** Vendor-neutral protocol contracts; healthcare-first synthetic conformance fixtures.  
**Ownership proposal:** AION-UHP specifies the wire contract; AION authority engine makes policy decisions; AIONKG stores evidence relationships; GitHealth supplies healthcare workflows; runtimes (including HarnessRouter) are replaceable adapters. The repository hosting this proposal does not establish ownership of a future canonical protocol repository.

## 1. Trust boundaries

- A runtime adapter is **untrusted for authorization**. Its reported capabilities, events and outputs are claims, not proof.
- AION's authority service issues **short-lived, signed, audience-bound, task-bound authorization grants** after checking policy, consent, identity, purpose, context and resource scope.
- The **tool/data gateway**, not the graph or the model, verifies grants and enforces permissions on **every consequential operation**. Default deny on missing, expired, invalid, revoked or ambiguous grants.
- AIONKG captures versioned relationships and provenance. It does not grant permissions.
- Evidence envelopes are integrity-protected and append-only/tamper-evident. Event hashes alone are insufficient to establish truth of clinical outcomes.
- No real patient data, EHR writes, note signatures, billing submissions, or independent clinical actions in v0.1 examples.

## 2. Protocol resources

| Resource | Minimum contract | Responsibility |
| --- | --- | --- |
| Agent Passport | agent_id, owner, purpose, identity issuer, credential reference, version | AION identity |
| Task Contract | task_id, objective, input/output schema refs, allowed and denied capabilities | AION-UHP |
| Context Contract | data classification, purpose, authorized sources, provenance refs, retention | AION authority + context gateway |
| Tool Contract | tool id, operation, resource, data classification, input schema, effect class | Adapter describes; gateway enforces |
| Authority Decision | decision, policy id/version, subject, resource, operation, rationale code, reviewer | AION engine |
| Execution Event | session, sequence, event id/type, actor, timestamp, correlation, parent | AION-UHP |
| Evidence Envelope | event refs, source refs, content digests, signer, chain anchor | Evidence service + AIONKG |
| Outcome Verification | expected result, observed result, verifier identity, status, exceptions | Independent verifier |

## 3. Lifecycle

`REGISTER → AUTHORIZE → PREPARE → EXECUTE → INTERCEPT → ATTEST → VERIFY`

An **AUTHORIZE** decision alone is not a reusable unrestricted capability. At **INTERCEPT**, every external tool or data operation is checked again for resource, action, audience, purpose, policy, consent, expiration, nonce/replay and revocation. Human-review decisions require a separate, verified approval artifact before continuation. A deny or gateway error prevents execution.

## 4. Envelope (illustrative JSON)

```json
{
  "protocol": "aion-uhp",
  "version": "0.1.0-draft",
  "session_id": "synthetic-session-001",
  "agent": {
    "id": "githealth-documentation-agent",
    "owner": "absolute-health-group",
    "purpose": "documentation-quality-review"
  },
  "task": {
    "id": "task-001",
    "input_classification": "SYNTHETIC",
    "allowed_capabilities": [
      "read_synthetic_wound_record",
      "propose_documentation_clarification"
    ],
    "prohibited_capabilities": [
      "sign_clinical_note",
      "submit_claim",
      "modify_ehr"
    ]
  },
  "authority": {
    "policy_version": "synthetic-demo-v1",
    "decision": "ALLOW",
    "expires_at": "2026-11-02T12:00:00Z",
    "authorization_token": null
  },
  "execution": {
    "adapter": "replaceable-runtime",
    "status": "PENDING"
  },
  "evidence": {
    "source_ids": [],
    "event_ids": [],
    "integrity_status": "NOT_ATTESTED"
  }
}
```

**Important:** `decision: ALLOW` in this fixture is an *illustrative policy decision*, **not** an executable authorization. `authorization_token: null` intentionally prevents any actual tool access. The fixed example expiration is historical and must not be used for live execution.

## 5. Proposed production grant claims (not implemented)

A signed grant SHOULD bind `iss`, `sub`, `aud`, `iat`, `nbf`, `exp`, `jti`, `session_id`, `task_id`, `tool_id`, `operation`, `resource_scope`, `purpose`, `policy_version`, `consent_ref` (where applicable) and `approval_ref` (where applicable). Gateways MUST verify cryptographic signature, issuer trust, audience, scope, freshness, replay/revocation and the current authorization context. The exact signing and canonicalization profiles remain **TBD**.

## 6. Required event classes

`SESSION_STARTED`, `AGENT_REGISTERED`, `AUTHORIZATION_REQUESTED`, `AUTHORIZATION_ALLOWED`, `AUTHORIZATION_DENIED`, `HUMAN_REVIEW_REQUIRED`, `TOOL_CALL_REQUESTED`, `TOOL_CALL_BLOCKED`, `TOOL_CALL_COMPLETED`, `EXECUTION_FAILED`, `EVIDENCE_ATTESTED`, `OUTCOME_VERIFIED`, `SESSION_CLOSED`.

Each event needs `event_id`, `session_id`, `sequence`, `timestamp`, `actor`, `type`, `correlation_id` and a versioned payload schema. Event ordering, deduplication and canonical serialization require normative definitions before implementation.

## 7. Conformance gates

1. Synthetic permitted read is accepted only when a valid scoped grant is presented at the boundary.
2. EHR mutation, clinical note signing and claim submission are denied even if an adapter claims permission.
3. Expired, wrong-audience, replayed, revoked, forged or absent grants are denied.
4. A human-review decision blocks execution until a valid reviewer approval is bound to the exact task/action.
5. PHI-classified inputs cannot be passed to synthetic-only adapters.
6. Adapter failure, missing evidence or provenance mismatch fails closed.
7. Swapping adapters does not change authority decisions for the same request.
8. Attestation is not conflated with clinical correctness or independent certification.

## 8. Open decisions / release gates

- Confirm canonical protocol governance, licensing, versioning and repository ownership.
- Define formal JSON Schemas, event signatures, credential profile, nonce storage and revocation distribution.
- Define gateway SDK and deterministic reference policy evaluator; test bypass routes and TOCTOU races.
- Define AIONKG evidence provenance semantics and independent outcome verification.
- Threat-model prompt injection, cross-tenant access, consent withdrawal, replay, delegated authority and tool confusion.
- Require security, privacy, clinical, regulatory and legal reviews before PHI or live clinical workflows.

**Not in scope:** GitHealth PR #48 changes, patient workflows, PHI, production execution, claims of regulatory compliance, certification or insurance.
