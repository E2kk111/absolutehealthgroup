# DermalQ™ / DermaIQ SDK — Governed Integration Specification

**Status:** implementation plan based on user-supplied *DermaIQ SDK Guide* (27 pages). The guide documents API surfaces and sample responses. It does **not** establish independent clinical validation, regulatory clearance, PHI security readiness, live payer connectivity, or production uptime.

## Product boundary

- **DermalQ™** — clinical wound-image evidence, measurement, description, longitudinal wound trajectory and clinician-facing decision support.
- **WoundOS™** — wound care pathways, referrals, treatment coordination, follow-up and outcomes.
- **Medical Navigator AI™** — navigate patient-level barriers, urgency and appropriate next work.
- **AION™** — evidence, model/rule evaluation and human authority boundary.
- **PolicyPulse™ + RegOS™** — rule discovery, validation, versioning and applicability.
- **GitHealth™** — governed Workflow Units™, integrations, audit trail and economic metering.
- **ShieldAI™ + Prove™** — evidence sufficiency, provenance, replayable review record.
- **ZScore™ + Economics™** — validated benchmarking and Cost-to-Heal™ modeling.

## Documented SDK surfaces

| Function | Method and path | Operational treatment |
|---|---|---|
| Complete wound analysis | POST `/api/analysis/complete_analysis` | Primary image workflow: segmentation, infection flag, description; require clinical review |
| Segmentation | POST `/api/analysis/segment_wound` | Requires image base64, optional threshold; area in cm² relies on calibrated reference scale |
| Infection classification | POST `/api/analysis/diagnose_infection` | **Model-generated flag, not a diagnosis**; confidence is not a validated clinical probability |
| Wound description | POST `/api/analysis/describe_wound` | Draft clinical description for reviewer correction |
| Treatment plan | GET `/api/treatment/plan/{wound_type}` | Draft protocol only; guide supports infected / not_infected / unknown, not full etiologic diagnosis |
| Provider search | GET `/api/vbc/providers/search` | NPPES lookup, not verification of availability or wound-care competency |
| Policy updates | GET `/api/vbc/policypulse/updates` | Federal Register discovery; proposed ≠ effective ≠ production rule |
| Z-Score | POST `/api/vbc/reimburse/zscore` | Methodology/weights require clinical, actuarial and data validation |
| Preauth check | POST `/api/vbc/reimburse/preauth-check` | Advisory; never assert payer-specific authorization from illustrative threshold |
| Claims list/submit/eligibility/analytics | `/api/vbc/claims/*` | Treat as interfaces only; no claim of live clearinghouse, payer or eligibility integration |
| Enhanced VBC score | POST `/api/vbc/personalize/enhanced-vbc` | Validation, calibration, cohort definition and measure lineage required |
| Agent tools | StreamableHTTP `/mcp` | Tool execution through allowlisted server-side agent broker with human approval for consequential steps |
| Patient context | GET `/api/vbc/fhir/patient/{patient_id}` | **Guide states fallback to synthetic data**: explicit provenance flag and fail closed for clinical use |

Base URL documented: `https://api.dermaiq.org`.

## Critical security and clinical gates before live patient use

1. **Authentication and authorization:** guide describes CORS gating and conditional JWT auth; CORS is not authentication. Require server-enforced tenant/patient-level authorization, short-lived credentials, key rotation and BAA/security review. Never send PHI to the public SDK from a browser.
2. **Image validity:** capture consent, image quality, date, wound site, device and calibrated ruler/reference scale; prevent false precision in cm² when reference scale is missing.
3. **Clinical performance:** evaluate segmentation agreement, infection classification sensitivity/specificity and subgroup performance on representative prospective data; no autonomous infection diagnosis.
4. **Provenance:** store image checksum, model name/version, prompt/config, result, confidence, reference scale, clinician edits, time and authority decision.
5. **Human boundary:** no autonomous diagnosis, order, prescription, procedural decision, prior-auth certification, claim submission or payer eligibility determination.
6. **FHIR:** synthetic fallback must never be silently blended into real clinical context.
7. **Payer rules:** separate proposed, final-future, active and superseded policies; use payer, locality, date-of-service, LCD/NCD and benefit-specific validation.
8. **Payment integrity:** distinguish code presence from coverage, authorization, payment and proof; simulated claims/coverage must be labeled.
9. **MCP:** restrict tool access, log each invocation, enforce schema validation and protect against prompt injection in retrieved records.
10. **Regulatory:** perform intended-use and device/SaMD assessment, privacy review, clinical governance and prospective validation before marketing diagnostic claims.

## Proposed Workflow Unit: WOUND-01

**CAPTURE → MEASURE → ASSESS → CLINICIAN REVIEW → NAVIGATE → DOCUMENT → PROVE**

Minimum evidence packet:
- Patient/episode ID and clinical indication (de-identified in demos)
- Capture timestamp, site, image source, consent and calibration reference
- Segmentation mask, area estimate, model metadata and uncertainty
- Infection flag and draft description, explicitly model-generated
- Clinician-reviewed findings, corrections and signature/attestation
- Care pathway, specialist escalation and follow-up
- Applicable policy version and documentation sufficiency
- Longitudinal area/healing trajectory and outcomes
- Work-unit cost, human-review time, exceptions and Cost-to-Heal™ inputs

## Proposed pilot acceptance criteria

- Representative, consented pilot dataset and IRB/quality review where applicable
- Zero synthetic FHIR context used as real patient data
- 100% consequential recommendations routed through human review
- 100% clinical images with explicit calibration status
- Reproducible audit trail from image to clinician decision
- Prospective measurement agreement and infection flag validation plan approved
- Security/BAA and API authentication gates signed off before PHI transmission
- Coverage/preauth/claims assertions disabled until payer integration and rule validation are demonstrated

## Website claim policy

Use **“SDK-documented interfaces,” “designed to,” “supports clinician review,”** and **“proposed integration.”** Avoid **“FDA-cleared,” “diagnoses infection,” “CMS-approved,” “real-time payer verification,” “guaranteed savings,”** or unvalidated sensitivity, accuracy, approval or ROI metrics.

This spec is not evidence that the SDK endpoints have been tested in the current repository. The new `/dermalq` page is informational and does not send patient data.
