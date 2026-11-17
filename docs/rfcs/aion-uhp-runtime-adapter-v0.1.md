# RFC: AION-UHP Runtime Adapter Interface (v0.1 draft)

**Status:** Draft design, not an implemented or audited system.  
**Depends on:** [AION-UHP protocol proposal PR #50](https://github.com/E2kk111/absolutehealthgroup/pull/50).  
**Separation:** This RFC does not modify PR #48 clinical demonstration or production applications.

## Objective

Keep GitHealth healthcare workflows independent of agent runtime vendors. AION-UHP owns the canonical session, task, tool and event contracts. AION makes deterministic policy decisions. Tool/data gateways enforce authorization at boundaries. AIONKG stores provenance and evidence relationships. HarnessRouter, direct model APIs and other runtimes are adapters, not authorities.

## Adapter interface (conceptual TypeScript)

```ts
type Classification = "SYNTHETIC" | "PUBLIC" | "PHI";
type RuntimeEvent = {
  eventId: string; sessionId: string; sequence: number;
  type: string; occurredAt: string; payload: unknown;
};
type TaskEnvelope = {
  sessionId: string; taskId: string; agentId: string;
  purpose: string; classification: Classification;
  inputRef: string; allowedToolIds: string[];
};
type ToolRequest = {
  sessionId: string; taskId: string; toolId: string;
  operation: string; resourceRef: string; arguments: unknown;
};
interface RuntimeAdapter {
  readonly adapterId: string;
  capabilities(): Promise<string[]>;
  start(task: TaskEnvelope): Promise<{ runtimeSessionId: string }>;
  stream(runtimeSessionId: string): AsyncIterable<RuntimeEvent>;
  cancel(runtimeSessionId: string): Promise<void>;
  recover(runtimeSessionId: string): Promise<{ status: "RECOVERED" | "FAILED" }>;
}
interface EnforcingToolGateway {
  // No adapter may invoke a consequential tool except through this gateway.
  invoke(request: ToolRequest, signedGrant: string): Promise<unknown>;
}
```

The interface is illustrative and is not shipped as an SDK. `signedGrant` is not generated or verified by this RFC. A production gateway must independently verify issuer, audience, signature, session/task/tool/resource scope, expiry, consent, human approval, nonce/replay and revocation. Deny on errors or missing data.

## Lifecycle and ownership

1. **REGISTER:** AION validates Agent Passport and adapter capabilities.
2. **AUTHORIZE:** AION evaluates task purpose, scope, policy, consent and identity.
3. **PREPARE:** GitHealth creates a bounded synthetic task envelope.
4. **EXECUTE:** The adapter runs the model/agent session without privileged tool credentials.
5. **INTERCEPT:** A separate gateway rechecks each tool request before any external effect.
6. **ATTEST:** Evidence service validates event origin and integrity; adapter logs alone are untrusted.
7. **VERIFY:** Independent verifier checks expected versus observed outcome; AIONKG links evidence.

## HarnessRouter compatibility analysis — unverified hypotheses

| Area | Needed proof | Status |
| --- | --- | --- |
| Session lifecycle | Start, stream, cancel, recover and resume semantics | Not tested |
| Protocol mapping | Lossless task, tool, event and error mapping | Not tested |
| Tool isolation | No bypass to direct tools, secrets or network | Not tested |
| Enforcement | Gateway controls every consequential operation | Not tested |
| Provenance | Stable event IDs, causal ordering and verified source identity | Not tested |
| Tenant isolation | Prevent cross-tenant context, session and credential access | Not tested |
| Portability | Same task, same policy outcomes with another adapter | Not tested |
| Reliability | Timeouts, retries, idempotency and failure recovery | Not tested |

Do not interpret this table as evidence that HarnessRouter implements these features. Evaluate its code, documentation, license and actual runtime behavior separately.

## Synthetic wound-documentation proof of concept

- A fictional wound record enters a GitHealth documentation-review task.
- AION allows only `read_synthetic_wound_record` and `propose_documentation_clarification`.
- A replaceable runtime generates a draft clarification.
- The gateway denies `modify_ehr`, `sign_clinical_note`, `submit_claim` and any PHI input.
- AIONKG receives validated references and evidence relationships; no claim of clinical correctness.
- Repeat the same tests with a second adapter and compare gateway decisions.

## Required conformance scenarios

1. Valid synthetic read with a narrowly scoped verified grant: **allow**.
2. Missing, expired, wrong-audience, forged, revoked or replayed grant: **deny**.
3. EHR write, note signature or claim submission: **deny**, even if the adapter requests it.
4. PHI input to a synthetic-only runtime: **deny**.
5. Human review required but no verified approval: **deny**.
6. Tool gateway unavailable: **deny**; no fallback direct call.
7. Adapter crash or evidence mismatch: **fail closed**, report exception.
8. Swap adapter: authorization results remain identical for the same scoped operation.

## GitHealth Clear Language™ (separate workstream)

Use ASD-STE100-inspired controlled wording for documentation, voice-agent prompts, patient education and video scripts. Maintain a healthcare terminology extension and clinician-approved content. This does **not** constitute formal ASD-STE100 compliance or a substitute for clinical safety review, authorization, informed consent or regulatory review.

## Acceptance criteria and open decisions

- Define versioned machine-readable AION-UHP schemas and adapter error taxonomy.
- Implement gateway enforcement and cryptographic grant verification outside the adapter.
- Demonstrate bypass resistance with tests for direct network/tool access.
- Record provenance with trusted event identities, tamper evidence and independent outcome checks.
- Run a synthetic two-adapter harness and publish reproducible results.
- Review threat model, privacy, clinical risk, licensing and protocol governance.
- Confirm canonical AION-UHP ownership/repository before claiming this repository is the authoritative source.

**No PHI, real credentials, EHR writes, claim submission, clinical actions or production deployment are authorized by this RFC.**
