import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Copy, Mail } from "lucide-react";

const audiences = ["Independent physician / medical group", "Healthcare organization / facility", "Research partner", "Technology vendor", "Services vendor"];
const interests = ["Heart & Brain specialty access", "Cardiac screening / monitoring", "Wound care", "Post-acute transitions", "Research / evaluation", "Other specialty workflow"];
const capabilities = ["Research and evidence", "Device / diagnostics technology", "Clinical services", "Operational services", "Software / interoperability"];
const initial = { audience: "", interest: "", capability: "", organization: "", contact: "", email: "", objective: "" };

export default function CarePartnerOnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initial);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const set = (key: keyof typeof initial, value: string) => setData((prev) => ({ ...prev, [key]: value }));
  const summary = useMemo(() => [
    "Care-in-a-Box™ — Partnership Introduction",
    "Organization: " + (data.organization || "Not provided"),
    "Contact: " + (data.contact || "Not provided"),
    "Business email: " + (data.email || "Not provided"),
    "Organization type: " + data.audience,
    "Priority workflow: " + data.interest,
    "Partner capability: " + (data.capability || "Not specified"),
    "Business objective: " + (data.objective || "Not provided"),
    "",
    "Business inquiry only. Do not include patient identifiers, medical records, or other sensitive health information.",
  ].join("\n"), [data]);
  const mailto = "mailto:info@absolutehealthgroup.com?subject=" + encodeURIComponent("Care-in-a-Box Partner Introduction") + "&body=" + encodeURIComponent(summary);
  const nextEnabled = step === 0 ? Boolean(data.audience && data.interest) : step === 1 ? Boolean(data.organization.trim() && data.contact.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) : true;
  const fieldClass = "w-full rounded-md border border-[#B8C6D2] bg-white px-4 py-3 text-[#17243A] focus:border-[#366E9B] focus:outline-none focus:ring-2 focus:ring-[#366E9B]/20";
  return <div className="min-h-screen bg-[#F9F8F5] text-[#17243A]">
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-14 md:px-10">
      <Link to="/githealth" className="inline-flex items-center gap-2 text-sm font-semibold text-[#366E9B] hover:underline"><ArrowLeft size={16}/> GitHealth Enterprise</Link>
      <p className="mt-12 text-xs font-bold uppercase tracking-[.2em] text-[#366E9B]">Care-in-a-Box™ · Partner access</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Start a partnership conversation.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#506076]">For independent physicians, healthcare organizations, research teams, technology vendors, and services partners. Describe the business problem and the capabilities you bring. No patient data is needed.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_280px]">
        <div className="rounded-xl border border-[#D8DFE5] bg-white p-6 shadow-sm md:p-9">
          <div className="mb-8 flex items-center justify-between gap-3"><p className="text-sm font-semibold">Step {step + 1} of 3</p><p className="text-sm text-[#68798D]">{["Fit", "Introduction", "Review"][step]}</p></div>
          <div aria-label="Onboarding progress" className="mb-9 grid grid-cols-3 gap-2">{[0,1,2].map(i=><div key={i} className={`h-2 rounded-full ${i<=step ? "bg-[#366E9B]" : "bg-[#E4EAF0]"}`}/>)}</div>
          {step === 0 && <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What brings you here?</h2>
            <div><label htmlFor="audience" className="mb-2 block font-medium">Organization type *</label><select id="audience" className={fieldClass} value={data.audience} onChange={e=>set("audience",e.target.value)}><option value="">Select your organization</option>{audiences.map(v=><option key={v}>{v}</option>)}</select></div>
            <div><label htmlFor="interest" className="mb-2 block font-medium">Priority workflow *</label><select id="interest" className={fieldClass} value={data.interest} onChange={e=>set("interest",e.target.value)}><option value="">Choose an area</option>{interests.map(v=><option key={v}>{v}</option>)}</select></div>
            <div><label htmlFor="capability" className="mb-2 block font-medium">Your capability (optional)</label><select id="capability" className={fieldClass} value={data.capability} onChange={e=>set("capability",e.target.value)}><option value="">Select a capability</option>{capabilities.map(v=><option key={v}>{v}</option>)}</select></div>
          </div>}
          {step === 1 && <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Introduce your organization.</h2>
            <div><label htmlFor="organization" className="mb-2 block font-medium">Organization *</label><input id="organization" className={fieldClass} maxLength={120} value={data.organization} onChange={e=>set("organization",e.target.value)} placeholder="Organization name" /></div>
            <div><label htmlFor="contact" className="mb-2 block font-medium">Contact name *</label><input id="contact" className={fieldClass} maxLength={120} value={data.contact} onChange={e=>set("contact",e.target.value)} placeholder="Your name" /></div>
            <div><label htmlFor="email" className="mb-2 block font-medium">Business email *</label><input id="email" type="email" className={fieldClass} maxLength={180} value={data.email} onChange={e=>set("email",e.target.value)} placeholder="you@organization.com" /></div>
            <div><label htmlFor="objective" className="mb-2 block font-medium">What would you like to explore? (optional)</label><textarea id="objective" rows={4} maxLength={750} className={fieldClass} value={data.objective} onChange={e=>set("objective",e.target.value)} placeholder="Describe the workflow, partnership opportunity, or integration goal. Do not include patient information." /></div>
          </div>}
          {step === 2 && <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Your introduction is ready.</h2>
            <p className="text-[#506076]">Review the summary, then open your email application to send it. Nothing has been submitted automatically.</p>
            <pre className="whitespace-pre-wrap break-words rounded-lg bg-[#F1F5F8] p-5 text-sm leading-relaxed">{summary}</pre>
            <div className="flex flex-wrap gap-3">
              <a href={mailto} className="inline-flex items-center gap-2 rounded-md bg-[#17243A] px-5 py-3 font-semibold text-white hover:bg-[#294364]"><Mail size={18}/> Open email to send</a>
              <button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(summary);setCopied(true);setCopyError(false)}catch{setCopied(false);setCopyError(true)}}} className="inline-flex items-center gap-2 rounded-md border border-[#A8B7C6] px-5 py-3 font-semibold"><Copy size={18}/>{copied?"Copied":"Copy summary"}</button>
            </div>
            {copyError && <p role="alert" className="text-sm text-red-700">Copy is unavailable in this browser. Select the summary above to copy it manually.</p>}
            <p className="text-sm text-[#68798D]">Email delivery requires you to press Send in your email app. No account, backend submission, or automated partner approval is implied.</p>
          </div>}
          <div className="mt-10 flex items-center justify-between border-t border-[#D8DFE5] pt-6">
            <button type="button" disabled={step===0} onClick={()=>setStep(v=>Math.max(0,v-1))} className="rounded-md px-4 py-3 font-semibold disabled:opacity-40">Back</button>
            {step<2&&<button type="button" disabled={!nextEnabled} onClick={()=>setStep(v=>Math.min(2,v+1))} className="inline-flex items-center gap-2 rounded-md bg-[#17243A] px-5 py-3 font-semibold text-white disabled:opacity-40">Continue <ArrowRight size={18}/></button>}
          </div>
        </div>
        <aside className="space-y-5">
          <div className="rounded-lg border border-[#D8DFE5] bg-white p-6"><h2 className="font-semibold">What happens next?</h2><ol className="mt-5 space-y-4 text-sm text-[#506076]"><li>1. Share a business-only introduction.</li><li>2. AHG reviews the proposed use case.</li><li>3. Discuss fit, clinical roles, diligence, and a potential pilot.</li></ol></div>
          <div className="rounded-lg bg-[#17243A] p-6 text-white"><CheckCircle2 size={24}/><h2 className="mt-4 font-semibold">Clinical authority stays with clinicians.</h2><p className="mt-3 text-sm leading-relaxed text-[#DBE5EF]">This intake is for business inquiries only. Do not include PHI, medical records, patient identifiers, or sensitive information.</p></div>
          <Link to="/care-in-a-box" className="inline-flex items-center gap-2 text-sm font-semibold text-[#366E9B] hover:underline">Explore Care-in-a-Box™ <ArrowRight size={16}/></Link>
        </aside>
      </div>
    </section>
  </div>;
}
