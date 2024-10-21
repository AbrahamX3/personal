/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly ASTRO_DB_REMOTE_URL: string;
    readonly ASTRO_DB_APP_TOKEN: string;

    readonly PUBLIC_DISCORD_USER_ID: string;

    readonly UMAMI_SCRIPT_URL: string;
    readonly UMAMI_WEBSITE_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}