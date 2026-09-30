import React from "react";
import Footer from "../components/Footer";

const domains = [
  ["Locomotion", "Strength, gait, balance, mobility and physical performance."],
  ["Vitality", "Cardiorespiratory fitness, metabolism, body composition and energy regulation."],
  ["Cognition", "Memory, executive function, processing and cognitive performance."],
  ["Psychological", "Mood, resilience, sleep and emotional health."],
  ["Sensory", "Vision, hearing and related sensory function."],
];

const VMSHealthspanPage: React.FC = () => (
  <>
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">America Healthcare Services™ · Medicine 3.0</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] md:text-7xl">Preserve What Makes You Capable.</h1>
          <p className="mt-6 max-w-2xl text-xl text-slate-200">A fully integrated Medicine 3.0 platform combining advanced diagnostics, precision and functional medicine, restorative care and longitudinal health intelligence.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#vms" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950">Discover Your VMS™</a>
            <a href="#platform" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold">Explore the Platform</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-widest text-emerald-300">The healthspan loop</p>
          <div className="mt-6 space-y-4 text-2xl font-medium">
            {["Measure", "Understand", "Intervene", "Validate", "Learn"].map((x,i)=><div key={x} className="flex items-center gap-4"><span className="text-emerald-300">0{i+1}</span><span>{x}</span></div>)}
          </div>
        </div>
      </div>
    </section>

    <section id="vms" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">AHS Vitality Maintenance Score™</p>
        <div className="mt-4 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold text-slate-950 md:text-5xl">One Measure. Five Dimensions of Healthspan.</h2>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">VMS™ is a proprietary longitudinal framework designed to organize the capacities that support healthy, independent living over time. Specific predictive claims require independent validation.</p>
          </div>
          <div className="rounded-full border-[14px] border-emerald-600 bg-white p-12 text-center shadow-xl">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Illustrative VMS™</div>
            <div className="mt-2 text-7xl font-semibold text-slate-950">82</div>
            <div className="text-slate-500">/100</div>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {domains.map(([title,body])=><article key={title} className="rounded-2xl border bg-white p-5"><h3 className="font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section id="platform" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">The AHS Healthspan Loop™</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">From data to a healthier tomorrow.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Advanced Diagnostics","Laboratory data, imaging, body composition, cardiometabolic and functional assessment."],
            ["Precision & Functional Medicine","Personalized strategies for nutrition, activity, sleep, metabolic health and appropriate medical care."],
            ["AHS Restore™","Clinically appropriate restorative care focused on mobility, musculoskeletal health, rehabilitation and recovery."],
            ["Regenerative Innovation™","Research and translational development for emerging regenerative technologies under appropriate governance."],
            ["AION Health Intelligence™","Longitudinal interpretation with evidence and provenance supporting human review."],
            ["Continuous Measurement","Re-measure outcomes and compare each person primarily against their own longitudinal baseline."],
          ].map(([title,body])=><article key={title} className="rounded-3xl bg-slate-950 p-7 text-white"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-emerald-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2">
        <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">VMS Healthspan™ MCP</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Longitudinal health intelligence for ChatGPT.</h2><p className="mt-5 text-lg leading-8 text-emerald-50">A permissioned MCP layer can expose VMS domains, trajectories, baseline comparisons and measurement provenance to authorized AI experiences.</p></div>
        <div className="rounded-3xl bg-white/10 p-7">
          {["get_vms_profile()","get_vms_trajectory()","get_domain_detail()","compare_to_baseline()","get_measurement_provenance()","create_healthspan_report()"].map(x=><div key={x} className="border-b border-white/15 py-3 font-mono text-sm">{x}</div>)}
        </div>
      </div>
    </section>

    <section className="bg-stone-50 py-24 text-center">
      <div className="mx-auto max-w-3xl px-6"><p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">One patient. One trajectory.</p><h2 className="mt-4 text-5xl font-semibold text-slate-950">Know where your health is going.</h2><p className="mt-6 text-lg text-slate-600">Establish your baseline. Understand meaningful change. Build a personalized strategy. Measure whether it is working.</p><a href="/contact" className="mt-8 inline-block rounded-full bg-slate-950 px-7 py-3 font-semibold text-white">Discover Your VMS™</a></div>
    </section>
    <Footer />
  </>
);
export default VMSHealthspanPage;
