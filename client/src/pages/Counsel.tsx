/**
 * Forensic Ember counsel page: restrained partnership language positions technical
 * diligence as complementary to legal advice, never as a replacement for it.
 * i18n: all user-visible strings use useLocale().t.counsel.
 */
import { ArrowRight, BriefcaseBusiness, FileCheck2, MessagesSquare } from "lucide-react";
import { Link } from "wouter";
import { CallSection, PageIntro } from "@/components/SharedSections";
import { useLocale } from "@/i18n/LocaleContext";

export default function Counsel() {
  const { t, localePath: lp } = useLocale();
  const c = t.counsel;

  return (
    <>
      <PageIntro eyebrow={c.introEyebrow} title={c.introTitle} italic={c.introItalic} copy={c.introCopy} index="03" artifact="counsel" />
      <section className="counsel-value paper-section">
        <div className="container counsel-value-grid">
          <div>
            <p className="eyebrow">{c.partnerEyebrow}</p>
            <h2>{c.partnerH2}</h2>
            <br/>
            <p className="lead-paragraph">{c.partnerLead}</p>
          </div>
          <div className="partner-principles">
            <article><BriefcaseBusiness /><h3>{c.dealAwareTitle}</h3><p>{c.dealAwareCopy}</p></article>
            <article><FileCheck2 /><h3>{c.traceableTitle}</h3><p>{c.traceableCopy}</p></article>
            <article><MessagesSquare /><h3>{c.clearTitle}</h3><p>{c.clearCopy}</p></article>
          </div>
        </div>
      </section>
      <section className="engagement-section carbon-section">
        <div className="container">
          <div className="section-kicker-row light-row">
            <p className="eyebrow ember">{c.partnershipEyebrow}</p>
            <span>{c.partnershipKicker}</span>
          </div>
          <div className="engagement-flow">
            <div><h3>{c.alignTitle}</h3><p>{c.alignCopy}</p></div>
            <div><h3>{c.reviewTitle}</h3><p>{c.reviewCopy}</p></div>
            <div><h3>{c.connectTitle}</h3><p>{c.connectCopy}</p></div>
          </div>
        </div>
      </section>
      <section className="counsel-use mist-section">
        <div className="container counsel-use-grid">
          <div>
            <p className="eyebrow">{c.fitEyebrow}</p>
            <h2>{c.fitH2}</h2>
          </div>
          <div className="use-list">
            <p>{c.fit1}</p>
            <p>{c.fit2}</p>
            <p>{c.fit3}</p>
            <p>{c.fit4}</p>
          </div>
          <Link href={lp("/approach")} className="text-link">{c.reviewMethod} <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CallSection
        title={c.callTitle}
        copy={c.callCopy}
        context="a law-firm partnership or active M&A matter"
        buttonText={c.callButton}
      />
    </>
  );
}
