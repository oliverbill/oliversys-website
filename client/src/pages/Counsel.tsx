/**
 * Forensic Ember counsel page: restrained partnership language positions technical
 * diligence as complementary to legal advice, never as a replacement for it.
 */
import { ArrowRight, BriefcaseBusiness, FileCheck2, MessagesSquare } from "lucide-react";
import { Link } from "wouter";
import { CallSection, PageIntro } from "@/components/SharedSections";

export default function Counsel() {
  return (
    <>
      <PageIntro eyebrow="For M&A counsel" title="A technical workstream that strengthens the" italic="deal team." copy="Oliversys partners with law firms to surface technical risk, connect it to transaction consequence, and keep the workstream clear for counsel and client." index="03" artifact="counsel" />
      <section className="counsel-value paper-section">
        <div className="container counsel-value-grid">
          <div><p className="eyebrow">A specialist partner</p><h2>Technical evidence that complements legal diligence.</h2><p className="lead-paragraph">Software, infrastructure, data, and engineering practices can create obligations and exposure that do not fit neatly inside a legal checklist.</p></div>
          <div className="partner-principles">
            <article><BriefcaseBusiness /><h3>Deal-aware</h3><p>Scope, reporting, and escalation align to the transaction timetable and materiality threshold.</p></article>
            <article><FileCheck2 /><h3>Traceable</h3><p>Findings show the supporting evidence, confidence level, and practical transaction relevance.</p></article>
            <article><MessagesSquare /><h3>Clear to manage</h3><p>Communication is direct, discreet, and structured to fit the wider diligence process.</p></article>
          </div>
        </div>
      </section>
      <section className="engagement-section carbon-section">
        <div className="container">
          <div className="section-kicker-row light-row"><p className="eyebrow ember">Partnership model</p><span>COUNSEL / CLIENT / OLIVERSYS</span></div>
          <div className="engagement-flow">
            <div><h3>Align</h3><p>Confirm transaction context, privilege considerations, interfaces, and escalation routes with counsel.</p></div>
            <div><h3>Review</h3><p>Run the agreed technical workstream with controlled access and concise progress communication.</p></div>
            <div><h3>Connect</h3><p>Relate findings to deal mechanics, warranties, remediation, or post-close priorities for counsel to assess.</p></div>
          </div>
        </div>
      </section>
      <section className="counsel-use mist-section">
        <div className="container counsel-use-grid">
          <div><p className="eyebrow">Where Oliversys fits</p><h2>Bring us in where the target’s technology is material to value or execution.</h2></div>
          <div className="use-list">
            <p>Software-led acquisitions and investments</p>
            <p>Technology carve-outs and integration planning</p>
            <p>Platform, data, security, or scalability concerns</p>
            <p>Founder-dependent engineering organizations</p>
          </div>
          <Link href="/approach" className="text-link">Review the diligence method <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CallSection title="Add a technical partner to the matter." copy="Start with a confidential scoping conversation. Oliversys will fit the technical review to the transaction, counsel’s process, and the client’s decision." context="a law-firm partnership or active M&A matter" buttonText="Open a technical workstream" />
    </>
  );
}
