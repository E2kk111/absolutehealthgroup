import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {EpisodeStore} from '../core.mjs';
const actors = [
 {actor_id:'reviewer',tenant_id:'a',active:true,kind:'human',scopes:['episode:read','episode:write','episode:transition']},
 {actor_id:'other',tenant_id:'b',active:true,kind:'human',scopes:['episode:read','episode:write','episode:transition']},
 {actor_id:'agent',tenant_id:'a',active:true,kind:'ai',scopes:['episode:read','episode:write','episode:transition']},
 {actor_id:'reader',tenant_id:'a',active:true,kind:'human',scopes:['episode:read']},
];
const body={patient_ref:'patient_synthetic_001',pathway_version:'transition-v1',simulation_mode:true};
const make=()=>{const s=new EpisodeStore(actors); s.mutate('reviewer','ep1','create',body,'create1');return s;};
const evidence={evidence_id:'ev1',source_ref:'synthetic://discharge/001',observed_at:'2026-10-08T12:00:00Z',kind:'discharge'};
test('ten fixtures create and inspect',()=>{const s=new EpisodeStore(actors);const fixtures=JSON.parse(readFileSync(new URL('../fixtures/episodes.json',import.meta.url))); assert.equal(fixtures.length,10);for(const f of fixtures){s.mutate('reviewer',f.episode_id,'create',f.body,f.episode_id);assert.equal(s.get('reviewer',f.episode_id).simulation_mode,true);}});
test('cross-tenant reads, writes and timeline denied',()=>{const s=make();for(const fn of [()=>s.get('other','ep1'),()=>s.timeline('other','ep1'),()=>s.mutate('other','ep1','state',{status:'review'},'x',1)])assert.throws(fn,/NOT_FOUND/);});
test('unknown principal and readonly mutation denied',()=>{const s=make();assert.throws(()=>s.get('unknown','ep1'),/UNAUTHORIZED/);assert.throws(()=>s.mutate('reader','ep1','state',{status:'review'},'x',1),/FORBIDDEN/);});
test('request cannot inject tenant, role or authority',()=>{const s=make();assert.throws(()=>s.mutate('reviewer','ep1','state',{status:'review',tenant_id:'b'},'x',1),/INVALID_REQUEST/);});
test('AI cannot approve even with transition scope',()=>{const s=make();assert.throws(()=>s.mutate('agent','ep1','state',{status:'review'},'x',1),/HUMAN_REVIEW_REQUIRED/);});
test('no direct draft to active transition',()=>assert.throws(()=>make().mutate('reviewer','ep1','state',{status:'active'},'x',1),/INVALID_TRANSITION/));
test('activation needs evidence; rejection leaves no mutation event',()=>{const s=make();s.mutate('reviewer','ep1','state',{status:'review'},'x',1);assert.throws(()=>s.mutate('reviewer','ep1','state',{status:'active'},'y',2),/MISSING_EVIDENCE/);assert.equal(s.timeline('reviewer','ep1').length,2);});
test('optimistic concurrency rejects stale request',()=>{const s=make();s.mutate('reviewer','ep1','evidence',evidence,'ev',1);assert.throws(()=>s.mutate('reviewer','ep1','state',{status:'review'},'x',1),/VERSION_CONFLICT/);});
test('same retry returns original response, changed payload conflicts',()=>{const s=make();assert.equal(s.mutate('reviewer','ep1','create',body,'create1').version,1);assert.equal(s.events.length,1);assert.throws(()=>s.mutate('reviewer','ep1','create',{...body,pathway_version:'v2'},'create1'),/IDEMPOTENCY_CONFLICT/);});
test('evidence must have valid synthetic provenance',()=>{const s=make();assert.throws(()=>s.mutate('reviewer','ep1','evidence',{...evidence,source_ref:''},'ev',1),/INVALID_EVIDENCE/);});
test('non-synthetic create is rejected',()=>assert.throws(()=>new EpisodeStore(actors).mutate('reviewer','ep1','create',{...body,simulation_mode:false},'x'),/SYNTHETIC_ONLY/));
test('proposed tasks cannot execute',()=>{const s=make();const r=s.mutate('agent','ep1','task',{task_id:'t1',title:'Synthetic follow-up',due_at:'2026-10-10T12:00:00Z'},'task',1);assert.equal(r.tasks[0].execution_allowed,false);});
test('full lifecycle persists, replays, keeps retry receipt and detects tamper',()=>{const dir=mkdtempSync(join(tmpdir(),'episode-'));try{const path=join(dir,'journal.json');const s=new EpisodeStore(actors,path);s.mutate('reviewer','ep1','create',body,'create1');s.mutate('agent','ep1','evidence',evidence,'ev',1);s.mutate('reviewer','ep1','state',{status:'review'},'review',2);s.mutate('reviewer','ep1','state',{status:'active'},'active',3);s.mutate('reviewer','ep1','state',{status:'closed'},'close',4);const replay=new EpisodeStore(actors,path);assert.deepEqual(replay.get('reviewer','ep1'),s.get('reviewer','ep1'));assert.equal(replay.timeline('reviewer','ep1').length,5);assert.equal(replay.mutate('reviewer','ep1','create',body,'create1').version,1);assert.throws(()=>replay.mutate('reviewer','ep1','evidence',{...evidence,evidence_id:'ev2'},'ev2',5),/EPISODE_CLOSED/);const events=JSON.parse(readFileSync(path));events[0].snapshot.status='active';writeFileSync(path,JSON.stringify(events));assert.throws(()=>new EpisodeStore(actors,path),/CORRUPT_JOURNAL/);}finally{rmSync(dir,{recursive:true,force:true});}});
