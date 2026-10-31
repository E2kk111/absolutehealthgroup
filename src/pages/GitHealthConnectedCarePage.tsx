import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ClipboardList, Download, FlaskConical, Mic, ShieldCheck, Volume2 } from "lucide-react";
import {
  classifySymptom, initialIntake, initialState, recordConversation, recordReview, submitSyntheticIntake,
  type CareSetting, type Symptom, type SyntheticIntake, type WorkflowState,
} from "@/lib/githealth/connectedCareWorkflow";

const panel = "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7";
const primary = "rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40";
const secondary = "rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50";
const settings: CareSetting[] = ["Senior living", "Skilled nursing", "Rehabilitation", "Home"];
const symptoms: Symptom[] = ["None reported", "Fatigue", "Shortness of breath", "Chest pain / severe breathing difficulty"];
const goals = ["Walk 150 feet with approved assistance", "Complete a clinician-approved home exercise plan", "Attend a follow-up rehabilitation visit"];
const scenarios = [
  { label: "Therapy goals", reply: "Your example goal is to walk 150 feet with the assistance specified by your therapy team. Only a clinician can change the plan." },
  { label: "Report breathlessness", reply: "Thank you for sharing. New shortness of breath should be assessed promptly by your care team, especially before therapy. If breathing difficulty is severe, call emergency services. This demonstration does not notify anyone." },
  { label: "Request follow-up", reply: "I can prepare a simulated follow-up request. No appointment is scheduled or sent to a real care team." },
];
const evidence = [
  { title: "Patient intake and workflow routing", level: "Prototype implemented", description: "Synthetic form data and deterministic review queue. No production form backend, authentication, or EHR connection." },
  { title: "ANIKA™ speech-to-speech", level: "Separate integration PR", description: "Scripted dialogue here. Optional real-time WebRTC work is under draft PR #47, not enabled in this workflow." },
  { title: "AION™ clinical authority", level: "Simulated", description: "Review buttons demonstrate a human approval gate; no authenticated clinician or real escalation." },
  { title: "MOTS-c education", level: "Investigational", description: "Educational content only. No dosing, treatment recommendation, ordering, or prescription." },
  { title: "AIOKN™ and EHR interoperability", level: "Planned", description: "Future FHIR mapping, patient matching, consent provenance, and write-back require authorized integrations." },
];
export default function GitHealthConnectedCarePage() {
  const [intake, setIntake] = useState<SyntheticIntake>(initialIntake);
  const [workflow, setWorkflow] = useState<WorkflowState>(initialState);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState("");
  const [notice, setNotice] = useState("");
  const risk = classifySymptom(intake.symptom);
  const change = <K extends keyof SyntheticIntake>(key: K, value: SyntheticIntake[K]) => setIntake(previous => ({ ...previous, [key]: value }));
  const submit = () => {
    if (!intake.consentToDemo) return;
    setWorkflow(previous => submitSyntheticIntake(previous, intake));
    setNotice("Synthetic intake queued for simulated human review. No data was sent to a server.");
  };
  const play = (reply: string) => {
    if (speechEnabled && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(reply);
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  };
  const scenario = (label: string, reply: string) => {
    if (!workflow.submitted) return;
    setSelectedScenario(reply);
    setWorkflow(previous => recordConversation(previous, label + " — " + reply));
    play(reply);
  };
  const reset = () => {
    window.speechSynthesis?.cancel();
    setIntake(initialIntake); setWorkflow(initialState); setSelectedScenario(""); setNotice("");
    setEducationOpen(false);
  };
  const exportDemo = () => {
    const output = { syntheticOnly: true, clinicalUse: false, exportedAt: new Date().toISOString(), workflow };
    const url = URL.createObjectURL(new Blob([JSON.stringify(output, null, 2)], { type: "application/json" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "githealth-synthetic-care-workflow.json"; anchor.click();
    URL.revokeObjectURL(url);
  };
  return <div className="min-h-screen bg-[#f4f7fc] text-slate-900">
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <Link to="/our-solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"><ArrowLeft size={16}/> Absolute Health Group · Technology Solutions</Link>
      <section className="mt-5 rounded-[2rem] bg-gradient-to-br from-[#101b47] via-[#184f9d] to-[#5c39a2] px-7 py-10 text-white md:px-12">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-200">✚ GitHealth™ · Connected Care Studio</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">From Intake to Connected Care</h1>
        <p className="mt-4 max-w-3xl text-lg text-blue-100">GitHealth Forms™ → ANIKA™ VoiceOS™ → AION™ human review → evidence-based research education.</p>
        <p className="mt-5 inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-bold">Synthetic prototype · No PHI · No EHR write-back · No clinical actions</p>
      </section>
      <div className="mt-6 grid gap-3 md:grid-cols-4">{[
        ["01", "Intake", "Forms™"], ["02", "Conversation", "ANIKA™"], ["03", "Clinical review", "AION™"], ["04", "Research education", "MOTS-c"],
      ].map((step, index) => <div key={step[0]} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-800">{step[0]}</span>
        <div><p className="text-xs text-slate-500">{step[1]}</p><p className="font-bold">{step[2]}</p></div>{index < 3 && <ArrowRight className="ml-auto hidden text-blue-400 md:block" size={16}/>}</div>)}</div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className={panel} aria-label="Synthetic patient intake">
          <div className="flex items-center gap-3"><ClipboardList className="text-blue-700"/><h2 className="text-2xl font-bold">1. GitHealth Forms™</h2></div>
          <p className="mt-2 text-sm text-slate-600">A non-identifying intake demonstration using the fictional patient Jordan. Never enter real patient details.</p>
          <p className="mt-5 text-sm font-semibold">Patient</p><p className="mt-1 rounded-xl bg-slate-100 p-3 text-sm">Jordan · Fictional rehabilitation case</p>
          <label htmlFor="care-setting" className="mt-4 block text-sm font-semibold">Care setting</label>
          <select id="care-setting" className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3" value={intake.setting} onChange={event => change("setting", event.target.value as CareSetting)} disabled={workflow.submitted}>{settings.map(value => <option key={value}>{value}</option>)}</select>
          <label htmlFor="rehab-goal" className="mt-4 block text-sm font-semibold">Illustrative care goal</label>
          <select id="rehab-goal" className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3" value={intake.rehabGoal} onChange={event => change("rehabGoal", event.target.value)} disabled={workflow.submitted}>{goals.map(value => <option key={value}>{value}</option>)}</select>
          <label htmlFor="symptom" className="mt-4 block text-sm font-semibold">Patient-reported symptom scenario</label>
          <select id="symptom" className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3" value={intake.symptom} onChange={event => change("symptom", event.target.value as Symptom)} disabled={workflow.submitted}>{symptoms.map(value => <option key={value}>{value}</option>)}</select>
          <div role="status" className={`mt-4 rounded-xl p-3 text-sm ${risk.priority === "emergency" ? "bg-red-50 text-red-900" : risk.priority === "prompt" ? "bg-amber-50 text-amber-900" : "bg-blue-50 text-blue-900"}`}>{risk.guidance}</div>
          <label className="mt-5 flex items-start gap-3 text-sm"><input type="checkbox" className="mt-1" checked={intake.consentToDemo} disabled={workflow.submitted} onChange={event => change("consentToDemo", event.target.checked)}/><span>I understand this is a synthetic demonstration, not a patient intake service, and I will not enter real health information.</span></label>
          <button className={`mt-5 ${primary}`} type="button" disabled={!intake.consentToDemo || workflow.submitted} onClick={submit}>Submit synthetic intake for review</button>
          {notice && <p role="status" className="mt-3 text-sm text-blue-700">{notice}</p>}
        </section>
        <section className={panel}>
          <div className="flex items-center gap-3"><Mic className="text-violet-700"/><h2 className="text-2xl font-bold">2. Talk with ANIKA™</h2></div>
          <p className="mt-2 text-sm text-slate-600">Scripted conversational examples. These responses do not come from a live model and do not initiate clinical actions.</p>
          <div className="mt-5 rounded-2xl bg-violet-50 p-4"><p className="text-xs font-bold text-violet-700">ANIKA™ · The Voice of Connected Care</p><p className="mt-2">Hello Jordan. How are you feeling before therapy today?</p></div>
          <div className="mt-4 flex flex-wrap gap-2">{scenarios.map(item => <button type="button" key={item.label} className={secondary} disabled={!workflow.submitted} onClick={() => scenario(item.label, item.reply)}>{item.label}</button>)}</div>
          {selectedScenario && <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm"><p className="font-bold text-blue-800">ANIKA™ simulated response</p><p className="mt-2">{selectedScenario}</p></div>}
          <label className="mt-5 flex items-center gap-3 text-sm"><input type="checkbox" checked={speechEnabled} onChange={event => setSpeechEnabled(event.target.checked)}/><Volume2 size={17}/> Read ANIKA's responses aloud (browser speech)</label>
          <p className="mt-4 text-xs text-slate-500">Submit the fictional intake first. Browser speech synthesis is not the realtime speech-to-speech API; that separate integration is in draft PR #47.</p>
          <Link to="/githealth/voiceos" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">Explore standalone ANIKA™ VoiceOS prototype <ArrowRight size={15}/></Link>
        </section>
        <section className={panel}>
          <div className="flex items-center gap-3"><ShieldCheck className="text-emerald-700"/><h2 className="text-2xl font-bold">3. AION™ Review Gate</h2></div>
          <p className="mt-2 text-sm text-slate-600">A simulated queue demonstrates where an authenticated, licensed clinical reviewer would be required in a future deployment.</p>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4"><p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Review status</p><p className="mt-2 text-lg font-bold">{workflow.status.replaceAll("-", " ")}</p><p className="mt-2 text-sm">{workflow.queueReason || "No synthetic intake submitted yet."}</p></div>
          <div className="mt-4 flex flex-wrap gap-2"><button type="button" className={primary} disabled={workflow.status !== "pending-human-review"} onClick={() => setWorkflow(previous => recordReview(previous, "review"))}>Simulate review completed</button>
            <button type="button" className={secondary} disabled={workflow.status !== "pending-human-review"} onClick={() => setWorkflow(previous => recordReview(previous, "escalate"))}>Simulate escalation</button></div>
          <p className="mt-4 text-xs text-red-700">These buttons do not authenticate a clinician, approve treatment, contact staff, or dispatch emergency services. The audit is an in-memory demo, not a tamper-evident clinical record.</p>
        </section>
        <section className={panel}>
          <div className="flex items-center gap-3"><FlaskConical className="text-amber-700"/><h2 className="text-2xl font-bold">4. MOTS-c Research Education</h2></div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4"><p className="font-bold text-amber-900">Investigational · Not an approved treatment</p><p className="mt-2 text-sm text-amber-900">MOTS-c is a mitochondrial-derived peptide studied largely in laboratory and animal research. FDA's 2026 review identified major gaps in human safety and efficacy evidence, including immunogenicity uncertainties.</p></div>
          <p className="mt-4 text-sm text-slate-600">ANIKA may explain the distinction between preclinical findings, observational human data and interventional trials. It must not suggest doses, source products, recommend administration or imply clinical benefit.</p>
          <button type="button" className={`mt-4 ${secondary}`} onClick={() => setEducationOpen(value => !value)} aria-expanded={educationOpen}>{educationOpen ? "Hide" : "Show"} research evidence and limitations</button>
          {educationOpen && <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
            <p><strong>Preclinical:</strong> Investigations of metabolic signaling and mitochondrial stress responses do not establish human benefit.</p>
            <p><strong>Human evidence:</strong> Observational associations are not proof that administering MOTS-c is safe or effective.</p>
            <p><strong>Clinical status:</strong> No FDA-approved MOTS-c therapy is established for obesity, osteoporosis, longevity or rehabilitation.</p>
            <p><strong>Decision boundary:</strong> No patient-specific recommendation, ordering, prescribing or dispensing is available in this workflow.</p>
            <a className="font-semibold text-blue-700 underline" href="https://www.fda.gov/media/193773/download" target="_blank" rel="noreferrer">FDA July 2026 advisory review</a>
          </div>}
          <label className="mt-5 flex items-start gap-3 text-sm"><input type="checkbox" checked={intake.educationAcknowledged} onChange={event => change("educationAcknowledged", event.target.checked)}/><span>I understand this education is investigational and not treatment advice.</span></label>
          <p className="mt-3 text-xs text-slate-500">Acknowledgment is local UI state only; no medical consent or research enrollment is obtained.</p>
        </section>
      </div>
      <section className={`mt-6 ${panel}`}><h2 className="text-2xl font-bold">Capability & evidence register</h2>
        <p className="mt-2 text-sm text-slate-600">Implemented prototype behavior is separated from future integration and clinical research claims.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">{evidence.map(item => <div key={item.title} className="rounded-2xl border border-slate-200 p-4"><p className="font-bold">{item.title}</p><p className="mt-1 text-xs font-semibold text-blue-700">{item.level}</p><p className="mt-2 text-sm text-slate-600">{item.description}</p></div>)}</div>
      </section>
      <section className={`mt-6 ${panel}`}><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold">Synthetic event audit</h2><div className="flex gap-2"><button type="button" className={secondary} onClick={exportDemo} disabled={!workflow.events.length}><Download size={16} className="mr-1 inline"/> Export JSON</button><button type="button" className={secondary} onClick={reset}>Reset workflow</button></div></div>
        <div className="mt-4 max-h-52 overflow-y-auto rounded-xl bg-slate-950 p-4 font-mono text-xs leading-6 text-cyan-100">{workflow.events.length ? workflow.events.map(event => <p key={event.id}>[{event.kind}] {event.detail}</p>) : <p>[demo] No events yet. Synthetic data only.</p>}</div>
        <p className="mt-3 text-xs text-slate-500">No records are saved or transmitted by this workflow. The export is downloaded locally. Do not use it for patient documentation.</p>
      </section>
      <p className="mt-8 text-center text-xs text-slate-500">GitHealth™ · ANIKA™ · AION™ · Research Education | Concept only · No PHI · No clinical-grade decision support · No EHR connection</p>
    </div>
  </div>;
}
