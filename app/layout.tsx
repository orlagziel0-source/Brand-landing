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
// brief), so metadata is rendered once, for the default language (English).
// If per-language URLs are ever introduced (e.g. /he), move this into
// generateMetadata keyed off the route and add hreflang alternates.
const SITE_URL = "https://brand-landing-flax.vercel.app";

// Social sharing preview (English by default). The image lives in /public so
// it is served as a static, publicly accessible file. If the image is ever
// replaced, bump OG_IMAGE_VERSION so WhatsApp/LinkedIn treat it as a new URL
// instead of showing their cached copy.
const OG_IMAGE_VERSION = "1";
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg?v=${OG_IMAGE_VERSION}`;
const SHARE_TITLE = "Or Lagziel · People Experience";
const SHARE_DESCRIPTION =
  "Flexible Employee Experience services. From focused projects to ongoing support, without the need for another full-time hire.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Or Lagziel · אור לגזיאל · People Experience",
  description:
    "Flexible Employee Experience support for companies that want to do more for their people, without hiring another full-time role. Six years of experience at global tech companies including monday.com, Meta, and AppsFlyer.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Or Lagziel",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    images: [
      {
        url: OG_IMAGE_URL,
        secureUrl: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Or Lagziel — A personal experience for people. A smarter model for the business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

// Runs before React hydrates so the correct dir/lang (and therefore layout)
// is applied on first paint — avoids an RTL/LTR flash for returning
// visitors who previously switched language. Kept intentionally tiny.
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("site-locale");
    var locale = stored === "he" ? "he" : "en";
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
  } catch (e) {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
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
      lang="en"
      dir="ltr"
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
