/**
 * GitHealth Verified™ — pure NPI validation and normalization helpers.
 *
 * NPI format/check-digit validity is NOT licensure, credentialing, enrollment,
 * practice affiliation, or authorization to create a provider avatar.
 * This module performs no network calls and never marks a provider verified.
 */

export type NpiEntityType = 1 | 2;

export interface NpiRegistrySnapshot {
  npi: string;
  entityType: NpiEntityType;
  legalName: string;
  taxonomies: string[];
  practiceLocations: string[];
  fetchedAt: string;
  source: "CMS_NPPES";
  registryMatched: true;
  providerVerified: false;
}

export function normalizeNpi(value: string): string {
  return value.replace(/[\s-]/g, "");
}

/** NPI uses Luhn with the fixed 80840 prefix (24 is the equivalent offset). */
export function isValidNpi(value: string): boolean {
  const npi = normalizeNpi(value);
  if (!/^\d{10}$/.test(npi)) return false;

  const digits = `80840${npi}`;
  let sum = 0;
  let doubleDigit = false;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let digit = Number(digits[i]);
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    doubleDigit = !doubleDigit;
  }
  return sum % 10 === 0;
}

export function parseNpi(value: string): string {
  const npi = normalizeNpi(value);
  if (!isValidNpi(npi)) {
    throw new Error("INVALID_NPI");
  }
  return npi;
}
