/**
 * Forensic Ember shell: dossier-like navigation, sharp geometry, and the official
 * Evidence Aperture mark frame every page with institutional clarity.
 * i18n: language switcher in top-right; <html lang> updated per locale.
 */
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, ChevronDown, Mail, Menu, MessageCircle, X } from "lucide-react";
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
import { useLocale, type Locale, localePath, stripLocalePath } from "@/i18n/LocaleContext";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Map locale to html lang attribute value.
const HTML_LANG: Record<Locale, string> = {
  en: "en",
  pt: "pt-PT",
  es: "es",
};

function Brand() {
  const { localePath: lp } = useLocale();
  return (
    <Link href={lp("/")} className="brand-lockup" aria-label="Oliversys home">
      <span className="brand-mark-wrap">
        <img
          src="/oliversys-logo.png"
          alt=""
          className="brand-mark"
        />
      </span>
      <span className="brand-wordmark">
        OLIVER<span>SYS</span>
      </span>
    </Link>
  );
}

export function BookCallLink({
  context: _context,
  className = "button-primary",
  children,
}: {
  context?: string;
  className?: string;
  children?: ReactNode;
}) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"options" | "email-form" | "success">("options");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const label = children ?? t.contact.triggerDefault;

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
      setError(t.contact.errorInvalidEmail);
      const el = document.getElementById("review-email");
      if (el instanceof HTMLInputElement) el.focus();
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/reviews@oliversys.tech",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Oliversys — contact form",
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
      setError(t.contact.errorSendFailed);
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
          <span>{label}</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.contact.dialogTitle}</DialogTitle>
          <DialogDescription>
            {t.contact.dialogDescription}
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
              <span>{t.contact.emailButton}</span>
            </button>
            <a
              href="https://wa.me/351931313593"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary flex-1"
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span>{t.contact.whatsappButton}</span>
            </a>
          </div>
        ) : view === "email-form" ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <label htmlFor="review-name" className="sr-only">
              {t.contact.nameLabel}
            </label>
            <Input
              id="review-name"
              type="text"
              autoComplete="name"
              autoFocus
              required
              placeholder={t.contact.namePlaceholder}
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={submitting}
            />
            <label htmlFor="review-company" className="sr-only">
              {t.contact.companyLabel}
            </label>
            <Input
              id="review-company"
              type="text"
              autoComplete="organization"
              required
              placeholder={t.contact.companyPlaceholder}
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              disabled={submitting}
            />
            <label htmlFor="review-email" className="sr-only">
              {t.contact.emailLabel}
            </label>
            <Input
              id="review-email"
              type="email"
              autoComplete="email"
              required
              placeholder={t.contact.emailPlaceholder}
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
              {t.contact.messageLabel}
            </label>
            <textarea
              id="review-message"
              placeholder={t.contact.messagePlaceholder}
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
                <span>{t.contact.backButton}</span>
              </button>
              <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting || undefined}
                className="button-primary flex-1"
              >
                <Mail size={17} aria-hidden="true" />
                <span>{submitting ? t.contact.sendingButton : t.contact.sendButton}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-sm">{t.contact.successMessage}</p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              className="button-primary"
            >
              <span>{t.contact.closeButton}</span>
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Items grouped under the "Services" dropdown in the desktop nav.
const SERVICE_BARE_PATHS = ["/services/spot-check/", "/services/red-flag-scan/", "/services/full-technical-due-diligence/"];

function ServicesDropdown({ barePath }: { barePath: string }) {
  const { t, localePath: lp } = useLocale();
  const [dropOpen, setDropOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = SERVICE_BARE_PATHS.includes(barePath) || SERVICE_BARE_PATHS.includes(barePath + "/");

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => setDropOpen(false), [barePath]);

  const serviceNavItems = [
    { label: t.nav.spotCheck, href: lp("/services/spot-check/") },
    { label: t.nav.redFlagScan, href: lp("/services/red-flag-scan/") },
    { label: t.nav.fullTDD, href: lp("/services/full-technical-due-diligence/") },
  ];

  return (
    <div ref={ref} className="nav-dropdown-wrap">
      <button
        type="button"
        className={`nav-dropdown-trigger${isActive ? " active" : ""}`}
        aria-haspopup="true"
        aria-expanded={dropOpen}
        onClick={() => setDropOpen((v) => !v)}
      >
        {t.nav.services}
        <ChevronDown size={12} aria-hidden="true" className={`nav-chevron${dropOpen ? " is-open" : ""}`} />
      </button>
      {dropOpen && (
        <div className="nav-dropdown-panel" role="menu">
          {serviceNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className={barePath === "/services/spot-check/" && item.href.includes("spot-check") ? "active" :
                         barePath === "/services/red-flag-scan/" && item.href.includes("red-flag") ? "active" :
                         barePath === "/services/full-technical-due-diligence/" && item.href.includes("full") ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/** Minimal language switcher — text labels only, no emoji flags. */
function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const [rawLocation] = useLocation();
  const barePath = stripLocalePath(rawLocation);

  const locales: Locale[] = ["en", "pt", "es"];

  return (
    <nav className="lang-switcher" aria-label={t.langSwitcher.label}>
      {locales.map((loc, i) => {
        const href = localePath(barePath, loc);
        const label = t.langSwitcher[loc];
        const isActive = locale === loc;
        return (
          <span key={loc}>
            {isActive ? (
              <span className="lang-active" aria-current="true">{label}</span>
            ) : (
              <Link href={href} className="lang-link">{label}</Link>
            )}
            {i < locales.length - 1 && <span className="lang-sep" aria-hidden="true"> | </span>}
          </span>
        );
      })}
    </nav>
  );
}

function Header() {
  const { t, localePath: lp } = useLocale();
  const [rawLocation] = useLocation();
  const barePath = stripLocalePath(rawLocation);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [rawLocation]);

  const flatNavItems = [
    { label: t.nav.approach, href: lp("/approach") },
    { label: t.nav.forInvestors, href: lp("/investors") },
    { label: t.nav.forCounsel, href: lp("/counsel") },
    { label: t.nav.about, href: lp("/about") },
    { label: t.nav.blog, href: lp("/blog") },
  ];

  const allMobileNavItems = [
    { label: t.nav.approach, href: lp("/approach") },
    { label: t.nav.forInvestors, href: lp("/investors") },
    { label: t.nav.forCounsel, href: lp("/counsel") },
    { label: t.nav.spotCheck, href: lp("/services/spot-check/") },
    { label: t.nav.redFlagScan, href: lp("/services/red-flag-scan/") },
    { label: t.nav.fullTDD, href: lp("/services/full-technical-due-diligence/") },
    { label: t.nav.about, href: lp("/about") },
    { label: t.nav.blog, href: lp("/blog") },
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label={t.nav.primaryNav}>
          {flatNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={barePath === item.href.replace(/^\/pt|^\/es/, "") ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <ServicesDropdown barePath={barePath} />
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <BookCallLink className="button-small">{t.nav.requestReview}</BookCallLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav className="container mobile-nav" aria-label={t.nav.mobileNav}>
          {allMobileNavItems.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <BookCallLink className="button-primary">{t.nav.openReview}</BookCallLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const { t, localePath: lp } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>{t.footer.tagline}</p>
        </div>
        <div>
          <p className="footer-label">{t.footer.scopeLabel}</p>
          <Link href={lp("/investors")}>{t.footer.ventureInvestors}</Link>
          <Link href={lp("/counsel")}>{t.footer.maCounsel}</Link>
          <Link href={lp("/approach")}>{t.footer.diligenceApproach}</Link>
          <Link href={lp("/services/spot-check/")}>{t.footer.spotCheckFull}</Link>
          <Link href={lp("/services/red-flag-scan/")}>{t.footer.redFlagScanFull}</Link>
          <Link href={lp("/services/full-technical-due-diligence/")}>{t.footer.fullTDDFull}</Link>
          <Link href={lp("/blog")}>{t.nav.blog}</Link>
        </div>
        <div>
          <p className="footer-label">{t.footer.contactLabel}</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.location}</p>
        </div>
      </div>
      <div className="container footer-base">
        <p>{t.footer.copyright.replace("{year}", String(year))}</p>
        <p>{t.footer.tagline2}</p>
      </div>
    </footer>
  );
}

/** Updates <html lang> and injects hreflang <link> tags on every route change. */
function HeadManager() {
  const { locale } = useLocale();
  const [rawLocation] = useLocation();
  const barePath = stripLocalePath(rawLocation);

  useEffect(() => {
    // Update html lang attribute.
    document.documentElement.lang = HTML_LANG[locale];

    // Remove existing hreflang links.
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    const base = "https://oliversys.tech";
    const hreflangs: Array<{ hreflang: string; href: string }> = [
      { hreflang: "x-default", href: `${base}${barePath}` },
      { hreflang: "en", href: `${base}${barePath}` },
      { hreflang: "pt-PT", href: `${base}/pt${barePath === "/" ? "/" : barePath}` },
      { hreflang: "es", href: `${base}/es${barePath === "/" ? "/" : barePath}` },
    ];

    const head = document.head;
    hreflangs.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", hreflang);
      link.href = href;
      head.appendChild(link);
    });
  }, [locale, barePath]);

  return null;
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [rawLocation] = useLocation();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [rawLocation]);

  return (
    <div className="site-shell">
      <HeadManager />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
