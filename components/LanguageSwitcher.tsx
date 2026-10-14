"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { locale, dict } = useLanguage();

  return (
    <div
      className={`flex items-center gap-2 text-sm ${className ?? ""}`}
      role="group"
      aria-label="Language / שפה"
    >
      <a
        href="/he"
        hrefLang="he"
        lang="he"
        aria-current={locale === "he" ? "true" : undefined}
        className={`px-1.5 py-1 transition-colors duration-200 ${
          locale === "he" ? "font-medium text-ink" : "text-stone hover:text-ink"
        }`}
      >
        {dict.langSwitch.he}
      </a>
      <span className="text-stone-light" aria-hidden="true">
        |
      </span>
      <a
        href="/"
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={`px-1.5 py-1 transition-colors duration-200 ${
          locale === "en" ? "font-medium text-ink" : "text-stone hover:text-ink"
        }`}
      >
        {dict.langSwitch.en}
      </a>
    </div>
  );
}
