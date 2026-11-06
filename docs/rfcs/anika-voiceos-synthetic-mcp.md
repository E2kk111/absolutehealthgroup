# ANIKA VoiceOS™ — Synthetic-only MCP Reference (v0.1)

**Status:** prototype for engineering and research design, not a clinical or security-validated system.

ANIKA VoiceOS is the first proposed GitHealth interaction experience. This isolated Node.js Model Context Protocol (MCP) reference implements two tools over local JSON-RPC stdio. It accepts **only generated numerical samples**, not uploaded audio, microphone streams, patient speech, transcripts, EHR records, or other patient data. It does not detect anxiety, depression, heart failure, cognitive decline, or any other disorder.

## Ownership and interfaces

- **GitHealth:** agent/session lifecycle and healthcare workflow coordination.
- **AION:** external policy authority and enforcement gateway (not implemented here).
- **AIONKG:** evidence lineage and independently attested records (not implemented here).
- **AION-UHP:** canonical organization-controlled governance contracts; this MCP adapter does not replace UHP.
- **MCP:** tool discovery and local synthetic tool invocation, not authentication or an approval system.
- **HarnessRouter:** optional replaceable runtime, not required by this reference.

## Run

Node.js 22+ with no additional packages:

```bash
node --test tools/anika-voiceos-mcp/core.test.mjs
node tools/anika-voiceos-mcp/server.mjs
```

The stdio server uses newline-delimited JSON-RPC 2.0 messages. It exposes:
- `anika_analyze_synthetic_voice`: fixed-policy authorization, deterministic quality gates, versioned basic signal descriptors and unsigned reproducible SHA-256 provenance.
- `anika_verify_synthetic_provenance`: recomputes a canonical record digest; a match **does not** prove who generated the record or that any underlying data is authentic.

Example initialization:
```json
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"synthetic-test","version":"0.1"}}}
```
Then `tools/list` and `tools/call` using the schemas advertised by the server.

## Quality gates and features

Allowed sample rates: 8 kHz or 16 kHz. Samples: finite normalized numerical values in [-1, 1], 0.1–20 seconds. Fail if more than 1% of values have magnitude ≥0.99, or fewer than 5% exceed magnitude 0.02. Invalid inputs and quality failures do **not** release feature values.

`anika-synthetic-features-v1` calculates duration, RMS amplitude, mean absolute amplitude, peak amplitude, sign-change rate, and above-threshold fraction. These are **engineering signal descriptors**, not validated voice biomarkers. Thresholds are illustrative deterministic QA checks, not evidence-based clinical criteria.

The canonical provenance record includes version IDs, SHA-256 of input sample values, fixed authorization decision, quality results and extracted features. Canonical JSON sorting and fixed rounding make identical inputs yield identical digests. No timestamps are added to the content-addressed record. The reference uses **unsigned hashes**, not signed attestations, secure audit storage or tamper-proof provenance.

## Negative authorization matrix

The tests deny PHI classifications, recorded origin, cross-tenant access, unknown agents, mismatched purpose, clinical diagnosis requests, EHR writes, claim submissions, unexpected fields and unregistered MCP tools. These are in-process synthetic tests, **not** proof of isolation from a hostile runtime. The stdio process has no authentication and must never be exposed as a production network service.

## Required release gates

1. Verify CI conformance and test execution; independently review the MCP protocol handshake, transport and schema handling.
2. Move authorization into an isolated AION policy gateway; enforce at every tool/data boundary using authenticated workload identity and signed, scoped, expiring grants.
3. Add AIONKG event signing, independent provenance verification, controlled storage, replay protection and retention rules.
4. Independently validate data segregation, egress restrictions, secrets isolation and incident response. Obtain privacy/security review and applicable agreements before handling PHI.
5. Define a **separately approved research protocol** before any human voice collection. Obtain IRB/ethics review or documented determination, informed consent, privacy/security assessment, recruitment and exclusion criteria, prospective endpoints, reference standards, bias/subgroup evaluation and an analysis plan.
6. Conduct human studies with appropriate statistical validation and regulatory review before any diagnostic, monitoring, risk prediction or treatment-related biomarker claims.

No clinical claim, patient recruitment, consent collection, IRB approval, data capture or clinical deployment is authorized by this PR.

## Synthetic signal change and follow-up (v0.1)

A third MCP tool, `anika_plan_synthetic_followup`, compares two **generated, hash-matching** synthetic feature records. It accepts only a fixed fictional concern code: `NONE`, `REPORTED_VOICE_CHANGE`, `REPORTED_BREATHING_CONCERN` or `REPORTED_MOOD_CONCERN`. It rejects arbitrary patient text and unverified/tampered inputs.

Its deterministic dispositions are `NO_FOLLOWUP_TRIGGER`, `SIMULATED_REPEAT_MEASUREMENT`, and `SIMULATED_HUMAN_REVIEW`. The illustrative RMS-amplitude delta threshold (0.05) is **not** a medical threshold, disease risk score, biomarker or diagnostic criterion. Self-reported concerns route to a simulated human review queue regardless of the acoustic delta; no actual alert, appointment, referral or message is sent.

The output includes a versioned, content-addressed follow-up plan and an `UNVALIDATED_ENGINEERING_DEMONSTRATION` evidence grade. It is an **unsigned hash**, not proof of authenticity. The module has no clinical detection claims, diagnostic labels, patient identities, scheduling, EHR integration or real voice capture.

To validate both test suites:
```bash
node --test tools/anika-voiceos-mcp/*.test.mjs
```

### Research-to-clinical progression

A proposed human study must independently establish a specific intended use, consented data collection protocol, validated reference assessment, recruitment population, confounder control, acoustic feature reproducibility, prespecified clinical endpoints, statistical plan, subgroup/fairness analysis and regulatory/ethics approval. Anxiety, depression, neurological and cardiopulmonary indications require distinct evidence and cannot be inferred from the demonstration's signal-delta threshold. Clinical safety triage must be separately validated and reviewed.
