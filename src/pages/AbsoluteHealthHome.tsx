import { Link } from "react-router-dom";
import { ArrowRight, Brain, HeartPulse, Home, ShieldCheck, Stethoscope, Workflow, Building2, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";

const services = [
  { name: "Recovery & Post-Acute", icon: Building2, description: "Care transitions, rehabilitation pathways and recovery coordination." },
  { name: "Heart & Brain", icon: HeartPulse, description: "Specialty access and coordinated cardiac, neurological and cognitive care." },
  { name: "Wound Care", icon: ShieldCheck, description: "Clinician-led wound assessment, documentation and specialty coordination." },
  { name: "Senior & Home Care", icon: Home, description: "Longitudinal care coordination and specialty services where people live." },
];
const steps = [
  { title: "Tell us the care problem", text: "Identify the population, service gap and operating environment." },
  { title: "Design the care program", text: "Select an appropriate Care-in-a-Box pathway and review clinical, staffing and economic requirements." },
  { title: "Deploy with clinical authority", text: "Licensed professionals retain clinical decisions while governed workflows support delivery." },
  { title: "Measure the results", text: "Track observed outcomes, operating costs and verified economic results." },
];

export default function AbsoluteHealthHome() {
  return <>
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Absolute Health Group™ · One Place for Health & Care</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">Bring specialty healthcare into your organization.</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-blue-100">Deploy specialty healthcare programs without building the specialty infrastructure yourself. We connect healthcare organizations to care pathways, clinicians and the operational support needed to deliver care.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/care-in-a-box" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-blue-950 hover:bg-blue-50">Explore Care-in-a-Box™ <ArrowRight className="h-5 w-5"/></Link>
            <Link to="/contact?buyer=Health%20Systems&topic=Partnership%20Consultation" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-6 py-4 font-bold text-white hover:bg-white/10">Schedule a Partnership Consultation</Link>
          </div>
        </div>
        <aside className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">Our commitment</p>
          <h2 className="mt-5 text-3xl font-black leading-snug">Your Brand.<br/>Your Patients.<br/>Your Clinical Authority.</h2>
          <p className="mt-5 border-t border-white/20 pt-5 text-xl font-semibold text-blue-100">Our Infrastructure Underneath.</p>
          <p className="mt-6 text-sm leading-relaxed text-blue-100">Care programs are configured for the organization and remain subject to professional oversight, eligibility, contracting and applicable requirements.</p>
        </aside>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Care-in-a-Box™</p>
      <h2 className="mt-3 text-4xl font-black text-slate-950">Specialty care, delivered as a defined program.</h2>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">For physician groups, hospitals, senior living communities and post-acute organizations.</p>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({name,icon:Icon,description})=><article key={name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon/></div><h3 className="mt-5 text-xl font-black text-slate-950">{name}</h3><p className="mt-3 text-slate-600">{description}</p></article>)}
      </div>
      <Link to="/care-in-a-box" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900">View the complete portfolio <ArrowRight className="h-4 w-4"/></Link>
    </section>

    <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-6">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">How we work</p>
      <h2 className="mt-3 text-4xl font-black text-slate-950">Tell us the care problem. We deploy the box.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{steps.map((step,i)=><article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="text-sm font-black text-blue-700">0{i+1}</span><h3 className="mt-4 text-xl font-black text-slate-950">{step.title}</h3><p className="mt-3 text-slate-600">{step.text}</p></article>)}</div>
    </div></section>

    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Technology underneath</p><h2 className="mt-3 text-4xl font-black text-slate-950">Care delivery first. Governed infrastructure behind it.</h2><p className="mt-5 text-lg text-slate-600">GitHealth™ supports governed workflows, simulation research and measurement. It does not replace licensed clinical judgment or automatically authorize consequential patient care.</p><Link to="/githealth/worldos" className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700">Explore GitHealth technology <ArrowRight className="h-4 w-4"/></Link></div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
        {[{icon:Stethoscope,text:"Care programs led by licensed professionals"},{icon:Brain,text:"Evidence-informed navigation and decision support"},{icon:Workflow,text:"Governed operational workflows"},{icon:CheckCircle2,text:"Observed outcomes and reconciled economics"}].map(({icon:Icon,text})=><div key={text} className="flex items-center gap-4 border-b border-slate-200 py-4 last:border-0"><Icon className="h-6 w-6 shrink-0 text-blue-700"/><span className="font-semibold text-slate-800">{text}</span></div>)}
      </div>
    </section>

    <section className="bg-blue-900 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center"><div><h2 className="text-3xl font-black">Bring the right care program to your organization.</h2><p className="mt-3 text-blue-100">Discuss your care gaps, clinical oversight and deployment requirements.</p></div><Link to="/contact?topic=Partnership%20Consultation" className="rounded-xl bg-white px-6 py-4 font-bold text-blue-900">Schedule a Partnership Consultation</Link></div></section>
    <Footer/>
  </>;
}
