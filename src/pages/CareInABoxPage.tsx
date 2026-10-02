import { Link } from "react-router-dom";
import { Brain, HeartPulse, Home, Activity, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
  { name:"Recovery-in-a-Box™", icon:Activity, tag:"Continuous Rehabilitation", price:"From $2,500/mo/site", items:["PT/OT/SLP/RT workflows","Home programs","Remote monitoring","Functional outcomes"] },
  { name:"Wound Care-in-a-Box™", icon:ShieldCheck, tag:"Advanced Wound Management", price:"From $3,500/mo/site", items:["DermalQ™ + WoundOS™","AI measurement","Documentation integrity","Product traceability"] },
  { name:"Brain Health-in-a-Box™", icon:Brain, tag:"Cognitive & Neuro Recovery", price:"From $3,500/mo/site", items:["Cognitive assessment","ABI recovery workflows","Dementia support","Caregiver engagement"] },
  { name:"Cardiac Care-in-a-Box™", icon:HeartPulse, tag:"Cardiovascular Health", price:"From $3,500/mo/site", items:["Cardiac assessment","RPM & monitoring","Medication adherence","Specialty escalation"] },
  { name:"Senior Care-in-a-Box™", icon:Sparkles, tag:"Healthy Aging & Independence", price:"From $4,500/mo/site", items:["Comprehensive geriatric care","Mobility & fall prevention","Cognitive & behavioral health","Care coordination"] },
  { name:"Care-at-Home-in-a-Box™", icon:Home, tag:"Connected Care at Home", price:"From $3,500/mo/site", items:["NP/PA/Nursing-at-Home","Remote monitoring","Specialty access","Escalation workflows"] },
];
const tiers=[
 {name:"90-Day Pilot",price:"From $25,000",desc:"One site · 25–50 participants",cta:"Launch a Pilot"},
 {name:"Site Deployment",price:"From $2,500/mo",desc:"AI-native workflows, training, measurement and support",cta:"Deploy at Your Site"},
 {name:"Enterprise Network",price:"Custom",desc:"Multi-site governance, integrations, analytics and rollout",cta:"Talk to Enterprise"},
];
export default function CareInABoxPage(){
 return <div className="bg-white text-slate-950">
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
   <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
    <div className="max-w-4xl">
     <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">AI-NATIVE CARE DELIVERY · POWERED BY AION™</div>
     <h1 className="text-5xl font-black tracking-tight md:text-7xl">Care-in-a-Box™</h1>
     <p className="mt-4 text-2xl font-semibold text-cyan-200">Deploy. Connect. Care. Scale.</p>
     <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">A turnkey, AI-native care delivery platform for senior living, post-acute, home care and health systems. Start with one site. Measure what matters. Scale what works.</p>
     <div className="mt-9 flex flex-wrap gap-4"><a href="#pricing" className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950">View Launch Pricing</a><Link to="/contact" className="rounded-xl border border-white/30 px-6 py-3 font-bold">Book a Demo</Link></div>
    </div>
   </div>
  </section>
  <section className="mx-auto max-w-7xl px-6 py-20">
   <div className="mb-10"><p className="font-bold uppercase tracking-widest text-blue-700">One platform. Multiple care solutions.</p><h2 className="mt-2 text-4xl font-black">Choose the box that fits your population.</h2><p className="mt-3 text-slate-600">Every package includes AION™ AI-native workflows, clinical protocols, onboarding, implementation, measurement and reporting.</p></div>
   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((p)=>{const Icon=p.icon;return <article key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start justify-between"><Icon className="h-8 w-8 text-blue-700"/><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">AI-NATIVE</span></div><h3 className="mt-5 text-2xl font-black">{p.name}</h3><p className="mt-1 font-semibold text-blue-700">{p.tag}</p><ul className="mt-5 space-y-2 text-sm text-slate-600">{p.items.map(x=><li key={x} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600"/>{x}</li>)}</ul><div className="mt-6 border-t pt-5"><div className="text-xl font-black">{p.price}</div><Link to="/contact" className="mt-3 inline-flex items-center gap-2 font-bold text-blue-700">Request deployment <ArrowRight className="h-4 w-4"/></Link></div></article>})}</div>
  </section>
  <section id="pricing" className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20"><p className="font-bold uppercase tracking-widest text-blue-700">Launch pricing</p><h2 className="mt-2 text-4xl font-black">Pilot → Site → Enterprise</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{tiers.map((t,i)=><div key={t.name} className={"rounded-2xl border p-7 "+(i===1?"border-blue-600 bg-blue-950 text-white":"border-slate-200 bg-white")}><h3 className="text-xl font-black">{t.name}</h3><div className="mt-4 text-3xl font-black">{t.price}</div><p className={"mt-3 "+(i===1?"text-blue-100":"text-slate-600")}>{t.desc}</p><Link to="/contact" className={"mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold "+(i===1?"bg-amber-400 text-slate-950":"bg-blue-700 text-white")}>{t.cta}<ArrowRight className="h-4 w-4"/></Link></div>)}</div><p className="mt-6 text-sm text-slate-500">Launch pricing is proposed commercial pricing and may vary by population, integrations, implementation scope and support. Clinical, financial and technology outcomes are not guaranteed and are validated during deployment.</p></div></section>
  <section className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-3xl bg-blue-950 p-10 text-white md:p-14"><h2 className="text-4xl font-black">What’s inside every box</h2><div className="mt-8 grid gap-4 md:grid-cols-4">{["AI-native software workflows","Assessment + clinical templates","Staff training + implementation playbook","Measurement + privacy/consent templates"].map(x=><div key={x} className="rounded-xl bg-white/10 p-5 font-semibold">{x}</div>)}</div><p className="mt-8 text-xl font-bold text-cyan-200">Assess → Personalize → Activate → Monitor → Intervene → Measure → Optimize</p></div></section>
  <section className="border-t"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center"><div><h2 className="text-3xl font-black">Launch your first site.</h2><p className="mt-2 text-slate-600">Demo → 90-Day Pilot → Site Deployment → Multi-Site Expansion → Enterprise.</p></div><Link to="/contact" className="rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950">LET’S DEPLOY AT YOUR SITE →</Link></div></section>
 </div>
}