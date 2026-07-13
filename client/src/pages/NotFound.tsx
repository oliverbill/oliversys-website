/**
 * Forensic Ember utility page: even a dead end preserves the dossier tone and
 * offers a clear route back to the transaction narrative.
 */
import { Link } from "wouter";

export default function NotFound() {
  return (
    <section className="not-found carbon-section">
      <div className="container">
        <p className="eyebrow ember">File not found / 404</p>
        <h1>This evidence trail ends here.</h1>
        <p>The page may have moved, but the route back to a clearer technical decision is intact.</p>
        <Link href="/" className="button-primary">Return to Brightember</Link>
      </div>
    </section>
  );
}
