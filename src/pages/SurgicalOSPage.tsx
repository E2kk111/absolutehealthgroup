import { Link } from "react-router-dom";
import { ArrowRight, Camera, Scan, Crosshair, ShieldCheck, ClipboardCheck, Activity, LockKeyhole } from "lucide-react";

const streams = [
  {name:"Live surgical video",icon:Camera,detail:"Display compatible endoscopic, microscope or operating-room video sources with source identity and stream-health indicators."},
  {name:"Surgical navigation data",icon:Crosshair,detail:"Present compatible instrument position, orientation and navigation context from validated, authorized systems."},
  {name:"Patient imaging",icon:Scan,detail:"Review relevant preoperative or intraoperative CT, MRI, fluoroscopy and other imaging where licensed integrations permit."},
];
const stages = [
  {name:"PREPARE",detail:"Case selection, imaging access, equipment and workflow readiness"},
  {name:"CONNECT",detail:"Map video, navigation and imaging sources to the correct case"},
  {name:"DISPLAY",detail:"Surgeon-controlled multi-source visualization with source and latency indicators"},
  {name:"DOCUMENT",detail:"Capture authorized case events and procedural evidence"},
  {name:"REVIEW",detail:"Human-validated handoff, quality review and clinical documentation"},
  {name:"MEASURE",detail:"Track workflow efficiency, technical performance and verified outcomes"},
];
const pilot = [
  "One hospital or ambulatory surgery center, one procedure type, and one defined surgical team",
  "Device/vendor interface inventory, compatibility assessment and data-use agreements",
  "Synthetic or recorded de-identified demonstration before any live clinical use",
  "Display latency, synchronization, signal loss and source-identification test plan",
  "Surgeon usability and safety review with manual fallback and downtime procedures",
  "Security, privacy, risk-management, insurance and regulatory classification review",
];
export default function SurgicalOSPage() {
 return <div className="bg-white text-slate-950">
  <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 text-white">
   <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
    <Link to="/care-in-a-box#applications" className="text-sm font-bold text-cyan-200 hover:text-white">Care-in-a-Box™ / Specialty Applications</Link>
    <p className="mt-9 text-sm font-black uppercase tracking-[.2em] text-cyan-300">Proposed Surgical Intelligence Package · Concept Stage</p>
    <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">SurgicalOS™</h1>
    <p className="mt-5 text-3xl font-black text-cyan-200">Surgery-in-a-Box™</p>
    <p className="mt-6 max-w-4xl text-xl leading-9 text-blue-100">Live surgical video. Navigation data. Patient imaging. One coordinated, surgeon-controlled view.</p>
    <p className="mt-5 max-w-3xl text-base leading-7 text-blue-100">A proposed operating-room visualization and care-workflow package connecting surgical information, documentation and quality evidence through GitHealth™ and AION™ governance.</p>
    <Link to="/contact?topic=SurgicalOS%20Surgery-in-a-Box%20Discovery" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-black text-blue-950">Discuss a SurgicalOS feasibility pilot <ArrowRight className="h-5 w-5"/></Link>
   </div>
  </section>
  <div className="mx-auto max-w-7xl px-6 py-16">
   <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950"><strong>Concept, not a clinical device or live operating-room integration.</strong> This page describes proposed capabilities. No device interoperability, image registration accuracy, latency, real-time safety, FDA clearance, clinical performance or deployed surgical workflow has been demonstrated here. Surgical decisions remain with appropriately qualified clinicians. No autonomous surgical control is proposed.</div>
  </div>
  <section className="mx-auto max-w-7xl px-6 pb-20">
   <p className="text-sm font-black uppercase tracking-widest text-blue-700">Three sources · One workspace</p>
   <h2 className="mt-3 text-4xl font-black text-blue-950">The surgical information cockpit.</h2>
   <div className="mt-9 grid gap-5 md:grid-cols-3">{streams.map(s=>{const Icon=s.icon;return <article key={s.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-7"><Icon className="h-9 w-9 text-blue-700"/><h3 className="mt-5 text-2xl font-black">{s.name}</h3><p className="mt-4 leading-7 text-slate-600">{s.detail}</p></article>})}</div>
   <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white md:p-10">
    <div className="grid gap-7 lg:grid-cols-[1.6fr_1fr]">
     <div><p className="text-sm font-black uppercase tracking-widest text-cyan-300">Illustrative interface layout</p><div className="mt-5 grid gap-3 sm:grid-cols-2">
      <div className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-cyan-300/40 bg-slate-900 p-5"><Camera className="h-9 w-9 text-cyan-300"/><strong className="mt-3">Live video feed</strong><span className="mt-2 text-center text-xs text-slate-400">Placeholder · No active video</span></div>
      <div className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-cyan-300/40 bg-slate-900 p-5"><Scan className="h-9 w-9 text-cyan-300"/><strong className="mt-3">Patient imaging</strong><span className="mt-2 text-center text-xs text-slate-400">Placeholder · No patient data</span></div>
      <div className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-white/20 bg-slate-900 p-5 sm:col-span-2"><Crosshair className="h-7 w-7 text-cyan-300"/><strong className="mt-2">Navigation and instrument context</strong><span className="mt-2 text-xs text-slate-400">Placeholder · No connected devices</span></div>
     </div></div>
     <div><h3 className="text-2xl font-black">Safety-first visualization</h3><p className="mt-5 leading-7 text-blue-100">A future clinical interface would need explicit source labeling, verified patient and case association, data freshness, synchronization/latency alerts, signal-loss behavior and a safe fallback to original approved equipment.</p><p className="mt-5 text-sm leading-6 text-blue-200">A combined display is not automatically a validated surgical navigation or decision-support device.</p></div>
    </div>
   </div>
  </section>
  <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-6">
   <p className="text-sm font-black uppercase tracking-widest text-blue-700">Care-in-a-Box™ operating model</p><h2 className="mt-3 text-4xl font-black">From surgical preparation to verified recovery.</h2>
   <div className="mt-9 grid gap-4 md:grid-cols-3">{stages.map((s,i)=><div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-sm font-black text-cyan-700">{String(i+1).padStart(2,"0")} · {s.name}</p><p className="mt-3 text-sm leading-7 text-slate-700">{s.detail}</p></div>)}</div>
  </div></section>
  <section className="mx-auto max-w-7xl px-6 py-20">
   <h2 className="text-4xl font-black text-blue-950">How SurgicalOS fits GitHealth.</h2>
   <div className="mt-8 grid gap-5 md:grid-cols-3">
    <div className="rounded-2xl border border-slate-200 p-6"><ClipboardCheck className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">GitHealth™</h3><p className="mt-3 text-sm leading-7 text-slate-600">Governed case workflows, event evidence, documentation readiness, resource use and economics.</p></div>
    <div className="rounded-2xl border border-slate-200 p-6"><ShieldCheck className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">AION™</h3><p className="mt-3 text-sm leading-7 text-slate-600">Rules, permissions, human authorization, traceability and review of any proposed AI assistance.</p></div>
    <div className="rounded-2xl border border-slate-200 p-6"><Activity className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">Recovery Care-in-a-Box™</h3><p className="mt-3 text-sm leading-7 text-slate-600">Postoperative care navigation, transitions, rehabilitation, quality measures and outcomes where contracted.</p></div>
   </div>
  </section>
  <section className="bg-blue-950 py-20 text-white"><div className="mx-auto max-w-7xl px-6">
   <h2 className="text-4xl font-black">Start with a controlled feasibility pilot.</h2>
   <p className="mt-4 max-w-4xl text-lg leading-8 text-blue-100">A hospital or ASC should validate technical feasibility and safety before considering patient-facing deployment.</p>
   <ul className="mt-8 grid gap-4 md:grid-cols-2">{pilot.map(x=><li key={x} className="flex gap-3 rounded-xl border border-white/20 bg-white/5 p-4 text-sm leading-6"><LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300"/>{x}</li>)}</ul>
   <p className="mt-7 text-sm leading-7 text-blue-200">Commercial model to validate: implementation and integration fees + site/platform licensing + approved workflow/evidence services. No separate Medicare payment is assumed for SurgicalOS software. Any applicable professional or facility reimbursement must be evaluated independently. Device and clinical use may require FDA and institutional review.</p>
   <Link to="/contact?topic=SurgicalOS%20Feasibility%20Pilot" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-black text-blue-950">Request a feasibility discussion <ArrowRight className="h-5 w-5"/></Link>
  </div></section>
 </div>;
}
