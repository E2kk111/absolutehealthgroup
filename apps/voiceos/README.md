# GitHealth VoiceOS™ — application workspace (planned)

**Status: scaffold only. No independently deployed VoiceOS application exists in this directory.**

The existing website already contains a **scripted synthetic ANIKA demo** at `src/pages/AnikaVoiceOSPage.tsx` and a **conceptual Navigator Studio page** at `src/pages/GitHealthNavigatorStudioPage.tsx`. These are not evidence of a multi-tenant VoiceOS backend.

## Planned app
- Voice Studio, Agent Studio, Workflow Studio, Knowledge Studio, SimLab, Command Center.
- Tenant-scoped login, versioned agents, synthetic realtime voice session and Yovak policy gateway.
- Developer preview uses synthetic data only.

## First implementation tickets
1. Decide workspace hosting, auth provider, tenant isolation and backend technology.
2. Add agent config schema, immutable version identifiers and explicit publish workflow.
3. Build browser audio session behind a replaceable provider adapter; do not expose provider API secrets in Vite `VITE_*` variables.
4. Implement server-side Yovak gateway with deny-before-dispatch integration tests.
5. Add approved knowledge ingestion with tenant ACLs and source attribution.
6. Build SimLab and tenant-scoped monitoring.
7. Complete clinical/privacy/security review before PHI or live actions.

See `docs/voiceos/PRD.md`, `ARCHITECTURE.md` and `ACCEPTANCE.md`.
