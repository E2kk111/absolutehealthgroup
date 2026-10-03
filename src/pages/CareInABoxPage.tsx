import { Link } from "react-router-dom";
import { Brain, HeartPulse, Home, Activity, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, Building2, Database, LockKeyhole, BarChart3, Stethoscope, Workflow } from "lucide-react";

const products = [
  { name:"Recovery-in-a-Box™", icon:Activity, tag:"Continuous Rehabilitation", price:"From $2,500/mo/site", items:["PT/OT/SLP/RT workflows","Home recovery programs","Functional measurement","Recovery Record™"] },
  { name:"Wound Care-in-a-Box™", icon:ShieldCheck, tag:"Advanced Wound Intelligence", price:"From $3,500/mo/site", items:["DermalQ™ + WoundOS™","Assessment & measurement","Documentation integrity","Specialty escalation"] },
  { name:"Brain Health-in-a-Box™", icon:Brain, tag:"Cognitive & Neuro Recovery", price:"From $3,500/mo/site", items:["Cognitive assessment","ABI recovery workflows","Dementia support","Caregiver engagement"] },
  { name:"Cardiac Care-in-a-Box™", icon:HeartPulse, tag:"Cardiovascular Health", price:"From $3,500/mo/site", items:["Cardiac assessment","RPM where eligible","Medication adherence","Specialty escalation"] },
  { name:"Senior Care-in-a-Box™", icon:Sparkles, tag:"Healthy Aging & Independence", price:"From $4,500/mo/site", items:["Geriatric care workflows","Mobility & fall prevention","Cognitive & behavioral health","Care coordination"] },
  { name:"Care-at-Home-in-a-Box™", icon:Home, tag:"Connected Care at Home", price:"From $3,500/mo/site", items:["NP/PA/Nursing-at-Home","Remote monitoring","Specialty access","Escalation workflows"] },
  { name:"Post-Acute Care-in-a-Box™", icon:Building2, tag:"Complex Recovery & Transitions", price:"Custom", items:["SNF/LTACH/IRF support","Transitions & navigation","Wound/cardiac/neuro pathways","Therapy & functional gains"] },
  { name:"Behavioral Care-in-a-Box™", icon:Stethoscope, tag:"Behavioral Health", price:"Custom", items:["Screening & monitoring","Care plans & engagement","Caregiver support","Crisis escalation workflows"] },
];

const rails = [
  {name:"Care Delivery", text:"Assessments, care planning, navigation, monitoring and specialty access."},
  {name:"Coverage + Coding", text:"Eligibility, applicable policy, coding and documentation intelligence."},
  {name:"CMS / Value-Based Payment", text:"Model and contract alignment, quality measures and population-health workflows."},
  {name:"Proof + Economics", text:"Evidence, outcomes, payment reconciliation, episode economics and value measurement."},
];

const flagship = [
  {name:"Joint & Neuro Rehab", tag:"Continuous Recovery", text:"Functional outcomes, therapy coordination, home recovery and longitudinal Recovery Record™."},
  {name:"DermalQ™ / WoundOS™", tag:"Advanced Wound Intelligence", text:"Wound assessment, documentation integrity, healing trajectory and specialty escalation."},
  {name:"PAC Solutions", tag:"Physician Advisory + Specialty Access", text:"Physician-led oversight, hybrid specialty access, quality leadership and escalation pathways."},
  {name:"CJR-X Recovery-in-a-Box™", tag:"Hospital Readiness Application", text:"A 90-day recovery operating layer for joint-replacement episodes, quality measurement and episode economics."},
];

const infra = [
  {icon:Database,name:"Data + Interoperability",text:"EHR/FHIR, imaging, labs, claims, devices and permissioned MCP connectors."},
  {icon:Brain,name:"AION™ Authority",text:"Evidence-based rules, clinical authority, permissions and human-in-the-loop controls."},
  {icon:ShieldCheck,name:"GitHealth Prove™",text:"Provenance, proof of data, authority, care/computation and payment."},
  {icon:BarChart3,name:"GitHealth Economics™",text:"Episode economics, reconciliation, quality, utilization and cost-to-value."},
];

const tiers=[
 {name:"Assess",price:"$10K–$25K",desc:"Readiness and opportunity assessment",cta:"Start Assessment"},
 {name:"90-Day Pilot",price:"From $25,000",desc:"One site · 25–50 participants · evidence review",cta:"Launch a Pilot"},
 {name:"Scale",price:"Custom",desc:"Site, multi-site and enterprise deployment",cta:"Talk to Enterprise"},
];

export default function CareInABoxPage(){
 return <div className="bg-white text-slate-950">
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 text-white">
   <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
    <div className="max-w-4xl">
     <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">INSTITUTIONAL CARE INFRASTRUCTURE · POWERED BY GITHEALTH™</div>
     <h1 className="text-5xl font-black tracking-tight md:text-7xl">Care-in-a-Box™</h1>
     <p className="mt-4 text-2xl font-semibold text-cyan-200">Deploy. Connect. Care. Measure. Prove. Scale.</p>
     <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">Launch a complete specialty or CMS-aligned care program inside your organization — without building the infrastructure yourself.</p>
     <div className="mt-7 grid max-w-3xl gap-3 text-base font-bold sm:grid-cols-2"><div>✓ Your Brand. Your Patients. Your Clinical Authority.</div><div>✓ Our Infrastructure Underneath.</div></div>
     <div className="mt-9 flex flex-wrap gap-4"><a href="#flagship" className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950">Explore Flagship Applications</a><Link to="/contact" className="rounded-xl border border-white/30 px-6 py-3 font-bold">Request a Demo</Link></div>
    </div>
   </div>
  </section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">One connected care experience</p>
   <h2 className="mt-2 text-4xl font-black">Assess → Personalize → Deliver → Connect → Measure → Prove</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">The customer sees a simple patient and episode workflow. GitHealth™, AION™, interoperability, provenance and economics remain underneath — visible when they are useful, not as the clinician’s homepage.</p>
   <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{["Assess","Personalize","Deliver","Connect","Measure","Prove"].map((x,i)=><div key={x} className="rounded-2xl border border-slate-200 p-5"><div className="text-sm font-black text-blue-700">0{i+1}</div><div className="mt-2 text-lg font-black">{x}</div></div>)}</div>
  </section>

  <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">The four rails</p><h2 className="mt-2 text-4xl font-black">From care delivery to measurable value.</h2>
   <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{rails.map((r,i)=><div key={r.name} className="rounded-2xl bg-white p-6 shadow-sm"><div className="text-sm font-black text-blue-700">RAIL {i+1}</div><h3 className="mt-2 text-xl font-black">{r.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{r.text}</p></div>)}</div>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <div className="mb-10"><p className="font-bold uppercase tracking-widest text-blue-700">Eight modular programs</p><h2 className="mt-2 text-4xl font-black">One infrastructure. Multiple care applications.</h2></div>
   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{products.map((p)=>{const Icon=p.icon;return <article key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><Icon className="h-8 w-8 text-blue-700"/><h3 className="mt-5 text-xl font-black">{p.name}</h3><p className="mt-1 font-semibold text-blue-700">{p.tag}</p><ul className="mt-5 space-y-2 text-sm text-slate-600">{p.items.map(x=><li key={x} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600"/>{x}</li>)}</ul><div className="mt-6 border-t pt-4 font-black">{p.price}</div></article>})}</div>
  </section>

  <section id="flagship" className="bg-blue-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">Flagship applications</p><h2 className="mt-2 text-4xl font-black">Specialty care that feels like one system.</h2>
   <p className="mt-4 max-w-4xl text-blue-100">Recovery is the patient journey. PAC supplies physician oversight and specialty access. DermalQ/WoundOS supplies high-value wound intelligence. CJR-X applies the same infrastructure to a defined 90-day hospital episode.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-2">{flagship.map(f=><div key={f.name} className="rounded-2xl bg-white/10 p-6"><div className="text-sm font-bold text-cyan-300">{f.tag}</div><h3 className="mt-2 text-2xl font-black">{f.name}</h3><p className="mt-3 leading-7 text-blue-100">{f.text}</p></div>)}</div>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">The infrastructure underneath</p><h2 className="mt-2 text-4xl font-black">GitHealth™ governs. AION™ establishes authority. Care teams decide.</h2>
   <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{infra.map(x=>{const Icon=x.icon;return <div key={x.name} className="rounded-2xl border border-slate-200 p-6"><Icon className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-xl font-black">{x.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{x.text}</p></div>})}</div>
   <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white"><div className="flex items-start gap-4"><LockKeyhole className="mt-1 h-8 w-8 text-cyan-300"/><div><h3 className="text-2xl font-black">Human authority is a product requirement.</h3><p className="mt-2 max-w-4xl text-slate-300">Agents may observe, organize, recommend and prepare work within permissioned workflows. Consequential clinical, payment and PHI actions remain subject to appropriate authority, policy and human review.</p></div></div></div>
  </section>

  <section id="pricing" className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Commercial model</p><h2 className="mt-2 text-4xl font-black">Assess → Pilot → Scale</h2>
   <div className="mt-10 grid gap-6 md:grid-cols-3">{tiers.map((t,i)=><div key={t.name} className={"rounded-2xl border p-7 "+(i===1?"border-blue-600 bg-blue-950 text-white":"border-slate-200 bg-white")}><h3 className="text-xl font-black">{t.name}</h3><div className="mt-4 text-3xl font-black">{t.price}</div><p className={"mt-3 "+(i===1?"text-blue-100":"text-slate-600")}>{t.desc}</p><Link to="/contact" className={"mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold "+(i===1?"bg-amber-400 text-slate-950":"bg-blue-700 text-white")}>{t.cta}<ArrowRight className="h-4 w-4"/></Link></div>)}</div>
   <p className="mt-6 text-sm text-slate-500">Proposed commercial pricing. Final pricing depends on population, integrations, implementation scope and support. Reimbursement, clinical outcomes, savings and technology performance are not guaranteed.</p>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-3xl bg-gradient-to-r from-blue-950 to-cyan-800 p-10 text-white md:p-14"><Workflow className="h-10 w-10 text-cyan-300"/><h2 className="mt-4 text-4xl font-black">Your Brand. Your Patients. Your Clinical Authority.</h2><p className="mt-3 text-2xl font-bold text-cyan-200">Our infrastructure underneath.</p><p className="mt-5 max-w-3xl text-blue-100">Start with one problem, one population and one site. Configure the workflow, train the team, measure the outcome and scale only what works.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950">REQUEST A DEMO <ArrowRight className="h-4 w-4"/></Link></div></section>

  <section className="border-t"><div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500"><p><strong>Trust framework:</strong> CMS-aligned care and reimbursement workflows · FDA-aware digital health governance · URAC Health Care AI Accreditation — Targeted. Care-in-a-Box™ is not represented as CMS-approved, FDA-approved or URAC-accredited. Model-specific requirements must be verified against controlling CMS guidance and contracts.</p></div></section>
 </div>
}