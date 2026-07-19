/**
 * Oliversys service page — 4h Spot Check (entry-point triage tier).
 * Audience: VCs and deal principals who need a same-day read on whether
 * a repository warrants a deeper Tier 1 or Tier 2 engagement.
 *
 * Scope is repository-only. No interviews. No architecture trace.
 * The deliverable is "Technical Evidence Readiness — Spot-Check":
 * a one-page report with an escalation signal, not a transaction recommendation.
 *
 * i18n: all user-visible strings use useLocale().t.spotCheck.
 */
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";
import { Link } from "wouter";
import { CallSection } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

export default function ServiceSpotCheck() {
  const { t, localePath: lp } = useLocale();
  const s = t.spotCheck;

  const inScopeItems = [
    { label: s.inScope1Label, detail: s.inScope1Detail },
    { label: s.inScope2Label, detail: s.inScope2Detail },
    { label: s.inScope3Label, detail: s.inScope3Detail },
    { label: s.inScope4Label, detail: s.inScope4Detail },
    { label: s.inScope5Label, detail: s.inScope5Detail },
  ];

  const outOfScopeItems = [
    s.outScope1,
    s.outScope2,
    s.outScope3,
    s.outScope4,
    s.outScope5,
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="page-intro carbon-section">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow ember">{s.heroEyebrow}</p>
            <h1 style={{ lineHeight: 1.15 }}>
              {s.heroH1a}
              <br />
              <em>{s.heroH1em}</em>
            </h1>
          </div>
          <div className="intro-aside">
            <span className="section-index">SPOT CHECK / OLIVERSYS</span>
            <p>{s.heroAside}</p>
            <div className="hero-artifact risk-register" aria-hidden="true">
              <span className="artifact-label">SPOT CHECK / ENTRY POINT</span>
              <div><i>S-01</i><b>REPOSITORY</b><em>SCAN</em></div>
              <div><i>S-02</i><b>REPORT</b><em>1 PAGE</em></div>
              <div><i>S-03</i><b>SIGNAL</b><em>ESCALATION</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Boundary — prominent, load-bearing */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "3rem" }}>
          <div
            style={{
              borderLeft: "3px solid #f05a32",
              paddingLeft: "1.5rem",
              maxWidth: "52rem",
            }}
          >
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>{s.boundaryEyebrow}</p>
            <p style={{ margin: 0, lineHeight: 1.7, fontSize: "1.3rem" }}>
              {s.boundaryBody}
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "1.15rem",
                opacity: 0.7,
                lineHeight: 1.65,
              }}
            >
              {s.boundaryNote}
            </p>
          </div>
        </div>
      </section>

      {/* What this is */}
      <section className="carbon-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow ember">{s.whatEyebrow}</p>
            <span>{s.whatKicker}</span>
          </div>
          <div className="mandate-grid" style={{ marginTop: "2rem" }}>
            <div>
              <h1 style={{ fontSize: "clamp(2.3rem, 4.2vw, 4.7rem)", lineHeight: 1.05 }}>
                {s.whatH1}
              </h1>
            </div>
            <div className="deliverable-list deliverable-list--no-icon">
              <div>
                <strong>{s.step1Title}</strong>
                <p>{s.step1Copy}</p>
              </div>
              <div>
                <strong>{s.step2Title}</strong>
                <p>{s.step2Copy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In scope */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">{s.inScopeEyebrow}</p>
            <span>{s.inScopeKicker}</span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 26rem), 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {inScopeItems.map((item) => (
              <div
                key={item.label}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.12)",
                  paddingTop: "1rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle2
                    size={17}
                    style={{ color: "#f05a32", flexShrink: 0, marginTop: "0.2rem" }}
                  />
                  <div>
                    <strong style={{ display: "block", marginBottom: "0.25rem", fontSize: "1.35rem", letterSpacing: "0.03em" }}>
                      {item.label}
                    </strong>
                    <p style={{ margin: 0, fontSize: "1.31rem", opacity: 0.7, lineHeight: 1.6 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Out of scope — explicit and prominent */}
      <section className="mist-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row" style={{ color: "#000000" }}>
            <p className="eyebrow" style={{ color: "#000000" }}>{s.outScopeEyebrow}</p>
            <span style={{ color: "#000000", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <AlertTriangle size={14} aria-hidden="true" />
              {s.outScopeKicker}
            </span>
          </div>
          <div style={{ maxWidth: "40rem", marginTop: "2rem" }}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {outOfScopeItems.map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#000000",
                    borderTop: "1px solid rgba(0,0,0,0.12)",
                    paddingTop: "0.75rem",
                    fontSize: "1.3rem",
                    lineHeight: 1.6,
                    paddingLeft: "1.5rem",
                    position: "relative",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.85rem",
                      color: "#888",
                      fontSize: "1rem",
                    }}
                  >
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.15rem",
                opacity: 0.65,
                lineHeight: 1.65,
                color: "#000000",
              }}
            >
              {s.outScopeNote}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="carbon-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow ember">{s.timelineEyebrow}</p>
            <span>
              <Clock size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }} />
              {s.timelineKicker}
            </span>
          </div>
          <div className="phase-list" style={{ marginTop: "2rem" }}>
            <article>
              <strong style={{ whiteSpace: "nowrap" }}>{s.tl0Day}</strong>
              <p style={{ margin: 0, lineHeight: 1.65 }}>{s.tl0Action}</p>
            </article>
            <article>
              <strong style={{ whiteSpace: "nowrap" }}>{s.tl1Day}</strong>
              <p style={{ margin: 0, lineHeight: 1.65 }}>{s.tl1Action}</p>
            </article>
            <article>
              <strong style={{ whiteSpace: "nowrap" }}>{s.tl2Day}</strong>
              <p style={{ margin: 0, lineHeight: 1.65 }}>{s.tl2Action}</p>
            </article>
            <article>
              <strong style={{ whiteSpace: "nowrap" }}>{s.tl3Day}</strong>
              <p style={{ margin: 0, lineHeight: 1.65 }}>{s.tl3Action}</p>
            </article>
          </div>
          <p
            style={{
              marginTop: "2rem",
              borderLeft: "3px solid #f05a32",
              paddingLeft: "1rem",
              fontWeight: 600,
            }}
          >
            {s.delivery}
          </p>
        </div>
      </section>

      {/* Deliverable */}
      <section className="paper-section">
        <div className="container deliverable-grid" style={{ paddingBlock: "4rem" }}>
          <div>
            <p className="eyebrow">{s.delEyebrow}</p>
            <h2>{s.delH2}</h2>
          </div>
          <div className="deliverable-list">
            <div>
              <span>
                <FileText size={18} aria-hidden="true" />
              </span>
              <strong>{s.del1Title}</strong>
              <p>{s.del1Copy}</p>
            </div>
            <div>
              <span>
                <FileText size={18} aria-hidden="true" />
              </span>
              <strong>{s.del2Title}</strong>
              <p>{s.del2Copy}</p>
            </div>
            <div>
              <span>
                <FileText size={18} aria-hidden="true" />
              </span>
              <strong>{s.del3Title}</strong>
              <p>{s.del3Copy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escalation ladder */}
      <section className="carbon-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 28rem), 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <p className="eyebrow ember">{s.whenFitsEyebrow}</p>
              <h2 style={{ marginBottom: "1rem" }}>{s.whenFitsH2}</h2>
              <p style={{ lineHeight: 1.7 }}>{s.whenFitsCopy}</p>
            </div>
            <div>
              <p className="eyebrow ember">{s.escalateEyebrow}</p>
              <h2 style={{ marginBottom: "1rem" }}>{s.escalateH2}</h2>
              <p style={{ lineHeight: 1.7 }}>{s.escalateCopy}</p>
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Link
                  href={lp("/services/red-flag-scan/")}
                  className="text-link"
                  style={{ display: "inline-flex" }}
                >
                  {s.seeRedFlagScan} <ArrowRight size={17} />
                </Link>
                <Link
                  href={lp("/services/full-technical-due-diligence/")}
                  className="text-link"
                  style={{ display: "inline-flex" }}
                >
                  {s.seeFullTDD} <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallSection
        title={s.callTitle}
        copy={s.callCopy}
        context="a 4h Spot Check"
        buttonText={s.callButton}
      />
    </div>
  );
}
