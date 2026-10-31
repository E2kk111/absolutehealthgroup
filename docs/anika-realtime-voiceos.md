# ANIKA™ Realtime VoiceOS — synthetic-only integration

This feature adds a **provider-neutral browser voice adapter** to the existing ANIKA™ prototype at `/githealth/voiceos`. The first adapter uses OpenAI Realtime WebRTC; ANIKA branding, AIOKN concepts, AION concepts, and care-domain logic are not owned by the speech provider.

## Configuration (Vercel, server-only)

Set these server environment variables in the deployment environment:

- `ANIKA_REALTIME_ENABLED=true` — explicit opt-in. If absent, token issuance returns 503.
- `OPENAI_API_KEY` — server-only secret, **never** prefix with `VITE_`.
- `ANIKA_DEMO_ACCESS_CODE` — long random access code distributed privately to approved testers; do not commit.
- `ANIKA_ALLOWED_ORIGIN` — exact deployment origin, e.g. `https://your-preview-host.example`, with no trailing slash.

Deploy the branch to a Vercel preview environment. Open `/githealth/voiceos`, acknowledge synthetic-only use, enter the code, and start a live session. Microphone permission and HTTPS are required. The server mints a 60-second ephemeral client secret via `POST /v1/realtime/client_secrets`. The browser establishes WebRTC via `POST /v1/realtime/calls` with that short-lived credential. End session to release local tracks and close the peer connection.

## Architecture

```
ANIKA™ branded experience
  -> AnikaVoiceAdapter (provider-neutral contract)
    -> OpenAIRealtimeWebRTCAdapter (initial implementation)
      -> /api/anika-realtime-token (Vercel, access-code + origin + feature gate)
        -> OpenAI Realtime client secret
      -> browser microphone / WebRTC / provider audio
AIOKN™ patient graph: NOT connected
AION™ authorization: NOT connected
Care-team notifications / EHR / appointments: NOT connected
```

The original scripted demo remains available separately. Switching its conceptual vendor selector does not switch the live adapter. Microsoft and other vendors are *not integrated*.

## Security / clinical limitations

- **No PHI or real patients.** The provider processes live audio. Do not describe this as HIPAA-ready or clinically authorized.
- An access code is only a **pilot gate**, not user identity or authorization. Origin checks are defense-in-depth, not authentication.
- Before exposing to untrusted users, add a proper authenticated identity provider, durable per-user/IP rate limiting, abuse monitoring, cost ceilings, and a reviewed provider agreement/privacy/data-retention posture.
- A model instruction is not a deterministic safety control. The existing AION audit trail is simulated and does not capture or authorize live voice actions.
- There is no live voice biomarker analysis, physiological monitoring, medical decision support, or emergency escalation.
- If the server is not configured, the live demo fails closed; the scripted prototype remains available.

## Acceptance checks

1. `npm ci && npm run typecheck && npm run lint && npm run build`.
2. Confirm `/api/anika-realtime-token` returns 503 when disabled, 405 on GET, 403 for incorrect code/origin, and a short-lived token only for authorized synthetic sessions.
3. Verify browser microphone permission, speech playback, interruption, session teardown, permission denial, and network failure on desktop and mobile.
4. Confirm API keys never enter the frontend bundle, console, audit JSON, or Git history.
5. Confirm all live voice responses are clearly simulated and never imply a clinician was contacted.
6. Do not merge or enable public access before review and successful tests.

Official protocol references:
- https://developers.openai.com/api/docs/guides/voice-webrtc
- https://developers.openai.com/api/reference/resources/realtime/subresources/client_secrets/methods/create
