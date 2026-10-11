import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ShieldAlert, BarChart3, ShieldCheck, BriefcaseBusiness, RotateCcw } from "lucide-react";
import {
  type PackageInput, type CapitalInput, type Coverage, type Autonomy,
  blankPackages, blankCapital, examplePackages, exampleCapital,
  contribution, nonnegative, underwrite,
} from "../lib/peUnderwriting";

const money = (n:number) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);
const numKeys = ["revenue","delivery","technology","premium","reserve","compliance"] as const;
const capitalKeys = ["equity","overhead","debtService","maintenanceCapex","cashTaxes","stressPercent"] as const;
const coverageValues: Coverage[] = ["Not reviewed","Requested","Quoted","Bound (unverified)","Excluded","Expired"];
const autonomyValues: Autonomy[] = ["A0","A1","A2","A3","A4"];
const numberLabels: Record<typeof numKeys[number],string> = {
  revenue:"Collected revenue",delivery:"Delivery cost",technology:"Agent / tech",
  premium:"Premiums",reserve:"Loss reserve",compliance:"Compliance cost",
};
const capitalLabels: Record<typeof capitalKeys[number],string> = {
  equity:"Equity contributed",overhead:"Annual overhead",debtService:"Annual debt service",
  maintenanceCapex:"Maintenance capex",cashTaxes:"Cash taxes",stressPercent:"Revenue stress (%)",
};

export default function PEUnderwritingDemoPage() {
  const [packages,setPackages] = useState<PackageInput[]>(blankPackages);
  const [capital,setCapital] = useState<CapitalInput>(blankCapital);
  const results = useMemo(()=>underwrite(packages,capital),[packages,capital]);
  const updatePackage = (index:number,patch:Partial<PackageInput>) =>
    setPackages(prev=>prev.map((p,i)=>i===index?{...p,...patch}:p));
  const updateCapital = (key:typeof capitalKeys[number],n:number) =>
    setCapital(prev=>({...prev,[key]:key==="stressPercent"?Math.min(100,nonnegative(n)):nonnegative(n)}));
  const reset = () => {setPackages(blankPackages());setCapital(blankCapital());};
  const loadExample = () => {setPackages(examplePackages());setCapital(exampleCapital());};
  const exportCSV = () => {
    const columns = ["Package","Payer pathway",...numKeys,"Coverage (self-reported)","Autonomy","Contribution"];
    const rows: Array<Array<string|number>> = [columns];
    packages.forEach(p=>rows.push([
      p.name,p.payerPathway,...numKeys.map(k=>p[k]),p.coverage,p.autonomy,contribution(p),
    ]));
    rows.push(["Equity contributed",capital.equity],["Annual overhead",capital.overhead],
      ["Annual debt service",capital.debtService],["Maintenance capex",capital.maintenanceCapex],
      ["Cash taxes",capital.cashTaxes],["Revenue stress (%)",capital.stressPercent],
      ["Annual EBITDA proxy",results.ebitdaProxy],["Annual equity cash flow proxy",results.equityCashFlowProxy]);
    const csv = rows.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));
    const a = document.createElement("a");a.href=url;a.download="Tsennra_PE_Insurance_Underwriting_DEMO.csv";a.click();
    URL.revokeObjectURL(url);
  };
  return <div className="min-h-screen bg-slate-50 text-slate-900">
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-sky-800 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <Link to="/care-in-a-box" className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white"><ArrowLeft className="h-4 w-4"/>Care-in-a-Box™</Link>
        <p className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">OpenDream Management LLC × Tsennra Capital LLC</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">PE & Insurance Underwriting</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">A demonstration of investment economics, reimbursement assumptions, business insurance, malpractice exposures and agentic liability across ten Care-in-a-Box™ commercial offerings.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button onClick={loadExample} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-blue-950 hover:bg-cyan-300">Load illustrative scenario</button>
          <button onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10"><RotateCcw className="h-4 w-4"/>Reset</button>
          <button onClick={exportCSV} className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10"><Download className="h-4 w-4"/>Export CSV</button>
        </div>
      </div>
    </section>
    <div className="mx-auto max-w-7xl space-y-8 px-5 py-9">
      <div role="status" className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
        <strong>Public synthetic demonstration — not an investment or insurance decision system.</strong> All inputs are editable, self-reported and processed in this browser session only. No payer verification, policy binding, insurance placement, credentialing, clinical authorization, investor approval or secure data persistence is performed. Do not enter PHI, real policy numbers, confidential deal information or investor personal data.
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {label:"Annual collected revenue assumption",value:money(results.revenue),icon:BarChart3},
          {label:"EBITDA proxy",value:money(results.ebitdaProxy),icon:BriefcaseBusiness},
          {label:"Premiums + retained loss budget",value:money(results.insuranceBudget),icon:ShieldCheck},
          {label:"Annual equity cash-on-cash proxy",value:results.cashOnCash===null?"—":(results.cashOnCash*100).toFixed(1)+"%",icon:ShieldAlert},
        ].map(item=>{const Icon=item.icon;return <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Icon className="h-6 w-6 text-blue-700"/><p className="mt-4 text-xs font-bold text-slate-500">{item.label}</p><p className="mt-2 text-2xl font-black text-blue-950">{item.value}</p></div>})}
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
        <h2 className="text-2xl font-black">1. Ten-package underwriting matrix</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Enter expected annual cash collections, not billed charges or market opportunity. The two enterprise offerings use commercial contracts, not presumed medical reimbursement. Coverage status is a user-selected assumption and never verification.</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[1350px] text-left text-xs">
            <thead className="bg-blue-50 text-blue-950"><tr>
              <th scope="col" className="p-3">Package / payment</th>
              {numKeys.map(k=><th scope="col" key={k} className="p-3">{numberLabels[k]} ($/yr)</th>)}
              <th scope="col" className="p-3">Coverage assumption</th><th scope="col" className="p-3">Autonomy</th><th scope="col" className="p-3">Contribution</th>
            </tr></thead>
            <tbody>{packages.map((p,i)=><tr key={p.name} className="border-t border-slate-100">
              <th scope="row" className="min-w-[170px] p-3 align-top"><span className="block font-black">{String(i+1).padStart(2,"0")} · {p.name}</span><span className="mt-1 block font-normal text-slate-500">{p.payerPathway}</span></th>
              {numKeys.map(k=><td key={k} className="p-2 align-top"><input aria-label={p.name+" "+numberLabels[k]} className="w-28 rounded-lg border border-slate-300 px-2 py-2" type="number" min="0" step="1000" value={p[k]} onChange={e=>updatePackage(i,{[k]:nonnegative(Number(e.target.value))})}/></td>)}
              <td className="p-2 align-top"><select aria-label={p.name+" insurance coverage assumption"} className="w-40 rounded-lg border border-slate-300 px-2 py-2" value={p.coverage} onChange={e=>updatePackage(i,{coverage:e.target.value as Coverage})}>{coverageValues.map(x=><option key={x}>{x}</option>)}</select></td>
              <td className="p-2 align-top"><select aria-label={p.name+" agent autonomy"} className="w-16 rounded-lg border border-slate-300 px-2 py-2" value={p.autonomy} onChange={e=>updatePackage(i,{autonomy:e.target.value as Autonomy})}>{autonomyValues.map(x=><option key={x}>{x}</option>)}</select></td>
              <td className="p-3 align-top font-black tabular-nums">{money(contribution(p))}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-amber-800"><strong>Clinical A4 is not authorized.</strong> A3 is decision support requiring clinician review. No coverage setting, including “Bound (unverified),” permits go-live.</p>
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">2. Capital & downside</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{capitalKeys.map(k=><label key={k} className="block text-sm font-bold text-slate-700">{capitalLabels[k]}<input className="mt-2 block w-full rounded-lg border border-slate-300 p-3 font-normal" aria-label={capitalLabels[k]} type="number" min="0" max={k==="stressPercent"?100:undefined} step={k==="stressPercent"?1:1000} value={capital[k]} onChange={e=>updateCapital(k,Number(e.target.value))}/></label>)}</div>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">3. Investment committee preview</h2>
          <div className="mt-4 divide-y divide-slate-100">{[
            ["Annual contribution",money(results.annualContribution)],
            ["EBITDA proxy after overhead",money(results.ebitdaProxy)],
            ["Annual equity cash flow proxy",money(results.equityCashFlowProxy)],
            ["Downside EBITDA (fixed-cost stress)",money(results.downsideEbitda)],
            ["Coverage/agent review flags",String(results.exceptions.length)],
          ].map(([label,value])=><div key={label} className="flex justify-between gap-3 py-3 text-sm"><span className="text-slate-600">{label}</span><strong className="tabular-nums">{value}</strong></div>)}</div>
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <strong>Review required.</strong> This calculator never issues investment approval or insurance clearance. A negative result does not establish a loss claim, and a positive result does not establish verified ROI.
          </div>
        </section>
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">4. Agent insurance and authority exceptions</h2>
        {results.exceptions.length===0?<p className="mt-3 text-sm text-slate-600">No calculated flags from the entered values. Actual policies, AI exclusions, named insureds, clinical authority and security reviews still require independent verification.</p>:
          <ul className="mt-4 grid gap-2 md:grid-cols-2">{results.exceptions.map((e,i)=><li key={e.packageName+"-"+e.reason+"-"+i} className="rounded-lg bg-amber-50 p-3 text-sm"><strong>{e.packageName}:</strong> {e.reason}</li>)}</ul>}
      </section>
      <section className="rounded-2xl bg-blue-950 p-7 text-white">
        <h2 className="text-2xl font-black">5. Governance & investment responsibility</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div><h3 className="font-black">OpenDream Management LLC</h3><p className="mt-2 text-sm leading-6 text-blue-100">Proposed portfolio oversight, operating controls, insurance coordination and reporting.</p></div>
          <div><h3 className="font-black">Tsennra Capital LLC</h3><p className="mt-2 text-sm leading-6 text-blue-100">Proposed investment sourcing, underwriting, capital allocation and committee governance.</p></div>
          <div><h3 className="font-black">GitHealth™</h3><p className="mt-2 text-sm leading-6 text-blue-100">Governed workflows, evidence provenance, insurance readiness, agent authorization and measured economics.</p></div>
        </div>
        <p className="mt-6 border-t border-white/20 pt-5 text-xs leading-6 text-blue-100">These are proposed operating roles, not verified legal ownership, an authorized PE fund, an insurance agency, an insurer, or a claim of bound coverage. Before production: authenticated access, tenant isolation, approved data handling, real policy verification, payer contract validation and human investment/clinical authority are mandatory.</p>
      </section>
    </div>
  </div>;
}
