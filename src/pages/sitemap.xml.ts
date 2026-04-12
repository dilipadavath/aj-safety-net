import type { APIRoute } from "astro";
import { birdProtectionTypes, safetyNetTypes, sportsNetTypes } from "@/lib/routes";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/why-us/",
  "/safety-nets/",
  "/bird-protection/",
  "/sports-nets/",
  "/contact/",
  "/gallery/",
  "/faq/",
];

const urls = [
  ...staticRoutes,
  ...safetyNetTypes.map((type) => `/safety-nets/${type}/`),
  ...birdProtectionTypes.map((type) => `/bird-protection/${type}/`),
  ...sportsNetTypes.map((type) => `/sports-nets/${type}/`),
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${new URL(url, SITE_URL).toString()}</loc>
</url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

