import React from 'react';
import { ArrowRight, BarChart3, ClipboardCheck, Compass, PlayCircle, ShieldCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: Target,
    number: '01',
    title: 'Assess',
    description: 'Define the population, care problem, baseline and opportunity before deployment.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Configure',
    description: 'Select the Care-in-a-Box™ program, required workflows, evidence and operating model.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'Navigate',
    description: 'Coordinate assessments, care gaps, specialty access, transitions and next steps.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Authorize',
    description: 'Route consequential clinical actions to the appropriate licensed professional.',
  },
  {
    icon: PlayCircle,
    number: '05',
    title: 'Execute',
    description: 'Complete governed work across the care team while capturing the required evidence.',
  },
  {
    icon: BarChart3,
    number: '06',
    title: 'Measure + Prove',
    description: 'Track completion, outcomes, Cost-to-Goal and attributable value so the client knows what to scale.',
  },
];

const ThreePillarsSection: React.FC = () => (
  <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="workflow">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:28px_28px]" />
    <div className="container relative z-10">
      <div className="max-w-4xl">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">Workflow + operations</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-slate-950">
          One operating loop from care problem to measurable result.
        </h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600">
          Your team should experience a clear workflow—not a maze of AI products. GitHealth coordinates the work, keeps human authority visible and captures the evidence needed to understand the result.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map(({ icon: Icon, number, title, description }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black text-slate-200">{number}</span>
            </div>
            <h3 className="mt-5 text-2xl font-black text-slate-950">{title}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-slate-950 text-white p-7 md:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-cyan-300 font-bold text-sm uppercase tracking-[0.16em]">The authority boundary stays visible</p>
          <p className="mt-2 text-xl md:text-2xl font-bold max-w-4xl">
            Models suggest. AION™ evaluates. Licensed professionals authorize. GitHealth™ proves.
          </p>
        </div>
        <Link to="/technology" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-6 py-3 font-bold hover:bg-cyan-50 transition-colors">
          See how it works <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ThreePillarsSection;
