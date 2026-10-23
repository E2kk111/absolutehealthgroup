# GitHealth Verified™ × CMS — Integration Implementation Contract

**Version:** 1.0 | **Date:** 2026-10-23 | **Status:** Proposed; not deployed or clinically validated  
**Application reference:** https://githealth-navigator-studio.lovable.app/  
**Development editor:** https://lovable.dev/projects/41860077-2ec9-4532-9ad9-e7cb2899e675  
**Parent specification:** [GitHealth Master Build Package](./MASTER_BUILD_PACKAGE.md)

## Product outcome

**Know the Provider. Govern the AI. Connect the Patient. Prove the Care.**

The provider identity, scope of authorization, and human clinical accountability must be separately provable. Build three milestones in sequence:

1. **GH-CMS-001 — Provider Registry and Verification Engine:** NPPES lookup, CMS public clinician data matching, independently reviewed credentials and practice authorization, rights and audit.
2. **GH-CMS-002 — Human Clinical Escalation:** bounded AI education, case queue, accountable licensed human, SLA, fallback, emergency behavior, audit.
3. **GH-CMS-003 — Quality Intelligence:** CMS public-data ingestion with dataset provenance, source-linked facility/clinician indicators, synthetic QualityShield demo and quality dashboard.

**Do not equate** NPI issuance, NPPES enumeration, Medicare enrollment, state license, clinical privileges, organizational affiliation, avatar authorization, or participation in GitHealth. These are distinct concepts and require distinct evidence.

## Source systems and purpose

| System | Canonical entry point | Intended use | Limitations |
|---|---|---|---|
| CMS NPPES Registry | https://npiregistry.cms.hhs.gov/ | NPI identity matching, Type 1/2, taxonomy, addresses and source metadata | Not credentialing or authorization |
| NPPES API | https://npiregistry.cms.hhs.gov/api/ | Server-side lookup by 10-digit NPI; confirm supported API version at integration time | Rate limits, outages and changes require handling |
| CMS Provider Data | https://data.cms.gov/provider-data/topics/doctors-clinicians | Public Medicare clinician and practice-group information | Multiple records per NPI; incomplete/dated affiliations |
| CMS Data Catalog | https://data.cms.gov/search | Public datasets for quality, spending, utilization | Data periods, measure specifications and suppression vary |
| CMS CCSQ QualTech | https://www.cms.gov/cms-ccsq-qualtech-0 | Align demos to patient safety, AWV, digital measures and quality comparisons | Industry engagement is not procurement award |
| State licensing authorities | Per-jurisdiction official board | Current professional licensure and restrictions | Must verify relevant jurisdiction and expiry |
| Practice / hospital authorized representative | Verified organization contact | Affiliation, supervising clinician, branding and likeness rights | Not established by NPI alone |

CMS public datasets should be fetched via published export/API methods when available, with explicit license, attribution, refresh, reporting period, suppression and completeness metadata. No private patient information should be submitted to CMS public endpoints.

## GH-CMS-001 — Provider Registry and Verification Engine

### UI flow
1. Organization admin enters NPI and selects Individual (Type 1) or Organization (Type 2).
2. Client performs format and Luhn checksum validation; server repeats validation.
3. Server retrieves the NPPES record; shows source timestamp, legal name, entity type, taxonomies and reported addresses. Never set `verified=true` from NPPES alone.
4. Reviewer reconciles CMS clinician-directory matches **without flattening multiple group/location records**. Show match confidence and missing/unconfirmed enrollment information.
5. Credentialing reviewer independently records identity ownership, applicable license and expiry, disciplinary restrictions as appropriate, and affiliation/privileges confirmation.
6. Authorized representative provides documented practice and avatar/voice/brand authorization. Record rights scope, reviewer, timestamp and revocation.
7. Assign named clinical owner and covered escalation team; approve navigator knowledge and policy version.
8. Only then may server enable the patient-facing navigator; any expiry, revocation or lost coverage triggers suspension.

### Verification state machine
`unverified → pending → verified`; terminal/exception: `rejected`, `expired`, `suspended`. A provider is eligible for an active branded navigator only when all required independent evidence is current. Type 2 organizations are not individual clinicians; Type 1 NPI must not be assumed to imply a licensed physician.

### Required evidence records
`npi`, `entity_type`, `legal_name`, `taxonomies[]`, `practice_locations[]`, `nppes_snapshot_hash`, `nppes_fetched_at`, `cms_directory_matches[]`, `license_authority`, `license_status`, `license_checked_at`, `license_expires_at`, `identity_owner_approval`, `affiliation_confirmation`, `avatar_rights_grant`, `avatar_rights_revoked_at`, `clinical_owner_id`, `human_coverage_policy_id`, `verification_reviewer_id`, `verification_status`, `verification_expires_at`, `audit_event_ids[]`.

### Suggested endpoints (server-side; tenant-scoped)
- `GET /v1/providers/lookup?npi=...` — NPPES lookup with source timestamp; public data only; never a verified badge.
- `GET /v1/providers/{id}/cms-matches` — directory match candidates and multi-affiliation rows.
- `POST /v1/providers/{id}/evidence` — credential reviewer records independently validated evidence.
- `POST /v1/providers/{id}/verification-decision` — explicit reviewer decision and expiry.
- `POST /v1/providers/{id}/consents` and `.../revoke` — rights grant and revocation.
- `POST /v1/navigators/{id}/activate` — server-side publication gate.

### NPPES adapter contract
Input: `{npi: string, expectedEntityType?: 1|2}`.  
Output: `{npi, formatValid, registryMatched, entityType, legalName, taxonomies, practiceLocations, fetchedAt, sourceVersion, warnings, providerVerified:false}`.

Handle invalid NPI (422), missing record (404 or `registryMatched:false`), provider type mismatch (conflict, no activation), upstream timeout (503/retry), ambiguous organization match (pending human review), and stale data (display warning). Store only necessary data; protect secrets and logs. Use deterministic mocked API fixtures in tests.

**Critical:** A real publicly listed physician may be looked up for discovery, but must not be represented by an avatar without independent rights and practice authorization. Northwestern Medicine's directory is UX inspiration only, not a partner feed or consent source.

## GH-CMS-002 — Human Clinical Escalation

### Risk handling matrix
| Input | AI permitted behavior | Required human action |
|---|---|---|
| General approved education | Explain approved material with AI disclosure | Clinical owner preapproves content/policy |
| Appointment preparation / AWV HRA | Guide non-diagnostic preparation and navigation | Human team completes clinical work as applicable |
| New/worsening symptoms | Avoid diagnosis, provide safe escalation instruction | Qualified staff reviews according to approved risk protocol |
| Medication start/stop/dose change | Do **not** authorize changes | Licensed professional evaluates and responds |
| Urgent or emergency red flags | Immediate emergency-care instruction, not routine queue | Follow approved emergency notification policy; never promise continuous monitoring |

### Case state machine
`created → triaged → assigned → acknowledged → in_review → resolved → closed`; `overdue` is an exception alert. Each case requires `organization_id`, `navigator_id`, opaque synthetic patient reference, `priority`, `reason`, `assigned_user_id`, `due_at`, `acknowledged_at`, `resolution`, `human_actor_id`, `policy_version`, `audit_events`.

In a synthetic demo, queue assignment and clinician responses are explicitly simulated. In production, fail closed when no staffed coverage exists; no false implication of a real clinician being paged.

**Billing evidence:** AI interaction events, qualifying human navigation work and practitioner billing review must be separate. Automated AI time never counts as qualifying human time. No automatic claim submission or reimbursement promise.

## GH-CMS-003 — CMS Quality Intelligence

### Products
- **GitHealth Preventive Navigator™ (QualTech Area 2):** AWV outreach, health risk assessment preparation, clinician-approved education and follow-up.
- **GitHealth QualityShield™ (Area 1):** Synthetic documentation/order-gap review with source-linked findings, reviewer decision and corrective-action status.
- **GitHealth QualityAtlas™ (Areas 3/4):** Public-data hospital/provider quality comparisons and later standards-based digital measure calculation.

### Dataset contract
Each dataset import stores: `source_url`, `dataset_id`, `dataset_title`, `publisher`, `downloaded_at`, `reporting_period`, `version`, `checksum`, `measure_definition`, `suppression_policy`, `refresh_status`. Public dashboards must show dates, missing values and non-comparability warnings. Do not infer that a quality indicator represents an individual clinician's competence or current clinical performance without applicable evidence.

### Demonstration scenario
Real public NPPES record → unverified source match → **separate authorized synthetic provider profile** → synthetic AWV conversation → simulated medication-change escalation → simulated licensed human acknowledgement and resolution → AION-style audit timeline → CMS-sourced public quality panel with clear provenance and demo labels.

Do not combine a real provider's name with a fictional avatar or fictional clinical performance in a way that implies their endorsement.

## Integration into current GitHealth Navigator Studio

The published Lovable project is a **prototype reference**, not verified production infrastructure. Its latest known project state is `ready` and `is_published=true`, but this does **not** establish successful TypeScript build of the latest expansion, CMS integration, PHI readiness or working escalation. The previously reported CreatorWorkspace TypeScript issue and credit blocker should be checked in the editor and repaired before feature development.

**Implementation order:** identify canonical source repository/export → run `build`, `typecheck`, `lint` and responsive navigation tests → add server API and tenant data layer → implement GH-CMS-001 → GH-CMS-002 → GH-CMS-003. Do not assume the Absolute Health Group public-site repo contains the Lovable source; confirm GitHub sync before changing unrelated site files.

## Acceptance tests

| Test | Pass criteria |
|---|---|
| CMS-01 | Invalid NPI checksum rejected before lookup |
| CMS-02 | Valid-format NPI with no NPPES record remains unverified |
| CMS-03 | Type 2 NPI cannot activate an individual physician avatar |
| CMS-04 | NPPES success without license/affiliation checks remains pending |
| CMS-05 | Multiple CMS group/location matches are retained as distinct rows |
| CMS-06 | Source outage returns explicit error, not fabricated data |
| CMS-07 | Expired license or revoked avatar consent suspends activation |
| CMS-08 | Provider not participating cannot be shown as a GitHealth clinician |
| CMS-09 | Navigator publishes only with named clinical owner and coverage |
| CMS-10 | AI disclosure shown before first patient interaction |
| CMS-11 | Medication-change request creates a human review case; no autonomous advice |
| CMS-12 | Emergency flags yield immediate safety instructions; not routine queue |
| CMS-13 | Overdue case invokes fallback and records an event |
| CMS-14 | Cross-tenant reads and writes denied |
| CMS-15 | AI activity and human billing time are separate |
| CMS-16 | Quality panels show source, period, version and missingness |
| CMS-17 | Synthetic metrics never labeled real clinical outcomes |
| CMS-18 | Build, typecheck, lint, desktop/mobile and accessibility checks pass |

## Delivery / ownership

**Engineering:** NPPES integration, schema, tests, API, CI and deployment evidence.  
**Clinical lead:** scope, emergency guidance, reviewer roles and escalation coverage.  
**Credentialing/legal:** licenses, affiliations, consent, rights, advertising and compliance review.  
**Operations:** case staffing, SLA/fallback and support.  
**Product/commercial:** provider onboarding, synthetic demo and paid pilot scope.

### Definition of done
Working code in the **confirmed canonical application repository**, tested in a controlled environment, with source timestamps, identity/consent gates, human review, audit, security checks and signed clinical/compliance approvals. **A document or GitHub issue is not implementation.**
