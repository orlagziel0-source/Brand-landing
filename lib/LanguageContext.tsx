"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale, type Dictionary } from "./translations";

const STORAGE_KEY = "site-locale";

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

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server always renders Hebrew (the default). A blocking inline script in
  // <head> (see app/layout.tsx) sets the real dir/lang on <html> before
  // paint, so there is no layout flash. Here we sync the React copy to
  // whatever the visitor last chose, right after mount.
  const [locale, setLocaleState] = useState<Locale>("he");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "he" || stored === "en") {
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable (private mode, etc). Fall back silently.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore write failures
    }
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () =>
    setLocaleState((prev) => (prev === "he" ? "en" : "he"));

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dict: translations[locale],
      dir: locale === "he" ? "rtl" : "ltr",
      setLocale,
      toggleLocale,
    }),
    [locale]
  );

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
