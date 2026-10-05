import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, Network, ShieldCheck, Stethoscope, Workflow, BarChart3 } from "lucide-react";

const advisorMap = [
  ["Owns the client relationship", "Owns the clinical relationship"],
  ["Exercises fiduciary judgment", "Exercises licensed clinical judgment"],
  ["Uses institutional custody", "Uses governed clinical / evidence infrastructure"],
  ["Uses portfolio technology", "Uses Medical Navigator AI™ + Care-in-a-Box™"],
  ["Accesses financial products", "Accesses the specialty-care network"],
  ["Authorizes transactions", "Authorizes consequential clinical actions"],
  ["Monitors portfolio performance", "Monitors patient and population outcomes"],
  ["Receives performance reporting", "Receives Prove™ + ZScore™ reporting"],
];

const specialties = ["Cardiology", "Pulmonology", "Gastroenterology", "Urology", "Nephrology", "Endocrinology", "Wound Care", "Recovery", "Behavioral Health"];

const networkLoop = [
  "Physician joins",
  "Receives GitHealth infrastructure",
  "Brings facilities / populations",
  "Deploys PAC operating model",
  "Identifies care opportunities",
  "Activates Care-in-a-Box™",
  "Coordinates specialists",
  "Measures + proves outcomes",
  "Measures economics",
  "Expands population",
];

const economics = [
  { title: "Market Value™", text: "What attributable clinical and economic value may be available in the population?" },
  { title: "Workflow Units™", text: "How much governed work is actually completed?" },
  { title: "Cost-to-Goal™", text: "What did it cost to reach a verified healthcare workflow goal?" },
  { title: "Prove™", text: "What evidence, authority, rule version and result establish what happened?" },
  { title: "ZScore™", text: "How did performance compare with the defined baseline, target or validated benchmark?" },
  { title: "Economics™", text: "Did the completed workflow create attributable value after total delivery cost?" },
];

export default function IndependentPhysicianPage() {
  return <div className="bg-white text-slate-950">
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100">
            PAC SOLUTIONS™ · CARE-IN-A-BOX™ · POWERED BY GITHEALTH™
          </div>
          <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">The Independent Physician Infrastructure Model™</h1>
          <p className="mt-5 text-2xl font-black text-cyan-200">Your Patients. Your Clinical Authority. Our Infrastructure Underneath.</p>
          <p className="mt-7 max-w-4xl text-xl leading-8 text-blue-100">
            Give physicians the governed infrastructure to operate sophisticated healthcare networks while preserving the patient relationship and licensed clinical authority.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact?buyer=Independent%20Physician" className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950">Build Your Network <ArrowRight className="ml-2 inline h-4 w-4"/></Link>
            <Link to="/care-in-a-box" className="rounded-xl border border-white/30 px-6 py-3 font-black">Explore Care-in-a-Box™</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="font-black uppercase tracking-widest text-blue-700">The distribution thesis</p>
      <h2 className="mt-2 text-4xl font-black">The physician is the trusted human authority. GitHealth is the infrastructure underneath.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="text-sm font-black uppercase tracking-widest text-slate-500">Independent advisor model</div>
          <h3 className="mt-3 text-2xl font-black">Independent Financial Advisor</h3>
          <p className="mt-4 text-slate-600">Client relationship + fiduciary authority</p>
          <div className="my-5 text-2xl font-black text-blue-700">↓</div>
          <div className="rounded-2xl bg-slate-950 p-6 text-white"><strong>Operating infrastructure</strong><p className="mt-2 text-sm text-slate-300">Custody · trading · billing · portfolio management · reporting · technology</p></div>
        </div>
        <div className="rounded-3xl border-2 border-cyan-500 p-8 shadow-sm">
          <div className="text-sm font-black uppercase tracking-widest text-cyan-700">GitHealth model</div>
          <h3 className="mt-3 text-2xl font-black">Independent Physician / PAC</h3>
          <p className="mt-4 text-slate-600">Patient relationship + licensed clinical authority</p>
          <div className="my-5 text-2xl font-black text-cyan-700">↓</div>
          <div className="rounded-2xl bg-blue-950 p-6 text-white"><strong>GitHealth™ infrastructure</strong><p className="mt-2 text-sm text-blue-100">Medical Navigator AI™ · AION™ · Care-in-a-Box™ · Specialty Network · Prove™ · ZScore™ · Economics™</p></div>
        </div>
      </div>
      <p className="mt-8 rounded-2xl bg-cyan-50 p-6 text-lg font-bold text-blue-950">The physician does not become an employee of the technology platform, and GitHealth does not replace the physician. The physician remains the trusted human authority operating on top of the infrastructure.</p>
    </section>

    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-black uppercase tracking-widest text-blue-700">Physician as the independent advisor</p>
        <h2 className="mt-2 text-4xl font-black">Same strategic position. Healthcare-specific authority.</h2>
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-2 bg-blue-950 text-white"><div className="p-5 font-black">Independent financial advisor</div><div className="p-5 font-black">Independent physician</div></div>
          {advisorMap.map(([a,b]) => <div key={a} className="grid grid-cols-2 border-t border-slate-100"><div className="p-5 text-sm text-slate-600">{a}</div><div className="p-5 text-sm font-semibold text-slate-800">{b}</div></div>)}
        </div>
      </div>
    </section>

    <section className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-black uppercase tracking-widest text-cyan-300">Human operating layer</p>
        <h2 className="mt-2 text-4xl font-black">PAC Solutions™ becomes the physician-facing operating model.</h2>
        <p className="mt-5 max-w-5xl text-lg leading-8 text-blue-100">One physician-led relationship can connect a facility or population to multiple specialty pathways through one governed infrastructure.</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{specialties.map(s => <div key={s} className="rounded-xl border border-white/15 bg-white/5 p-4 text-center font-black">{s}</div>)}</div>
        <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 text-center text-lg font-black leading-10">
          FACILITY / POPULATION → PHYSICIAN ADVISORY CONSULTANT™ → MEDICAL NAVIGATOR AI™ → AION™ → <span className="text-amber-300">HUMAN AUTHORITY BOUNDARY</span> → PHYSICIAN AUTHORIZES → CARE-IN-A-BOX™ → SPECIALIST / NP / PA / FACILITY EXECUTION → PROVE™ / ZSCORE™ / COST-TO-GOAL™ / ECONOMICS™ → OUTCOMES
        </div>
        <p className="mt-8 text-center text-xl font-black text-cyan-200">Models suggest. AION evaluates. Physicians authorize. GitHealth proves.</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="font-black uppercase tracking-widest text-blue-700">Independent Physician Network</p>
      <h2 className="mt-2 text-4xl font-black">Recruit physicians. Let trusted clinical relationships distribute the infrastructure.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{networkLoop.map((x,i)=><div key={x} className="rounded-2xl border border-slate-200 p-5 shadow-sm"><div className="text-sm font-black text-cyan-700">{String(i+1).padStart(2,"0")}</div><div className="mt-2 font-black">{x}</div></div>)}</div>
      <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-center text-xl font-black text-white">PHYSICIANS → FACILITIES → PATIENT POPULATIONS → CARE-IN-A-BOX™ → WORKFLOW UNITS™ → VERIFIED OUTCOMES</div>
    </section>

    <section className="bg-cyan-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-black uppercase tracking-widest text-blue-700">GitHealth economics</p>
        <h2 className="mt-2 text-4xl font-black">Optimize for verified client value — not token consumption.</h2>
        <p className="mt-4 max-w-5xl text-lg text-slate-700">Tokens are a variable cost inside the workflow. Workflow Units™ are the production unit. Verified goals are the output. Cost-to-Goal™ is the operating metric.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{economics.map(x=><div key={x.title} className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-black text-blue-950">{x.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{x.text}</p></div>)}</div>
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
          <div className="text-sm font-black uppercase tracking-widest text-cyan-700">Value efficiency</div>
          <div className="mt-3 text-2xl font-black text-blue-950">Verified Attributable Value ÷ Total Cost-to-Goal™</div>
          <p className="mt-4 text-sm leading-6 text-slate-600">The runtime should choose the lowest-cost safe execution path that reaches the required verified goal, subject to clinical authority, payer rules, policy, security, evidence completeness and quality thresholds.</p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6"><Stethoscope className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">PAC Solutions™</h3><p className="mt-2 text-sm text-slate-600">Physician-facing operating model and human authority layer.</p></div>
        <div className="rounded-2xl border p-6"><Building2 className="h-8 w-8 text-cyan-700"/><h3 className="mt-4 text-xl font-black">Care-in-a-Box™</h3><p className="mt-2 text-sm text-slate-600">Institutional care-delivery infrastructure and specialty workflows.</p></div>
        <div className="rounded-2xl border p-6"><Network className="h-8 w-8 text-emerald-700"/><h3 className="mt-4 text-xl font-black">GitHealth™</h3><p className="mt-2 text-sm text-slate-600">Governed intelligence, evidence, execution, measurement and economics underneath.</p></div>
      </div>
    </section>

    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 to-cyan-800 p-10 md:p-14">
          <Workflow className="h-10 w-10 text-cyan-300"/>
          <h2 className="mt-4 text-4xl font-black">Give your facility an independent physician-led clinical operating system.</h2>
          <p className="mt-5 max-w-4xl text-blue-100">Start with one physician, one population and one care problem. Preserve clinical authority, deploy the appropriate Care-in-a-Box™, and measure whether the value was actually realized.</p>
          <Link to="/contact?buyer=Independent%20Physician" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950">START AN OPPORTUNITY ASSESSMENT <ArrowRight className="h-4 w-4"/></Link>
        </div>
        <p className="mt-8 text-xs leading-5 text-slate-400">Independent commercial solution. Clinical decisions remain with appropriately licensed professionals. Coverage and payment remain subject to applicable payer rules and case-specific facts. Market-value and ROI examples are planning tools until validated with deployment data.</p>
      </div>
    </section>
  </div>;
}
