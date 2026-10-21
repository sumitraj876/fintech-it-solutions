/**
 * Typed, validated access to public environment variables.
 * Only VITE_* variables are exposed to the browser — never put secrets here.
 *
 * Empty strings are treated as "not configured" so optional features
 * (Google Form URL, backend base URL) can be toggled without crashes.
 */
const raw = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '',
  contactFormUrl: import.meta.env.VITE_CONTACT_FORM_URL ?? '',
  contactFormEmbedUrl: import.meta.env.VITE_CONTACT_FORM_EMBED_URL ?? '',
  careersFormUrl: import.meta.env.VITE_CAREERS_FORM_URL ?? '',
};

function asOptionalUrl(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export const env = {
  apiBaseUrl: asOptionalUrl(raw.apiBaseUrl),
  contactFormUrl: asOptionalUrl(raw.contactFormUrl),
  contactFormEmbedUrl: asOptionalUrl(raw.contactFormEmbedUrl),
  careersFormUrl: asOptionalUrl(raw.careersFormUrl),
} as const;