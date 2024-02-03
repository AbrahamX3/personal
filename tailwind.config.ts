import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "260px",
      },
    },
  },
  plugins: [],
} satisfies Config;
