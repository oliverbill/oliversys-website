/**
 * Forensic Ember investor page: consequence-led language speaks to principals
 * personally carrying technical exposure without overstating certainty.
 * i18n: all user-visible strings use useLocale().t.investors.
 */
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { CallSection, EvidenceArtifact, PageIntro } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

export default function Investors() {
  const { t, localePath: lp } = useLocale();
  const i = t.investors;

  return (
    <>
      <PageIntro eyebrow={i.introEyebrow} title={i.introTitle} italic={i.introItalic} copy={i.introCopy} index="02" artifact="investor" />
      <section className="investor-problem paper-section">
        <div className="container investor-problem-grid">
          <div>
            <p className="eyebrow">{i.problemEyebrow}</p>
            <h2>{i.problemH2}</h2>
          </div>
          <div className="problem-notes">
            <div><AlertTriangle size={18} /><p>{i.risk1}</p></div>
            <div><AlertTriangle size={18} /><p>{i.risk2}</p></div>
            <div><AlertTriangle size={18} /><p>{i.risk3}</p></div>
          </div>
        </div>
      </section>
      <section className="mandate-section carbon-section">
        <div className="container mandate-grid">
          <div className="mandate-image cut-corner"><EvidenceArtifact variant="architecture" /></div>
          <div>
            <p className="eyebrow ember">{i.mandateEyebrow}</p>
            <h2>{i.mandateH2}</h2>
            <br/>
            <p>{i.mandateBody}</p>
            <ul className="check-list">
              <li><CheckCircle2 />{i.check1}</li>
              <li><CheckCircle2 />{i.check2}</li>
              <li><CheckCircle2 />{i.check3}</li>
              <li><CheckCircle2 />{i.check4}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="questions-section mist-section">
        <div className="container">
          <div className="section-kicker-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <p className="eyebrow">{i.questionsEyebrow}</p>
            <span>{i.questionsKicker}</span>
          </div>
          <div className="question-grid">
            {[i.q1, i.q2, i.q3, i.q4].map((question) => (
              <article key={question}><h3>{question}</h3></article>
            ))}
          </div>
          <Link href={lp("/approach")} className="text-link">{i.seeEvidence} <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CallSection
        title={i.callTitle}
        copy={i.callCopy}
        context="a seed or Series A investment"
        buttonText={i.callButton}
      />
    </>
  );
}
