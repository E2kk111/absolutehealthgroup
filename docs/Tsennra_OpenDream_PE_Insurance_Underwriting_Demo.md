# Tsennra Capital × OpenDream — PE & Insurance Underwriting Demo

## Status and route
- Proposed public **synthetic demonstration** at `/pe-underwriting-demo`.
- This is **not** the existing hosted ChatGPT Site calculator; no connection or update to `githealth-market-value.adabakadiri.chatgpt.site` is implied.
- No auth, backend, PHI processing, persistence, policy verification, payer eligibility lookup, insurer integration, binding or investment approval.
- Deliberately omitted from global navigation. **Do not use with confidential information.** Route access is not access control.

## Responsibilities (proposed, not a legal ownership determination)
- **OpenDream Management LLC:** operating oversight, risk controls, insurance coordination, portfolio reporting.
- **Tsennra Capital LLC:** sponsor/investment sourcing, underwriting and investment committee.
- **GitHealth:** governed workflows, evidence, agent permissions, risk passport and economics.

## Scope
Ten commercial categories: Recovery, Wound Care, Brain Health, Cardiac Care, Senior Care, Care at Home, Post-Acute Care, Behavioral Care, Regulation-in-a-Box and Cybersecurity-in-a-Box.

Per package: annual *collected revenue assumption*, direct delivery, technology, premium, retained loss reserve, compliance, self-reported coverage status, agent autonomy A0–A4, and contribution.

Capital: equity, overhead, debt service, maintenance capex, cash taxes, revenue stress haircut.

Metrics:
- Contribution = collections – direct delivery – technology – premium – reserve – compliance.
- EBITDA proxy = total contribution – overhead.
- Equity cash flow proxy = EBITDA proxy – debt service – maintenance capex – cash taxes.
- Cash-on-cash proxy = annual equity cash flow / equity invested (not IRR).
- Downside EBITDA = EBITDA proxy – (revenue × stress %) with modeled costs fixed.
- Coverage and clinical autonomy flags are informational and do **not** grant approval.

## Important boundaries
- Clinical package A4 is prohibited in the demo. Clinical A3 requires a qualified clinician's approval for consequential action.
- A selected `Bound (unverified)` value does not establish coverage. Actual named insured, covered activities, exclusions, AI autonomy and insurer endorsement must be checked against policy documents.
- The enterprise packages are modeled as contracted services, not assumed medical reimbursement.
- No statement of guaranteed insurance, medical malpractice protection, HIPAA certification, autonomous clinical authority, verified ROI, or investment performance.
- No client data should be entered. CSV is a browser download of user-entered assumptions.

## Release checklist
1. Run `npm run typecheck`, `npm run lint`, and `npm run build`.
2. Desktop and mobile smoke test the route and horizontal package table.
3. Check all ten rows, reset, illustrative scenario, CSV export, negative contribution, 0 equity, stress 0/100, A3/A4 and insurance status flags.
4. Validate investor/legal/insurance copy with counsel and an appropriately licensed broker.
5. For a real underwriting product: add SSO/RBAC, tenant isolation, secure backend, audit trail, evidence and policy verification, approval workflows, payer contract source records and controls before storing nonpublic data.
6. Decide separately how/if to integrate with the externally hosted Market Value Calculator. No implied integration.

This is a demonstration of **Problem → Product → Outcome → Proof → Economics**, not a change to AION or GitHealth architecture.
