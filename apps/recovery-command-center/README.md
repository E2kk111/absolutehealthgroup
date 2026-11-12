# Recovery-in-a-Box pilot command center

Standalone application for Absolute Health Group's planned 90-day, 25–50 participant MVP. This app is independent of the repository's existing Vite marketing site.

## Features

- Readiness, enrollment, assessments, care plans, home programs, monitoring, escalation, reassessment, outcomes evidence, blockers, decisions, and next-action views.
- Editable status, owner, due date, priority, evidence, verifier, and next action.
- Optional non-identifying participant code, assessment timepoint, instrument, and result fields.
- Planned, tentative, unknown, and verified evidence states. Verified completion requires a Complete status plus evidence and a named verifier.
- Durable Cloudflare D1 storage with revision checks to reject stale concurrent saves.
- On-demand weekly executive briefing, saved snapshots, change comparison, text export, and JSON data export.

The seed contains planning templates only. Actual enrollment and start date are unknown. Day 30/60/90 reassessment timepoints are tentative. No clinical benefit is inferred from workflow completion.

## Development

Requires Node.js >=22.13.0.

```sh
cd apps/recovery-command-center
npm ci
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_youthful_bastion.sql
npm run dev
```

Apply each local migration once. Hosted and local databases are separate. Run `npx tsc --noEmit` for type checking. The first successful write initializes the stored pilot state; the migration creates only the table.

## Hosting and access

The deployed application uses owner-private Sites access. The source API relies on that hosting access boundary; it is not designed to be anonymously exposed. A separate deployment must enforce authentication and authorization before serving the page or API.

The committed hosting manifest declares D1 binding `DB` without a production project ID. Assign the intended Site identity through Sites when deploying a new instance. Existing production Site identity must be preserved when updating that Site. Deployments from this GitHub app directory are not automatically connected to the currently published Site.

No live pilot records, database files, local QA data, credentials, generated builds, or private hosting identity are included. Use non-identifying operational codes and references to your approved clinical record system. Evidence verification is a user attestation, not automated validation of the source.

## Briefings

Generate a briefing from the dashboard, then save a snapshot to establish the next comparison point. Generation is on demand; no weekly scheduler or email delivery is configured. Settings changes are summarized in the change history; record edits include field-level changes.

## Validation and provenance

Application code recovered unchanged from the published Sites source commit `8e20263a423cdcb69cc77393835795bb4452423f`. That version passed the production build and TypeScript check. Local browser checks confirmed save/reload persistence, required evidence for verified records, briefing generation, and snapshot saving. This import changes documentation and removes the deployment-specific project ID; it does not modify application behavior.

## Key files

- `app/page.tsx`: dashboard, editor, and briefing generator
- `app/seed.ts`: planning baseline and allowed workflow states
- `app/api/pilot/route.ts`: persistence and validation API
- `db/schema.ts` and `drizzle/`: D1 schema and migration
- `worker/`, `scripts/`, and `vite.config.ts`: runtime and build support
