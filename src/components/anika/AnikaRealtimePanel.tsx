import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, ShieldCheck } from "lucide-react";
import { OpenAIRealtimeWebRTCAdapter, type AnikaVoiceAdapter, type VoiceStatus } from "@/lib/anika/voiceAdapters";

const newAdapter = (): AnikaVoiceAdapter => new OpenAIRealtimeWebRTCAdapter();
export default function AnikaRealtimePanel() {
  const adapter = useRef<AnikaVoiceAdapter | null>(null);
  const [status, setStatus] = useState<VoiceStatus>("idle");
  const [notice, setNotice] = useState("Live speech requires an enabled server and an approved demo access code.");
  const [accessCode, setAccessCode] = useState("");
  const [consent, setConsent] = useState(false);
  useEffect(() => () => { adapter.current?.disconnect(); }, []);
  const stop = () => { adapter.current?.disconnect(); adapter.current = null; setStatus("disconnected"); setNotice("Microphone and live audio session disconnected."); };
  const start = async () => {
    const instance = newAdapter();
    adapter.current = instance;
    try {
      await instance.connect({ accessCode, syntheticConsent: consent }, { onStatus: setStatus, onNotice: setNotice });
    } catch { /* Error message is already displayed by the adapter. */ }
    finally { setAccessCode(""); }
  };
  const active = status === "connected" || status === "connecting";
  return <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-5 shadow-sm md:p-7" aria-label="ANIKA realtime speech demo">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div><p className="text-xs font-black uppercase tracking-widest text-violet-700">Experimental · Opt-in · Synthetic only</p>
        <h2 className="mt-2 text-2xl font-bold">ANIKA™ Live Speech-to-Speech</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">Talk directly with ANIKA using a replaceable WebRTC speech adapter. This experimental mode uses OpenAI Realtime; it is separate from the scripted conversation below.</p></div>
      <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">Session: {status}</span>
    </div>
    <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
      <div><label htmlFor="anika-demo-code" className="block text-sm font-semibold">Approved demo access code</label>
        <input id="anika-demo-code" type="password" autoComplete="off" value={accessCode} onChange={event => setAccessCode(event.target.value)}
          placeholder="Required for server-issued short-lived session" className="mt-2 w-full rounded-xl border border-slate-300 p-3 text-sm" disabled={active}/></div>
      <div>{active ? <button type="button" onClick={stop} className="inline-flex items-center gap-2 rounded-xl bg-rose-700 px-5 py-3 text-sm font-bold text-white"><MicOff size={17}/> End live session</button>
        : <button type="button" onClick={() => void start()} disabled={!consent || !accessCode.trim()} className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-bold text-white disabled:opacity-40"><Mic size={17}/> Start live voice</button>}</div>
    </div>
    <label className="mt-4 flex items-start gap-3 text-sm"><input type="checkbox" className="mt-1" checked={consent} onChange={event => setConsent(event.target.checked)} disabled={active}/>
      <span>I understand this is an experimental AI conversation. I will use fictional details only and will not share real patient information or seek clinical advice.</span></label>
    <p role="status" className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">{notice}</p>
    <p className="mt-3 flex items-start gap-2 text-xs text-slate-500"><ShieldCheck size={16} className="shrink-0"/>No EHR, AIOKN patient graph, AION clinical authorization, scheduling, biomarker monitoring, or care-team escalation is connected. Voice audio is processed by the selected provider; do not use PHI. This prototype does not record audio locally.</p>
  </section>;
}
