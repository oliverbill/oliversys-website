/**
 * Forensic Ember approach page: a sequential case-file rhythm makes methodology
 * concrete while keeping every technical activity tied to a transaction decision.
 * i18n: all user-visible strings use useLocale().t.approach.
 */
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { CallSection, EvidenceArtifact, PageIntro } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

export default function Approach() {
  const { t, localePath: lp } = useLocale();
  const a = t.approach;

  const phases = [
    { n: "01", title: a.phase1Title, copy: a.phase1Copy, meta: a.phase1Meta },
    { n: "02", title: a.phase2Title, copy: a.phase2Copy, meta: a.phase2Meta },
    { n: "03", title: a.phase3Title, copy: a.phase3Copy, meta: a.phase3Meta },
    { n: "04", title: a.phase4Title, copy: a.phase4Copy, meta: a.phase4Meta },
  ];

  const scopeItems = [
    a.scope1, a.scope2, a.scope3, a.scope4,
    a.scope5, a.scope6, a.scope7, a.scope8,
  ];

  return (
    <>
      <PageIntro eyebrow={a.introEyebrow} title={a.introTitle} italic={a.introItalic} copy={a.introCopy} index="01" artifact="approach" />
      <section className="approach-phases paper-section">
        <div className="container">
          <div className="section-kicker-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <p className="eyebrow">{a.phasesEyebrow}</p>
            <span>{a.phasesKicker}</span>
          </div>
          <div className="phase-list">
            {phases.map((phase) => (
              <article key={phase.n}>
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
          <div className="scope-image cut-corner">
            <EvidenceArtifact variant="network" />
            <span>{a.figCaption}</span>
          </div>
          <div>
            <p className="eyebrow">{a.scopeEyebrow}</p>
            <h2>{a.scopeH2}</h2>
            <div className="scope-columns">
              {scopeItems.map((item) => (
                <div key={item}><Check size={16} />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="deliverable-section carbon-section">
        <div className="container deliverable-grid">
          <div>
            <p className="eyebrow ember">{a.deliverableEyebrow}</p>
            <h2>{a.deliverableH2}</h2>
          </div>
          <div className="deliverable-list deliverable-list--no-icon">
            <div><strong>{a.del1Title}</strong><p>{a.del1Copy}</p></div>
            <div><strong>{a.del2Title}</strong><p>{a.del2Copy}</p></div>
            <div><strong>{a.del3Title}</strong><p>{a.del3Copy}</p></div>
          </div>
          <Link href={lp("/investors")} className="text-link light">{a.seeInvestorMandate} <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CallSection context="a Software Due Diligence mandate" buttonText={a.callButton} />
    </>
  );
}
