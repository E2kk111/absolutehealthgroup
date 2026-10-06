import React from 'react';
import { BarChart3, BrainCircuit, CircleDollarSign, FileCheck2, Navigation, ShieldCheck, Stethoscope, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const proof = [
  { icon: FileCheck2, title: 'Prove™', text: 'What happened?', detail: 'Evidence, provenance, completion and authority.' },
  { icon: BarChart3, title: 'ZScore™', text: 'How did it perform?', detail: 'Defined baselines, targets and outcome measures.' },
  { icon: CircleDollarSign, title: 'Economics™', text: 'Was it worth it?', detail: 'Cost-to-Goal, attributable value and program economics.' },
];

const architecture = [
  { icon: Navigation, title: 'Medical Navigator™', text: 'Coordinates people, information and next steps.' },
  { icon: BrainCircuit, title: 'AION™', text: 'Evaluates governed evidence and deterministic rules.' },
  { icon: Stethoscope, title: 'Human Authority', text: 'Licensed professionals authorize consequential clinical actions.' },
  { icon: Workflow, title: 'GitHealth™', text: 'Runs, records and meters the governed workflow.' },
];

const TechnologyWorkflowSection: React.FC = () => (
  <section className="py-20 md:py-28 bg-slate-50">
    <div className="container">
      <div className="max-w-4xl">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">Proof & economics</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-slate-950">Know what happened, what changed and what it cost.</h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600">The client does not need to understand the AI stack to understand the result. Every deployment should answer three questions clearly.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {proof.map(({ icon: Icon, title, text, detail }) => (
          <div key={title} className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center"><Icon className="w-6 h-6 text-white" /></div>
            <p className="mt-5 text-sm font-bold text-blue-600">{text}</p>
            <h3 className="mt-1 text-2xl font-black text-slate-950">{title}</h3>
            <p className="mt-3 text-slate-600">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
        <div className="rounded-3xl bg-slate-950 text-white p-8 md:p-10">
          <p className="text-cyan-300 font-bold uppercase tracking-[0.16em] text-sm">Value Efficiency</p>
          <h3 className="mt-3 text-3xl md:text-4xl font-black">Verified client value ÷ total Cost-to-Goal.</h3>
          <p className="mt-5 text-slate-300 text-lg">Tokens are a variable cost inside the workflow—not the product. GitHealth measures completed governed work, the resources required to reach the goal, and the attributable value created.</p>
          <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-center">
            <div className="text-xl md:text-2xl font-black">Verified Attributable Value</div>
            <div className="h-px bg-cyan-300/70 my-3" />
            <div className="text-xl md:text-2xl font-black">Total Cost-to-Goal</div>
          </div>
        </div>
        <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">What the client should see improve</p>
          <div className="mt-6 space-y-4">
            {['Evidence completion','Human leverage','Completed governed workflows','Attributable value','Contribution per Workflow Unit'].map(x => (
              <div key={x} className="flex items-center gap-3 border-b border-slate-100 pb-4 last:border-0"><span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-black">↑</span><span className="font-bold text-slate-800">{x}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-slate-200">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-violet-600">The architecture underneath</p>
          <h3 className="mt-2 text-3xl md:text-4xl font-black text-slate-950">Sophisticated underneath. Simple for the client.</h3>
        </div>
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {architecture.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white border border-slate-200 p-5">
              <Icon className="w-6 h-6 text-blue-600" />
              <h4 className="mt-4 font-black text-slate-950">{title}</h4>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 text-sm md:text-base font-bold text-slate-700"><ShieldCheck className="w-5 h-5 text-emerald-600" /><span>Models suggest. AION™ evaluates. Licensed professionals authorize. GitHealth™ proves.</span></div>
          <Link to="/technology" className="font-bold text-blue-700">Explore the architecture →</Link>
        </div>
        <p className="mt-6 text-sm text-slate-500">Modeled opportunities and economic outputs depend on customer-specific evidence and assumptions and are not guarantees of clinical outcome, coverage, payment or ROI.</p>
      </div>
    </div>
  </section>
);

export default TechnologyWorkflowSection;
