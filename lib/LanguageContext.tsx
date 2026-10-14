"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { translations, type Locale, type Dictionary } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  dict: Dictionary;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  // Each language has its own address ("/" English, "/he" Hebrew) and is
  // rendered on the server in that language, so search engines see real
  // text in both. Switching language is a normal link to the other address.
  const value = useMemo<LanguageContextValue>(() => {
    const go = (next: Locale) => {
      if (next === locale) return;
      window.location.href = (next === "he" ? "/he" : "/") + window.location.hash;
    };
    return {
      locale,
      dict: translations[locale],
      dir: locale === "he" ? "rtl" : "ltr",
      setLocale: go,
      toggleLocale: () => go(locale === "en" ? "he" : "en"),
    };
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
