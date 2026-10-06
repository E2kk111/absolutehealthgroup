import React from 'react';
import { ArrowDown, ArrowRight, BrainCircuit, CircleDollarSign, FileCheck2, Navigation, ShieldCheck, Stethoscope, Workflow } from 'lucide-react';

const steps = [
  { icon: Navigation, title: 'Medical Navigator™', text: 'Coordinates the workflow', tone: 'bg-blue-600' },
  { icon: BrainCircuit, title: 'AION™', text: 'Evaluates deterministic rules', tone: 'bg-violet-600' },
  { icon: Stethoscope, title: 'Human Authority', text: 'Authorizes consequential actions', tone: 'bg-amber-500' },
  { icon: Workflow, title: 'GitHealth Runtime™', text: 'Executes governed work', tone: 'bg-slate-900' },
  { icon: FileCheck2, title: 'Prove™ + ZScore™', text: 'Establishes evidence + measures performance', tone: 'bg-cyan-600' },
  { icon: CircleDollarSign, title: 'CTG + Economics™', text: 'Measures cost + attributable value', tone: 'bg-emerald-600' },
];

const TechnologyWorkflowSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-violet-600 mb-3">How GitHealth works</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-950">
            Govern the workflow. Preserve authority. Prove the result.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-slate-600">
            The architecture is sophisticated underneath so the operating experience can stay simple on the surface.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-3 items-stretch">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.title}>
                <div className="md:col-span-1 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm text-center">
                  <div className={`w-12 h-12 ${step.tone} rounded-xl mx-auto flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-4 font-black text-slate-950 leading-tight">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden" aria-hidden="true">
                    <ArrowRight />
                    <ArrowDown />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm md:text-base font-bold text-slate-700">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Models suggest. AION™ evaluates. Licensed professionals authorize. GitHealth™ proves.</span>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-3xl bg-slate-950 text-white p-8 md:p-10">
            <p className="text-cyan-300 font-bold uppercase tracking-[0.16em] text-sm">Economic flywheel</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-black">Optimize for verified client value — not token consumption.</h3>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Tokens are a variable cost inside the workflow. Workflow Units are the production unit. Verified goals are the output.
              GitHealth measures what it costs to reach the goal and what attributable value the completed work creates.
            </p>
            <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <p className="text-sm text-slate-300 font-bold uppercase tracking-wider">Value Efficiency</p>
              <div className="mt-4 text-center">
                <div className="text-xl md:text-2xl font-black">Verified Attributable Value</div>
                <div className="h-px bg-cyan-300/70 my-3" />
                <div className="text-xl md:text-2xl font-black">Total Cost-to-Goal</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <p className="text-blue-600 font-bold uppercase tracking-[0.16em] text-sm">What improves as we scale</p>
            <div className="mt-6 space-y-5">
              {[
                ['↓', 'AI cost / Workflow Unit'],
                ['↓', 'Human minutes / Workflow Unit'],
                ['↓', 'Exception rate + Cost-to-Goal'],
                ['↑', 'Evidence completion + human leverage'],
                ['↑', 'Attributable value + contribution / Workflow Unit'],
              ].map(([direction, label]) => (
                <div key={label} className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0">
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center font-black ${direction === '↑' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}`}>
                    {direction}
                  </span>
                  <span className="font-bold text-slate-800">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm text-slate-500">
              Economic outputs are measured from customer-specific evidence and assumptions. Modeled opportunities are not guarantees of clinical outcome, coverage, payment or ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyWorkflowSection;
