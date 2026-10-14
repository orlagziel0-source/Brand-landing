import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { LanguageProvider } from "@/lib/LanguageContext";
import { SITE_URL, OG_IMAGE_URL } from "@/lib/site";

// Hebrew version of the site, at "/he". It is rendered in Hebrew on the
// server, so Google indexes the Hebrew text and can show it for Hebrew searches.
const TITLE = "אור לגזיאל · ייעוץ חוויית עובד";
const DESCRIPTION =
  "חוויית עובד מקצה לקצה: תכנון, הפקה וביצוע. ליווי גמיש לעסקים שרוצים לעשות יותר עבור האנשים שלהם. שש שנות ניסיון בחברות כמו monday.com, Meta ו-AppsFlyer.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/he`,
    languages: { en: SITE_URL, he: `${SITE_URL}/he`, "x-default": SITE_URL },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/he`,
    siteName: "אור לגזיאל",
    type: "website",
    locale: "he_IL",
    alternateLocale: "en_US",
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, type: "image/jpeg", alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

export default function HomeHe() {
  return (
    <LanguageProvider locale="he">
      <HomePage />
    </LanguageProvider>
  );
}
