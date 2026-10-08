# GitHealth Care-in-a-Box Episode Twin — foundation package

Version 0.1 • October 8, 2026 • Synthetic-only engineering reference

This package starts the user's first 14-day milestone inside the existing React/Vite repository. It does not change website routes or connect patient systems. Repository inspection found no existing backend schema/authentication service in the checked-out main branch; therefore the proposed server boundary is isolated here. Reconcile with any backend maintained elsewhere before adopting the draft migration.

## Run

Node 22+; no additional packages:

```sh
node --test episode-twin/tests/*.test.mjs
```

Files:
- `core.mjs`: executable domain reference with trusted actor scopes, tenant-bound lookup, lifecycle constraints, idempotency receipts, optimistic version checks, evidence validation, proposed tasks, and optional local journal replay.
- `fixtures/episodes.json`: ten fully synthetic draft episode inputs.
- `contracts/openapi.json`: OpenAPI 3.0.3 contract for seven HTTP endpoints. **No HTTP server exists yet.**
- `contracts/agents.json`: six agent contracts and phase boundaries. No model calls or autonomous agents are connected.
- `migrations/001_foundation.sql`: **unapplied draft PostgreSQL schema**, composite tenant foreign keys, tenant RLS, audit append-only trigger, and no runtime grants.
- `tests/core.test.mjs`: 13 executable reference tests.
- `../.github/workflows/episode-twin.yml`: proposed CI job; local execution is distinct from remote CI results.

## Implemented behavior

The server adapter must authenticate a caller, resolve their active membership, and pass only the resulting trusted actor identifier to the domain core. The reference principal map is a test fixture, not an authentication service. Never derive actor or tenant identity from client body fields.

Creation is synthetic-only and begins in `draft`. Humans with transition scope can move draft → review → active → closed, with review → draft and active → review allowed. Activation requires source-referenced evidence. AI actors cannot transition episodes, even if mistakenly granted transition scope. Closing is terminal in this reference; corrections need a later append-only amendment design.

State transitions in this package are simulated workflow-state changes, not authorization to discharge a patient. Tasks remain proposed and non-executable. Permission to transition is not proof of licensure; a real reviewer credential verification service is pending.

Each successful write increments version and records one event. Exact idempotent retries return the original result without another event. Request changes under the same key conflict. Rejected requests throw errors and leave the episode unchanged; recording security-denial events is a future adapter responsibility.

## Persistence and evidence limits

The optional JSON journal supports a single trusted process and stores the result and idempotency receipt together before updating memory. Restart reconstructs state and retries. It is a local development reference, **not a multi-writer production database**, and does not promise power-loss durability.

The hash chain detects ordinary edits to the persisted content; anyone who controls the whole file can rewrite the chain. There is no external checkpoint, signing, immutable retention, or cryptographic proof of clinical truth. A production proof service must supply the relevant custody and anchoring controls.

Synthetic identifiers and source URI checks prevent obvious misuse; they are not a PHI classifier. Do not put real patient information in task titles, fixtures, or journal files.

## PostgreSQL integration plan

Do not run the migration against production. The draft deliberately uses a new schema and grants no runtime access. IDs are UUIDs in PostgreSQL while the reference uses readable synthetic IDs; the HTTP adapter must allocate UUIDs and map synthetic fixture identifiers explicitly.

Use a dedicated non-owner, non-superuser role without BYPASSRLS. In each authenticated transaction, set tenant context locally after membership validation. Map actors/patients to the actual identity system before granting access. RLS is tenant isolation only; scope, purpose, licensure, and clinical authority checks still belong in the server.

The transaction must atomically check/insert the idempotency receipt, lock the episode or compare expected version, validate authority and evidence, apply the mutation, append the audit event, and store the response. On conflict roll back all writes. Bind approvals to action digest, episode version, evidence versions, policy version, expiry, and reviewer; invalidate approval when these change. The draft decisions table is a starting structure, not full G0–G6 enforcement.

Generic JSON payload tables are scaffolding for later validated resource schemas. Full six-dimensional modeling, consent enforcement, graph projections, and FHIR interoperability remain pending. Clinical provenance and security audit must remain distinct.

## HTTP adapter contract

Validate bearer credentials server-side, reject unknown body fields, enforce request size limits, and resolve tenant membership. Enforce `Idempotency-Key` on every mutation and quoted `If-Match` version on existing episodes. Return 404 for missing and cross-tenant objects; do not expose whether another tenant owns the ID. Map domain errors to the documented status codes. Never expose the development store directly to browsers.

Timeline and audit routes are both specified; production timeline output should redact internal receipt keys and reduce event details by role. Add pagination before real workloads. The contract has been JSON-parsed but not validated by an external OpenAPI validator.

## Milestone status

| Backlog | Status |
|---|---|
| M1-01 Service and CI | Domain module and CI definition implemented; HTTP service pending |
| M1-02 PostgreSQL schema/migrations | Draft written; database execution and integration tests pending |
| M1-03 Tenant/actor authorization | Domain tests pass; authentication and database enforcement pending |
| M1-04 Episode API | Contract specified; HTTP implementation pending |
| M1-05 Ten synthetic episodes | Fixtures created and exercised in tests |
| M1-06 Evidence/audit | Reference implemented; PostgreSQL atomic writes pending |
| M1-07 Detail/timeline screen | Pending |
| M1-08 Acceptance tests | 13 domain tests pass; API, DB, browser and deployment tests pending |

**Milestone 1 is not complete.** Next implementation: authenticated local API + PostgreSQL adapter, database isolation/transaction tests, then the React detail/timeline screen. Run full acceptance against that application before marking the milestone complete. No real PHI, billing submission, autonomous clinical actions, or external messages are supported.

## Future scenario and pilot boundaries

The later scenario engine should compare assumptions for three post-acute transition options. Record input versions, missing evidence, resource assumptions, and sensitivity ranges. Do not generate purportedly validated readmission probabilities or treat simulated savings as realized payments.

The proposed 25–50 episode, one-organization pilot requires verified agreements, security, integrations and clinical oversight. Its first outcomes are workflow completion, evidence completeness, timeliness and review burden. Readmissions remain exploratory until reliable baseline/follow-up data and an appropriate analysis exist.

Progressia may communicate approved aggregate findings once evidence exists. This synthetic package is a technology demonstration, not an outcomes case study.

## WorldOS interactive prototype — October 8 update

Run `npm ci`, `npm run dev`, then open `/worldos`.

The new React dashboard implements one synthetic episode and three deterministic discharge alternatives. It calculates a fixed seven-day resource window, with adjustable fictional costs and explicit ±20% sensitivity. It does not predict clinical outcomes or use MiroFish/VILYA code, live multi-agent models, EHRs or payer connections.

The AION **demonstration** workflow logs evidence confirmations, scenario and assumption changes, held/denied approvals, human-role approval, and simulated execution. Approval binds to scenario/version, expires in 15 minutes, and is revoked by edits. AI-role approval/execution is denied. Handoff creates a simulated record only; no patient action or message is sent.

Events and snapshots are SHA-256 chained, saved in localStorage, verified on reload, and exportable as JSON. Role selection is not authentication. A browser owner can rewrite and rehash local state. There is no production AION integration, immutable remote storage, signed clinician identity, or independent proof of care. These remain release prerequisites for real operations.

Run all 23 domain tests with:

```sh
node --experimental-strip-types --test episode-twin/tests/*.test.mjs
```

The foundation HTTP/PostgreSQL adapter remains pending. The visual prototype advances M1-07 for a single synthetic episode without completing the full application-level M1 acceptance criteria.

Validation for this update: 23 local domain tests passed; TypeScript and production build passed; new/modified application files passed scoped ESLint. Full repository lint remains blocked by a pre-existing `no-explicit-any` in `src/pages/AIONIntelligencePage.tsx`. Browser checks passed in headless Chromium at 1440px and 390px: evidence hold, evidence toggles, AI denial, human approval, simulated handoff, reload persistence, JSON export, edit invalidation, no horizontal mobile overflow, and no runtime errors. Desktop and mobile screenshots were visually inspected. Remote CI and deployment status must be checked separately.
