# GitHealth™ Connected Care Studio — phased design and implementation

**Scope:** `/githealth/connected-care` on Absolute Health Group. Synthetic-only client-side proof of workflow; no patient identifiers, persistent storage, network submission, EHR write-back, clinical review authentication, medical device function, or treatment advice.

## Product boundary

```
GitHealth Forms™ (synthetic intake and demo acknowledgment)
  -> ANIKA™ (scripted example conversation, browser speech synthesis)
    -> AION™ (deterministic triage category + simulated human-review queue)
      -> MOTS-c education (research-only, no therapy ordering)
        -> Synthetic event timeline / local JSON export

AIOKN™: FUTURE patient context, consent/provenance and clinical measurements
EHR: FUTURE authorized FHIR / SMART-on-FHIR interface
Realtime ANIKA: separate draft PR #47, not integrated into this workflow
```

## Delivery phases

| Phase | Status | Deliverable | Exit gate |
|---|---|---|---|
| 0 — Synthetic experience | Implemented in this PR | Non-identifying form, bounded symptom choices, scripted ANIKA, simulated reviewer buttons, research education, in-memory audit | CI, accessibility and scenario tests |
| 1 — Real-time voice | Separate draft PR #47 | Optional WebRTC provider adapter, server-issued ephemeral credentials, controlled synthetic testing | Verified security, browser behavior, cost controls, authentication |
| 2 — Clinical-grade workflow integration | Not implemented | Organization SSO, clinician roles, real consent management, task delivery and authenticated review, EHR/SMART-on-FHIR integration | HIPAA legal/security analysis, executed BAAs where required, threat model, EHR vendor certification and end-to-end audit tests |
| 3 — Research education governance | Educational UI implemented; research operations not implemented | Versioned evidence summaries, source provenance, clinician-approved content and independent research consent if study proceeds | IRB/institutional approvals when applicable, protocol, consent and data governance |
| 4 — Investigational biomarkers | Not implemented | Separate protocol for respiratory acoustic feasibility and reference-device comparisons | Prospective validation, bias testing, regulatory assessment; no clinical claims before evidence |

## FDA evidence boundary — MOTS-c

MOTS-c is a mitochondrial-derived peptide investigated in preclinical studies. FDA's July 2026 Pharmacy Compounding Advisory Committee briefing identified **lack of human drug-product data**, insufficient nonclinical safety information and **unknown immunogenicity risk**. Its consideration for compounding does **not** establish an FDA-approved therapy or prove safety and efficacy. Avoid patient-specific advice, doses, routes, sourcing, efficacy promises, prescribing, or implying authorization.

Sources:
- FDA PCAC July 2026 slide briefing: https://www.fda.gov/media/193773/download
- FDA MOTS-c evaluation: https://www.fda.gov/media/193347/download
- Federal Register advisory agenda: https://www.govinfo.gov/content/pkg/FR-2026-04-16/pdf/2026-07361.pdf

## Workflow rules and safety

- All intake options are pre-defined and refer only to **Jordan (synthetic)**. No name, birthdate, address, patient identifier, or free-text PHI fields.
- `classifySymptom` is deterministic and demonstrates *only* routing categories, **not clinical decision support**.
- Severe breathing difficulty or chest pain prompts emergency guidance to contact local emergency services. No notification is sent.
- New shortness of breath prompts an advisory to seek timely clinical review before therapy. No care-team message is sent.
- Review buttons simulate actions and explicitly disclaim actual clinician authorization.
- Research acknowledgment is **not** research consent, medical consent, or enrollment.
- Audit JSON contains only the synthetic scenario; it is not tamper-evident, and the workflow state is not persisted.
- ANIKA speech in this page is browser text-to-speech for scripted text. PR #47's live audio mode is a separate experimental integration.
- This is not a HIPAA compliance claim; a form interface alone cannot establish HIPAA compliance.

## Acceptance scenarios (required before merge)

1. With no acknowledgment, synthetic intake cannot be submitted.
2. After acknowledgment, a routine intake produces a simulated review queue; duplicate submission is disabled.
3. Shortness of breath produces a prompt-review advisory; no external API is called.
4. Severe breathing difficulty produces emergency guidance; no real dispatch is initiated.
5. ANIKA scenarios are disabled until the synthetic intake is submitted.
6. Simulated review or escalation can only occur from pending-review state; the UI never claims a licensed clinician acted.
7. MOTS-c content remains educational, non-prescriptive and explicitly investigational.
8. JSON export contains only synthetic intake, conversation scenarios and event records.
9. Reset clears state and stops browser speech.
10. Validate desktop/mobile layout, keyboard navigation, accessible labels, and all route links.
11. Run `npm ci`, `npm run typecheck`, `npm run lint`, and `npm run build`.
12. Confirm the draft PR is reviewed before merging or deploying; no credentials are needed for this phase.

## Future API contracts (design only, not implemented)

- `POST /intake`: authenticated patient/organization context, verified consent, validated FHIR QuestionnaireResponse, idempotency, provenance and retention policy.
- `POST /conversation-events`: consented transcription references, actor/agent identity, evidence sources, confidence and timestamps.
- `POST /review-tasks`: authenticated role-scoped tasks with escalation policy, immutable event lineage and acknowledgement.
- `GET /research-education/mots-c`: approved versioned evidence statements, citation metadata, review expiry and prohibited claims.
- `AIOKN`: graph projection from authorized source-of-truth systems, never inferred vital signs presented as verified.
- `AION`: external deterministic authority service that signs authorization decisions; model outputs never self-authorize.

Do not enable any future API until organization security, consent, authorization, data processing, retention, monitoring and clinical governance are designed and independently reviewed.
