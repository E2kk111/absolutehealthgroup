import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ClipboardList, DollarSign, FileCheck2, FileText, ShieldCheck, Target, Users, Workflow } from 'lucide-react';

const consoleNav = [
  { icon: Target, label: 'Opportunities', active: true },
  { icon: Users, label: 'Populations' },
  { icon: ClipboardList, label: 'Care Programs' },
  { icon: Workflow, label: 'Workflows' },
  { icon: FileCheck2, label: 'Evidence' },
  { icon: BarChart3, label: 'Outcomes' },
  { icon: DollarSign, label: 'Economics' },
  { icon: FileText, label: 'Reports' },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden -mt-20 md:-mt-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_12%_36%,rgba(6,182,212,0.10),transparent_26%)]" />
      <div className="container relative z-10 pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1480px] mx-auto grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 px-4 py-2 rounded-full mb-7">
              <Workflow className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-bold text-blue-900">GitHealth™ · Governed Intelligence for Healthcare Outcomes</span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.98] tracking-tight text-slate-950">
              Put Your Healthcare
              <span className="block text-blue-600">Workload to Work.</span>
            </h1>
            <p className="mt-7 text-xl md:text-2xl leading-relaxed text-slate-700 max-w-2xl">
              Identify healthcare value. Deploy governed workflows. Preserve human authority. Prove the outcome.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link to="/contact?buyer=Population%20Opportunity%20Assessment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-bold text-lg shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5">
                Assess Your Population <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/care-in-a-box" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:border-blue-300 hover:bg-blue-50 text-slate-900 px-7 py-4 font-bold text-lg transition-all">
                Explore Care-in-a-Box™ <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 max-w-xl">
              {[
                { label: 'Human Authority', icon: ShieldCheck },
                { label: 'Evidence Driven', icon: FileCheck2 },
                { label: 'Measurable Outcomes', icon: BarChart3 },
                { label: 'Deploy in Weeks', icon: Workflow },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 text-sm md:text-base font-bold text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center"><Icon className="w-5 h-5 text-blue-700" /></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-blue-900/10 overflow-hidden">
            <div className="flex min-h-[500px]">
              <aside className="hidden sm:block w-44 lg:w-48 bg-slate-950 text-white p-4 shrink-0">
                <div className="font-black text-xl tracking-tight px-2 py-3">GitHealth™</div>
                <div className="mt-4 space-y-1">
                  {consoleNav.map(({ icon: Icon, label, active }) => (
                    <div key={label} className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm ${active ? 'bg-blue-600 text-white font-bold' : 'text-slate-300'}`}>
                      <Icon className="w-4 h-4" /><span>{label}</span>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="flex-1 p-5 md:p-6 bg-slate-50/70 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Client Operations Console</p>
                    <h2 className="mt-1 text-xl md:text-2xl font-black text-slate-950">Population Value Overview</h2>
                  </div>
                  <span className="hidden md:inline-flex rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600">Illustrative</span>
                </div>

                <div className="mt-5 grid grid-cols-2 xl:grid-cols-5 gap-3">
                  {[
                    { value: '$12.4M', label: 'Market Value', text: 'text-blue-700', bg: 'bg-blue-50' },
                    { value: '142K', label: 'Workflow Units', text: 'text-emerald-700', bg: 'bg-emerald-50' },
                    { value: '96.8%', label: 'Evidence Complete', text: 'text-violet-700', bg: 'bg-violet-50' },
                    { value: '$1.1M', label: 'Cost-to-Goal', text: 'text-amber-700', bg: 'bg-amber-50' },
                    { value: '$4.6M', label: 'Realized Value', text: 'text-emerald-800', bg: 'bg-emerald-50' },
                  ].map(({ value, label, text, bg }) => (
                    <div key={label} className={`rounded-xl border border-slate-200 ${bg} p-3.5`}>
                      <div className={`text-xl md:text-2xl font-black ${text}`}>{value}</div>
                      <div className="mt-1 text-[11px] md:text-xs font-bold text-slate-600 leading-tight">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid md:grid-cols-[1.5fr_0.8fr] gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-slate-900">Value Realization</h3>
                      <span className="text-[11px] text-slate-500">Identified → Addressable → Realized</span>
                    </div>
                    <div className="mt-6 h-40 flex items-end gap-2 border-b border-slate-200 px-1">
                      {[30, 42, 48, 55, 62, 70, 78, 86, 96, 108, 122, 138].map((height, index) => (
                        <div key={index} className="flex-1 flex items-end gap-[2px] h-full">
                          <div className="flex-1 rounded-t bg-blue-200" style={{ height: `${Math.min(height + 18, 100)}%` }} />
                          <div className="flex-1 rounded-t bg-blue-600" style={{ height: `${Math.min(height, 92)}%` }} />
                          <div className="flex-1 rounded-t bg-emerald-400" style={{ height: `${Math.max(Math.min(height - 14, 78), 8)}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-slate-400"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Dec</span></div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Value Efficiency</p>
                    <div className="mt-2 text-4xl font-black text-slate-950">4.18×</div>
                    <p className="mt-1 text-xs text-slate-500">Verified attributable value ÷ Cost-to-Goal</p>
                    <div className="mt-6 space-y-3 text-sm">
                      <div className="flex justify-between gap-3"><span className="text-slate-500">Attributable Value</span><strong>$4.6M</strong></div>
                      <div className="flex justify-between gap-3"><span className="text-slate-500">Cost-to-Goal</span><strong>($1.1M)</strong></div>
                      <div className="pt-3 border-t border-slate-100 flex justify-between gap-3"><span className="text-slate-500">Net Attributable Value</span><strong className="text-emerald-700">$3.5M</strong></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-slate-600">
                  <span>Opportunities</span><span>Care Programs</span><span>Evidence</span><span>Outcomes</span><span>Economics</span><span>Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs md:text-sm text-slate-500 max-w-5xl">
          Dashboard values are illustrative and are not performance claims. GitHealth supports governed workflows and evidence;
          licensed professionals retain clinical authority, and applicable payers and CMS retain coverage and payment authority.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
