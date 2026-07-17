/**
 * Forensic Ember blog index — dossier-style article listing.
 * Articles are ordered newest first. Pillar tag gives quick scan of content type.
 */
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { articles, formatDate, PILLAR_LABELS } from "@/lib/blog";

export default function Blog() {
  return (
    <>
      <section className="page-intro carbon-section">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow ember">Blog</p>
            <h1>
              Technical evidence from the{" "}
              <em>review floor.</em>
            </h1>
          </div>
          <div className="intro-aside">
            <span className="section-index">05 / BRIGHTEMBER</span>
            <p>
              Long-form writing on technical due diligence practice: what the
              tools catch, what the human catches, and what the Iberian deal
              market misses.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-index paper-section">
        <div className="container blog-index-grid">
          <p className="blog-rss-link">
            <a href="/rss.xml" aria-label="Subscribe via RSS">Subscribe via RSS</a>
          </p>
          {articles.map((article) => (
            <article key={article.slug} className="blog-card">
              <Link href={`/blog/${article.slug}`} className="blog-card-inner">
                <header className="blog-card-header">
                  <span className="blog-pillar-tag">
                    {PILLAR_LABELS[article.pillar]}
                  </span>
                  <time className="blog-date" dateTime={article.publishDate}>
                    {formatDate(article.publishDate)}
                  </time>
                </header>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-desc">{article.description}</p>
                <span className="blog-card-cta">
                  Read <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
