/**
 * i18n barrel — exports locale detection, context, and the useT() hook.
 *
 * URL-based locale detection:
 *   /        → EN (canonical)
 *   /pt/...  → PT-PT
 *   /es/...  → ES
 *
 * The locale prefix is stripped from the effective path before routing,
 * so all page components see /approach, /investors, etc. regardless of locale.
 */
export { LocaleProvider, useLocale } from "./LocaleContext";
export type { Locale } from "./LocaleContext";
