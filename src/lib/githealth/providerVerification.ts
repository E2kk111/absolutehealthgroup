/**
 * GitHealth Verified™ — fail-closed navigator activation policy.
 *
 * A CMS NPPES match is identity-directory evidence only. All additional
 * credentials, rights, content and staffed human coverage require separate
 * checks performed by the responsible organization.
 */
export type EvidenceState = "pending" | "passed" | "failed" | "expired";

export interface NavigatorActivationEvidence {
  nppesMatch: EvidenceState;
  identityOwnership: EvidenceState;
  activeLicense: EvidenceState;
  practiceAffiliation: EvidenceState;
  practiceAuthorization: EvidenceState;
  avatarLikenessRights: EvidenceState;
  avatarVoiceRights: EvidenceState;
  namedClinicalOwner: EvidenceState;
  approvedKnowledge: EvidenceState;
  escalationCoverage: EvidenceState;
  aiDisclosureEnabled: boolean;
}

export type ActivationGate =
  | keyof Omit<NavigatorActivationEvidence, "aiDisclosureEnabled">
  | "aiDisclosureEnabled";

export interface ActivationDecision {
  allowed: boolean;
  unmetGates: ActivationGate[];
}

const REQUIRED_GATES = [
  "nppesMatch",
  "identityOwnership",
  "activeLicense",
  "practiceAffiliation",
  "practiceAuthorization",
  "avatarLikenessRights",
  "avatarVoiceRights",
  "namedClinicalOwner",
  "approvedKnowledge",
  "escalationCoverage",
] as const;

/** Pure policy function; server must re-evaluate against fresh evidence. */
export function evaluateNavigatorActivation(
  evidence: NavigatorActivationEvidence,
): ActivationDecision {
  const unmetGates: ActivationGate[] = REQUIRED_GATES.filter(
    (gate) => evidence[gate] !== "passed",
  );
  if (!evidence.aiDisclosureEnabled) unmetGates.push("aiDisclosureEnabled");
  return { allowed: unmetGates.length === 0, unmetGates };
}
