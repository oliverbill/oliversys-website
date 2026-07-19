/**
 * Locale context for the Oliversys site.
 *
 * Locale is derived from the URL prefix:
 *   /pt/...  → "pt"
 *   /es/...  → "es"
 *   anything else  → "en"
 *
 * The context exposes:
 *   locale   — current locale code ("en" | "pt" | "es")
 *   t        — typed translation object for the current locale
 *   localePath(path) — prepend locale prefix to an internal path
 *   stripLocalePath(path) — remove locale prefix from a raw path
 */
import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "wouter";
import { en } from "./en";
import { pt } from "./pt";
import { es } from "./es";
import type { Translations } from "./en";

export type Locale = "en" | "pt" | "es";

const LOCALES: Record<Locale, Translations> = { en, pt, es };

export const LOCALE_PREFIXES: Record<Locale, string> = {
  en: "",
  pt: "/pt",
  es: "/es",
};

/** Derive locale from a raw pathname. */
export function detectLocale(pathname: string): Locale {
  if (pathname === "/pt" || pathname.startsWith("/pt/")) return "pt";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "en";
}

/** Remove locale prefix from a pathname, returning the bare path. */
export function stripLocalePath(pathname: string): string {
  if (pathname === "/pt") return "/";
  if (pathname.startsWith("/pt/")) return pathname.slice(3) || "/";
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname;
}

/** Prepend locale prefix to a bare path (e.g. "/approach" → "/pt/approach"). */
export function localePath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  const prefix = LOCALE_PREFIXES[locale];
  if (path === "/") return prefix + "/";
  return prefix + path;
}

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  localePath: (path: string) => string;
  stripLocalePath: (path: string) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  t: en,
  localePath: (p) => p,
  stripLocalePath: (p) => p,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const locale = detectLocale(location);
  const t = LOCALES[locale];

  const value: LocaleContextValue = {
    locale,
    t,
    localePath: (path) => localePath(path, locale),
    stripLocalePath,
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
