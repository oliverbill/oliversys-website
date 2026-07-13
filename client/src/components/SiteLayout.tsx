/**
 * Forensic Ember shell: dossier-like navigation, sharp geometry, and restrained
 * Evidence Ember accents frame every page with institutional clarity.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site, bookingHref } from "@/lib/site";

function Brand() {
  return (
    <Link href="/" className="brand-lockup" aria-label="Brightember home">
      <span className="brand-mark-wrap">
        <span className="brand-bracket left" />
        <span className="brand-ember-shard" />
        <span className="brand-bracket right" />
      </span>
      <span className="brand-wordmark">
        BRIGHT<span>EMBER</span>
      </span>
    </Link>
  );
}

export function BookCallLink({
  context,
  className = "button-primary",
  children = "Book a confidential call",
}: {
  context?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={bookingHref(context)} className={className}>
      <span>{children}</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <BookCallLink className="button-small">Open a review</BookCallLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {site.nav.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <BookCallLink className="button-primary">Open a confidential review</BookCallLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Independent technical evidence for consequential deal decisions.</p>
        </div>
        <div>
          <p className="footer-label">Scope</p>
          <Link href="/investors">Venture investors</Link>
          <Link href="/counsel">M&amp;A counsel</Link>
          <Link href="/approach">Diligence approach</Link>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.location}</p>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} Brightember. Confidential by default.</p>
        <p>Technical diligence · M&amp;A · Venture capital</p>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [children]);

  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
