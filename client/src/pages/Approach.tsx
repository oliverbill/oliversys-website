/**
 * Forensic Ember approach page: a sequential case-file rhythm makes methodology
 * concrete while keeping every technical activity tied to a transaction decision.
 */
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { CallSection, EvidenceArtifact, PageIntro } from "@/components/SharedSections";

const phases = [
  { n: "01", title: "Frame the decision", copy: "Align the scope to the transaction thesis, stage, material assumptions, and decision timeline. The review starts with what could change the deal—not a fixed checklist.", meta: "Thesis · Scope · Materiality" },
  { n: "02", title: "Inspect the evidence", copy: "Review the product, architecture, codebase, engineering practices, security posture, data dependencies, team, and roadmap in the depth the mandate requires.", meta: "Documents · Systems · Interviews" },
  { n: "03", title: "Challenge the plan", copy: "Test whether current technical reality can carry the commercial plan. Surface hidden dependencies, delivery constraints, and costs that may sit outside the model.", meta: "Capacity · Cost · Constraint" },
  { n: "04", title: "Resolve the deal view", copy: "Deliver direct findings, transaction implications, and a prioritized post-close view. Debrief the deal team so uncertainty is explicit and decisions remain accountable.", meta: "Findings · Implications · Priorities" },
];

export default function Approach() {
  return (
    <>
      <PageIntro eyebrow="Diligence approach" title="Follow the evidence to the" italic="decision." copy="A Brightember review is scoped around materiality. Technical depth is not the endpoint; a defensible transaction view is." index="01" artifact="approach" />
      <section className="approach-phases paper-section">
        <div className="container">
          <div className="section-kicker-row"><p className="eyebrow">A decision-led review</p><span>MANDATE / 04 PHASES</span></div>
          <div className="phase-list">
            {phases.map((phase) => (
              <article key={phase.n}>
                <span className="phase-number">{phase.n}</span>
                <h2>{phase.title}</h2>
                <p>{phase.copy}</p>
                <small>{phase.meta}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="scope-section mist-section">
        <div className="container scope-grid">
          <div className="scope-image cut-corner"><EvidenceArtifact variant="network" /><span>FIG. 02 / EVIDENCE PATH</span></div>
          <div>
            <p className="eyebrow">Review surface</p>
            <h2>Broad enough to catch the dependency. Focused enough to protect the timeline.</h2>
            <div className="scope-columns">
              {[
                "Product and roadmap realism", "Architecture and scalability", "Codebase and engineering health", "Security, data, and resilience", "Team capability and key-person risk", "Delivery model and technical cost", "Third-party and platform dependency", "Integration and post-close priorities",
              ].map((item) => <div key={item}><Check size={16} />{item}</div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="deliverable-section carbon-section">
        <div className="container deliverable-grid">
          <div><p className="eyebrow ember">What reaches the room</p><h2>A report built to be used, not filed.</h2></div>
          <div className="deliverable-list">
            <div><span>01</span><strong>Executive deal view</strong><p>The most consequential technical facts, stated directly.</p></div>
            <div><span>02</span><strong>Prioritized findings</strong><p>Severity, evidence, confidence, and practical implication.</p></div>
            <div><span>03</span><strong>Action path</strong><p>Questions for the deal, protections to consider, and post-close priorities.</p></div>
          </div>
          <Link href="/investors" className="text-link light">See the investor mandate <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CallSection context="a technical due diligence mandate" buttonText="Define the review scope" />
    </>
  );
}
