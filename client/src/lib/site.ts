/**
 * Forensic Ember system: centralized business details keep transaction copy precise,
 * discreet, and easy to update without diluting the editorial brand direction.
 */
export const site = {
  name: "Oliversys",
  email: "reviews@oliversys.tech",
  location: "Portugal · Spain · Americas",
  bookingSubject: "Confidential introductory call",
  linkedinPersonal: "https://www.linkedin.com/in/walvesbill/",
  nav: [
    { label: "Approach", href: "/approach" },
    { label: "For investors", href: "/investors" },
    { label: "For counsel", href: "/counsel" },
    { label: "Red Flag Scan", href: "/services/red-flag-scan/" },
    { label: "Full TDD", href: "/services/full-technical-due-diligence/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
};

export function bookingHref(context = "a potential transaction") {
  const subject = encodeURIComponent(`Oliversys — ${site.bookingSubject}`);
  const body = encodeURIComponent(
    `Hello Oliversys,\n\nI would like to arrange a confidential introductory call regarding ${context}.\n\nFirm:\nRole:\nTransaction stage:\nPreferred timing:\n\nRegards,\n`,
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
