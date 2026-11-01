# VoiceOS / Yovak acceptance plan

## Verified starting point
Existing ANIKA browser demo is scripted and synthetic; browser speech recognition/synthesis may be available. Navigator Studio is a concept page. No verified realtime backend or server-side authorization service.

## Phase 0 — local synthetic policy example
Run `node --test packages/yovak-healthcare/test/policy.test.mjs`.
Expected cases: missing verified identity denied; tenant mismatch denied; revoked agent denied; unknown tool denied; sensitive action without approval denied; expired approval denied; wrong-action approval denied; approved scoped action allowed; ordinary granted demo action allowed.
**These are unit tests for an example function, not evidence of production authorization.**

## Phase 1 — developer preview
- Tenant A cannot read/write Tenant B agents, knowledge, sessions or telemetry.
- Every tool dispatch routes through independent server-side policy.
- Missing identity/grants/policy/approval fail closed; revoked agents stop executing.
- Human approval bound to exact action hash and short expiry.
- Knowledge access respects tenant ACL; citations reference approved versions.
- SimLab evaluates injection, tool abuse, escalation and source spoofing.
- Realtime interruption and reconnect tested on supported browsers.
- Metrics and audit records are tenant-scoped and redact sensitive content.

## Release checklist
- `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build` for existing website.
- `node --test packages/yovak-healthcare/test/policy.test.mjs`.
- Human visual/mobile review of current website; this PR does not modify its routes.
- Threat model, code review, security signoff, clinical governance and HIPAA/vendor readiness **before** PHI pilot.
- Do not treat a green Vercel build as proof of runtime security.
