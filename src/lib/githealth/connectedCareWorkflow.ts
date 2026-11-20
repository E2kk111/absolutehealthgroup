/**
 * GitHealth workflow domain contract — synthetic prototype only.
 * No PHI, persistence, provider identity verification, EHR connectivity or live escalation.
 */
export type CareSetting = "Senior living" | "Skilled nursing" | "Rehabilitation" | "Home";
export type Symptom = "None reported" | "Fatigue" | "Shortness of breath" | "Chest pain / severe breathing difficulty";
export type ReviewStatus = "not-submitted" | "pending-human-review" | "reviewed-demo" | "escalation-demo";
export type EvidenceLevel = "workflow-demo" | "investigational" | "not-connected";

export type SyntheticIntake = {
  patientAlias: "Jordan (synthetic)";
  setting: CareSetting;
  rehabGoal: string;
  symptom: Symptom;
  consentToDemo: boolean;
  educationAcknowledged: boolean;
};
export type WorkflowEvent = {
  id: number;
  kind: "intake" | "anika" | "aion" | "education";
  detail: string;
  timestamp: string;
};
export type WorkflowState = {
  intake: SyntheticIntake;
  status: ReviewStatus;
  submitted: boolean;
  queueReason: string;
  conversation: string[];
  events: WorkflowEvent[];
};
export const initialIntake: SyntheticIntake = {
  patientAlias: "Jordan (synthetic)",
  setting: "Rehabilitation",
  rehabGoal: "Walk 150 feet with approved assistance",
  symptom: "None reported",
  consentToDemo: false,
  educationAcknowledged: false,
};
export const initialState: WorkflowState = {
  intake: initialIntake, status: "not-submitted", submitted: false,
  queueReason: "", conversation: [], events: [],
};
const append = (state: WorkflowState, kind: WorkflowEvent["kind"], detail: string): WorkflowEvent[] => [
  ...state.events, { id: state.events.length + 1, kind, detail, timestamp: new Date().toISOString() },
];
export const classifySymptom = (symptom: Symptom): { priority: "routine" | "prompt" | "emergency"; guidance: string } => {
  if (symptom === "Chest pain / severe breathing difficulty") return {
    priority: "emergency",
    guidance: "Potential emergency: call local emergency services now. This demo does not contact anyone.",
  };
  if (symptom === "Shortness of breath") return {
    priority: "prompt",
    guidance: "New shortness of breath warrants prompt clinical assessment before therapy. This demo cannot alert a clinician.",
  };
  if (symptom === "Fatigue") return {
    priority: "routine",
    guidance: "New or worsening fatigue should be discussed with the care team. No notification is sent.",
  };
  return { priority: "routine", guidance: "Continue following the approved care plan; no treatment changes are made here." };
};
export const submitSyntheticIntake = (state: WorkflowState, intake: SyntheticIntake): WorkflowState => {
  if (!intake.consentToDemo) return state;
  const risk = classifySymptom(intake.symptom);
  const queueReason = risk.priority === "emergency"
    ? "Emergency guidance shown; NO emergency service contacted"
    : risk.priority === "prompt"
      ? "Priority symptom review requested — simulated"
      : "Routine rehabilitation intake review — simulated";
  return {
    ...state, intake, submitted: true, status: "pending-human-review", queueReason,
    conversation: [], events: append(state, "intake", "Synthetic intake submitted; " + queueReason),
  };
};
export const recordConversation = (state: WorkflowState, message: string): WorkflowState => {
  if (!state.submitted || !message.trim()) return state;
  const trimmed = message.trim().slice(0, 300);
  return { ...state, conversation: [...state.conversation, trimmed], events: append(state, "anika", "Synthetic conversation note: " + trimmed) };
};
export const recordReview = (state: WorkflowState, decision: "review" | "escalate"): WorkflowState => {
  if (!state.submitted || state.status !== "pending-human-review") return state;
  const status: ReviewStatus = decision === "escalate" ? "escalation-demo" : "reviewed-demo";
  const detail = decision === "escalate" ? "Simulated escalation selected; no real notification sent" : "Simulated review completed; no credentialed reviewer involved";
  return { ...state, status, events: append(state, "aion", detail) };
};
