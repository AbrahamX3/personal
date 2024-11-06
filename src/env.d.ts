/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_DISCORD_USER_ID: string;
  readonly UMAMI_SCRIPT_URL: string;
  readonly UMAMI_WEBSITE_ID: string;
  readonly UMAMI_API_KEY: string;
  readonly UMAMI_API_CLIENT_ENDPOINT: string;
  readonly UMAMI_API_CLIENT_USER_ID: string;
  readonly UMAMI_API_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
