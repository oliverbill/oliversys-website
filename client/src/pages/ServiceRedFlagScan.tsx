/**
 * Forensic Ember service page — Tier 1: Red Flag Scan.
 * Audience: seed / Series A investment committee members and principals arriving
 * from a spot-check report link. Answers what they get, how long it takes, who
 * must be available, and why to trust this over a friend-of-fund CTO on a call.
 */
import { ArrowRight, CheckCircle2, Clock, FileText, Users } from "lucide-react";
import { Link } from "wouter";
import { CallSection } from "@/components/SharedSections";

const assessmentItems = [
  {
    label: "Repository forensics",
    detail:
      "Bus factor, top contributor share, velocity trend, dormancy classification, per-file hotspot analysis.",
  },
  {
    label: "Test posture",
    detail:
      "Real coverage execution (not heuristic), assertion density, testing framework detection, continuous-integration configuration.",
  },
  {
    label: "Code quality",
    detail:
      "Total lines of code by language, aggregate complexity, TODO / FIXME density.",
  },
  {
    label: "Maintainability",
    detail:
      "Per-function cyclomatic complexity, code duplication ratio (via PMD Copy/Paste Detector), synthetic technical-debt ratio, top hotspot functions with file and line.",
  },
  {
    label: "Scalability posture",
    detail:
      "Presence of async patterns, distributed caching, queue systems, rate limiting, autoscaling configuration, load-test artefacts.",
  },
  {
    label: "Artificial-intelligence surface",
    detail:
      "Provider client libraries, model call sites, vector stores, prompt assets, evaluation harness presence — the single strongest signal separating real machine-learning products from AI-washing.",
  },
  {
    label: "Operational readiness",
    detail:
      "API specifications, deployment declarations, infrastructure-as-code, monitoring integration, health-check endpoints, runbooks.",
  },
  {
    label: "Dependency risk",
    detail:
      "Known vulnerabilities via Trivy against a database refreshed within 48 hours, misconfigurations, top exploitable items.",
  },
  {
    label: "Credentials",
    detail:
      "Pattern scan via Gitleaks + live verification via Trufflehog — verified positives distinguished from documentation examples and expired tokens.",
  },
  {
    label: "License exposure",
    detail:
      "Full Software Bill of Materials via Syft, classification into permissive / weak-copyleft / strong-copyleft / commercial-restricted categories, viral-license landmines named.",
  },
  {
    label: "Static analysis",
    detail:
      "Semgrep against a language-appropriate rule set plus custom regional rule packs.",
  },
];

const timeline = [
  { day: "Day 0", action: "Repository access, three-field intake form (investment thesis, primary concern, decision date), pinned commit hash captured." },
  { day: "Day 1–2", action: "Full 13-skill pipeline execution against pinned commit. Every finding cites file, line, and commit hash." },
  { day: "Day 3", action: "90-minute interview with target's Founder or Chief Technology Officer." },
  { day: "Day 4", action: "Analyst validation: read all high-severity findings, sample 20 % of medium-severity, read top 10 hotspot files by change frequency." },
  { day: "Day 5", action: "Report finalisation, analyst signature, delivery to fund." },
];

export default function ServiceRedFlagScan() {
  return (
    <div className="service-page">
      {/* Hero */}
      <section className="page-intro carbon-section">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow ember">Tier 1 · Technical Due Diligence</p>
            <h1>
              Red Flag Scan — a pre-transaction technical read,{" "}
              <em>delivered in 3–5 business days.</em>
            </h1>
          </div>
          <div className="intro-aside">
            <span className="section-index">TIER 1 / OLIVERSYS</span>
            <p>
              Single-repository, single-interview analysis. A 10–15 page signed
              report plus a Go / Caution / No-Go recommendation. Designed for
              seed and Series A investment committees where a red flag is a
              term-sheet-blocker.
            </p>
            <div className="hero-artifact risk-register" aria-hidden="true">
              <span className="artifact-label">RED FLAG SCAN / TIER 1</span>
              <div><i>P-01</i><b>PIPELINE</b><em>13 SKILLS</em></div>
              <div><i>P-02</i><b>INTERVIEW</b><em>90 MIN</em></div>
              <div><i>P-03</i><b>REPORT</b><em>SIGNED</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* What this is */}
      <section className="paper-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow">What this engagement is</p>
            <span>SCOPE / TWO PHASES</span>
          </div>
          <div className="mandate-grid" style={{ marginTop: "2rem" }}>
            <div>
              <h2>Single repository. Two phases. Every finding cites file and line.</h2>
              <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
                A Red Flag Scan runs a 13-skill analysis pipeline against the target
                repository pinned to a specific commit hash — so the report can be
                re-run and defended six months later. One 90-minute interview with
                the target's Founder or CTO follows, with questions calibrated to
                what the pipeline surfaced. The analyst signs the report: the human
                signature is part of the deliverable, not a formality.
              </p>
            </div>
            <div className="deliverable-list deliverable-list--no-icon">
              <div>
                <strong>Phase 1 — Pipeline execution (day 1–2)</strong>
                <p>
                  A 13-skill analysis pipeline runs against the target repository
                  pinned to a specific commit hash. Every finding cites file and
                  line. Findings are ranked by severity and linked to the buyer's
                  stated concern.
                </p>
              </div>
              <div>
                <strong>Phase 2 — Interview and synthesis (day 3–5)</strong>
                <p>
                  One 90-minute interview with the target's Founder or CTO, with
                  questions calibrated to what the pipeline surfaced. Interview
                  transcript is synthesised into a written narrative naming the
                  specific technical risks against the deal thesis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is assessed */}
      <section className="carbon-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row">
            <p className="eyebrow ember">What is assessed</p>
            <span>13-SKILL PIPELINE</span>
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
            <p className="eyebrow">Estimated timeline</p>
            <span>
              <Clock size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }} />
              3–5 BUSINESS DAYS
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
            Delivery: signed 10–15 page PDF report plus supporting artefacts, delivered directly to the fund.
          </p>
        </div>
      </section>

      {/* Interviews */}
      <section className="mist-section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <div className="section-kicker-row" style={{ color: "#000000" }}>
            <p className="eyebrow" style={{ color: "#000000" }}>Interviews</p>
            <span style={{ color: "#000000" }}>
              <Users size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "0.25rem" }} />
              ONE 90-MINUTE SESSION
            </span>
          </div>
          <div style={{ maxWidth: "40rem", marginTop: "2rem" }}>
            <ul className="check-list">
              <li style={{ color: "#000000", borderTopColor: "#00000022" }}>
                <CheckCircle2 />
                <span><strong style={{ color: "#000000" }}>Required role:</strong> target's Founder or Chief Technology Officer — someone who can speak to both architecture decisions and hiring plans.</span>
              </li>
              <li style={{ color: "#000000", borderTopColor: "#00000022" }}>
                <CheckCircle2 />
                <span><strong style={{ color: "#000000" }}>Format:</strong> video call, recorded with the interviewee's consent for note-taking accuracy.</span>
              </li>
              <li style={{ color: "#000000", borderTopColor: "#00000022" }}>
                <CheckCircle2 />
                <span><strong style={{ color: "#000000" }}>Duration:</strong> 90 minutes, with questions generated from pipeline findings — not a generic checklist.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendation + Reproducibility */}
      <section className="carbon-section">
        <div className="container deliverable-grid" style={{ paddingBlock: "4rem" }}>
          <div>
            <p className="eyebrow ember">What reaches the fund</p>
            <h2>A signed opinion — not a generated summary.</h2>
          </div>
          <div className="deliverable-list">
            <div>
              <span>
                <FileText size={18} aria-hidden="true" />
              </span>
              <strong>Go / Caution / No-Go recommendation</strong>
              <p>
                Distilled from the aggregate risk picture across all pipeline sections,
                calibrated against the buyer's stated concern. The recommendation is the
                analyst's opinion, informed by the pipeline — it is not automated.
              </p>
            </div>
            <div>
              <span>
                <FileText size={18} aria-hidden="true" />
              </span>
              <strong>Reproducible findings</strong>
              <p>
                Every report cites the exact rubric version, commit hash, and pinned
                target commit. Any finding can be regenerated six months later by
                checking out the engagement tag and re-running the pipeline. Foundation
                for defending the report against a challenge.
              </p>
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
              <p className="eyebrow">When Tier 1 fits</p>
              <h2 style={{ marginBottom: "1rem" }}>Seed to Series A decisions with a technical thesis.</h2>
              <p style={{ lineHeight: 1.7 }}>
                The investment thesis is technical — product-market fit is understood, but
                the buyer needs to know whether the code can deliver on the roadmap. The
                fund lacks a technical partner able to spend a week on the target's
                repository. The timeline is 5 business days or longer before the term
                sheet is signed.
              </p>
            </div>
            <div>
              <p className="eyebrow">When to consider Tier 2</p>
              <h2 style={{ marginBottom: "1rem" }}>Some situations call for broader scope.</h2>
              <p style={{ lineHeight: 1.7 }}>
                The target has multiple repositories. The deal thesis depends on a
                specific AI claim being verifiably true. The fund is committing
                significantly more capital. The deal is a corporate acquisition rather
                than a growth-equity round.
              </p>
              <Link href="/services/full-technical-due-diligence/" className="text-link" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
                See Tier 2 — Full Technical Due Diligence <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallSection
        title="Scope a Red Flag Scan."
        copy="Share the target, the thesis, and the decision date. Oliversys will confirm scope, intake, and turnaround within one business day."
        context="a Tier 1 Red Flag Scan"
        buttonText="Request an engagement scope call"
      />
    </div>
  );
}
