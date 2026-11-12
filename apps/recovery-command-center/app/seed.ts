export const categories=['Readiness','Enrollment','Assessments','Care plans','Home programs','Monitoring','Escalation','Reassessment','Outcomes evidence','Blockers','Decisions needed','Next actions'];
export const statuses=['Not started','In progress','Blocked','Complete','Unknown'];
const seeds=[
['Readiness','Approve pilot scope and launch gate','Confirm MVP scope, delivery setting, accountable lead, and launch criteria.','P1'],
['Readiness','Confirm staffing and operating workflow','Assign clinical and operations owners; confirm coverage and handoffs.','P1'],
['Readiness','Confirm data and consent workflow','Approve consent, data access, evidence handling, and participant privacy workflow.','P1'],
['Enrollment','Define eligibility and recruitment workflow','Confirm inclusion criteria, referral sources, consent steps, and enrollment target.','P1'],
['Assessments','Select baseline and follow-up assessment set','Confirm instruments, scoring, assessor, and timepoints before participant assessment.','P1'],
['Care plans','Approve individualized care-plan workflow','Define goals, responsible clinician, review schedule, and participant acknowledgment.','P2'],
['Home programs','Define home-program delivery','Confirm program components, instructions, accessibility, and adherence capture.','P2'],
['Monitoring','Set monitoring cadence and review ownership','Define measures, review frequency, coverage, and documentation.','P1'],
['Escalation','Approve escalation and handoff protocol','Confirm clinical thresholds, response times, backup coverage, and closure evidence.','P1'],
['Reassessment','Confirm reassessment timepoints','Proposed day 30, 60, and 90 reviews are tentative; obtain clinical approval.','P2'],
['Outcomes evidence','Define outcome measures and evidence standard','Confirm endpoints, baseline pairing, denominators, missing-data handling, and evidence sources.','P1'],
['Decisions needed','Confirm launch date and site','Name the pilot setting and approve a start date after readiness review.','P1'],
['Decisions needed','Confirm cohort size within 25–50 range','Select target and capacity assumptions for the 90-day MVP.','P1'],
['Next actions','Assign accountable pilot lead','Nominate lead and workstream owners; record acceptance and evidence.','P1']
];
export const initialState={revision:0,settings:{start:'',enrolled:'',enrollmentEvidence:'',enrollmentVerifier:'',target:'',notes:''},records:seeds.map((s,i)=>({id:'r'+i,category:s[0],title:s[1],next:s[2],priority:s[3],status:'Not started',certainty:s[0]==='Reassessment'?'Tentative':'Planned',owner:'',evidence:'',verifier:'',due:'',detail:'',participant:'',timepoint:'',measure:'',value:'',updated:''})),history:[],briefs:[]};
