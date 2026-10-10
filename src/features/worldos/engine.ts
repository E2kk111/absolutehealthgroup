import { evaluateEpisode, type EpisodeDecision } from './decision-agent.ts';
export type ScenarioId = 'homeTomorrow' | 'homeLater' | 'facilityTomorrow';
export type DemoActor = 'reviewer' | 'agent';
export type EvidenceKey = 'medications' | 'clinical' | 'homeSupport' | 'homeServices' | 'facility' | 'coverage';
export type Assumptions = { acuteDaily: number; homeDaily: number; facilityDaily: number; transport: number };
export type Approval = { scenario: ScenarioId; version: number; reviewer: string; expiresAt: string };
export type Model = { version: number; selected: ScenarioId; evidence: Record<EvidenceKey, boolean>; assumptions: Assumptions; approval: Approval | null; executed: boolean };
export type AuditEvent = { sequence: number; time: string; actor: string; action: string; result: string; policy: string; previousHash: string; snapshot: Model; agentDecision?: EpisodeDecision; hash: string };
export type Session = { schema: 'worldos-demo-v1'; events: AuditEvent[]; model: Model };
export const policy = 'DEMO-TRANSITION-1.0';
export const episodeId = 'EP-SYN-001';
export const evidenceLabels: Record<EvidenceKey,string> = { medications:'Medication reconciliation', clinical:'Clinical readiness review', homeSupport:'Home support confirmed', homeServices:'Home services accepted', facility:'Facility acceptance', coverage:'Coverage / authorization verified' };
export const scenarios: { id: ScenarioId; name: string; timing: string; setting: string; acuteDays: number; requirements: EvidenceKey[]; tasks: string[] }[] = [
 {id:'homeTomorrow',name:'Home with services',timing:'Tomorrow · D+1',setting:'Home',acuteDays:1,requirements:['medications','clinical','homeSupport','homeServices','coverage'],tasks:['Confirm home service handoff','Prepare follow-up coordination task','Record family handoff']},
 {id:'homeLater',name:'Home after preparation',timing:'In three days · D+3',setting:'Home',acuteDays:3,requirements:['medications','clinical','homeSupport','homeServices','coverage'],tasks:['Address current evidence gaps','Recheck readiness before transition','Prepare home service handoff']},
 {id:'facilityTomorrow',name:'Post-acute facility',timing:'Tomorrow · D+1',setting:'Facility',acuteDays:1,requirements:['medications','clinical','facility','coverage'],tasks:['Confirm receiving facility handoff','Prepare transport coordination task','Record receiving team acknowledgment']},
];
export const initialModel = (): Model => ({version:1,selected:'homeTomorrow',evidence:{medications:true,clinical:false,homeSupport:true,homeServices:false,facility:false,coverage:false},assumptions:{acuteDaily:1800,homeDaily:180,facilityDaily:550,transport:150},approval:null,executed:false});
export function estimate(model: Model, scenarioId: ScenarioId) {
 const scenario=scenarios.find(s=>s.id===scenarioId)!;
 const postDays=7-scenario.acuteDays;
 const postDaily=scenario.setting==='Home'?model.assumptions.homeDaily:model.assumptions.facilityDaily;
 const total=scenario.acuteDays*model.assumptions.acuteDaily+postDays*postDaily+model.assumptions.transport;
 return {total,low:Math.round(total*.8),high:Math.round(total*1.2),acuteDays:scenario.acuteDays,postDays,postDaily,missing:scenario.requirements.filter(k=>!model.evidence[k])};
}
export function approvalValid(model:Model, now=Date.now()) {
 return !!model.approval && !model.executed && model.approval.version===model.version && model.approval.scenario===model.selected && Date.parse(model.approval.expiresAt)>now && estimate(model,model.selected).missing.length===0;
}
const hash=async(value:unknown)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify(value))))).map(b=>b.toString(16).padStart(2,'0')).join('');
async function append(session:Session,actor:string,action:string,result:string,model:Model,time:string,agentDecision?:EpisodeDecision):Promise<Session>{
 const payload={sequence:session.events.length+1,time,actor,action,result,policy,previousHash:session.events[session.events.length-1]?.hash??'GENESIS',snapshot:structuredClone(model),...(agentDecision?{agentDecision}:{})};
 const event={...payload,hash:await hash(payload)};
 return {schema:'worldos-demo-v1',model,events:[...session.events,event]};
}
export async function createSession():Promise<Session>{
 const m=initialModel();return append({schema:'worldos-demo-v1',model:m,events:[]},'system-demo','EPISODE_INITIALIZED','Synthetic episode loaded; no patient systems connected.',m,new Date().toISOString());
}
export type Action = {type:'select';value:ScenarioId}|{type:'evidence';key:EvidenceKey;value:boolean}|{type:'assumptions';value:Assumptions}|{type:'compare'}|{type:'agent_decide'}|{type:'approve'}|{type:'execute'}|{type:'hold'};
export async function act(session:Session, actor:DemoActor, action:Action, now=Date.now()):Promise<Session>{
 const m=structuredClone(session.model); const time=new Date(now).toISOString();
 let result=''; let label=action.type.toUpperCase();
 if(action.type==='agent_decide'){
  const decision=evaluateEpisode({episode_id:episodeId,episode_version:m.version,scenario_id:m.selected,policy_version:policy,simulation_mode:true,executed:m.executed,evidence:(Object.keys(evidenceLabels) as EvidenceKey[]).map(key=>({key,status:m.evidence[key]?'confirmed':'unknown',source_ref:m.evidence[key]?`synthetic://${episodeId}/${key}`:null}))});
  return append(session,'episode-decision-agent','AGENT_DECISION',`Next workflow step: ${decision.choice.value}. Clinical readiness not assessed; human review required.`,m,time,decision);
 }
 if(action.type==='compare') result='Three deterministic scenarios compared; assumptions only, no clinical prediction.';
 else if(action.type==='approve') {
  if(actor!=='reviewer'){label='APPROVAL_DENIED';result='AI self-approval prohibited by demo policy.';}
  else if(m.executed){label='APPROVAL_DENIED';result='This version already executed; revise the plan to create a new version.';}
  else if(estimate(m,m.selected).missing.length){label='APPROVAL_HELD';result='Required evidence is missing. No approval issued.';}
  else {m.approval={scenario:m.selected,version:m.version,reviewer:'reviewer-demo',expiresAt:new Date(now+15*60*1000).toISOString()};result='Demo human approval bound to scenario, evidence/assumption version and policy; expires in 15 minutes.';}
 } else if(action.type==='execute') {
  if(actor!=='reviewer'||!approvalValid(m,now)){label='EXECUTION_DENIED';result='Valid human approval and unchanged evidence/assumptions are required; duplicate execution is blocked.';}
  else {m.executed=true;result='Simulated handoff tasks recorded. No clinical action, message or claim submitted.';}
 } else if(action.type==='hold') {m.approval=null;result='Plan held for human review.';}
 else {
  if(action.type==='select') {if(!scenarios.some(s=>s.id===action.value))throw new Error('Invalid scenario');m.selected=action.value;result=`Scenario selected: ${action.value}. Prior approval invalidated.`;}
  if(action.type==='evidence') {
   if(actor!=='reviewer')return append(session,actor,'EVIDENCE_DENIED','Only the demo reviewer can attest synthetic evidence.',m,time);
   if(!(action.key in evidenceLabels)||typeof action.value!=='boolean')throw new Error('Invalid evidence');
   m.evidence[action.key]=action.value;result=`${evidenceLabels[action.key]}: ${action.value?'confirmed':'missing'}. Prior approval invalidated.`;
  }
  if(action.type==='assumptions') {
   if(Object.keys(action.value).length!==4||Object.values(action.value).some(v=>!Number.isFinite(v)||v<0||v>10000))throw new Error('Assumptions must be between 0 and 10,000.');
   m.assumptions=structuredClone(action.value);result='Resource assumptions updated. Prior approval invalidated.';
  }
  m.version++;m.approval=null;m.executed=false;
 }
 return append(session,actor+'-demo',label,result,m,time);
}
export async function verifySession(input:unknown):Promise<boolean>{
 try{
 const s=input as Session;
 if(s.schema!=='worldos-demo-v1'||!Array.isArray(s.events)||!s.events.length||s.events.length>2000)return false;
 let prior='GENESIS';
 for(let i=0;i<s.events.length;i++){
  const {hash:stored,...payload}=s.events[i];
  if(payload.sequence!==i+1||payload.previousHash!==prior||payload.policy!==policy||await hash(payload)!==stored)return false;
  prior=stored;
 }
 return JSON.stringify(s.model)===JSON.stringify(s.events[s.events.length-1]?.snapshot);
 }catch{return false;}
}
