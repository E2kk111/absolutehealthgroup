import { Link } from "react-router-dom";
import AgentTrustAssessment from "@/components/AgentTrustAssessment";
import { ArrowRight, BookOpen, Code2, ExternalLink, GitBranch, LockKeyhole, ShieldCheck, Terminal, Workflow } from "lucide-react";

const repo = "https://github.com/E2kk111/githealth-agent-sdk";
const pr = repo + "/pull/1";
const commands = "git clone https://github.com/E2kk111/githealth-agent-sdk.git\ncd githealth-agent-sdk\n# Developer Workshop v0.1 currently lives on a draft PR branch\ngit checkout feat/developer-workshop-v0.1\nnpm install\nnpm test\nnpm run example\nnpm run mcp";
const tools = [
  { name: "evaluate_market_scenario", detail: "Calculate illustrative scenario revenue, cost, and margin. Not actual reimbursement or guaranteed ROI." },
  { name: "evaluate_payment_integrity_case", detail: "Triage a synthetic payment variance. Not a fraud finding or payer action." },
  { name: "simulate_episode", detail: "Evaluate a synthetic episode against versioned policy and evidence requirements." }
];
const capabilities = [
  { icon: Code2, title: "Typed agent primitives", body: "Define agents, connectors, evidence, policies, and decisions with TypeScript contracts." },
  { icon: ShieldCheck, title: "AION-style governance", body: "Deterministic policy checks and simulated human-approval gates. No real-world authority is delegated." },
  { icon: Workflow, title: "SimLab evaluations", body: "Explore repeatable synthetic scenarios and fail-closed evidence requirements." },
  { icon: GitBranch, title: "Optional REA investigation", body: "Import manually reviewed synthetic findings from authorized software analysis; no automatic REA execution." }
];
export default function GitHealthDevelopersPage() {
  return <div className="bg-[#F9F8F5] text-[#17243A]">
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pt-24">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8DFE5] pb-6">
        <Link to="/githealth" className="text-xl font-bold tracking-tight">GitHealth<span className="text-[#366E9B]">™</span> / Developers</Link>
        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold"><a href="#quickstart" className="hover:underline">Quickstart</a><a href="#tools" className="hover:underline">MCP tools</a><a href="#governance" className="hover:underline">Governance</a><a href={repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#245E8B]">GitHub <ExternalLink size={14}/></a></div>
      </div>
      <div className="max-w-4xl pt-16">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#366E9B]">Developer Workshop v0.1 · Public source · Draft preview</p>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">Build agents. Govern decisions. Prove the path.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#506076] md:text-xl">A headless, model-agnostic TypeScript workshop for synthetic healthcare agent workflows, MCP tool interfaces, evidence provenance, and simulated human authorization.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={pr} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#17243A] px-6 py-4 font-semibold text-white hover:bg-[#294364]">Explore developer preview <ArrowRight size={18}/></a>
          <a href="#quickstart" className="inline-flex items-center gap-2 rounded-md border border-[#A8B7C6] px-6 py-4 font-semibold hover:bg-white"><Terminal size={18}/> Quickstart</a>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-[#68798D]">The implementation is on a draft pull request, not a published npm release or production service. Public source availability does not grant an open-source license.</p>
      </div>
    </section>
    <section className="border-y border-[#D8DFE5] bg-white py-20"><div className="mx-auto max-w-7xl px-6 md:px-10">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">Developer capabilities</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight">A practical SDK surface, without a new commercial layer.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">{capabilities.map(({icon: Icon,title,body})=><article key={title} className="rounded-lg border border-[#D8DFE5] bg-[#FAFBFC] p-8"><Icon className="h-7 w-7 text-[#366E9B]" aria-hidden="true"/><h3 className="mt-6 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-[#506076]">{body}</p></article>)}</div>
    </div></section>
    <section id="quickstart" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid gap-10 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">Quickstart</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Run the synthetic workshop locally.</h2><p className="mt-6 leading-relaxed text-[#506076]">Requires Node.js 20+ and a local development environment. The preview is under review, so tests and dependencies must be verified before broader use.</p><a href={repo+"/tree/feat/developer-workshop-v0.1"} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#245E8B] underline underline-offset-4">View source and documentation <ExternalLink size={16}/></a></div>
      <div className="overflow-x-auto rounded-lg bg-[#17243A] p-6 text-sm text-[#E3EEF7] shadow-lg"><div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-[#9AC2E1]"><Terminal size={16}/> Terminal</div><pre className="whitespace-pre-wrap break-words font-mono leading-7">{commands}</pre></div></div>
    </section>
    <section id="tools" className="bg-[#F1F5F8] py-20"><div className="mx-auto max-w-7xl px-6 md:px-10">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">MCP tools</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Three tools. Explicit limits.</h2>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">{tools.map(tool=><article key={tool.name} className="rounded-lg border border-[#D8DFE5] bg-white p-7"><Code2 className="h-6 w-6 text-[#366E9B]" aria-hidden="true"/><h3 className="mt-6 break-words font-mono text-lg font-semibold">{tool.name}</h3><p className="mt-4 leading-relaxed text-[#506076]">{tool.detail}</p></article>)}</div>
    </div></section>
    <AgentTrustAssessment />
    <section id="trust-services" className="border-t border-[#D8DFE5] bg-[#F1F5F8] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">From self-assessment to operational assurance</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">Start free. Verify the evidence. Govern the work.</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-[#506076]">The self-assessment is a free developer entry point. Organizations seeking deeper review can discuss scoped, paid implementation and ongoing assurance services. These are proposed commercial offerings; availability, pricing and scope are confirmed through consultation.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="flex flex-col rounded-lg border border-[#D8DFE5] bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#366E9B]">01 · Free</p>
            <h3 className="mt-4 text-2xl font-semibold">Trust & readiness self-assessment</h3>
            <p className="mt-4 flex-1 leading-relaxed text-[#506076]">Explore agent-level or organizational readiness, identify self-reported control gaps and download an illustrative synthetic test plan. No patient data, independent audit or certification.</p>
            <a href="#trust-score" className="mt-8 inline-flex justify-center rounded-md bg-[#17243A] px-5 py-3 font-semibold text-white hover:bg-[#294364]">Start free assessment</a>
          </article>
          <article className="flex flex-col rounded-lg border border-[#D8DFE5] bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#366E9B]">02 · Scoped engagement</p>
            <h3 className="mt-4 text-2xl font-semibold">Governance implementation</h3>
            <p className="mt-4 flex-1 leading-relaxed text-[#506076]">Define agent/task boundaries, collect and review control evidence, design AION policy gates, map human approval roles and plan SimLab synthetic failure tests. Deliverable: a reviewed implementation roadmap and control register.</p>
            <Link to="/contact?interest=governance-implementation" className="mt-8 inline-flex justify-center rounded-md border border-[#17243A] px-5 py-3 font-semibold hover:bg-[#F1F5F8]">Discuss implementation</Link>
          </article>
          <article className="flex flex-col rounded-lg border border-[#D8DFE5] bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#366E9B]">03 · Ongoing service</p>
            <h3 className="mt-4 text-2xl font-semibold">Agent assurance</h3>
            <p className="mt-4 flex-1 leading-relaxed text-[#506076]">Proposed recurring reviews of evidence drift, policy changes, synthetic regression tests, exceptions and authorization boundaries. Cadence, responsibilities and reporting are agreed with each organization; no continuous monitoring is claimed today.</p>
            <Link to="/contact?interest=agent-assurance" className="mt-8 inline-flex justify-center rounded-md border border-[#17243A] px-5 py-3 font-semibold hover:bg-[#F1F5F8]">Discuss assurance</Link>
          </article>
        </div>
        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-[#68798D]">A readiness score is advisory, not a clinical or regulatory certification. No score overrides AION's independent execution controls or qualified human authorization. Commercial services do not guarantee compliance, clinical outcomes or financial returns.</p>
      </div>
    </section>

    <section id="governance" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid gap-10 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">Authority boundary</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">AI can propose. Experts authorize. GitHealth proves what happened.</h2><p className="mt-6 leading-relaxed text-[#506076]">This is the intended governance model. Today’s workshop demonstrates typed, simulated state transitions; it does not verify a clinician’s identity, store immutable audit records, or execute real-world care or payment decisions.</p></div>
      <div className="rounded-lg border border-[#D8DFE5] bg-white p-8"><LockKeyhole className="h-8 w-8 text-[#366E9B]" aria-hidden="true"/><h3 className="mt-5 text-2xl font-semibold">Synthetic-only release guardrails</h3><ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-[#506076]"><li>No real patient information or live clinical systems.</li><li>No authenticated clinical approvals or production security controls.</li><li>No validated clinical predictions, payer integrations, or guaranteed savings.</li><li>REA is an optional, separately installed developer tool for authorized investigations only.</li></ul></div></div>
      <div className="mt-14 flex flex-wrap items-center gap-5 border-t border-[#D8DFE5] pt-8"><a href={repo+"/blob/feat/developer-workshop-v0.1/docs/rea-integration.md"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#245E8B] underline underline-offset-4"><BookOpen size={18}/> REA integration guide</a><a href={pr} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#245E8B] underline underline-offset-4">Follow release checks <ArrowRight size={18}/></a><Link to="/githealth" className="font-semibold text-[#245E8B] underline underline-offset-4">Back to GitHealth Enterprise</Link></div>
    </section>
  </div>;
}
