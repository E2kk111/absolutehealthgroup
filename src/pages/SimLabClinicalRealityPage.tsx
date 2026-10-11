import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, HeartPulse, Microscope, ShieldCheck, Users } from "lucide-react";
import Footer from "../components/Footer";

const steps = [
  { title: "Listen", description: "Learn from physicians, nurses, therapists, care managers and quality leaders about real workflow friction.", icon: Users },
  { title: "Structure", description: "Document permissioned research findings, missing evidence, operational constraints and questions for evaluation.", icon: ClipboardList },
  { title: "Simulate", description: "Translate reviewed insights into synthetic hospital-to-home and post-acute episodes for scenario testing.", icon: Microscope },
  { title: "Evaluate", description: "Invite clinician feedback on usability, decision quality, safety concerns and the boundaries of human authority.", icon: ShieldCheck }
];
const roles = ["Physicians and advanced practice clinicians", "Nurses and care-transition leaders", "Physical, occupational and speech therapists", "Hospital, LTACH and rehabilitation operators", "Quality, compliance and patient safety leaders"];

export default function SimLabClinicalRealityPage() {
  return <div className="bg-white text-slate-950">
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">GitHealth SimLab™ · Research & Development</p>
        <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">Don't just watch healthcare AI develop. Help us test it against the realities of care.</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">Turn real-world clinical experience into research evidence, testable episode simulations, and better-governed healthcare decisions.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact?buyer=Post-Acute%20Care" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-blue-950">Discuss clinician participation <ArrowRight className="h-5 w-5" /></Link>
          <Link to="/white-papers" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-4 font-bold text-white">Explore the flagship thesis</Link>
        </div>
        <p className="mt-5 max-w-3xl text-sm text-blue-200">Research invitation only. No live clinical decision support, patient recruitment, or production integration is offered through this page.</p>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-center gap-3 text-blue-800"><HeartPulse className="h-7 w-7"/><p className="font-bold uppercase tracking-wider">Built with clinical reality in mind</p></div>
      <h2 className="mt-4 max-w-4xl text-3xl font-black md:text-4xl">Clinicians help define what should be tested before deployment.</h2>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">GitHealth WorldOS™ is the proposed Episode Intelligence Platform for Healthcare. Clinical Reality Research is a planned SimLab research and evaluation capability—not a separate care-delivery system. Its purpose is to make real workflow problems visible before testing potential solutions through synthetic episodes.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">{steps.map(({title,description,icon:Icon})=><article key={title} className="rounded-2xl border border-slate-200 p-7"><Icon className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p></article>)}</div>
    </section>
    <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-6">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-700">Proposed first research cohort</p>
      <h2 className="mt-3 text-3xl font-black">Hospital-to-home and post-acute transitions</h2>
      <p className="mt-5 max-w-4xl leading-8 text-slate-600">Initial recruitment target: 30 clinician contributors and 2–3 healthcare organizations. These are planning targets, not enrolled partners. We want to study discharge readiness, missing information, handoffs, operational constraints and escalation pathways.</p>
      <h3 className="mt-8 text-xl font-black">Who we hope to hear from</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">{roles.map(role=><li key={role} className="rounded-xl border border-slate-200 bg-white p-4 font-medium">{role}</li>)}</ul>
      <Link to="/contact?buyer=Post-Acute%20Care" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-800 px-6 py-4 font-bold text-white">Contact us about the research cohort <ArrowRight className="h-5 w-5"/></Link>
      <p className="mt-3 text-sm text-slate-500">Please mention “GitHealth SimLab clinician research” in your message. Do not submit patient information.</p>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-black">Research integrity and deployment boundaries</h2>
      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-7 text-amber-950">
        <p className="leading-8">GitHealth SimLab™ currently explores synthetic scenarios and interactive prototypes. Approvals in demonstrations are simulated. WorldOS™ is not clinically validated or deployed as production healthcare infrastructure. Proposed device/EHR connections are not live integrations. Clinical contributors would participate voluntarily under appropriate research agreements. Any patient-derived information would require applicable permissions, privacy safeguards, data-use controls and ethics review where necessary. Research feedback does not independently authorize patient care or establish verified outcomes.</p>
      </div>
      <p className="mt-8 text-xl font-black text-blue-950">Simulate Before You Deploy™</p>
      <p className="mt-3 text-lg text-slate-700">Models suggest. AION evaluates. Humans authorize. GitHealth proves.</p>
      <p className="mt-3 text-sm text-slate-500">GitHealth™ | AION™ | Absolute Health Group™</p>
    </section>
    <Footer/>
  </div>;
}
