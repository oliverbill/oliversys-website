/**
 * Blog content collection — Forensic Ember editorial.
 *
 * Source of truth: client/src/content/blog/*.md
 * Loaded at build time via import.meta.glob + ?raw (Vite built-in).
 * Frontmatter parsed with a minimal YAML parser — no external dependency.
 *
 * To add or update an article:
 *   1. Edit (or add) the .md file in client/src/content/blog/
 *   2. Re-run `pnpm build` (or `pnpm dev`) — changes pick up automatically.
 */

export type Pillar = "educational" | "ai-washing" | "industry-take" | "behind-machine";

export interface Article {
  slug: string;
  title: string;
  description: string;
  pillar: Pillar;
  publishDate: string; // YYYY-MM-DD
  author: string;
  tags: string[];
  canonicalTopic?: string;
  linkedinCompanion?: string;
  /** Raw markdown body — rendered by BlogPost page */
  body: string;
}

export const PILLAR_LABELS: Record<Pillar, string> = {
  educational: "Educational",
  "ai-washing": "AI Washing",
  "industry-take": "Industry",
  "behind-machine": "Behind the Machine",
};

// ---------------------------------------------------------------------------
// Frontmatter parser
// Handles the exact YAML subset used in content/blog/*.md:
//   - string values (quoted or unquoted)
//   - inline arrays: [a, b, c]
//   - no nested objects
// ---------------------------------------------------------------------------

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }
  const yamlBlock = match[1];
  const content = match[2];

  const data: Record<string, unknown> = {};
  for (const line of yamlBlock.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    // Inline array: [a, b, c]
    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
      continue;
    }

    // Strip surrounding quotes
    val = val.replace(/^['"]|['"]$/g, "");
    data[key] = val;
  }

  return { data, content };
}

// ---------------------------------------------------------------------------
// Load all .md files from client/src/content/blog/ at build time.
// import.meta.glob with { as: "raw", eager: true } resolves at bundle time —
// zero runtime I/O, fully static, works on GitHub Pages.
// ---------------------------------------------------------------------------

const mdModules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function slugFromPath(path: string): string {
  // path looks like: ../content/blog/2026-05-26-bus-factor-in-5-minutes.md
  const filename = path.split("/").pop() ?? path;
  // Strip leading date prefix (YYYY-MM-DD-) if present
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function stripTrailingCta(content: string): string {
  // Articles end with "\n---\n\n*I do senior-engineer...*" — strip that footer
  // since BlogPost.tsx renders its own CTA section.
  const idx = content.lastIndexOf("\n---");
  if (idx === -1) return content.trim();
  return content.slice(0, idx).trim();
}

function parseArticle(path: string, raw: string): Article {
  const { data, content } = parseFrontmatter(raw);
  const slug = slugFromPath(path);

  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    pillar: (data.pillar as Pillar) ?? "educational",
    publishDate: String(data.publishDate ?? ""),
    author: String(data.author ?? "William"),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    canonicalTopic: data.canonicalTopic ? String(data.canonicalTopic) : undefined,
    linkedinCompanion: data.linkedinCompanion ? String(data.linkedinCompanion) : undefined,
    body: stripTrailingCta(content),
  };
}

/** Articles in reverse-chronological order (newest first) */
export const articles: Article[] = Object.entries(mdModules)
  .map(([path, raw]) => parseArticle(path, raw))
  .sort((a, b) => b.publishDate.localeCompare(a.publishDate));

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00Z");
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
