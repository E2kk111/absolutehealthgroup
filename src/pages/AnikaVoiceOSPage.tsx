import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft, Download, Mic, Phone, RotateCcw, Send, ShieldCheck, Volume2, Network } from "lucide-react";

type Message = { role: "ANIKA™" | "Patient"; text: string };
type AuditEvent = { at: string; type: string; detail: string };
const greeting = "Hello Jordan. How are you feeling before therapy today?";
const scenarios = [
  { label: "Symptom scenario", text: "I feel more tired and short of breath today." },
  { label: "Therapy goal", text: "Can you remind me about my therapy goal?" },
  { label: "Care navigation", text: "Please help me schedule a follow-up." },
];
const speechProviders = ["Microsoft real-time voice — candidate", "OpenAI real-time voice — candidate", "Other vendor — candidate", "Browser speech APIs — local demo"];
const initialEvents: AuditEvent[] = [
  { at: "demo", type: "demo", detail: "Synthetic session started." },
  { at: "demo", type: "governance", detail: "No patient record or clinical system connected." },
];
const panel = "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7";
const action = "rounded-xl bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50";
const secondary = "rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-violet-50";

export default function AnikaVoiceOSPage() {
  const [messages, setMessages] = useState<Message[]>([{ role: "ANIKA™", text: greeting }]);
  const [input, setInput] = useState("");
  const [provider, setProvider] = useState(speechProviders[0]);
  const [speakEnabled, setSpeakEnabled] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [events, setEvents] = useState<AuditEvent[]>(initialEvents);
  const [alert, setAlert] = useState("");
  const [listening, setListening] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<{ stop: () => void } | null>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ block: "nearest" }); }, [messages]);
  useEffect(() => () => { recognitionRef.current?.stop(); window.speechSynthesis?.cancel(); }, []);
  const audit = (type: string, detail: string) => setEvents(prev => [...prev, { at: new Date().toISOString(), type, detail }]);
  const voice = (text: string) => {
    if (speakEnabled && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.94;
      window.speechSynthesis.speak(utterance);
    }
  };
  const respond = (raw: string) => {
    const text = raw.trim().slice(0, 500);
    if (!text) return;
    const lower = text.toLowerCase();
    let response = "Thank you for sharing that. I can help with approved rehabilitation goals, care navigation, or preparing a message for your care team. I cannot diagnose conditions or change your treatment.";
    let task = "";
    let warning = "";
    if (/chest pain|severe difficulty breathing|can't breathe|cannot breathe|stroke symptoms|fainting/.test(lower)) {
      response = "Those symptoms may be an emergency. Please call your local emergency number now or ask someone nearby for help. This demonstration cannot contact emergency services.";
      task = "Emergency guidance displayed — no notification sent";
      warning = "Emergency scenario: no real-world response is initiated by this demo.";
    } else if (/short of breath|breathless|trouble breathing|more tired|dizzy|weak/.test(lower)) {
      response = "Thank you for telling me. New shortness of breath needs prompt clinical assessment, particularly before therapy. Are you experiencing severe difficulty breathing or chest pain? I can prepare a priority care-team notification for review in this demo.";
      task = "Priority clinician review requested — reported symptoms before therapy";
      warning = "The alert is based on patient-reported symptoms, not a voice-derived vital sign.";
    } else if (/therapy|walk|goal|exercise/.test(lower)) {
      response = "Your example rehabilitation goal is to walk 150 feet with the assistance specified by your therapy team. Only your clinicians can modify your care plan.";
      task = "Synthetic therapy goal reviewed";
    } else if (/appointment|schedule|follow.up|referral/.test(lower)) {
      response = "I can prepare a follow-up request for your care team. No appointment is actually booked in this prototype.";
      task = "Follow-up request — pending human review";
    }
    setMessages(prev => [...prev, { role: "Patient", text }, { role: "ANIKA™", text: response }]);
    audit("patient", text); audit("anika", response);
    setAlert(warning);
    if (task) { setTasks(prev => [...prev, task]); audit("aion", "Human review gate: " + task); }
    voice(response);
    setInput("");
  };
  const reset = () => {
    recognitionRef.current?.stop();
    window.speechSynthesis?.cancel();
    setMessages([{ role: "ANIKA™", text: greeting }]); setTasks([]); setAlert(""); setInput("");
    audit("demo", "Synthetic session reset.");
  };
  const startSpeech = () => {
    type RecognitionResult = { results: ArrayLike<ArrayLike<{ transcript: string }>> };
    type Recognition = { lang: string; interimResults: boolean; onresult: ((event: RecognitionResult) => void) | null; onerror: (() => void) | null; onend: (() => void) | null; start: () => void; stop: () => void };
    type SpeechWindow = Window & { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
    const speechWindow = window as SpeechWindow;
    const Constructor = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
    if (!Constructor) { setAlert("Speech recognition is unavailable in this browser. Use the text input instead."); return; }
    try {
      const recognition = new Constructor();
      recognition.lang = "en-US"; recognition.interimResults = false;
      recognition.onresult = event => { const spoken = event.results[0]?.[0]?.transcript; if (spoken) respond(spoken); };
      recognition.onerror = () => { setAlert("Microphone recognition unavailable or permission denied."); setListening(false); };
      recognition.onend = () => setListening(false);
      recognitionRef.current = recognition; recognition.start(); setListening(true);
    } catch { setAlert("Could not start browser speech recognition."); setListening(false); }
  };
  const exportAudit = () => {
    const payload = { prototype: "GitHealth VoiceOS — ANIKA", syntheticOnly: true, provider, events, tasks };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "anika-synthetic-audit.json"; anchor.click();
    URL.revokeObjectURL(url);
  };
  return <div className="min-h-screen bg-[#f5f7fc] text-[#17243a]">
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link to="/our-solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:underline"><ArrowLeft size={16}/> Absolute Health Group / Technology Solutions</Link>
        <span className="rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold text-violet-800">ANIKA™ interactive prototype · Synthetic only</span>
      </div>
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#111a45] via-[#4c2b96] to-[#177eac] p-7 text-white md:p-12">
        <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true"/>
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div><p className="text-sm font-black uppercase tracking-[.18em] text-cyan-200">✚ GitHealth™ VoiceOS™ · Your Healthcare Voice Companion</p>
            <h1 className="mt-4 text-6xl font-black tracking-tight md:text-8xl">ANIKA<span className="align-top text-2xl">™</span></h1>
            <p className="mt-3 text-2xl font-semibold">The Voice of Connected Care.</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-indigo-100">Natural conversations, care navigation and authorized follow-up—built on a replaceable speech layer.</p>
            <p className="mt-6 inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold">Talk Naturally. Get Care. Stay on Track.</p>
          </div>
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-cyan-200 bg-white/10 text-7xl shadow-[0_0_50px_rgba(110,214,255,.35)] md:h-48 md:w-48" aria-label="ANIKA brand symbol">✦</div>
        </div>
      </section>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <section className={panel}><h2 className="text-2xl font-bold">Talk with ANIKA</h2>
          <p className="mt-2 text-sm text-slate-500">Synthetic patient: Jordan, age 81, receiving rehabilitation services. Do not enter real patient information.</p>
          <div className="mt-5 flex h-80 flex-col gap-3 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-4" aria-live="polite">
            {messages.map((message, i) => <div key={i} className={`max-w-[88%] rounded-2xl px-4 py-3 ${message.role === "ANIKA™" ? "self-start bg-violet-100" : "self-end bg-cyan-100"}`}>
              <p className="mb-1 text-xs font-black">{message.role}</p><p className="whitespace-pre-wrap text-sm">{message.text}</p></div>)}<div ref={endRef}/>
          </div>
          <form className="mt-4 flex flex-wrap gap-2" onSubmit={event => { event.preventDefault(); respond(input); }}>
            <input aria-label="Message to ANIKA" maxLength={500} value={input} onChange={event => setInput(event.target.value)} placeholder="Try: I feel short of breath today" className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm" />
            <button className={action} type="submit"><Send size={16} className="mr-1 inline"/> Send</button>
            <button type="button" className={secondary} onClick={startSpeech} disabled={listening}><Mic size={16} className="mr-1 inline"/> {listening ? "Listening…" : "Speak"}</button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2">{scenarios.map(item => <button key={item.label} type="button" className={secondary} onClick={() => respond(item.text)}>{item.label}</button>)}<button type="button" className={secondary} onClick={reset}><RotateCcw size={14} className="mr-1 inline"/> Reset</button></div>
          {alert && <div role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">{alert}</div>}
          <label className="mt-5 flex items-center gap-3 text-sm"><input type="checkbox" checked={speakEnabled} onChange={event => setSpeakEnabled(event.target.checked)} className="h-4 w-4"/> <Volume2 size={17}/> Speak ANIKA's responses aloud (browser voice)</label>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">Browser speech recognition may require permission and may not work in every browser. This is a scripted prototype, not live clinical AI.</p>
        </section>
        <section className={panel}><h2 className="text-2xl font-bold">Replaceable speech layer</h2><p className="mt-2 text-sm text-slate-500">Switch the conceptual vendor without changing ANIKA's care identity, AIOKN or AION.</p>
          <label htmlFor="speech-provider" className="mt-5 block text-sm font-bold">Speech adapter (conceptual)</label>
          <select id="speech-provider" className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-sm" value={provider} onChange={event => { setProvider(event.target.value); audit("adapter", "Conceptual provider selected: " + event.target.value); }}>
            {speechProviders.map(item => <option key={item}>{item}</option>)}
          </select>
          <p className="mt-2 text-xs text-slate-500">The selection illustrates the adapter design; no external model API is connected.</p>
          <div className="mt-6 space-y-3">{[
            { icon: Phone, name: "ANIKA™", note: "Conversation layer" }, { icon: Network, name: "AIOKN™", note: "Synthetic patient graph" },
            { icon: ShieldCheck, name: "AION™", note: "Simulated review gates" }, { icon: Activity, name: "Dragon Copilot", note: "Proposed integration" },
            { icon: Activity, name: "Voice biomarkers", note: "Research only" },
          ].map(item => <div key={item.name} className="flex items-center gap-3 border-b border-slate-100 pb-3"><item.icon size={18} className="text-violet-700"/><span className="font-semibold">{item.name}</span><span className="ml-auto text-right text-xs text-slate-500">{item.note}</span></div>)}</div>
          <h3 className="mt-6 font-bold">Example care context</h3>
          <dl className="mt-2 space-y-2 text-sm"><div className="flex justify-between"><dt>Rehab goal</dt><dd className="font-semibold">Walk 150 feet</dd></div><div className="flex justify-between"><dt>Vital signs</dt><dd>Not connected</dd></div><div className="flex justify-between"><dt>Care team</dt><dd>Human approval required</dd></div></dl>
        </section>
        <section className={panel}><h2 className="text-xl font-bold">Care coordination queue</h2>{tasks.length ? <ul className="mt-4 space-y-3">{tasks.map((task,i) => <li key={i} className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900">{task} · Simulated</li>)}</ul> : <p className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">No demo tasks yet. Choose a scenario.</p>}
          <p className="mt-4 text-xs text-slate-500">All alerts are simulated. Nothing is sent to a care team or emergency service.</p>
        </section>
        <section className={panel}><h2 className="text-xl font-bold">AION™ audit trail</h2><div className="mt-4 max-h-48 overflow-y-auto rounded-xl bg-slate-950 p-4 font-mono text-xs leading-6 text-cyan-100" aria-live="polite">{events.map((event,i) => <p key={i}>[{event.type}] {event.detail}</p>)}</div>
          <button type="button" onClick={exportAudit} className={`mt-4 inline-flex items-center gap-2 ${secondary}`}><Download size={16}/> Export demo audit JSON</button>
        </section>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">GitHealth™ VoiceOS™ · ANIKA™ · Concept prototype only · No PHI · No diagnosis · No physiological monitoring</p>
    </div>
  </div>;
}
