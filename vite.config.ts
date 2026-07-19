import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Manus Debug Collector - Vite Plugin
// Writes browser logs directly to files, trimmed when exceeding size limit
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6); // Trim to 60% to avoid constant re-trimming

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
      return;
    }

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;

    // Keep newest lines (from end) that fit within 60% of maxSize
    const targetSize = TRIM_TARGET_BYTES;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > targetSize) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }

    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {
    /* ignore trim errors */
  }
}

function writeToLogFile(source: LogSource, entries: unknown[]) {
  if (entries.length === 0) return;

  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);

  // Format entries with timestamps
  const lines = entries.map((entry) => {
    const ts = new Date().toISOString();
    return `[${ts}] ${JSON.stringify(entry)}`;
  });

  // Append to log file
  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");

  // Trim if exceeds max size
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

/**
 * Vite plugin to collect browser debug logs
 * - POST /__manus__/logs: Browser sends logs, written directly to files
 * - Files: browserConsole.log, networkRequests.log, sessionReplay.log
 * - Auto-trimmed when exceeding 1MB (keeps newest entries)
 */
function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") {
        return html;
      }
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              src: "/__manus__/debug-collector.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      // POST /__manus__/logs: Browser sends logs (written directly to files)
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") {
          return next();
        }

        const handlePayload = (payload: any) => {
          // Write logs directly to files
          if (payload.consoleLogs?.length > 0) {
            writeToLogFile("browserConsole", payload.consoleLogs);
          }
          if (payload.networkRequests?.length > 0) {
            writeToLogFile("networkRequests", payload.networkRequests);
          }
          if (payload.sessionEvents?.length > 0) {
            writeToLogFile("sessionReplay", payload.sessionEvents);
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true }));
        };

        const reqBody = (req as { body?: unknown }).body;
        if (reqBody && typeof reqBody === "object") {
          try {
            handlePayload(reqBody);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
          return;
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            handlePayload(payload);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

function vitePluginStorageProxy(): Plugin {
  return {
    name: "manus-storage-proxy",
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/manus-storage", async (req, res) => {
        const key = req.url?.replace(/^\//, "");
        if (!key) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Missing storage key");
          return;
        }

        const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
        const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

        if (!forgeBaseUrl || !forgeKey) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Storage proxy not configured");
          return;
        }

        try {
          const forgeUrl = new URL("v1/storage/presign/get", forgeBaseUrl + "/");
          forgeUrl.searchParams.set("path", key);

          const forgeResp = await fetch(forgeUrl, {
            headers: { Authorization: `Bearer ${forgeKey}` },
          });

          if (!forgeResp.ok) {
            res.writeHead(502, { "Content-Type": "text/plain" });
            res.end("Storage backend error");
            return;
          }

          const { url } = (await forgeResp.json()) as { url: string };
          if (!url) {
            res.writeHead(502, { "Content-Type": "text/plain" });
            res.end("Empty signed URL");
            return;
          }

          res.writeHead(307, { Location: url, "Cache-Control": "no-store" });
          res.end();
        } catch {
          res.writeHead(502, { "Content-Type": "text/plain" });
          res.end("Storage proxy error");
        }
      });
    },
  };
}

// =============================================================================
// Sitemap generator — runs at build time, writes client/public/sitemap.xml.
// Reads .md frontmatter from client/src/content/blog/ to get slug + publishDate.
// =============================================================================

const BASE_URL = "https://oliversys.tech";

const STATIC_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/investors", priority: "0.9", changefreq: "monthly" },
  { path: "/counsel", priority: "0.9", changefreq: "monthly" },
  { path: "/approach", priority: "0.9", changefreq: "monthly" },
  { path: "/services/red-flag-scan/", priority: "0.9", changefreq: "monthly" },
  { path: "/services/full-technical-due-diligence/", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
];

function parseFrontmatterForSitemap(raw: string): { slug?: string; publishDate?: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const yaml = match[1];
  const canonicalMatch = yaml.match(/^canonicalTopic:\s*(.+)$/m);
  const dateMatch = yaml.match(/^publishDate:\s*(.+)$/m);
  return {
    slug: canonicalMatch?.[1]?.trim().replace(/^['"]|['"]$/g, ""),
    publishDate: dateMatch?.[1]?.trim().replace(/^['"]|['"]$/g, ""),
  };
}

function vitePluginSitemap(): Plugin {
  return {
    name: "brightember-sitemap",
    apply: "build",
    closeBundle() {
      const blogDir = path.join(PROJECT_ROOT, "client", "src", "content", "blog");
      const outDir = path.join(PROJECT_ROOT, "dist", "public");

      const today = new Date().toISOString().slice(0, 10);

      const articleEntries: string[] = [];
      if (fs.existsSync(blogDir)) {
        for (const file of fs.readdirSync(blogDir)) {
          if (!file.endsWith(".md")) continue;
          const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
          const { slug, publishDate } = parseFrontmatterForSitemap(raw);
          if (!slug) continue;
          const lastmod = publishDate ?? today;
          articleEntries.push(
            `  <url>\n    <loc>${BASE_URL}/blog/${slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
          );
        }
      }

      // Sort articles by lastmod descending
      articleEntries.sort((a, b) => {
        const da = a.match(/<lastmod>([^<]+)/)?.[1] ?? "";
        const db = b.match(/<lastmod>([^<]+)/)?.[1] ?? "";
        return db.localeCompare(da);
      });

      const staticEntries = STATIC_PAGES.map(
        (p) =>
          `  <url>\n    <loc>${BASE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
      );

      const xml = [
        `<?xml version="1.0" encoding="UTF-8"?>`,
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
        ...staticEntries,
        ...articleEntries,
        `</urlset>`,
      ].join("\n");

      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf-8");
      console.log(`[brightember-sitemap] wrote sitemap.xml (${staticEntries.length} pages + ${articleEntries.length} articles)`);
    },
  };
}

// =============================================================================
// RSS feed generator — runs at build time, writes dist/public/rss.xml.
// Includes all blog articles: title, description, publishDate, canonical URL.
// Uses the same frontmatter parser as the sitemap plugin.
// =============================================================================

interface RssArticle {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
}

function parseFrontmatterForRss(raw: string): RssArticle | null {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const yaml = match[1];

  const get = (key: string) =>
    yaml.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim().replace(/^['"]|['"]$/g, "") ?? "";

  const slug = get("canonicalTopic");
  const title = get("title");
  const description = get("description");
  const publishDate = get("publishDate");

  if (!slug || !title) return null;
  return { slug, title, description, publishDate };
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(dateStr: string): string {
  // dateStr is YYYY-MM-DD; publish at noon UTC to avoid off-by-one timezone issues
  const d = new Date(`${dateStr}T12:00:00Z`);
  return d.toUTCString();
}

function vitePluginRss(): Plugin {
  return {
    name: "brightember-rss",
    apply: "build",
    closeBundle() {
      const blogDir = path.join(PROJECT_ROOT, "client", "src", "content", "blog");
      const outDir = path.join(PROJECT_ROOT, "dist", "public");

      const articles: RssArticle[] = [];
      if (fs.existsSync(blogDir)) {
        for (const file of fs.readdirSync(blogDir)) {
          if (!file.endsWith(".md")) continue;
          const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
          const article = parseFrontmatterForRss(raw);
          if (article) articles.push(article);
        }
      }

      // Sort newest first
      articles.sort((a, b) => b.publishDate.localeCompare(a.publishDate));

      const buildDate = new Date().toUTCString();

      const items = articles.map((a) => {
        const link = `${BASE_URL}/blog/${escapeXml(a.slug)}`;
        const pubDate = a.publishDate ? toRfc822(a.publishDate) : buildDate;
        return [
          `    <item>`,
          `      <title>${escapeXml(a.title)}</title>`,
          `      <link>${link}</link>`,
          `      <description>${escapeXml(a.description)}</description>`,
          `      <pubDate>${pubDate}</pubDate>`,
          `      <guid isPermaLink="true">${link}</guid>`,
          `    </item>`,
        ].join("\n");
      });

      const xml = [
        `<?xml version="1.0" encoding="UTF-8"?>`,
        `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
        `  <channel>`,
        `    <title>Oliversys — Technical Due Diligence</title>`,
        `    <link>${BASE_URL}/blog</link>`,
        `    <description>Long-form writing on technical due diligence practice: what the tools catch, what the human catches, and what the Iberian deal market misses.</description>`,
        `    <language>en-gb</language>`,
        `    <lastBuildDate>${buildDate}</lastBuildDate>`,
        `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>`,
        ...items,
        `  </channel>`,
        `</rss>`,
      ].join("\n");

      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "rss.xml"), xml, "utf-8");
      console.log(`[brightember-rss] wrote rss.xml (${articles.length} articles)`);
    },
  };
}

/**
 * GitHub Pages SPA fallback — copies index.html → 404.html after each build.
 * GitHub Pages serves 404.html for any path it cannot resolve as a static file,
 * so the React router (wouter) handles the path client-side on direct URL access.
 *
 * Also writes explicit index.html files for deep-linked service pages so that
 * GitHub Pages returns HTTP 200 (not 404) when link-preview fetchers and SEO
 * crawlers hit these paths directly. Without these files, GitHub Pages can only
 * serve 404.html for unrecognised paths — technically correct content but a
 * wrong HTTP status for the two contractual service URLs.
 */
const SPA_STATIC_PATHS = [
  "services/red-flag-scan",
  "services/full-technical-due-diligence",
  // Locale-prefixed equivalents — GitHub Pages needs explicit index.html for HTTP 200.
  "pt",
  "pt/approach",
  "pt/investors",
  "pt/counsel",
  "pt/about",
  "pt/blog",
  "pt/services/red-flag-scan",
  "pt/services/full-technical-due-diligence",
  "es",
  "es/approach",
  "es/investors",
  "es/counsel",
  "es/about",
  "es/blog",
  "es/services/red-flag-scan",
  "es/services/full-technical-due-diligence",
];

function vitePluginGhPagesSpaFallback(): Plugin {
  return {
    name: "brightember-gh-pages-spa-fallback",
    apply: "build",
    closeBundle() {
      const outDir = path.join(PROJECT_ROOT, "dist", "public");
      const src = path.join(outDir, "index.html");

      if (!fs.existsSync(src)) return;

      // 1. Standard 404.html fallback for any unrecognised path.
      fs.copyFileSync(src, path.join(outDir, "404.html"));
      console.log("[brightember-gh-pages-spa-fallback] copied index.html → 404.html");

      // 2. Explicit index.html at each service path → HTTP 200 on direct access.
      for (const slug of SPA_STATIC_PATHS) {
        const dir = path.join(outDir, slug);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync(src, path.join(dir, "index.html"));
        console.log(`[brightember-gh-pages-spa-fallback] copied index.html → ${slug}/index.html`);
      }
    },
  };
}

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), vitePluginManusDebugCollector(), vitePluginStorageProxy(), vitePluginSitemap(), vitePluginRss(), vitePluginGhPagesSpaFallback()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
