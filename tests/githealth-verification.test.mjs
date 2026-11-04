import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import ts from "typescript";

async function loadTypeScript(path) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
    reportDiagnostics: true,
  });
  const errors = (compiled.diagnostics ?? []).filter(
    (d) => d.category === ts.DiagnosticCategory.Error,
  );
  assert.equal(errors.length, 0, "TypeScript transpilation must succeed");
  return import(`data:text/javascript;base64,${Buffer.from(compiled.outputText).toString("base64")}`);
}

const npi = await loadTypeScript("../src/lib/githealth/npi.ts");
const verification = await loadTypeScript("../src/lib/githealth/providerVerification.ts");

test("NPI: known valid check digit, with optional formatting", () => {
  assert.equal(npi.isValidNpi("1234567893"), true);
  assert.equal(npi.isValidNpi("123-456-7893"), true);
  assert.equal(npi.parseNpi(" 123-456-7893 "), "1234567893");
});

test("NPI: reject incorrect check digit, malformed input, and non-digits", () => {
  for (const value of ["1234567890", "", "123456789", "12345678933", "ABCDEFGHIJ", "123456789x", "123_456_7893"]) {
    assert.equal(npi.isValidNpi(value), false, value);
    assert.throws(() => npi.parseNpi(value), /INVALID_NPI/);
  }
});

const approved = {
  nppesMatch: "passed",
  identityOwnership: "passed",
  activeLicense: "passed",
  practiceAffiliation: "passed",
  practiceAuthorization: "passed",
  avatarLikenessRights: "passed",
  avatarVoiceRights: "passed",
  namedClinicalOwner: "passed",
  approvedKnowledge: "passed",
  escalationCoverage: "passed",
  aiDisclosureEnabled: true,
};

test("activation: all independent evidence gates required", () => {
  assert.deepEqual(verification.evaluateNavigatorActivation(approved), {
    allowed: true,
    unmetGates: [],
  });
});

test("activation: NPPES match alone must never authorize publication", () => {
  const pending = Object.fromEntries(
    Object.keys(approved).map((key) => [key, key === "aiDisclosureEnabled" ? false : "pending"]),
  );
  pending.nppesMatch = "passed";
  const result = verification.evaluateNavigatorActivation(pending);
  assert.equal(result.allowed, false);
  assert.ok(result.unmetGates.includes("activeLicense"));
  assert.ok(result.unmetGates.includes("avatarVoiceRights"));
  assert.ok(result.unmetGates.includes("namedClinicalOwner"));
  assert.ok(result.unmetGates.includes("aiDisclosureEnabled"));
});

test("activation: any revoked/expired/failed evidence blocks publication", () => {
  for (const key of Object.keys(approved).filter((k) => k !== "aiDisclosureEnabled")) {
    for (const state of ["failed", "expired", "pending"]) {
      const result = verification.evaluateNavigatorActivation({ ...approved, [key]: state });
      assert.equal(result.allowed, false, `${key}: ${state}`);
      assert.ok(result.unmetGates.includes(key));
    }
  }
  assert.equal(verification.evaluateNavigatorActivation({ ...approved, aiDisclosureEnabled: false }).allowed, false);
});
