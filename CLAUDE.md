# Oliversys site — agent instructions

## i18n rule (mandatory from 2026-07-19)

This site supports three locales: **EN** (canonical, `/`), **PT-PT** (`/pt/...`), and **ES** (`/es/...`).

Every PR that touches user-visible copy **must** update all three locales in the same PR. No English-only copy patches after this point.

Translation strings live in:
- `client/src/i18n/en.ts` — canonical English (source of truth for keys)
- `client/src/i18n/pt.ts` — European Portuguese (PT-PT register)
- `client/src/i18n/es.ts` — Castilian Spanish

All three files export an object that satisfies the `Translations` type from `en.ts`. TypeScript will error if a key is missing from `pt.ts` or `es.ts`.

Pages use the `useLocale()` hook from `@/i18n` to get `t` (current locale's translations) and `localePath(path)` (prefix-aware link helper).

**Product names that are never translated:** Tier 1, Tier 2, spot-check, Red Flag Scan, Full TDD.

**Service URLs that stay canonical:** `/services/red-flag-scan/` and `/services/full-technical-due-diligence/`. Both resolve from all three locales via the SPA router.

## Register notes

- PT: European register — "utilizador" not "usuário", "ecrã" not "tela", "gestão" not "gerência".
- ES: Castilian — "usted" on formal CTAs, "tú" for informal microcopy.

## AI-washing guardrail

Do not introduce phrases like "IA avanzada", "IA de última generación", "IA revolucionária" in translations. Replace with specific claims matching the English source.
