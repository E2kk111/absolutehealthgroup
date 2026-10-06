import { Link } from "react-router-dom";
import { ArrowRight, Mail, ShieldCheck, TrendingUp, Workflow } from "lucide-react";

const briefs = [
  {kicker:"OPERATIONS",title:"Put Your Healthcare Workload to Work",text:"Why the next healthcare operating system should begin with opportunities, populations and governed workflows — not another AI dashboard."},
  {kicker:"CARE DELIVERY",title:"Care-in-a-Box™: From Program Selection to Deployment",text:"A practical look at turning a defined care problem into a configured workflow, pilot and measurable institutional deployment."},
  {kicker:"PROOF + ECONOMICS",title:"Work → Evidence → Outcome → Economics",text:"How Workflow Units™, Cost-to-Goal™, Prove™ and ZScore™ create a common language for operational and financial performance."},
];

export default function NewsletterPage(){
 return <div className="bg-white text-slate-950">
  <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 text-white">
   <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="max-w-4xl">
     <p className="font-black uppercase tracking-[.2em] text-cyan-300">Absolute Health Group™ Newsletter</p>
     <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">The Care Infrastructure Brief</h1>
     <p className="mt-6 text-xl leading-8 text-blue-100">A concise briefing on specialty-care deployment, governed healthcare workflows, evidence, outcomes and economics.</p>
     <div className="mt-8 flex flex-wrap gap-4">
      <Link to="/contact?topic=Newsletter" className="rounded-xl bg-white px-6 py-3 font-black text-blue-950">Join the briefing</Link>
      <Link to="/care-in-a-box" className="rounded-xl border border-white/30 px-6 py-3 font-black">Explore Care-in-a-Box™</Link>
     </div>
    </div>
   </div>
  </section>
  <section className="mx-auto max-w-7xl px-6 py-20">
   <div className="grid gap-6 lg:grid-cols-3">{briefs.map((b,i)=><article key={b.title} className="rounded-3xl border border-slate-200 p-7 shadow-sm">
    <div className="text-xs font-black tracking-[.18em] text-blue-700">{b.kicker}</div>
    <h2 className="mt-4 text-2xl font-black">{b.title}</h2><p className="mt-4 leading-7 text-slate-600">{b.text}</p>
    <Link to={i===0?"/care-in-a-box":i===1?"/care-in-a-box#applications":"/care-in-a-box"} className="mt-6 inline-flex items-center gap-2 font-black text-blue-700">Read the briefing <ArrowRight className="h-4 w-4"/></Link>
   </article>)}</div>
  </section>
  <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-black uppercase tracking-[.18em] text-blue-700">What we track</p>
   <div className="mt-8 grid gap-5 md:grid-cols-3">
    {[{I:Workflow,t:"Care Operations",d:"Programs, workflows, deployment and recovery."},{I:ShieldCheck,t:"Governance + Evidence",d:"Human authority, documentation, provenance and defensibility."},{I:TrendingUp,t:"Outcomes + Economics",d:"Performance, Cost-to-Goal™, Workflow Units™ and measurable value."}].map(x=><div key={x.t} className="rounded-2xl bg-white p-6"><x.I className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">{x.t}</h3><p className="mt-2 text-slate-600">{x.d}</p></div>)}
   </div>
  </div></section>
  <section className="bg-blue-950 text-white"><div className="mx-auto max-w-7xl px-6 py-16 text-center"><Mail className="mx-auto h-10 w-10 text-cyan-300"/><h2 className="mt-4 text-3xl font-black">Better care needs better operating infrastructure.</h2><p className="mx-auto mt-3 max-w-2xl text-blue-100">Get concise updates built for healthcare operators, clinicians, executives and strategic partners.</p><Link to="/contact?topic=Newsletter" className="mt-7 inline-block rounded-xl bg-cyan-300 px-6 py-3 font-black text-blue-950">Subscribe</Link></div></section>
 </div>
}