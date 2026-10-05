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
  { name:"Specialty Care-in-a-Box™", tag:"Institutional Specialty Access", icon:Stethoscope, text:"Flagship institutional platform for physician-led specialty pathways without building the specialty infrastructure internally." },
  { name:"PIN-in-a-Box™", tag:"Recurring Navigation", icon:Workflow, text:"Principal illness navigation workflows with evidence, human authority, longitudinal coordination and Workflow Unit economics." },
  { name:"ACCESS Care-in-a-Box™", tag:"Co-Management Workflows", icon:Sparkles, text:"ACCESS care-update review, coordination, evidence and co-management workflow infrastructure." },
  { name:"CJR-X Recovery-in-a-Box™", tag:"90-Day Orthopedic Episodes", icon:Building2, text:"Readiness, transitions, recovery, quality measurement and episode-economics infrastructure." },
  { name:"Burn Recovery-in-a-Box™", tag:"Burn + Reconstruction + Recovery", icon:HeartPulse, text:"Connected burn, wound, reconstruction, orthopedic and rehabilitation recovery workflows." },
  { name:"Wound Care-in-a-Box™", tag:"WoundOS + DermalQ", icon:ShieldCheck, text:"Assessment, wound intelligence, documentation integrity, specialty coordination and outcomes." },
  { name:"RuralCare AI™", tag:"Distributed Specialty Care", icon:Home, text:"Community clinicians connected to virtual specialists, longitudinal records and coordinated care." },
  { name:"Senior Care-in-a-Box™", tag:"Healthy Aging + Specialty Access", icon:Activity, text:"Longitudinal senior-care workflows combining specialty access, navigation, monitoring and escalation." },
  { name:"Regenerative / Longevity", tag:"Governed Clinical Workflows", icon:Brain, text:"Eligibility, evidence review, authorized treatment, longitudinal monitoring and service lines such as clinician-governed hydration where appropriate." },
];

const clinicalNetwork = [
  { name:"PAC Solutions", role:"Physician authority + specialty network" },
  { name:"Joint & Neuro", role:"Continuous rehabilitation + functional outcomes" },
  { name:"DermalQ™", role:"Objective wound measurement + clinical evidence" },
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
  {name:"AION Health™", role:"Clinical Navigation Intelligence Company", flow:"Enterprise ecosystem + intelligence company"},
  {name:"Medical Navigator AI™", role:"Clinical Navigation Operating System™", flow:"Detect → Assess → Predict → Navigate → Authorize → Execute → Measure → Prove → Learn"},
  {name:"AION Intelligence + Authority™", role:"Governed Reasoning + Authority", flow:"Evidence → Reasoning → Rules → Human Authority"},
  {name:"PolicyPulse™", role:"Regulatory Intelligence", flow:"Observe → Detect → Compare → Interpret → Approve"},
  {name:"RegOS™", role:"Regulatory Control Plane", flow:"Version → Apply → Execute → Monitor → Prove"},
  {name:"GitHealth™", role:"Governed Execution + Economic Metering", flow:"Connect → Normalize → Govern → Execute → Prove → Measure"},
  {name:"ShieldAI™ / Prove™ / Economics™", role:"Evidence Integrity + Provenance + Value", flow:"Defensibility → Evidence → Outcome → Cost-to-Goal™ → ROI"},
];

const navigatorDomains = [
  {name:"AION Therapeutics™", question:"What advanced therapeutic pathway is appropriate, under what evidence and governance constraints?"},
  {name:"AION Financial Health™", question:"What financial barrier is preventing care, what intervention is available, and did resolving it restore care?"},
  {name:"DermalQ™", question:"What is preventing wound healing, and what should happen next?"},
  {name:"CardioSafe™", question:"What cardiovascular risk or care gap requires action?"},
  {name:"NeuroNavigator™", question:"What neurologic or cognitive trajectory requires intervention?"},
  {name:"MetaboLean™", question:"What metabolic risk or treatment opportunity is emerging?"},
  {name:"LiverSafe™", question:"What hepatic risk or treatment constraint matters now?"},
  {name:"OncoNavigator™", question:"What oncology pathway, surveillance or escalation is appropriate?"},
  {name:"HealthLink™", question:"Which provider or network action is required to move care forward?"},
  {name:"CarePlix™", question:"What remote-care signal requires navigation or escalation?"},
];

const navigatorLoop = ["Detect","Assess","Predict","Navigate","Human Authorize","Execute","Measure","Prove","Learn"];

const tiers = [
  {name:"Opportunity Assessment",price:"$10K–$25K",desc:"30 days · population analysis · workflow map · coverage/coding review · reimbursement model · documentation gaps · ROI model · implementation plan",cta:"Start Assessment"},
  {name:"90-Day Pilot",price:"$25K–$75K",desc:"One defined workflow, population and deployment scope with human authority, evidence capture and measured outcomes.",cta:"Launch a Pilot"},
  {name:"Scale",price:"Site + Enterprise",desc:"Implementation + platform capacity + included Workflow Units™ + overage classes + integrations/FDE + Prove/Economics premium analytics.",cta:"Talk to Enterprise"},
];

const marketValueMetrics = [
  {name:"Governed Work Completed™", text:"Primary operating north star: completed healthcare work with authority, evidence and defined completion criteria."},
  {name:"Revenue / Workflow Unit", text:"Connect recurring software economics to completed work rather than raw model consumption."},
  {name:"Contribution / Workflow Unit", text:"Revenue less compute, tools, human review and other variable Cost-to-Goal™ inputs."},
  {name:"Evidence Completion Rate", text:"Measures whether governed work produces the evidence needed for care, payment, quality and audit."},
  {name:"Outcome per Dollar of Compute", text:"Links AI infrastructure spend to healthcare and operating outcomes rather than token volume."},
  {name:"Cost-to-Goal™", text:"Total resources required to complete the defined healthcare or regulatory objective."},
];

export default function CareInABoxPage(){
 return <div className="bg-white text-slate-950">
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 text-white">
   <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
    <div className="max-w-5xl">
     <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">ABSOLUTE HEALTH GROUP · INSTITUTIONAL CARE DELIVERY</div>
     <h1 className="text-5xl font-black tracking-tight md:text-7xl">Care-in-a-Box™</h1>
     <p className="mt-4 text-2xl font-semibold text-cyan-200">Deploy. Connect. Care. Measure. Prove. Scale.</p>
     <p className="mt-6 max-w-4xl text-xl leading-8 text-blue-100">Bring specialty care into your organization — without building the specialty infrastructure yourself. Care-in-a-Box™ is what the customer buys; intelligence, regulatory control, governed execution, evidence and economics operate underneath.</p>
     <p className="mt-5 max-w-5xl text-sm font-bold uppercase tracking-wider text-cyan-200">Delivered by Absolute Health Group™ · Clinical Navigation by Medical Navigator AI™ · Intelligence + Authority by AION™ · Governed Execution by GitHealth™</p>
     <div className="mt-7 grid max-w-4xl gap-3 text-base font-bold sm:grid-cols-2"><div>✓ Your Brand. Your Patients. Your Clinical Authority.</div><div>✓ Our Infrastructure Underneath.</div></div>
     <div className="mt-9 flex flex-wrap gap-4"><a href="#opportunity" className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950">Get an Opportunity Assessment</a><a href="#applications" className="rounded-xl border border-white/30 px-6 py-3 font-bold">Explore Care Programs</a></div>
    </div>
   </div>
  </section>

  <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-16">
   <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
    <div>
     <p className="font-bold uppercase tracking-widest text-cyan-300">Architecture v2.0 · Canonical Master Story</p>
     <div className="mt-5 space-y-2 text-2xl font-black md:text-3xl">
      <div>CAPTURE THE EVIDENCE</div><div>UNDERSTAND THE PATIENT</div><div>KNOW THE RULES</div><div>COORDINATE THE CARE</div><div>PROTECT THE PAYMENT</div><div>PROVE THE OUTCOME</div>
     </div>
    </div>
    <div>
     <h2 className="text-3xl font-black">One institutional care platform. Multiple applications. One governed execution layer. One measurable economic engine.</h2>
     <div className="mt-6 space-y-2 text-sm leading-6 text-slate-300">
      <p><strong className="text-white">Care-in-a-Box™</strong> creates and operationalizes the work.</p><p><strong className="text-white">Medical Navigator AI™</strong> detects barriers, predicts trajectory and navigates what happens next.</p><p><strong className="text-white">AION Intelligence + Authority™</strong> governs reasoning, evidence and authority.</p><p><strong className="text-white">PolicyPulse™</strong> knows when the rules change.</p><p><strong className="text-white">RegOS™</strong> controls which approved rules execute.</p><p><strong className="text-white">GitHealth™</strong> governs and meters execution.</p><p><strong className="text-white">ShieldAI™ / Prove™</strong> make the evidence defensible and establish what happened.</p><p><strong className="text-white">Economics™</strong> determines whether it created value.</p>
     </div>
    </div>
   </div>
  </div></section>

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
   <p className="mt-4 max-w-4xl text-lg text-slate-600">Specialty Care-in-a-Box™ is the flagship institutional deployment model. PIN, ACCESS, CJR-X, Burn, Wound, Rural, Senior and Regenerative/Longevity are applications of the same platform. Recovery, brain, cardiac, care-at-home, post-acute and behavioral capabilities remain clinical modules and workflows rather than separate top-level products.</p>
   <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{applications.map(a=>{const Icon=a.icon;return <article key={a.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><Icon className="h-8 w-8 text-blue-700"/><h3 className="mt-5 text-xl font-black">{a.name}</h3><p className="mt-1 font-semibold text-cyan-700">{a.tag}</p><p className="mt-4 text-sm leading-6 text-slate-600">{a.text}</p></article>})}</div>
  </section>

  <section className="bg-blue-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">Clinical / Product Layer</p><h2 className="mt-2 text-4xl font-black">The operating network that enables care.</h2>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{clinicalNetwork.map(x=><div key={x.name} className="rounded-2xl bg-white/10 p-6"><h3 className="text-xl font-black">{x.name}</h3><p className="mt-3 text-sm leading-6 text-blue-100">{x.role}</p></div>)}</div>
   <p className="mt-8 max-w-5xl text-sm leading-6 text-blue-200">Regenerative products, devices and manufacturer claims remain separate from GitHealth authority. Product eligibility, regulatory status, intended use, evidence and reimbursement must be independently validated for the specific workflow.</p>
  </div></section>

  <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">AION Health™ · Flagship Product Experience</p>
   <h2 className="mt-2 text-4xl font-black">Medical Navigator AI™</h2>
   <p className="mt-2 text-2xl font-bold text-cyan-700">The Clinical Navigation Operating System™</p>
   <p className="mt-5 max-w-5xl text-xl leading-8 text-slate-700">Intelligence that finds what is preventing better care — and navigates what happens next.</p>
   <div className="mt-8 rounded-3xl bg-slate-950 p-8 text-white">
    <div className="text-sm font-black uppercase tracking-widest text-cyan-300">Navigation, Not Notification.</div>
    <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-9">{navigatorLoop.map((x,i)=><div key={x} className={"rounded-xl border p-4 text-center "+(x==="Human Authorize"?"border-amber-300 bg-amber-300/10":"border-white/10 bg-white/5")}><div className="text-xs font-black text-cyan-300">{String(i+1).padStart(2,"0")}</div><div className="mt-2 text-sm font-black">{x}</div></div>)}</div>
    <p className="mt-6 text-sm leading-6 text-slate-300"><strong className="text-amber-200">Forbidden Edge:</strong> Medical Navigator may detect, assess, predict, rank, recommend, navigate, draft and prepare. Consequential clinical actions remain subject to appropriate human or physician authority; the system does not independently sign orders, transmit prescriptions or procedure requests, or enter final diagnoses without required attestation.</p>
   </div>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{navigatorDomains.map(d=><div key={d.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm"><h3 className="font-black text-blue-950">{d.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{d.question}</p></div>)}</div>
   <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-7"><h3 className="text-xl font-black text-blue-950">Universal navigation question</h3><p className="mt-3 text-lg font-semibold text-slate-700">What is preventing this patient from reaching the next appropriate state of care?</p><p className="mt-3 text-sm leading-6 text-slate-600">Medical Navigator reasons across disease, treatment, access, financial, social, medication, utilization and care-gap signals, then routes the next action through evidence, rules and human authority.</p></div>
  </div></section>

  <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">Architecture v2.0</p>
   <h2 className="mt-2 text-4xl font-black">One operating system. Multiple distribution applications. One measurable economic engine.</h2>
   <p className="mt-4 max-w-5xl text-lg text-slate-300">Care-in-a-Box™ is Absolute Health Group's commercial deployment platform. AION Health™ is the clinical navigation intelligence company; Medical Navigator AI™ is the flagship operating experience at the moment of decision. AION Intelligence + Authority™ governs reasoning and authority, while GitHealth™ is the governed execution substrate. Operationally: GitHealth supplies context and evidence → Medical Navigator detects, assesses, predicts and navigates → AION establishes authority → RegOS supplies executable controls → authorized humans approve consequential actions → GitHealth executes and records the result → Prove and Economics measure what happened and whether it created value.</p>
   <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{aionStack.map((x,i)=><div key={x.name} className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="text-xs font-black text-cyan-300">0{i+1}</div><h3 className="mt-2 text-lg font-black">{x.name}</h3><p className="mt-2 text-sm font-semibold text-blue-100">{x.role}</p><p className="mt-3 text-xs leading-5 text-slate-300">{x.flow}</p></div>)}</div>
   <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-6"><div className="font-black text-amber-200">Regulatory safety boundary</div><p className="mt-2 text-sm leading-6 text-amber-50">PolicyPulse may detect proposed or future policy and generate readiness analysis, but proposed rules do not silently become production authority. Regulatory objects move through PROPOSED → FINAL / FUTURE EFFECTIVE → ACTIVE → SUPERSEDED → RETIRED, with source, jurisdiction, effective dates, applicability, executable logic, supersession history and approval record.</p></div>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">GitHealth™ — Governed Execution + Economic Metering</p>
   <h2 className="mt-2 text-4xl font-black">Completed work outside. Governed execution underneath.</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">Patients and frontline teams should not have to buy or understand tokens. Medical Navigator AI™ determines what needs attention and what should happen next; AION Intelligence + Authority™ governs the reasoning boundary; GitHealth executes and meters the work; Prove™ preserves the evidence trail.</p>
   <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{workflow.map((x,i)=><div key={x} className="rounded-2xl border border-slate-200 p-5"><div className="text-sm font-black text-blue-700">0{i+1}</div><div className="mt-2 text-lg font-black">{x}</div></div>)}</div>
   <div className="mt-10 grid gap-6 lg:grid-cols-2">
    <div className="rounded-3xl bg-slate-950 p-8 text-white"><Database className="h-9 w-9 text-cyan-300"/><h3 className="mt-4 text-2xl font-black">GitHealth Workflow Unit™</h3><p className="mt-3 text-slate-300">One completed governed healthcare workflow with defined inputs, evidence requirements, authority controls, execution steps and completion criteria.</p><div className="mt-6 text-sm font-bold text-cyan-200">Workflow Unit → Agent Execution → Model/Tokens → Tools/APIs → Human Authority → Evidence → Outcome → Revenue → Cost-to-Goal™</div></div>
    <div className="rounded-3xl border border-slate-200 p-8"><BarChart3 className="h-9 w-9 text-blue-700"/><h3 className="mt-4 text-2xl font-black">GitHealth Economics™</h3><p className="mt-3 text-slate-600">Meters completed work, revenue/workflow, compute and tool cost, human-review cost, contribution, exception rate, evidence completion, Revenue per Million Tokens and Cost-to-Goal™.</p><p className="mt-5 font-black text-blue-950">The product is governed, measurable work. Tokens are COGS telemetry.</p></div>
   </div>
   <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{workflowClasses.map(x=><div key={x.name} className="rounded-2xl border border-slate-200 p-5"><div className="text-sm font-black text-blue-700">{x.name}</div><div className="mt-2 font-black">{x.label}</div><p className="mt-2 text-xs leading-5 text-slate-500">{x.example}</p></div>)}</div>
   <div className="mt-8 rounded-3xl bg-slate-950 p-8 text-white"><div className="flex items-start gap-4"><LockKeyhole className="mt-1 h-8 w-8 text-cyan-300"/><div><h3 className="text-2xl font-black">AION Intelligence + Authority™: the governed reasoning boundary.</h3><p className="mt-2 max-w-4xl text-slate-300">Medical Navigator and domain agents may observe, organize, assess, predict, recommend, navigate and prepare work within permissioned workflows. Consequential clinical, payment and PHI actions remain subject to applicable policy, authority and human review.</p></div></div></div>
  </section>

  <section className="bg-gradient-to-br from-blue-950 to-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">AION Financial Health™ · Financial-to-Clinical Intelligence</p>
   <h2 className="mt-2 text-4xl font-black">Find the financial barrier. Restore the care.</h2>
   <p className="mt-4 max-w-5xl text-lg text-blue-100">A financial signal is not a clinical conclusion. Medical Navigator connects verified financial context to a model-generated risk estimate, a human-reviewed navigation pathway and a measurable care-restoration outcome.</p>
   <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
    ["Signal","Medical debt + documented household hardship"],
    ["Clinical context","Diabetes + overdue follow-up"],
    ["Prediction","Model-generated elevated risk of continued care disengagement"],
    ["Navigation","Financial assistance, coverage, payment assistance or CBO pathway"],
    ["Human authority","Navigator verifies circumstances and engages the patient"],
    ["Clinical restoration","Appointment completed → HbA1c obtained → treatment plan updated"],
    ["Proof","Signal → rule → recommendation → human action → intervention → outcome"],
    ["KPI","Care Restoration Rate™"],
   ].map(([k,v])=><div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="text-xs font-black uppercase tracking-widest text-cyan-300">{k}</div><p className="mt-3 text-sm leading-6 text-blue-50">{v}</p></div>)}</div>
   <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6"><div className="font-black text-cyan-200">Care Restoration Rate™</div><p className="mt-2 text-sm text-cyan-50">Previously delayed or overdue care completed ÷ financially vulnerable patients receiving intervention. Supporting measures can include time-to-restoration, barrier resolution, appointment completion, clinical follow-through and Cost-to-Restored-Care™.</p></div>
  </div></section>

  <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Reference Economics · ACCESS CMP</p>
   <h2 className="mt-2 text-4xl font-black">Provider reimbursement is not GitHealth revenue.</h2>
   <p className="mt-4 max-w-4xl text-lg text-slate-600">Illustrative unit economics show how GitHealth can enable and govern a qualifying provider workflow while keeping the provider payment pathway separate from GitHealth's software economics.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
    {[["Provider allowed amount","$30.00"],["Illustrative practitioner labor","($15.00)"],["Illustrative GitHealth allocation","($3.00)"],["Provider remainder before other costs","$12.00"],["GitHealth variable Cost-to-Goal™","($0.50)"],["GitHealth contribution","$2.50"],["GitHealth variable contribution margin","83.3%"]].map(([k,v])=><div key={k} className="rounded-2xl bg-white p-6 shadow-sm"><div className="text-sm font-bold text-slate-500">{k}</div><div className="mt-2 text-3xl font-black text-blue-950">{v}</div></div>)}
   </div>
   <p className="mt-6 text-sm leading-6 text-slate-500">Illustrative planning assumptions, not observed production economics or a guarantee of reimbursement or margin. The $30 ACCESS CMP allowed amount belongs to the eligible billing provider, not GitHealth. CMS currently permits eligible practitioners to bill G0676, G0677 or G0678 when the applicable requirements are met; qualifying first-time onboarding support may add $10 with modifier AC. Actual Medicare payment and provider economics vary with eligibility, geography, sequestration, service requirements, billing expense, denials and other costs. GitHealth pricing shown here is hypothetical. <a className="font-bold text-blue-700 underline" href="https://www.cms.gov/priorities/innovation/access-co-management-payment-cmp-billing-guidance" target="_blank" rel="noreferrer">CMS billing guidance</a>.</p>
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
    <div className="mt-3 text-xl font-black">PIN payment pathway → Provider → Navigator work + GitHealth Workflow Unit™ → Evidence → Outcome → Payment Proof</div>
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
   <p className="mt-5 text-sm leading-6 text-blue-200">CMS states CJR-X will be mandatory nationwide and begin January 1, 2028. Participating hospitals will be accountable for coordinated, affordable care from the joint-replacement procedure through the first 90 days of recovery. Independent solution; not affiliated with or endorsed by CMS. <a className="font-bold text-cyan-200 underline" href="https://www.cms.gov/priorities/innovation/innovation-models/cjr-x" target="_blank" rel="noreferrer">CMS CJR-X model page</a>.</p>
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

  <section className="bg-cyan-50"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Workflow Economics</p>
   <h2 className="mt-2 text-4xl font-black">Provider reimbursement ≠ GitHealth revenue.</h2>
   <p className="mt-4 max-w-5xl text-lg text-slate-600">PIN and ACCESS illustrate the same economic principle: provider payment belongs to the applicable clinical/payment pathway; GitHealth monetizes governed infrastructure through platform capacity and Workflow Units™.</p>
   <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-sm">
    <div className="grid md:grid-cols-3">
     <div className="p-6 font-black text-slate-500">Economic dimension</div><div className="p-6 font-black text-blue-950">PIN-in-a-Box™</div><div className="p-6 font-black text-blue-950">ACCESS Care-in-a-Box™</div>
     {[
       ["Buyer","PCP / MSO / Senior Living","PCP / FQHC / RHC / Senior Living"],
       ["Economic type","Recurring navigation","Co-management micro-workflow"],
       ["Provider payment","Applicable PIN payment pathway","$30 reference CMP pathway"],
       ["GitHealth monetization","Subscription + Workflow Units","Subscription + Workflow Units"],
       ["Economic objective","Navigation contribution + scale","Low Cost-to-Goal + high-volume work"],
       ["ROI","Recurring care-management ROI","Workflow ROI"],
     ].map(([a,b,d])=><div key={a} className="contents"><div className="border-t p-6 text-sm font-bold text-slate-500">{a}</div><div className="border-t p-6 text-sm text-slate-700">{b}</div><div className="border-t p-6 text-sm text-slate-700">{d}</div></div>)}
    </div>
   </div>
   <p className="mt-5 text-xs leading-5 text-slate-500">ACCESS CMP reference: CMS lists G0676, G0677 and G0678 at a $30 allowed amount before applicable geographic and Medicare payment adjustments. PIN payment varies by code, locality, setting and other Medicare payment factors; verify the current fee schedule before contracting or billing.</p>
  </div></section>

  <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">Commercial motion</p><h2 className="mt-2 text-4xl font-black">Implementation → Platform Capacity → Workflow Units → Enterprise Expansion</h2>
   <div className="mt-10 grid gap-6 md:grid-cols-3">{tiers.map((t,i)=><div key={t.name} className={"rounded-2xl border p-7 "+(i===1?"border-blue-600 bg-blue-950 text-white":"border-slate-200 bg-white")}><h3 className="text-xl font-black">{t.name}</h3><div className="mt-4 text-3xl font-black">{t.price}</div><p className={"mt-3 leading-6 "+(i===1?"text-blue-100":"text-slate-600")}>{t.desc}</p><Link to="/contact" className={"mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold "+(i===1?"bg-amber-400 text-slate-950":"bg-blue-700 text-white")}>{t.cta}<ArrowRight className="h-4 w-4"/></Link></div>)}</div>
   <p className="mt-6 text-sm text-slate-500">Proposed commercial pricing. Final pricing depends on population, integrations, implementation scope, workflow complexity, governance and support. Reimbursement, savings, clinical outcomes and technology performance are not guaranteed.</p>
  </section>

  <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">GitHealth™ Market Value</p>
   <h2 className="mt-2 text-4xl font-black">Healthcare does not need another way to pay for AI tokens.</h2>
   <p className="mt-4 max-w-5xl text-xl leading-8 text-slate-300">It needs an economic system for paying for governed, measurable work produced with AI. GitHealth converts model activity into accountable Workflow Units™, evidence, outcomes and enterprise economics.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{marketValueMetrics.map(x=><div key={x.name} className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="text-xl font-black text-white">{x.name}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{x.text}</p></div>)}</div>
   <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
    <div className="text-sm font-black uppercase tracking-widest text-cyan-200">Machine economics</div>
    <div className="mt-4 text-lg font-black leading-9">Workflow Unit™ → Agent Execution → Model / Token Cost → Tools / APIs → Human Authority → Evidence → Outcome → Revenue → Cost-to-Goal™ → Contribution → ROI</div>
    <p className="mt-4 max-w-5xl text-sm leading-6 text-cyan-50">Tokens are a COGS telemetry variable, not the product. Commercial contracts sit above the unit economics through implementation, platform/site capacity, included Workflow Units, metered overage, complex workflow classes, FDE/integrations and Prove™ / Economics™ analytics.</p>
   </div>
   <div className="mt-8 flex flex-wrap gap-4">
    <a href="https://githealth-market-value.adabakadiri.chatgpt.site" target="_blank" rel="noreferrer" className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950">OPEN GITHEALTH MARKET VALUE</a>
    <Link to="/contact" className="rounded-xl border border-white/30 px-6 py-3 font-black text-white">DISCUSS ENTERPRISE CAPACITY</Link>
   </div>
   <p className="mt-6 text-xs leading-5 text-slate-400">Market-value examples and economic models are strategic planning tools. Pricing, margins, savings and outcomes require validation with actual deployment data and customer-specific contracts.</p>
  </div></section>

  <section className="bg-blue-950 text-white"><div className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-cyan-300">Distribution engine</p><h2 className="mt-2 text-4xl font-black">Authority content becomes paid intelligent work.</h2>
   <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-7 text-center text-lg font-black leading-9 text-blue-50">CONTENT → LEAD → VALUE / WORKFLOW ASSESSMENT → PILOT → DEPLOYMENT → WORKFLOW UNITS → GOVERNED EXECUTIONS → EVIDENCE → OUTCOMES → ROI → CASE STUDY → MORE CLIENTS</div>
   <p className="mt-6 max-w-4xl text-blue-100">The white paper establishes authority. Buyer-specific briefs earn the meeting. The Opportunity Assessment creates the first transaction. Recurring governed workflows create software usage, evidence and measurable economics.</p>
  </div></section>

  <section className="mx-auto max-w-7xl px-6 py-20">
   <p className="font-bold uppercase tracking-widest text-blue-700">National Commercial Wedges</p>
   <h2 className="mt-2 text-4xl font-black">Two wedges. One institutional architecture.</h2>
   <div className="mt-10 grid gap-6 lg:grid-cols-2">
    <div className="rounded-3xl border border-slate-200 p-8 shadow-sm"><div className="text-sm font-black uppercase tracking-widest text-cyan-700">Health Systems + Orthopedics</div><h3 className="mt-3 text-2xl font-black">CJR-X Recovery-in-a-Box™</h3><p className="mt-4 text-slate-600">The national campaign: episode readiness, 90-day recovery, quality, evidence and economics for joint-replacement episodes.</p></div>
    <div className="rounded-3xl border border-slate-200 p-8 shadow-sm"><div className="text-sm font-black uppercase tracking-widest text-purple-700">Complex-Recovery Hospitals</div><h3 className="mt-3 text-2xl font-black">Precision Recovery Health™ / LTACH OS™</h3><p className="mt-4 text-slate-600">The deepest AION institutional demonstration: Value Diagnostic, recovery intelligence, multidisciplinary operations, payment integrity and longitudinal outcomes.</p></div>
   </div>
  </section>

  <section className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-3xl bg-gradient-to-r from-blue-950 to-cyan-800 p-10 text-white md:p-14"><Workflow className="h-10 w-10 text-cyan-300"/><h2 className="mt-4 text-4xl font-black">Tell us the care problem. We deploy the box.</h2><p className="mt-5 max-w-3xl text-blue-100">Start with one workflow, one population and one site. We map the opportunity, configure the operating model, preserve human authority, measure the work and scale what proves value.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950">START AN OPPORTUNITY ASSESSMENT <ArrowRight className="h-4 w-4"/></Link></div></section>

  <section className="border-t"><div className="mx-auto max-w-7xl px-6 py-10 text-sm leading-6 text-slate-500"><p><strong>Trust framework:</strong> CMS-aligned care and reimbursement workflows · FDA-aware digital health governance · URAC Health Care AI Accreditation — Targeted. Care-in-a-Box™ is not represented as CMS-approved, FDA-approved or URAC-accredited. Model-specific requirements, coding, coverage, device/product status and reimbursement must be verified against controlling guidance, payer policy, contracts and the facts of each case.</p></div></section>
 </div>
}