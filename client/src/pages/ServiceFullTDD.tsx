/**
 * Forensic Ember service page — Tier 2: Full Technical Due Diligence.
 * Audience: Series B+ investment committee members, corporate M&A leads, and
 * search-fund entrepreneurs arriving from a spot-check report link or from the
 * Tier 1 page. Answers what they get, how long it takes, who must be available,
 * and why to trust this over a friend-of-fund CTO on a call.
 */
import { ArrowRight, CheckCircle2, Clock, FileText, Users } from "lucide-react";
import { Link } from "wouter";
import { CallSection } from "@/components/SharedSections";

const additionalAssessmentItems = [
  {
    label: "Full architecture trace",
    detail:
      "The analyst reads the architecture diagram against a specific critical path in the code — billing, authentication, or the deal thesis' load-bearing feature — verifies the diagram matches reality, and names the risks introduced by the delta. Written as a section of the report; not automatable.",
  },
  {
    label: "Artificial-intelligence claims verification",
    detail:
      "Every claim in the pitch about model behaviour is cross-referenced against actual model call sites in the code, evaluation harnesses if present, and interview responses. Distinguishes genuine AI products from AI-washing.",
  },
  {
    label: "Scalability + infrastructure cost analysis",
    detail:
      "Projected cost per unit of growth given the current architecture. Identifies the specific components that will need to change first as traffic grows 10x, and what those changes will cost in engineer-hours and cloud spending.",
  },
  {
    label: "Roadmap feasibility versus team capacity",
    detail:
      "Reads the target's stated roadmap against the current team's headcount, seniority mix, and hiring plan. Names the roadmap items that are structurally under-resourced.",
  },
  {
    label: "Interview synthesis (2–3 sessions)",
    detail:
      "Distilled into a written narrative that names who runs what, who owns what, and where the leverage points sit — not raw quotes.",
  },
  {
    label: "Investment Committee readout appendix",
    detail:
      "A 20-slide deck designed for a 1-hour Investment Committee call. Contains the recommendation, the top 5 findings ranked by transaction relevance, and a decision-ready set of buyer-facing next steps.",
  },
];

const timeline = [
  { day: "Day 0", action: "Repository access for every repo in scope, three-field intake form, pinned commit hashes captured." },
  { day: "Day 1–3", action: "Full 13-skill pipeline execution against all pinned commits. Multi-repo scope handled at orchestrator level; per-repository manifests roll up into one deliverable." },
  { day: "Day 4", action: "First interview: target's Founder or CTO (90 minutes — architecture + roadmap)." },
  { day: "Day 5", action: "Second interview: target's Head of Engineering or Tech Lead (60–90 minutes — day-to-day execution + hiring)." },
  { day: "Day 6", action: "Optional third interview: senior engineer or Head of Operations (60 minutes — deployment + reliability + on-call posture)." },
  { day: "Day 7–9", action: "Analyst validation: read all high-severity findings, all medium-severity findings, full architecture trace, all interview transcripts, AI-claims cross-reference. Estimated 8–12 hours of analyst time." },
  { day: "Day 10", action: "Report finalisation, Investment Committee readout deck preparation, analyst signature, delivery to fund." },
];

const interviews = [
  {
    role: "Founder or Chief Technology Officer",
    duration: "90 minutes",
    required: true,
    focus: "Architecture decisions, product roadmap, hiring plan.",
  },
  {
    role: "Head of Engineering or Tech Lead",
    duration: "60–90 minutes",
    required: true,
    focus: "Day-to-day execution, code review posture, testing culture.",
  },
  {
    role: "Senior engineer or Head of Operations",
    duration: "60 minutes",
    required: false,
    focus: "Deployment, on-call, incident history, reliability posture.",
  },
];

export default function ServiceFullTDD() {
  return (
    <>
      {/* Hero */}
      <section className="page-intro carbon-section">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow ember">Tier 2 · Technical Due Diligence</p>
            <h1>
              Full Technical Due Diligence — end-to-end scope,{" "}
              <em>delivered in 7–10 business days.</em>
            </h1>
          </div>
          <div className="intro-aside">
            <span className="section-index">TIER 2 / BRIGHTEMBER</span>
            <p>
              Multi-repository scope. Verified AI claims. Full architecture trace.
              Scalability and infrastructure cost analysis. Roadmap feasibility
              versus team capacity. A 30–40 page signed report plus a 20-slide
              Investment Committee readout deck — ready for a 1-hour decision meeting.
            </p>
            <div className="hero-artifact risk-register" aria-hidden="true">
              <span className="artifact-label">FULL TDD / TIER 2</span>
              <div><i>P-01</i><b>PIPELINE</b><em>MULTI-REPO</em></div>
              <div><i>P-02</i><b>INTERVIEWS</b><em>2–3 SESSIONS</em></div>
              <div><i>P-03</i><b>IC DECK</b><em>20 SLIDES</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* What this is */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">What this engagement is</p>
            <span>SCOPE / THREE PHASES</span>
          </div>
          <div className="mandate-grid" style={{ marginTop: "2rem" }}>
            <div>
              <h2>Full scope. Multi-repository. Decision-ready for the Investment Committee.</h2>
              <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
                The Full Technical Due Diligence engagement runs the 13-skill pipeline
                across every repository named in scope, pinned to specific commit hashes.
                Multi-repo findings roll up into a single deliverable at the orchestrator
                level. Two to three interviews across the target's engineering leadership
                are distilled into a named-narrative section of the report. A full
                architecture trace, AI-claims verification, and roadmap feasibility read
                complete the picture.
              </p>
            </div>
            <div className="deliverable-list">
              <div>
                <span>01</span>
                <strong>Phase 1 — Pipeline execution (day 1–3)</strong>
                <p>
                  The 13-skill analysis pipeline runs against every repository named in
                  scope, pinned to specific commit hashes. Every finding cites file, line,
                  and repository.
                </p>
              </div>
              <div>
                <span>02</span>
                <strong>Phase 2 — Interviews (day 4–6)</strong>
                <p>
                  Two to three interviews with the target's engineering leadership,
                  calibrated to what the pipeline surfaced. Transcripts synthesised into a
                  named-narrative section of the report.
                </p>
              </div>
              <div>
                <span>03</span>
                <strong>Phase 3 — Synthesis and IC readout (day 7–10)</strong>
                <p>
                  Full architecture trace, AI-claims cross-reference, scalability cost
                  analysis, roadmap feasibility read, and Investment Committee readout deck
                  preparation. Report signed and delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is assessed — Tier 2 additions */}
      <section className="carbon-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow ember">What is assessed</p>
            <span>EVERYTHING IN TIER 1, PLUS</span>
          </div>
          <p style={{ marginTop: "1.5rem", opacity: 0.7, maxWidth: "36rem" }}>
            Tier 2 covers the full 13-skill pipeline that runs in a Tier 1 Red Flag
            Scan, and adds the following dimensions:
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
            For the full list of base pipeline skills, see the{" "}
            <Link href="/services/red-flag-scan/" style={{ color: "#f05a32", textDecoration: "underline" }}>
              Tier 1 Red Flag Scan page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <p className="eyebrow">Estimated timeline</p>
            <span>
              <Clock
                size={14}
                style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }}
              />
              7–10 BUSINESS DAYS
            </span>
          </div>
          <div className="phase-list" style={{ marginTop: "2rem" }}>
            {timeline.map((row) => (
              <article key={row.day}>
                <span className="phase-number">{row.day}</span>
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
            Delivery: signed 30–40 page PDF report + Investment Committee readout deck (20 slides), delivered directly to the fund.
          </p>
        </div>
      </section>

      {/* Interviews */}
      <section className="mist-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">Interviews</p>
            <span>
              <Users
                size={14}
                style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }}
              />
              2–3 SESSIONS ACROSS ENGINEERING LEADERSHIP
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
                    {interview.required ? "REQUIRED" : "OPTIONAL"}
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
            All interviews are conducted by video call, recorded with each interviewee's consent for note-taking accuracy.
          </p>
        </div>
      </section>

      {/* Recommendation + Reproducibility */}
      <section className="carbon-section">
        <div className="container deliverable-grid" style={{ paddingBlock: "4rem" }}>
          <div>
            <p className="eyebrow ember">What reaches the fund</p>
            <h2>Report and IC deck — both signed by the analyst.</h2>
          </div>
          <div className="deliverable-list">
            <div>
              <span>
                <FileText size={18} aria-hidden="true" />
              </span>
              <strong>Go / Caution / No-Go recommendation</strong>
              <p>
                Distilled from the aggregate risk picture across every dimension,
                calibrated against the buyer's stated concern and the roadmap feasibility
                read. Presented as part of the Investment Committee readout appendix,
                ready for the fund's decision meeting.
              </p>
            </div>
            <div>
              <span>
                <FileText size={18} aria-hidden="true" />
              </span>
              <strong>Reproducible per-repository findings</strong>
              <p>
                Every report cites the rubric version, commit hash, and pinned target
                commit. Multi-repo engagements pin each repository separately; the
                orchestrator merges per-repo manifests into a single deliverable.
              </p>
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
              <p className="eyebrow">When Tier 2 fits</p>
              <h2 style={{ marginBottom: "1rem" }}>Series B and later — or when multiple technical claims must be simultaneously true.</h2>
              <p style={{ lineHeight: 1.7 }}>
                Series B and later rounds where the investment thesis depends on multiple
                technical claims being simultaneously true. Corporate mergers and
                acquisitions where a bad-fit target is a fund-wounding event. Search-fund
                acquisitions where the acquirer will be operating the code post-close.
                Deals with polyrepo scope or an AI claim that must be verifiably true.
                Investment committees that want a decision-ready readout deck delivered
                with the report.
              </p>
            </div>
            <div>
              <p className="eyebrow">Looking for a lighter-scope read?</p>
              <h2 style={{ marginBottom: "1rem" }}>Tier 1 covers a single repository in 3–5 business days.</h2>
              <p style={{ lineHeight: 1.7 }}>
                For seed and Series A decisions where the target is a single repository
                and the decision timeline is tight, the Red Flag Scan delivers a signed
                report and Go / Caution / No-Go recommendation at lower cost and faster
                turnaround.
              </p>
              <Link
                href="/services/red-flag-scan/"
                className="text-link"
                style={{ marginTop: "1.5rem", display: "inline-flex" }}
              >
                See Tier 1 — Red Flag Scan <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallSection
        title="Scope a Full Technical Due Diligence engagement."
        copy="Share the target, the number of repositories, the deal thesis, and the decision date. Brightember will confirm scope, intake, and turnaround within one business day."
        context="a Tier 2 Full Technical Due Diligence engagement"
        buttonText="Request an engagement scope call"
      />
    </>
  );
}
