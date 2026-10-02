import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const populations=["Seniors","Dementia & Alzheimer’s","Physical Rehabilitation","Acquired Brain Injury","Developmental Disabilities","Mental & Behavioral Health","Neuro Recovery","Senior Mobility"];
const loop=["Assess","Personalize","Support","Connect","Measure","Improve"];
const programs=[
 ["Life in Full Home™","Aging, dementia, disability and personalized support across home and community settings."],
 ["Life in Full Recovery™","PT, OT, speech, respiratory, orthopedic and neurological recovery workflows."],
 ["Life in Full Brain™","ABI, cognition, dementia and neurological support centered on function and participation."],
 ["Life in Full Behavioral™","Person-centered behavioral and mental health support integrated with the broader care plan."],
 ["Life in Full Mobility™","Mobility, strength, fall-risk and independence programs for older adults and recovery populations."]
];
const packages=[
 ["Life Essentials™","Home care · senior living · community programs","Assessment, personalized plan, Life Record™, caregiver workflow and progress tracking.","$1,500–$2,500/mo/site"],
 ["Life Connected™","Multi-site senior living · home health · rehab","Essentials plus remote engagement, alerts, family connection, outcomes and device integrations.","$3,500–$6,000/mo/site"],
 ["Life Recovery™","PT/OT/ST · neuro · orthopedic rehabilitation","Recovery Record™, home exercise workflows, therapy plans, progress and outcomes dashboard.","$3,500–$7,500/mo/site"],
 ["Life Ambient™","Senior mobility · neuro · ABI programs","Connected plus optional ambient sensing integrations where appropriate, consented and validated.","$7,500–$12,500/mo/site + hardware"],
 ["Life Enterprise™","Health systems · SNF/IRF/LTACH · large networks","Multi-site command center, integrations, governance, provenance and enterprise analytics.","Custom annual agreement"]
];

const VMSHealthspanPage: React.FC=()=>(
 <>
  <section className="bg-slate-950 text-white">
   <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">America Healthcare Services™ · Life in Full™</p>
    <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
     <div>
      <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">Live better. Function better. <span className="text-emerald-300">Live Life in Full.</span></h1>
      <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-200">One-to-one personalized care designed around quality of life, functional ability, independence and participation in everyday life.</p>
      <div className="mt-8 flex flex-wrap gap-2">{populations.map(x=><span key={x} className="rounded-full border border-white/20 px-3 py-2 text-sm text-slate-200">{x}</span>)}</div>
      <div className="mt-9 flex flex-wrap gap-4"><a href="#pilot" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950">Explore a 90-Day Pilot</a><a href="#programs" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold">Explore Programs</a></div>
     </div>
     <div className="rounded-[2rem] border border-white/15 bg-white/5 p-7 shadow-2xl">
      <div className="text-sm font-semibold text-emerald-200">One Person. One Life Record™.</div>
      <div className="mt-6 space-y-3">{[["Mobility","Goals, strength, gait and daily movement"],["Cognition","Memory, communication and cognitive function"],["Daily Living","Activities, independence and participation"],["Wellbeing","Emotional, behavioral and social wellbeing"],["Recovery","Therapy plans, progress and outcomes"]].map(([a,b])=><div key={a} className="rounded-2xl bg-white/10 p-4"><div className="font-semibold">{a}</div><div className="mt-1 text-sm text-slate-300">{b}</div></div>)}</div>
     </div>
    </div>
   </div>
  </section>

  <section className="bg-stone-50 py-20"><div className="mx-auto max-w-7xl px-6">
   <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">Continuous personalized care</p>
   <h2 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">Care should continue between visits.</h2>
   <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Life in Full™ connects individualized goals, care, rehabilitation, caregivers and agreed measures into one continuous experience. Technology supports the team; people remain at the center of consequential care decisions.</p>
   <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">{loop.map((x,i)=><div key={x} className="rounded-2xl border bg-white p-5"><div className="text-xs font-bold text-emerald-700">0{i+1}</div><div className="mt-3 font-semibold uppercase tracking-wide">{x}</div></div>)}</div>
  </div></section>

  <section id="programs" className="scroll-mt-28 py-24"><div className="mx-auto max-w-7xl px-6">
   <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">Life in Full programs</p>
   <h2 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">One platform. Multiple pathways to function.</h2>
   <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{programs.map(([t,b])=><article key={t} className="rounded-3xl border bg-stone-50 p-7"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-3 leading-7 text-slate-600">{b}</p></article>)}</div>
  </div></section>

  <section className="bg-emerald-950 py-24 text-white"><div className="mx-auto max-w-7xl px-6">
   <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">Continuous rehabilitation</p>
   <div className="mt-4 grid gap-10 lg:grid-cols-2"><div><h2 className="text-4xl font-semibold md:text-5xl">Your recovery doesn’t stop when you leave therapy.</h2><p className="mt-6 text-lg leading-8 text-emerald-50">Joint & Neuro Rehab Associates™ powers the Continuous Rehabilitation System™ for physical, occupational, speech and respiratory therapy, neuro recovery, orthopedic recovery and senior mobility.</p></div><div className="rounded-3xl bg-white/10 p-7"><div className="text-sm text-emerald-200">Recovery Record™</div><h3 className="mt-2 text-2xl font-semibold">One continuous recovery experience.</h3><p className="mt-4 leading-7 text-emerald-50">Therapist + patient + authorized health information + devices → Recovery Record™ → AI-assisted recovery intelligence → governed workflow → therapist review → outcome measurement → updated record.</p></div></div>
  </div></section>

  <section id="pilot" className="scroll-mt-28 py-24"><div className="mx-auto max-w-7xl px-6">
   <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">For organizations</p>
   <h2 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">Deploy Life in Full™ at your site.</h2>
   <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">We are selecting founding partners for 90-day pilots, typically beginning with approximately 25–50 participants at one site. Baselines, goals and operational or functional endpoints are selected with each organization before deployment.</p>
   <div className="mt-10 overflow-x-auto rounded-3xl border"><table className="min-w-full bg-white text-left"><thead className="bg-slate-950 text-white"><tr><th className="p-4">Package</th><th className="p-4">Best for</th><th className="p-4">Includes</th><th className="p-4">Proposed model</th></tr></thead><tbody>{packages.map(([a,b,c,d])=><tr key={a} className="border-t align-top"><td className="p-4 font-semibold">{a}</td><td className="p-4 text-sm text-slate-600">{b}</td><td className="p-4 text-sm text-slate-600">{c}</td><td className="p-4 text-sm font-semibold">{d}</td></tr>)}</tbody></table></div>
   <p className="mt-4 text-sm text-slate-500">Pricing is a proposed commercialization model and is subject to scope, integrations, implementation requirements and validation with early clients.</p>
  </div></section>

  <section className="bg-slate-950 py-24 text-white"><div className="mx-auto max-w-7xl px-6">
   <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">Trusted foundation</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Human-centered on top. Governed infrastructure underneath.</h2>
   <div className="mt-12 grid gap-4 md:grid-cols-4">{[["Life Record™","Longitudinal goals, abilities, care, progress and quality-of-life context."],["Recovery Record™","Specialized rehabilitation context for recovery episodes."],["AION™","Evidence-grounded intelligence designed to support human review."],["GitHealth Harness™","Authority, policy, provenance and governed execution infrastructure."]].map(([t,b])=><div key={t} className="rounded-2xl bg-white/10 p-6"><h3 className="font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{b}</p></div>)}</div>
   <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-400">Life in Full™, Life Record™, Recovery Record™ and related technology capabilities include developing product concepts. AI-assisted features support care workflows and do not replace qualified professional judgment. Ambient or device-derived measurements should be used only where appropriate, consented, technically validated and governed for the intended use.</p>
  </div></section>

  <section className="bg-stone-50 py-24 text-center"><div className="mx-auto max-w-3xl px-6"><p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Founding partner program</p><h2 className="mt-4 text-5xl font-semibold text-slate-950">Bring Life in Full™ to your organization.</h2><p className="mt-6 text-lg text-slate-600">Start with one site. Measure what matters. Learn together. Expand when the model earns it.</p><Link to="/contact" className="mt-8 inline-block rounded-full bg-slate-950 px-7 py-3 font-semibold text-white">Request a 20-Minute Partnership Call</Link></div></section>
  <Footer/>
 </>
);
export default VMSHealthspanPage;
