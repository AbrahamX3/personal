import { Projects, Skills, db } from "astro:db";

const stack = [
  "Next.js",
  "Astro",
  "TypeScript",
  "TailwindCSS",
  "Vercel",
  "AWS",
  "Prisma",
  "Drizzle ORM",
  "Neon",
  "Supabase",
  "Turso",
  "tRPC",
  "React Query",
  "PHP",
  "Playwright",
  "Expo",
];

export default async function seed() {
  await db.insert(Projects).values([
    {
      name: "Watchlist",
      url: "https://watchlist.abraham.lat",
    },
    {
      name: "Bagel Clicker",
      url: "https://bagel.abraham.lat",
    },
    {
      name: "Image Color Picker",
      url: "https://color.abraham.lat",
    },
  ]);

  await db.insert(Skills).values(stack.map((name) => ({ name })));
}
