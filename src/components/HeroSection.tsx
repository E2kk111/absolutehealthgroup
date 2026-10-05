import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Stethoscope, TrendingUp, Workflow } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[760px] md:min-h-screen flex items-center overflow-hidden -mt-20 md:-mt-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.28),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.22),transparent_30%),radial-gradient(circle_at_55%_85%,rgba(13,148,136,0.18),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 rounded-full mb-7">
            <Workflow className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-semibold text-cyan-100">GitHealth™ intelligence infrastructure + Care-in-a-Box™</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.02] tracking-tight text-white max-w-5xl">
            Put Your Healthcare
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Workload to Work.
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-2xl leading-relaxed text-slate-200 max-w-4xl">
            Governed healthcare infrastructure that identifies available value, coordinates care workflows,
            preserves licensed human authority, and proves whether the outcome was achieved.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              to="/care-in-a-box"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 font-bold text-lg shadow-xl transition-all hover:-translate-y-0.5"
            >
              Deploy Care-in-a-Box™
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact?buyer=Market%20Value"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 hover:bg-white/15 text-white px-7 py-4 font-bold text-lg backdrop-blur transition-all"
            >
              Assess Your Population
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-5">
              <TrendingUp className="w-6 h-6 text-cyan-300 mb-3" />
              <div className="font-bold text-white">Find the value</div>
              <p className="text-sm text-slate-300 mt-1">Market Value™ identifies addressable clinical and economic opportunity.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-5">
              <Stethoscope className="w-6 h-6 text-violet-300 mb-3" />
              <div className="font-bold text-white">Preserve authority</div>
              <p className="text-sm text-slate-300 mt-1">Models suggest. AION™ evaluates. Licensed professionals authorize.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-5">
              <ShieldCheck className="w-6 h-6 text-emerald-300 mb-3" />
              <div className="font-bold text-white">Prove the outcome</div>
              <p className="text-sm text-slate-300 mt-1">Prove™, ZScore™ and Economics™ connect evidence, performance and attributable value.</p>
            </div>
          </div>

          <p className="mt-8 text-xs md:text-sm text-slate-400 max-w-4xl">
            GitHealth supports governed workflows and evidence. Licensed professionals retain clinical authority;
            applicable payers and CMS retain coverage and payment authority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
