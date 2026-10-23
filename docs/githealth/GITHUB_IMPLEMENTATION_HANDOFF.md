# GitHealth Verified™ — GitHub Implementation Handoff

**Status:** Initial reusable TypeScript validation/policy utilities committed for engineering review; **not connected to the Lovable app, CMS API, or a production service**.

## Existing code

- `src/lib/githealth/npi.ts`: pure NPI normalization, NPI check-digit validation and NPPES snapshot type. **No live CMS lookup**.
- `src/lib/githealth/providerVerification.ts`: explicit fail-closed navigator activation gate. CMS directory match is only one required item; independent license, rights, practice authorization, clinician and human coverage must pass.

The current repository is the Absolute Health Group public React/Vite website. The user-provided GitHealth Lovable app at https://githealth-navigator-studio.lovable.app/ is a separate published prototype; GitHub sync to this repository has **not** been established. Do not claim the website is updated or that the utilities are deployed in Lovable.

## Developer next steps

1. Confirm canonical GitHub repo/sync for Lovable project `41860077-2ec9-4532-9ad9-e7cb2899e675` and repair any build/typecheck/lint errors.
2. Run existing repo checks `npm run typecheck && npm run lint && npm run build` after pulling branch; attach CI results.
3. Add automated unit tests: `1234567893` is a valid checksum example; `1234567890`, blank, letters and wrong lengths must fail. Check that NPPES-only evidence never permits activation.
4. Implement **server-side** NPPES adapter with supported version, source timestamps, timeout, rate limiting, caching and mock fixtures; never call an unauthenticated client-only endpoint as a verification authority.
5. Build reviewer-driven licensing/affiliation/consent workflow, revocation/suspension and human escalation queue before patient-facing activation.
6. Keep synthetic demo data and independent credential review; no PHI or live clinical claims until separate security/clinical/legal approval.

See [CMS integration spec](./CMS_VERIFIED_INTEGRATION_SPEC.md), [master build package](./MASTER_BUILD_PACKAGE.md) and issues #41–#43 for the full acceptance contract.
