import { Link } from "react-router-dom";
import { ArrowRight, BadgeDollarSign, Pill, ChartNoAxesCombined, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: BadgeDollarSign,
    eyebrow: "Know your reimbursement",
    title: "Payer and contract intelligence",
    description: "Explore negotiated-rate benchmarks, applicable fee schedules, payer-contract assumptions and payment variation before expanding a specialty program.",
    examples: ["Compare published payer rates with relevant benchmarks", "Model reimbursement scenarios for a service or population", "Identify contract questions for a payer or revenue-cycle review"],
    caveat: "Published rates are historical or negotiated reference data, not guaranteed payment. Actual reimbursement depends on contracts, benefits, coding, claims and adjudication.",
  },
  {
    icon: Pill,
    eyebrow: "Help patients access treatment",
    title: "Medication affordability navigation",
    description: "Support a clinician-authorized prescription workflow with patient-facing pharmacy cost comparisons, coverage questions and documented follow-up.",
    examples: ["Surface potential pharmacy and formulary cost differences", "Flag affordability or availability barriers for follow-up", "Route alternatives back to a licensed prescriber when required"],
    caveat: "Displayed estimates are not final patient out-of-pocket prices. This concept does not send prescriptions, substitute medications or verify live pharmacy inventory.",
  },
  {
    icon: ChartNoAxesCombined,
    eyebrow: "Prove program value",
    title: "Projected versus actual economics",
    description: "Separate planning assumptions from verified operational results using existing GitHealth Prove™, ZScore™ and Cost-to-Goal™ reporting.",
    examples: ["Document baseline volume, payer mix and assumptions", "Compare projected revenue and cost with actual claims and expenses", "Track evidence completeness, exceptions and attributable outcomes"],
    caveat: "Projections are illustrative until validated against customer-specific contracts, remittances and observed outcomes.",
  },
];

export default function CareAccessEconomics() {
  return (
    <section id="physician-economics-access" className="scroll-mt-36 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-black uppercase tracking-widest text-blue-700">Physician economics + patient access</p>
        <h2 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-blue-950 md:text-5xl">Know the economics. Remove access barriers. Prove the value.</h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">Give physician groups and healthcare organizations a clearer view of what care may be reimbursed, what treatment may cost patients, and what a deployed program actually achieves—all inside the existing Care-in-a-Box™ workflow.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, eyebrow, title, description, examples, caveat }) => (
            <article key={title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Icon className="h-9 w-9 text-blue-700" aria-hidden="true" />
              <p className="mt-5 text-xs font-black uppercase tracking-widest text-cyan-700">{eyebrow}</p>
              <h3 className="mt-2 text-2xl font-black text-blue-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {examples.map((example) => <li key={example} className="flex gap-2"><span className="font-bold text-cyan-700" aria-hidden="true">✓</span><span>{example}</span></li>)}
              </ul>
              <p className="mt-auto pt-6 text-xs leading-5 text-slate-500">{caveat}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-3xl bg-blue-950 p-7 text-white md:p-9">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-8 w-8 shrink-0 text-cyan-300" aria-hidden="true" />
            <div>
              <h3 className="text-2xl font-black">Your Brand. Your Patients. Your Clinical Authority. Our Infrastructure Underneath.</h3>
              <p className="mt-3 max-w-5xl leading-7 text-blue-100">Medical Navigator AI™ identifies financial and medication-access barriers; AION™ evaluates evidence and rules; licensed clinicians authorize consequential clinical actions; Care-in-a-Box™ coordinates approved work; GitHealth™ records evidence and measures results. No new architectural layer is introduced.</p>
              <p className="mt-4 text-sm leading-6 text-blue-200">Potential reference providers: Payerset and Turquoise Health for price transparency; DoseSpot Connect for medication affordability. These are examples for integration evaluation only—not announced partnerships, licensed feeds or functioning integrations.</p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/contact?buyer=Independent%20Physician&topic=Physician%20Economics%20and%20Patient%20Access" className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950">SCHEDULE A PARTNERSHIP CONSULTATION <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link to="/independent-physician" className="inline-flex items-center rounded-xl border border-white/30 px-6 py-3 font-bold text-white">EXPLORE PHYSICIAN INFRASTRUCTURE</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
