/**
 * Forensic Ember about page: the firm is presented through operating principles
 * and market focus, avoiding invented biographies, credentials, or social proof.
 * i18n: all user-visible strings use useLocale().t.about.
 */
import { CallSection, EvidenceArtifact, PageIntro } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

export default function About() {
  const { t } = useLocale();
  const a = t.about;

  return (
    <>
      <PageIntro eyebrow={a.introEyebrow} title={a.introTitle} italic={a.introItalic} copy={a.introCopy} index="04" artifact="about" />
      <section className="about-story paper-section">
        <div className="container about-story-grid">
          <div className="about-image cut-corner">
            <EvidenceArtifact variant="independence" />
            <span>{a.artifactSpan}</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{a.whyEyebrow}</p>
            <h2>{a.whyH2}</h2>
            <p className="lead-paragraph">{a.whyLead}</p>
            <br/>
            <p>{a.whyBody}</p>
          </div>
        </div>
      </section>
      <section className="principles-section carbon-section">
        <div className="container">
          <div className="section-kicker-row light-row">
            <p className="eyebrow ember">{a.principlesEyebrow}</p>
            <span>{a.principlesKicker}</span>
          </div>
          <div className="principles-grid">
            <article><h3>{a.p1Title}</h3><p>{a.p1Copy}</p></article>
            <article><h3>{a.p2Title}</h3><p>{a.p2Copy}</p></article>
            <article><h3>{a.p3Title}</h3><p>{a.p3Copy}</p></article>
            <article><h3>{a.p4Title}</h3><p>{a.p4Copy}</p></article>
          </div>
        </div>
      </section>
      <section className="position-section mist-section">
        <div className="container position-grid">
          <p className="eyebrow">{a.positionEyebrow}</p>
          <blockquote>{a.positionQuote}</blockquote>
          <p>{a.positionBody}</p>
        </div>
      </section>
      <CallSection
        title={a.callTitle}
        context="a potential Oliversys mandate"
        buttonText={a.callButton}
      />
    </>
  );
}
