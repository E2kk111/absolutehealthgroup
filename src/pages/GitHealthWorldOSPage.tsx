import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, ShieldCheck, FlaskConical, Download, RotateCcw, AlertTriangle } from "lucide-react";
import Footer from "../components/Footer";

type Acuity = "low" | "moderate" | "high";
type Scenario = { id: string; label: string; inpatientDays: number; homeSupport: number; riskAdjustment: number };
const scenarios: Scenario[] = [
  { id: "early", label: "Discharge tomorrow", inpatientDays: 1, homeSupport: 0, riskAdjustment: 0.045 },
  { id: "later", label: "Discharge in three days", inpatientDays: 3, homeSupport: 0, riskAdjustment: -0.025 },
  { id: "home", label: "Enhanced home-based support", inpatientDays: 1, homeSupport: 650, riskAdjustment: -0.055 },
];
const baselineRisk: Record<Acuity, number> = { low: 0.11, moderate: 0.20, high: 0.33 };
function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => { state = (Math.imul(1664525, state) + 1013904223) >>> 0; return state / 4294967296; };
}
function quantile(sorted: number[], p: number) {
  return sorted[Math.min(sorted.length - 1, Math.max(0, Math.floor((sorted.length - 1) * p)))];
}
function runScenario(s: Scenario, acuity: Acuity, cohort: number, hospitalDailyCost: number, seed: number) {
  const probability = Math.min(0.95, Math.max(0.01, baselineRisk[acuity] + s.riskAdjustment));
  const random = seededRandom(seed);
  const trials: number[] = [];
  const costs: number[] = [];
  for (let trial = 0; trial < 1000; trial++) {
    let events = 0;
    for (let i = 0; i < cohort; i++) if (random() < probability) events++;
    trials.push(events);
    costs.push(cohort * (s.inpatientDays * hospitalDailyCost + s.homeSupport) + events * 10500);
  }
  trials.sort((a,b) => a-b);
  costs.sort((a,b) => a-b);
  return { ...s, probability, expectedEvents: cohort * probability, readmissionsLow: quantile(trials,0.05), readmissionsHigh: quantile(trials,0.95), costMedian: quantile(costs,0.5), costLow: quantile(costs,0.05), costHigh: quantile(costs,0.95) };
}
export default function GitHealthWorldOSPage() {
  const [acuity, setAcuity] = useState<Acuity>("moderate");
  const [cohort, setCohort] = useState(100);
  const [dailyCost, setDailyCost] = useState(1800);
  const [seed, setSeed] = useState(42);
  const [selected, setSelected] = useState("home");
  const [review, setReview] = useState<"unreviewed" | "needs-evidence">("unreviewed");
  const results = useMemo(() => scenarios.map(s => runScenario(s,acuity,cohort,dailyCost,seed)), [acuity,cohort,dailyCost,seed]);
  const active = results.find(r=>r.id===selected) ?? results[0];
  const exportReport = () => {
    const payload = { title:"GitHealth WorldOS EpisodeSim", status:"synthetic research demonstration", modelVersion:"0.1-illustrative", seed, acuity, cohort, dailyCost, assumptions:{ readmissionCost:10500, baseRisk:baselineRisk[acuity], riskAdjustments:scenarios.map(({label,riskAdjustment})=>({label,riskAdjustment})), samples:1000, clinicalValidation:false }, results, aionReview:{status:review,clinicalAuthorization:false,rule:"Synthetic runs cannot authorize real patient care."}, generatedAt:new Date().toISOString() };
    const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href=url; a.download="githealth-episodesim-synthetic-report.json"; a.click(); URL.revokeObjectURL(url);
  };
  return <>
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">GitHealth™ · WorldOS™</p>
      <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Simulate healthcare before you deploy it.</h1>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed text-blue-100">Explore possible care pathways, costs and uncertainty in a controlled sandbox. Govern decisions with AION™ and measure observed results after a real-world pilot.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a href="#simulation-lab" className="rounded-xl bg-white px-6 py-4 font-bold text-blue-950">Try the Episode Simulation Lab</a><Link to="/contact?topic=GitHealth%20WorldOS%20Demo" className="rounded-xl border border-white/50 px-6 py-4 font-bold text-white">Request a Technology Discussion</Link></div>
      <p className="mt-6 text-sm text-blue-200">Research prototype · Synthetic inputs · No clinical predictions or actual financial results</p>
    </div></section>

    <section id="simulation-lab" className="bg-slate-50 py-16"><div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Interactive research sandbox</p><h2 className="mt-2 text-4xl font-black text-slate-950">Hospital-to-post-acute EpisodeSim™</h2><p className="mt-3 max-w-3xl text-slate-600">Compare three discharge pathways for a synthetic cohort over 30 days. Monte Carlo trials illustrate uncertainty under assumed risks—not validated intervention effects.</p></div><span className="self-start rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">Illustrative assumptions only</span></div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[310px_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black text-slate-950">Configure the episode</h3>
          <label htmlFor="acuity" className="mt-6 block text-sm font-bold text-slate-700">Clinical complexity</label>
          <select id="acuity" value={acuity} onChange={e=>setAcuity(e.target.value as Acuity)} className="mt-2 w-full rounded-lg border border-slate-300 p-3"><option value="low">Low</option><option value="moderate">Moderate</option><option value="high">High</option></select>
          <label htmlFor="cohort" className="mt-6 block text-sm font-bold text-slate-700">Synthetic episodes: {cohort}</label>
          <input id="cohort" type="range" min="25" max="500" step="25" value={cohort} onChange={e=>setCohort(Number(e.target.value))} className="mt-3 w-full accent-blue-700"/>
          <label htmlFor="cost" className="mt-6 block text-sm font-bold text-slate-700">Illustrative inpatient cost per day</label>
          <select id="cost" value={dailyCost} onChange={e=>setDailyCost(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-slate-300 p-3"><option value="1000">$1,000</option><option value="1800">$1,800</option><option value="3000">$3,000</option></select>
          <label htmlFor="seed" className="mt-6 block text-sm font-bold text-slate-700">Random seed</label>
          <input id="seed" type="number" value={seed} onChange={e=>setSeed(Number(e.target.value)||0)} className="mt-2 w-full rounded-lg border border-slate-300 p-3"/>
          <button type="button" onClick={()=>{setAcuity("moderate");setCohort(100);setDailyCost(1800);setSeed(42);setSelected("home");setReview("unreviewed");}} className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-700"><RotateCcw className="h-4 w-4"/>Reset assumptions</button>
        </aside>
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-3">{results.map(r=><button type="button" key={r.id} aria-pressed={selected===r.id} onClick={()=>setSelected(r.id)} className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:border-blue-500 ${selected===r.id?"border-blue-600 ring-2 ring-blue-100":"border-slate-200"}`}>
            <span className="text-sm font-bold text-blue-700">{r.label}</span><div className="mt-4 text-3xl font-black text-slate-950">{(r.probability*100).toFixed(1)}%</div><div className="text-xs text-slate-500">Assumed readmission probability</div><div className="mt-4 text-lg font-black text-slate-800">${Math.round(r.costMedian).toLocaleString()}</div><div className="text-xs text-slate-500">Median modeled cohort cost</div></button>)}</div>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">{active.label}</h3>
            <p className="mt-2 text-sm text-slate-600">1,000 seeded trials · 30-day synthetic episode · 5th–95th percentile intervals</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-bold text-blue-800">Expected readmissions</p><p className="mt-2 text-2xl font-black text-slate-950">{active.expectedEvents.toFixed(1)}</p><p className="mt-1 text-xs text-slate-600">90% interval: {active.readmissionsLow}–{active.readmissionsHigh}</p></div>
              <div className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-bold text-blue-800">Median modeled cost</p><p className="mt-2 text-2xl font-black text-slate-950">${Math.round(active.costMedian).toLocaleString()}</p><p className="mt-1 text-xs text-slate-600">Range: ${Math.round(active.costLow).toLocaleString()}–${Math.round(active.costHigh).toLocaleString()}</p></div>
              <div className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-bold text-blue-800">Planned inpatient days</p><p className="mt-2 text-2xl font-black text-slate-950">{active.inpatientDays}</p><p className="mt-1 text-xs text-slate-600">Home support cost: ${active.homeSupport.toLocaleString()}/episode</p></div>
            </div>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950"><div className="flex items-center gap-2 font-black"><AlertTriangle className="h-4 w-4"/> Model limitations</div><p className="mt-2">Readmission baseline and scenario adjustments are invented planning inputs. Readmission cost is fixed at $10,500; results do not represent reimbursement, causal treatment effects, clinical safety, savings, or actual ROI. Intervals describe simulation randomness conditional on these assumptions, not uncertainty in the assumptions themselves.</p></div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-2"><ShieldCheck className="h-6 w-6 text-blue-700"/><h3 className="text-xl font-black text-slate-950">AION™ pre-deployment review</h3></div><p className="mt-3 text-slate-600">Evidence gate: <strong>Insufficient for clinical deployment.</strong> This synthetic simulation cannot authorize patient care. Licensed professionals must separately review real-world decisions.</p><div className="mt-4 flex flex-wrap items-center gap-3"><span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">Review status: {review==="unreviewed"?"Not reviewed":"Additional evidence required"}</span><button type="button" onClick={()=>setReview("needs-evidence")} className="rounded-lg border border-blue-300 px-4 py-2 text-sm font-bold text-blue-800 hover:bg-blue-50">Flag evidence required</button></div></article>
          <button type="button" onClick={exportReport} className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white hover:bg-blue-800"><Download className="h-5 w-5"/>Export simulation and review JSON</button>
        </div>
      </div>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20"><p className="text-sm font-bold uppercase tracking-widest text-blue-700">From model to measured value</p><h2 className="mt-3 text-4xl font-black text-slate-950">Model before deployment. Measure after deployment.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{[{icon:FlaskConical,title:"Simulate",description:"Compare pathways and uncertainty with reproducible, versioned assumptions."},{icon:ShieldCheck,title:"Govern",description:"AION evaluates evidence and rules; qualified humans authorize consequential action."},{icon:Activity,title:"Measure",description:"After a real pilot, reconcile delivered work, observed outcomes and actual economics."}].map(({icon:Icon,title,description})=><article key={title} className="rounded-2xl border border-slate-200 p-6"><Icon className="h-8 w-8 text-blue-700"/><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-slate-600">{description}</p></article>)}</div><p className="mt-9 text-slate-600">GitHealth is the governed intelligence infrastructure for independent healthcare organizations. WorldOS is a research and planning capability within the established Care-in-a-Box architecture, not an additional architecture layer or an approved clinical device.</p><Link to="/contact?topic=GitHealth%20WorldOS%20Demo" className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700">Discuss an enterprise pilot <ArrowRight className="h-4 w-4"/></Link></section>
    <Footer/>
  </>;
}
