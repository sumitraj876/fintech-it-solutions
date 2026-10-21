/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_CONTACT_FORM_URL?: string;
  readonly VITE_CONTACT_FORM_EMBED_URL?: string;
  readonly VITE_CAREERS_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
