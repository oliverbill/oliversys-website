/**
 * Forensic Ember home: an asymmetric deal-dossier narrative moves from exposure
 * to evidence to action, with ember used only for consequential signals.
 * i18n: all user-visible strings use useLocale().t.home.
 */
import { ArrowDown, ArrowRight, Check, FileSearch, Scale, ScanSearch } from "lucide-react";
import { Link } from "wouter";
import { BookCallLink } from "@/components/SiteLayout";
import { CallSection, CrossLink, EvidenceArtifact } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

const hero = "/oliversys-hero.webp";

export default function Home() {
  const { t, localePath: lp } = useLocale();
  const h = t.home;

  return (
    <>
      <section className="hero carbon-section">
        <img src={hero} alt="Abstract technology architecture under forensic review" className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow ember">{h.heroEyebrow}</p>
            <h1>
              {h.heroHeadline} <em>{h.heroHeadlineItalic}</em>
            </h1>
            <p className="hero-lede">
              {h.heroLede}
            </p>
            <div className="hero-actions">
              <BookCallLink context="an upcoming investment or M&A transaction" />
              <Link href={lp("/approach")} className="text-link">
                {h.heroCtaSecondary} <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="hero-dossier reveal delay-2">
            <div className="dossier-topline">
              <span>{h.dealFile}</span>
              <span>{h.euConfidential}</span>
            </div>
            <div className="dossier-signal"><span /></div>
            <div className="dossier-stats">
              <div><small>01</small><strong>{h.dossierEvidence}</strong><span>{h.dossierEvidenceSub}</span></div>
              <div><small>02</small><strong>{h.dossierConsequence}</strong><span>{h.dossierConsequenceSub}</span></div>
              <div><small>03</small><strong>{h.dossierDecision}</strong><span>{h.dossierDecisionSub}</span></div>
            </div>
          </div>
        </div>
        <a href="#exposure" className="scroll-cue" aria-label="Continue to the next section">
          <ArrowDown size={16} /> <span>{h.heroScrollCue}</span>
        </a>
      </section>

      <section className="exposure-section paper-section" id="exposure">
        <div className="container exposure-grid">
          <div className="section-heading">
            <p className="eyebrow">{h.exposureEyebrow}</p>
            <h2>{h.exposureH2}</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-paragraph">
              {h.exposureLead}
            </p>
            <p>
              {h.exposureBody}
            </p>
          </div>
          <div className="risk-ledger">
            {([
              [h.riskArchitecture, h.riskArchitectureCopy],
              [h.riskExecution, h.riskExecutionCopy],
              [h.riskExposure, h.riskExposureCopy],
            ] as [string, string][]).map(([label, copy], i) => (
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
            <span className="image-caption">{h.figCaption}</span>
          </div>
          <div className="visual-copy">
            <p className="eyebrow ember">{h.visualEyebrow}</p>
            <h2>{h.visualH2}</h2>
            <div className="outcome-list">
              {[h.outcome1, h.outcome2, h.outcome3, h.outcome4].map((item) => (
                <div key={item}><Check size={17} /><span>{item}</span></div>
              ))}
            </div>
            <Link href={lp("/approach")} className="text-link light">{h.examineApproach} <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="audience-section paper-section">
        <div className="container">
          <div className="section-kicker-row">
            <p className="eyebrow">{h.audienceEyebrow}</p>
            <span>{h.audienceKicker}</span>
          </div>
          <div className="audience-grid">
            <article>
              <span className="audience-icon"><ScanSearch /></span>
              <p className="eyebrow">{h.vcEyebrow}</p>
              <h3>{h.vcH3}</h3>
              <br/>
              <p>{h.vcBody}</p>
              <Link href={lp("/investors")}>{h.vcLink} <ArrowRight size={18} /></Link>
            </article>
            <article>
              <span className="audience-icon"><Scale /></span>
              <p className="eyebrow">{h.legalEyebrow}</p>
              <h3>{h.legalH3}</h3>
              <br/>
              <p>{h.legalBody}</p>
              <Link href={lp("/counsel")}>{h.legalLink} <ArrowRight size={18} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="evidence-section mist-section">
        <div className="container evidence-grid">
          <div className="evidence-copy">
            <p className="eyebrow">{h.outputEyebrow}</p>
            <h2>{h.outputH2}</h2>
            <br/>
            <p>{h.outputBody}</p>
            <ul>
              <li><FileSearch size={17} /> {h.outputItem1}</li>
              <li><FileSearch size={17} /> {h.outputItem2}</li>
              <li><FileSearch size={17} /> {h.outputItem3}</li>
              <li><FileSearch size={17} /> {h.outputItem4}</li>
            </ul>
          </div>
          <div className="evidence-image cut-corner">
            <EvidenceArtifact variant="network" />
            <div className="evidence-stamp">{h.evidenceStamp}</div>
          </div>
        </div>
      </section>

      <section className="cross-section carbon-section">
        <div className="container cross-grid">
          <CrossLink label={h.crossReviewLabel} title={h.crossReviewTitle} href={lp("/investors")} />
          <CrossLink label={h.crossPartnerLabel} title={h.crossPartnerTitle} href={lp("/counsel")} />
        </div>
      </section>

      <CallSection buttonText={h.callButton} />
    </>
  );
}
