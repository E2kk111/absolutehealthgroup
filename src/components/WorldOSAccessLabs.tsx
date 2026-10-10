import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Pill, ShieldCheck, ArrowRight } from "lucide-react";

type Lab = "reimbursement" | "medication";
const money = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function WorldOSAccessLabs() {
  const [lab, setLab] = useState<Lab>("reimbursement");
  const [episodes, setEpisodes] = useState(100);
  const [publishedRate, setPublishedRate] = useState(240);
  const [collectionRate, setCollectionRate] = useState(85);
  const [deliveryCost, setDeliveryCost] = useState(170);
  const [medicationPrice, setMedicationPrice] = useState(95);
  const [alternatePrice, setAlternatePrice] = useState(38);
  const [monthlyFills, setMonthlyFills] = useState(100);
  const [eligibleShare, setEligibleShare] = useState(60);
  const [evidence, setEvidence] = useState(false);

  const payer = useMemo(() => {
    const modeledPaid = publishedRate * collectionRate / 100;
    return { modeledPaid, totalRevenue: episodes * modeledPaid, totalCost: episodes * deliveryCost, contribution: episodes * (modeledPaid - deliveryCost) };
  }, [publishedRate, collectionRate, deliveryCost, episodes]);
  const pharmacy = useMemo(() => {
    const difference = Math.max(0, medicationPrice - alternatePrice);
    return { difference, potential: difference * monthlyFills * eligibleShare / 100, eligible: monthlyFills * eligibleShare / 100 };
  }, [medicationPrice, alternatePrice, monthlyFills, eligibleShare]);
  return <section id="worldos-access-labs" className="border-y border-slate-200 bg-slate-50 py-20">
    <div className="mx-auto max-w-7xl px-6">
      <p className="text-sm font-black uppercase tracking-widest text-blue-700">WorldOS™ · additional simulation workspaces</p>
      <h2 className="mt-3 max-w-4xl text-4xl font-black text-slate-950">Understand payment and access before deployment.</h2>
      <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">Use editable, synthetic assumptions to examine reimbursement economics and medication affordability. These models are planning illustrations—not real payer contracts, adjudicated claims, pharmacy quotes or treatment recommendations.</p>
      <div role="tablist" aria-label="WorldOS economic simulation workspaces" className="mt-8 flex flex-wrap gap-3">
        <button type="button" role="tab" id="tab-reimbursement" aria-controls="panel-reimbursement" aria-selected={lab==="reimbursement"} onClick={()=>{setLab("reimbursement");setEvidence(false);}} className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold ${lab==="reimbursement"?"bg-blue-800 text-white":"border border-slate-300 bg-white text-blue-950"}`}><BadgeDollarSign className="h-5 w-5" aria-hidden="true"/> Price & Payment Intelligence</button>
        <button type="button" role="tab" id="tab-medication" aria-controls="panel-medication" aria-selected={lab==="medication"} onClick={()=>{setLab("medication");setEvidence(false);}} className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold ${lab==="medication"?"bg-blue-800 text-white":"border border-slate-300 bg-white text-blue-950"}`}><Pill className="h-5 w-5" aria-hidden="true"/> Medication Access</button>
      </div>
      {lab==="reimbursement" ? <div id="panel-reimbursement" role="tabpanel" aria-labelledby="tab-reimbursement" className="mt-6 grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Synthetic reimbursement assumptions</h3>
          <label htmlFor="payer-episodes" className="mt-5 block text-sm font-bold">Services in modeled cohort: {episodes}</label>
          <input id="payer-episodes" type="range" min="25" max="500" step="25" value={episodes} onChange={e=>setEpisodes(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <label htmlFor="payer-rate" className="mt-5 block text-sm font-bold">Illustrative published rate: {money(publishedRate)}</label>
          <input id="payer-rate" type="range" min="100" max="1000" step="20" value={publishedRate} onChange={e=>setPublishedRate(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <label htmlFor="payer-collection" className="mt-5 block text-sm font-bold">Assumed realized share: {collectionRate}%</label>
          <input id="payer-collection" type="range" min="40" max="100" step="5" value={collectionRate} onChange={e=>setCollectionRate(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <label htmlFor="payer-cost" className="mt-5 block text-sm font-bold">Delivery cost per service: {money(deliveryCost)}</label>
          <input id="payer-cost" type="range" min="50" max="600" step="10" value={deliveryCost} onChange={e=>setDeliveryCost(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <button type="button" className="mt-5 text-sm font-bold text-blue-700 underline" onClick={()=>{setEpisodes(100);setPublishedRate(240);setCollectionRate(85);setDeliveryCost(170);setEvidence(false);}}>Reset assumptions</button>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-black text-slate-950">Illustrative program economics</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[{label:"Modeled revenue",value:payer.totalRevenue},{label:"Modeled delivery cost",value:payer.totalCost},{label:"Modeled contribution",value:payer.contribution}].map(item=><div key={item.label} className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-bold text-blue-800">{item.label}</p><p className="mt-2 text-2xl font-black text-slate-950">{money(item.value)}</p></div>)}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">Illustrative formula: services × (published reference rate × assumed realized share − delivery cost). The reference rate is a manually entered placeholder, not a live Payerset or Turquoise Health rate. No contract, fee schedule, claim or remittance is connected. This is contribution before overhead, not net profit or realized ROI.</p>
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950"><strong>Evidence required:</strong> payer, network, CPT/HCPCS code, location, contract effective date, covered benefits, allowed amount, denials, actual remittance and delivery costs. Published negotiated rates cannot establish final payment.</div>
        </div>
      </div> : <div id="panel-medication" role="tabpanel" aria-labelledby="tab-medication" className="mt-6 grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Synthetic medication access assumptions</h3>
          <label htmlFor="med-current" className="mt-5 block text-sm font-bold">Illustrative current fill price: {money(medicationPrice)}</label>
          <input id="med-current" type="range" min="5" max="300" step="5" value={medicationPrice} onChange={e=>setMedicationPrice(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <label htmlFor="med-alternate" className="mt-5 block text-sm font-bold">Illustrative alternative fill price: {money(alternatePrice)}</label>
          <input id="med-alternate" type="range" min="5" max="300" step="1" value={alternatePrice} onChange={e=>setAlternatePrice(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <label htmlFor="med-fills" className="mt-5 block text-sm font-bold">Monthly fills modeled: {monthlyFills}</label>
          <input id="med-fills" type="range" min="25" max="500" step="25" value={monthlyFills} onChange={e=>setMonthlyFills(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <label htmlFor="med-eligible" className="mt-5 block text-sm font-bold">Assumed eligible share: {eligibleShare}%</label>
          <input id="med-eligible" type="range" min="0" max="100" step="5" value={eligibleShare} onChange={e=>setEligibleShare(Number(e.target.value))} className="mt-2 w-full accent-blue-700"/>
          <button type="button" className="mt-5 text-sm font-bold text-blue-700 underline" onClick={()=>{setMedicationPrice(95);setAlternatePrice(38);setMonthlyFills(100);setEligibleShare(60);setEvidence(false);}}>Reset assumptions</button>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-black text-slate-950">Illustrative affordability opportunity</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[{label:"Potential difference per eligible fill",value:money(pharmacy.difference)},{label:"Assumed eligible fills / month",value:pharmacy.eligible.toFixed(0)},{label:"Modeled monthly opportunity",value:money(pharmacy.potential)}].map(item=><div key={item.label} className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-bold text-blue-800">{item.label}</p><p className="mt-2 text-2xl font-black text-slate-950">{item.value}</p></div>)}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">Modeled opportunity is a hypothetical price difference × eligible fills; it is not achieved savings or a live pharmacy quote. Coverage, deductible, pharmacy network, medication formulation, discount-program restrictions, stock and patient preferences can change the actual cost. This lab never sends prescriptions or changes medications.</p>
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950"><strong>Evidence required:</strong> clinician-issued prescription, formulary and coverage review, patient consent where needed, current pharmacy-specific quote, stock confirmation and prescriber authorization for any medication change.</div>
        </div>
      </div>}
      <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-6">
        <div className="flex items-start gap-3"><ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true"/><div><h3 className="text-lg font-black text-blue-950">AION™ simulated evidence gate</h3><p className="mt-2 text-sm leading-6 text-slate-600">Decision support may prepare a recommendation, but it cannot authorize care, prescribing, payment or claims. A licensed professional and the relevant operational authority must review real-world actions.</p><div className="mt-4 flex flex-wrap items-center gap-3"><span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold">{evidence?"Additional evidence required":"Not reviewed"}</span><button type="button" onClick={()=>setEvidence(true)} className="rounded-lg border border-blue-300 px-4 py-2 text-sm font-bold text-blue-800">Flag evidence required</button></div></div></div>
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-500">Potential external reference sources: Payerset and Turquoise Health (price transparency); DoseSpot Connect (prescription access). No vendor API, licensed feed, e-prescribing service, real patient record or actual payment integration is configured in these demonstrations. Prove™, ZScore™ and Cost-to-Goal™ can compare actual performance only after verified operational data is available.</p>
      <Link to="/care-in-a-box" className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700">Explore Care-in-a-Box™ delivery <ArrowRight className="h-4 w-4" aria-hidden="true"/></Link>
    </div>
  </section>;
}
