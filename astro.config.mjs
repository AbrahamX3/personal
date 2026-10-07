import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://abraham.lat",
  integrations: [react()],
  adapter: vercel(),
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
