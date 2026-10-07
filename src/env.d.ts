/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@fontsource/geist-sans";

interface ImportMetaEnv {
  readonly PUBLIC_DISCORD_USER_ID: string;
  readonly UMAMI_SCRIPT_URL: string;
  readonly UMAMI_WEBSITE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
