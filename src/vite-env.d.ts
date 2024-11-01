/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_FILE: string;
  readonly VITE_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
