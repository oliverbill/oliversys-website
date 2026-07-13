/**
 * Forensic Ember investor page: consequence-led language speaks to principals
 * personally carrying technical exposure without overstating certainty.
 */
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { CallSection, EvidenceArtifact, PageIntro } from "@/components/SharedSections";

export default function Investors() {
  return (
    <>
      <PageIntro eyebrow="For venture investors" title="Carry the thesis—not the technical" italic="blind spot." copy="Independent technical diligence for seed and Series A decisions when the investment team has no dedicated technical capability." index="02" artifact="investor" />
      <section className="investor-problem paper-section">
        <div className="container investor-problem-grid">
          <div>
            <p className="eyebrow">The moment of exposure</p>
            <h2>You can understand the company and still need a specialist view of what carries it.</h2>
          </div>
          <div className="problem-notes">
            <div><AlertTriangle size={18} /><p>The architecture looks credible, but its limits are difficult to test from the outside.</p></div>
            <div><AlertTriangle size={18} /><p>The roadmap supports the thesis, but delivery capacity and technical cost remain assumptions.</p></div>
            <div><AlertTriangle size={18} /><p>The team answers well, but the evidence has not been independently connected to deal consequence.</p></div>
          </div>
        </div>
      </section>
      <section className="mandate-section carbon-section">
        <div className="container mandate-grid">
          <div className="mandate-image cut-corner"><EvidenceArtifact variant="architecture" /></div>
          <div>
            <p className="eyebrow ember">The Brightember mandate</p>
            <h2>An extension of the deal team—without adding a permanent function.</h2>
            <p>We interrogate the technical assumptions beneath the investment case and turn the result into a decision-ready view.</p>
            <ul className="check-list">
              <li><CheckCircle2 />Independent challenge to management’s technical narrative</li>
              <li><CheckCircle2 />Clear distinction between fixable debt and structural risk</li>
              <li><CheckCircle2 />Implications for growth, cost, timing, and key dependencies</li>
              <li><CheckCircle2 />Direct debrief for the deal team and investment committee</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="questions-section mist-section">
        <div className="container">
          <div className="section-kicker-row"><p className="eyebrow">Questions the review should resolve</p><span>IC / TECHNICAL VIEW</span></div>
          <div className="question-grid">
            {[
              "Can the current platform support the next stage of the plan?", "What technical cost is missing from the model?", "Where does execution depend on one person or one provider?", "What should change in price, protection, or the first 100 days?",
            ].map((question, i) => <article key={question}><span>0{i + 1}</span><h3>{question}</h3></article>)}
          </div>
          <Link href="/approach" className="text-link">See how the evidence is built <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CallSection title="Bring technical conviction to the IC." copy="Share the thesis, the stage, and where uncertainty sits. Brightember will define a proportionate diligence scope around the decision." context="a seed or Series A investment" buttonText="Challenge the technical thesis" />
    </>
  );
}
