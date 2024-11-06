import { getClient } from "@umami/api-client";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  const timezone = url.searchParams.get("timezone");

  if (!timezone) {
    return new Response("Missing timezone parameter", { status: 400 });
  }

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

  // @ts-expect-error - Umami wrongly typed the response
  const views = data?.pageviews[0].y as number;

  return new Response(JSON.stringify({ views }));
};
