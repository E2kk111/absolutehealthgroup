import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const domains = [
  ["Locomotion", "Strength, gait, balance, mobility and physical performance."],
  ["Vitality", "Cardiorespiratory fitness, metabolism, body composition and energy regulation."],
  ["Cognition", "Memory, executive function, processing and cognitive performance."],
  ["Psychological", "Mood, resilience, sleep and emotional health."],
  ["Sensory", "Vision, hearing and related sensory function."],
];

const steps = [
  ["01", "Connect", "Bring together authorized health information from diagnostics, imaging, wearables and functional assessments without making the AI model the source of truth."],
  ["02", "Understand", "Organize longitudinal measurements into the VMS™ five-domain framework with source, date and provenance visible for review."],
  ["03", "Act", "Turn trusted context into patient and clinician workflows while keeping clinical judgment and sensitive actions under human authority."],
];

const VMSHealthspanPage: React.FC = () => (
  <>
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">America Healthcare Services™ · VMS Healthspan™</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">Your health data is everywhere. <span className="text-emerald-300">Your health trajectory shouldn’t be.</span></h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-200">VMS™ is a proposed longitudinal healthspan framework designed to bring authorized measurements into one coherent Healthspan Record™—so people, care teams and authorized AI experiences can understand change over time.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#how-it-works" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950">See How It Works</a>
              <a href="#record" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold">Explore Healthspan Record™</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/5 p-7 shadow-2xl">
            <div className="flex items-center justify-between"><span className="text-sm font-semibold">Your VMS Healthspan™</span><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">Illustrative</span></div>
            <div className="mt-6 flex items-end gap-3"><span className="text-7xl font-semibold">82</span><span className="pb-2 text-slate-400">/100</span></div>
            <div className="mt-6 grid grid-cols-5 gap-2">{[78,85,88,79,80].map((n,i)=><div key={i} className="rounded-xl bg-white/10 p-3 text-center"><div className="text-lg font-semibold">{n}</div><div className="mt-1 h-1 rounded bg-emerald-300/70" /></div>)}</div>
            <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-sm text-slate-300">Trajectory view · baseline comparison · measurement provenance</div>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" className="scroll-mt-32 bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">How it works</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold text-slate-950 md:text-5xl">Connect → Understand → Act</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{steps.map(([n,t,b])=><article key={t} className="rounded-3xl border bg-white p-7"><div className="text-sm font-bold text-emerald-700">{n}</div><h3 className="mt-5 text-2xl font-semibold">{t}</h3><p className="mt-3 leading-7 text-slate-600">{b}</p></article>)}</div>
      </div>
    </section>

    <section id="record" className="scroll-mt-32 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">The context layer for healthspan AI</p><h2 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">One person. One Healthspan Record™.</h2><p className="mt-5 text-lg leading-8 text-slate-600">The proposed Healthspan Record™ links longitudinal measurements to their source and date, creating a consistent context layer for VMS™, AION Health Intelligence™ and permissioned AI experiences. It is a product concept, not yet a validated clinical record or diagnostic system.</p></div>
          <div className="rounded-3xl bg-slate-950 p-7 text-white">
            {["EHR / Clinical Records","Labs & Imaging","Wearables","Functional Assessments","Cognitive & Sensory Measures"].map((x,i)=><div key={x} className="mb-3 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3"><span>{x}</span><span className="text-emerald-300">Source {i+1}</span></div>)}
            <div className="mt-6 rounded-2xl border border-emerald-300/40 bg-emerald-300/10 p-5 text-center"><div className="text-xs uppercase tracking-widest text-emerald-200">Resolved longitudinal context</div><div className="mt-2 text-2xl font-semibold">Healthspan Record™</div></div>
          </div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">{domains.map(([t,b])=><article key={t} className="rounded-2xl border bg-stone-50 p-5"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{b}</p></article>)}</div>
      </div>
    </section>

    <section className="bg-emerald-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">Permissioned AI interoperability</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-2"><div><h2 className="text-4xl font-semibold md:text-5xl">ChatGPT provides intelligence. VMS provides longitudinal health context.</h2><p className="mt-6 text-lg leading-8 text-emerald-50">A proposed VMS Healthspan™ MCP could expose authorized VMS domains, trajectories, baseline comparisons and measurement provenance to AI experiences. The interface shown here is conceptual and is not a live patient-data connector.</p></div><div className="rounded-3xl bg-white/10 p-7">{["get_vms_profile()","get_vms_trajectory()","get_domain_detail()","compare_to_baseline()","get_measurement_provenance()","create_healthspan_report()"].map(x=><div key={x} className="break-all border-b border-white/15 py-3 font-mono text-sm">{x}</div>)}</div></div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">Trust architecture</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">Context before automation.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-4">{[["Healthspan Record™","Longitudinal identity, measurements and provenance."],["VMS™","Five-domain functional-health framework."],["AION Health Intelligence™","Evidence-grounded interpretation for human review."],["VMS MCP™","Permissioned interoperability for authorized AI experiences."]].map(([t,b])=><div key={t} className="rounded-2xl bg-slate-950 p-6 text-white"><h3 className="font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{b}</p></div>)}</div>
        <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-500">VMS™ and Healthspan Record™ are proposed product concepts. This page does not diagnose, predict future health, establish treatment effectiveness, or provide medical advice. Clinical decisions remain with appropriately qualified professionals. Any patient-data implementation would require consent, privacy, security, access controls and clinical governance.</p>
      </div>
    </section>

    <section className="bg-stone-50 py-24 text-center"><div className="mx-auto max-w-3xl px-6"><p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">One patient. One trajectory.</p><h2 className="mt-4 text-5xl font-semibold text-slate-950">Know how health is changing.</h2><p className="mt-6 text-lg text-slate-600">Build a longitudinal view designed for people, care teams and the next generation of authorized health AI.</p><Link to="/contact" className="mt-8 inline-block rounded-full bg-slate-950 px-7 py-3 font-semibold text-white">Ask About VMS™</Link></div></section>
    <Footer />
  </>
);
export default VMSHealthspanPage;
