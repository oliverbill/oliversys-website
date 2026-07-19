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

## Blog post i18n rule (mandatory from 2026-07-19)

**All future blog posts ship in EN + PT-PT + ES together, in the same PR.** A PR that adds or substantively edits a blog post must include all three locale variants — the PR will not merge with only an EN file.

**Naming convention** for per-locale files:

```
client/src/content/blog/YYYY-MM-DD-slug.md       ← EN (canonical, required)
client/src/content/blog/YYYY-MM-DD-slug.pt.md     ← PT-PT (required for new/edited posts)
client/src/content/blog/YYYY-MM-DD-slug.es.md     ← ES (required for new/edited posts)
```

**Grandfathering:** existing EN-only posts (all posts before 2026-07-19) are exempt from backfill. However, any substantive edit to an existing post triggers the three-locale rule for that post.

**Edit trigger definition:** changing body text, title, description, or tags counts as a substantive edit. Fixing a typo or correcting a broken link does not.

The blog loader (`client/src/lib/blog.ts`) and `BlogPost.tsx` page support locale-aware article selection — pass the current locale from `useLocale()` to `getArticleBySlug()` to get the right variant. If no locale variant file exists, the EN canonical is served as fallback.

**Product names, proper nouns, and code snippets are never translated** — use the EN original in PT and ES files.

## Register notes

- PT: European register — "utilizador" not "usuário", "ecrã" not "tela", "gestão" not "gerência".
- ES: Castilian — "usted" on formal CTAs, "tú" for informal microcopy.

## AI-washing guardrail

Do not introduce phrases like "IA avanzada", "IA de última generación", "IA revolucionária" in translations. Replace with specific claims matching the English source.
