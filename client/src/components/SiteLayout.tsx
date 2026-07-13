/**
 * Forensic Ember shell: dossier-like navigation, sharp geometry, and the official
 * Evidence Aperture mark frame every page with institutional clarity.
 */
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
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
import { Input } from "@/components/ui/input";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"options" | "email-form">("options");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const resetDialogState = () => {
    setView("options");
    setEmail("");
    setError(null);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      resetDialogState();
    }
  };

  const handleEmailOptionClick = () => {
    setError(null);
    setEmail("");
    setView("email-form");
  };

  const handleBack = () => {
    setError(null);
    setEmail("");
    setView("options");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      setError("Please enter a valid email address.");
      const el = document.getElementById("review-email");
      if (el instanceof HTMLInputElement) el.focus();
      return;
    }
    const subject = encodeURIComponent(`Review request from ${trimmed}`);
    const body = encodeURIComponent(`Please reach me at ${trimmed}.\n\n`);
    window.location.href = `mailto:reviews@oliversoft.tech?subject=${subject}&body=${body}`;
    setOpen(false);
    resetDialogState();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
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
        {view === "options" ? (
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleEmailOptionClick}
              className="button-primary flex-1"
            >
              <Mail size={17} aria-hidden="true" />
              <span>Email me</span>
            </button>
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
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <label htmlFor="review-email" className="sr-only">
              Your email
            </label>
            <Input
              id="review-email"
              type="email"
              autoComplete="email"
              autoFocus
              placeholder="Your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError(null);
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby="review-email-error"
            />
            <p
              id="review-email-error"
              role="alert"
              aria-live="polite"
              className="min-h-5 text-sm text-destructive"
            >
              {error ?? ""}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleBack}
                className="button-small flex-1"
              >
                <span>Back</span>
              </button>
              <button type="submit" className="button-primary flex-1">
                <Mail size={17} aria-hidden="true" />
                <span>Send</span>
              </button>
            </div>
          </form>
        )}
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
