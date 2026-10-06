import React from 'react';
import { Activity, Brain, HeartPulse, Home, Hospital, Smile, Stethoscope, Bandage, ArrowRight, BadgeDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  { icon: Activity, title: 'Recovery', subtitle: 'Post-acute recovery & rehabilitation', examples: 'Transitions · functional recovery · home follow-up', tone: 'bg-blue-50 text-blue-700 border-blue-100' },
  { icon: Bandage, title: 'Wound Care', subtitle: 'Advanced wound management', examples: 'Assessment · documentation · monitoring · transitions', tone: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { icon: Brain, title: 'Brain Health', subtitle: 'Cognitive & neuro recovery', examples: 'Screening · recovery workflows · caregiver engagement', tone: 'bg-violet-50 text-violet-700 border-violet-100' },
  { icon: HeartPulse, title: 'Cardiac Care', subtitle: 'Cardiovascular health', examples: 'Assessment · monitoring · medication coordination', tone: 'bg-rose-50 text-rose-700 border-rose-100' },
  { icon: Smile, title: 'Senior Care', subtitle: 'Healthy aging & independence', examples: 'Mobility · chronic care · cognitive & behavioral support', tone: 'bg-amber-50 text-amber-700 border-amber-100' },
  { icon: Home, title: 'Care at Home', subtitle: 'Connected home-based care', examples: 'Remote monitoring · specialty access · escalation workflows', tone: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
  { icon: Hospital, title: 'Post-Acute Care', subtitle: 'Complex recovery & transitions', examples: 'SNF · LTACH · IRF · transitions · documentation', tone: 'bg-slate-100 text-slate-800 border-slate-200' },
  { icon: Stethoscope, title: 'Behavioral Care', subtitle: 'Behavioral health support', examples: 'Screening · care plans · escalation · community resources', tone: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100' },
];

const CareProgramsSection: React.FC = () => (
  <section className="py-20 md:py-24 bg-white" id="care-programs">
    <div className="container">
      <div className="max-w-4xl">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">Care-in-a-Box™ portfolio</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-slate-950">Choose the care program that fits your population.</h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
          You bring the patients, care team and clinical authority. Care-in-a-Box™ provides a configurable operating package for the workflows, coordination, evidence and measurement needed to launch and scale the program.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {programs.map(({ icon: Icon, title, subtitle, examples, tone }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${tone}`}><Icon className="w-6 h-6" /></div>
            <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
            <p className="mt-1 font-bold text-slate-700">{subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{examples}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-[1.25fr_0.75fr] gap-5">
        <div className="rounded-3xl bg-slate-950 text-white p-7 md:p-9">
          <p className="text-cyan-300 font-bold uppercase tracking-[0.16em] text-sm">What is inside the box?</p>
          <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            {['Workflow playbook + implementation plan','Assessment and documentation templates','Clinical protocols and escalation pathways','Training and onboarding materials','Navigation and specialty coordination','Evidence, measurement and reporting model','Privacy and consent templates','Program-specific economics model'].map(item => (
              <div key={item} className="flex gap-3"><span className="text-cyan-300 font-black">✓</span><span>{item}</span></div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7 md:p-9">
          <div className="flex items-center gap-3"><BadgeDollarSign className="w-7 h-7 text-blue-700" /><p className="font-black text-blue-950">ACCESS-ready coordination workflows</p></div>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For organizations participating in applicable ACCESS tracks, GitHealth can structure the review, care-coordination, evidence and billing-readiness workflow around the current CMS requirements—without representing the platform as the clinical or payment authority.
          </p>
          <p className="mt-4 text-xs text-slate-500">Coverage, eligibility and payment depend on the applicable CMS or payer rules and the facts of each service.</p>
        </div>
      </div>

      <div className="mt-9 flex flex-col sm:flex-row gap-4">
        <Link to="/care-in-a-box" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3.5 font-bold hover:bg-blue-700">
          Explore Care-in-a-Box™ <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/contact?buyer=Population%20Opportunity%20Assessment" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-slate-900 hover:bg-slate-50">
          Assess your population <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default CareProgramsSection;
