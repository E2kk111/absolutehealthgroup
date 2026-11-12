# ANIKA™ VoiceOS — Voice-only depression research

Status: proposed research scope; no diagnostic model or clinical validation delivered by this update.

## Product direction

ANIKA supports natural conversation and authorized care coordination. Its long-term research ambition is clinically validated depression assessment through speech. Initial research focuses on two separately evaluated populations:

| Program | Population | Intended research target |
| --- | --- | --- |
| Oncology–depression | People with an established cancer diagnosis | Depression assessment and longitudinal change |
| CHF–depression | People with established congestive heart failure | Depression assessment and longitudinal change |

Cancer and CHF establish study eligibility. Neither cancer detection nor CHF diagnosis or decompensation detection is an intended use of these initial studies. Anxiety and the broader candidate portfolio remain outside this initial scope.

## Voice-only measurement boundary

The proposed model receives consented speech, including spoken symptom reports, standardized speech tasks and candidate acoustic/language features. No laboratory, imaging, camera, rPPG or wearable data enter this measurement pipeline. An independent clinician depression assessment supplies the study reference label; it is withheld from model inputs. Eligibility and confounder metadata support study design and evaluation rather than becoming hidden predictive inputs.

Candidate features include pitch variation, pauses, speaking rate, vocal energy and language patterns. Personal-baseline comparison is optional and requires compatible recording protocols and sufficient usable recordings. An unusable or incompatible recording produces an explicit no-result state.

## Proposed governed pipeline

1. ANIKA records study-specific consent and guides voice collection.
2. AION authorizes collection, analysis, access and retention independently of the conversation runtime; withdrawal blocks future processing under the protocol.
3. Audio quality checks identify clipping, noise, insufficient speech, overlapping speakers and unsupported conditions before feature extraction.
4. Research-only `analyze_voice_biomarkers` and `compare_voice_baseline` tools return versioned candidate features, quality status, uncertainty and source references. These tool contracts are proposed here, not implemented by this change.
5. AIONKG links recordings, consent scope, feature definitions, software/model versions, failures, reviewer decisions and reference assessments.
6. Authorized researchers and clinicians review research outputs. Experimental scores do not trigger care actions during validation. Patient-reported concerns follow independently approved care workflows.

## Evidence gates

Write and approve a separate protocol for each population before enrollment. Define intended use, recruitment, recording tasks, reference assessment timing, endpoints, sample-size rationale, retention and withdrawal handling, and advancement/stop criteria.

Compare a spoken symptom-report baseline with the same baseline plus prespecified speech features. Split data by participant, prevent repeat-recording leakage, and use independent site validation before clinical claims. Prespecify sensitivity, specificity, predictive values at the intended prevalence, calibration, uncertainty, false-alert burden and unusable-audio rates. Report failures and subgroup performance, including language, age and recording conditions.

Account for treatment effects, fatigue, pain, breathlessness, medications and other factors that could obscure depression-specific signals. Oncology and CHF results must be reported separately. Evidence in one population does not validate the other. Clinical reference assessments remain necessary to establish whether a voice-only measurement is accurate.

## Current implementation and next release

`src/pages/AnikaVoiceOSPage.tsx` is a synthetic care-coordination prototype using browser transcription, browser speech synthesis and scripted keyword responses. It does not retain a research audio dataset, extract acoustic features, run a diagnostic model or connect to a clinical service. Its existing rehabilitation scenario is a conversation demonstration, not an enrolled study participant.

Next release: implement a synthetic audio pipeline with explicit quality failures, provenance, version tracking and baseline compatibility checks; then prepare the two indication/population-specific protocols. Synthetic engineering checks establish software behavior, not clinical validity. Any future diagnostic claim requires product-specific clinical validation and applicable regulatory review. No FDA qualification or authorization is claimed for ANIKA.
