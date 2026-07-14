/**
 * Forensic Ember home: an asymmetric deal-dossier narrative moves from exposure
 * to evidence to action, with ember used only for consequential signals.
 */
import { ArrowDown, ArrowRight, Check, FileSearch, Scale, ScanSearch } from "lucide-react";
import { Link } from "wouter";
import { BookCallLink } from "@/components/SiteLayout";
import { CallSection, CrossLink, EvidenceArtifact } from "@/components/SharedSections";

const hero = "/brightember-hero.webp";

export default function Home() {
  return (
    <>
      <section className="hero carbon-section">
        <img src={hero} alt="Abstract technology architecture under forensic review" className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow ember">Independent technical due diligence</p>
            <h1>
              Technical conviction before transaction <em>exposure.</em>
            </h1>
            <p className="hero-lede">
              Brightember turns complex product, engineering, and architecture evidence into a clear deal view—for European investors and M&amp;A counsel.
            </p>
            <div className="hero-actions">
              <BookCallLink context="an upcoming investment or M&A transaction" />
              <Link href="/approach" className="text-link">
                See how we review <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="hero-dossier reveal delay-2">
            <div className="dossier-topline">
              <span>DEAL FILE / TECH</span>
              <span>EU · CONFIDENTIAL</span>
            </div>
            <div className="dossier-signal"><span /></div>
            <div className="dossier-stats">
              <div><small>01</small><strong>Evidence</strong><span>Architecture · Product · Team</span></div>
              <div><small>02</small><strong>Consequence</strong><span>Risk · Cost · Deal impact</span></div>
              <div><small>03</small><strong>Decision</strong><span>Proceed · Price · Protect</span></div>
            </div>
          </div>
        </div>
        <a href="#exposure" className="scroll-cue" aria-label="Continue to the next section">
          <ArrowDown size={16} /> <span>Trace the evidence</span>
        </a>
      </section>

      <section className="exposure-section paper-section" id="exposure">
        <div className="container exposure-grid">
          <div className="section-heading">
            <p className="eyebrow">The exposure</p>
            <h2>The technical call often lands with the person least equipped to absorb a miss.</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-paragraph">
              When a fund has no in-house technical capability, product and engineering diligence can become an extra workstream for the deal team. The questions are specialized. The consequences are not.
            </p>
            <p>
              Brightember supplies an independent view that is specific enough for operators and clear enough for an investment committee or legal deal team.
            </p>
          </div>
          <div className="risk-ledger">
            {[
              ["Architecture", "Can the system support the next stage of growth?"],
              ["Execution", "Can this team deliver what the plan assumes?"],
              ["Exposure", "What risk, cost, or dependency transfers with the deal?"],
            ].map(([label, copy], i) => (
              <div key={label}>
                <span>0{i + 1}</span><strong>{label}</strong><p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="visual-argument carbon-section">
        <div className="container visual-grid">
          <div className="visual-frame cut-corner">
            <EvidenceArtifact variant="architecture" />
            <span className="image-caption">FIG. 01 · HIDDEN LOAD-BEARING RISK</span>
          </div>
          <div className="visual-copy">
            <p className="eyebrow ember">What Brightember changes</p>
            <h2>Not more technical detail. A better deal decision.</h2>
            <div className="outcome-list">
              {[
                "Translate findings into transaction consequence",
                "Separate manageable debt from structural risk",
                "Expose assumptions before they harden into valuation",
                "Give counsel and investors one defensible technical view",
              ].map((item) => (
                <div key={item}><Check size={17} /><span>{item}</span></div>
              ))}
            </div>
            <Link href="/approach" className="text-link light">Examine the approach <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="audience-section paper-section">
        <div className="container">
          <div className="section-kicker-row">
            <p className="eyebrow">Built around the deal team</p>
            <span>02 / WHO WE SUPPORT</span>
          </div>
          <div className="audience-grid">
            <article>
              <span className="audience-icon"><ScanSearch /></span>
              <p className="eyebrow">Venture capital</p>
              <h3>For principals and investment directors carrying the technical call.</h3>
              <p>Bring an independent technical view to seed and Series A decisions without building an internal diligence function.</p>
              <Link href="/investors">For investors <ArrowRight size={18} /></Link>
            </article>
            <article>
              <span className="audience-icon"><Scale /></span>
              <p className="eyebrow">Legal partnerships</p>
              <h3>For M&amp;A lawyers who need technical evidence to travel with the advice.</h3>
              <p>Add a specialist technical workstream that complements legal diligence and keeps findings connected to transaction risk.</p>
              <Link href="/counsel">For deal counsel <ArrowRight size={18} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="evidence-section mist-section">
        <div className="container evidence-grid">
          <div className="evidence-copy">
            <p className="eyebrow">The output</p>
            <h2>Evidence that travels from technical room to decision room.</h2>
            <p>Every review is organized around the decision in front of you. Findings are prioritized by severity, confidence, and deal relevance—not buried in a generic checklist.</p>
            <ul>
              <li><FileSearch size={17} /> Executive risk map</li>
              <li><FileSearch size={17} /> Evidence-backed findings</li>
              <li><FileSearch size={17} /> Transaction implications</li>
              <li><FileSearch size={17} /> Post-close priorities</li>
            </ul>
          </div>
          <div className="evidence-image cut-corner">
            <EvidenceArtifact variant="network" />
            <div className="evidence-stamp">DECISION-READY / TRACEABLE / DIRECT</div>
          </div>
        </div>
      </section>

      <section className="cross-section carbon-section">
        <div className="container cross-grid">
          <CrossLink label="Review mandate" title="For investors" href="/investors" />
          <CrossLink label="Partner mandate" title="For M&A counsel" href="/counsel" />
        </div>
      </section>

      <CallSection buttonText="Put the target under review" />
    </>
  );
}
