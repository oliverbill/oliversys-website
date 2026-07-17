/**
 * Forensic Ember shell: dossier-like navigation, sharp geometry, and the official
 * Evidence Aperture mark frame every page with institutional clarity.
 */
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
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
          src="/brightember-logo.png"
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
  const [view, setView] = useState<"options" | "email-form" | "success">("options");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const resetDialogState = () => {
    setView("options");
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
    setError(null);
    setSubmitting(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      resetDialogState();
    }
  };

  const handleEmailOptionClick = () => {
    setError(null);
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
    setView("email-form");
  };

  const handleBack = () => {
    setError(null);
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
    setView("options");
  };

  const handleClose = () => {
    setOpen(false);
    resetDialogState();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      const el = document.getElementById("review-email");
      if (el instanceof HTMLInputElement) el.focus();
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/reviews@oliversoft.tech",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Brightember — contact form",
            _captcha: "false",
            _template: "box",
            name: trimmedName,
            company: trimmedCompany,
            email: trimmedEmail,
            message: trimmedMessage || "(no message)",
          }),
        },
      );
      if (!response.ok) {
        throw new Error(`FormSubmit responded ${response.status}`);
      }
      const data = (await response.json()) as { success?: string };
      if (data.success !== "true") {
        throw new Error("FormSubmit did not confirm success");
      }
      setSubmitting(false);
      setView("success");
    } catch {
      setSubmitting(false);
      setError("Couldn't send — please try again or use WhatsApp.");
    }
  };

  useEffect(() => {
    if (view === "success") {
      closeButtonRef.current?.focus();
    }
  }, [view]);

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
        ) : view === "email-form" ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <label htmlFor="review-name" className="sr-only">
              Your name
            </label>
            <Input
              id="review-name"
              type="text"
              autoComplete="name"
              autoFocus
              required
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={submitting}
            />
            <label htmlFor="review-company" className="sr-only">
              Company name
            </label>
            <Input
              id="review-company"
              type="text"
              autoComplete="organization"
              required
              placeholder="Company name"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              disabled={submitting}
            />
            <label htmlFor="review-email" className="sr-only">
              Your email
            </label>
            <Input
              id="review-email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError(null);
              }}
              disabled={submitting}
              aria-invalid={error ? true : undefined}
              aria-describedby="review-email-error"
            />
            <label htmlFor="review-message" className="sr-only">
              Message (optional)
            </label>
            <textarea
              id="review-message"
              placeholder="Brief context (optional)"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              disabled={submitting}
              rows={3}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
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
                disabled={submitting}
                className="button-small flex-1"
              >
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting || undefined}
                className="button-primary flex-1"
              >
                <Mail size={17} aria-hidden="true" />
                <span>{submitting ? "Sending…" : "Send"}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-sm">Thanks — we'll be in touch.</p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              className="button-primary"
            >
              <span>Close</span>
            </button>
          </div>
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
          <Link href="/blog">Field notes</Link>
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
