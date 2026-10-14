import type { Metadata } from "next";
import { Manrope, Heebo } from "next/font/google";
import "./globals.css";
import { SITE_URL, OG_IMAGE_URL } from "@/lib/site";

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

// SEO: English lives at "/" (metadata below) and Hebrew at "/he"
// (metadata in app/he/page.tsx). Both point at each other with hreflang
// alternates so Google shows the right language to each searcher.
const SHARE_TITLE = "Or Lagziel · People Experience";
const SHARE_DESCRIPTION =
  "Flexible Employee Experience services. From focused projects to ongoing support, without the need for another full-time hire.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Or Lagziel · אור לגזיאל · People Experience",
  description:
    "Employee experience, start to finish: planned, produced and delivered. Flexible support for companies that want to do more for their people. Six years at global tech companies including monday.com, Meta and AppsFlyer.",
  alternates: {
    canonical: SITE_URL,
    languages: { en: SITE_URL, he: `${SITE_URL}/he`, "x-default": SITE_URL },
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

// Sets lang/dir on <html> from the address before first paint: "/he" is
// Hebrew (right-to-left), everything else English. Kept intentionally tiny.
const dirScript = `
(function () {
  var he = /^\\/he(\\/|$)/.test(window.location.pathname);
  document.documentElement.lang = he ? "he" : "en";
  document.documentElement.dir = he ? "rtl" : "ltr";
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
        <script dangerouslySetInnerHTML={{ __html: dirScript }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
