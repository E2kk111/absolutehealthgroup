import { Link } from "react-router-dom";
import { Brain, HeartPulse, Home, Activity, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, Building2, Database, LockKeyhole, BarChart3, Stethoscope, Workflow } from "lucide-react";

const audiences = [
  { name:"Health Systems", offer:"Coverage → coding → payment → proof assessment", product:"GitHealth Enterprise" },
  { name:"Senior Living", offer:"Build reimbursable care around residents", product:"ACCESS / Senior Care-in-a-Box™" },
  { name:"Post-Acute Care", offer:"Reimbursement + transition integrity review", product:"Post-Acute Care-in-a-Box™" },
  { name:"Medical Groups", offer:"PIN / CHI / APCM opportunity analysis", product:"Care-at-Home-in-a-Box™" },
  { name:"Wound Care", offer:"Documentation + LCD reimbursement assessment", product:"Wound Care-in-a-Box™" },
  { name:"Value-Based Care", offer:"Total-cost-of-care opportunity assessment", product:"Enterprise Care-in-a-Box™" },
];

const applications = [
  { name:"Specialty Care-in-a-Box™", tag:"Institutional Specialty Access", icon:Stethoscope, text:"Physician-led specialty pathways without building the specialty infrastructure internally." },
  { name:"Recovery / Joint & Neuro", tag:"Continuous Rehabilitation", icon:Activity, text:"Facility-to-home rehabilitation, functional measurement and a longitudinal Recovery Record™." },
  { name:"ACCESS Senior Care", tag:"Chronic Care + Co-Management", icon:Sparkles, text:"Senior and chronic-care workflows, PCP coordination, evidence and payment-pathway support." },
  { name:"CJR-X Recovery-in-a-Box™", tag:"90-Day Orthopedic Episodes", icon:Building2, text:"Readiness, transitions, recovery, quality measurement and episode-economics infrastructure." },
  { name:"Burn Recovery-in-a-Box™", tag:"Burn + Reconstruction + Recovery", icon:HeartPulse, text:"Connected burn, wound, reconstruction, orthopedic and rehabilitation recovery workflows." },
  { name:"Wound Care / WoundOS™", tag:"Tissue Repair Intelligence", icon:ShieldCheck, text:"Assessment, wound intelligence, documentation integrity, specialty coordination and outcomes." },
  { name:"RuralCare AI™", tag:"Care Anywhere", icon:Home, text:"Community clinicians connected to virtual specialists, longitudinal records and coordinated care." },
  { name:"Regenerative & Longevity", tag:"Governed Clinical Workflow", icon:Brain, text:"Eligibility, evidence review, authorized treatment, longitudinal monitoring and measured outcomes." },
];

const clinicalNetwork = [
  { name:"PAC Solutions", role:"Physician authority + specialty network" },
  { name:"Joint & Neuro", role:"Continuous rehabilitation + functional outcomes" },
  { name:"DermalQ™ / WoundMetric™", role:"Measurement + wound intelligence" },
  { name:"WoundOS™", role:"Tissue-repair operating system" },
  { name:"Specialists + Devices + Products", role:"Permissioned clinical resources when appropriate" },
];

const rails = [
  {name:"Care Delivery", text:"Clinical workflows, assessments, care plans, caregiver support, monitoring, navigation and specialty access."},
  {name:"Coverage + Coding", text:"Eligibility, CPT/HCPCS, ICD-10, modifiers, NCD/LCD, billing articles, setting and documentation requirements."},
  {name:"CMS / Value-Based Payment", text:"FFS, CMS Innovation Center models, payer contracts, quality measures and model-overlap controls."},
  {name:"Proof + Economics", text:"Documentation, authorization, payment, remittance, outcomes, total cost of care and Cost-to-Goal™."},
];

const workflow = ["Connect","Normalize","Govern","Execute","Prove","Measure"];

const workflowClasses = [
  {name:"WU-1", label:"Eligibility / Rule Check", example:"ACCESS eligibility, policy or track validation"},
  {name:"WU-2", label:"Documentation Validation", example:"Evidence completeness and documentation requirements"},
  {name:"WU-3", label:"Reimbursement / Evidence Packet", example:"Coverage, coding and defensible submission support"},
  {name:"WU-4", label:"Investigation / Reconciliation", example:"FWA, denial, payment or complex wound investigation"},
  {name:"WU-5", label:"Longitudinal Governed Episode", example:"CJR-X 90-day episode or complex recovery journey"},
];

const aionStack = [
  {name:"AION™", role:"Healthcare Intelligence + Authority", flow:"Clinical • Operational • Financial"},
  {name:"PolicyPulse™", role:"Regulatory Intelligence", flow:"Observe → Detect → Compare → Interpret → Approve"},
  {name:"RegOS™", role:"Regulatory Control Plane", flow:"Version → Apply → Execute → Monitor → Prove"},
  {name:"GitHealth™", role:"Governed Execution + Metering", flow:"Connect → Normalize → Govern → Execute → Prove → Measure"},
  {name:"ShieldAI™", role:"Evidence Integrity", flow:"Completeness → Consistency → Rule Match → Authority Check"},
  {name:"Prove™ + Economics™", role:"Proof + Value", flow:"Evidence → Payment → Outcome → Cost-to-Goal™ → ROI"},
];

const tiers = [
  {name:"Opportunity Assessment",price:"$10K–$25K",desc:"30 days · population analysis · workflow map · coverage/coding review · reimbursement model · documentation gaps · ROI model · implementation plan",cta:"Start Assessment"},
  {name:"90-Day Pilot",price:"$25K–$75K",desc:"One defined workflow, population and deployment scope with human authority, evidence capture and measured outcomes.",cta:"Launch a Pilot"},
  {name:"Scale",price:"Site + Enterprise",desc:"Implementation + platform capacity + included Workflow Units™ + overage classes + integrations/FDE + Prove/Economics premium analytics.",cta:"Talk to Enterprise"},
];

export default function CareInABoxPage(){
 return <div className="bg-white text-slate-950">
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 text-white">
   <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
    <div className="max-w-5xl">
     <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">ABSOLUTE HEALTH GROUP · INSTITUTIONAL CARE DELIVERY</div>
     <h1 className="text-5xl font-black tracking-tight md:text-7xl">Care-in-a-Box™</h1>
     <p className="mt-4 text-2xl font-semibold text-cyan-200">Deploy. Connect. Care. Measure. Prove. Scale.</p>
     <p className="mt-6 max-w-4xl text-xl leading-8 text-blue-100">Bring specialty care into your organization — without building the specialty infrastructure yourself. Customers buy care programs and completed work. GitHealth™ governs, proves and measures the infrastructure underneath.</p>
     <div className="mt-7 grid max-w-4xl gap-3 text-base font-bold sm:grid-cols-2"><div>✓ Your Brand. Your Patients. Your Clinical Authority.</div><div>✓ Our Infrastructure Underneath.</div></div>
     <div className="mt-9 flex flex-wrap gap-4"><a href="#opportunity" className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950">Get an Opportunity Assessment</a><a href="#applications" className="rounded-xl border border-white/30 px-6 py-3 font-bold">Explore Care Programs</a></div>
    </div>
   </div>
  </section>

  <section className="border-b bg-white"><div className="mx-auto max-w-7xl px-6 py-10">
   <p className="text-center text-2xl font-black text-blue-950">A code is not coverage. Coverage is not payment. Payment is not proof. <span className="text-cyan-700">GitHealth connects all four.</span></p>
  </div></section>

  <section id="opportunity" className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Start with your workflow</p>
   <h2 className="mt-2 text-4xl font-black">What are you trying to improve?</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">Choose your operating environment. We turn the problem into a Care-in-a-Box Opportunity Report: population → workflow → coverage/coding → documentation → operating cost → illustrative economics → measures → recommended pilot.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{audiences.map(a=><div key={a.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm"><div className="text-sm font-black uppercase tracking-wider text-blue-700">I run {a.name}</div><h3 className="mt-3 text-xl font-black">{a.offer}</h3><p className="mt-3 text-sm text-slate-600">Recommended path: <strong>{a.product}</strong></p><Link to={"/contact?buyer="+encodeURIComponent(a.name)} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700">Build my report <ArrowRight className="h-4 w-4"/></Link></div>)}</div>
  </section>

  <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">The four rails</p><h2 className="mt-2 text-4xl font-black">From care delivery to coverage, payment and proof.</h2>
   <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{rails.map((r,i)=><div key={r.name} className="rounded-2xl bg-white p-6 shadow-sm"><div className="text-sm font-black text-blue-700">RAIL {i+1}</div><h3 className="mt-2 text-xl font-black">{r.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{r.text}</p></div>)}</div>
  </div></section>

  <section id="applications" className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Market / Distribution Layer</p>
   <h2 className="mt-2 text-4xl font-black">One institutional platform. Multiple care applications.</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">A hospital administrator sees Care-in-a-Box. A wound center sees WoundOS/DermalQ. A rehab organization sees Joint & Neuro. A rural organization sees RuralCare AI. Each enters the same governed operating infrastructure underneath.</p>
   <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{applications.map(a=>{const Icon=a.icon;return <article key={a.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><Icon className="h-8 w-8 text-blue-700"/><h3 className="mt-5 text-xl font-black">{a.name}</h3><p className="mt-1 font-semibold text-cyan-700">{a.tag}</p><p className="mt-4 text-sm leading-6 text-slate-600">{a.text}</p></article>})}</div>
  </section>

  <section className="bg-blue-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">Clinical / Product Layer</p><h2 className="mt-2 text-4xl font-black">The operating network that enables care.</h2>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{clinicalNetwork.map(x=><div key={x.name} className="rounded-2xl bg-white/10 p-6"><h3 className="text-xl font-black">{x.name}</h3><p className="mt-3 text-sm leading-6 text-blue-100">{x.role}</p></div>)}</div>
   <p className="mt-8 max-w-5xl text-sm leading-6 text-blue-200">Regenerative products, devices and manufacturer claims remain separate from GitHealth authority. Product eligibility, regulatory status, intended use, evidence and reimbursement must be independently validated for the specific workflow.</p>
  </div></section>

  <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">Architecture v2.0</p>
   <h2 className="mt-2 text-4xl font-black">One operating system. Multiple distribution applications. One measurable economic engine.</h2>
   <p className="mt-4 max-w-5xl text-lg text-slate-300">Care-in-a-Box™ is the commercial front door. AION™ provides intelligence and authority. PolicyPulse™ watches policy lifecycle. RegOS™ controls which approved rules may execute. GitHealth™ executes and meters governed work. ShieldAI™ tests evidence integrity. Prove™ and Economics™ establish what happened and whether it created value.</p>
   <div className="mt-10 grid gap-4 lg:grid-cols-6">{aionStack.map((x,i)=><div key={x.name} className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="text-xs font-black text-cyan-300">0{i+1}</div><h3 className="mt-2 text-lg font-black">{x.name}</h3><p className="mt-2 text-sm font-semibold text-blue-100">{x.role}</p><p className="mt-3 text-xs leading-5 text-slate-300">{x.flow}</p></div>)}</div>
   <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-6"><div className="font-black text-amber-200">Regulatory safety boundary</div><p className="mt-2 text-sm leading-6 text-amber-50">PolicyPulse may detect proposed or future policy and generate readiness analysis, but proposed rules do not silently become production authority. Regulatory objects move through PROPOSED → FINAL / FUTURE EFFECTIVE → ACTIVE → SUPERSEDED → RETIRED, with source, jurisdiction, effective dates, applicability, executable logic, supersession history and approval record.</p></div>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">GitHealth™ — Healthcare Intelligence OS</p>
   <h2 className="mt-2 text-4xl font-black">Completed work outside. Governed execution underneath.</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">Patients and frontline teams should not have to buy or understand tokens. GitHealth executes and meters the work while AION™ enforces authority and Prove™ preserves the evidence trail.</p>
   <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{workflow.map((x,i)=><div key={x} className="rounded-2xl border border-slate-200 p-5"><div className="text-sm font-black text-blue-700">0{i+1}</div><div className="mt-2 text-lg font-black">{x}</div></div>)}</div>
   <div className="mt-10 grid gap-6 lg:grid-cols-2">
    <div className="rounded-3xl bg-slate-950 p-8 text-white"><Database className="h-9 w-9 text-cyan-300"/><h3 className="mt-4 text-2xl font-black">GitHealth Workflow Unit™</h3><p className="mt-3 text-slate-300">One completed governed healthcare workflow with defined inputs, evidence requirements, authority controls, execution steps and completion criteria.</p><div className="mt-6 text-sm font-bold text-cyan-200">Workflow Unit → Agent Execution → Model/Tokens → Tools/APIs → Human Authority → Evidence → Outcome → Revenue → Cost-to-Goal™</div></div>
    <div className="rounded-3xl border border-slate-200 p-8"><BarChart3 className="h-9 w-9 text-blue-700"/><h3 className="mt-4 text-2xl font-black">GitHealth Economics™</h3><p className="mt-3 text-slate-600">Meters completed work, revenue/workflow, compute and tool cost, human-review cost, contribution, exception rate, evidence completion, Revenue per Million Tokens and Cost-to-Goal™.</p><p className="mt-5 font-black text-blue-950">The product is governed, measurable work. Tokens are COGS telemetry.</p></div>
   </div>
   <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{workflowClasses.map(x=><div key={x.name} className="rounded-2xl border border-slate-200 p-5"><div className="text-sm font-black text-blue-700">{x.name}</div><div className="mt-2 font-black">{x.label}</div><p className="mt-2 text-xs leading-5 text-slate-500">{x.example}</p></div>)}</div>
   <div className="mt-8 rounded-3xl bg-slate-950 p-8 text-white"><div className="flex items-start gap-4"><LockKeyhole className="mt-1 h-8 w-8 text-cyan-300"/><div><h3 className="text-2xl font-black">AION™: intelligence + authority.</h3><p className="mt-2 max-w-4xl text-slate-300">Agents may observe, organize, recommend and prepare work within permissioned workflows. Consequential clinical, payment and PHI actions remain subject to appropriate authority, policy and human review.</p></div></div></div>
  </section>

  <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Reference Economics · ACCESS CMP</p>
   <h2 className="mt-2 text-4xl font-black">Provider reimbursement is not GitHealth revenue.</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">Illustrative unit economics show how GitHealth can enable and govern a qualifying provider workflow while keeping the provider payment pathway separate from GitHealth's software economics.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
    {[["Provider allowed amount","$30.00"],["Illustrative GitHealth fee","$3.00"],["Variable Cost-to-Goal™","$0.50"],["GitHealth contribution","$2.50"],["Variable contribution margin","83.3%"]].map(([k,v])=><div key={k} className="rounded-2xl bg-white p-6 shadow-sm"><div className="text-sm font-bold text-slate-500">{k}</div><div className="mt-2 text-3xl font-black text-blue-950">{v}</div></div>)}
   </div>
   <p className="mt-6 text-sm leading-6 text-slate-500">Illustrative planning assumptions, not observed production economics or a guarantee of reimbursement or margin. The $30 ACCESS CMP allowed amount belongs to the eligible billing provider, not GitHealth. Actual Medicare payment and provider economics may vary based on eligibility, service requirements, adjustments, billing expense, denials and other costs. GitHealth pricing shown here is hypothetical.</p>
  </div></section>

  <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Reference Economics · Principal Illness Navigation</p>
   <h2 className="mt-2 text-4xl font-black">PIN Workflow Unit™</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">For G0023, CMS defines the base PIN service as 60 minutes per calendar month by certified or trained auxiliary personnel under practitioner direction. Using the CY 2026 national non-facility amount of approximately $87.18 as the reference point, GitHealth can meter the navigation workflow separately from the provider reimbursement.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    {[
      ["Provider reference amount","$87.18"],
      ["Illustrative navigator labor","($30.00)"],
      ["GitHealth usage allocation","($9.00)"],
      ["Provider remainder before other costs","$48.18"],
      ["GitHealth workflow revenue","$9.00"],
      ["GitHealth variable Cost-to-Goal™","($1.50)"],
      ["GitHealth contribution","$7.50"],
      ["GitHealth variable contribution margin","83.3%"],
    ].map(([k,v])=><div key={k} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><div className="text-sm font-bold text-slate-500">{k}</div><div className="mt-2 text-3xl font-black text-blue-950">{v}</div></div>)}
   </div>
   <div className="mt-8 rounded-2xl bg-blue-950 p-7 text-white">
    <div className="text-sm font-bold uppercase tracking-widest text-cyan-300">Illustrative economic flow</div>
    <div className="mt-3 text-xl font-black">PIN payment pathway → Provider → Navigator work + GitHealth Workflow Unit™ → Evidence → Outcome</div>
    <p className="mt-3 text-sm leading-6 text-blue-100">G0024 may support additional 30-minute PIN time when requirements are met. It should be metered as an additional workflow class rather than assumed automatically.</p>
   </div>
   <p className="mt-6 text-sm leading-6 text-slate-500">Illustrative planning assumptions only. The $87.18 reference is the CY 2026 national non-facility amount for G0023; actual Medicare payment varies by locality, site of service, provider status, deductible/coinsurance, payer rules and other adjustments. The $30 navigator labor assumption, $9 GitHealth allocation and $1.50 Cost-to-Goal™ are internal economic assumptions, not CMS rates. PIN requires an initiating visit and a qualifying serious, high-risk condition; model-overlap rules also matter.</p>
  </div></section>

  <section className="bg-blue-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">National Go-to-Market Wedge</p>
   <h2 className="mt-2 text-4xl font-black">CJR-X Recovery-in-a-Box™</h2>
   <p className="mt-3 text-2xl font-black text-amber-300">2028 Is the Deadline. 2027 Is the Build Year.</p>
   <p className="mt-5 max-w-5xl text-lg text-blue-100">Launch CJR-X readiness without building the 90-day recovery infrastructure yourself. The hospital keeps its brand, patients, orthopedic team and clinical authority; Care-in-a-Box provides the recovery operating layer underneath.</p>
   <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-7 text-center text-lg font-black leading-9">IDENTIFY → PREPARE → PROCEDURE → TRANSITION → RECOVER → MONITOR → MEASURE → PROVE</div>
   <p className="mt-5 text-sm leading-6 text-blue-200">CJR-X is scheduled to begin January 1, 2028 and is designed as a nationwide mandatory episode-based payment model for most qualifying IPPS hospitals, subject to CMS exclusions and final model requirements. Independent solution; not affiliated with or endorsed by CMS.</p>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Institutional Wedge · Complex Recovery</p>
   <h2 className="mt-2 text-4xl font-black">Precision Recovery Health™ + LTACH Value Diagnostic™</h2>
   <p className="mt-4 max-w-5xl text-lg text-slate-600">Do not lead an LTACH with software modules. Lead with the value map: where the hospital is losing economic value, why it is happening, what appears recoverable and which operating interventions can capture it.</p>
   <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
    ["Precision Recovery Intelligence™","Trajectory, milestones, recovery velocity, LOS and discharge readiness."],
    ["Precision Recovery Operations™","Referral conversion, multidisciplinary orchestration, specialist access, flow and avoidable-day management."],
    ["Precision Recovery Integrity™","Regulatory rules, documentation, evidence, reimbursement and payment integrity."],
    ["Precision Recovery Network™","Referring hospitals, specialists, post-acute providers, home recovery and longitudinal outcomes."],
   ].map(([k,v])=><div key={k} className="rounded-2xl border border-slate-200 p-6"><h3 className="font-black text-blue-950">{k}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{v}</p></div>)}</div>
   <div className="mt-8 rounded-3xl bg-slate-950 p-8 text-white"><h3 className="text-2xl font-black">LTACH Value Map</h3><p className="mt-4 text-sm leading-7 text-slate-300">Referral Leakage → Capacity / Throughput → Avoidable Bed-Days → Recovery Velocity / ALOS → Labor Productivity → Payment Variance → Denials / Documentation → Quality / Readmissions → Cost-Report Variance → Gross Opportunity → Risk-Adjusted Recoverable Opportunity → Deployment Cost → Cost-to-Goal™ → ROI</p></div>
  </section>

  <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Commercial motion</p><h2 className="mt-2 text-4xl font-black">Assessment → Pilot → Recurring Work → Scale</h2>
   <div className="mt-10 grid gap-6 md:grid-cols-3">{tiers.map((t,i)=><div key={t.name} className={"rounded-2xl border p-7 "+(i===1?"border-blue-600 bg-blue-950 text-white":"border-slate-200 bg-white")}><h3 className="text-xl font-black">{t.name}</h3><div className="mt-4 text-3xl font-black">{t.price}</div><p className={"mt-3 leading-6 "+(i===1?"text-blue-100":"text-slate-600")}>{t.desc}</p><Link to="/contact" className={"mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold "+(i===1?"bg-amber-400 text-slate-950":"bg-blue-700 text-white")}>{t.cta}<ArrowRight className="h-4 w-4"/></Link></div>)}</div>
   <p className="mt-6 text-sm text-slate-500">Proposed commercial pricing. Final pricing depends on population, integrations, implementation scope, workflow complexity, governance and support. Reimbursement, savings, clinical outcomes and technology performance are not guaranteed.</p>
  </section>

  <section className="bg-blue-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">Distribution engine</p><h2 className="mt-2 text-4xl font-black">Authority content becomes paid intelligent work.</h2>
   <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-7 text-center text-lg font-black leading-9 text-blue-50">CONTENT → LEAD → VALUE / WORKFLOW ASSESSMENT → PILOT → DEPLOYMENT → WORKFLOW UNITS → GOVERNED EXECUTIONS → EVIDENCE → OUTCOMES → ROI → CASE STUDY → MORE CLIENTS</div>
   <p className="mt-6 max-w-4xl text-blue-100">The white paper establishes authority. Buyer-specific briefs earn the meeting. The Opportunity Assessment creates the first transaction. Recurring governed workflows create software usage, evidence and measurable economics.</p>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-3xl bg-gradient-to-r from-blue-950 to-cyan-800 p-10 text-white md:p-14"><Workflow className="h-10 w-10 text-cyan-300"/><h2 className="mt-4 text-4xl font-black">Tell us the care problem. We deploy the box.</h2><p className="mt-5 max-w-3xl text-blue-100">Start with one workflow, one population and one site. We map the opportunity, configure the operating model, preserve human authority, measure the work and scale what proves value.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950">START AN OPPORTUNITY ASSESSMENT <ArrowRight className="h-4 w-4"/></Link></div></section>

  <section className="border-t"><div className="mx-auto max-w-7xl px-6 py-10 text-sm leading-6 text-slate-500"><p><strong>Trust framework:</strong> CMS-aligned care and reimbursement workflows · FDA-aware digital health governance · URAC Health Care AI Accreditation — Targeted. Care-in-a-Box™ is not represented as CMS-approved, FDA-approved or URAC-accredited. Model-specific requirements, coding, coverage, device/product status and reimbursement must be verified against controlling guidance, payer policy, contracts and the facts of each case.</p></div></section>
 </div>
}