/** Synthetic-only domain reference. No authentication provider, HTTP server, or clinical execution. */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, renameSync, existsSync } from 'node:fs';
const copy = x => structuredClone(x);
const digest = x => createHash('sha256').update(JSON.stringify(x)).digest('hex');
const fail = (code) => { throw new Error(code); };
const id = x => typeof x === 'string' && /^[a-zA-Z0-9_-]{1,100}$/.test(x);
const exact = (obj, keys) => obj && !Array.isArray(obj) && typeof obj === 'object' && Object.keys(obj).every(k => keys.includes(k));
export class EpisodeStore {
  // Trusted principals are provided by the server adapter, NEVER by request bodies.
  constructor(principals, journalPath = null) {
    this.principals = new Map(principals.map(p => [p.actor_id, copy(p)]));
    this.path = journalPath;
    this.records = new Map(); this.events = []; this.receipts = new Map();
    if (journalPath && existsSync(journalPath)) {
      const events = JSON.parse(readFileSync(journalPath, 'utf8'));
      let prior = 'GENESIS';
      for (const e of events) {
        const { hash, ...payload } = e;
        if (payload.previous_hash !== prior || digest(payload) !== hash || payload.sequence !== this.events.length + 1) fail('CORRUPT_JOURNAL');
        this.records.set(`${e.tenant_id}:${e.episode_id}`, copy(e.snapshot));
        this.receipts.set(e.receipt_key, { fingerprint: e.fingerprint, result: copy(e.snapshot) });
        this.events.push(e); prior = hash;
      }
    }
  }
  actor(actorId, write = false) {
    const p = this.principals.get(actorId);
    if (!p || !p.active || !p.scopes.includes('episode:read')) fail('UNAUTHORIZED');
    if (write && !p.scopes.includes('episode:write')) fail('FORBIDDEN');
    return p;
  }
  get(actorId, episodeId) {
    const p = this.actor(actorId);
    const r = this.records.get(`${p.tenant_id}:${episodeId}`);
    if (!r) fail('NOT_FOUND');
    return copy(r);
  }
  timeline(actorId, episodeId) {
    const r = this.get(actorId, episodeId);
    return copy(this.events.filter(e => e.tenant_id === r.tenant_id && e.episode_id === r.episode_id));
  }
  mutate(actorId, episodeId, operation, body, key, expectedVersion) {
    const p = this.actor(actorId, true);
    if (!id(episodeId) || !id(key)) fail('INVALID_REQUEST');
    if (!exact(body, operation === 'create' ? ['patient_ref','pathway_version','simulation_mode'] : operation === 'state' ? ['status'] : operation === 'evidence' ? ['evidence_id','source_ref','observed_at','kind'] : ['task_id','title','due_at'])) fail('INVALID_REQUEST');
    const recordKey = `${p.tenant_id}:${episodeId}`;
    // Version is part of the request identity so retries must reproduce the original request.
    const fingerprint = digest({episodeId, operation, body, expectedVersion: expectedVersion ?? null});
    const receiptKey = `${p.tenant_id}:${p.actor_id}:${key}`;
    const receipt = this.receipts.get(receiptKey);
    if (receipt) { if (receipt.fingerprint !== fingerprint) fail('IDEMPOTENCY_CONFLICT'); return copy(receipt.result); }
    let r = copy(this.records.get(recordKey));
    if (operation === 'create') {
      if (r) fail('ALREADY_EXISTS');
      if (!id(body.patient_ref) || !body.patient_ref.startsWith('patient_synthetic_') || !id(body.pathway_version) || body.simulation_mode !== true) fail('SYNTHETIC_ONLY');
      r = {episode_id: episodeId, tenant_id:p.tenant_id, patient_ref:body.patient_ref, pathway_version:body.pathway_version, simulation_mode:true, status:'draft', version:1, authority_state:'human_review_required', economic_state:'not_verified', evidence:[], tasks:[]};
    } else {
      if (!r) fail('NOT_FOUND');
      if (!Number.isInteger(expectedVersion) || expectedVersion !== r.version) fail('VERSION_CONFLICT');
      if (r.status === 'closed') fail('EPISODE_CLOSED');
      if (operation === 'state') {
        if (p.kind !== 'human' || !p.scopes.includes('episode:transition')) fail('HUMAN_REVIEW_REQUIRED');
        const allowed = {draft:['review'], review:['draft','active'], active:['review','closed']};
        if (!allowed[r.status].includes(body.status)) fail('INVALID_TRANSITION');
        if (body.status === 'active' && r.evidence.length === 0) fail('MISSING_EVIDENCE');
        r.status = body.status;
      } else if (operation === 'evidence') {
        if (!id(body.evidence_id) || typeof body.source_ref !== 'string' || !/^synthetic:\/\/[a-zA-Z0-9_/-]+$/.test(body.source_ref) || !Number.isFinite(Date.parse(body.observed_at)) || !['discharge','handoff','followup'].includes(body.kind)) fail('INVALID_EVIDENCE');
        if (r.evidence.some(e => e.evidence_id === body.evidence_id)) fail('DUPLICATE_EVIDENCE');
        r.evidence.push(copy(body));
      } else if (operation === 'task') {
        if (!id(body.task_id) || typeof body.title !== 'string' || body.title.length < 1 || body.title.length > 200 || !Number.isFinite(Date.parse(body.due_at))) fail('INVALID_TASK');
        if (r.tasks.some(t => t.task_id === body.task_id)) fail('DUPLICATE_TASK');
        r.tasks.push({...copy(body), status:'proposed', execution_allowed:false});
      } else fail('INVALID_OPERATION');
      r.version++;
    }
    const payload = {sequence:this.events.length+1, tenant_id:p.tenant_id, actor_id:p.actor_id, episode_id:episodeId, operation, timestamp:new Date().toISOString(), policy_version:'m1-synthetic-v1', previous_hash:this.events.at(-1)?.hash ?? 'GENESIS', receipt_key:receiptKey, fingerprint, snapshot:copy(r)};
    const event = {...payload, hash:digest(payload)};
    // Persist before changing memory. Single process only; PostgreSQL adapter must use one transaction.
    if (this.path) { writeFileSync(`${this.path}.tmp`, JSON.stringify([...this.events,event])); renameSync(`${this.path}.tmp`,this.path); }
    this.records.set(recordKey,r); this.events.push(event); this.receipts.set(receiptKey,{fingerprint,result:copy(r)});
    return copy(r);
  }
}
