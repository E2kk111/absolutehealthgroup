import { createHash } from 'node:crypto';

export const VERSIONS = Object.freeze({
  schema: 'anika-synthetic-record-v1',
  features: 'anika-synthetic-features-v1',
  quality: 'anika-synthetic-quality-v1',
  policy: 'anika-synthetic-policy-v1',
  algorithm: 'generated-numeric-signal-v1',
});
export const TOOLS = Object.freeze(['anika_analyze_synthetic_voice', 'anika_verify_synthetic_provenance']);
const CONTEXT_KEYS = ['agentId', 'tenantId', 'classification', 'origin', 'purpose', 'capability'];
const EXPECTED = Object.freeze({
  agentId: 'anika-voiceos-demo',
  tenantId: 'synthetic-lab',
  classification: 'SYNTHETIC',
  origin: 'GENERATED',
  purpose: 'nonclinical-signal-research',
});

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) &&
    (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}
function exactKeys(value, expected) {
  return isPlainObject(value) && Object.keys(value).sort().join('|') === [...expected].sort().join('|');
}
export function canonical(value) {
  if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
  if (isPlainObject(value)) return '{' + Object.keys(value).sort().map(key =>
    JSON.stringify(key) + ':' + canonical(value[key])).join(',') + '}';
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return JSON.stringify(value);
  if (typeof value === 'number' && Number.isFinite(value)) return JSON.stringify(value);
  throw new TypeError('Unsupported canonical value');
}
export function digest(value) {
  return createHash('sha256').update(canonical(value), 'utf8').digest('hex');
}
export function authorize(context, toolName) {
  const deny = reason => ({ decision: 'DENY', reason, policyVersion: VERSIONS.policy });
  if (!exactKeys(context, CONTEXT_KEYS)) return deny('INVALID_CONTEXT_SCHEMA');
  if (!TOOLS.includes(toolName) || context.capability !== toolName) return deny('UNAUTHORIZED_CAPABILITY');
  for (const [key, value] of Object.entries(EXPECTED)) {
    if (context[key] !== value) return deny('INVALID_' + key.toUpperCase());
  }
  return { decision: 'ALLOW', reason: 'SYNTHETIC_ONLY', policyVersion: VERSIONS.policy };
}
function rounded(n) { return Number(n.toFixed(6)); }
function checkSamples(samples, sampleRate) {
  if (![8000, 16000].includes(sampleRate)) return 'UNSUPPORTED_SAMPLE_RATE';
  if (!Array.isArray(samples) || samples.length < sampleRate / 10 || samples.length > sampleRate * 20)
    return 'INVALID_SAMPLE_COUNT';
  if (!samples.every(v => typeof v === 'number' && Number.isFinite(v) && v >= -1 && v <= 1))
    return 'INVALID_SAMPLE_VALUES';
  return null;
}
export function qualityAndFeatures(samples, sampleRate) {
  const problem = checkSamples(samples, sampleRate);
  if (problem) return { quality: { pass: false, flags: [problem], version: VERSIONS.quality }, features: null };
  const n = samples.length;
  let energy = 0, absolute = 0, peak = 0, clipped = 0, active = 0, crosses = 0;
  for (let i = 0; i < n; i++) {
    const s = samples[i], abs = Math.abs(s);
    energy += s * s; absolute += abs; peak = Math.max(peak, abs);
    if (abs >= 0.99) clipped++;
    if (abs > 0.02) active++;
    if (i > 0 && ((samples[i - 1] < 0 && s >= 0) || (samples[i - 1] >= 0 && s < 0))) crosses++;
  }
  const clippingFraction = rounded(clipped / n);
  const aboveThresholdFraction = rounded(active / n);
  const flags = [];
  if (clipped / n > 0.01) flags.push('EXCESSIVE_CLIPPING');
  if (active / n < 0.05) flags.push('INSUFFICIENT_SIGNAL_ACTIVITY');
  const quality = { pass: flags.length === 0, flags, version: VERSIONS.quality,
    clippingFraction, aboveThresholdFraction };
  if (!quality.pass) return { quality, features: null };
  return { quality, features: {
    version: VERSIONS.features,
    durationMs: rounded(n * 1000 / sampleRate),
    rmsAmplitude: rounded(Math.sqrt(energy / n)),
    meanAbsoluteAmplitude: rounded(absolute / n),
    peakAbsoluteAmplitude: rounded(peak),
    zeroCrossingRate: rounded(crosses / (n - 1)),
    aboveThresholdFraction,
  } };
}
export function analyzeSyntheticVoice(args) {
  const authorization = authorize(args?.context, TOOLS[0]);
  if (authorization.decision !== 'ALLOW') return { authorization };
  if (!exactKeys(args, ['context', 'sampleRate', 'samples']))
    return { authorization: { decision: 'DENY', reason: 'INVALID_REQUEST_SCHEMA', policyVersion: VERSIONS.policy } };
  const { quality, features } = qualityAndFeatures(args.samples, args.sampleRate);
  if (!quality.pass) return { authorization, quality, features: null, provenance: null };
  const record = {
    schemaVersion: VERSIONS.schema,
    algorithmVersion: VERSIONS.algorithm,
    featureVersion: VERSIONS.features,
    qualityVersion: VERSIONS.quality,
    policyVersion: VERSIONS.policy,
    origin: 'GENERATED',
    source: { sampleRate: args.sampleRate, sampleCount: args.samples.length,
      inputSha256: digest({ sampleRate: args.sampleRate, samples: args.samples }) },
    context: args.context,
    authorization,
    quality,
    features,
    disclaimer: 'Synthetic signal descriptors only; no clinical biomarker inference.',
  };
  return { authorization, quality, features, provenance: { record, recordHashSha256: digest(record),
    attestation: 'UNSIGNED_HASH_ONLY' } };
}
export function verifySyntheticProvenance(args) {
  const authorization = authorize(args?.context, TOOLS[1]);
  if (authorization.decision !== 'ALLOW') return { authorization };
  if (!exactKeys(args, ['context', 'provenance'])) return { authorization,
    verification: { integrity: 'INVALID', reason: 'INVALID_REQUEST_SCHEMA' } };
  const p = args.provenance;
  if (!exactKeys(p, ['record', 'recordHashSha256', 'attestation']) ||
      !isPlainObject(p.record) ||
      !exactKeys(p.record, ['schemaVersion', 'algorithmVersion', 'featureVersion', 'qualityVersion',
        'policyVersion', 'origin', 'source', 'context', 'authorization', 'quality', 'features', 'disclaimer']) ||
      authorize(p.record.context, TOOLS[0]).decision !== 'ALLOW' ||
      !exactKeys(p.record.source, ['sampleRate', 'sampleCount', 'inputSha256']) ||
      !/^[a-f0-9]{64}$/.test(p.record.source.inputSha256) ||
      p.record.origin !== 'GENERATED' ||
      p.record.schemaVersion !== VERSIONS.schema || p.record.featureVersion !== VERSIONS.features ||
      p.record.qualityVersion !== VERSIONS.quality || p.record.policyVersion !== VERSIONS.policy ||
      p.attestation !== 'UNSIGNED_HASH_ONLY' || !/^[a-f0-9]{64}$/.test(p.recordHashSha256))
    return { authorization, verification: { integrity: 'INVALID', reason: 'INVALID_PROVENANCE_SCHEMA' } };
  const match = digest(p.record) === p.recordHashSha256;
  return { authorization, verification: { integrity: match ? 'HASH_MATCH' : 'HASH_MISMATCH',
    authenticity: 'NOT_VERIFIED', reason: match ? 'UNSIGNED_REPRODUCIBLE_DIGEST' : 'RECORD_MODIFIED' } };
}
