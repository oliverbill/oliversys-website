/**
 * Forensic Ember blog index — dossier-style article listing.
 * Articles are ordered newest first. Pillar tag gives quick scan of content type.
 * i18n: nav/UI strings translated; article titles/descriptions stay in English.
 */
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { articles, formatDate, PILLAR_LABELS } from "@/lib/blog";
import { useLocale } from "@/i18n/LocaleContext";

export default function Blog() {
  const { t, localePath: lp } = useLocale();
  const b = t.blog;

  return (
    <>
      <section className="page-intro carbon-section">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow ember">{b.eyebrow}</p>
            <h1>
              Technical evidence from the{" "}
              <em>review floor.</em>
            </h1>
          </div>
          <div className="intro-aside">
            <span className="section-index">05 / OLIVERSYS</span>
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
          {articles.length === 0 && <p>{b.noPosts}</p>}
          {articles.map((article) => (
            <article key={article.slug} className="blog-card">
              <Link href={lp(`/blog/${article.slug}`)} className="blog-card-inner">
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
                  {b.readPost} <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
