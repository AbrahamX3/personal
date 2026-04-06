import type { ImageMetadata } from "astro";

import logoHivio from "~/assets/projects/hivio.png";
import logoTermify from "~/assets/projects/termify.png";
import logoTess from "~/assets/projects/tess-track.png";

type TechnologyInfo = {
  name: string;
  url: string;
};

export const Technology = {
  NEXTJS: { name: "Next.js", url: "https://nextjs.org/" },
  ASTRO: { name: "Astro", url: "https://astro.build/" },
  TYPESCRIPT: { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  TAILWINDCSS: { name: "TailwindCSS", url: "https://tailwindcss.com/" },
  VERCEL: { name: "Vercel", url: "https://vercel.com/" },
  RAILWAY: { name: "Railway", url: "https://railway.app/" },
  AWS: { name: "AWS", url: "https://aws.amazon.com/" },
  PRISMA: { name: "Prisma", url: "https://prisma.io/" },
  DRIZZLEORM: { name: "Drizzle ORM", url: "https://orm.drizzle.team/" },
  SUPABASE: { name: "Supabase", url: "https://supabase.com/" },
  TURSO: { name: "Turso", url: "https://turso.tech/" },
  TRPC: { name: "tRPC", url: "https://trpc.io/" },
  REACTQUERY: { name: "React Query", url: "https://tanstack.com/query/latest" },
  PHP: { name: "PHP", url: "https://www.php.net/" },
  PLAYWRIGHT: { name: "Playwright", url: "https://playwright.dev/" },
  EXPO: { name: "Expo", url: "https://expo.dev/" },
  CSHARP: {
    name: "C#",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  POSTGRESQL: { name: "PostgreSQL", url: "https://www.postgresql.org/" },
  CLOUDFLARE: { name: "Cloudflare", url: "https://www.cloudflare.com/" },
  GITHUB: { name: "GitHub", url: "https://github.com/" },
  GIT: { name: "Git", url: "https://git-scm.com/" },
  DOTNET: { name: ".NET", url: "https://dotnet.microsoft.com/" },
  MYSQL: { name: "MySQL", url: "https://www.mysql.com/" },
  SENTRY: { name: "Sentry", url: "https://sentry.io/" },
  AXIOM: { name: "Axiom", url: "https://axiom.co" },
  DIGITALOCEAN: { name: "Digital Ocean", url: "https://www.digitalocean.com/" },
  JQUERY: { name: "jQuery", url: "https://jquery.com/" },
  N8N: { name: "n8n", url: "https://n8n.io/" },
  CONVEX: { name: "Convex", url: "https://www.convex.dev/" },
  SHADCNUI: { name: "Shadcn UI", url: "https://ui.shadcn.com/" },
  UMAMI: { name: "Umami", url: "https://umami.is/" },
  ORPC: { name: "oRPC", url: "https://orpc.unnoq.com/" },
  ZOD: { name: "Zod", url: "https://zod.dev/" },
  ZUSTAND: { name: "Zustand", url: "https://zustand-demo.pmnd.rs/" },
  HONO: { name: "Hono", url: "https://hono.dev/" },
  AISDK: { name: "AI SDK", url: "https://sdk.vercel.ai/" },
  BETTERAUTH: { name: "Better Auth", url: "https://better-auth.com/" },
  ELECTRON: { name: "Electron", url: "https://www.electronjs.org/" },
  VITE: { name: "Vite", url: "https://vitejs.dev/" },
  SQLLITE: { name: "SQLite", url: "https://www.sqlite.org/index.html" },
  DOKPLOY: { name: "Dokploy", url: "https://dokploy.com/" },
  COOLIFY: { name: "Coolify", url: "https://coolify.io/" },
  NEXTAUTH: { name: "NextAuth", url: "https://authjs.dev" },
  MCP: {
    name: "MCP",
    url: "https://modelcontextprotocol.io/docs/getting-started/intro",
  },
  MAPBOX: { name: "Mapbox", url: "https://www.mapbox.com/" },
} as const satisfies Record<string, TechnologyInfo>;

export type TechnologyEntry = (typeof Technology)[keyof typeof Technology];

export interface Project {
  name: string;
  description: string;
  logo?: ImageMetadata;
  private: boolean;
  url?: {
    repository?: string;
    website?: string;
  };
  technologies: ReadonlyArray<TechnologyEntry>;
}

export const PROJECTS: Project[] = [
  {
    name: "Termify",
    logo: logoTermify,
    private: false,
    description:
      "A local only application to organize your projects and seamlessly manage terminal processes—all with live resource monitoring, intuitive controls, and a clutter-free experience designed for productivity.",
    url: {
      repository: "https://github.com/AbrahamX3/termify",
      website: "https://termify.abraham.lat",
    },
    technologies: [
      Technology.TAILWINDCSS,
      Technology.TYPESCRIPT,
      Technology.VITE,
      Technology.DRIZZLEORM,
      Technology.SHADCNUI,
      Technology.ZOD,
      Technology.ZUSTAND,
      Technology.ELECTRON,
      Technology.SQLLITE,
      Technology.MCP,
      Technology.VERCEL,
    ],
  },
  {
    name: "Hivio",
    logo: logoHivio,
    private: false,
    description:
      "A minimal movie and series tracker designed for simplicity. Easily log everything you watch, seamlessly continue where you left off, and stay updated on upcoming releases, all in a intuitive dashboard.",
    url: {
      repository: "https://github.com/AbrahamX3/hivio",
      website: "https://hivio.vercel.app",
    },
    technologies: [
      Technology.TAILWINDCSS,
      Technology.TYPESCRIPT,
      Technology.NEXTJS,
      Technology.SHADCNUI,
      Technology.ZOD,
      Technology.ZUSTAND,
      Technology.CONVEX,
      Technology.BETTERAUTH,
      Technology.VERCEL,
    ],
  },
  {
    name: "TESS.track",
    logo: logoTess,
    private: true,
    description:
      "A comprehensive real-time GPS tracking solution featuring a mobile companion app and advanced digital forensic tools for analyzing Mexican cellular provider data and logs.",
    technologies: [
      Technology.TAILWINDCSS,
      Technology.TYPESCRIPT,
      Technology.NEXTJS,
      Technology.SHADCNUI,
      Technology.ZOD,
      Technology.ZUSTAND,
      Technology.TRPC,
      Technology.NEXTAUTH,
      Technology.SUPABASE,
      Technology.MAPBOX,
      Technology.REACTQUERY,
      Technology.AXIOM,
      Technology.SENTRY,
      Technology.VERCEL,
      Technology.AWS,
      Technology.PRISMA,
      Technology.EXPO,
      Technology.AISDK,
      Technology.DOKPLOY,
      Technology.N8N,
    ],
  },
];

export const ACTIVITIES = {
  GAMES: {
    description:
      "Love playing Overwatch, RDR2 from time to time, used to play Minecraft heavily and other games like CS:GO, Far Cry Series, and more.",
  },
  MEDIA: {
    description:
      "I watch any type of movies and shows, sometimes binging up to 7 shows at a time, a reason why <a href='https://hivio.vercel.app' target='_blank' rel='noopener noreferrer'>Hivio</a> project was created.",
  },
  MUSIC: {
    description:
      "I listen to any type of music, Check out my <a href='https://www.last.fm/user/cmelvard' target='_blank' rel='noopener noreferrer'>Last.fm</a> and <a href='https://open.spotify.com/user/reaker911x' target='_blank' rel='noopener noreferrer'>Spotify</a>!",
  },
  COFFEE: {
    description:
      "I love the whole process of making coffee, from the brewing to the tasting, and everything in between. My current setup is an Aeropress, using a Timemore C3 ESP Pro grinder, love natural processed coffees.",
  },
} as const satisfies Record<string, { description: string }>;
