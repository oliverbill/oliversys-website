/**
 * Forensic Ember utility page: even a dead end preserves the dossier tone and
 * offers a clear route back to the transaction narrative.
 * i18n: all user-visible strings use useLocale().t.notFound.
 */
import { Link } from "wouter";
import { useLocale } from "@/i18n/LocaleContext";

export default function NotFound() {
  const { t, localePath: lp } = useLocale();
  const nf = t.notFound;
  return (
    <section className="not-found carbon-section">
      <div className="container">
        <p className="eyebrow ember">{nf.eyebrow}</p>
        <h1>{nf.h1}</h1>
        <p>{nf.body}</p>
        <Link href={lp("/")} className="button-primary">{nf.returnButton}</Link>
      </div>
    </section>
  );
}
