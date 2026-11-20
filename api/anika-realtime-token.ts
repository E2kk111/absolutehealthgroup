/**
 * ANIKA™ opt-in synthetic-only voice research demo.
 * This endpoint must remain disabled unless explicitly configured.
 * Do not accept PHI or treat this as an authenticated clinical workflow.
 */
import { timingSafeEqual } from "node:crypto";

const json = (data: unknown, status: number) => Response.json(data, {
  status,
  headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
});
const equal = (a: string, b: string) => {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
    if (process.env.ANIKA_REALTIME_ENABLED !== "true") return json({ error: "Live demo is not enabled" }, 503);
    const apiKey = process.env.OPENAI_API_KEY;
    const accessCode = process.env.ANIKA_DEMO_ACCESS_CODE;
    const allowedOrigin = process.env.ANIKA_ALLOWED_ORIGIN;
    if (!apiKey || !accessCode || !allowedOrigin) return json({ error: "Demo server is not configured" }, 503);
    if (!equal(request.headers.get("origin") || "", allowedOrigin)) return json({ error: "Origin not allowed" }, 403);
    if (!request.headers.get("content-type")?.includes("application/json")) return json({ error: "JSON required" }, 415);
    const raw = await request.text();
    if (raw.length > 1024) return json({ error: "Request too large" }, 413);
    let body: { accessCode?: unknown; syntheticConsent?: unknown };
    try { body = JSON.parse(raw); } catch { return json({ error: "Invalid JSON" }, 400); }
    if (body.syntheticConsent !== true || typeof body.accessCode !== "string" || !equal(body.accessCode, accessCode)) {
      return json({ error: "Demo access not authorized" }, 403);
    }
    // This fixed session configuration is owned by GitHealth, not by a speech provider.
    const instructions = [
      "You are ANIKA™, the Voice of Connected Care, in a synthetic-only demonstration for Absolute Health Group.",
      "The example patient is Jordan, age 81, receiving rehabilitation. The example rehab goal is to walk 150 feet.",
      "Clearly identify yourself as a simulated healthcare voice companion. Speak warmly, briefly, and plainly.",
      "Never claim access to patient records, vital signs, clinicians, scheduling, AIOKN, or AION systems.",
      "Never claim that any care-team notification, appointment, escalation, or documentation was actually completed.",
      "Never diagnose, prescribe, alter a care plan, or claim to infer biomarkers from voice.",
      "If a user describes chest pain, severe difficulty breathing, stroke symptoms, or another apparent emergency,",
      "advise them to contact local emergency services immediately. Do not claim to place the call.",
      "For non-emergency new symptoms, recommend prompt clinician review before therapy.",
      "Ask users not to share real patient information. Do not solicit names, dates of birth, or other identifiers.",
      "All responses must stay within the synthetic demonstration."
    ].join(" ");
    try {
      const upstream = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          expires_after: { anchor: "created_at", seconds: 60 },
          session: {
            type: "realtime",
            model: "gpt-realtime",
            instructions,
            output_modalities: ["audio"],
            audio: {
              output: { voice: "alloy" },
              input: { turn_detection: { type: "server_vad" } }
            }
          }
        }),
        signal: AbortSignal.timeout(12000)
      });
      if (!upstream.ok) return json({ error: "Voice provider could not create a session" }, 502);
      const result: unknown = await upstream.json();
      if (!result || typeof result !== "object" || !("value" in result) || typeof result.value !== "string") {
        return json({ error: "Unexpected provider response" }, 502);
      }
      return json({ value: result.value, expires_at: "expires_at" in result ? result.expires_at : null }, 200);
    } catch {
      return json({ error: "Voice provider unavailable" }, 502);
    }
  }
};
