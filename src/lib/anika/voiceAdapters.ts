/**
 * Provider-neutral transport contract for ANIKA™.
 * Conversation identity and future AIOKN/AION tools are separate from transport.
 */
export type VoiceStatus = "idle" | "connecting" | "connected" | "disconnected" | "error";
export type VoiceEvents = {
  onStatus: (status: VoiceStatus) => void;
  onNotice: (message: string) => void;
};
export interface AnikaVoiceAdapter {
  readonly id: string;
  connect(options: { accessCode: string; syntheticConsent: boolean }, events: VoiceEvents): Promise<void>;
  disconnect(): void;
}
export class OpenAIRealtimeWebRTCAdapter implements AnikaVoiceAdapter {
  readonly id = "openai-realtime-webrtc";
  private peer: RTCPeerConnection | null = null;
  private microphone: MediaStream | null = null;
  private audio: HTMLAudioElement | null = null;
  private channel: RTCDataChannel | null = null;
  private closing = false;

  async connect(options: { accessCode: string; syntheticConsent: boolean }, events: VoiceEvents) {
    this.disconnect();
    this.closing = false;
    events.onStatus("connecting");
    try {
      if (!options.syntheticConsent) throw new Error("Synthetic-demo acknowledgment required.");
      if (!navigator.mediaDevices?.getUserMedia) throw new Error("Microphone requires HTTPS and a supported browser.");
      const response = await fetch("/api/anika-realtime-token", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(options),
        cache: "no-store"
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({})) as { error?: string };
        throw new Error(payload.error || "Voice demo is unavailable.");
      }
      const payload = await response.json() as { value?: string };
      if (!payload.value) throw new Error("No temporary session credential received.");
      if (this.closing) return;
      const peer = new RTCPeerConnection();
      this.peer = peer;
      peer.onconnectionstatechange = () => {
        if (this.closing) return;
        if (peer.connectionState === "failed" || peer.connectionState === "disconnected") {
          events.onNotice("Realtime connection interrupted. End the session and retry.");
          events.onStatus("error");
        }
      };
      const audio = document.createElement("audio");
      audio.autoplay = true;
      this.audio = audio;
      peer.ontrack = event => { audio.srcObject = event.streams[0]; void audio.play().catch(() => events.onNotice("Tap the screen to enable audio playback.")); };
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      if (this.closing) { stream.getTracks().forEach(track => track.stop()); return; }
      this.microphone = stream;
      for (const track of stream.getAudioTracks()) peer.addTrack(track, stream);
      const channel = peer.createDataChannel("oai-events");
      this.channel = channel;
      channel.onmessage = event => {
        try {
          const message = JSON.parse(String(event.data)) as { type?: string; error?: { message?: string } };
          if (message.type === "error") events.onNotice("Realtime provider reported an error.");
        } catch { /* Ignore unrecognized provider events. */ }
      };
      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      const answer = await fetch("https://api.openai.com/v1/realtime/calls", {
        method: "POST",
        headers: { Authorization: `Bearer ${payload.value}`, "Content-Type": "application/sdp" },
        body: offer.sdp
      });
      if (this.closing) return;
      if (!answer.ok) throw new Error("Voice connection could not be established.");
      await peer.setRemoteDescription({ type: "answer", sdp: await answer.text() });
      if (this.closing) return;
      events.onStatus("connected");
      events.onNotice("Live speech session connected. Synthetic conversation only; no clinical systems or tools are connected.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not connect.";
      this.disconnect();
      events.onStatus("error");
      events.onNotice(message);
      throw error;
    }
  }
  disconnect() {
    this.closing = true;
    this.channel?.close();
    this.channel = null;
    this.microphone?.getTracks().forEach(track => track.stop());
    this.microphone = null;
    this.peer?.close();
    this.peer = null;
    if (this.audio) { this.audio.pause(); this.audio.srcObject = null; this.audio = null; }
  }
}
