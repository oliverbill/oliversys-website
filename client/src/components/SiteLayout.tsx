/**
 * Forensic Ember shell: dossier-like navigation, sharp geometry, and the official
 * Evidence Aperture mark frame every page with institutional clarity.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Mail, Menu, MessageCircle, X } from "lucide-react";
import { site } from "@/lib/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Brand() {
  return (
    <Link href="/" className="brand-lockup" aria-label="Brightember home">
      <span className="brand-mark-wrap">
        <img
          src="/manus-storage/brightember-evidence-aperture-web_21ec70d8.png"
          alt=""
          className="brand-mark"
        />
      </span>
      <span className="brand-wordmark">
        BRIGHT<span>EMBER</span>
      </span>
    </Link>
  );
}

export function BookCallLink({
  context: _context,
  className = "button-primary",
  children = "Book a confidential call",
}: {
  context?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={className}>
          <span>{children}</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reach the founder</DialogTitle>
          <DialogDescription>
            Choose the channel that suits you—both go directly to Brightember.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:reviews@oliversoft.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary flex-1"
          >
            <Mail size={17} aria-hidden="true" />
            <span>Email us</span>
          </a>
          <a
            href="https://wa.me/351931313593"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary flex-1"
          >
            <MessageCircle size={17} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
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
