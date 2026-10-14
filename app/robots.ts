import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// Tells search engines they may crawl the whole site and where the sitemap is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
