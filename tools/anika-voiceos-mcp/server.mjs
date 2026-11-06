#!/usr/bin/env node
/** Minimal MCP JSON-RPC stdio reference; local synthetic test data ONLY.
 * Not an authenticated MCP gateway, clinical product, or PHI-safe server.
 */
import readline from 'node:readline';
import { analyzeSyntheticVoice, verifySyntheticProvenance, TOOLS } from './core.mjs';

const PROTOCOL_VERSION = '2025-06-18';
const definitions = [
  {
    name: TOOLS[0],
    description: 'Analyze GENERATED numeric samples only; nonclinical quality and signal descriptors, no diagnoses.',
    inputSchema: {
      type: 'object', additionalProperties: false,
      required: ['context', 'sampleRate', 'samples'],
      properties: {
        context: { $ref: '#/$defs/context' },
        sampleRate: { type: 'integer', enum: [8000, 16000] },
        samples: { type: 'array', items: { type: 'number', minimum: -1, maximum: 1 }, minItems: 800, maxItems: 320000 },
      },
      $defs: { context: {
        type: 'object', additionalProperties: false,
        required: ['agentId', 'tenantId', 'classification', 'origin', 'purpose', 'capability'],
        properties: {
          agentId: { const: 'anika-voiceos-demo' },
          tenantId: { const: 'synthetic-lab' },
          classification: { const: 'SYNTHETIC' },
          origin: { const: 'GENERATED' },
          purpose: { const: 'nonclinical-signal-research' },
          capability: { const: TOOLS[0] },
        },
      } },
    },
  },
  {
    name: TOOLS[1],
    description: 'Recompute unsigned provenance hash; does not verify authorship or authenticity.',
    inputSchema: {
      type: 'object', additionalProperties: false,
      required: ['context', 'provenance'],
      properties: {
        context: {
          type: 'object', additionalProperties: false,
          required: ['agentId', 'tenantId', 'classification', 'origin', 'purpose', 'capability'],
          properties: {
            agentId: { const: 'anika-voiceos-demo' },
            tenantId: { const: 'synthetic-lab' },
            classification: { const: 'SYNTHETIC' },
            origin: { const: 'GENERATED' },
            purpose: { const: 'nonclinical-signal-research' },
            capability: { const: TOOLS[1] },
          },
        },
        provenance: { type: 'object' },
      },
    },
  },
];
export function handleRequest(request) {
  if (!request || request.jsonrpc !== '2.0' || typeof request.method !== 'string')
    return { jsonrpc: '2.0', id: request?.id ?? null, error: { code: -32600, message: 'Invalid Request' } };
  if (request.method.startsWith('notifications/')) return null;
  const id = request.id ?? null;
  const ok = result => ({ jsonrpc: '2.0', id, result });
  const err = (code, message) => ({ jsonrpc: '2.0', id, error: { code, message } });
  if (request.method === 'initialize') return ok({
    protocolVersion: PROTOCOL_VERSION, capabilities: { tools: { listChanged: false } },
    serverInfo: { name: 'anika-voiceos-synthetic-mcp', version: '0.1.0' },
    instructions: 'SYNTHETIC-ONLY; do not send PHI, real voice recordings, or clinical requests.',
  });
  if (request.method === 'ping') return ok({});
  if (request.method === 'tools/list') return ok({ tools: definitions });
  if (request.method === 'tools/call') {
    const { name, arguments: args } = request.params ?? {};
    if (!TOOLS.includes(name)) return err(-32602, 'Tool not allowed');
    try {
      const output = name === TOOLS[0] ? analyzeSyntheticVoice(args) : verifySyntheticProvenance(args);
      const denied = output.authorization?.decision !== 'ALLOW';
      const failed = output.quality?.pass === false || output.verification?.integrity === 'INVALID' ||
        output.verification?.integrity === 'HASH_MISMATCH';
      return ok({ content: [{ type: 'text', text: JSON.stringify(output) }], isError: denied || failed });
    } catch {
      return ok({ content: [{ type: 'text', text: JSON.stringify({ error: 'INVALID_SYNTHETIC_REQUEST' }) }], isError: true });
    }
  }
  return err(-32601, 'Method not found');
}
if (process.argv[1] && import.meta.url === new URL('file://' + process.argv[1]).href) {
  const lines = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  lines.on('line', line => {
    if (Buffer.byteLength(line, 'utf8') > 4_000_000) {
      process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: null,
        error: { code: -32600, message: 'Request too large' } }) + '\n');
      return;
    }
    let response;
    try { response = handleRequest(JSON.parse(line)); }
    catch { response = { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }; }
    if (response !== null) process.stdout.write(JSON.stringify(response) + '\n');
  });
}
