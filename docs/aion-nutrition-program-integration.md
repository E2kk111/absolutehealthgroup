# AION Nutrition Program — integration specification (proposed)

Status: **SPECIFICATION ONLY / NOT ENABLED**

## Scope

Add a Nutrition Program lobe to the AION healthcare brain map and a code-matched adjustment preview to the reimbursement calculator. Do not activate a Medicare billing rule without the four exact codes and authoritative payer/CMS source.

## UI

- Brain-map node: `Nutrition Program™`.
- Connections: AWV Navigator, ACCESS Navigator, Care Navigation, Payment Integrity Engine.
- Calculator shows original base amount, matched code, multiplier, adjusted estimate, rule version, effective date, payer, and provenance.
- If the code is not configured, do not apply an adjustment.
- If rule evidence is missing, show **UNVERIFIED — illustrative only** and do not treat the estimate as billable.

## Rule configuration (disabled until verified)

```json
{
  "ruleId": "nutrition-multiplier-proposed-v0",
  "status": "DISABLED_PENDING_VALIDATION",
  "codes": [],
  "multiplier": 1.17,
  "payer": null,
  "effectiveFrom": null,
  "effectiveTo": null,
  "authorityUrl": null,
  "reviewedBy": null
}
```

The four codes have not been provided. The 1.17 multiplier is a user-requested arithmetic assumption, **not a verified CMS payment policy**.

## Calculator behavior

- Normalize a code with trim + uppercase.
- Match against exactly the configured code set, scoped by payer and effective date.
- Preview: `adjusted = base * 1.17` only when the code matches and the user is in an explicit illustrative preview mode; never apply this as an approved payment calculation while the rule is disabled.
- Production mode: fail closed until the rule is enabled following compliance approval and authoritative source verification.
- Preserve base payment and calculation trace; prevent duplicate application of the multiplier.
- Reject negative, non-finite or invalid monetary inputs.

## Acceptance tests

1. Each of the four verified configured codes matches, when populated.
2. An unlisted code remains at base amount.
3. Case and whitespace normalization works.
4. A disabled rule cannot generate a billable adjusted amount.
5. A mismatched payer or out-of-range date cannot apply the rule.
6. Repeated evaluation does not compound the multiplier.
7. Missing authority or reviewer fails closed.
8. Calculation output records provenance and is clearly labeled estimate.

## Next implementation gate

Supply the four code identifiers, source of the 17% adjustment, payer, effective dates, and owner approval. Then locate the live brain-map and calculator components, implement behind a feature flag, add tests, and submit a separate code change for review. No clinical actions, claims, or production PHI are in scope.
