import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers3, ShieldCheck, Workflow, ChartNoAxesCombined } from "lucide-react";

const products = [
  { number: "01", name: "Market Value Intelligence", description: "Frame the economic problem. Compare scenario assumptions and cost-to-goal opportunities.", icon: ChartNoAxesCombined, status: "Reference concept · verify live integration" },
  { number: "02", name: "FWE Intelligence", description: "Structure Fraud, Waste & Error evidence review, investigation, and accountable resolution.", icon: ShieldCheck, status: "Reference concept · verify live integration" },
  { number: "03", name: "WorldOS™", description: "Explore synthetic healthcare episode pathways before consequential real-world decisions.", icon: Workflow, status: "Synthetic demonstration" },
];
const carePathway = ["Population selection", "Outreach", "Monitoring", "Physician review", "Follow-up", "Measurement"];
const steps = ["Identify the problem", "Evaluate the evidence", "Simulate the options", "Authorize the decision", "Prove what happened"];

export default function GitHealthEnterprisePage() {
  return (
    <div className="bg-[#F9F8F5] text-[#17243A]">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#D8DFE5] pb-6">
          <div className="text-2xl font-bold tracking-tight">GitHealth<span className="text-[#366E9B]">™</span></div>
          <nav aria-label="GitHealth section navigation" className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="#solutions" className="hover:underline">Solutions</a>
            <a href="#method" className="hover:underline">Method</a>
            <a href="#platform" className="hover:underline">Platform</a>
            <a href="#developers" className="hover:underline">Developers</a><Link to="/githealth/partner-onboarding" className="font-semibold text-[#245E8B] hover:underline">Partner Access</Link>
          </nav>
        </div>
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#366E9B]">Governed healthcare intelligence</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.09] tracking-tight md:text-7xl">Turn Healthcare Complexity Into Decisions You Can Defend.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#506076] md:text-xl">Identify operational problems, evaluate evidence, simulate alternatives, and prepare governed workflows for accountable human decisions.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/githealth/partner-onboarding" className="inline-flex items-center gap-2 rounded-md bg-[#17243A] px-6 py-4 font-semibold text-white hover:bg-[#294364]">Start Partner Onboarding <ArrowRight size={18}/></Link>
            <a href="#solutions" className="inline-flex items-center gap-2 rounded-md border border-[#A8B7C6] px-6 py-4 font-semibold hover:bg-white">Explore Solutions</a>
          </div>
        </div>
        <div className="mt-20 grid gap-4 border-t border-[#D8DFE5] pt-7 text-sm text-[#506076] md:grid-cols-3">
          <p>Problem-first workflows</p><p>Evidence and policy visibility</p><p>Human authority preserved</p>
        </div>
      </section>

      <section id="solutions" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#366E9B]">Solutions</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Start with the work that needs to get done.</h2>
          <p className="mt-5 max-w-2xl text-[#506076]">Three application experiences, designed around one shared governance foundation.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {products.map(({number,name,description,icon:Icon,status}) => (
              <article key={name} className="flex min-h-[330px] flex-col rounded-lg border border-[#D8DFE5] bg-[#FAFBFC] p-7">
                <div className="flex items-center justify-between"><span className="text-sm text-[#68798D]">{number}</span><Icon size={26} aria-hidden="true"/></div>
                <h3 className="mt-12 text-2xl font-semibold">{name}</h3>
                <p className="mt-4 leading-relaxed text-[#506076]">{description}</p>
                <p className="mt-auto pt-8 text-xs font-medium text-[#68798D]">{status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#366E9B]">The method</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">From uncertainty to accountable action.</h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-5">{steps.map((step,i)=><li key={step} className="border-t-2 border-[#366E9B] pt-5"><span className="text-sm text-[#68798D]">0{i+1}</span><p className="mt-4 text-xl font-semibold">{step}</p></li>)}</ol>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#506076]">AI-generated proposals are not clinical authorizations. Consequential decisions require the appropriate authorized human reviewer and verified evidence.</p>
        </div>
      </section>

      <section id="care-pathway" className="border-t border-[#D8DFE5] bg-[#F1F5F8] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#366E9B]">Care-in-a-Box™ · Vendor-neutral partner ecosystem</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">One connected pathway. Clear clinical accountability.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#506076]">A proposed operating model connects population selection, outreach, monitoring, physician review, follow-up, and measurement. The technology coordinates the work. Qualified clinicians retain diagnostic and treatment authority.</p>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {carePathway.map((step, index) => (
              <li key={step} className="rounded-lg border border-[#D8DFE5] bg-white p-6">
                <span className="text-sm font-semibold text-[#366E9B]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{step}</h3>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-3 md:grid-cols-3">{["Research partners · evidence and evaluation", "Technology partners · devices and digital tools", "Service partners · clinical and operational delivery"].map((role) => <div key={role} className="rounded-lg border border-[#D8DFE5] bg-white p-5 font-medium">{role}</div>)}</div>
          <div className="mt-8 rounded-lg border-l-4 border-[#366E9B] bg-white p-6">
            <p className="font-semibold">Partner roles are explicit.</p>
            <p className="mt-2 text-[#506076]">Independent physicians and healthcare organizations own patient relationships and retain clinical authority. Care-in-a-Box™ coordinates Medical Navigator AI™, AION™ governance, human authorization, and research, technology, or services vendors. GitHealth™ infrastructure supports proposed Prove™, ZScore™, Cost-to-Goal™, and Economics™ functions. Qualified providers remain responsible for monitoring, interpretation, diagnosis, and treatment. Integrations, contracting, privacy, and outcomes require verification before real-world use.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-6"><Link to="/care-in-a-box" className="inline-flex items-center gap-2 font-semibold text-[#245E8B] underline underline-offset-4">Explore Care-in-a-Box™ <ArrowRight size={18}/></Link><Link to="/githealth/partner-onboarding" className="inline-flex items-center gap-2 font-semibold text-[#245E8B] underline underline-offset-4">Partner onboarding <ArrowRight size={18}/></Link></div>
        </div>
      </section>

      <section id="platform" className="bg-[#17243A] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9AC2E1]">Shared infrastructure</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">One foundation. Multiple governed workflows.</h2></div>
          <div className="space-y-6 text-[#DBE5EF]">
            <div className="flex gap-4"><Layers3 className="shrink-0 text-[#9AC2E1]"/><p><strong className="text-white">GitHealth Harness™</strong> — proposed headless SDK, typed contracts and MCP interfaces.</p></div>
            <div className="flex gap-4"><ShieldCheck className="shrink-0 text-[#9AC2E1]"/><p><strong className="text-white">AION™</strong> — policy, evidence and human-authority governance design.</p></div>
            <div className="flex gap-4"><CheckCircle2 className="shrink-0 text-[#9AC2E1]"/><p><strong className="text-white">SimLab™</strong> — synthetic evaluations and research workflows, not clinical validation.</p></div>
          </div>
        </div>
      </section>

      <section id="developers" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#366E9B]">For developers</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Build on the same foundation.</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-[#506076]">Explore the canonical GitHealth Harness repository for the evolving SDK architecture. Prototype examples use synthetic data and are not production healthcare infrastructure.</p>
        <a className="mt-8 inline-flex items-center gap-2 font-semibold text-[#245E8B] underline underline-offset-4" href="https://github.com/githealth-inc/githealth-harness" target="_blank" rel="noopener noreferrer">View GitHealth Harness on GitHub <ArrowRight size={18}/></a>
      </section>
      <section className="border-t border-[#D8DFE5] bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 md:px-10"><div><h2 className="text-3xl font-semibold">Bring a problem worth solving.</h2><p className="mt-3 text-[#506076]">Start with your workflow, evidence requirements, and decision boundaries.</p></div><Link to="/githealth/partner-onboarding" className="rounded-md bg-[#17243A] px-6 py-4 font-semibold text-white hover:bg-[#294364]">Start Onboarding</Link></div>
      </section>
    </div>
  );
}
