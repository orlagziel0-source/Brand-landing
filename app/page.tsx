import HomePage from "@/components/HomePage";
import { LanguageProvider } from "@/lib/LanguageContext";

// English version of the site, at "/". The Hebrew version lives at "/he".
export default function Home() {
  return (
    <LanguageProvider locale="en">
      <HomePage />
    </LanguageProvider>
  );
}
