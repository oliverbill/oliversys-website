/**
 * English (canonical) locale strings — NON-TECHNICAL COPY VARIANT.
 * Branch: site/copy-variant-non-technical
 * Audience: lawyers, non-technical VCs, corporate buyers.
 * Tier 1, Tier 2, spot-check are branded product names — never translated.
 * Service URLs stay canonical (/services/red-flag-scan/, /services/full-technical-due-diligence/).
 *
 * Copy moves adapted from CrossLake Tech and Code & Co:
 *  - Outcome-first: "reduce deal risk", "increase confidence" over process detail
 *  - Buyer-question leads before deliverable descriptions
 *  - Analogy framing: "building inspector for software", "look under the hood"
 *  - Speed as credibility signal, front-and-centre
 *  - Three-signal escalation ("No issues / Clarification / Issues found") quoted verbatim
 */
export const en = {
  // ─── Meta / head ───────────────────────────────────────────────────────────
  meta: {
    title: "Oliversys | Software Due Diligence for M&A and Venture Capital",
    description:
      "Independent Software Due Diligence for European venture investors and M&A counsel. Get a clear picture of the technology behind the deal — before you commit.",
    ogTitle: "Oliversys | Know the technology before you sign",
    ogDescription: "Independent technical due diligence for investors and lawyers who need a straight answer.",
  },

  // ─── Nav ───────────────────────────────────────────────────────────────────
  nav: {
    approach: "How it works",
    forInvestors: "For investors",
    forCounsel: "For counsel",
    spotCheck: "4h Spot Check",
    redFlagScan: "Red Flag Scan",
    fullTDD: "Full TDD",
    about: "About",
    blog: "Blog",
    services: "Services",
    requestReview: "Request a review",
    openReview: "Start a confidential review",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
  },

  // ─── Language switcher ─────────────────────────────────────────────────────
  langSwitcher: {
    label: "Language",
    en: "EN",
    pt: "PT",
    es: "ES",
  },

  // ─── Contact dialog ────────────────────────────────────────────────────────
  contact: {
    triggerDefault: "Book a confidential call",
    dialogTitle: "Reach the founder",
    dialogDescription: "Choose the channel that suits you — both go directly to Oliversys.",
    emailButton: "Email us",
    whatsappButton: "WhatsApp",
    namePlaceholder: "Your name",
    nameLabel: "Your name",
    companyPlaceholder: "Company name",
    companyLabel: "Company name",
    emailPlaceholder: "Your email",
    emailLabel: "Your email",
    messagePlaceholder: "Brief context (optional)",
    messageLabel: "Message (optional)",
    backButton: "Back",
    sendButton: "Send",
    sendingButton: "Sending\u2026",
    successMessage: "Thanks — we\u2019ll be in touch.",
    closeButton: "Close",
    errorInvalidEmail: "Please enter a valid email address.",
    errorSendFailed: "Couldn\u2019t send — please try again or use WhatsApp.",
    gdprNote: "Your details are used only to respond to your enquiry. See our",
    gdprLinkText: "privacy policy",
  },

  // ─── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: "A clear picture of the technology behind your deal — before you commit.",
    scopeLabel: "Who we work with",
    ventureInvestors: "Venture investors",
    maCounsel: "M&A counsel",
    diligenceApproach: "How it works",
    spotCheckFull: "4h Spot Check",
    redFlagScanFull: "Red Flag Scan (Tier 1)",
    fullTDDFull: "Full TDD (Tier 2)",
    copyright: "\u00a9 {year} Oliversys. Confidential by default.",
    tagline2: "Software due diligence \u00b7 M\u0026A \u00b7 Venture capital",
    contactLabel: "Contact",
  },

  // ─── Shared sections ───────────────────────────────────────────────────────
  shared: {
    confidentialIntroEyebrow: "Confidential introduction",
    callDefaultTitle: "Get a clear view of the target before you sign.",
    callDefaultCopy:
      "Bring us in before a technical unknown becomes a deal problem. We will agree scope, what we need to see, and how quickly you need an answer.",
    callDefaultButton: "Start a confidential review",
    confidentialNote: "Scope and timing agreed around your deal.",
  },

  // ─── Home page ─────────────────────────────────────────────────────────────
  home: {
    heroEyebrow: "Independent Software Due Diligence",
    heroHeadline: "Know the technology before",
    heroHeadlineItalic: "you sign.",
    heroLede:
      "Oliversys is a building inspector for software. We look under the hood of a target company\u2019s technology and give investors and M&A lawyers a straight answer about what they are actually buying.",
    heroCtaPrimary: "Book a confidential call",
    heroCtaSecondary: "See how we work",
    heroScrollCue: "See what we find",
    dealFile: "DEAL FILE / TECH",
    euConfidential: "EU \u00b7 CONFIDENTIAL",
    dossierEvidence: "Evidence",
    dossierEvidenceSub: "Software \u00b7 Systems \u00b7 Team",
    dossierConsequence: "Consequence",
    dossierConsequenceSub: "Risk \u00b7 Cost \u00b7 Deal impact",
    dossierDecision: "Decision",
    dossierDecisionSub: "Proceed \u00b7 Negotiate \u00b7 Protect",
    exposureEyebrow: "The problem",
    exposureH2: "The technology question is often left to the person least equipped to answer it.",
    exposureLead:
      "Most investment and legal teams do not have a software specialist in the room. The founder\u2019s technology story sounds credible. But credible and verified are not the same thing.",
    exposureBody:
      "Oliversys supplies an independent view that is specific enough for the deal team and plain enough for the investment committee or legal counsel.",
    riskArchitecture: "Can the software scale?",
    riskArchitectureCopy: "Will the product support the next stage of the plan?",
    riskExecution: "Can the team deliver?",
    riskExecutionCopy: "Does headcount and capability match what the roadmap assumes?",
    riskExposure: "What transfers with the deal?",
    riskExposureCopy: "What risk, cost, or hidden dependency does the buyer inherit?",
    visualEyebrow: "What Oliversys changes",
    visualH2: "Not more technical detail. A better deal decision.",
    figCaption: "FIG. 01 \u00b7 HIDDEN LOAD-BEARING RISK",
    outcome1: "Turn technical findings into plain deal consequences",
    outcome2: "Separate problems that are fixable from risks that are structural",
    outcome3: "Surface assumptions before they harden into valuation",
    outcome4: "Give counsel and investors one defensible view of the technology",
    examineApproach: "See how we work",
    audienceEyebrow: "Built for the deal team",
    audienceKicker: "02 / WHO WE SUPPORT",
    vcEyebrow: "Venture capital",
    vcH3: "For investment teams making a decision without a technical partner in the room.",
    vcBody:
      "Get an independent view of the technology at seed and Series A \u2014 without building an in-house diligence function.",
    vcLink: "For investors",
    legalEyebrow: "Legal partnerships",
    legalH3: "For M&A lawyers who need the technology story to hold up.",
    legalBody:
      "Add a specialist who can review the software, connect findings to deal risk, and present them in plain language for client and counsel.",
    legalLink: "For deal counsel",
    outputEyebrow: "What you get",
    outputH2: "A report built for the decision room, not the technical room.",
    outputBody:
      "Every review is organised around the decision in front of you. Findings are ranked by how much they matter to the deal \u2014 not buried in a generic checklist.",
    outputItem1: "Plain-language risk summary",
    outputItem2: "Evidence-backed findings",
    outputItem3: "Deal implications",
    outputItem4: "What to do after close",
    evidenceStamp: "DECISION-READY / TRACEABLE / DIRECT",
    crossReviewLabel: "Review mandate",
    crossReviewTitle: "For investors",
    crossPartnerLabel: "Partner mandate",
    crossPartnerTitle: "For M\u0026A counsel",
    callButton: "Get a view of the target",
    servicesEyebrow: "The services",
    servicesKicker: "03 / THREE LEVELS",
    spotCheckLabel: "4h Spot Check",
    spotCheckDesc: "A fast read of one software repository. One page. An escalation signal in 4 hours \u2014 before you commit to a full review.",
    spotCheckLink: "See the Spot Check",
    tier1Label: "Red Flag Scan",
    tier1Desc: "Up to 5 repositories. A 90-minute interview with the founder or technical lead. A signed Go\u202f/\u202fCaution\u202f/\u202fNo-Go in 3\u20135 business days.",
    tier1Link: "See the Red Flag Scan",
    tier2Label: "Full Technical Due Diligence",
    tier2Desc: "Full scope across every repository. Architecture review. Investment Committee readout deck. Delivered in 7\u201310 business days.",
    tier2Link: "See the Full TDD",
  },

  // ─── Investors page ────────────────────────────────────────────────────────
  investors: {
    introEyebrow: "For venture investors",
    introTitle: "Back the thesis \u2014 not the",
    introItalic: "technology blind spot.",
    introCopy:
      "Independent software due diligence for seed and Series A decisions when the investment team has no technical specialist to call on.",
    problemEyebrow: "The moment of exposure",
    problemH2: "You can understand the business and still not know whether the software can carry it.",
    risk1: "The product looks credible in the demo, but its limits are hard to test from the outside.",
    risk2: "The roadmap supports the thesis, but whether the team can actually build it is an assumption.",
    risk3: "The founder answers well, but no one has independently verified what sits behind the answers.",
    mandateEyebrow: "What Oliversys does",
    mandateH2: "An extension of the deal team \u2014 without adding a permanent function.",
    mandateBody:
      "We inspect the technology behind the investment case and give you a decision-ready view: what is solid, what is a risk, and what you should do about it.",
    check1: "An independent check on the founder\u2019s technology story",
    check2: "A clear distinction between problems that are fixable and risks that are structural",
    check3: "What the technology means for growth, cost, timing, and key dependencies",
    check4: "A direct debrief for the deal team and investment committee",
    questionsEyebrow: "Questions the review answers",
    questionsKicker: "IC / TECHNOLOGY VIEW",
    q1: "Can the product support the next stage of the plan?",
    q2: "What technology cost is missing from the financial model?",
    q3: "Where does the business depend on one person or one supplier?",
    q4: "What should change in price, protection, or the first 100 days?",
    seeEvidence: "See how the review works",
    callTitle: "Bring a clear technology view to the IC.",
    callCopy:
      "Share the thesis, the stage, and where uncertainty sits. Oliversys will agree a proportionate review scope around the decision.",
    callButton: "Challenge the technology thesis",
  },

  // ─── Counsel page ──────────────────────────────────────────────────────────
  counsel: {
    introEyebrow: "For M\u0026A counsel",
    introTitle: "A technology workstream that strengthens the",
    introItalic: "deal team.",
    introCopy:
      "Oliversys works with law firms to surface technology risk, connect it to deal consequences, and keep the workstream clear for counsel and client.",
    partnerEyebrow: "A specialist partner",
    partnerH2: "Technology findings that complement legal diligence.",
    partnerLead:
      "Software, data, and the way a company\u2019s technology is built can create obligations and exposure that do not fit neatly inside a legal checklist.",
    dealAwareTitle: "Deal-aware",
    dealAwareCopy: "Scope, reporting, and escalation align to the transaction timetable and what matters to the deal.",
    traceableTitle: "Traceable",
    traceableCopy: "Every finding shows the supporting evidence, the confidence level, and the practical deal relevance.",
    clearTitle: "Clear to manage",
    clearCopy: "Communication is direct, discreet, and structured to fit the wider diligence process.",
    partnershipEyebrow: "How we work together",
    partnershipKicker: "COUNSEL / CLIENT / OLIVERSYS",
    alignTitle: "Align",
    alignCopy:
      "Agree transaction context, privilege considerations, interfaces, and escalation routes with counsel before we begin.",
    reviewTitle: "Review",
    reviewCopy: "Run the agreed technology workstream with controlled access and concise progress updates.",
    connectTitle: "Connect",
    connectCopy:
      "Relate findings to deal mechanics, warranties, remediation, or post-close priorities \u2014 in plain language for counsel to work with.",
    fitEyebrow: "Where Oliversys fits",
    fitH2: "Bring us in where the target\u2019s technology is material to value or execution.",
    fit1: "Software-led acquisitions and investments",
    fit2: "Technology carve-outs and integration planning",
    fit3: "Questions about the platform, data, security, or growth capacity",
    fit4: "Businesses where the technology depends heavily on one or two people",
    reviewMethod: "See how the review works",
    callTitle: "Add a technology partner to the matter.",
    callCopy:
      "Start with a confidential scoping call. Oliversys will fit the review to the transaction, counsel\u2019s process, and the client\u2019s decision.",
    callButton: "Open a technology workstream",
  },

  // ─── About page ────────────────────────────────────────────────────────────
  about: {
    introEyebrow: "About Oliversys",
    introTitle: "Independent by design. Accountable to the",
    introItalic: "evidence.",
    introCopy:
      "Oliversys is a Portugal-based, Europe-wide software due diligence practice for venture investors and M\u0026A deal teams.",
    artifactSpan: "OLIVERSYS / PORTUGAL \u00b7 EUROPE",
    whyEyebrow: "Why Oliversys",
    whyH2: "A clear technology view, built outside the momentum of the deal.",
    whyLead:
      "Oliversys is run by William Alves, a senior software engineer based in Coimbra, Portugal, through a Portuguese registered company. The practice exists to fill a gap that large due diligence firms cannot serve: a senior engineer\u2019s read on a target company\u2019s software, at a price and speed that works for seed and Series A deals.",
    whyBody:
      "We look at what supports the investment thesis, what may constrain it, and what the deal team should do with the evidence. Our job is to stay independent, stay plain, and stay useful.",
    principlesEyebrow: "How we work",
    principlesKicker: "OPERATING PRINCIPLES",
    p1Title: "What matters over what is exhaustive",
    p1Copy: "Depth follows deal relevance. A longer checklist is not a better outcome.",
    p2Title: "Plain over dramatic",
    p2Copy: "Technology risk is stated clearly, with proportion and context. No scare findings. No false comfort.",
    p3Title: "Evidence over instinct",
    p3Copy:
      "Every view is traceable to what was examined, discussed, and tested \u2014 and explicit about what remains uncertain.",
    p4Title: "Discreet by default",
    p4Copy:
      "Information access, communication, and reporting are treated with the care you expect in a live transaction.",
    positionEyebrow: "Our position",
    positionQuote: "\u201cKnow what the technology can carry \u2014 before the deal has to.\u201d",
    positionBody:
      "Independent technology evidence for investors making early-stage decisions and counsel managing technology-led transactions across Europe.",
    callTitle: "Start with the decision in front of you.",
    callButton: "Frame the decision",
  },

  // ─── Approach page ─────────────────────────────────────────────────────────
  approach: {
    introEyebrow: "How it works",
    introTitle: "Follow the evidence to the",
    introItalic: "decision.",
    introCopy:
      "An Oliversys review is scoped around what matters to the deal. Technical depth is not the goal; a plain, defensible view of the technology is.",
    phasesEyebrow: "A decision-led review",
    phasesKicker: "MANDATE / 04 STEPS",
    phase1Title: "Agree what we are looking for",
    phase1Copy:
      "We start with the deal thesis, the stage, and the specific questions that matter most. The review is shaped around the decision \u2014 not a fixed checklist.",
    phase1Meta: "Thesis \u00b7 Scope \u00b7 What matters",
    phase2Title: "Inspect the software and team",
    phase2Copy:
      "We review the product, how the software is built, security, data, the team, and the growth plan \u2014 in the depth the deal requires.",
    phase2Meta: "Documents \u00b7 Systems \u00b7 Interviews",
    phase3Title: "Test the plan against reality",
    phase3Copy:
      "We check whether the technology can actually support the commercial plan. We surface hidden costs, single points of failure, and delivery risks the model may not account for.",
    phase3Meta: "Capacity \u00b7 Cost \u00b7 Constraint",
    phase4Title: "Deliver a plain answer",
    phase4Copy:
      "We deliver a direct summary, the deal implications, and a prioritised list of what to do after close. We debrief the deal team so nothing is left as an assumption.",
    phase4Meta: "Findings \u00b7 Implications \u00b7 Priorities",
    scopeEyebrow: "What we look at",
    scopeH2: "Broad enough to catch the problem. Focused enough to protect the timeline.",
    figCaption: "FIG. 02 / EVIDENCE PATH",
    scope1: "Can the product do what the plan says?",
    scope2: "Will the software hold up as the business grows?",
    scope3: "Is the codebase in reasonable health?",
    scope4: "Are there security, data, or resilience risks?",
    scope5: "Does the team have the capability to deliver?",
    scope6: "What is the true cost of delivery?",
    scope7: "What does the business depend on from third parties?",
    scope8: "What needs to happen after close?",
    deliverableEyebrow: "What you receive",
    deliverableH2: "A report built to be used, not filed.",
    del1Title: "Plain-language deal summary",
    del1Copy: "The most consequential facts, stated directly.",
    del2Title: "Prioritised findings",
    del2Copy: "Severity, evidence, confidence, and what it means for the deal.",
    del3Title: "Action path",
    del3Copy: "Questions for negotiation, protections to consider, and priorities after close.",
    seeInvestorMandate: "See the investor mandate",
    callButton: "Agree the review scope",
  },

  // ─── Tier 1 service page ───────────────────────────────────────────────────
  tier1: {
    heroEyebrow: "Tier 1 \u00b7 Software Due Diligence",
    heroH1a: "Red Flag Scan \u2014 a pre-deal technology read,",
    heroH1em: "delivered in 3\u20135 business days.",
    heroAside:
      "Up to 5 software repositories. One interview with the founder or technical lead. A 10\u201315 page signed report plus a Go / Caution / No-Go recommendation. Built for seed and Series A investment committees where a red flag is a term-sheet-blocker.",
    slaNote:
      "Applicable to targets within the following scope: up to 5 repositories, up to 200,000 lines of code, up to 20,000 version-history entries, up to 500 third-party components, and up to 3 primary programming languages. Build must be reproducible on a clean machine within 15 minutes.",
    slaWarning: "Targets outside these limits are scoped and quoted separately after a call.",
    whatEyebrow: "What this engagement is",
    whatKicker: "SCOPE / TWO PHASES",
    whatH1: "Up to 5 repositories. Two phases. Every finding cites its source.",
    phase1Title: "Phase 1 \u2014 Software review (day 1\u20132)",
    phase1Copy:
      "We run a structured review across 13 dimensions of the target\u2019s software. Every finding cites its exact location. Findings are ranked by severity and linked to the buyer\u2019s stated concern.",
    phase2Title: "Phase 2 \u2014 Interview and report (day 3\u20135)",
    phase2Copy:
      "One 90-minute interview with the target\u2019s founder or technical lead, with questions drawn from what the review surfaced. The interview is synthesised into a written narrative naming the specific technology risks against the deal thesis.",
    assessedEyebrow: "What we assess",
    assessedKicker: "13 DIMENSIONS",
    skillRepoForensics: "Development history",
    skillRepoForensicsDetail:
      "How many people are actually building the product, whether key knowledge is concentrated in one person, how active development is, and where the most-changed parts of the codebase sit.",
    skillTestPosture: "Test coverage",
    skillTestPostureDetail:
      "What proportion of the software has automated tests protecting it from accidental breakage, and how reliable those tests are.",
    skillCodeQuality: "Code quality",
    skillCodeQualityDetail:
      "Overall size and language mix of the codebase, how complex it is, and how much outstanding technical work has been deferred.",
    skillMaintainability: "Ease of change",
    skillMaintainabilityDetail:
      "How complicated individual parts of the code are to change safely, how much of the code is duplicated, and where the highest-risk areas are.",
    skillScalability: "Growth capacity",
    skillScalabilityDetail:
      "Whether the software is built to handle more users and more load \u2014 or whether scaling will require significant rebuilding.",
    skillAI: "Artificial-intelligence claims",
    skillAIDetail:
      "Whether the product\u2019s artificial-intelligence features are genuine and verifiable, or whether the marketing language overstates what the software actually does.",
    skillOps: "Operational readiness",
    skillOpsDetail:
      "Whether the software is built to be run reliably in production \u2014 monitoring, deployment, and the ability to diagnose problems quickly.",
    skillDeps: "Third-party component risk",
    skillDepsDetail:
      "Known security vulnerabilities in the third-party components the software depends on, checked against an up-to-date database.",
    skillCreds: "Credentials and secrets",
    skillCredsDetail:
      "Whether any passwords, access keys, or other sensitive credentials have been accidentally included in the software repository.",
    skillLicense: "Legal exposure from open-source",
    skillLicenseDetail:
      "A complete inventory of every third-party component the software depends on, and whether any of those components carry licence terms that restrict commercial use or require releasing the source code.",
    skillStatic: "Security pattern review",
    skillStaticDetail:
      "A review of the code for known-bad security patterns \u2014 the kinds of mistakes that lead to common vulnerabilities.",
    timelineEyebrow: "Estimated timeline",
    timelineKicker: "3\u20135 BUSINESS DAYS",
    tl0Day: "Day 0",
    tl0Action:
      "Repository access, a short intake form (investment thesis, primary concern, decision date), specific version of the software locked for review.",
    tl12Day: "Day 1\u20132",
    tl12Action:
      "Structured review across all 13 dimensions against the locked version. Every finding cites its exact source.",
    tl3Day: "Day 3",
    tl3Action: "90-minute interview with the target\u2019s founder or technical lead.",
    tl4Day: "Day 4",
    tl4Action:
      "Analyst validation: all high-severity findings read and verified, sample of medium-severity findings reviewed, highest-risk areas of the code examined.",
    tl5Day: "Day 5",
    tl5Action: "Report completed, signed by the analyst, delivered to the fund.",
    delivery:
      "Delivery: signed 10\u201315 page report plus supporting evidence, delivered directly to the fund.",
    interviewsEyebrow: "Interviews",
    interviewsKicker: "ONE 90-MINUTE SESSION",
    interviewRole: "Required:",
    interviewRoleDetail:
      "the target\u2019s founder or technical lead \u2014 someone who can speak to both how the product is built and how the team is growing.",
    interviewFormat: "Format:",
    interviewFormatDetail: "video call, recorded with the interviewee\u2019s consent for accuracy.",
    interviewFormatNote: "On-site attendance can be arranged, with expenses agreed in advance.",
    interviewDuration: "Duration:",
    interviewDurationDetail:
      "90 minutes, with questions drawn from the review findings \u2014 not a generic checklist.",
    whatReachesEyebrow: "What you receive",
    whatReachesH2: "A signed opinion \u2014 not an automated summary.",
    del1Title: "Go / Caution / No-Go recommendation",
    del1Copy:
      "Drawn from the full picture across all review dimensions, calibrated against the buyer\u2019s stated concern. The recommendation is the analyst\u2019s opinion, informed by the review \u2014 it is not automated.",
    del2Title: "Traceable findings",
    del2Copy:
      "Every report identifies the exact version of the software reviewed. Any finding can be independently verified by checking out that version. This is the foundation for defending the report if challenged.",
    tier1FitsEyebrow: "When Tier 1 fits",
    tier1FitsH2: "Seed to Series A decisions with a technology thesis.",
    tier1FitsCopy:
      "The investment is in a software product, and the buyer needs to know whether the technology can deliver on the roadmap. The fund does not have a technical partner available to spend a week on the review. The timeline is 5 business days or more before the term sheet is signed.",
    tier2EyebrowWhen: "When to consider Tier 2",
    tier2H2When: "Some deals call for broader scope.",
    tier2CopyWhen:
      "The target\u2019s software is spread across more than 5 repositories. The deal depends on a specific artificial-intelligence claim being verifiably true. The fund is committing significantly more capital. The deal is a corporate acquisition rather than a growth-equity round.",
    seeTier2: "See Tier 2 \u2014 Full Technical Due Diligence",
    tier2SlaNote: "Subject to scope limits. See the note on the Tier 1 page.",
    spotCheckBackLink: "Not sure yet? Start with the 4h Spot Check \u2192",
    callTitle: "Scope a Red Flag Scan.",
    callCopy:
      "Share the target, the thesis, and the decision date. Oliversys will confirm scope and turnaround within one business day.",
    callButton: "Request a scoping call",
  },

  // ─── Tier 2 service page ───────────────────────────────────────────────────
  tier2: {
    heroEyebrow: "Tier 2 \u00b7 Software Due Diligence",
    heroH1: "Full Technical Due Diligence \u2014 complete scope,",
    heroH1em: "delivered in 7\u201310 business days.",
    heroAside:
      "Every software repository in scope. Verified artificial-intelligence claims. A full review of how the system is built. Growth cost analysis. A reality check on the roadmap against the team\u2019s capacity. A 30\u201340 page signed report plus a 20-slide Investment Committee deck \u2014 ready for a 1-hour decision meeting.",
    slaNote:
      "Applicable to targets within the following scope: up to 10 repositories, up to 500,000 lines of code, up to 100,000 version-history entries, up to 1,500 third-party components, and up to 5 primary programming languages. Build must be reproducible on a clean machine within 30 minutes.",
    slaWarning: "Targets outside these limits are scoped and quoted separately after a call.",
    whatEyebrow: "What this engagement is",
    whatKicker: "SCOPE / THREE PHASES",
    whatH1: "Complete scope. Every repository. Decision-ready for the Investment Committee.",
    whatBody:
      "The Full Technical Due Diligence engagement reviews every software repository named in scope, locked to a specific version. Two to three interviews with the target\u2019s engineering leadership are synthesised into a named section of the report. A full architecture review, artificial-intelligence claims verification, and a roadmap feasibility read complete the picture.",
    phase1Title: "Phase 1 \u2014 Software review (day 1\u20133)",
    phase1Copy:
      "A structured review across 13 dimensions runs against every repository in scope, locked to specific versions. Every finding cites its exact source.",
    phase2Title: "Phase 2 \u2014 Interviews (day 4\u20136)",
    phase2Copy:
      "Two to three interviews with the target\u2019s technical leadership, shaped by what the review surfaced. Synthesised into a named narrative section of the report.",
    phase3Title: "Phase 3 \u2014 Synthesis and IC readout (day 7\u201310)",
    phase3Copy:
      "Full review of how the system is built, verification of artificial-intelligence claims, growth cost analysis, roadmap feasibility read, and preparation of the Investment Committee readout deck. Report signed and delivered.",
    assessedEyebrow: "What we assess",
    assessedKicker: "EVERYTHING IN TIER 1, PLUS",
    assessedIntro:
      "Tier 2 covers all 13 dimensions that run in a Tier 1 Red Flag Scan, and adds the following:",
    add1Title: "How the system is actually built",
    add1Detail:
      "The analyst traces the architecture against a critical part of the product \u2014 the billing flow, the login system, or the feature the deal thesis depends on. We verify the documentation matches reality and name the risks where it does not. This cannot be automated.",
    add2Title: "Artificial-intelligence claims verification",
    add2Detail:
      "Every artificial-intelligence claim in the pitch is cross-checked against what the software actually does. We distinguish genuine artificial-intelligence products from marketing language that overstates the technology.",
    add3Title: "Growth cost analysis",
    add3Detail:
      "What it will cost to grow the product 10x. We identify the specific parts of the system that will need to change first, and what those changes will cost in engineering time and infrastructure spend.",
    add4Title: "Roadmap feasibility versus team capacity",
    add4Detail:
      "We read the target\u2019s stated roadmap against the current team\u2019s size, seniority, and hiring plan. We name the roadmap items that are structurally under-resourced.",
    add5Title: "Interview synthesis (2\u20133 sessions)",
    add5Detail:
      "Synthesised into a written narrative that names who runs what, who owns what, and where the leverage points sit \u2014 not raw quotes.",
    add6Title: "Investment Committee readout deck",
    add6Detail:
      "A 20-slide deck designed for a 1-hour Investment Committee meeting. Contains the recommendation, the top 5 findings ranked by deal relevance, and a decision-ready set of next steps.",
    seeFullList: "For the full list of base review dimensions, see the",
    seeTier1Link: "Tier 1 Red Flag Scan page",
    timelineEyebrow: "Estimated timeline",
    timelineKicker: "7\u201310 BUSINESS DAYS",
    tl0Day: "Day 0",
    tl0Action:
      "Repository access for every repo in scope, short intake form, specific versions locked for review.",
    tl13Day: "Day 1\u20133",
    tl13Action:
      "Structured review across all 13 dimensions against all locked versions. Multi-repository scope handled end to end; all findings rolled into one deliverable.",
    tl4Day: "Day 4",
    tl4Action: "First interview: target\u2019s founder or technical lead (90 minutes \u2014 architecture + roadmap).",
    tl5Day: "Day 5",
    tl5Action:
      "Second interview: target\u2019s head of engineering or senior technical lead (60\u201390 minutes \u2014 day-to-day delivery + hiring).",
    tl6Day: "Day 6",
    tl6Action:
      "Optional third interview: senior engineer or operations lead (60 minutes \u2014 how the product is run in production).",
    tl79Day: "Day 7\u20139",
    tl79Action:
      "Analyst validation: all high and medium severity findings reviewed, full architecture trace, all interview transcripts, artificial-intelligence claims cross-check. Approximately 8\u201312 hours of analyst time.",
    tl10Day: "Day 10",
    tl10Action:
      "Report completed, Investment Committee deck prepared, signed by the analyst, delivered to the fund.",
    delivery:
      "Delivery: signed 30\u201340 page report + Investment Committee deck (20 slides), delivered directly to the fund.",
    interviewsEyebrow: "Interviews",
    interviewsKicker: "2\u20133 SESSIONS ACROSS TECHNICAL LEADERSHIP",
    roleRequired: "REQUIRED",
    roleOptional: "OPTIONAL",
    interviewNote:
      "All interviews are conducted by video call, recorded with each interviewee\u2019s consent for accuracy. On-site attendance can be arranged with expenses agreed in advance.",
    whatReachesEyebrow: "What you receive",
    whatReachesH2: "Report and IC deck \u2014 both signed by the analyst.",
    del1Title: "Go / Caution / No-Go recommendation",
    del1Copy:
      "Drawn from the full picture across every dimension, calibrated against the buyer\u2019s stated concern and the roadmap feasibility read. Presented as part of the Investment Committee deck, ready for the fund\u2019s decision meeting.",
    del2Title: "Traceable findings per repository",
    del2Copy:
      "Every report identifies the exact version of every repository reviewed. Multi-repository engagements lock each repository separately; all findings are rolled into one deliverable.",
    tier2FitsEyebrow: "When Tier 2 fits",
    tier2FitsH2: "Series B and later \u2014 or when multiple technology claims must all be true.",
    tier2FitsCopy:
      "Series B and later rounds where the investment thesis depends on multiple technology claims being simultaneously true. Corporate mergers and acquisitions where a poor fit is a fund-damaging event. Search-fund acquisitions where the buyer will be operating the software after close. Deals where the software spans multiple repositories or an artificial-intelligence claim must be verifiably true. Investment committees that want a decision-ready readout deck delivered with the report.",
    lighterEyebrow: "Looking for a lighter-scope read?",
    lighterH2: "Tier 1 covers up to 5 repositories in 3\u20135 business days.",
    lighterCopy:
      "For seed and Series A decisions where the target is a smaller codebase and the timeline is tight, the Red Flag Scan delivers a signed report and Go / Caution / No-Go recommendation at lower cost and faster turnaround.",
    seeTier1: "See Tier 1 \u2014 Red Flag Scan",
    tier1SlaNote: "Subject to scope limits. See the note on the Tier 1 page.",
    interviewRole1: "Founder or technical lead",
    interviewFocus1: "How the product is built, the roadmap, and the hiring plan.",
    interviewRole2: "Head of engineering or senior technical lead",
    interviewFocus2: "Day-to-day delivery, code review practices, testing culture.",
    interviewRole3: "Senior engineer or operations lead",
    interviewFocus3: "How the product is deployed and run, incident history, reliability.",
    callTitle: "Scope a Full Technical Due Diligence engagement.",
    callCopy:
      "Share the target, the number of repositories, the deal thesis, and the decision date. Oliversys will confirm scope and turnaround within one business day.",
    callButton: "Request a scoping call",
  },

  // ─── Spot Check service page ──────────────────────────────────────────────
  spotCheck: {
    heroEyebrow: "Spot Check \u00b7 Fast Software Triage",
    heroH1a: "4h Spot Check \u2014 a fast read of one software repository,",
    heroH1em: "delivered within 4 hours.",
    heroAside:
      "One software repository. No interviews. No architecture review. A one-page report \u2014 \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d \u2014 with an escalation signal and the top questions to resolve. Priced at \u20ac500. Decide whether to commission a Red Flag Scan or Full Technical Due Diligence before committing to a deeper engagement.",
    boundaryEyebrow: "What this report is \u2014 and is not",
    boundaryBody:
      "This is a fast triage of one software repository. It surfaces immediate signals from the code itself: security vulnerabilities in third-party components, accidentally exposed credentials, licence-related legal exposure, and known-bad security patterns. It tells you whether the repository evidence is sufficient to proceed to a deeper review.",
    boundaryNote:
      "This report does not conclude on: product fit, the business or its strategy, how the team is organised, artificial-intelligence or product claims, data rights, growth capacity, operational reliability, or overall investment suitability. The signal on the last page is an escalation recommendation \u2014 not an investment recommendation.",
    whatEyebrow: "What this engagement is",
    whatKicker: "SCOPE / ONE REPOSITORY",
    whatH1: "One repository. One analyst pass. One escalation signal.",
    step1Title: "Step 1 \u2014 Repository review (hours 0\u20133)",
    step1Copy:
      "A targeted review of the software repository locked to a specific version. Four areas assessed: security vulnerabilities in third-party components, accidentally exposed credentials, open-source licence exposure, and known security pattern problems. Every finding cites its exact location.",
    step2Title: "Step 2 \u2014 Analyst review and report (hours 3\u20134)",
    step2Copy:
      "The analyst reads every high-severity finding, validates which are genuine, and writes the one-page \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d report. The escalation signal is the analyst\u2019s judgment \u2014 it is not automated.",
    inScopeEyebrow: "What is assessed",
    inScopeKicker: "FOUR AREAS",
    inScope1Label: "Security vulnerabilities in third-party components",
    inScope1Detail:
      "Known security vulnerabilities in the third-party software the product depends on, checked against an up-to-date database. The most exploitable issues called out.",
    inScope2Label: "Accidentally exposed credentials",
    inScope2Detail:
      "A check for passwords, access keys, or other sensitive credentials that may have been accidentally committed to the repository. Verified findings distinguished from false positives.",
    inScope3Label: "Open-source licence exposure",
    inScope3Detail:
      "A complete inventory of every third-party component the software depends on, classified by whether the licence permits commercial use. Any licences that could restrict how the product is sold or require releasing the source code are named.",
    inScope4Label: "Known security pattern problems",
    inScope4Detail:
      "A review of the code for the kinds of security mistakes that are commonly exploited: improper input handling, authentication weaknesses, and cryptography misuse.",
    inScope5Label: "Repository health indicators",
    inScope5Detail:
      "Basic indicators of how active development is, what language the software is written in, and rough scale \u2014 enough context for the analyst to bound confidence in the findings.",
    outScopeEyebrow: "What this does not cover",
    outScopeKicker: "OUT OF SCOPE AT THIS TIER",
    outScope1: "Interviews with the target\u2019s team \u2014 no interviews at this tier.",
    outScope2: "How the system is architected or how the product works.",
    outScope3: "Test coverage or ease of making changes.",
    outScope4: "Artificial-intelligence or product claims.",
    outScope5: "Growth capacity, how the product is run, or roadmap feasibility.",
    outScopeNote:
      "Any of the above require a Tier 1 Red Flag Scan (3\u20135 days) or a Tier 2 Full Technical Due Diligence (7\u201310 days).",
    timelineEyebrow: "Estimated timeline",
    timelineKicker: "4 HOURS FROM REPOSITORY ACCESS",
    tl0Day: "Hour 0",
    tl0Action:
      "Repository access provided. Optional: your primary concern (helps focus the review). Specific version locked.",
    tl1Day: "Hours 0\u20133",
    tl1Action:
      "Automated review: security vulnerabilities, exposed credentials, licence exposure, known security patterns. Every finding cites its exact source.",
    tl2Day: "Hour 3",
    tl2Action:
      "Analyst reads all findings. High-severity findings validated. Escalation signal determined.",
    tl3Day: "Hour 4",
    tl3Action:
      "Report written and delivered: \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d \u2014 one page, signed by the analyst, with the top questions and escalation signal.",
    delivery:
      "Delivery: signed one-page report delivered directly to the buyer within 4 hours of repository access.",
    delEyebrow: "What you receive",
    delH2: "One page. Three signals. Signed by the analyst.",
    del1Title: "\u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d report",
    del1Copy:
      "A one-page report covering the four assessed areas, the top questions to resolve, and the evidence-readiness signal. The report title makes its scope unambiguous \u2014 it cannot be mistaken for a full due diligence.",
    del2Title: "Escalation signal",
    del2Copy:
      "One of three outcomes: \u201cNo issues found\u201d / \u201cClarification required\u201d / \u201cIssues found \u2014 Full review advised.\u201d This is an escalation recommendation. It does not recommend for or against a transaction.",
    del3Title: "Top questions to resolve",
    del3Copy:
      "The findings the analyst judges most important, written as buyer-facing questions. These become the starting brief for a Tier 1 or Tier 2 engagement if one is commissioned.",
    whenFitsEyebrow: "When a Spot Check fits",
    whenFitsH2: "A fast read before committing to a deeper review.",
    whenFitsCopy:
      "You need to decide within hours whether a repository warrants commissioning a Red Flag Scan or Full Technical Due Diligence. The target\u2019s software is in one repository. You want an independent view before a first meeting with the founder. You need something fast enough to inform a term-sheet conversation.",
    escalateEyebrow: "Next steps if issues are found",
    escalateH2: "The Spot Check is the start of the review process, not the end.",
    escalateCopy:
      "If the escalation signal is \u201cClarification required\u201d or \u201cIssues found \u2014 Full review advised,\u201d the top-questions list becomes the brief for the next engagement. The Red Flag Scan adds interviews, a full review across all 13 dimensions, and a Go / Caution / No-Go recommendation. The Full Technical Due Diligence adds a full architecture review, artificial-intelligence claims verification, and an Investment Committee readout.",
    seeRedFlagScan: "See Tier 1 \u2014 Red Flag Scan (3\u20135 days)",
    seeFullTDD: "See Tier 2 \u2014 Full Technical Due Diligence (7\u201310 days)",
    callTitle: "Book a 4h Spot Check.",
    callCopy:
      "Share the repository and your primary concern (optional). Oliversys will confirm access and deliver within 4 hours.",
    callButton: "Book a 4h Spot Check",
  },

  // ─── Blog ──────────────────────────────────────────────────────────────────
  blog: {
    eyebrow: "Insights",
    heading: "Writing on software due diligence.",
    readPost: "Read",
    noPosts: "No posts yet.",
  },

  // ─── 404 ───────────────────────────────────────────────────────────────────
  notFound: {
    eyebrow: "Page not found / 404",
    h1: "This trail ends here.",
    body: "The page may have moved, but the path back to a clearer technology decision is intact.",
    returnButton: "Return to Oliversys",
  },
};

// The Translations type uses string (not literal) so PT and ES can assign any string.
export type Translations = typeof en;
