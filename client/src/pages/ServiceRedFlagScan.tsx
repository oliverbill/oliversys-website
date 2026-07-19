/**
 * Forensic Ember service page — Tier 1: Red Flag Scan.
 * Audience: seed / Series A investment committee members and principals arriving
 * from a spot-check report link. Answers what they get, how long it takes, who
 * must be available, and why to trust this over a friend-of-fund CTO on a call.
 * i18n: all user-visible strings use useLocale().t.tier1.
 */
import { ArrowRight, CheckCircle2, Clock, FileText, Users } from "lucide-react";
import { Link } from "wouter";
import { CallSection } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

export default function ServiceRedFlagScan() {
  const { t, localePath: lp } = useLocale();
  const s = t.tier1;

  const assessmentItems = [
    { label: s.skillRepoForensics, detail: s.skillRepoForensicsDetail },
    { label: s.skillTestPosture, detail: s.skillTestPostureDetail },
    { label: s.skillCodeQuality, detail: s.skillCodeQualityDetail },
    { label: s.skillMaintainability, detail: s.skillMaintainabilityDetail },
    { label: s.skillScalability, detail: s.skillScalabilityDetail },
    { label: s.skillAI, detail: s.skillAIDetail },
    { label: s.skillOps, detail: s.skillOpsDetail },
    { label: s.skillDeps, detail: s.skillDepsDetail },
    { label: s.skillCreds, detail: s.skillCredsDetail },
    { label: s.skillLicense, detail: s.skillLicenseDetail },
    { label: s.skillStatic, detail: s.skillStaticDetail },
  ];

  const timeline = [
    { day: s.tl0Day, action: s.tl0Action },
    { day: s.tl12Day, action: s.tl12Action },
    { day: s.tl3Day, action: s.tl3Action },
    { day: s.tl4Day, action: s.tl4Action },
    { day: s.tl5Day, action: s.tl5Action },
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
              <br/>
              <em>{s.heroH1em}<sup>*</sup></em>
            </h1>
          </div>
          <div className="intro-aside">
            <span className="section-index">TIER 1 / OLIVERSYS</span>
            <p>{s.heroAside}</p>
            <div className="hero-artifact risk-register" aria-hidden="true">
              <span className="artifact-label">RED FLAG SCAN / TIER 1</span>
              <div><i>P-01</i><b>PIPELINE</b><em>13 SKILLS</em></div>
              <div><i>P-02</i><b>INTERVIEW</b><em>90 MIN</em></div>
              <div><i>P-03</i><b>REPORT</b><em>SIGNED</em></div>
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
            <sup>*</sup>{s.slaNote}{" "}
            <u><b>{s.slaWarning}</b></u>
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
              <h1 style={{ fontSize: "clamp(2.3rem, 4.2vw, 4.7rem)", lineHeight: 1.05 }}>
                {s.whatH1}
              </h1>
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
            </div>
          </div>
        </div>
      </section>

      {/* What is assessed */}
      <section className="carbon-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow ember">{s.assessedEyebrow}</p>
            <span>{s.assessedKicker}</span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 26rem), 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {assessmentItems.map((item) => (
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
                    <strong style={{ display: "block", marginBottom: "0.25rem", fontSize: "1.35rem", letterSpacing: "0.03em" }}>
                      {item.label}
                    </strong>
                    <p style={{ margin: 0, fontSize: "1.31rem", opacity: 0.75, lineHeight: 1.6 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">{s.timelineEyebrow}</p>
            <span>
              <Clock size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }} />
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
            id="tier1-sla-note"
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
          <div className="section-kicker-row" style={{ color: "#000000" }}>
            <p className="eyebrow" style={{ color: "#000000" }}>{s.interviewsEyebrow}</p>
            <span style={{ color: "#000000" }}>
              <Users size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }} />
              {s.interviewsKicker}
            </span>
          </div>
          <div style={{ maxWidth: "40rem", marginTop: "2rem" }}>
            <ul className="check-list">
              <li style={{ color: "#000000", borderTopColor: "#00000022" }}>
                <CheckCircle2 />
                <span><strong style={{ color: "#000000" }}>{s.interviewRole}</strong> {s.interviewRoleDetail}</span>
              </li>
              <li style={{ color: "#000000", borderTopColor: "#00000022" }}>
                <CheckCircle2 />
                <span><strong style={{ color: "#000000" }}>{s.interviewFormat}</strong> {s.interviewFormatDetail}*</span>
              </li>
              <li style={{ color: "#000000", borderTopColor: "#00000022" }}>
                <CheckCircle2 />
                <span><strong style={{ color: "#000000" }}>{s.interviewDuration}</strong> {s.interviewDurationDetail}</span>
              </li>
            </ul>
            <sup>*</sup> {s.interviewFormatNote}
          </div>
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

      {/* When Tier 1 fits / When to upgrade */}
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
              <p className="eyebrow">{s.tier1FitsEyebrow}</p>
              <h2 style={{ marginBottom: "1rem" }}>{s.tier1FitsH2}</h2>
              <p style={{ lineHeight: 1.7 }}>{s.tier1FitsCopy}</p>
            </div>
            <div>
              <p className="eyebrow">{s.tier2EyebrowWhen}</p>
              <h2 style={{ marginBottom: "1rem" }}>{s.tier2H2When}</h2>
              <p style={{ lineHeight: 1.7 }}>{s.tier2CopyWhen}</p>
              <Link href={lp("/services/full-technical-due-diligence/")} className="text-link" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
                {s.seeTier2} <ArrowRight size={17} />
              </Link>
              <p style={{ marginTop: "0.75rem", fontSize: "1.1rem", opacity: 0.55, lineHeight: 1.6 }}>
                <sup>*</sup> {s.tier2SlaNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallSection
        title={s.callTitle}
        copy={s.callCopy}
        context="a Tier 1 Red Flag Scan"
        buttonText={s.callButton}
      />
    </div>
  );
}
