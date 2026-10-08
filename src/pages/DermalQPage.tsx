import { Link } from "react-router-dom";
import { ArrowRight, Camera, ShieldCheck, Workflow, BarChart3, FileCheck2, HeartPulse, Stethoscope, Database, LockKeyhole, Activity, ScanLine } from "lucide-react";
import Footer from "../components/Footer";

const capabilities = [
  { title:"Wound Image Intelligence", detail:"Documented segmentation, wound boundary detection, area estimation and AI-generated wound descriptions.", status:"SDK-documented", icon:ScanLine },
  { title:"Clinical Review & Escalation", detail:"Image-derived infection-risk flags and treatment-plan retrieval routed to authorized clinical review; never an autonomous diagnosis or order.", status:"Human-authorized workflow", icon:Stethoscope },
  { title:"Evidence & Documentation", detail:"Preserve source images, scale/calibration, model output, confidence, reviewer decisions and longitudinal measurement context.", status:"Deployment design", icon:FileCheck2 },
  { title:"Policy & Payment Intelligence", detail:"Connect documented PolicyPulse™, ReimburseRight™ and CLAIMS™ interfaces to verified payer rules, evidence requirements and human approval.", status:"SDK-documented interfaces", icon:ShieldCheck },
  { title:"Value-Based Care", detail:"Use documented Z-Score and enhanced VBC scoring interfaces as decision-support inputs, with validated methodology and population-specific benchmarking.", status:"Validation required", icon:BarChart3 },
  { title:"Agent Integration", detail:"REST JSON endpoints and a documented MCP server allow governed orchestration through AION™ and GitHealth™.", status:"SDK-documented", icon:Workflow },
];

const stages = [
  ["01","Capture","Consent, image quality, wound location and calibration reference"],
  ["02","Measure","Segmentation, area estimate, confidence and uncertainty"],
  ["03","Assess","Wound description, model-generated infection flag and longitudinal context"],
  ["04","Authorize","Clinician verifies findings, care plan and escalation"],
  ["05","Coordinate","Specialist, products, referrals and follow-up workflow"],
  ["06","Prove","Evidence packet, healing trajectory, documentation and economic outcome"],
];

const buyerValue = [
  ["Wound Clinics","Standardized assessments, review-ready documentation and measurable healing trajectories."],
  ["SNFs & Post-Acute","Earlier escalation signals, specialty coordination and continuity across transfers."],
  ["Health Systems","Consistent wound evidence, policy-aware workflow controls and longitudinal quality measurement."],
  ["Home-Based Care","Structured photo capture, clinician review and coordinated follow-up across care settings."],
  ["Payers & VBC Networks","Auditable care processes, risk stratification inputs and outcome/economic reporting."],
  ["Product & DME Partners","Treatment-context feedback and evidence workflows without implying product endorsement."],
];

export default function DermalQPage() {
  return <div className="bg-[#06111e] text-white">
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(20,184,166,.20),transparent_30%),radial-gradient(circle_at_25%_20%,rgba(59,130,246,.12),transparent_38%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <p className="text-sm font-black uppercase tracking-[.22em] text-teal-300">DermalQ™ · Wound Intelligence</p>
          <h1 className="mt-6 text-5xl font-black leading-[.98] tracking-tight md:text-7xl">From wound image to governed healing intelligence.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Capture evidence. Measure change. Support clinical decisions. Coordinate care. Protect documentation. Prove the healing journey.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact?topic=DermalQ%20Wound%20Intelligence" className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 font-black text-slate-950">Request a Wound Intelligence Assessment <ArrowRight className="h-4 w-4"/></Link>
            <a href="#how-it-works" className="rounded-full border border-white/25 px-6 py-3 font-bold">Explore the Workflow</a>
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-400">Clinical decision support. Model-generated outputs require professional verification. No claim of autonomous diagnosis or guaranteed reimbursement.</p>
        </div>
        <div className="rounded-[2rem] border border-teal-300/20 bg-white/[.045] p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="font-black">DermalQ™ Intelligence Console</span><span className="rounded-full border border-teal-300/30 px-3 py-1 text-xs font-bold text-teal-300">Illustrative workflow</span></div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0c2330] p-5 text-center"><Camera className="h-10 w-10 text-teal-300"/><p className="mt-3 text-sm font-bold">Image + Scale</p><p className="mt-1 text-xs text-slate-400">Capture quality</p></div>
            <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0c2330] p-5 text-center"><Activity className="h-10 w-10 text-teal-300"/><p className="mt-3 text-sm font-bold">Segmentation</p><p className="mt-1 text-xs text-slate-400">Area + confidence</p></div>
            <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0c2330] p-5 text-center"><Stethoscope className="h-10 w-10 text-teal-300"/><p className="mt-3 text-sm font-bold">Clinician Review</p><p className="mt-1 text-xs text-slate-400">Human authority</p></div>
            <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0c2330] p-5 text-center"><BarChart3 className="h-10 w-10 text-teal-300"/><p className="mt-3 text-sm font-bold">Healing + Value</p><p className="mt-1 text-xs text-slate-400">Outcome evidence</p></div>
          </div>
          <div className="mt-4 rounded-xl border border-teal-300/20 bg-teal-300/[.06] px-4 py-3 text-sm text-slate-300">Image → Evidence → Clinical Authority → Care → Outcome → Proof</div>
        </div>
      </div>
    </section>
    <section className="bg-white py-24 text-slate-950"><div className="mx-auto max-w-7xl px-6">
      <p className="text-sm font-black uppercase tracking-[.2em] text-teal-700">What the SDK enables</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Wound intelligence connected to the work of care.</h2>
      <p className="mt-5 max-w-3xl leading-8 text-slate-600">The supplied DermaIQ SDK guide documents these API surfaces. The production readiness, clinical validity, security posture and payer accuracy of each integration must be verified before live use.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(c=><article key={c.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><c.icon className="h-9 w-9 text-teal-700"/><h3 className="mt-5 text-xl font-black">{c.title}</h3><p className="mt-3 leading-7 text-slate-600">{c.detail}</p><p className="mt-5 text-xs font-bold uppercase tracking-wider text-teal-700">{c.status}</p></article>)}</div>
    </div></section>
    <section id="how-it-works" className="py-24"><div className="mx-auto max-w-7xl px-6">
      <p className="text-sm font-black uppercase tracking-[.2em] text-teal-300">Governed wound pathway</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Capture → Measure → Assess → Authorize → Coordinate → Prove.</h2>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{stages.map(([n,t,d])=><div key={n} className="rounded-3xl border border-white/10 bg-white/[.04] p-7"><p className="text-sm font-black text-teal-300">{n}</p><h3 className="mt-3 text-2xl font-black">{t}</h3><p className="mt-3 leading-7 text-slate-400">{d}</p></div>)}</div>
      <div className="mt-8 flex gap-4 rounded-3xl border border-teal-300/20 bg-teal-300/[.05] p-7"><LockKeyhole className="h-8 w-8 shrink-0 text-teal-300"/><div><h3 className="text-xl font-black">The clinical authority boundary</h3><p className="mt-2 leading-7 text-slate-300">Image-derived infection flags, measurements, recommendations and treatment plans are decision-support inputs. A qualified clinician reviews, corrects and authorizes consequential care decisions. Emergency escalation is based on clinical protocols, not a model score alone.</p></div></div>
    </div></section>
    <section className="bg-white py-24 text-slate-950"><div className="mx-auto max-w-7xl px-6">
      <p className="text-sm font-black uppercase tracking-[.2em] text-teal-700">The AION architecture</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">One wound engine. Governed end to end.</h2>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {[["DermalQ™ + WoundOS™","Wound images, assessment, longitudinal measurements and healing evidence."],["Medical Navigator AI™ + AION™","Navigate care gaps, evaluate evidence and preserve human clinical authority."],["PolicyPulse™ + RegOS™","Observe changes and apply verified, versioned policy controls."],["GitHealth™","Orchestrate governed Workflow Units™ and integration evidence."],["ShieldAI™ + Prove™","Preserve provenance, review history and defensible documentation."],["ZScore™ + Economics™","Benchmark outcomes and evaluate Cost-to-Heal™, resource use and contribution."]].map(([t,d])=><div key={t} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-slate-600">{d}</p></div>)}
      </div>
    </div></section>
    <section className="py-24"><div className="mx-auto max-w-7xl px-6"><p className="text-sm font-black uppercase tracking-[.2em] text-teal-300">Value for each buyer</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Wound intelligence that fits the institution.</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{buyerValue.map(([t,d])=><div key={t} className="rounded-2xl border border-white/10 bg-white/[.04] p-7"><h3 className="text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-slate-400">{d}</p></div>)}</div></div></section>
    <section className="bg-white py-24 text-slate-950"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
      <div><p className="text-sm font-black uppercase tracking-[.2em] text-teal-700">Why DermalQ™</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Not another wound photo app.</h2></div>
      <div className="space-y-5 text-lg leading-8 text-slate-600"><p><b className="text-slate-950">Clinical workflow:</b> image-derived insights enter a clinician-led pathway, not an autonomous diagnosis.</p><p><b className="text-slate-950">Evidence:</b> measurement, model version, reviewer decision and longitudinal context can be assembled into a defensible record.</p><p><b className="text-slate-950">Policy:</b> payer and CMS intelligence is subject to rule-version verification before use.</p><p><b className="text-slate-950">Economics:</b> connect healing outcomes with operational costs and payment integrity without guaranteeing coverage or savings.</p></div>
    </div></section>
    <section className="border-t border-white/10 py-24"><div className="mx-auto max-w-5xl px-6 text-center"><HeartPulse className="mx-auto h-12 w-12 text-teal-300"/><h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">Measure the wound. Govern the care. Prove the healing.</h2><p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">Begin with one wound population, one clinical workflow and one measurable baseline. Deploy through Wound Care-in-a-Box™ when ready.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contact?topic=DermalQ%20Wound%20Intelligence" className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 font-black text-slate-950">Request Assessment <ArrowRight className="h-4 w-4"/></Link><Link to="/care-in-a-box" className="rounded-full border border-white/20 px-6 py-3 font-black">Explore Care-in-a-Box™</Link></div><p className="mt-7 text-xs leading-6 text-slate-500">DermaIQ SDK capabilities are documented interfaces, not independent validation of live deployment, diagnostic accuracy, regulatory authorization or payer eligibility. No patient data is transmitted by this informational page.</p></div></section>
    <Footer />
  </div>;
}
