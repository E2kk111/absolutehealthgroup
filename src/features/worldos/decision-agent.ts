import { z } from 'zod';

// Inspired by atomic, typed decision primitives. This is NOT the Jev API or model.
export const agentVersion = 'episode-decision-rules-0.1';
const evidenceKey = z.enum(['medications','clinical','homeSupport','homeServices','facility','coverage']);
const scenario = z.enum(['homeTomorrow','homeLater','facilityTomorrow']);
const evidenceSchema = z.object({
 key:evidenceKey,
 status:z.enum(['confirmed','unknown','conflicting']),
 source_ref:z.string().regex(/^synthetic:\/\/[a-zA-Z0-9_/-]+$/).nullable(),
}).strict();
export const decisionInputSchema = z.object({
 episode_id:z.literal('EP-SYN-001'),
 episode_version:z.number().int().positive(),
 scenario_id:scenario,
 policy_version:z.literal('DEMO-TRANSITION-1.0'),
 simulation_mode:z.literal(true),
 executed:z.boolean(),
 evidence:z.array(evidenceSchema).length(6).refine(rows=>new Set(rows.map(r=>r.key)).size===6,'Evidence keys must be unique'),
}).strict();
const reasonCode=z.enum(['REQUIRED_EVIDENCE_UNKNOWN','REQUIRED_EVIDENCE_CONFLICT','SOURCE_REFERENCE_MISSING','HUMAN_REVIEW_REQUIRED','ALREADY_EXECUTED']);
const routes=['gather_evidence','resolve_conflict','request_human_review','inspect_execution_record'] as const;
export const decisionOutputSchema=z.object({
 schema_version:z.literal('episode-decision-v1'),
 agent_version:z.literal(agentVersion),
 episode_id:z.literal('EP-SYN-001'),
 episode_version:z.number().int().positive(),
 scenario_id:scenario,
 policy_version:z.literal('DEMO-TRANSITION-1.0'),
 provider:z.literal('local_deterministic_rules'),
 choice:z.object({value:z.enum(routes),probabilities:z.null(),confidence:z.null()}).strict(),
 score:z.object({name:z.literal('required_evidence_completeness'),value:z.number().min(0).max(1),confirmed:z.number().int().nonnegative(),required:z.number().int().positive(),interpretation:z.literal('record_count_ratio_not_clinical_probability')}).strict(),
 assertions:z.array(z.object({key:evidenceKey,value:z.enum(['confirmed','unknown','conflicting']),source_ref:z.string().nullable()}).strict()),
 missing_evidence:z.array(evidenceKey),
 conflicting_evidence:z.array(evidenceKey),
 reason_codes:z.array(reasonCode),
 human_review_required:z.literal(true),
 execution_authorized:z.literal(false),
 clinical_readiness:z.literal('not_assessed'),
 confidence_status:z.literal('not_estimated_no_calibrated_model'),
}).strict();
export type DecisionInput=z.infer<typeof decisionInputSchema>;
export type EpisodeDecision=z.infer<typeof decisionOutputSchema>;
const requirements:Record<DecisionInput['scenario_id'],DecisionInput['evidence'][number]['key'][]>={
 homeTomorrow:['medications','clinical','homeSupport','homeServices','coverage'],
 homeLater:['medications','clinical','homeSupport','homeServices','coverage'],
 facilityTomorrow:['medications','clinical','facility','coverage'],
};
export function evaluateEpisode(input:unknown):EpisodeDecision {
 // Reject malformed, extra or non-synthetic fields instead of guessing or coercing.
 const state=decisionInputSchema.parse(input);
 const rows=requirements[state.scenario_id].map(key=>state.evidence.find(r=>r.key===key)!);
 const assertions=rows.map(r=>({key:r.key,value:r.status==='confirmed'&&!r.source_ref?'unknown' as const:r.status,source_ref:r.source_ref}));
 const missing=assertions.filter(r=>r.value==='unknown').map(r=>r.key);
 const conflicts=assertions.filter(r=>r.value==='conflicting').map(r=>r.key);
 const confirmed=assertions.filter(r=>r.value==='confirmed').length;
 const reasons:EpisodeDecision['reason_codes']=[];
 if(missing.length)reasons.push('REQUIRED_EVIDENCE_UNKNOWN');
 if(conflicts.length)reasons.push('REQUIRED_EVIDENCE_CONFLICT');
 if(rows.some(r=>r.status==='confirmed'&&!r.source_ref))reasons.push('SOURCE_REFERENCE_MISSING');
 if(state.executed)reasons.push('ALREADY_EXECUTED');
 reasons.push('HUMAN_REVIEW_REQUIRED');
 const choice=state.executed?'inspect_execution_record':conflicts.length?'resolve_conflict':missing.length?'gather_evidence':'request_human_review';
 return decisionOutputSchema.parse({schema_version:'episode-decision-v1',agent_version:agentVersion,episode_id:state.episode_id,episode_version:state.episode_version,scenario_id:state.scenario_id,policy_version:state.policy_version,provider:'local_deterministic_rules',choice:{value:choice,probabilities:null,confidence:null},score:{name:'required_evidence_completeness',value:confirmed/rows.length,confirmed,required:rows.length,interpretation:'record_count_ratio_not_clinical_probability'},assertions,missing_evidence:missing,conflicting_evidence:conflicts,reason_codes:reasons,human_review_required:true,execution_authorized:false,clinical_readiness:'not_assessed',confidence_status:'not_estimated_no_calibrated_model'});
}
