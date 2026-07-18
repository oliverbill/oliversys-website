/**
 * Forensic Ember shared sections: decision-oriented copy, dossier numbering,
 * page-specific evidence artifacts, and restrained conversion prompts.
 */
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { BookCallLink } from "./SiteLayout";

type ArtifactVariant = "approach" | "investor" | "counsel" | "about";

export function PageIntro({
  eyebrow,
  title,
  italic,
  copy,
  index,
  artifact,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  copy: string;
  index: string;
  artifact: ArtifactVariant;
}) {
  return (
    <section className="page-intro carbon-section">
      <div className="container page-intro-grid">
        <div>
          <p className="eyebrow ember">{eyebrow}</p>
          <h1>{title} {italic && <em>{italic}</em>}</h1>
        </div>
        <div className="intro-aside">
          <span className="section-index">{index} / OLIVERSYS</span>
          <p>{copy}</p>
          <HeroArtifact variant={artifact} />
        </div>
      </div>
    </section>
  );
}

export function CallSection({
  title = "Put the target under review.",
  copy = "Bring us in before technical uncertainty becomes transaction exposure. We will scope the decision, the evidence required, and the right level of review.",
  context,
  buttonText = "Open a confidential review",
}: {
  title?: string;
  copy?: string;
  context?: string;
  buttonText?: string;
}) {
  return (
    <section className="call-section" id="contact">
      <div className="container call-grid">
        <div>
          <p className="eyebrow">Confidential introduction</p>
          <h2>{title}</h2>
        </div>
        <div className="call-copy">
          <p>{copy}</p>
          <BookCallLink context={context}>{buttonText}</BookCallLink>
          <span className="confidential-note"><ShieldCheck size={15} /> Scope and timing agreed around your deal.</span>
        </div>
      </div>
    </section>
  );
}

function HeroArtifact({ variant }: { variant: ArtifactVariant }) {
  if (variant === "approach") {
    return (
      <div className="hero-artifact phase-map" aria-hidden="true">
        <span className="artifact-label">REVIEW PATH / 04</span>
        {["FRAME", "INSPECT", "CHALLENGE", "RESOLVE"].map((item, index) => (
          <div key={item}><i>0{index + 1}</i><b>{item}</b><em /></div>
        ))}
      </div>
    );
  }
  if (variant === "investor") {
    return (
      <div className="hero-artifact risk-register" aria-hidden="true">
        <span className="artifact-label">IC RISK REGISTER / OPEN</span>
        <div><i>R-01</i><b>SCALABILITY</b><em>REVIEW</em></div>
        <div><i>R-02</i><b>DELIVERY</b><em>OPEN</em></div>
        <div><i>R-03</i><b>DEPENDENCY</b><em>TRACE</em></div>
      </div>
    );
  }
  if (variant === "counsel") {
    return (
      <div className="hero-artifact matter-file" aria-hidden="true">
        <span className="artifact-label">MATTER / TECHNICAL WORKSTREAM</span>
        <div className="matter-tabs"><span>COUNSEL</span><span>CLIENT</span><span>REVIEW</span></div>
        <div className="matter-trace"><i /><i /><i /></div>
        <small>CONTROLLED INTERFACE · CLEAR ESCALATION</small>
      </div>
    );
  }
  return (
    <div className="hero-artifact independence-seal" aria-hidden="true">
      <span className="artifact-label">INDEPENDENCE / EVIDENCE</span>
      <div><i>OUTSIDE</i><b>DEAL<br />MOMENTUM</b><em>ACCOUNTABLE</em></div>
    </div>
  );
}

export function EvidenceArtifact({ variant }: { variant: "architecture" | "network" | "independence" }) {
  const label = variant === "architecture" ? "ARCHITECTURE / MATERIAL TRACE" : variant === "network" ? "EVIDENCE / DECISION PATH" : "INDEPENDENT / REVIEW POSITION";
  const note = variant === "architecture" ? "LOAD-BEARING DEPENDENCY" : variant === "network" ? "FINDING → CONSEQUENCE" : "OUTSIDE THE MOMENTUM";
  return (
    <div className={`evidence-artifact ${variant}`} aria-hidden="true">
      <span className="artifact-label">{label}</span>
      <div className="artifact-plane plane-a" />
      <div className="artifact-plane plane-b" />
      <div className="artifact-plane plane-c" />
      <div className="artifact-trace"><i /><i /><i /></div>
      <div className="artifact-note">{note}</div>
    </div>
  );
}

export function CrossLink({ label, title, href }: { label: string; title: string; href: string }) {
  return (
    <Link href={href} className="cross-link">
      <span>{label}</span>
      <strong>{title}</strong>
      <ArrowRight size={22} />
    </Link>
  );
}
