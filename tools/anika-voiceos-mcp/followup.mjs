/** Research-only simulated follow-up planner.
 * This never identifies a disorder, performs triage, contacts a person, or schedules care.
 */
import { authorize, canonical, digest, verifySyntheticProvenance, TOOLS } from './core.mjs';

export const FOLLOWUP_VERSION = 'anika-synthetic-followup-v1';
export const ACOUSTIC_DELTA_THRESHOLD = 0.05; // illustrative engineering threshold, NOT clinically validated
const SYMPTOM_CODES = ['NONE', 'REPORTED_VOICE_CHANGE', 'REPORTED_BREATHING_CONCERN', 'REPORTED_MOOD_CONCERN'];
const exactKeys = (obj, keys) => obj && typeof obj === 'object' && !Array.isArray(obj) &&
  Object.keys(obj).sort().join('|') === [...keys].sort().join('|');

export function planSyntheticFollowup(args) {
  const authorization = authorize(args?.context, TOOLS[2]);
  if (authorization.decision !== 'ALLOW') return { authorization };
  if (!exactKeys(args, ['context', 'baselineProvenance', 'currentProvenance', 'reportedConcern'])) {
    return { authorization, status: 'REJECTED', reason: 'INVALID_REQUEST_SCHEMA' };
  }
  if (!SYMPTOM_CODES.includes(args.reportedConcern)) {
    return { authorization, status: 'REJECTED', reason: 'INVALID_CONCERN_CODE' };
  }
  const verifierContext = { ...args.context, capability: TOOLS[1] };
  const baseline = verifySyntheticProvenance({ context: verifierContext, provenance: args.baselineProvenance });
  const current = verifySyntheticProvenance({ context: verifierContext, provenance: args.currentProvenance });
  if (baseline.verification?.integrity !== 'HASH_MATCH' || current.verification?.integrity !== 'HASH_MATCH') {
    return { authorization, status: 'REJECTED', reason: 'PROVENANCE_INTEGRITY_FAILURE' };
  }
  const b = args.baselineProvenance.record, c = args.currentProvenance.record;
  if (b.quality?.pass !== true || c.quality?.pass !== true ||
      b.features?.version !== c.features?.version ||
      b.context?.tenantId !== args.context.tenantId || c.context?.tenantId !== args.context.tenantId ||
      b.context?.agentId !== args.context.agentId || c.context?.agentId !== args.context.agentId ||
      b.source?.sampleRate !== c.source?.sampleRate ||
      typeof b.features?.rmsAmplitude !== 'number' || typeof c.features?.rmsAmplitude !== 'number' ||
      !Number.isFinite(b.features.rmsAmplitude) || !Number.isFinite(c.features.rmsAmplitude)) {
    return { authorization, status: 'REJECTED', reason: 'INCOMPATIBLE_SYNTHETIC_RECORDS' };
  }
  const delta = Number(Math.abs(c.features.rmsAmplitude - b.features.rmsAmplitude).toFixed(6));
  const acousticChange = delta >= ACOUSTIC_DELTA_THRESHOLD;
  const reportedConcern = args.reportedConcern !== 'NONE';
  const disposition = reportedConcern ? 'SIMULATED_HUMAN_REVIEW' :
    acousticChange ? 'SIMULATED_REPEAT_MEASUREMENT' : 'NO_FOLLOWUP_TRIGGER';
  const record = {
    version: FOLLOWUP_VERSION,
    mode: 'SYNTHETIC_ONLY',
    baselineHash: args.baselineProvenance.recordHashSha256,
    currentHash: args.currentProvenance.recordHashSha256,
    reportedConcern: args.reportedConcern,
    observedRmsAbsoluteDelta: delta,
    engineeringChangeThreshold: ACOUSTIC_DELTA_THRESHOLD,
    acousticChange,
    disposition,
    authorization,
    evidenceGrade: 'UNVALIDATED_ENGINEERING_DEMONSTRATION',
    actions: disposition === 'SIMULATED_HUMAN_REVIEW'
      ? ['QUEUE_SIMULATED_REVIEW', 'REQUEST_APPROVED_FOLLOWUP_PLAN']
      : disposition === 'SIMULATED_REPEAT_MEASUREMENT'
        ? ['REQUEST_SECOND_SYNTHETIC_MEASUREMENT', 'RECHECK_QUALITY_GATE']
        : ['RECORD_SYNTHETIC_NO_TRIGGER'],
    disclaimer: 'Not a diagnosis, clinical alert, referral, patient message, or scheduled appointment.',
  };
  // JSON canonicalization ensures same inputs produce the same demonstration plan hash.
  canonical(record);
  return { authorization, status: 'SIMULATED', record, provenance: {
    recordHashSha256: digest(record), attestation: 'UNSIGNED_HASH_ONLY',
  } };
}
