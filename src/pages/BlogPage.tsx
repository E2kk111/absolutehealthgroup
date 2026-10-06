import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";

const posts=[
 ["STRATEGY","The Interface Is the Product","Why healthcare buyers should see opportunities, populations, workflows, evidence, outcomes and economics before they see the architecture."],
 ["CARE DELIVERY","What Care-in-a-Box™ Actually Deploys","A practical model for bringing specialty-care infrastructure into health systems, post-acute organizations, senior living and physician networks."],
 ["GOVERNED AI","Navigation, Not Notification","Medical Navigator AI™ is designed to find what is preventing better care and navigate what should happen next — while preserving human authority."],
 ["OPERATIONS","Healthcare Work Needs a Unit of Work","How the GitHealth Workflow Unit™ connects governed execution, evidence requirements, completion criteria and economics."],
 ["EVIDENCE","Payment Is Not Proof","Why care delivery, coverage and coding, payment, and proof are separate rails — and why healthcare infrastructure has to connect them."],
 ["ECONOMICS","From AI Spend to Cost-to-Goal™","Measure healthcare AI through completed governed work, contribution per workflow, evidence completion and outcomes per dollar of compute."]
];

export default function BlogPage(){return <div className="bg-white text-slate-950">
 <section className="border-b bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20"><p className="font-black uppercase tracking-[.2em] text-blue-700">Absolute Health Group™ Insights</p><h1 className="mt-4 text-5xl font-black md:text-6xl">Care Infrastructure. Explained.</h1><p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">Ideas for healthcare leaders building specialty access, governed workflows, measurable recovery and defensible economics.</p></div></section>
 <section className="mx-auto max-w-7xl px-6 py-20"><article className="rounded-3xl bg-gradient-to-br from-blue-950 to-cyan-800 p-8 text-white md:p-12"><p className="text-sm font-black tracking-[.18em] text-cyan-300">FEATURED</p><h2 className="mt-4 max-w-4xl text-4xl font-black">Put Your Healthcare Workload to Work.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">Identify healthcare value. Deploy governed workflows. Preserve human authority. Prove the outcome. The operating surface should begin with the work the organization needs completed — not the model running underneath it.</p><Link to="/care-in-a-box" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-blue-950">Explore the operating model <ArrowRight className="h-4 w-4"/></Link></article>
 <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map(p=><article key={p[1]} className="rounded-2xl border border-slate-200 p-7"><div className="text-xs font-black tracking-[.18em] text-blue-700">{p[0]}</div><h3 className="mt-3 text-2xl font-black">{p[1]}</h3><p className="mt-4 leading-7 text-slate-600">{p[2]}</p><Link to="/contact?topic=Insights" className="mt-6 inline-flex items-center gap-2 font-black text-blue-700">Discuss this topic <ArrowRight className="h-4 w-4"/></Link></article>)}</div></section><Footer/>
 </div>}
