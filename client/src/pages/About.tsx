/**
 * Forensic Ember about page: the firm is presented through operating principles
 * and market focus, avoiding invented biographies, credentials, or social proof.
 */
import { CallSection, EvidenceArtifact, PageIntro } from "@/components/SharedSections";

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About Brightember" title="Independent by design. Accountable to the" italic="evidence." copy="Brightember is a Portugal-focused, Europe-wide Software Due Diligence practice for venture investors and M&A deal teams." index="04" artifact="about" />
      <section className="about-story paper-section">
        <div className="container about-story-grid">
          <div className="about-image cut-corner"><EvidenceArtifact variant="independence" /><span>BRIGHTEMBER / PORTUGAL · EUROPE</span></div>
          <div className="about-copy">
            <p className="eyebrow">Why Brightember</p>
            <h2>A clear technical view, built outside the momentum of the deal.</h2>
            <p className="lead-paragraph">Transactions create their own gravity. Conviction builds, timelines compress, and technical questions can be treated as confirmatory when they should remain investigative.</p>
            <p>Brightember exists to keep that work independent. We examine what supports the thesis, what may constrain it, and what the deal team should do with the evidence.</p>
          </div>
        </div>
      </section>
      <section className="principles-section carbon-section">
        <div className="container">
          <div className="section-kicker-row light-row"><p className="eyebrow ember">Operating principles</p><span>HOW WE WORK</span></div>
          <div className="principles-grid">
            <article><span>01</span><h3>Material over exhaustive</h3><p>Depth follows decision relevance. We do not confuse a longer checklist with a better diligence outcome.</p></article>
            <article><span>02</span><h3>Direct over dramatic</h3><p>Technical risk is stated clearly, with proportion and context. No fear-based findings. No false comfort.</p></article>
            <article><span>03</span><h3>Evidence over instinct</h3><p>Views are traceable to what was inspected, discussed, and tested—and explicit about remaining uncertainty.</p></article>
            <article><span>04</span><h3>Discreet by default</h3><p>Information access, communication, and reporting are treated with the care expected in a live transaction.</p></article>
          </div>
        </div>
      </section>
      <section className="position-section mist-section">
        <div className="container position-grid">
          <p className="eyebrow">Our position</p>
          <blockquote>“Know what the technology can carry—before the deal has to.”</blockquote>
          <p>Independent technical evidence for investors making early-stage decisions and counsel managing technology-led transactions across Europe.</p>
        </div>
      </section>
      <CallSection title="Start with the decision in front of you." context="a potential Brightember mandate" buttonText="Frame the decision" />
    </>
  );
}
