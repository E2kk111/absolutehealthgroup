import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, HeartPulse, LineChart, Network, Settings2, ShieldCheck } from 'lucide-react';

const pillars = [
  { name: 'Clinical Optimization', icon: HeartPulse, description: 'Coordinate specialty care, recovery, quality and clinical continuity with licensed teams.' },
  { name: 'Operational Optimization', icon: Settings2, description: 'Reduce fragmentation across workflows, workforce coordination and care transitions.' },
  { name: 'Financial Optimization', icon: LineChart, description: 'Evaluate revenue integrity, cost-to-goal, resource use and contribution economics.' },
  { name: 'Population Health Optimization', icon: Network, description: 'Identify care gaps, support chronic and complex care, and measure contract-specific outcomes.' },
  { name: 'AI & Technology Optimization', icon: BrainCircuit, description: 'Deploy governed intelligence, human authorization, interoperable workflows and auditable evidence.' },
];
const products = [
  { name: 'Care-in-a-Box™', role: 'Clinical delivery and specialty programs', href: '/care-in-a-box' },
  { name: 'GitHealth™', role: 'Workflow, evidence, performance and commerce intelligence', href: '/githealth' },
  { name: 'AION™', role: 'AI intelligence, authority and governance', href: '/aion-intelligence' },
  { name: 'Specialty Solutions', role: 'WoundOS™, DermalQ™, recovery and proposed SurgicalOS™', href: '/care-in-a-box' },
];

const BrandIdentitySection: React.FC = () => (
  <section id="healthcare-optimization" className="bg-white py-20 md:py-28" aria-labelledby="optimization-heading">
    <div className="container">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Absolute Health Group™ · Corporate Identity</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <h2 id="optimization-heading" className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            The Healthcare <span className="text-blue-700">Optimization</span> Company.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Absolute Health Group™ is a value-based healthcare optimization company focused on improving clinical delivery, operational performance, financial sustainability and population health through connected services and governed AI infrastructure.
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
          <ShieldCheck className="h-8 w-8 text-blue-800" aria-hidden="true" />
          <p className="mt-4 text-xl font-black text-blue-950">Your Brand. Your Patients. Your Clinical Authority.</p>
          <p className="mt-2 text-base font-semibold text-blue-800">Our Infrastructure Underneath.</p>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {pillars.map(({ name, icon: Icon, description }) => (
          <article key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950"><Icon className="h-6 w-6 text-cyan-200" aria-hidden="true" /></div>
            <h3 className="mt-5 text-lg font-black text-blue-950">{name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-[#071F49] p-7 text-white md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">One corporate identity · Distinct product responsibilities</p>
        <h3 className="mt-3 text-3xl font-black">Optimize Care. Prove Outcomes. Create Value.</h3>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map(({ name, role, href }) => (
            <Link key={name} to={href} className="group rounded-xl border border-white/20 bg-white/10 p-5 transition-colors hover:bg-white/20">
              <h4 className="text-lg font-black">{name}</h4>
              <p className="mt-2 text-sm leading-6 text-blue-100">{role}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cyan-200">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-blue-200">Programs, outcomes, reimbursement and technology capabilities are subject to applicable clinical, payer, contractual and regulatory requirements. Product concepts are not claims of clinical validation or blanket CMS/FDA approval.</p>
      </div>
    </div>
  </section>
);
export default BrandIdentitySection;
