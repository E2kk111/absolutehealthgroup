import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, ShieldCheck, FileCheck2, BarChart3, Workflow, Sparkles } from "lucide-react";
import Footer from "../components/Footer";

const layers=[
 ["01","Medical Navigator AI™","Detect barriers, evaluate context and navigate the next appropriate workflow."],
 ["02","AION™ Intelligence + Authority","Evaluate evidence, rules and authority boundaries before consequential work proceeds."],
 ["03","PolicyPulse™ + RegOS™","Observe policy change, version approved rules and control which logic is active."],
 ["04","GitHealth™","Execute governed Workflow Units™, record evidence and meter operational work."],
 ["05","Care-in-a-Box™","Deploy the clinical operating model into the institution, network or community."],
 ["06","Prove™ + ZScore™ + Economics™","Establish what happened, benchmark performance and evaluate value."]
];
const cases=[
 ["Recovery Intelligence","JNR / rehabilitation","Turn visits into a measurable recovery system with governed navigation, functional outcomes and evidence."],
 ["Post-Acute Intelligence","Physician networks","Coordinate care gaps, recovery, documentation and economics across facilities without replacing the clinical network."],
 ["Specialty Distribution","Virtual + specialty groups","Route patients from need to specialist to follow-up while preserving local clinical authority."],
 ["Senior Living Intelligence","Senior communities","Bring specialty access, monitoring, navigation and care-team coordination into the community."],
 ["ACCESS Operations","Independent physicians","Organize applicable co-management workflows, evidence and completion controls around physician authority."],
 ["Episode Recovery","CJR-X health systems","Orchestrate preparation, transition, recovery, monitoring, measurement and proof across the episode."],
 ["Wound Intelligence","Wound programs","Connect SDK-documented segmentation, clinical review, longitudinal healing evidence, policy-aware documentation and Cost-to-Heal™."],
 ["Opportunity Intelligence","Enterprise buyers","Quantify workflow leakage, care gaps, evidence burden and modeled economics before deployment."]
];

export default function AIONIntelligencePage(){
 return <div className="bg-[#05070b] text-white">
  <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10">
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(34,211,238,.18),transparent_28%),radial-gradient(circle_at_35%_15%,rgba(59,130,246,.14),transparent_30%)]"/>
   <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:py-32">
    <div>
     <p className="text-sm font-black uppercase tracking-[.28em] text-cyan-300">Introducing · AION™ Healthcare Intelligence</p>
     <h1 className="mt-6 text-5xl font-black leading-[.95] tracking-[-.04em] md:text-7xl">Intelligence that navigates healthcare work.</h1>
     <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">Find what is preventing better care. Determine what should happen next. Govern the workflow. Preserve human authority. Prove the result.</p>
     <div className="mt-9 flex flex-wrap gap-4"><Link to="/contact?topic=AION%20Opportunity%20Assessment" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-slate-950">Run an Opportunity Assessment <ArrowRight className="h-4 w-4"/></Link><a href="#architecture" className="rounded-full border border-white/20 px-6 py-3 font-black">Explore the Architecture</a></div>
    </div>
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
     <div className="absolute inset-[8%] rounded-full border border-cyan-300/20"/><div className="absolute inset-[20%] rounded-full border border-blue-400/20"/><div className="absolute inset-[32%] rounded-full border border-white/10"/>
     <div className="absolute inset-[35%] flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[.08] shadow-[0_0_100px_rgba(34,211,238,.12)]"><div className="text-center"><BrainCircuit className="mx-auto h-16 w-16 text-cyan-300"/><div className="mt-4 text-3xl font-black">AION™</div><div className="mt-1 text-xs font-bold uppercase tracking-[.2em] text-slate-400">Intelligence + Authority</div></div></div>
     {[["Medical Navigator","left-[2%] top-[18%]"],["GitHealth","right-[0%] top-[26%]"],["PolicyPulse","left-[0%] bottom-[25%]"],["Prove + Economics","right-[1%] bottom-[17%]"]].map(x=><div key={x[0]} className={"absolute "+x[1]+" rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-xs font-black shadow-xl"}>{x[0]}</div>)}
    </div>
   </div>
  </section>

  <section className="bg-white text-slate-950"><div className="mx-auto max-w-7xl px-6 py-24">
   <p className="text-sm font-black uppercase tracking-[.24em] text-blue-700">What is AION?</p>
   <div className="mt-5 grid gap-10 lg:grid-cols-2"><h2 className="text-4xl font-black tracking-tight md:text-6xl">Healthcare AI should do more than generate an answer.</h2><div className="space-y-5 text-lg leading-8 text-slate-600"><p>Healthcare organizations already have data, clinicians, policies, software and dashboards. The missing layer is often the operating intelligence that connects a signal to the next governed action.</p><p><b className="text-slate-950">Medical Navigator AI™ navigates. AION™ evaluates intelligence and authority. GitHealth™ governs execution. Care-in-a-Box™ operationalizes care. Prove™ establishes what happened. Economics™ evaluates value.</b></p></div></div>
  </div></section>

  <section className="border-y border-white/10 bg-[#090d14]"><div className="mx-auto max-w-7xl px-6 py-24">
   <p className="text-sm font-black uppercase tracking-[.24em] text-cyan-300">The difference</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Built around governed work, not another chat window.</h2>
   <div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-3xl border border-white/10 bg-white/[.03] p-8"><div className="text-xs font-black uppercase tracking-[.2em] text-slate-500">Typical AI layer</div><h3 className="mt-4 text-2xl font-black">Prompt → Generate → Respond</h3><p className="mt-4 leading-7 text-slate-400">Useful for information work, but insufficient by itself where evidence, policy, authority and completion matter.</p></div><div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[.05] p-8"><div className="text-xs font-black uppercase tracking-[.2em] text-cyan-300">AION operating model</div><h3 className="mt-4 text-2xl font-black">Detect → Assess → Navigate → Human Authorize → Execute → Measure → Prove</h3><p className="mt-4 leading-7 text-slate-300">Intelligence connects to an explicit authority boundary, governed execution and measurable evidence trail.</p></div></div>
  </div></section>

  <section id="architecture" className="bg-white text-slate-950"><div className="mx-auto max-w-7xl px-6 py-24">
   <p className="text-sm font-black uppercase tracking-[.24em] text-blue-700">The architecture</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">One intelligence system. Six operating layers.</h2>
   <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">{layers.map(x=><div key={x[0]} className="grid gap-4 py-7 md:grid-cols-[90px_300px_1fr] md:items-center"><div className="text-sm font-black text-cyan-700">{x[0]}</div><div className="text-xl font-black">{x[1]}</div><div className="leading-7 text-slate-600">{x[2]}</div></div>)}</div>
  </div></section>

  <section className="bg-[#05070b]"><div className="mx-auto max-w-7xl px-6 py-24">
   <p className="text-sm font-black uppercase tracking-[.24em] text-cyan-300">The proof model</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">High-stakes work needs visible controls.</h2>
   <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
    [ShieldCheck,"Human Authority","Consequential clinical decisions remain with appropriately authorized humans."],
    [FileCheck2,"Evidence by Design","Define required inputs, evidence, authority and completion criteria."],
    [BrainCircuit,"Policy Lifecycle","Analyze proposed rules without silently making them production authority."],
    [BarChart3,"Economic Metering","Workflow Units™, Cost-to-Goal™, contribution and ROI make operations measurable."]
   ].map(([I,t,d]:any)=><div key={t} className="rounded-3xl border border-white/10 bg-white/[.035] p-7"><I className="h-8 w-8 text-cyan-300"/><h3 className="mt-5 text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-slate-400">{d}</p></div>)}</div>
  </div></section>

  <section className="bg-white text-slate-950"><div className="mx-auto max-w-7xl px-6 py-24">
   <p className="text-sm font-black uppercase tracking-[.24em] text-blue-700">Where it creates value</p><h2 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">Different buyers. One governed intelligence infrastructure.</h2>
   <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">{cases.map(x=><article key={x[0]} className="bg-white p-7"><div className="text-xs font-black uppercase tracking-[.18em] text-cyan-700">{x[1]}</div><h3 className="mt-3 text-2xl font-black">{x[0]}</h3><p className="mt-3 leading-7 text-slate-600">{x[2]}</p></article>)}</div>
  </div></section>

  <section className="border-y border-white/10 bg-[#090d14]"><div className="mx-auto max-w-7xl px-6 py-24">
   <p className="text-sm font-black uppercase tracking-[.24em] text-cyan-300">How organizations access it</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Assess or deploy.</h2>
   <div className="mt-12 grid gap-6 md:grid-cols-2"><div className="rounded-3xl border border-white/10 p-8"><Sparkles className="h-9 w-9 text-cyan-300"/><h3 className="mt-6 text-3xl font-black">Opportunity Assessment</h3><p className="mt-4 leading-7 text-slate-400">Map the population, care problem, governing requirements, workflow burden, baseline and modeled economics.</p><Link to="/contact?topic=Opportunity%20Assessment" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-300">Assess the opportunity <ArrowRight className="h-4 w-4"/></Link></div><div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[.04] p-8"><Workflow className="h-9 w-9 text-cyan-300"/><h3 className="mt-6 text-3xl font-black">Care-in-a-Box™ Deployment</h3><p className="mt-4 leading-7 text-slate-300">Deploy a bounded care program with configured workflows, human authority, evidence, outcomes and economic measurement.</p><Link to="/care-in-a-box" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-300">Explore deployments <ArrowRight className="h-4 w-4"/></Link></div></div>
  </div></section>

  <section className="relative overflow-hidden bg-[#05070b]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,.14),transparent_40%)]"/><div className="relative mx-auto max-w-5xl px-6 py-28 text-center"><p className="text-sm font-black uppercase tracking-[.24em] text-cyan-300">AION™ + Care-in-a-Box™</p><h2 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">Find the value. Govern the work. Prove the result.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">Start with one population, one measurable care problem and one governed workflow. Scale when the evidence and economics justify it.</p><Link to="/contact?topic=AION%20Opportunity%20Assessment" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-black text-slate-950">Start an Assessment <ArrowRight className="h-4 w-4"/></Link></div></section>
  <Footer/>
 </div>
}
