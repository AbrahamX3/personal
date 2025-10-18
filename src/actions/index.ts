import { getClient } from "@umami/api-client";
import { defineAction } from "astro:actions";

export const server = {
  getPageviews: defineAction({
    handler: async () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const client = getClient({
          apiEndpoint: import.meta.env.UMAMI_API_CLIENT_ENDPOINT,
          apiKey: import.meta.env.UMAMI_API_KEY,
          secret: import.meta.env.UMAMI_API_CLIENT_SECRET,
          userId: import.meta.env.UMAMI_API_CLIENT_USER_ID,
        });

        const currentYear = new Date().getFullYear();
        const startAt = new Date(`${currentYear}-01-01T00:00:00`).getTime();
        const endAt = new Date(`${currentYear}-12-31T23:59:59`).getTime();

        const { data } = await client.getWebsitePageviews(
          import.meta.env.UMAMI_WEBSITE_ID,
          {
            startAt,
            endAt,
            unit: "year",
            timezone,
          }
        );

        const views = data?.pageviews[0].y ?? 0;

        return {
          success: true,
          views,
        };
      } catch (error) {
        return {
          success: false,
          error: "Failed to fetch pageviews",
        };
      }
    },
  }),
};
