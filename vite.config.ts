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

const BASE_URL = "https://brightember.tech";

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

/**
 * GitHub Pages SPA fallback — copies index.html → 404.html after each build.
 * GitHub Pages serves 404.html for any path it cannot resolve as a static file,
 * so the React router (wouter) handles the path client-side on direct URL access.
 */
function vitePluginGhPagesSpaFallback(): Plugin {
  return {
    name: "brightember-gh-pages-spa-fallback",
    apply: "build",
    closeBundle() {
      const outDir = path.join(PROJECT_ROOT, "dist", "public");
      const src = path.join(outDir, "index.html");
      const dest = path.join(outDir, "404.html");
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log("[brightember-gh-pages-spa-fallback] copied index.html → 404.html");
      }
    },
  };
}

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), vitePluginManusDebugCollector(), vitePluginStorageProxy(), vitePluginSitemap(), vitePluginGhPagesSpaFallback()];

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
