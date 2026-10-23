# GitHealth™ — Verified Navigator & Commerce Launch Blueprint

**Status:** Proposed implementation specification (not deployed or clinically validated)  
**Owner:** Absolute Health Group / GitHealth product and engineering  
**Updated:** 2026-10-23  
**Target:** Provider-first MVP; public website may describe the research-stage offering without implying it is live.

## Decision

Build **one multi-tenant GitHealth platform** with four connected product surfaces:

1. **GitHealth Creator Studio™:** Consent-based avatar templates, education assets, courses, and media production.
2. **GitHealth Navigator Studio™:** Provider-branded, clinician-governed AI navigation, approved knowledge, patient education, appointment preparation, and human handoffs.
3. **GitHealth Exchange™:** Software subscriptions, licensed education/media, and authorized digital-product commerce. Do not sell referrals or imply medical services are retail purchases.
4. **AION™ + MedLedger™:** Proposed authorization, provenance, human decisions, resource evidence, and transaction reconciliation. These are not represented as production systems.

**First commercial release:** GitHealth Verified Navigator™ (verified provider identity + consented avatar + approved education + human review queue + audit trail). Do not gate provider pilot launch on the entire marketplace or on federal contracting.

## Repository boundary

This repository currently contains the **Absolute Health Group React/Vite public website**, not an established production GitHealth backend. Treat this document as the GitHealth build contract and a possible website integration plan; **do not introduce PHI collection, live clinician claims, payment handling, or a simulated service represented as real** into the public website. Confirm ownership/location of the actual Navigator Studio source before implementing features there.

## Identity & verification

**Sources**
- NPPES/NPI Registry: https://npiregistry.cms.hhs.gov/
- CMS Data Catalog: https://data.cms.gov/search
- CMS Doctors & Clinicians data: https://data.cms.gov/provider-data/topics/doctors-clinicians
- CMS CCSQ QualTech: https://www.cms.gov/cms-ccsq-qualtech-0

**Validation states:** `unverified` → `pending` → `verified`; also `expired`, `suspended`, `rejected`.

**Required fields:** provider UUID, individual vs organization NPI type, NPI, legal name, taxonomy, specialty, source snapshot/time, state license verification and expiration, affiliation confirmation, practice organization, identity proof, likeness/voice authorization, named clinical owner, escalation coverage, verification reviewer and audit event.

NPI check-digit validity and an NPPES match **do not** prove licensure, privileges, identity ownership, Medicare participation, or permission to impersonate a provider. Public CMS records are discovery and reconciliation sources, not opt-in authorization. Store separate statuses and evidence. Never claim Northwestern Medicine or any other directory-listed organization is a GitHealth partner without authorization.

**Publication gate:** A patient-facing provider-branded navigator cannot be activated until identity, licensing/scope as applicable, organization/clinical-owner authorization, voice/likeness rights, approved knowledge, and escalation coverage have been verified and remain current. Revoke or suspend on expiration or consent withdrawal.

## Minimum patient and clinician journey

1. Organization administrator requests onboarding and identifies a clinician.
2. Verification reviewer matches NPI and independently checks credentials/affiliation/consent.
3. Clinician creates a navigator from an original or licensed template, approves education content and policy version, and assigns the human care team.
4. Patient sees verified provider information **and a prominent AI disclosure**; may receive bounded education and navigation, not diagnosis, prescription, or autonomous treatment changes.
5. A clinical/medication question creates a tracked handoff with priority, assigned human, acknowledgement SLA, fallback, and patient-facing status.
6. Authorized clinician reviews, responds, and closes the case; AION-style evidence log records the decision.
7. AI conversation duration, qualifying human work, and billing review are distinct records. No AI minutes count as human service time.

**Emergency:** Provide immediate emergency-care instructions and do not queue as routine or imply that an AI triage decision replaces emergency services.

## Product routes

| Route | Purpose |
| --- | --- |
| `/githealth` | Public research-stage product and provider interest |
| `/providers` | Participating providers only, with authorization and source attribution |
| `/providers/:id` | Verified profile, affiliation, disclosure and navigator |
| `/studio/verification` | Credential and consent review (restricted) |
| `/studio/navigators/:id` | Clinician-controlled avatar, content and policies |
| `/navigator/:id` | Patient-facing navigation (only after launch gates) |
| `/clinical/queue` | Assigned human escalation work queue |
| `/clinical/cases/:id` | Human case review and outcome |
| `/exchange` | Approved digital-product catalog |
| `/governance/audit` | Evidence and authorization trail (restricted) |

Routes are **proposed**, not confirmed to exist.

## Suggested data model

`organizations`, `providers`, `provider_verifications`, `provider_affiliations`, `consent_authorizations`, `avatars`, `knowledge_assets`, `knowledge_approvals`, `navigator_policies`, `patient_interactions`, `escalation_cases`, `escalation_events`, `human_service_logs`, `billing_review`, `audit_events`, `source_registry`, `commerce_products`, `orders`, `licenses`, `payment_reconciliations`.

Every tenant-owned record has `organization_id`; clinical objects require least-privilege access and documented retention. `source_registry` records URL, data publisher, dataset version, reporting period, fetched timestamp, and validation state. Use append-only audit events with actor, action, policy version, time, and evidence reference.

## Recommended implementation

- **UI:** existing React/TypeScript frontend patterns or a dedicated Next.js application, not both without an explicit integration plan.
- **Backend:** typed server API, PostgreSQL, migrations, tenant isolation, MFA, RBAC and human review permissions.
- **CMS integration:** server-side NPPES lookup; normalize Type 1/Type 2, taxonomy and location; schedule refresh; handle duplicates and API failures.
- **Clinical interoperability:** FHIR R4/SMART on FHIR sandbox with synthetic patients first; vendor-specific capabilities require separate verification.
- **AI:** approved, versioned knowledge retrieval; policy-based guardrails; no uncontrolled clinical advice; explicit human review.
- **Avatar:** rights-verified original/licensed avatar; Genies is only a potential collaborator, not an integrated or HIPAA-validated vendor.
- **Commerce:** established payment provider for digital subscriptions; no referral-linked fees, real clinical claims, or x402 financial transfers in MVP.
- **Security:** no PHI in public demo, secrets only server-side, encryption, access logging, incident response, vendor diligence and HIPAA agreements before real patient data.

## 90-day gated backlog

### Phase 0 — Existing system readiness (days 1–10)
- [ ] Identify the canonical GitHealth app repository and code owner.
- [ ] Repair any existing TypeScript/build errors and verify CI, navigation and accessibility.
- [ ] Confirm backend, authentication, database and deployment ownership.
- [ ] Keep all demos synthetic and label prototype-only functionality.

### Phase 1 — Verified provider foundation (days 11–30)
- [ ] Provider organization onboarding and NPPES lookup with provenance.
- [ ] Independent license/affiliation verification workflow and avatar consent.
- [ ] Provider profile with explicit verification states and expiration controls.
- [ ] Navigator draft, clinician-approved knowledge and activation gates.
- [ ] Synthetic patient conversation, clinical handoff, human review and audit demo.

### Phase 2 — Design-partner beta (days 31–60)
- [ ] Subscription and implementation contract workflow (test mode first).
- [ ] 3 synthetic specialty navigator demonstrations (primary care/AWV, wound care, rehab or oncology).
- [ ] 5–10 provider design-partner discussions; target funded pilot with named clinical owner.
- [ ] Instrument handoff acknowledgement, resolution time and content-approval coverage.

### Phase 3 — Commercial validation (days 61–90)
- [ ] Evaluate security and legal readiness for any live-data pilot.
- [ ] Measure onboarding cost, gross margin, engagement and clinician workload.
- [ ] Publish a limited Exchange catalog for licensed digital products.
- [ ] Decide whether to scale toward 10 paying partners based on actual contracts and results.

## Commercial hypotheses (not verified prices)

Independent practice: **$299/month + $1,000 setup**; specialty practice: **$799/month + $2,500 setup**; group/rural clinic: **$1,999/month + $5,000 setup**; enterprise: custom. Creator Studio: $99–299/month; marketplace fees: 5–15% only on legally appropriate digital commerce. Exclude professional fees and payer reimbursement from platform ARR.

## CMS / federal opportunity track

Use CMS QualTech priority areas (patient safety, AWV, digital measures, public quality comparisons) as a **parallel research and procurement track**, not evidence of CMS endorsement, procurement eligibility or a funded contract. Prepare a synthetic QualityShield demonstration, source-linked public-data dashboard, and capability statement; monitor official federal contracting channels.

## Acceptance tests

- [ ] Invalid NPI fails check-digit validation; valid format does **not** display a verified badge without source and credential checks.
- [ ] A public provider record without explicit authorization cannot activate a branded navigator.
- [ ] Expired license, revoked avatar consent or absent human coverage suspends patient-facing access.
- [ ] Patient sees AI disclosure and the accountable practice/provider.
- [ ] Medication-change question cannot generate an autonomous treatment instruction.
- [ ] Escalation gets assigned owner, acknowledgement deadline, fallback and audit trail.
- [ ] Emergency signals bypass routine queue with appropriate urgent instruction.
- [ ] AI time and human service time cannot be conflated in billing review.
- [ ] Public demos contain no PHI or false claims of live integrations/partnerships.
- [ ] Build, typecheck, lint, mobile/desktop navigation and clinical/legal/privacy copy approvals pass before public release.

## Engineering ownership / definition of done

**Product:** approve scope, flows, design partners and pricing hypotheses.  
**Engineering:** working code, migrations, tests, CI and documented deployment evidence.  
**Clinical lead:** approve educational scope, escalation rules, staffing and safety cases.  
**Compliance/legal:** review credentialing, privacy, AI disclosures, contracting, professional independence, reimbursement and commercial terms.  
**Operations:** define staffing, coverage, response SLAs and support.  

A feature is **done** only when deployed in an approved environment, verified with evidence, and explicitly approved by the responsible owner. This document alone is not proof of implementation.
