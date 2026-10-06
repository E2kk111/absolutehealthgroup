import React from 'react';
import { Activity, ArrowRight, Brain, Building2, HeartPulse, Home, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  { name: 'Recovery', sub: 'Post-acute recovery & rehabilitation', icon: Activity, tone: 'bg-blue-600', bullets: ['Transitions and recovery plans', 'Functional measurement', 'Home and facility follow-up'] },
  { name: 'Wound Care', sub: 'Advanced wound management', icon: ShieldCheck, tone: 'bg-emerald-600', bullets: ['Assessment + documentation', 'Specialty coordination', 'Healing and utilization tracking'] },
  { name: 'Brain Health', sub: 'Cognitive & neuro recovery', icon: Brain, tone: 'bg-violet-600', bullets: ['Cognitive assessment', 'Recovery workflows', 'Caregiver engagement'] },
  { name: 'Cardiac Care', sub: 'Cardiovascular health', icon: HeartPulse, tone: 'bg-red-600', bullets: ['Risk and care-gap review', 'Monitoring + adherence', 'Specialty escalation'] },
  { name: 'Senior Care', sub: 'Healthy aging & independence', icon: Stethoscope, tone: 'bg-amber-500', bullets: ['Comprehensive care review', 'Chronic care coordination', 'Specialty access'] },
  { name: 'Care at Home', sub: 'Connected home-based care', icon: Home, tone: 'bg-cyan-600', bullets: ['Remote monitoring', 'Navigation + follow-up', 'Escalation workflows'] },
  { name: 'Post-Acute Care', sub: 'Complex recovery & transitions', icon: Building2, tone: 'bg-slate-800', bullets: ['SNF / LTACH / IRF support', 'Transition integrity', 'Documentation + outcomes'] },
  { name: 'Behavioral Care', sub: 'Behavioral health support', icon: Brain, tone: 'bg-fuchsia-700', bullets: ['Screening + monitoring', 'Care plans + engagement', 'Escalation + resources'] },
];

const CarePortfolioSection: React.FC = () => (
  <section className="py-20 md:py-28 bg-white" id="care-programs">
    <div className="container">
      <div className="max-w-4xl">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">Care-in-a-Box™ portfolio</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-slate-950">Choose the care program. We bring the operating infrastructure.</h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
          Care-in-a-Box™ is the deployable product. Each program combines defined workflows, implementation support, coordination, evidence capture and measurement around the population you serve.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {programs.map(({ name, sub, icon: Icon, tone, bullets }) => (
          <div key={name} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className={`${tone} p-5 text-white`}>
              <Icon className="w-7 h-7" />
              <h3 className="mt-4 text-xl font-black">Care-in-a-Box™</h3>
              <p className="text-lg font-bold">{name}</p>
              <p className="mt-1 text-sm text-white/80">{sub}</p>
            </div>
            <div className="p-5">
              <ul className="space-y-3 text-sm text-slate-700">
                {bullets.map(b => <li key={b} className="flex gap-2"><span className="text-emerald-600 font-black">✓</span><span>{b}</span></li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 md:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Current CMS opportunity · ACCESS</p>
        <h3 className="mt-2 text-2xl font-black text-slate-950">Turn a new payment pathway into an operable care-coordination workflow.</h3>
        <p className="mt-3 text-slate-700 leading-relaxed max-w-5xl">
          CMS currently allows eligible practitioners to bill ACCESS Co-Management Payment codes for qualifying care-update review and related coordination. The workflow requires documented review, at least one qualifying care-coordination activity and at least five minutes of practitioner time. GitHealth can organize the evidence and workflow around those requirements while the clinician remains the clinical authority and CMS remains the payment authority.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
          <span className="rounded-full bg-white border border-blue-200 px-3 py-1.5">G0676 · eCKM / CKM</span>
          <span className="rounded-full bg-white border border-blue-200 px-3 py-1.5">G0677 · MSK</span>
          <span className="rounded-full bg-white border border-blue-200 px-3 py-1.5">G0678 · BH</span>
          <span className="rounded-full bg-white border border-blue-200 px-3 py-1.5">$30 allowed amount before applicable adjustments</span>
        </div>
        <a href="https://www.cms.gov/priorities/innovation/access-co-management-payment-cmp-billing-guidance" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900">
          Review CMS billing guidance <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="font-black text-slate-950 text-xl">Not sure which box fits?</p>
          <p className="mt-2 text-slate-600">Start with the population and care problem. The Opportunity Assessment maps the recommended program, workflows, evidence requirements, implementation scope and modeled economics.</p>
        </div>
        <Link to="/contact?buyer=Population%20Opportunity%20Assessment" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700">
          Assess your population <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default CarePortfolioSection;
