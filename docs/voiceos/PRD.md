# GitHealth VoiceOS™ — Product Requirements Document v0.1

**Status:** Proposed / synthetic-only engineering scaffold. **Owner:** Absolute Health Group / GitHealth. **Assurance brand:** Yovak Healthcare™ (successor positioning for separately branded AION governance). **Flagship:** ANIKA™ Voice Navigator.

## Purpose
Build a multi-tenant healthcare agent creation workspace: **Your Brand. Your Voice. Your Agent.** Customer organizations control agent identity, voice configuration, approved knowledge, workflows, deployment and oversight. GitHealth handles creation/conversation; Yovak independently evaluates whether actions may execute.

## Existing code mapping (verified on main, 2026-11-01)
- `src/pages/AnikaVoiceOSPage.tsx` — working **scripted, synthetic-only browser demonstration** using browser speech APIs when available, scenario responses, simulated task queue and downloadable local audit JSON. No realtime model or server-side policy.
- `src/pages/GitHealthNavigatorStudioPage.tsx` — **conceptual marketing/architecture page**, not a working multi-tenant studio or EHR integration.
- `src/pages/GitHealthDevelopersPage.tsx` — developer workshop marketing; references a **separate** `E2kk111/githealth-agent-sdk` repository; no proof its draft SDK is deployed.
- `src/App.tsx` — existing routes: `/githealth/voiceos`, `/githealth/navigator-studio`, `/githealth/developers`.
- Root `package.json` — React 18, Vite, TypeScript; no verified WebRTC voice backend, tenant auth, managed knowledge ingestion, or Yovak gateway.

## User roles
Platform admin, organization admin, agent creator, clinician approver, auditor, end user. Every role is tenant-scoped and subject to independently verified authentication. An agent cannot grant itself authority.

## MVP modules / acceptance
| Module | Required capability | Acceptance evidence |
|---|---|---|
| Workspace | tenant isolation, roles, organization settings | cross-tenant reads/writes denied |
| Voice Studio | browser session, interruption, reconnect, authorized voice selection | synthetic live-session traces and browser tests |
| Agent Studio | versioned instructions, model/tool configuration, rollback | signed version ID and rollback test |
| Knowledge Studio | approved docs, permissioned retrieval, citations | unauthorized document never retrieved |
| Workflow Studio | typed tools, approvals, handoff | denied call never reaches downstream tool |
| SimLab | synthetic safety, prompt injection, failure regressions | versioned test suite with reports |
| Command Center | sessions, usage, cost, errors, audit access | tenant-scoped metrics with redaction |
| Yovak | identity, policy evaluation, revocation, provenance | independent server-side fail-closed checks |

## ANIKA synthetic demonstration
1. Create sample organization workspace and branded agent configuration.
2. Select an authorized demo voice; attach approved synthetic education content.
3. Start synthetic conversation; display retrieved source.
4. Attempt an appointment or clinical action requiring permission.
5. Gateway rejects unauthorized action **before** tool execution; record structured denial.
6. Simulate approved human handoff. Never claim appointment booking or clinical notification occurred.

## Non-goals for first release
No PHI, live EHR integration, actual appointment booking, autonomous diagnosis, prescribing, billing, claims submission, emergency dispatch, real clinician credential verification, production voice provider or compliance certification.

## Release gates
**Developer preview:** synthetic-only, repeatable tests, explicit mock labels, no real actions. **Controlled pilot:** independently reviewed tenant isolation, authenticated gateway, clinical safety, agreements, privacy/security assessment, vendor controls, operational support. **Production:** threat model, penetration test, logging/retention, incident response, clinical approvals and evidence of effectiveness.

## Metrics
Denied tool execution rate (target: 100% for defined forbidden cases), tenant escape tests (target: 0 successful), handoff completion, source attribution, p50/p95 latency, reconnect reliability, cost per completed conversation, configuration time. Targets are proposed, not measured outcomes.

## Delivery plan
Days 1–30: source audit, workspace schema, agent versions, synthetic voice flow.
Days 31–60: server-side Yovak policy gateway, permissions, knowledge boundaries, approval workflow, SimLab.
Days 61–90: embeddable widget, TypeScript SDK, telemetry, secure preview and operational runbooks.

## Open decisions
Confirm authoritative agent SDK repository, hosting/auth architecture, voice provider and HIPAA contractual suitability, approved clinical content owners, event store, consent model, brand migration strategy, and independent security/clinical reviewers.
