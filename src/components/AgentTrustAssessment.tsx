import { useMemo, useState } from "react";
import { AlertTriangle, ClipboardCheck, ShieldCheck } from "lucide-react";

type Level = 0 | 1 | 2;
type Dimension = { id: string; title: string; question: string; evidence: string; critical?: boolean };
const agentDimensions: Dimension[] = [
  { id: "identity", title: "Agent identity & ownership", question: "Is the owner and this agent's intended task documented?", evidence: "Agent ID, task scope and accountable owner" },
  { id: "evidence", title: "Evidence provenance", question: "Can consequential agent outputs be traced to permitted source evidence?", evidence: "Permitted source records, consent and lineage", critical: true },
  { id: "policy", title: "Policy enforcement", question: "Are versioned rules applied independently of agent recommendations?", evidence: "Policy versions, denied-action and bypass tests", critical: true },
  { id: "authority", title: "Human authority", question: "Are consequential actions held for verified, appropriately authorized human review?", evidence: "Reviewer identity, role validation and approval tests", critical: true },
  { id: "safety", title: "Runtime boundaries", question: "Are tool/data permissions and failure handling tested for this agent?", evidence: "Tool allowlists, isolation, fail-closed and incident tests", critical: true },
  { id: "audit", title: "Decision reconstruction", question: "Can an independent reviewer reconstruct the agent's decision and action trace?", evidence: "Input/output logs, tool calls, reviewer and policy trace" }
];
const organizationDimensions: Dimension[] = [
  { id: "inventory", title: "AI asset inventory", question: "Do you track deployed and proposed AI assets with owners and risk classification?", evidence: "Versioned asset inventory and accountable owners" },
  { id: "lifecycle", title: "Lifecycle management", question: "Are AI assets evaluated through development, change, deployment and retirement?", evidence: "Release gates, change-control and retirement records" },
  { id: "data", title: "Data alignment", question: "Are data origins, access rights, quality and intended AI uses governed?", evidence: "Data mapping, permission checks and quality controls", critical: true },
  { id: "compliance", title: "Compliance & traceability", question: "Are applicable policies and traceability requirements documented and reviewed?", evidence: "Regulatory applicability analysis and decision logs", critical: true },
  { id: "oversight", title: "Trust & risk oversight", question: "Are risks, incidents and independent review processes actively managed?", evidence: "Risk register, escalation and review evidence", critical: true },
  { id: "ownership", title: "Organizational accountability", question: "Are accountable teams and approval responsibilities established?", evidence: "Governance charter, RACI and human authority assignments", critical: true }
];
const choices: { value: Level; label: string }[] = [
  { value: 0, label: "Not demonstrated" },
  { value: 1, label: "Documented / partial" },
  { value: 2, label: "Self-reported as evidence reviewed" }
];
const blank = (dimensions: Dimension[]) => Object.fromEntries(dimensions.map(d => [d.id, 0])) as Record<string, Level>;
const format = (d: Dimension, score: Level) => d.title + ": " + score + "/2; evidence to verify: " + d.evidence;
export default function AgentTrustAssessment() {
  const [mode, setMode] = useState<"agent" | "organization">("agent");
  const [agentScores, setAgentScores] = useState<Record<string, Level>>(() => blank(agentDimensions));
  const [organizationScores, setOrganizationScores] = useState<Record<string, Level>>(() => blank(organizationDimensions));
  const [taskName, setTaskName] = useState("");
  const dimensions = mode === "agent" ? agentDimensions : organizationDimensions;
  const scores = mode === "agent" ? agentScores : organizationScores;
  const setScores = mode === "agent" ? setAgentScores : setOrganizationScores;
  const assessment = useMemo(() => {
    const points = dimensions.reduce((sum, d) => sum + (scores[d.id] || 0), 0);
    const criticalGaps = dimensions.filter(d => d.critical && scores[d.id] !== 2);
    const gaps = dimensions.filter(d => scores[d.id] !== 2);
    return { points, percent: Math.round(points / (dimensions.length * 2) * 100), criticalGaps, gaps };
  }, [dimensions, scores]);
  const plan = assessment.gaps.map((d, i) => String(i + 1) + ". " + d.title + ": gather " + d.evidence.toLowerCase() + "; run a synthetic negative/control test and document independent review.");
  const exportReport = () => {
    const lines = [
      mode === "agent" ? "GitHealth Agent Trust Score™ — synthetic self-assessment" : "GitHealth Organizational AI Readiness — synthetic self-assessment",
      "Scope: " + (mode === "agent" ? (taskName.trim() || "Unspecified agent/task") : "Organization"),
      "Score: " + assessment.percent + "/100 (" + assessment.points + "/12; self-reported, unvalidated)",
      "Control review: " + (assessment.criticalGaps.length ? "MANDATORY EVIDENCE GAPS — do not authorize consequential actions" : "SELF-REPORTED CONTROLS COMPLETE — independent verification still required"),
      ...dimensions.map(d => format(d, scores[d.id])),
      "Missing or partial controls: " + (assessment.gaps.map(d => d.title).join(", ") || "None reported"),
      "Proposed SimLab test plan:", ...(plan.length ? plan : ["Verify claims with controlled synthetic tests and reviewer sign-off."]),
      "AION policy enforcement and qualified human authorization remain independent of this score.",
      "No clinical validity, security certification, live policy integration or permission to deploy is represented."
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = mode === "agent" ? "githealth-agent-trust-assessment.txt" : "githealth-organizational-ai-readiness.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  };
  return <section id="trust-score" className="border-t border-[#D8DFE5] bg-white py-20">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">Developer preview · Illustrative self-assessment</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">Don't just deploy AI agents. Know what you can trust them to do.</h2>
      <p className="mt-6 max-w-3xl leading-relaxed text-[#506076]">Two distinct readiness lenses: organizational ability to govern AI, and task-specific agent readiness. Responses are self-reported; the 0–100 score is an illustrative index, not a validated measure of trust, safety or clinical readiness.</p>
      <div className="mt-8 inline-flex flex-wrap rounded-lg border border-[#D8DFE5] bg-[#F1F5F8] p-1" role="group" aria-label="Assessment scope">
        <button type="button" onClick={() => setMode("agent")} aria-pressed={mode === "agent"} className={`rounded-md px-4 py-2 text-sm font-semibold ${mode === "agent" ? "bg-[#17243A] text-white" : "text-[#506076]"}`}>Agent trust</button>
        <button type="button" onClick={() => setMode("organization")} aria-pressed={mode === "organization"} className={`rounded-md px-4 py-2 text-sm font-semibold ${mode === "organization" ? "bg-[#17243A] text-white" : "text-[#506076]"}`}>Organizational readiness</button>
      </div>
      <p className="mt-3 max-w-3xl text-sm text-[#68798D]">{mode === "agent" ? "Assess one agent for one specifically defined task. A score is not portable to other tasks, data, users or environments." : "Assess organization-level AI governance capabilities. This view does not evaluate or approve any individual agent."}</p>
      {mode === "agent" && <div className="mt-5 max-w-xl"><label htmlFor="agent-task" className="block text-sm font-semibold">Agent and intended task</label><input id="agent-task" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="E.g. synthetic discharge evidence reviewer" className="mt-2 w-full rounded-md border border-[#A8B7C6] bg-white p-3" /></div>}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">{dimensions.map((d, index) => <div key={d.id} className="rounded-lg border border-[#D8DFE5] bg-[#FAFBFC] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-lg font-semibold">{String(index + 1).padStart(2, "0")}. {d.title}</h3>{d.critical && <span className="rounded-full bg-[#FCE8E4] px-3 py-1 text-xs font-bold text-[#8A3125]">Mandatory review control</span>}</div>
          <p className="mt-2 text-[#506076]">{d.question}</p>
          <label htmlFor={`trust-${mode}-${d.id}`} className="mt-5 block text-xs font-semibold uppercase tracking-wide text-[#506076]">Self-reported evidence level</label>
          <select id={`trust-${mode}-${d.id}`} value={scores[d.id]} onChange={e => setScores(prev => ({ ...prev, [d.id]: Number(e.target.value) as Level }))} className="mt-2 w-full rounded-md border border-[#A8B7C6] bg-white px-3 py-3 text-[#17243A]">{choices.map(c => <option key={c.value} value={c.value}>{c.value}/2 — {c.label}</option>)}</select>
          <p className="mt-2 text-xs text-[#68798D]">Evidence to verify: {d.evidence}</p>
        </div>)}</div>
        <aside className="self-start rounded-lg border border-[#D8DFE5] bg-[#F9F8F5] p-7 lg:sticky lg:top-28" aria-live="polite">
          <div className="flex items-center gap-2 text-[#366E9B]"><ClipboardCheck size={21}/><span className="text-sm font-bold uppercase tracking-wider">{mode === "agent" ? "Agent trust" : "Organization readiness"} · illustrative</span></div>
          <div className="mt-6 text-6xl font-semibold tabular-nums">{assessment.percent}<span className="text-2xl text-[#68798D]">/100</span></div>
          <p className="mt-2 text-sm text-[#506076]">{assessment.points} of 12 rubric points · self-reported, unvalidated</p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#D8DFE5]"><div className="h-full bg-[#366E9B] transition-all" style={{ width: assessment.percent + "%" }}/></div>
          <div className="mt-8 flex items-start gap-3 rounded-md border border-[#D8DFE5] bg-white p-4">{assessment.criticalGaps.length ? <AlertTriangle className="mt-0.5 shrink-0 text-[#A23A2B]"/> : <ShieldCheck className="mt-0.5 shrink-0 text-[#366E9B]"/>}<div><p className="font-bold">{assessment.criticalGaps.length ? "Mandatory control gaps reported" : "Ready for independent evidence review"}</p><p className="mt-2 text-sm leading-relaxed text-[#506076]">{assessment.criticalGaps.length ? assessment.criticalGaps.length + " mandatory controls are not fully self-reported. A high total cannot override missing controls." : "All mandatory controls are self-reported as complete. Independent verification is still required; no execution is authorized."}</p></div></div>
          <h4 className="mt-8 font-semibold">Remediation priorities</h4>
          {assessment.gaps.length ? <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#506076]">{assessment.gaps.map(d => <li key={d.id}>{d.title}: verify {d.evidence.toLowerCase()}</li>)}</ul> : <p className="mt-3 text-sm text-[#506076]">No self-reported gaps. Verify every control independently.</p>}
          <h4 className="mt-7 font-semibold">Proposed SimLab synthetic checks</h4>
          <p className="mt-2 text-sm text-[#506076]">{mode === "agent" ? "Missing evidence, denied tools, unauthorized approvals and reconstructable action traces." : "Inventory completeness, lifecycle change controls, data permissions, escalation and role ownership."} These tests are recommendations, not tests run by this page.</p>
          <button type="button" onClick={exportReport} className="mt-8 w-full rounded-md bg-[#17243A] px-5 py-3 font-semibold text-white hover:bg-[#294364]">Download assessment and test plan</button>
          <button type="button" onClick={() => setScores(blank(dimensions))} className="mt-3 w-full rounded-md border border-[#A8B7C6] px-5 py-3 font-semibold hover:bg-white">Reset this assessment</button>
          <p className="mt-5 text-xs leading-relaxed text-[#68798D]">Browser-only prototype. Not linked to AION, SimLab or production systems. This score does not certify compliance, validate clinical safety, override deterministic AION controls, authorize execution or replace qualified human approval.</p>
        </aside>
      </div>
      <p className="mt-8 max-w-4xl text-xs text-[#68798D]">Framework inspiration: organizational governance capabilities discussed by Collibra's AI Trust Score. GitHealth's agent rubric, scores and gates are independent proposed designs; no affiliation, equivalent methodology or third-party endorsement is implied.</p>
    </div>
  </section>;
}
