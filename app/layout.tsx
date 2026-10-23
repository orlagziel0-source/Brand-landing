import type { Metadata, Viewport } from "next";
import fs from "node:fs";
import path from "node:path";

const safeAreaCss = `
  :root{ color-scheme:light; padding-top:env(safe-area-inset-top,0px); padding-bottom:env(safe-area-inset-bottom,0px); }
  html{ scroll-padding-top:env(safe-area-inset-top,0px); background:#F2E8D8; }
`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brand-landing-flax.vercel.app"),
  title: "Or Lagziel · אור לגזיאל · People Experience",
  description:
    "Flexible Employee Experience support for companies that want to do more for their people, without hiring another full-time role. Six years of experience at global tech companies including monday.com, Meta, and AppsFlyer.",
  openGraph: {
    title: "Or Lagziel · אור לגזיאל · People Experience",
    description:
      "Flexible Employee Experience support for companies that want to do more for their people, without hiring another full-time role. Six years of experience at global tech companies including monday.com, Meta, and AppsFlyer.",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Or Lagziel · אור לגזיאל · People Experience",
    description: "Employee experience that connects business and people.",
  },
};

function readSitePart(filename: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "app", "_site", filename),
    "utf8"
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteCss = readSitePart("site.css");

  return (
    <html lang="he" dir="rtl" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Heebo:wght@400;500;700&display=swap"
        />
        <style dangerouslySetInnerHTML={{ __html: safeAreaCss }} />
        <style dangerouslySetInnerHTML={{ __html: siteCss }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
