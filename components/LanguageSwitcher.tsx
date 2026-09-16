"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { locale, setLocale, dict } = useLanguage();

  return (
    <div
      className={`flex items-center gap-2 text-sm ${className ?? ""}`}
      role="group"
      aria-label="Language / שפה"
    >
      <button
        type="button"
        onClick={() => setLocale("he")}
        aria-pressed={locale === "he"}
        className={`px-1.5 py-1 transition-colors duration-200 ${
          locale === "he" ? "font-medium text-ink" : "text-stone hover:text-ink"
        }`}
      >
        {dict.langSwitch.he}
      </button>
      <span className="text-stone-light" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-1.5 py-1 transition-colors duration-200 ${
          locale === "en" ? "font-medium text-ink" : "text-stone hover:text-ink"
        }`}
      >
        {dict.langSwitch.en}
      </button>
    </div>
  );
}
