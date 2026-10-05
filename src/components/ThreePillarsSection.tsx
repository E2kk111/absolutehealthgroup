import React from 'react';
import { ArrowRight, Boxes, ChartNoAxesCombined, Compass, FileCheck2, Gauge, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Search,
    title: 'Market Value™',
    label: 'Find the opportunity',
    description: 'Start with one patient population and one care problem. Model the addressable opportunity, required workflows and expected Cost-to-Goal.',
    link: '/contact?buyer=Market%20Value',
  },
  {
    icon: Boxes,
    title: 'Care-in-a-Box™',
    label: 'Deploy the care',
    description: 'Bring specialty-care operating infrastructure into your organization without building every workflow, network and measurement layer yourself.',
    link: '/care-in-a-box',
  },
  {
    icon: Compass,
    title: 'Medical Navigator™',
    label: 'Coordinate the workflow',
    description: 'Detect, assess, navigate and coordinate governed work while routing consequential decisions to the appropriate human authority.',
    link: '/technology',
  },
  {
    icon: FileCheck2,
    title: 'Prove™',
    label: 'Establish the evidence',
    description: 'Create a defensible record of what happened: source evidence, rule version, authority, action, completion and result.',
    link: '/technology',
  },
  {
    icon: Gauge,
    title: 'ZScore™',
    label: 'Measure performance',
    description: 'Measure performance against defined baselines and targets so proof of completion is separated from proof of performance.',
    link: '/technology',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Economics™',
    label: 'Prove the value',
    description: 'Connect Workflow Units, Cost-to-Goal and attributable realized value to understand the economics of completed healthcare work.',
    link: '/technology',
  },
];

const ThreePillarsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="solutions">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Start with the job to be done</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-950">
            Problem → Product → Outcome → Proof → Economics
          </h2>
          <p className="mt-5 text-lg md:text-xl text-slate-600">
            The buyer sees the problem, the deployable product and the measurable result first. The intelligence architecture stays underneath.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.title}
                to={solution.link}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-bold text-blue-600 mb-2">{solution.label}</p>
                <h3 className="text-2xl font-black text-slate-950">{solution.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{solution.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-950 text-white p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-cyan-300 font-bold text-sm uppercase tracking-[0.16em]">The enterprise proposition</p>
            <p className="mt-2 text-xl md:text-2xl font-bold max-w-4xl">
              Give us one patient population and one care problem. We identify the opportunity, govern the work, preserve human authority, prove what happened and measure realized value.
            </p>
          </div>
          <Link to="/contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-6 py-3 font-bold hover:bg-cyan-50 transition-colors">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
