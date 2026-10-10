import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Building2, Landmark, ShieldCheck, Waypoints, Download } from "lucide-react";
import Footer from "../components/Footer";

const audiences = [
  { icon: Building2, name: "Healthcare institutions", description: "Plan supervised pilots for care transitions, patient access and measurable operating performance." },
  { icon: Waypoints, name: "Technology partners", description: "Explore evidence provenance, governed integrations and a human authority boundary." },
  { icon: Landmark, name: "Investors and policy leaders", description: "Evaluate commercial validation, accountability and the distinction between projections and proven outcomes." }
];
const chapters = [
  "Healthcare decision infrastructure gap",
  "EpisodeSim™ and synthetic care-pathway modeling",
  "Price transparency and payment intelligence",
  "Medication access and affordability navigation",
  "AION™ evidence and human authorization",
  "Care-in-a-Box™ execution and GitHealth™ proof",
  "Governance, validation and deployment roadmap"
];

export default function WhitePapersPage() {
  return <div className="bg-white text-slate-950">
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200"><BookOpen className="h-4 w-4"/> Flagship white paper · October 2026</div>
        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">Simulate Before You Deploy™</h1>
        <p className="mt-6 max-w-4xl text-xl leading-8 text-blue-100">A new infrastructure for healthcare decisions, patient access, payment intelligence and proven outcomes.</p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-blue-200">GitHealth WorldOS™ · AION™ · Absolute Health Group™</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact?topic=WorldOS%20White%20Paper%20Request" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-blue-950"><Download className="h-5 w-5"/> Request the white paper</Link>
          <Link to="/care-in-a-box" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-4 font-bold text-white">Explore Care-in-a-Box™ <ArrowRight className="h-4 w-4"/></Link>
        </div>
        <p className="mt-5 text-xs text-blue-200">Request-based access pending PDF hosting and final publication approval. No automatic download is configured.</p>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-widest text-blue-700">Executive thesis</p>
      <h2 className="mt-3 max-w-4xl text-4xl font-black">Healthcare needs more than AI recommendations. It needs accountable decisions.</h2>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">The white paper describes a proposed framework for making assumptions visible, comparing care and financial scenarios, preserving licensed clinical authority and measuring observed results after deployment. It separates model outputs from permissioned execution and verified evidence.</p>
      <div className="mt-9 rounded-2xl border border-blue-200 bg-blue-50 p-7"><p className="text-xl font-black text-blue-950">Models suggest. AION evaluates. Humans authorize. GitHealth proves.</p><p className="mt-3 text-sm leading-6 text-blue-900">WorldOS™ is the planning and simulation experience; Care-in-a-Box™ is the care-delivery offering. Neither synthetic simulation nor an AI-generated recommendation independently authorizes clinical care.</p></div>
    </section>
    <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-6">
      <h2 className="text-3xl font-black">Inside the paper</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">{chapters.map((chapter,i)=><div key={chapter} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"><span className="font-black text-blue-700">{String(i+1).padStart(2,"0")}</span><p className="font-semibold">{chapter}</p></div>)}</div>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-black">Built for four stakeholder perspectives</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{audiences.map(({icon:Icon,name,description})=><article key={name} className="rounded-2xl border border-slate-200 p-7"><Icon className="h-9 w-9 text-blue-700"/><h3 className="mt-4 text-xl font-black">{name}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p></article>)}</div>
      <div className="mt-10 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950"><ShieldCheck className="mt-1 h-5 w-5 shrink-0"/><p><strong>Research and commercial boundaries:</strong> WorldOS simulations are illustrative, not clinically validated predictions. References to external pricing and pharmacy technology providers do not establish integrations or partnerships. Projected economics are not actual savings, guaranteed reimbursement or realized ROI. Any external release requires clinical, legal and commercial review.</p></div>
      <Link to="/contact?topic=WorldOS%20Institutional%20Briefing" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-800 px-6 py-4 font-bold text-white">Request an institutional briefing <ArrowRight className="h-5 w-5"/></Link>
    </section>
    <Footer/>
  </div>;
}
