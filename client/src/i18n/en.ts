/**
 * English (canonical) locale strings.
 * Tier 1, Tier 2, spot-check are branded product names — never translated.
 * Service URLs stay canonical (/services/red-flag-scan/, /services/full-technical-due-diligence/).
 */
export const en = {
  // ─── Meta / head ───────────────────────────────────────────────────────────
  meta: {
    title: "Oliversys | Software Due Diligence for M&A and Venture Capital",
    description:
      "Independent Software Due Diligence for European venture investors and M&A counsel. Turn product, architecture, engineering, and team evidence into a clear deal view.",
    ogTitle: "Oliversys | Technical conviction before transaction exposure",
    ogDescription: "Independent technical evidence for consequential deal decisions.",
  },

  // ─── Nav ───────────────────────────────────────────────────────────────────
  nav: {
    approach: "Approach",
    forInvestors: "For investors",
    forCounsel: "For counsel",
    redFlagScan: "Red Flag Scan",
    fullTDD: "Full TDD",
    about: "About",
    blog: "Blog",
    services: "Services",
    requestReview: "Request a Tech Review",
    openReview: "Open a confidential review",
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
    dialogDescription: "Choose the channel that suits you—both go directly to Oliversys.",
    emailButton: "Email me",
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
    successMessage: "Thanks — we'll be in touch.",
    closeButton: "Close",
    errorInvalidEmail: "Please enter a valid email address.",
    errorSendFailed: "Couldn't send — please try again or use WhatsApp.",
    gdprNote: "Your details are used only to respond to your enquiry. See our",
    gdprLinkText: "privacy policy",
  },

  // ─── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Independent technical evidence for consequential deal decisions.",
    scopeLabel: "Scope",
    ventureInvestors: "Venture investors",
    maCounsel: "M&A counsel",
    diligenceApproach: "Diligence approach",
    redFlagScanFull: "Red Flag Scan (Tier 1)",
    fullTDDFull: "Full TDD (Tier 2)",
    copyright: "\u00a9 {year} Oliversys. Confidential by default.",
    tagline2: "Technical diligence \u00b7 M\u0026A \u00b7 Venture capital",
    contactLabel: "Contact",
  },

  // ─── Shared sections ───────────────────────────────────────────────────────
  shared: {
    confidentialIntroEyebrow: "Confidential introduction",
    callDefaultTitle: "Put the target under review.",
    callDefaultCopy:
      "Bring us in before technical uncertainty becomes transaction exposure. We will scope the decision, the evidence required, and the right level of review.",
    callDefaultButton: "Open a confidential review",
    confidentialNote: "Scope and timing agreed around your deal.",
  },

  // ─── Home page ─────────────────────────────────────────────────────────────
  home: {
    heroEyebrow: "Independent Software Due Diligence",
    heroHeadline: "Technical conviction before transaction",
    heroHeadlineItalic: "exposure.",
    heroLede:
      "Oliversys turns complex product, engineering, and architecture evidence into a clear deal view\u2014for European investors and M&A counsel.",
    heroCtaPrimary: "Book a confidential call",
    heroCtaSecondary: "See how we review",
    heroScrollCue: "Trace the evidence",
    dealFile: "DEAL FILE / TECH",
    euConfidential: "EU \u00b7 CONFIDENTIAL",
    dossierEvidence: "Evidence",
    dossierEvidenceSub: "Architecture \u00b7 Product \u00b7 Team",
    dossierConsequence: "Consequence",
    dossierConsequenceSub: "Risk \u00b7 Cost \u00b7 Deal impact",
    dossierDecision: "Decision",
    dossierDecisionSub: "Proceed \u00b7 Price \u00b7 Protect",
    exposureEyebrow: "The exposure",
    exposureH2: "The technical call often lands with the person least equipped to absorb a miss.",
    exposureLead:
      "When a fund has no in-house technical capability, product and engineering diligence can become an extra workstream for the deal team. The questions are specialized. The consequences are not.",
    exposureBody:
      "Oliversys supplies an independent view that is specific enough for operators and clear enough for an investment committee or legal deal team.",
    riskArchitecture: "Architecture",
    riskArchitectureCopy: "Can the system support the next stage of growth?",
    riskExecution: "Execution",
    riskExecutionCopy: "Can this team deliver what the plan assumes?",
    riskExposure: "Exposure",
    riskExposureCopy: "What risk, cost, or dependency transfers with the deal?",
    visualEyebrow: "What Oliversys changes",
    visualH2: "Not more technical detail. A better deal decision.",
    figCaption: "FIG. 01 \u00b7 HIDDEN LOAD-BEARING RISK",
    outcome1: "Translate findings into transaction consequence",
    outcome2: "Separate manageable debt from structural risk",
    outcome3: "Expose assumptions before they harden into valuation",
    outcome4: "Give counsel and investors one defensible technical view",
    examineApproach: "Examine the approach",
    audienceEyebrow: "Built around the deal team",
    audienceKicker: "02 / WHO WE SUPPORT",
    vcEyebrow: "Venture capital",
    vcH3: "For principals and investment directors carrying the technical call.",
    vcBody:
      "Bring an independent technical view to seed and Series A decisions without building an internal diligence function.",
    vcLink: "For investors",
    legalEyebrow: "Legal partnerships",
    legalH3: "For M&A lawyers who need technical evidence to travel with the advice.",
    legalBody:
      "Add a specialist technical workstream that complements legal diligence and keeps findings connected to transaction risk.",
    legalLink: "For deal counsel",
    outputEyebrow: "The output",
    outputH2: "Evidence that travels from technical room to decision room.",
    outputBody:
      "Every review is organized around the decision in front of you. Findings are prioritized by severity, confidence, and deal relevance\u2014not buried in a generic checklist.",
    outputItem1: "Executive risk map",
    outputItem2: "Evidence-backed findings",
    outputItem3: "Transaction implications",
    outputItem4: "Post-close priorities",
    evidenceStamp: "DECISION-READY / TRACEABLE / DIRECT",
    crossReviewLabel: "Review mandate",
    crossReviewTitle: "For investors",
    crossPartnerLabel: "Partner mandate",
    crossPartnerTitle: "For M\u0026A counsel",
    callButton: "Put the target under review",
  },

  // ─── Investors page ────────────────────────────────────────────────────────
  investors: {
    introEyebrow: "For venture investors",
    introTitle: "Carry the thesis\u2014not the technical",
    introItalic: "blind spot.",
    introCopy:
      "Independent technical diligence for seed and Series A decisions when the investment team has no dedicated technical capability.",
    problemEyebrow: "The moment of exposure",
    problemH2: "You can understand the company and still need a specialist view of what carries it.",
    risk1: "The architecture looks credible, but its limits are difficult to test from the outside.",
    risk2: "The roadmap supports the thesis, but delivery capacity and technical cost remain assumptions.",
    risk3: "The team answers well, but the evidence has not been independently connected to deal consequence.",
    mandateEyebrow: "The Oliversys mandate",
    mandateH2: "An extension of the deal team\u2014without adding a permanent function.",
    mandateBody:
      "We interrogate the technical assumptions beneath the investment case and turn the result into a decision-ready view.",
    check1: "Independent challenge to management\u2019s technical narrative",
    check2: "Clear distinction between fixable debt and structural risk",
    check3: "Implications for growth, cost, timing, and key dependencies",
    check4: "Direct debrief for the deal team and investment committee",
    questionsEyebrow: "Questions the review should resolve",
    questionsKicker: "IC / TECHNICAL VIEW",
    q1: "Can the current platform support the next stage of the plan?",
    q2: "What technical cost is missing from the model?",
    q3: "Where does execution depend on one person or one provider?",
    q4: "What should change in price, protection, or the first 100 days?",
    seeEvidence: "See how the evidence is built",
    callTitle: "Bring technical conviction to the IC.",
    callCopy:
      "Share the thesis, the stage, and where uncertainty sits. Oliversys will define a proportionate diligence scope around the decision.",
    callButton: "Challenge the technical thesis",
  },

  // ─── Counsel page ──────────────────────────────────────────────────────────
  counsel: {
    introEyebrow: "For M\u0026A counsel",
    introTitle: "A technical workstream that strengthens the",
    introItalic: "deal team.",
    introCopy:
      "Oliversys partners with law firms to surface technical risk, connect it to transaction consequence, and keep the workstream clear for counsel and client.",
    partnerEyebrow: "A specialist partner",
    partnerH2: "Technical evidence that complements legal diligence.",
    partnerLead:
      "Software, infrastructure, data, and engineering practices can create obligations and exposure that do not fit neatly inside a legal checklist.",
    dealAwareTitle: "Deal-aware",
    dealAwareCopy: "Scope, reporting, and escalation align to the transaction timetable and materiality threshold.",
    traceableTitle: "Traceable",
    traceableCopy: "Findings show the supporting evidence, confidence level, and practical transaction relevance.",
    clearTitle: "Clear to manage",
    clearCopy: "Communication is direct, discreet, and structured to fit the wider diligence process.",
    partnershipEyebrow: "Partnership model",
    partnershipKicker: "COUNSEL / CLIENT / OLIVERSYS",
    alignTitle: "Align",
    alignCopy:
      "Confirm transaction context, privilege considerations, interfaces, and escalation routes with counsel.",
    reviewTitle: "Review",
    reviewCopy: "Run the agreed technical workstream with controlled access and concise progress communication.",
    connectTitle: "Connect",
    connectCopy:
      "Relate findings to deal mechanics, warranties, remediation, or post-close priorities for counsel to assess.",
    fitEyebrow: "Where Oliversys fits",
    fitH2: "Bring us in where the target\u2019s technology is material to value or execution.",
    fit1: "Software-led acquisitions and investments",
    fit2: "Technology carve-outs and integration planning",
    fit3: "Platform, data, security, or scalability concerns",
    fit4: "Founder-dependent engineering organizations",
    reviewMethod: "Review the diligence method",
    callTitle: "Add a technical partner to the matter.",
    callCopy:
      "Start with a confidential scoping conversation. Oliversys will fit the technical review to the transaction, counsel\u2019s process, and the client\u2019s decision.",
    callButton: "Open a technical workstream",
  },

  // ─── About page ────────────────────────────────────────────────────────────
  about: {
    introEyebrow: "About Oliversys",
    introTitle: "Independent by design. Accountable to the",
    introItalic: "evidence.",
    introCopy:
      "Oliversys is a Portugal-focused, Europe-wide Software Due Diligence practice for venture investors and M\u0026A deal teams.",
    artifactSpan: "OLIVERSYS / PORTUGAL \u00b7 EUROPE",
    whyEyebrow: "Why Oliversys",
    whyH2: "A clear technical view, built outside the momentum of the deal.",
    whyLead:
      "Oliversys is a solo senior-engineer technical due diligence practice for Iberian venture capital and early-stage M\u0026A, run by William Alves from Coimbra, Portugal, through a Portuguese Sociedade Unipessoal por Quotas. It exists to fill a market gap that traditional TDD firms cannot price for: a senior-engineer read on a target company\u2019s codebase, priced below \u20ac10k and delivered in hours to days, for the seed and Series A tickets (\u20ac500k\u2013\u20ac3M) where the incumbent five-person, three-to-four-week, \u20ac25\u2013\u20ac80k engagement does not fit the round math.",
    whyBody:
      "Oliversys exists to keep that work independent. We examine what supports the thesis, what may constrain it, and what the deal team should do with the evidence.",
    principlesEyebrow: "Operating principles",
    principlesKicker: "HOW WE WORK",
    p1Title: "Material over exhaustive",
    p1Copy: "Depth follows decision relevance. We do not confuse a longer checklist with a better diligence outcome.",
    p2Title: "Direct over dramatic",
    p2Copy: "Technical risk is stated clearly, with proportion and context. No fear-based findings. No false comfort.",
    p3Title: "Evidence over instinct",
    p3Copy:
      "Views are traceable to what was inspected, discussed, and tested\u2014and explicit about remaining uncertainty.",
    p4Title: "Discreet by default",
    p4Copy:
      "Information access, communication, and reporting are treated with the care expected in a live transaction.",
    positionEyebrow: "Our position",
    positionQuote: "\u201cKnow what the technology can carry\u2014before the deal has to.\u201d",
    positionBody:
      "Independent technical evidence for investors making early-stage decisions and counsel managing technology-led transactions across Europe.",
    callTitle: "Start with the decision in front of you.",
    callButton: "Frame the decision",
  },

  // ─── Approach page ─────────────────────────────────────────────────────────
  approach: {
    introEyebrow: "Diligence approach",
    introTitle: "Follow the evidence to the",
    introItalic: "decision.",
    introCopy:
      "An Oliversys review is scoped around materiality. Technical depth is not the endpoint; a defensible transaction view is.",
    phasesEyebrow: "A decision-led review",
    phasesKicker: "MANDATE / 04 PHASES",
    phase1Title: "Frame the decision",
    phase1Copy:
      "Align the scope to the transaction thesis, stage, material assumptions, and decision timeline. The review starts with what could change the deal\u2014not a fixed checklist.",
    phase1Meta: "Thesis \u00b7 Scope \u00b7 Materiality",
    phase2Title: "Inspect the evidence",
    phase2Copy:
      "Review the product, architecture, codebase, engineering practices, security posture, data dependencies, team, and roadmap in the depth the mandate requires.",
    phase2Meta: "Documents \u00b7 Systems \u00b7 Interviews",
    phase3Title: "Challenge the plan",
    phase3Copy:
      "Test whether current technical reality can carry the commercial plan. Surface hidden dependencies, delivery constraints, and costs that may sit outside the model.",
    phase3Meta: "Capacity \u00b7 Cost \u00b7 Constraint",
    phase4Title: "Resolve the deal view",
    phase4Copy:
      "Deliver direct findings, transaction implications, and a prioritized post-close view. Debrief the deal team so uncertainty is explicit and decisions remain accountable.",
    phase4Meta: "Findings \u00b7 Implications \u00b7 Priorities",
    scopeEyebrow: "Review surface",
    scopeH2: "Broad enough to catch the dependency. Focused enough to protect the timeline.",
    figCaption: "FIG. 02 / EVIDENCE PATH",
    scope1: "Product and roadmap realism",
    scope2: "Architecture and scalability",
    scope3: "Codebase and engineering health",
    scope4: "Security, data, and resilience",
    scope5: "Team capability and key-person risk",
    scope6: "Delivery model and technical cost",
    scope7: "Third-party and platform dependency",
    scope8: "Integration and post-close priorities",
    deliverableEyebrow: "What reaches the room",
    deliverableH2: "A report built to be used, not filed.",
    del1Title: "Executive deal view",
    del1Copy: "The most consequential technical facts, stated directly.",
    del2Title: "Prioritized findings",
    del2Copy: "Severity, evidence, confidence, and practical implication.",
    del3Title: "Action path",
    del3Copy: "Questions for the deal, protections to consider, and post-close priorities.",
    seeInvestorMandate: "See the investor mandate",
    callButton: "Define the review scope",
  },

  // ─── Tier 1 service page ───────────────────────────────────────────────────
  tier1: {
    heroEyebrow: "Tier 1 \u00b7 Technical Due Diligence",
    heroH1a: "Red Flag Scan \u2014 a pre-transaction technical read,",
    heroH1em: "delivered in 3\u20135 business days.",
    heroAside:
      "Up to 5 repositories, single-interview analysis. A 10\u201315 page signed report plus a Go / Caution / No-Go recommendation. Designed for seed and Series A investment committees where a red flag is a term-sheet-blocker.",
    slaNote:
      "Applicable to an aggregate of up to 5 repositories with up to 200,000 lines of code total (excluding comments), 20,000 commits in the Git history, 500 aggregate dependencies (direct + transitive), and 3 primary languages, with a reproducible build on a clean machine completing within 15 minutes.",
    slaWarning: "Targets exceeding any of these thresholds are quoted separately after a scoping call.",
    whatEyebrow: "What this engagement is",
    whatKicker: "SCOPE / TWO PHASES",
    whatH1: "Up to 5 repositories. Two phases. Every finding cites file and line.",
    phase1Title: "Phase 1 \u2014 Pipeline execution (day 1\u20132)",
    phase1Copy:
      "A 13-skill analysis pipeline runs against the target repositories pinned to a specific commit hash. Every finding cites file and line. Findings are ranked by severity and linked to the buyer\u2019s stated concern.",
    phase2Title: "Phase 2 \u2014 Interview and synthesis (day 3\u20135)",
    phase2Copy:
      "One 90-minute interview with the target\u2019s Founder or Chief Technology Officer, with questions calibrated to what the pipeline surfaced. Interview transcript is synthesised into a written narrative naming the specific technical risks against the deal thesis.",
    assessedEyebrow: "What is assessed",
    assessedKicker: "13-SKILL PIPELINE",
    skillRepoForensics: "Repository forensics",
    skillRepoForensicsDetail:
      "Bus factor, top contributor share, velocity trend, dormancy classification, per-file hotspot analysis.",
    skillTestPosture: "Test posture",
    skillTestPostureDetail:
      "Real coverage execution (not heuristic), assertion density, testing framework detection, continuous-integration configuration.",
    skillCodeQuality: "Code quality",
    skillCodeQualityDetail:
      "Total lines of code by language, aggregate complexity, TODO / FIXME density.",
    skillMaintainability: "Maintainability",
    skillMaintainabilityDetail:
      "Per-function cyclomatic complexity, code duplication ratio (via PMD Copy/Paste Detector), synthetic technical-debt ratio, top hotspot functions with file and line.",
    skillScalability: "Scalability posture",
    skillScalabilityDetail:
      "Presence of async patterns, distributed caching, queue systems, rate limiting, autoscaling configuration, load-test artefacts.",
    skillAI: "Artificial-intelligence surface",
    skillAIDetail:
      "Provider client libraries, model call sites, vector stores, prompt assets, evaluation harness presence \u2014 the single strongest signal separating real machine-learning products from AI-washing.",
    skillOps: "Operational readiness",
    skillOpsDetail:
      "API specifications, deployment declarations, infrastructure-as-code, monitoring integration, health-check endpoints, runbooks.",
    skillDeps: "Dependency risk",
    skillDepsDetail:
      "Known vulnerabilities via Trivy against a database refreshed within 48 hours, misconfigurations, top exploitable items.",
    skillCreds: "Credentials",
    skillCredsDetail:
      "Pattern scan via Gitleaks + live verification via Trufflehog \u2014 verified positives distinguished from documentation examples and expired tokens.",
    skillLicense: "License exposure",
    skillLicenseDetail:
      "Full Software Bill of Materials via Syft, classification into permissive / weak-copyleft / strong-copyleft / commercial-restricted categories, viral-license landmines named.",
    skillStatic: "Static analysis",
    skillStaticDetail: "Semgrep against a language-appropriate rule set plus custom regional rule packs.",
    timelineEyebrow: "Estimated timeline",
    timelineKicker: "3\u20135 BUSINESS DAYS",
    tl0Day: "Day 0",
    tl0Action:
      "Repository access, three-field intake form (investment thesis, primary concern, decision date), pinned commit hash captured.",
    tl12Day: "Day 1\u20132",
    tl12Action:
      "Full 13-skill pipeline execution against pinned commit. Every finding cites file, line, and commit hash.",
    tl3Day: "Day 3",
    tl3Action: "90-minute interview with target\u2019s Founder or Chief Technology Officer.",
    tl4Day: "Day 4",
    tl4Action:
      "Analyst validation: read all high-severity findings, sample 20\u2009% of medium-severity, read top 10 hotspot files by change frequency.",
    tl5Day: "Day 5",
    tl5Action: "Report finalisation, analyst signature, delivery to fund.",
    delivery:
      "Delivery: signed 10\u201315 page PDF report plus supporting artefacts, delivered directly to the fund.",
    interviewsEyebrow: "Interviews",
    interviewsKicker: "ONE 90-MINUTE SESSION",
    interviewRole: "Required role:",
    interviewRoleDetail:
      "target\u2019s Founder or Chief Technology Officer \u2014 someone who can speak to both architecture decisions and hiring plans.",
    interviewFormat: "Format:",
    interviewFormatDetail: "video call, recorded with the interviewee\u2019s consent for note-taking accuracy.",
    interviewFormatNote: "On-site presence can be negotiated with expenses on behalf of the client.",
    interviewDuration: "Duration:",
    interviewDurationDetail:
      "90 minutes, with questions generated from pipeline findings \u2014 not a generic checklist.",
    whatReachesEyebrow: "What reaches the fund",
    whatReachesH2: "A signed opinion \u2014 not a generated summary.",
    del1Title: "Go / Caution / No-Go recommendation",
    del1Copy:
      "Distilled from the aggregate risk picture across all pipeline sections, calibrated against the buyer\u2019s stated concern. The recommendation is the analyst\u2019s opinion, informed by the pipeline \u2014 it is not automated.",
    del2Title: "Reproducible findings",
    del2Copy:
      "Every report cites the exact rubric version, commit hash, and pinned target commit. Any finding can be regenerated six months later by checking out the engagement tag and re-running the pipeline. Foundation for defending the report against a challenge.",
    tier1FitsEyebrow: "When Tier 1 fits",
    tier1FitsH2: "Seed to Series A decisions with a technical thesis.",
    tier1FitsCopy:
      "The investment thesis is technical \u2014 product-market fit is understood, but the buyer needs to know whether the code can deliver on the roadmap. The fund lacks a technical partner able to spend a week on the target\u2019s repository. The timeline is 5 business days or longer before the term sheet is signed.",
    tier2EyebrowWhen: "When to consider Tier 2",
    tier2H2When: "Some situations call for broader scope.",
    tier2CopyWhen:
      "The target has more than 5 repositories. The deal thesis depends on a specific AI claim being verifiably true. The fund is committing significantly more capital. The deal is a corporate acquisition rather than a growth-equity round.",
    seeTier2: "See Tier 2 \u2014 Full Technical Due Diligence",
    tier2SlaNote: "Subject to repository limits. See the note on the Tier 1 page.",
    callTitle: "Scope a Red Flag Scan.",
    callCopy:
      "Share the target, the thesis, and the decision date. Oliversys will confirm scope, intake, and turnaround within one business day.",
    callButton: "Request an engagement scope call",
  },

  // ─── Tier 2 service page ───────────────────────────────────────────────────
  tier2: {
    heroEyebrow: "Tier 2 \u00b7 Technical Due Diligence",
    heroH1: "Full Technical Due Diligence \u2014 end-to-end scope,",
    heroH1em: "delivered in 7\u201310 business days.",
    heroAside:
      "Multi-repository scope. Verified AI claims. Full architecture trace. Scalability and infrastructure cost analysis. Roadmap feasibility versus team capacity. A 30\u201340 page signed report plus a 20-slide Investment Committee readout deck \u2014 ready for a 1-hour decision meeting.",
    slaNote:
      "Applicable to an aggregate of up to 10 repositories, 500,000 lines of code total (excluding comments), 100,000 commits in the Git history, 1,500 aggregate dependencies, and 5 primary languages, with a reproducible build on a clean machine completing within 30 minutes.",
    slaWarning: "Targets exceeding any of these thresholds are quoted separately after a scoping call.",
    whatEyebrow: "What this engagement is",
    whatKicker: "SCOPE / THREE PHASES",
    whatH1: "Full scope. Multi-repository. Decision-ready for the Investment Committee.",
    whatBody:
      "The Full Technical Due Diligence engagement runs the 13-skill pipeline across every repository named in scope, pinned to specific commit hashes. Two to three interviews across the target\u2019s engineering leadership are distilled into a named-narrative section of the report. A full architecture trace, AI-claims verification, and roadmap feasibility read complete the picture.",
    phase1Title: "Phase 1 \u2014 Pipeline execution (day 1\u20133)",
    phase1Copy:
      "The 13-skill analysis pipeline runs against every repository named in scope, pinned to specific commit hashes. Every finding cites file, line, and repository.",
    phase2Title: "Phase 2 \u2014 Interviews (day 4\u20136)",
    phase2Copy:
      "Two to three interviews with the target\u2019s engineering leadership, calibrated to what the pipeline surfaced. Transcripts synthesised into a named-narrative section of the report.",
    phase3Title: "Phase 3 \u2014 Synthesis and IC readout (day 7\u201310)",
    phase3Copy:
      "Full architecture trace, AI-claims cross-reference, scalability cost analysis, roadmap feasibility read, and Investment Committee readout deck preparation. Report signed and delivered.",
    assessedEyebrow: "What is assessed",
    assessedKicker: "EVERYTHING IN TIER 1, PLUS",
    assessedIntro:
      "Tier 2 covers the full 13-skill pipeline that runs in a Tier 1 Red Flag Scan, and adds the following dimensions:",
    add1Title: "Full architecture trace",
    add1Detail:
      "The analyst reads the architecture diagram against a specific critical path in the code \u2014 billing, authentication, or the deal thesis\u2019 load-bearing feature \u2014 verifies the diagram matches reality, and names the risks introduced by the delta. Written as a section of the report; not automatable.",
    add2Title: "Artificial-intelligence claims verification",
    add2Detail:
      "Every claim in the pitch about model behaviour is cross-referenced against actual model call sites in the code, evaluation harnesses if present, and interview responses. Distinguishes genuine AI products from AI-washing.",
    add3Title: "Scalability + infrastructure cost analysis",
    add3Detail:
      "Projected cost per unit of growth given the current architecture. Identifies the specific components that will need to change first as traffic grows 10x, and what those changes will cost in engineer-hours and cloud spending.",
    add4Title: "Roadmap feasibility versus team capacity",
    add4Detail:
      "Reads the target\u2019s stated roadmap against the current team\u2019s headcount, seniority mix, and hiring plan. Names the roadmap items that are structurally under-resourced.",
    add5Title: "Interview synthesis (2\u20133 sessions)",
    add5Detail:
      "Distilled into a written narrative that names who runs what, who owns what, and where the leverage points sit \u2014 not raw quotes.",
    add6Title: "Investment Committee readout appendix",
    add6Detail:
      "A 20-slide deck designed for a 1-hour Investment Committee call. Contains the recommendation, the top 5 findings ranked by transaction relevance, and a decision-ready set of buyer-facing next steps.",
    seeFullList: "For the full list of base pipeline skills, see the",
    seeTier1Link: "Tier 1 Red Flag Scan page",
    timelineEyebrow: "Estimated timeline",
    timelineKicker: "7\u201310 BUSINESS DAYS",
    tl0Day: "Day 0",
    tl0Action:
      "Repository access for every repo in scope, three-field intake form, pinned commit hashes captured.",
    tl13Day: "Day 1\u20133",
    tl13Action:
      "Full 13-skill pipeline execution against all pinned commits. Multi-repo scope handled at orchestrator level; per-repository manifests roll up into one deliverable.",
    tl4Day: "Day 4",
    tl4Action: "First interview: target\u2019s Founder or Chief Technology Officer (90 minutes \u2014 architecture + roadmap).",
    tl5Day: "Day 5",
    tl5Action:
      "Second interview: target\u2019s Head of Engineering or Tech Lead (60\u201390 minutes \u2014 day-to-day execution + hiring).",
    tl6Day: "Day 6",
    tl6Action:
      "Optional third interview: senior engineer or Head of Operations (60 minutes \u2014 deployment + reliability + on-call posture).",
    tl79Day: "Day 7\u20139",
    tl79Action:
      "Analyst validation: read all high-severity findings, all medium-severity findings, full architecture trace, all interview transcripts, AI-claims cross-reference. Estimated 8\u201312 hours of analyst time.",
    tl10Day: "Day 10",
    tl10Action:
      "Report finalisation, Investment Committee readout deck preparation, analyst signature, delivery to fund.",
    delivery:
      "Delivery: signed 30\u201340 page PDF report + Investment Committee readout deck (20 slides), delivered directly to the fund.",
    interviewsEyebrow: "Interviews",
    interviewsKicker: "2\u20133 SESSIONS ACROSS ENGINEERING LEADERSHIP",
    roleRequired: "REQUIRED",
    roleOptional: "OPTIONAL",
    interviewNote:
      "All interviews are conducted by video call, recorded with each interviewee\u2019s consent for note-taking accuracy. On-site presence can be negotiated with expenses on behalf of the client.",
    whatReachesEyebrow: "What reaches the fund",
    whatReachesH2: "Report and IC deck \u2014 both signed by the analyst.",
    del1Title: "Go / Caution / No-Go recommendation",
    del1Copy:
      "Distilled from the aggregate risk picture across every dimension, calibrated against the buyer\u2019s stated concern and the roadmap feasibility read. Presented as part of the Investment Committee readout appendix, ready for the fund\u2019s decision meeting.",
    del2Title: "Reproducible per-repository findings",
    del2Copy:
      "Every report cites the rubric version, commit hash, and pinned target commit. Multi-repo engagements pin each repository separately; the orchestrator merges per-repo manifests into a single deliverable.",
    tier2FitsEyebrow: "When Tier 2 fits",
    tier2FitsH2: "Series B and later \u2014 or when multiple technical claims must be simultaneously true.",
    tier2FitsCopy:
      "Series B and later rounds where the investment thesis depends on multiple technical claims being simultaneously true. Corporate mergers and acquisitions where a bad-fit target is a fund-wounding event. Search-fund acquisitions where the acquirer will be operating the code post-close. Deals with polyrepo scope or an AI claim that must be verifiably true. Investment committees that want a decision-ready readout deck delivered with the report.",
    lighterEyebrow: "Looking for a lighter-scope read?",
    lighterH2: "Tier 1 covers a single repository in 3\u20135 business days.",
    lighterCopy:
      "For seed and Series A decisions where the target is a single repository and the decision timeline is tight, the Red Flag Scan delivers a signed report and Go / Caution / No-Go recommendation at lower cost and faster turnaround.",
    seeTier1: "See Tier 1 \u2014 Red Flag Scan",
    tier1SlaNote: "Subject to repository limits. See the note on the Tier 1 page.",
    interviewRole1: "Founder or Chief Technology Officer",
    interviewFocus1: "Architecture decisions, product roadmap, hiring plan.",
    interviewRole2: "Head of Engineering or Tech Lead",
    interviewFocus2: "Day-to-day execution, code review posture, testing culture.",
    interviewRole3: "Senior engineer or Head of Operations",
    interviewFocus3: "Deployment, on-call, incident history, reliability posture.",
    callTitle: "Scope a Full Technical Due Diligence engagement.",
    callCopy:
      "Share the target, the number of repositories, the deal thesis, and the decision date. Oliversys will confirm scope, intake, and turnaround within one business day.",
    callButton: "Request an engagement scope call",
  },

  // ─── Blog ──────────────────────────────────────────────────────────────────
  blog: {
    eyebrow: "Insights",
    heading: "Writing on technical due diligence.",
    readPost: "Read",
    noPosts: "No posts yet.",
  },

  // ─── 404 ───────────────────────────────────────────────────────────────────
  notFound: {
    eyebrow: "File not found / 404",
    h1: "This evidence trail ends here.",
    body: "The page may have moved, but the route back to a clearer technical decision is intact.",
    returnButton: "Return to Oliversys",
  },
};

// The Translations type uses string (not literal) so PT and ES can assign any string.
export type Translations = typeof en;
