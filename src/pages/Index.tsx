import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, FileCheck2, Layers3, ShieldCheck, Stethoscope, Users, Workflow } from 'lucide-react';
import Footer from '../components/Footer';

const tabs = ["Opportunities","Populations","Care Programs","Workflows","Evidence","Outcomes","Economics","Reports"];
const metrics = [
  ["Identified Opportunity","Demo value","$4.8M"],
  ["Active Care Programs","Configured","12"],
  ["Patients in Workflows","Demo population","1,842"],
  ["Evidence Completion","Illustrative","94%"],
];
const programs = [
  ["CJR-X Recovery-in-a-Box™","Orthopedic episode readiness, transition, recovery and measurement."],
  ["Wound Care-in-a-Box™","WoundOS™ + DermalQ™ assessment, documentation, coordination and outcomes."],
  ["ACCESS Care-in-a-Box™","Co-management workflows with evidence, human authority and measurable completion."],
  ["Precision Recovery / LTACH OS™","Referral, recovery, specialist, flow and payment operations for complex recovery."],
  ["Senior Care-in-a-Box™","Specialty access, navigation, monitoring and escalation for senior communities."],
  ["PIN-in-a-Box™","Longitudinal principal-illness navigation and governed care coordination."],
];

const Index: React.FC = () => (
 <div className="bg-white text-slate-950">
  <section className="relative overflow-hidden bg-slate-950 text-white">
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(8,145,178,.28),transparent_35%)]" />
   <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-28">
    <div>
     <p className="text-sm font-black uppercase tracking-[.22em] text-cyan-300">GitHealth™ · Governed Healthcare Operations</p>
     <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">Put Your Healthcare Workload to Work.</h1>
     <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">Identify healthcare value. Deploy governed workflows. Preserve human authority. Prove the outcome.</p>
     <div className="mt-8 flex flex-wrap gap-4">
      <Link to="/contact?topic=Opportunity%20Assessment" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-black text-slate-950">Assess Your Population <ArrowRight className="h-4 w-4"/></Link>
      <Link to="/care-in-a-box#applications" className="rounded-xl border border-white/20 px-6 py-3 font-black">Explore Care Programs</Link>
     </div>
     <div className="mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[.05] p-4">
      <div className="text-sm font-black text-white">Start with an Opportunity Assessment.</div>
      <div className="mt-1 text-sm leading-6 text-slate-300">We map the population, care gap, required workflows, evidence requirements, implementation scope and modeled economics—then give you a prioritized deployment plan.</div>
     </div>
     <p className="mt-6 text-xs leading-5 text-slate-400">GitHealth supports governed workflow execution and decision support. Consequential clinical decisions remain with appropriately authorized humans.</p>
    </div>
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
     <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div><div className="text-xs font-black tracking-[.18em] text-cyan-300">CLIENT OPERATING CONSOLE</div><div className="mt-1 font-black">Absolute Health · Demo Workspace</div></div><div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Governed</div></div>
     <div className="flex gap-2 overflow-x-auto border-b border-white/10 px-4 py-3">{tabs.map((t,i)=><span key={t} className={"whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold "+(i===0?"bg-cyan-300 text-slate-950":"bg-white/5 text-slate-300")}>{t}</span>)}</div>
     <div className="grid gap-3 p-5 sm:grid-cols-2">{metrics.map(m=><div key={m[0]} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="text-xs font-bold text-slate-400">{m[0]}</div><div className="mt-2 text-3xl font-black">{m[2]}</div><div className="mt-2 text-xs text-cyan-300">{m[1]}</div></div>)}</div>
     <div className="mx-5 mb-5 rounded-2xl border border-amber-300/20 bg-amber-300/[.06] p-4 text-xs leading-5 text-amber-100">Demo interface. Values are illustrative until connected to validated customer data.</div>
    </div>
   </div>
  </section>

  <section className="border-b bg-white"><div className="mx-auto max-w-7xl px-6 py-10"><div className="grid gap-5 md:grid-cols-4">
   {[["Care-in-a-Box™","What the customer deploys."],["GitHealth™","What the customer operates."],["Medical Navigator AI™","What navigates the work."],["AION™","What governs intelligence + authority."]].map(x=><div key={x[0]}><div className="font-black text-blue-950">{x[0]}</div><div className="mt-1 text-sm text-slate-600">{x[1]}</div></div>)}
  </div></div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-black uppercase tracking-[.2em] text-blue-700">Care-in-a-Box™ Portfolio</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Choose the care problem. Deploy the operating model.</h2>
   <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">The buyer starts with a population and operational goal — not a technology diagram. Each program connects care delivery, governed workflows, evidence, outcomes and economics.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{programs.map(p=><article key={p[0]} className="rounded-2xl border border-slate-200 p-6 shadow-sm"><Stethoscope className="h-7 w-7 text-blue-700"/><h3 className="mt-4 text-xl font-black">{p[0]}</h3><p className="mt-3 leading-6 text-slate-600">{p[1]}</p></article>)}</div>
   <Link to="/care-in-a-box" className="mt-8 inline-flex items-center gap-2 font-black text-blue-700">View the full Care-in-a-Box portfolio <ArrowRight className="h-4 w-4"/></Link>
  </section>

  <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-black uppercase tracking-[.2em] text-blue-700">Workflow / Operations</p><h2 className="mt-3 text-4xl font-black">From opportunity to completed governed work.</h2>
   <div className="mt-10 grid gap-4 md:grid-cols-5">{["Identify","Configure","Human Authorize","Execute","Measure + Prove"].map((x,i)=><div key={x} className="rounded-2xl bg-white p-6 shadow-sm"><div className="text-xs font-black text-cyan-700">0{i+1}</div><div className="mt-3 font-black">{x}</div></div>)}</div>
   <div className="mt-8 rounded-3xl bg-blue-950 p-8 text-white"><div className="flex items-start gap-4"><ShieldCheck className="mt-1 h-8 w-8 shrink-0 text-cyan-300"/><div><h3 className="text-2xl font-black">Human authority stays visible.</h3><p className="mt-3 max-w-4xl leading-7 text-blue-100">Medical Navigator AI™ may detect, assess, predict, rank, recommend, navigate, draft and prepare. Consequential actions remain subject to the appropriate human or physician authority.</p></div></div></div>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-black uppercase tracking-[.2em] text-blue-700">Proof & Economics</p><h2 className="mt-3 text-4xl font-black">Work → Evidence → Outcome → Economics.</h2>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
    {I:Workflow,t:"Workflow Units™",d:"Defined healthcare work with inputs, evidence, authority and completion criteria."},
    {I:FileCheck2,t:"Prove™",d:"Evidence and provenance that establish what happened."},
    {I:BarChart3,t:"ZScore™",d:"Normalized performance and outcome benchmarking."},
    {I:Layers3,t:"Economics™",d:"Cost-to-Goal™, contribution, margin and ROI."}
   ].map(x=><div key={x.t} className="rounded-2xl border border-slate-200 p-6"><x.I className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">{x.t}</h3><p className="mt-3 leading-6 text-slate-600">{x.d}</p></div>)}</div>
  </section>

  <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-black uppercase tracking-[.2em] text-cyan-300">Architecture · Depth on demand</p><h2 className="mt-3 text-4xl font-black">The infrastructure underneath the operating surface.</h2>
   <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{["Medical Navigator AI™","AION Intelligence + Authority™","PolicyPulse™","RegOS™","GitHealth™","Prove™ · ZScore™ · Economics™"].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="text-xs font-black text-cyan-300">LAYER {i+1}</div><div className="mt-3 font-black">{x}</div></div>)}</div>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-black uppercase tracking-[.2em] text-blue-700">How we start</p>
   <h2 className="mt-3 text-4xl font-black md:text-5xl">Assess. Pilot. Scale.</h2>
   <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">You should know what problem we are solving, what gets deployed and how success will be measured before committing to enterprise scale.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-3">
    <div className="rounded-3xl border border-slate-200 p-7"><div className="text-sm font-black text-blue-700">01 · ASSESS</div><h3 className="mt-3 text-2xl font-black">Population Opportunity Assessment</h3><p className="mt-3 leading-7 text-slate-600">Define the population, care gap, workflows, evidence, authority boundaries, implementation scope and modeled economics.</p></div>
    <div className="rounded-3xl border border-slate-200 p-7"><div className="text-sm font-black text-blue-700">02 · PILOT</div><h3 className="mt-3 text-2xl font-black">90-Day Deployment</h3><p className="mt-3 leading-7 text-slate-600">Run one defined program with a measurable baseline, governed workflow, human authority and agreed success criteria.</p></div>
    <div className="rounded-3xl border border-slate-200 p-7"><div className="text-sm font-black text-blue-700">03 · SCALE</div><h3 className="mt-3 text-2xl font-black">Site → Multi-Site → Enterprise</h3><p className="mt-3 leading-7 text-slate-600">Expand only after the operating model, evidence, outcomes and economics support the next deployment.</p></div>
   </div>
   <div className="mt-10 rounded-3xl bg-blue-700 p-8 text-white md:flex md:items-center md:justify-between md:gap-8"><div><h3 className="text-3xl font-black">Tell us the population. Tell us the care problem.</h3><p className="mt-3 max-w-3xl text-blue-100">We’ll show you the opportunity, the Care-in-a-Box™ to deploy, what it should take to operate, and how we will measure whether it worked.</p></div><Link to="/contact?topic=Opportunity%20Assessment" className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-black text-blue-950 md:mt-0">Assess Your Population <ArrowRight className="h-4 w-4"/></Link></div>
  </section>
  <Footer />
 </div>
);
export default Index;
