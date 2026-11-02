# GitHealth Sovereign AI™ / AION-UHP™ v0.1 — Draft RFC

**Status:** research-stage reference implementation. **No PHI, production credentials, clinical actions, or security certification.**

## Ownership boundaries
- **GitHealth:** healthcare agent control plane, tenancy, lifecycle, workflow, data and deployment policy.
- **AION-UHP:** organization-owned canonical contracts for agent passports, task scopes, capability permissions, session lifecycle, execution events, evidence envelopes and adapter interoperability.
- **AION:** deterministic policy evaluation and independent enforcement at the actual data/tool boundary; human authorization for consequential actions.
- **AIONKG:** provenance graph and verified evidence lineage. An execution log is NOT an attestation.
- **HarnessRouter:** optional execution adapter. No authority to define canonical identity, clinical policy, keys, data retention or evidence schemas.

## Sovereignty dimensions and acceptance evidence
| Dimension | Required proof before sovereign claim |
| --- | --- |
| Data | Approved storage geography, inventory, retention/deletion, controlled egress and verified backup restoration |
| Identity | Organization-controlled identities, tenant isolation, workload authentication and revocation |
| Keys | Customer-controlled KMS/HSM, rotation and recovery drills; no keys exposed to agent runtimes |
| Compute | Documented infrastructure ownership/contract, workload isolation and independent operations |
| Models | Pluggable inference providers, locally deployable option and model provenance |
| Protocol | Versioned AION-UHP schemas, conformance tests and vendor-independent adapter interface |
| Evidence | Signed event envelopes, append-only/tamper-evident log, source lineage and replay protection |
| Operations | Incident response, monitoring, continuity, independent security review and penetration tests |

## Phased build
**P0 (this PR):** Synthetic-only TypeScript passport, task contract, deterministic deny/review/allow policy, local adapter, illustrative evidence event and negative tests. This is an in-process demonstration, not a secure enforcement perimeter.

**P1:** Formal JSON Schema and OpenAPI contracts; protocol version negotiation; session start/stream/cancel/resume; contract-test runner across two independent adapters.

**P2:** Separate tool gateway with default-deny policy, short-lived audience-bound credentials, tenant-specific keying, signed approval tokens, revocation and network egress restrictions. External red-team review required.

**P3:** AIONKG ingest with signed hash-chained events, canonical source IDs, retention controls and independently verified attestations. Separate source claims from agent-generated assertions.

**P4:** Private/on-prem inference option, approved cloud residency, provider failover, disaster recovery, threat modeling, compliance assessment and measured operating costs.

**P5:** Healthcare production readiness: consent/authorization, HIPAA security and privacy assessment where applicable, BAAs, clinical governance, qualified reviewer identity, EHR permissions, clinical safety cases and regulatory classification.

## Adapter evaluation
HarnessRouter must pass start/stream/cancel/resume, no credential leakage, enforced per-tool authorization, tenant separation, complete event export, failure recovery and removal/replacement tests. A direct/local adapter must run the same AION-UHP task without changing application workflows.

## First use case
Synthetic WoundOS documentation quality: read fictional wound record → identify missing fields → propose non-diagnostic clarification → require reviewer → block EHR write and claim submission → export evidence manifest. Never infer HCCs or submit claims from wound images.

## Critical gaps
The current demo does not authenticate a caller, sign events, persist an immutable audit trail, isolate tenants, enforce tool boundaries or validate clinical outcomes. Passing unit tests cannot close these gaps.
