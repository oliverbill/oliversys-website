/**
 * Forensic Ember blog article page.
 * Slug is read from wouter params. Article body is rendered from the
 * static blog collection — no fetch, no server, no markdown library dependency.
 */
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import { getArticleBySlug, formatDate, PILLAR_LABELS } from "@/lib/blog";
import { renderMarkdown } from "@/lib/renderMarkdown";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug ?? "");

  if (!article) {
    return <NotFound />;
  }

  const ogTitle = `${article.title} — Brightember`;
  const ogDesc = article.description;
  const canonicalUrl = `https://brightember.tech/blog/${article.slug}`;

  return (
    <>
      {/* OpenGraph meta injection via document.head — static site, no SSR */}
      <UpdateMeta
        title={ogTitle}
        description={ogDesc}
        canonical={canonicalUrl}
        publishDate={article.publishDate}
      />

      <section className="page-intro carbon-section">
        <div className="container">
          <Link href="/blog" className="blog-back-link">
            <ArrowLeft size={15} aria-hidden="true" /> Blog
          </Link>
          <div className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-pillar-tag">
                {PILLAR_LABELS[article.pillar]}
              </span>
              <time dateTime={article.publishDate}>
                {formatDate(article.publishDate)}
              </time>
            </div>
            <h1>{article.title}</h1>
            <p className="blog-post-lede">{article.description}</p>
          </div>
        </div>
      </section>

      <article className="blog-post paper-section" aria-label={article.title}>
        <div className="container blog-post-body">
          {renderMarkdown(article.body)}
          <footer className="blog-post-footer">
            <p>
              <em>
                I do senior-engineer tech due diligence for Iberian seed and
                Series A. If you have a repo on the desk this week,{" "}
                <a
                  href="https://www.linkedin.com/in/williamoliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DM me on LinkedIn
                </a>
                .
              </em>
            </p>
          </footer>
        </div>
      </article>

      <section className="blog-back-section paper-section">
        <div className="container">
          <Link href="/blog" className="text-link">
            <ArrowLeft size={15} /> All posts
          </Link>
        </div>
      </section>
    </>
  );
}

/** Injects/updates <title>, <meta> description, og tags, and canonical link. */
function UpdateMeta({
  title,
  description,
  canonical,
  publishDate,
}: {
  title: string;
  description: string;
  canonical: string;
  publishDate: string;
}) {
  // Run once per article render — safe for a static SPA.
  if (typeof document !== "undefined") {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", "article");
    setMeta("property", "article:published_time", publishDate);
    setLink("canonical", canonical);
  }
  return null;
}

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
