import { useMemo, useState } from "react";
import { AlertTriangle, ClipboardCheck, ShieldCheck } from "lucide-react";

type Level = 0 | 1 | 2;
type Dimension = { id: string; title: string; question: string; evidence: string; critical?: boolean };
const dimensions: Dimension[] = [
  { id: "identity", title: "Identity & ownership", question: "Is an accountable owner and intended use documented?", evidence: "Owner, use-case inventory and scope" },
  { id: "evidence", title: "Evidence provenance", question: "Can every consequential claim be traced to permitted evidence?", evidence: "Source records, permissions and lineage", critical: true },
  { id: "policy", title: "Policy compliance", question: "Are versioned rules and disallowed actions enforced independently?", evidence: "Policy version and blocked-action tests", critical: true },
  { id: "authority", title: "Human authority", question: "Are consequential actions held for verified, authorized human review?", evidence: "Approval boundary and reviewer verification", critical: true },
  { id: "safety", title: "Runtime safety", question: "Are tool permissions, failures and data boundaries tested?", evidence: "Sandbox, denial and incident test results", critical: true },
  { id: "audit", title: "Auditability", question: "Can an independent reviewer reconstruct the decision?", evidence: "Input, output, policy and action trace" }
];
const choices: { value: Level; label: string }[] = [
  { value: 0, label: "Not demonstrated" },
  { value: 1, label: "Documented / partial" },
  { value: 2, label: "Evidence reviewed" }
];
const initial = Object.fromEntries(dimensions.map(d => [d.id, 0])) as Record<string, Level>;
export default function AgentTrustAssessment() {
  const [scores, setScores] = useState<Record<string, Level>>(initial);
  const [mode, setMode] = useState<"agent" | "organization">("agent");
  const assessment = useMemo(() => {
    const points = dimensions.reduce((sum, d) => sum + scores[d.id], 0);
    const criticalGaps = dimensions.filter(d => d.critical && scores[d.id] !== 2);
    const gaps = dimensions.filter(d => scores[d.id] < 2);
    return { points, percent: Math.round(points / (dimensions.length * 2) * 100), criticalGaps, gaps };
  }, [scores]);
  const exportReport = () => {
    const lines = [
      "GitHealth Agent Trust Score™ — illustrative self-assessment",
      "Mode: " + (mode === "agent" ? "Agent-level" : "Organization-level"),
      "Score: " + assessment.percent + "/100 (self-reported, not validated)",
      "Governance gate: " + (assessment.criticalGaps.length ? "BLOCKED — mandatory evidence not demonstrated" : "READY FOR INDEPENDENT REVIEW — not authorized for deployment"),
      ...dimensions.map(d => d.title + ": " + scores[d.id] + "/2; suggested evidence: " + d.evidence),
      "Missing or partial controls: " + (assessment.gaps.map(d => d.title).join(", ") || "None self-reported"),
      "This score does not grant clinical authorization, certify compliance, or permit live execution."
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "githealth-agent-trust-self-assessment.txt"; a.click();
    URL.revokeObjectURL(url);
  };
  return <section id="trust-score" className="border-t border-[#D8DFE5] bg-white py-20">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">Proposed feature · Interactive concept</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">Don't just deploy AI agents. Know what you can trust them to do.</h2>
      <p className="mt-6 max-w-3xl leading-relaxed text-[#506076]">Explore a transparent, evidence-oriented readiness rubric. This browser-only demonstration uses self-reported answers, not independently verified evidence or live AION/SimLab integration.</p>
      <div className="mt-8 inline-flex rounded-lg border border-[#D8DFE5] bg-[#F1F5F8] p-1" role="group" aria-label="Assessment scope">
        <button type="button" onClick={() => setMode("agent")} aria-pressed={mode === "agent"} className={`rounded-md px-4 py-2 text-sm font-semibold ${mode === "agent" ? "bg-[#17243A] text-white" : "text-[#506076]"}`}>Agent readiness</button>
        <button type="button" onClick={() => setMode("organization")} aria-pressed={mode === "organization"} className={`rounded-md px-4 py-2 text-sm font-semibold ${mode === "organization" ? "bg-[#17243A] text-white" : "text-[#506076]"}`}>Organization readiness</button>
      </div>
      <p className="mt-3 text-sm text-[#68798D]">{mode === "agent" ? "Evaluate one synthetic agent and its intended task." : "Illustrative organizational view using the same preliminary controls; a dedicated organizational rubric is not yet developed."}</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">{dimensions.map((d, index) => <div key={d.id} className="rounded-lg border border-[#D8DFE5] bg-[#FAFBFC] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-lg font-semibold">{String(index+1).padStart(2, "0")}. {d.title}</h3>{d.critical && <span className="rounded-full bg-[#FCE8E4] px-3 py-1 text-xs font-bold text-[#8A3125]">Mandatory gate</span>}</div>
          <p className="mt-2 text-[#506076]">{d.question}</p>
          <label htmlFor={`trust-${d.id}`} className="mt-5 block text-xs font-semibold uppercase tracking-wide text-[#506076]">Self-reported evidence level</label>
          <select id={`trust-${d.id}`} value={scores[d.id]} onChange={e => setScores(prev => ({ ...prev, [d.id]: Number(e.target.value) as Level }))} className="mt-2 w-full rounded-md border border-[#A8B7C6] bg-white px-3 py-3 text-[#17243A]">{choices.map(c => <option key={c.value} value={c.value}>{c.value}/2 — {c.label}</option>)}</select>
          <p className="mt-2 text-xs text-[#68798D]">Evidence to request: {d.evidence}</p>
        </div>)}</div>
        <aside className="self-start rounded-lg border border-[#D8DFE5] bg-[#F9F8F5] p-7 lg:sticky lg:top-28" aria-live="polite">
          <div className="flex items-center gap-2 text-[#366E9B]"><ClipboardCheck size={21}/><span className="text-sm font-bold uppercase tracking-wider">Illustrative readiness</span></div>
          <div className="mt-6 text-6xl font-semibold tabular-nums">{assessment.percent}<span className="text-2xl text-[#68798D]">/100</span></div>
          <p className="mt-2 text-sm text-[#506076]">{assessment.points} of 12 rubric points · self-reported</p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#D8DFE5]"><div className="h-full bg-[#366E9B] transition-all" style={{ width: assessment.percent + "%" }}/></div>
          <div className="mt-8 flex items-start gap-3 rounded-md border border-[#D8DFE5] bg-white p-4">{assessment.criticalGaps.length ? <AlertTriangle className="mt-0.5 shrink-0 text-[#A23A2B]"/> : <ShieldCheck className="mt-0.5 shrink-0 text-[#366E9B]"/>}<div><p className="font-bold">{assessment.criticalGaps.length ? "Governance gate: blocked" : "Ready for independent review"}</p><p className="mt-2 text-sm leading-relaxed text-[#506076]">{assessment.criticalGaps.length ? assessment.criticalGaps.length + " mandatory controls have not been fully demonstrated. A high score cannot override these gates." : "Self-reported controls are complete. Independent verification and actual human authorization remain required."}</p></div></div>
          <h4 className="mt-8 font-semibold">Remediation priorities</h4>
          {assessment.gaps.length ? <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#506076]">{assessment.gaps.map(d => <li key={d.id}>{d.title}: collect {d.evidence.toLowerCase()}</li>)}</ul> : <p className="mt-3 text-sm text-[#506076]">No self-reported gaps. Validate every claim with independent evidence.</p>}
          <button type="button" onClick={exportReport} className="mt-8 w-full rounded-md bg-[#17243A] px-5 py-3 font-semibold text-white hover:bg-[#294364]">Download assessment summary</button>
          <button type="button" onClick={() => setScores({ ...initial })} className="mt-3 w-full rounded-md border border-[#A8B7C6] px-5 py-3 font-semibold hover:bg-white">Reset assessment</button>
          <p className="mt-5 text-xs leading-relaxed text-[#68798D]">Not a validated scoring instrument, certification, security audit, clinical approval, or deployment authorization. No answers are submitted to a server.</p>
        </aside>
      </div>
    </div>
  </section>;
}
