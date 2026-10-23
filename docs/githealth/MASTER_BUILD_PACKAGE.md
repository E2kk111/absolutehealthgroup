# GitHealth™ Master Build Package
**Version:** 1.0 · **Date:** 2026-10-23 · **Status:** Developer-ready specification, NOT deployed software  
**Program:** GitHealth Verified Navigator™ (Release 1); Creator Studio™ and Exchange™ (later releases)  
**Parent:** [Launch Blueprint](./VERIFIED_NAVIGATOR_LAUNCH_BLUEPRINT.md)

## 0. Executive decision and boundaries

**Build one multi-tenant provider-first platform.** A participating provider can be identified through CMS NPPES, independently verified and authorized, create a practice-branded AI Navigator, approve its education and safety policies, and route patient requests to named human care staff with an evidence trail.

**Release 1 success:** One authenticated demonstration organization, one authorized synthetic provider, a real NPPES lookup for identity matching, a synthetic navigator conversation, a clinician review task with acknowledgement/closure, and an auditable record. Demonstration data must never be represented as live clinical care.

**Not in Release 1:** autonomous diagnosis/prescribing, Medicare claim submission, live PHI, unrestricted EMR access, clinical referral marketplace, automated revenue sharing, x402 settlement, a full Genies integration, or production deployment of AION/MedLedger. CMS alignment is not CMS approval or an awarded contract.

**Repository note:** `E2kk111/absolutehealthgroup` currently holds the Absolute Health Group React/Vite public website. Before implementation, confirm whether GitHealth app source belongs here or in a separate canonical repository. This document is an implementation contract; it does not introduce new working routes or integrations by itself.

## 1. Personas, roles and authorization

| Role | Scope | Allowed | Forbidden |
|---|---|---|---|
| Public visitor | Public catalog | Search participating profiles, view disclosed content | See PHI, internal review tasks |
| Patient | Own encounter | Interact with authorized navigator, request human help, view own request status | Review others' cases |
| Provider | Verified practice | Approve own navigator/knowledge, review assigned cases, suspend avatar | Override identity or license verification |
| Clinical navigator/staff | Assigned team | Acknowledge, document, escalate tasks | Prescribe or change treatment without authorization |
| Organization admin | Own tenant | Invite members, configure queues and subscription | Self-certify provider credentials without reviewer checks |
| Credential verifier | Credentialing | Validate identity, license, affiliation, consent | Make patient clinical decisions |
| Clinical safety owner | Approved organization | Approve escalation policies, content scope and emergency handling | Bypass audit |
| GitHealth platform admin | Platform metadata | Manage tenants, infrastructure and support | Routine access to patient content; break-glass only under policy |
| Finance/commerce admin | Own tenant | Manage approved product catalog, entitlements and reconciliation | Alter clinical evidence |
| AI service account | Explicit least-privilege actions | Retrieve approved content, create triage tasks, append events | Claim clinician identity, approve clinical decisions, mark human time |

**Enforcement:** RBAC plus organization-scoped resource authorization (ABAC); server-side checks on every API route; deny by default. Use MFA for privileged roles, least privilege, short-lived sessions, documented break-glass procedures and audit logging. No client-side-only authorization.

## 2. Prioritized functional requirements

| ID | Requirement | Release | Priority |
|---|---|---|---|
| ID-01 | NPI format/check-digit check; server-side NPPES lookup and Type 1/Type 2 distinction | R1 | P0 |
| ID-02 | Store source response hash, fetched time, taxonomy, locations, match confidence | R1 | P0 |
| ID-03 | Independent license, identity ownership, practice affiliation and authorization review | R1 | P0 |
| ID-04 | Verification states: unverified, pending, verified, expired, suspended, rejected | R1 | P0 |
| ID-05 | Consent for provider likeness/voice; withdrawal suspends affected avatar | R1 | P0 |
| NAV-01 | Create draft avatar with branding, specialty, voice/style choice, clinical owner | R1 | P0 |
| NAV-02 | Clinician-approved, versioned education library and safe-response boundaries | R1 | P0 |
| NAV-03 | Publication gate requires current verification, consent, approved content and staffed escalation | R1 | P0 |
| PAT-01 | Prominent AI disclosure and accountable practice/provider identity | R1 | P0 |
| PAT-02 | Synthetic patient conversation with approved information only | R1 | P0 |
| HITL-01 | Clinical-risk classification and case creation; no autonomous medication change | R1 | P0 |
| HITL-02 | Assigned human, priority, SLA, acknowledgement, fallback, closure | R1 | P0 |
| HITL-03 | Emergency safety guidance bypasses routine queue | R1 | P0 |
| GOV-01 | Append-only evidence trail for verification, content, decisions and case status | R1 | P0 |
| OPS-01 | Staff queue, patient status, alerts and review metrics | R1 | P1 |
| INT-01 | FHIR R4/SMART sandbox with synthetic records; scoped read-only first | R2 | P1 |
| CMS-01 | CMS provider-data matching and source-linked quality comparisons | R2 | P1 |
| CR-01 | Creator Studio media templates, rights management and licensing | R3 | P1 |
| EX-01 | Digital storefront, test-mode checkout, entitlements, subscriptions | R3 | P1 |
| FIN-01 | Payment reconciliation and audit; no clinical fee-splitting automation | R3 | P1 |

**Nonfunctional requirements:** accessible keyboard/mobile UX (WCAG 2.2 AA target), structured logs, health checks, monitored errors, versioned APIs, encrypted data, tenant isolation, idempotent writes, retryable integration failures, testable recovery, backup/restore procedures, dependency scanning and protected CI. Define numerical SLOs only after measurement in a controlled environment.

## 3. User journeys and screens

| Route (proposed) | Audience | Primary actions | Empty/error states |
|---|---|---|---|
| `/githealth` | Public | Explore product, request demo | Clearly mark prototype and no patient-data collection |
| `/providers` | Public | Search opted-in providers by name/specialty/location | No match; source unavailable; not participating |
| `/providers/:id` | Public | See verified provider and authorized navigator | Suspended/expired status removes launch CTA |
| `/onboarding/organization` | Org admin | Create tenant, accept agreements, assign admins | Validation and duplicate organization |
| `/studio/verification` | Verifier | Search NPI, compare records, verify evidence | API timeout, conflicting name, license expired |
| `/studio/navigators/:id` | Provider | Edit identity, content, policies, preview and submit for review | Cannot publish while a gate fails |
| `/navigator/:id` | Patient/demo | View disclosure, approved education, request help | Escalation unavailable, urgent guidance, suspended navigator |
| `/clinical/queue` | Staff | Filter, claim, acknowledge, reassign cases | Empty queue, overdue warnings |
| `/clinical/cases/:id` | Staff/provider | Review evidence, document disposition, close | Unauthorized, stale update, missing coverage |
| `/governance/audit` | Authorized auditor | Filter actor, resource, policy and timestamps | Redacted sensitive fields |
| `/exchange` | Public/org buyer | Discover licensed digital products | R3 feature flag; no clinical referrals for sale |

### Screen contract: Provider profile
Header: legal display name, specialty, organization, verified badge only when all gates current; NPI record/source timestamp; license jurisdiction and last verified date; affiliation evidence summary; named accountable clinician/team; avatar authorization status; AI disclosure; human contact/escalation action. Never display private license artifacts or sensitive credential documents publicly.

### Screen contract: Navigator builder
Tabs: Identity, Appearance, Approved Knowledge, Workflows, Clinical Escalation, Governance, Preview, Publish. Publish button disabled until verification + rights + content approval + coverage gates pass; display specific unmet requirements.

### Screen contract: Human review
Case ID, risk/priority, summary, assigned human, due time, status history, safe context, acknowledgement button, reassign/escalate, clinician disposition, closure notes, audit timeline. Distinguish simulated vs actual cases prominently.

## 4. Architecture and service boundaries

```text
Web UI (public + authenticated provider portal)
  |
API Gateway / Identity / RBAC / Tenant guard
  |-- Provider Registry & Verification --> NPPES + independent licensing/affiliation review
  |-- Navigator & Content Service -----> versioned approved knowledge
  |-- Conversation Service ------------> model gateway + retrieval + safety policy
  |-- Escalation Service ---------------> durable work queue + coverage/SLA
  |-- Evidence/Audit Service -----------> append-only events + source registry
  |-- Commerce Service [R3] -----------> external payments + entitlements
  |-- FHIR Adapter [R2] ---------------> sandbox EMR, scopes + provenance
  |
PostgreSQL (tenant scoped), object storage, queue, monitoring
```

Prefer a modular monolith with typed API and PostgreSQL for R1; split services only when scale or organizational boundaries justify it. Use existing React/Vite UI conventions if implementation stays in the current repo; do not force a framework migration.

### Environment gates
- `demo`: synthetic data only; no PHI, no actual clinician paging, no real payments.
- `staging`: controlled test accounts, sandbox APIs, mock integrations.
- `production`: blocked until legal/privacy/security/clinical approvals, vendor BAAs as needed, penetration/security review, staffed escalation coverage and operational incident runbooks.

## 5. Database schema (PostgreSQL reference DDL)

This is a **minimum normalized starting schema**, not a final migration. Additional access controls, retention and encryption policy are required. IDs are UUIDs, timestamps UTC, and all tenant-owned tables must enforce row-level security (RLS) or equivalent server-side tenant policies.

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_subject text UNIQUE NOT NULL,
  display_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE memberships (
  organization_id uuid NOT NULL REFERENCES organizations(id),
  user_id uuid NOT NULL REFERENCES users(id),
  role text NOT NULL CHECK (role IN ('org_admin','provider','clinical_staff','verifier','clinical_owner','finance_admin')),
  PRIMARY KEY (organization_id,user_id,role)
);

CREATE TABLE providers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  npi varchar(10) NOT NULL CHECK (npi ~ '^[0-9]{10}$'),
  entity_type smallint NOT NULL CHECK (entity_type IN (1,2)),
  legal_name text NOT NULL,
  specialty text,
  verification_status text NOT NULL DEFAULT 'unverified'
    CHECK (verification_status IN ('unverified','pending','verified','expired','suspended','rejected')),
  verification_expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id,npi)
);

CREATE TABLE source_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES providers(id),
  source_name text NOT NULL,
  source_url text,
  source_version text,
  fetched_at timestamptz NOT NULL,
  payload_sha256 text NOT NULL,
  verification_note text
);

CREATE TABLE verification_evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid NOT NULL REFERENCES providers(id),
  evidence_type text NOT NULL CHECK (evidence_type IN ('nppes_match','license','identity','affiliation','practice_authorization')),
  status text NOT NULL CHECK (status IN ('pending','passed','failed','expired')),
  reviewed_by uuid REFERENCES users(id),
  verified_at timestamptz,
  expires_at timestamptz,
  source_record_id uuid REFERENCES source_records(id),
  evidence_reference text
);

CREATE TABLE avatar_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid NOT NULL REFERENCES providers(id),
  consent_type text NOT NULL CHECK (consent_type IN ('likeness','voice','brand')),
  authorized_by uuid NOT NULL REFERENCES users(id),
  granted_at timestamptz NOT NULL,
  revoked_at timestamptz,
  rights_reference text NOT NULL
);

CREATE TABLE navigators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  provider_id uuid NOT NULL REFERENCES providers(id),
  clinical_owner_id uuid NOT NULL REFERENCES users(id),
  name text NOT NULL,
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft','review','approved','active','suspended')),
  knowledge_version text,
  policy_version text NOT NULL,
  ai_disclosure_enabled boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE knowledge_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  title text NOT NULL,
  content_reference text NOT NULL,
  version text NOT NULL,
  approved_by uuid REFERENCES users(id),
  approved_at timestamptz,
  expires_at timestamptz
);

CREATE TABLE escalation_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  navigator_id uuid NOT NULL REFERENCES navigators(id),
  patient_reference text NOT NULL, -- synthetic opaque reference in R1
  reason text NOT NULL,
  priority text NOT NULL CHECK (priority IN ('routine','urgent','emergency')),
  status text NOT NULL DEFAULT 'created'
    CHECK (status IN ('created','triaged','assigned','acknowledged','in_review','resolved','closed','overdue')),
  assigned_user_id uuid REFERENCES users(id),
  due_at timestamptz,
  acknowledged_at timestamptz,
  resolved_at timestamptz,
  disposition text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id),
  actor_id text NOT NULL,
  actor_type text NOT NULL,
  resource_type text NOT NULL,
  resource_id text NOT NULL,
  action text NOT NULL,
  policy_version text,
  evidence_reference text,
  occurred_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX escalation_open_idx ON escalation_cases (organization_id,status,due_at);
CREATE INDEX provider_npi_idx ON providers (npi);
CREATE INDEX audit_resource_idx ON audit_events (resource_type,resource_id,occurred_at);
```

**Migration additions before live use:** enforced RLS on all tenant tables, composite tenant-aware FKs or equivalent invariant checks, status transition constraints, audit write protection, encrypted sensitive references, retention/deletion workflow, consent withdrawal propagation, staff coverage schedules, idempotency keys, source snapshot retention, and patient identity management. `patient_reference` is synthetic only in R1.

## 6. API contract (v1 REST; JSON; OpenAPI to be generated from implementation)

**Shared conventions:** `Authorization: Bearer <token>`; `X-Organization-Id` for tenant context (verified against token); `Idempotency-Key` for writes; UUID IDs; ISO-8601 timestamps; pagination via cursor. Every endpoint checks role + tenant. Errors: `{ "error": { "code": "VERIFICATION_REQUIRED", "message": "...", "requestId": "..." } }`. No raw PHI in logs.

| Method | Endpoint | Actor | Contract / outcome |
|---|---|---|---|
| GET | `/v1/providers/lookup?npi={npi}` | Verifier/org admin | NPPES source snapshot, match candidates, **not** a verified badge |
| POST | `/v1/providers` | Org admin | Create pending record; returns provider UUID |
| GET | `/v1/providers/{id}` | Authorized user | Profile + verification state + source dates |
| POST | `/v1/providers/{id}/evidence` | Verifier | Record independently reviewed credential evidence |
| POST | `/v1/providers/{id}/verification-decision` | Verifier | Approve/reject with reasons and expiry |
| POST | `/v1/providers/{id}/consents` | Authorized provider | Grant signed likeness/voice/brand rights |
| POST | `/v1/providers/{id}/consents/{consentId}/revoke` | Rights owner | Revoke and suspend affected navigator |
| POST | `/v1/navigators` | Verified provider | Create draft navigator |
| PATCH | `/v1/navigators/{id}` | Provider | Update draft brand, content version and policy |
| POST | `/v1/navigators/{id}/submit` | Provider | Request clinical/rights review |
| POST | `/v1/navigators/{id}/activate` | Clinical owner | Server evaluates **all** publication gates |
| POST | `/v1/navigators/{id}/interactions` | Patient/demo | Approved bounded response + risk classification |
| POST | `/v1/escalations` | Patient/AI | Create case, assign queue, due time, audit |
| GET | `/v1/escalations?status=assigned` | Staff | Tenant-scoped paginated work queue |
| POST | `/v1/escalations/{id}/acknowledge` | Assigned staff | Atomic status transition |
| POST | `/v1/escalations/{id}/resolve` | Authorized clinician/staff | Disposition, actor, timestamp, evidence |
| GET | `/v1/audit?resourceId={id}` | Auditor | Filtered immutable event timeline |

**Example NPI lookup response** (synthetic; actual provider data fetched at runtime):

```json
{
  "npi": "1234567893",
  "formatValid": true,
  "registryMatch": "not_checked",
  "providerVerified": false,
  "licenseVerified": false,
  "affiliationVerified": false,
  "avatarAuthorized": false,
  "source": "NPPES",
  "sourceFetchedAt": null,
  "warning": "NPI validation alone does not establish licensure or authorization"
}
```

**Example escalation request** (synthetic):
```json
{
  "navigatorId": "00000000-0000-0000-0000-000000000001",
  "patientReference": "DEMO-PATIENT-001",
  "reason": "Patient requests medication change",
  "priority": "urgent",
  "conversationEvidenceId": "DEMO-CONVERSATION-001"
}
```

**State machine:** `created → triaged → assigned → acknowledged → in_review → resolved → closed`; overdue is a monitored exception, not a substitute for assignment; reassignment and fallback are auditable events. Emergency classification immediately provides emergency-care instructions and must not rely on normal SLA.

## 7. Critical safety and data rules

1. **Identity:** Check-digit validation + NPPES match ≠ current license, clinical privileges, Medicare participation or permission to use likeness. Independently verify each.
2. **Consent:** No real physician/avatar branding or voice clone without signed, revocable authorization.
3. **Clinical:** AI may provide approved education/navigation, but not independently diagnose, prescribe, discontinue drugs, authorize clinical care or sign orders.
4. **Human in loop:** Named staff coverage, SLA, fallback and closure evidence required; display when human support is unavailable.
5. **Billing:** Store AI activity, human service logs and billing eligibility separately. No automatic Medicare billing or treating AI time as human minutes.
6. **Privacy:** No PHI in synthetic prototype, public chat forms, analytics, evidence links or third-party avatar service unless approved controls and agreements are in place.
7. **Claims:** No CMS approval, Northwestern affiliation, Genies/Coinbase partnership, clinical validation or production interoperability claims without evidence.
8. **Commerce:** Professional medical services and referrals are not ordinary marketplace products. Legal review required for remuneration, fee-splitting, anti-kickback and state rules.

## 8. Acceptance tests (test IDs)

| ID | Test | Expected result |
|---|---|---|
| T01 | Invalid 10-digit NPI checksum | 422; no registry request |
| T02 | Valid-format NPI but NPPES unavailable | Source unavailable; never mark verified |
| T03 | Type 2 organization NPI in individual-provider flow | Correct entity-type warning; no clinician avatar activation |
| T04 | NPPES match without license check | Verification remains pending |
| T05 | Provider profile with revoked likeness consent | Navigator immediately suspended |
| T06 | License expired or affiliation withdrawn | Publication blocked; active avatar suspended |
| T07 | Unapproved knowledge version | Navigator cannot activate |
| T08 | No assigned human coverage | Navigator clinical escalation unavailable; no false promise |
| T09 | Patient asks to stop medication | No autonomous treatment change; human review task created |
| T10 | Emergency warning signs | Immediate emergency guidance; not routine queue |
| T11 | Staff acknowledges and closes case | Actor, time, policy and disposition captured |
| T12 | SLA exceeded | Fallback alert/reassignment; immutable event recorded |
| T13 | Cross-tenant provider/case access | 403/404 with no data leakage |
| T14 | AI interaction time recorded | Excluded from qualifying human billing time |
| T15 | Synthetic demo | No PHI, no real clinician contacted, clear demo label |
| T16 | Public profile | Badge shown only with current credential and consent gates |
| T17 | Keyboard/mobile UI | Usable focus, navigation, disclosures and forms |
| T18 | CI | Typecheck, lint, unit tests, integration tests and build pass |
| T19 | API retries | Idempotency prevents duplicate escalation cases |
| T20 | Audit | Unauthorized edits/deletions rejected; events source-linked |

## 9. Phased backlog and delivery owners

### Sprint 0 — Repository and delivery baseline (week 1)
**Engineering:** identify canonical GitHealth app repository, inspect Lovable source/export and current build errors, set CI and staging; document deployment architecture.  
**Product:** approve R1 user journeys, labels and synthetic demo scope.  
**Exit:** build/typecheck/lint pass; ownership, environments and source control confirmed.

### Sprint 1 — Identity & authorization (weeks 2–3)
**Engineering:** migrations, org auth/RBAC, NPPES adapter, source registry, verifier dashboard, independent verification states, consent.  
**Clinical/Compliance:** approve credentialing and rights evidence checklist.  
**Exit:** T01–T06, T13 and T16 pass with reproducible evidence.

### Sprint 2 — Navigator & HITL (weeks 4–5)
**Engineering:** avatar draft, versioned approved knowledge, disclosure, synthetic conversation, safety routing, durable case queue, SLA and audit.  
**Clinical/Ops:** define emergency policy, response coverage, staffing and escalation.  
**Exit:** T07–T12, T14, T15 and T19–T20 pass.

### Sprint 3 — Pilot-ready demonstration (weeks 6–8)
**Engineering/QA:** 3 synthetic specialty demos (primary care/AWV, wound care, rehabilitation), accessible mobile UI, test reports, observability and release runbook.  
**Sales:** provider design-partner demos and documented buyer feedback.  
**Exit:** all T01–T20 pass; clinical/legal/privacy copy sign-off; no unsupported claims.

### Sprint 4 — Controlled commercial beta (weeks 9–12)
**Commercial:** negotiate setup + subscription contracts; target 5–10 design partners and at least one funded pilot.  
**Engineering:** billing/subscription test mode, operations dashboard, support tooling; assess FHIR sandbox integration separately.  
**Compliance:** no real patient data without approved production controls and agreements.  
**Exit:** signed scope, measured onboarding cost, human workload, engagement, retention hypotheses and go/no-go.

### Later releases
- **R2:** FHIR/SMART sandbox, CMS public quality datasets, QualityShield evidence and measurement.
- **R3:** Creator Studio rights/licensing, Exchange digital storefront, test-mode payments, reconciliation.
- **R4:** Enterprise interoperability, advanced AION/MedLedger/x402 experiments under separate regulatory, financial and technical approvals.

## 10. Go/no-go release checklist

- [ ] Canonical repository and deployed environment identified.
- [ ] Provider identity/rights/clinical coverage gate demonstrated end-to-end.
- [ ] Every high-risk interaction routes safely and is auditable.
- [ ] Tenant isolation, security and access reviews passed.
- [ ] Clinical owner approved content and human response policy.
- [ ] Compliance/legal approved privacy, AI disclosure, contracts and claims.
- [ ] Engineering attached CI, screenshots and mobile/desktop smoke evidence.
- [ ] Ops demonstrated on-call ownership, escalation fallback and incident handling.
- [ ] No production claim based solely on this specification.
- [ ] Design-partner agreement has named buyer, funded scope, measurable deliverables and accountable clinical owner.

## 11. Proposed GitHub implementation issue breakdown

1. `GH-001` Confirm canonical GitHealth source and repair baseline build.
2. `GH-002` Organization identity, RBAC, tenant-scoped database migrations.
3. `GH-003` NPPES NPI lookup, Type 1/2, provenance, source refresh.
4. `GH-004` Independent license, affiliation and authorization workflow.
5. `GH-005` Avatar rights and consent/revocation.
6. `GH-006` Navigator builder, approved content and publication gates.
7. `GH-007` Patient demo, disclosure and bounded education.
8. `GH-008` Human escalation queue, SLAs, fallback and clinician closure.
9. `GH-009` AION-style audit events and evidence viewer.
10. `GH-010` End-to-end synthetic demo, safety tests and CI evidence.
11. `GH-011` Paid design-partner onboarding and subscription test mode.
12. `GH-012` Later: FHIR sandbox, Creator Studio and Exchange modules.

**Definition of done:** merged reviewed code + tested environment + CI evidence + approved clinical/legal copy + documented operational owner. An issue being specified or assigned is not evidence it has been built.
