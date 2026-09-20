import type { Metadata } from "next";
import { Manrope, Heebo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "700"],
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["400", "500", "700"],
});

// NOTE on SEO: the page is a single client-toggled bilingual route (per the
// brief), so metadata is rendered once, for the default language (Hebrew).
// If per-language URLs are ever introduced (e.g. /en), move this into
// generateMetadata keyed off the route and add hreflang alternates.
export const metadata: Metadata = {
  metadataBase: new URL("https://brand-landing-flax.vercel.app"),
  title: "אור לגזיאל · Or Lagziel · People Experience",
  description:
    "תכנון, בנייה והוצאה לפועל של תוכניות חוויית עובד, קהילות ואירועים בעלי מטרה. שש שנים של ניסיון בחברות טכנולוגיה גלובליות כמו monday.com, Meta ו-AppsFlyer.",
  openGraph: {
    title: "אור לגזיאל · Or Lagziel · People Experience",
    description:
      "תכנון, בנייה והוצאה לפועל של תוכניות חוויית עובד, קהילות ואירועים בעלי מטרה. שש שנים של ניסיון בחברות טכנולוגיה גלובליות כמו monday.com, Meta ו-AppsFlyer.",
    type: "website",
    locale: "he_IL",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "אור לגזיאל · Or Lagziel · People Experience",
    description:
      "Employee experience that connects business and people.",
  },
};

// Runs before React hydrates so the correct dir/lang (and therefore layout)
// is applied on first paint — avoids an RTL/LTR flash for returning
// visitors who previously switched language. Kept intentionally tiny.
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("site-locale");
    var locale = stored === "en" ? "en" : "he";
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
  } catch (e) {
    document.documentElement.lang = "he";
    document.documentElement.dir = "rtl";
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      suppressHydrationWarning
      className={`${manrope.variable} ${heebo.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
