/**
 * Fetch wrapper for the backend API.
 * Base URL comes from VITE_API_BASE_URL (falls back to localhost:4000 in dev).
 */
const baseUrl =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'http://localhost:4000';

export type ApiError = {
  ok: false;
  error: string;
  issues?: Array<{ field: string; message: string }>;
};

export type ApiResult<T> = { ok: true; data: T } | ApiError;

async function request<T>(
  method: 'GET' | 'POST',
  path: string,
  body?: unknown,
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });

    const json = (await res.json().catch(() => ({}))) as unknown;

    if (!res.ok) {
      const err = json as ApiError;
      return {
        ok: false,
        error: err?.error || `Request failed (${res.status})`,
        issues: err?.issues,
      };
    }

    return { ok: true, data: json as T };
  } catch (e) {
    return {
      ok: false,
      error:
        e instanceof Error
          ? `Network error: ${e.message}`
          : 'Network error',
    };
  }
}

export const api = {
  get: <T>(path: string) => request<T>('GET', path),
  post: <T>(path: string, body: unknown) => request<T>('POST', path, body),
};

export type ContactRequest = {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  preferredContact?: string;
  website?: string;
};

export async function submitContact(payload: ContactRequest) {
  return api.post<{ ok: true }>('/api/contact', payload);
}