/**
 * Forensic Ember service page — Tier 2: Full Technical Due Diligence.
 * Audience: Series B+ investment committee members, corporate M&A leads, and
 * search-fund entrepreneurs arriving from a spot-check report link or from the
 * Tier 1 page. Answers what they get, how long it takes, who must be available,
 * and why to trust this over a friend-of-fund CTO on a call.
 * i18n: all user-visible strings use useLocale().t.tier2.
 */
import { ArrowRight, CheckCircle2, Clock, FileText, Users } from "lucide-react";
import { Link } from "wouter";
import { CallSection } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

export default function ServiceFullTDD() {
  const { t, localePath: lp } = useLocale();
  const s = t.tier2;

  const additionalAssessmentItems = [
    { label: s.add1Title, detail: s.add1Detail },
    { label: s.add2Title, detail: s.add2Detail },
    { label: s.add3Title, detail: s.add3Detail },
    { label: s.add4Title, detail: s.add4Detail },
    { label: s.add5Title, detail: s.add5Detail },
    { label: s.add6Title, detail: s.add6Detail },
  ];

  const timeline = [
    { day: s.tl0Day, action: s.tl0Action },
    { day: s.tl13Day, action: s.tl13Action },
    { day: s.tl4Day, action: s.tl4Action },
    { day: s.tl5Day, action: s.tl5Action },
    { day: s.tl6Day, action: s.tl6Action },
    { day: s.tl79Day, action: s.tl79Action },
    { day: s.tl10Day, action: s.tl10Action },
  ];

  const interviews = [
    {
      role: s.interviewRole1,
      duration: "90 min",
      required: true,
      focus: s.interviewFocus1,
    },
    {
      role: s.interviewRole2,
      duration: "60\u201390 min",
      required: true,
      focus: s.interviewFocus2,
    },
    {
      role: s.interviewRole3,
      duration: "60 min",
      required: false,
      focus: s.interviewFocus3,
    },
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="page-intro carbon-section">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow ember">{s.heroEyebrow}</p>
            <h1 style={{ lineHeight: 1.15 }}>
              {s.heroH1}{" "}
              <em>{s.heroH1em}<sup>*</sup></em>
            </h1>
          </div>
          <div className="intro-aside">
            <span className="section-index">TIER 2 / OLIVERSYS</span>
            <p>{s.heroAside}</p>
            <div className="hero-artifact risk-register" aria-hidden="true">
              <span className="artifact-label">FULL TDD / TIER 2</span>
              <div><i>P-01</i><b>PIPELINE</b><em>MULTI-REPO</em></div>
              <div><i>P-02</i><b>INTERVIEWS</b><em>2–3 SESSIONS</em></div>
              <div><i>P-03</i><b>IC DECK</b><em>20 SLIDES</em></div>
            </div>
          </div>
        </div>
      </section>
      <section className="carbon-section" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <p
            style={{
              margin: 0,
              maxWidth: "60rem",
              fontSize: "0.8rem",
              opacity: 0.55,
              lineHeight: 1.6,
            }}
          >
            <sup>*</sup> {s.slaNote}{" "}
            <b>{s.slaWarning}</b>
          </p>
        </div>
      </section>

      {/* What this is */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">{s.whatEyebrow}</p>
            <span>{s.whatKicker}</span>
          </div>
          <div className="mandate-grid" style={{ marginTop: "2rem" }}>
            <div>
            <div>
              <h1 style={{ fontSize: "clamp(2.3rem, 4.2vw, 4.7rem)", lineHeight: 1.05 }}>
                {s.whatH1}
              </h1>
            </div>
              <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
                {s.whatBody}
              </p>
            </div>
            <div className="deliverable-list deliverable-list--no-icon">
              <div>
                <strong>{s.phase1Title}</strong>
                <p>{s.phase1Copy}</p>
              </div>
              <div>
                <strong>{s.phase2Title}</strong>
                <p>{s.phase2Copy}</p>
              </div>
              <div>
                <strong>{s.phase3Title}</strong>
                <p>{s.phase3Copy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is assessed — Tier 2 additions */}
      <section className="carbon-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow ember">{s.assessedEyebrow}</p>
            <span>{s.assessedKicker}</span>
          </div>
          <p style={{ marginTop: "1.5rem", opacity: 0.7, maxWidth: "36rem" }}>
            {s.assessedIntro}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 26rem), 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {additionalAssessmentItems.map((item) => (
              <div
                key={item.label}
                style={{
                  borderTop: "1px solid rgba(248,241,229,0.15)",
                  paddingTop: "1rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle2
                    size={17}
                    style={{ color: "#f05a32", flexShrink: 0, marginTop: "0.2rem" }}
                  />
                  <div>
                    <strong
                      style={{
                        display: "block",
                        marginBottom: "0.25rem",
                        fontSize: "1.35rem",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {item.label}
                    </strong>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "1.31rem",
                        opacity: 0.75,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "2rem", opacity: 0.6, fontSize: "1.31rem" }}>
            {s.seeFullList}{" "}
            <Link href={lp("/services/red-flag-scan/")} style={{ color: "#f05a32", textDecoration: "underline" }}>
              {s.seeTier1Link}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">{s.timelineEyebrow}</p>
            <span>
              <Clock
                size={14}
                style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }}
              />
              {s.timelineKicker}<sup>*</sup>
            </span>
          </div>
          <div className="phase-list" style={{ marginTop: "2rem" }}>
            {timeline.map((row) => (
              <article key={row.day}>
                <strong style={{ whiteSpace: "nowrap" }}>{row.day}</strong>
                <p style={{ margin: 0, lineHeight: 1.65 }}>{row.action}</p>
              </article>
            ))}
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
          <p
            id="tier2-sla-note"
            style={{
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              opacity: 0.55,
              lineHeight: 1.6,
            }}
          >
          </p>
        </div>
      </section>

      {/* Interviews */}
      <section className="mist-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">{s.interviewsEyebrow}</p>
            <span>
              <Users
                size={14}
                style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }}
              />
              {s.interviewsKicker}
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {interviews.map((interview) => (
              <div
                key={interview.role}
                style={{
                  background: "rgba(32,33,30,0.04)",
                  border: "1px solid rgba(32,33,30,0.12)",
                  borderRadius: "0.2rem",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem",
                    gap: "0.5rem",
                  }}
                >
                  <strong style={{ fontSize: "1.35rem" }}>{interview.role}</strong>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.06em",
                      background: interview.required ? "#f05a32" : "transparent",
                      color: interview.required ? "#fff" : "currentColor",
                      border: interview.required ? "none" : "1px solid currentColor",
                      opacity: interview.required ? 1 : 0.5,
                      padding: "0.15rem 0.5rem",
                      borderRadius: "0.1rem",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {interview.required ? s.roleRequired : s.roleOptional}
                  </span>
                </div>
                <p style={{ margin: "0 0 0.5rem", fontSize: "1.31rem", opacity: 0.75 }}>
                  {interview.focus}
                </p>
                <small style={{ opacity: 0.5, fontSize: "1.2rem" }}>{interview.duration}</small>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "1.31rem", opacity: 0.65 }}>
            {s.interviewNote}
          </p>
        </div>
      </section>

      {/* Recommendation + Reproducibility */}
      <section className="carbon-section">
        <div className="container deliverable-grid" style={{ paddingBlock: "4rem" }}>
          <div>
            <p className="eyebrow ember">{s.whatReachesEyebrow}</p>
            <h2>{s.whatReachesH2}</h2>
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
          </div>
        </div>
      </section>

      {/* When Tier 2 fits / Link back to Tier 1 */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 28rem), 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <p className="eyebrow">{s.tier2FitsEyebrow}</p>
              <h2 style={{ marginBottom: "1rem" }}>{s.tier2FitsH2}</h2>
              <p style={{ lineHeight: 1.7, fontSize: "1.31rem" }}>{s.tier2FitsCopy}</p>
            </div>
            <div>
              <p className="eyebrow">{s.lighterEyebrow}</p>
              <h2 style={{ marginBottom: "1rem" }}>{s.lighterH2}<sup>*</sup></h2>
              <p style={{ lineHeight: 1.7 }}>{s.lighterCopy}</p>
              <Link
                href={lp("/services/red-flag-scan/")}
                className="text-link"
                style={{ marginTop: "1.5rem", display: "inline-flex" }}
              >
                {s.seeTier1} <ArrowRight size={17} />
              </Link>
              <p style={{ marginTop: "0.75rem", fontSize: "1.1rem", opacity: 0.55, lineHeight: 1.6 }}>
                <sup>*</sup> {s.tier1SlaNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallSection
        title={s.callTitle}
        copy={s.callCopy}
        context="a Tier 2 Full Technical Due Diligence engagement"
        buttonText={s.callButton}
      />
    </div>
  );
}
