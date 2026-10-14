import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// One page in two languages: English at "/" and Hebrew at "/he".
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: SITE_URL, he: `${SITE_URL}/he` };
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${SITE_URL}/he`, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
  ];
}
