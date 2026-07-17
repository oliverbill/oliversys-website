/**
 * Forensic Ember system: centralized business details keep transaction copy precise,
 * discreet, and easy to update without diluting the editorial brand direction.
 */
export const site = {
  name: "Brightember",
  email: "reviews@oliversoft.tech",
  location: "Portugal · Europe-wide",
  bookingSubject: "Confidential introductory call",
  nav: [
    { label: "Approach", href: "/approach" },
    { label: "For investors", href: "/investors" },
    { label: "For counsel", href: "/counsel" },
    { label: "About", href: "/about" },
    { label: "Field notes", href: "/blog" },
  ],
};

export function bookingHref(context = "a potential transaction") {
  const subject = encodeURIComponent(`Brightember — ${site.bookingSubject}`);
  const body = encodeURIComponent(
    `Hello Brightember,\n\nI would like to arrange a confidential introductory call regarding ${context}.\n\nFirm:\nRole:\nTransaction stage:\nPreferred timing:\n\nRegards,\n`,
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
