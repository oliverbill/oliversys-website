/**
 * Blog content collection — Forensic Ember editorial.
 * Articles are authored in tech-due-diligence-report/content/articles/ and
 * transcribed here for static rendering. No runtime markdown parsing.
 * Add new articles at the top of the `articles` array.
 */

export type Pillar = "educational" | "ai-washing" | "industry-take" | "behind-machine";

export interface Article {
  slug: string;
  title: string;
  description: string;
  pillar: Pillar;
  publishDate: string; // YYYY-MM-DD
  author: string;
  tags: string[];
  /** Raw markdown body — rendered by BlogPost page */
  body: string;
}

export const PILLAR_LABELS: Record<Pillar, string> = {
  educational: "Educational",
  "ai-washing": "AI Washing",
  "industry-take": "Industry",
  "behind-machine": "Behind the Machine",
};

/** Articles in reverse-chronological order (newest first) */
export const articles: Article[] = [
  {
    slug: "what-codebase-history-catches",
    title: "What the Git-Forensics Agent Catches and What Only a Human Catches",
    description:
      "The agent surfaces bus factor, velocity, and hotspots in under 5 seconds. The human catches whether the pattern is a warning or a founder story. Both parts are non-optional.",
    pillar: "behind-machine",
    publishDate: "2026-07-14",
    author: "William",
    tags: ["git", "forensics", "technical-due-diligence", "codebase-history", "human-judgment"],
    body: `Top-1 contributor at 33% over 4 years. The rubric calls that healthy. The person had already handed in their notice.

This is the gap between what an automated forensics pass surfaces and what a senior engineer reading the same data can see. Both parts of the review are necessary. Neither substitutes for the other.

## What the agent surfaces

The git-forensics skill in a structured technical review runs a pure-git analysis pass in under 5 seconds. No network calls, no external dependencies. The steps:

Bus factor — a contributor ranking by commit count, all-time and last-12-months, with the top-1 and top-3 percentage shares. The rubric classifies: below 50% top-1 is "healthy," 50 to 70% is "high-concentration," above 70% is "severe-key-person-risk."

Velocity trend — the commit pattern over the last 12 months, bucketed by month. The classification runs from "dormant-over-year" (last commit more than 12 months ago — this surfaces as a top-3 red flag in every report regardless of tier) through "declining," "stable," and "accelerating."

Hotspot files — the 10 files with the highest churn in the last 12 months. High churn on a single file is usually either "this is the most important file" or "this file is structurally broken and gets patched constantly." The file path disambiguates.

Rushed pre-deal cleanup — a count of commits in the last 30 days that each changed more than 20 files. Three or more such commits is "suspicious." One is "one-off." This is the pre-deal grooming signal.

The agent captures all four outputs in under 5 seconds, writes them to a structured JSON summary, and passes that to the report. The analysis phase takes less time than it takes to open the repo in a browser.

## What only the human catches

The rubric assessment is a floor. It tells you where to look. It does not tell you what you are looking at when you look there.

A concentration number is not a finding. A CTO who owns 60% of a 3-year repo is either the bus-factor risk or the reason the product shipped at all. The commit graph cannot tell you which. Two questions to the person who joined the team most recently can.

A "healthy" score with a top-1 share of 33% reads as a non-issue until the technical interview reveals that contributor is 6 weeks from their last day. The rubric cannot know that. The automated summary cannot know that. The question "who are the two people who know this codebase best, and what is their plan for the next 18 months?" is the only instrument that catches it.

Velocity trend classifications are similarly bounded by what they can see. "Declining" means the recent-3-month commit rate is less than half the prior-9-month rate. That is a mathematical observation. Whether declining velocity is a team contracting, a product entering maintenance mode, or an engineering team paused pending the raise is a question the interview answers, not the git log.

The hotspot files are the most useful mechanically — high churn on a database migration file in the payments service is a specific finding with a specific consequence. But even here, context changes the reading. A file that churns because it is actively developed by a growing team is different from a file that churns because it is structurally brittle and gets touched by anyone who works near it.

When I led QA at a mid Fintech and later at government-scale payments infrastructure, I learned to read these patterns through the lens of team dynamics: who owns what, who reviews what, what the commit style says about communication habits, whether the message quality degrades under pressure. None of that is in the rubric. All of it is in the reading.

## Why the signature layer is non-optional

Every technical due diligence firm now runs the same open-source scans. Semgrep, Trivy, Gitleaks, and git shortlog are public tools. The raw signal is replicable by anyone with a laptop and read access.

The differentiator is who reads the output and what they see when they read it.

A rubric score of "healthy" on bus factor should not close the conversation. It should open a question: who is this contributor, are they still here, and what happens if they leave 6 months post-close? A rubric score of "severe-key-person-risk" should open a different question: is this founder-as-CTO, which is expected at seed stage, or is this a team that has not grown beyond a single technical owner?

These are not questions the agent answers. They are questions the agent surfaces so the engineer reading the report knows where to spend the interview time.

The value of the automated pass is not the findings. It is the targeting. Five seconds of git forensics tells me where the 2-hour interview should focus. The interview delivers the actual risk assessment.

## Bottom line

The git-forensics agent surfaces bus factor, velocity, hotspots, and pre-deal cleanup flags in under 5 seconds. The human catches whether a "healthy" concentration score is healthy in context, whether "declining" velocity is a pause or a collapse, and whether the top-1 contributor is a stability anchor or a flight risk. The agent sets the agenda. The human writes the finding.`,
  },
  {
    slug: "solo-consultant-with-agents-thesis",
    title: "One Consultant With Agents Versus a Five-Person Firm",
    description:
      "The unit economics of professional services shifted when agents started doing the analysis work. Senior judgment plus agent throughput changes what a solo practice can deliver.",
    pillar: "industry-take",
    publishDate: "2026-07-10",
    author: "William",
    tags: ["ai-agents", "professional-services", "solo-consulting", "unit-economics", "technical-due-diligence"],
    body: `The five-person technical due diligence firm is a cost structure answer to a throughput problem. Without automation, the analysis work that fills a 40-page report — static analysis, dependency audits, git history forensics, security scanning, architecture reconstruction — takes a team of five analysts 3 to 4 weeks to produce with consistent quality. The firm charges €25k to €80k to cover that labor cost plus margin.

The throughput problem has changed. The labor cost structure has not yet caught up to that change.

## Why the firm model was the only viable structure

Before agents and capable language models, there was no way to compress the analysis phase of a technical review without compressing quality. A single senior engineer doing all the analysis manually takes roughly the same wall-clock time as a team — the work is not easily parallelizable by one person. You cannot run Semgrep, audit 400 dependencies, reconstruct an architecture from 200k lines of code, and read a 4-year git history simultaneously as one human. You sequence them, and each one takes hours.

The firm model exists because it solves this serialization problem with headcount. Four junior analysts run the tools in parallel. A senior partner synthesizes. The output is a report that took 120 to 200 hours of aggregate human time to produce.

At €25k minimum, the firm is charging roughly €125 to €200 per aggregate human hour. That is the market rate for this structure.

## What agents changed

An agent pipeline running automated analysis — static analysis via Semgrep, dependency CVE scanning via Trivy, secret scanning via Gitleaks, git history forensics via pure git commands, license audit via SPDX tooling — compresses the analysis phase from 60 to 80 analyst-hours to 4 to 6 hours of wall-clock time. The tools run sequentially or in parallel depending on the orchestration. The raw outputs are written to disk. The structured summaries — the distilled findings from each tool — are assembled into a manifest that the synthesis step reads.

The senior engineer who previously supervised a team of analysts now runs the pipeline and reads the manifest. The analysis phase that previously required four parallel workers now requires one pipeline with a timeout budget.

What the pipeline does not change: the judgment layer. Whether a 40% top-1 contributor share is a bus-factor risk or a stable founding-engineer concentration depends on whether that engineer is staying. Semgrep finds 200 findings; reading which 30 matter in this deployment context takes a senior engineer. The AI surface scan surfaces whether the codebase calls a model; verifying whether the calling pattern constitutes a real production integration requires domain knowledge.

The judgment layer is still human. It is the product. The analysis layer is now automated. It is the enabler.

## The unit economics argument

The firm charges €25k minimum to cover 120 to 200 aggregate analyst-hours plus overhead. At a Tier 1 price point, the solo-with-agents model covers approximately 25 to 35 hours of the founder's time — the judgment layer — plus tool costs of €150 to €400 per engagement. Gross margin runs around 95%.

The effective hourly rate at that price point and time commitment is competitive with the senior-partner billing rate at a firm, without the firm overhead or the junior-analyst variance in output quality.

The moat in this model is not the tooling. The tools — Semgrep, Trivy, Gitleaks, standard git commands — are public and replicable. Any engineer can run them. The moat is: the judgment that comes from 20 years in production systems, including QA transformation at government-scale payments infrastructure, engineering at an e-commerce SaaS, and building a production agentic system; the signature on the report (which is a specific engineer the client can call with a follow-up question); and the niche expertise in markets and deal types where that background is directly relevant.

A five-person firm can replicate the tooling. It cannot replicate the specific judgment, the specific background, or the specific price point that the solo-with-agents structure enables.

## Bottom line

The five-person firm was the only viable structure for professional technical diligence because the analysis work required parallel human execution. Agent pipelines changed that. Senior judgment plus agent throughput delivers comparable analysis quality at a cost structure that opens market segments the firm model could not reach. The moat is judgment and signature, not tooling.`,
  },
  {
    slug: "iberian-seed-tech-dd-skipped",
    title: "Why Iberian Seed Funds Skip Tech Diligence",
    description:
      "Traditional TDD costs €25k–€80k on a €500k check. The math does not work, so diligence gets skipped. The price point has changed. The gap has not closed yet.",
    pillar: "industry-take",
    publishDate: "2026-07-07",
    author: "William",
    tags: ["iberian-vc", "seed-funding", "technical-due-diligence", "market-gap", "portugal-spain"],
    body: `Iberian seed funds skip technical diligence because the math does not work. A €25k to €80k traditional review on a €500k check is 5 to 16 percent of the round. Nobody spends that. So what happens instead? An hour on a Zoom call, a CTO who nods a lot, and a signature that later reads as "we should have caught this."

## Why the gap has been open for years

The gap is structural, not a choice. Seed partners are not indifferent to technical risk — they are operating with the tools available to them, and the available tool costs more than the deal supports.

Traditional technical due diligence is priced for mid-market M&A. A three-to-five person consulting team running a four-week engagement on a €50M acquisition can price at €50k and the math works — it is 0.1% of the deal value. Run the same team at the same price on a €750k seed round and you are at 6.7% of the check size for a service that often delivers a generic report two weeks after the investment decision has already been made.

This is why the incumbent structure cannot solve the problem. The pricing is not the result of inefficiency. It is the result of labor economics: senior engineers who could be doing this work are hired by consultancies that charge for headcount. The headcount floor is €25k. Below that, the math does not close for the supplier either.

The consequence is that Iberian seed funds — and most European seed investors — make technical commitments of €250k to €2M on an hour of conversation and a product demo. Sometimes that works. Sometimes the first 90 days post-close reveal a codebase that is unmaintainable, a team where the only person who understands the infrastructure is the co-founder who just became a flight risk, or a security posture that is three months of remediation away from passing a Series A due diligence.

## What has changed and what has not

What changed: the cost structure of running a technical review. A senior engineer with 20 years in production systems, working with an agent pipeline that handles the analysis automation, can deliver a rigorous single-repo read in 4 hours instead of four weeks. The labor economics look different when the human doing the work is the one with the judgment rather than a junior analyst writing a template report under a senior partner's name.

Under €1k for a spot-check tier review. Under €10k for a full structured read with security, dependencies, architecture, and a signed report. Both of these fit inside a seed diligence budget for the first time.

What has not changed: the awareness that this is now possible. Most Iberian seed partners operate with the assumption that technical diligence is priced out of reach for their check sizes. This assumption was accurate until recently. It is no longer accurate. The market has not caught up to the cost shift.

The other thing that has not changed: the risk profile of the deals. Seed-stage software companies with one or two engineers, a codebase that ranges from carefully maintained to "we'll clean it up after the raise," and a technical claims story that sometimes overstates the AI maturity — the risk profile is exactly what structured technical diligence was designed to catch. The check size changed. The underlying technical risk did not scale down with it.

## What this means for a Portuguese or Spanish seed fund

A spot-check read before a €500k wire is now within the budget of that round. It covers the questions an hour-long Zoom does not: bus factor, test integrity, dependency CVE exposure, and the basic "is the AI actually a model or an if-statement" question.

Not every deal needs a full structured read. A seed check on a pre-product team with two engineers and a prototype does not warrant four hours of static analysis. A seed check on a team claiming €200k ARR, 3 engineers, and a proprietary AI model does — because that claim is making technical assertions that can be verified in 4 hours and the consequence of getting them wrong is a post-close conversation about why the AI does not work the way the pitch said it did.

The value of the spot-check is not just the findings. It is the frame: a signed, senior-engineer opinion on the technical risk profile before the decision is final. That frame changes the post-close conversation. "We knew there was a concentration risk and priced it in" is a different position than "we found out after close."

## Bottom line

The math that kept technical diligence out of seed rounds has changed. Under €1k for a spot-check, under €10k for a full read — both fit inside the diligence budget of a deal that previously could not support them. The gap is not closed because awareness has not caught up to the price shift. If you are a Portuguese or Spanish seed partner shipping deals without a technical read, the constraint you are solving around may no longer exist.`,
  },
  {
    slug: "3-questions-that-expose-ai-washing",
    title: "Three Questions That Expose AI-Washing in Ten Minutes",
    description:
      "An eval harness, inference cost at p90, and a model deprecation plan. Any CTO running real AI can answer these in under ten minutes. Here is what the answers reveal.",
    pillar: "ai-washing",
    publishDate: "2026-07-04",
    author: "William",
    tags: ["ai-washing", "llm", "technical-due-diligence", "ai-verification", "cto-interview"],
    body: `You have 10 minutes with the CTO before the call ends. Three questions will tell you whether the "AI" in the pitch is a production system or a positioning claim. If any answer sounds rehearsed, you have a wrapper.

## The three questions and what they reveal

Most AI-washing in venture-backed startups is not deliberate fraud. It is a maturity gap between what the team has shipped and how the team has described what they shipped. The language is genuine; the technical substance has not caught up to it yet. These three questions probe for the operational discipline that production AI requires. A team that has it can answer quickly. A team that is still catching up will hedge.

**Question 1: What does your eval harness look like?**

A real team runs evals on every deploy. The word "harness" is deliberate — it implies a structured test apparatus, not a check someone runs when they remember to. A production eval harness has: a fixed set of golden inputs, scoring criteria for outputs (rubric-based, model-judged, or human-labelled), a CI job that runs the evals on every prompt change, and a record of how the score has moved over time.

A good answer sounds like: "We have 200 golden cases, scored by a judge model against a rubric. The CI job runs on every PR that touches the prompt layer. We've had two regressions in the last quarter — one we caught before shipping, one we didn't, and that one got fixed in 48 hours."

A bad answer sounds like: "We test manually," "we use LangSmith and it looks fine," or "our users would tell us if something was wrong." These are not eval harnesses. They are reactive monitoring after the fact. No harness means no measurement of regression. Every prompt change is an unquantified bet.

**Question 2: What is your cost per inference at the 90th percentile?**

Not the average. The 90th percentile. Average cost hides the tail — the rare, expensive calls that occur when the model receives a complex input, takes a reasoning path, or makes multiple API calls in an agentic loop. Real teams watch the tail because it sets the floor for unit economics.

A good answer sounds like: "€0.04 median, €0.19 at p90 on the deep-reasoning path. We route short classification tasks to a cheaper model to keep the median down." This answer demonstrates that the team has disaggregated cost by task type, which requires real operational instrumentation.

A bad answer is a shrug, "I'd have to check," or a number that is clearly the average presented as if it represents the range. At seed stage, low volumes may mean p90 data is too thin to be meaningful — this is not disqualifying. At Series A, no cost visibility is a red flag.

**Question 3: When Anthropic or OpenAI deprecates your model, what breaks first?**

The model providers deprecate regularly. Every team that has shipped seriously in AI over the last two years has migrated at least once. A team that has done a migration can name what broke first — usually the eval that failed, occasionally a production regression.

The value of the question is not the answer about deprecation specifically. It is the evidence that the team has run evaluations that would detect a regression. A team that says "we've migrated from GPT-4 to GPT-4o and our eval on sentiment classification dropped 3 points, which we fixed by adjusting the system prompt" has demonstrated: they have evals, they run them on model changes, and they know how to respond to regression.

A CTO who has never done a model migration has not shipped a production AI system long enough to experience one. A CTO who has shipped seriously and cannot name an eval that failed during a migration is the more concerning case: they migrated, but they were not watching what changed.

## What the patterns look like in practice

A genuine AI team answers all three questions in under five minutes without visible stress. They have thought about these things because production forced the questions. Cost monitors, eval pipelines, and migration histories are part of daily operations for a team running models at any serious scale.

A wrapper will hedge on at least two of the three. The hedges are informative: they tell you where the build depth actually is versus where the pitch locates it.

I have shipped AI systems in production, including multi-agent pipelines with LLM routing, retrieval-augmented generation, and model deprecation cycles. These are the questions I answered about my own stack. They are not designed to trip people up. They are the minimum operational questions any team running models at production scale should have already worked through.

## Bottom line

Eval harness, inference cost at p90, deprecation plan. Three questions. Ten minutes. A team with genuine production AI depth answers all three without hesitation. If any answer is vague after one follow-up, you have found the gap between the pitch and the build.`,
  },
  {
    slug: "ai-if-statement-vs-model",
    title: "Is Their AI a Real Model or an If-Statement",
    description:
      "Five questions separate a startup running actual LLM inference from one routing conditions through a wrapper. Each question has a tell. Here is how to read the answers.",
    pillar: "ai-washing",
    publishDate: "2026-06-27",
    author: "William",
    tags: ["ai-washing", "llm", "technical-due-diligence", "ai-verification", "investor-questions"],
    body: `"AI-powered" appears in roughly 70% of pitch decks crossing European VC desks in 2026. A meaningful fraction of those products route a string through an API call once, surround the rest of the logic with conditionals, and call the result "AI." The five questions below separate these from startups that actually run models at scale. Each question has a tell.

## What the questions reveal

The tell is not whether the team uses AI. Most do, in some form. The tell is whether they have built the operational discipline that real model usage requires. A team running inference at scale has to monitor cost, manage model drift, plan for deprecation, and measure output quality. These are not optional engineering concerns — they are table stakes for any production AI system. A team that cannot answer questions about them is a team that is not running models at production scale.

**Question 1: Show me your eval harness.**

A real team runs evaluations on every deploy — or at minimum on every prompt change. An eval harness has: golden inputs (a fixed test set), expected outputs or scoring criteria, a CI job that runs the evals and gates on the score, and a history of how the score has moved over time.

The tell: "we test manually" or "we watch LangSmith and it's fine" is not an eval harness. It is a monitoring dashboard with no gating. Every prompt change on a monitored-but-unevaluated system is a bet that the change did not break anything.

**Question 2: What is your cost per inference at the 90th percentile?**

Not the average — the 90th percentile. Real teams know this number because it determines whether the unit economics work. A good answer sounds specific: "€0.04 median, €0.19 at p90 on the deep-reasoning path." A shrug means the team is either not running at scale or not watching the bill.

**Question 3: Which model do you route to and why?**

A production AI system that handles different task types usually routes to different models based on task complexity and cost. A team that does this can describe their routing logic. A team using a single model for everything, with no routing layer, is either in an early stage of the build or has not needed to optimize yet. The answer reveals where they are in the maturity curve.

**Question 4: What happens when your model is deprecated?**

Anthropic and OpenAI deprecate models. Every team that has shipped seriously in AI over the last two years has done at least one model migration. A team that has done a migration can name the eval that failed first. That is the story you want to hear — not because migrations are good, but because they prove the team ran evaluations that caught the regression.

**Question 5: Show me one production prompt.**

A team running real models can show a prompt. A team that cannot produce a production prompt when asked — "it's too proprietary," "it's complicated to extract" — is usually protecting something that is less sophisticated than the pitch implies. The prompt itself matters less than the team's fluency with it.

## What real versus wrapped looks like

A real model integration answers most of these questions without hesitation. The team has thought about cost, drift, deprecation, and evaluation because production forces those questions. A wrapper — a startup that calls an API and presents the output as their AI — has not faced these operational realities yet, because the volume, the stakes, or the build depth have not demanded it.

I have shipped AI systems in production, including agentic pipelines with LLM routing, RAG integration, and multi-model orchestration. These are the questions I had to answer about my own stack when I was on the other side of the table. They are not trick questions. They are the minimum operational concerns any serious production AI team has already worked through.

## Bottom line

Five questions, 10 minutes, one CTO. An eval harness, inference cost at p90, routing logic, deprecation history, and one production prompt separate a team running models from a team calling an API with a confidence that exceeds their build depth. If any answer sounds rehearsed or vague, ask for the specific. The specific is where the real picture is.`,
  },
  {
    slug: "what-static-analysis-misses",
    title: "Semgrep Flagged 200 Issues. Thirty Mattered.",
    description:
      "Static analysis produces signal and noise in roughly equal measure. Here is how a senior engineer reads Semgrep output to rank what belongs in a DD report.",
    pillar: "behind-machine",
    publishDate: "2026-06-20",
    author: "William",
    tags: ["static-analysis", "semgrep", "security", "technical-due-diligence", "sast"],
    body: `Semgrep on a moderately complex codebase returns between 80 and 300 findings on a first run. The count is not the finding. The count is the starting point for a read that takes judgment to complete.

## The signal-to-noise problem in static analysis

Static analysis tools (Semgrep, Bandit, ESLint with security plugins, CodeQL) work by matching patterns against source code. They are rule-based. A rule that flags SQL string concatenation will fire on every SQL string concatenation in the repo, regardless of whether that concatenation is in a production query handler or a database migration script that runs once at deploy time and is wrapped in a transaction that rolls back on failure.

The tool cannot know the context. It sees a pattern; it fires a rule.

The structured summary from a Semgrep run in a technical review captures the count of ERROR, WARNING, and INFO findings, the top 10 by severity, and any custom rule hits from the DD-specific ruleset layered on top of the public rulesets. It does not capture whether the findings are exploitable in this specific deployment context. That read is the human's job.

The rulesets in a structured review use the \`p/security-audit\` and \`p/secrets\` packs as a baseline, with language-specific packs added on top (TypeScript, Python, Java, PHP, and others). Each pack targets a different class of vulnerability. The volume of findings scales with codebase size and language mix. A 50kLOC TypeScript monorepo running five Semgrep rulesets will produce more raw findings than a 10kLOC Go service running two.

A 15-minute timeout applies at spot-check tier. 30 minutes at Tier 1. 60 minutes at Tier 2. If Semgrep times out, the result is DEGRADED — partial output is still useful, and the status is explicit in the report rather than silently omitted.

## The contextual read: what makes a finding real

Three questions determine whether a static analysis finding belongs in a deal report.

**Is the code path reachable in production?** A SQL injection pattern in a database seed script that runs at deploy time under an admin account is not the same vulnerability as a SQL injection pattern in a public API endpoint that takes user input. Both fire the same Semgrep rule. Only one is an exploitable finding.

**Is the exposure surface user-facing?** A hardcoded credential in a test fixture file (a common false positive in \`p/secrets\`) is different from a hardcoded credential in a production configuration file. The pattern is identical; the consequence is not. The file path disambiguates.

**Has the team already mitigated it?** Some findings represent known risks that are mitigated at a different layer (a WAF rule, a network boundary, an input sanitizer that Semgrep cannot trace through). A team that can name the mitigation and show it in the infrastructure review is in a different position from a team that does not know the finding exists.

Running Semgrep is a 15-minute automated step. Reading the output is a 2-hour human step. The ratio is not accidental.

## Why "run Semgrep yourself" is not a substitute

When an investor asks "has someone done static analysis on this repo?" and the answer is "yes, we ran Semgrep in CI and it's green," that is not the same statement as "a senior engineer read the Semgrep output and ranked the findings against the deployment context."

A CI gate with Semgrep typically blocks on ERROR-severity findings only, ignores WARNING and INFO, and allows teams to suppress specific rules inline with comments. A repo with a clean Semgrep CI gate may have 40 WARNING-level findings that are suppressed rather than fixed, and a senior reading of those suppressions would reveal that several of them were suppressed without justification.

The static analysis skill in a structured review does not suppress anything. It captures everything Semgrep finds, ranks by severity, and presents the top 10 findings with file paths and line numbers. The founder then reads those 10 and decides which are real, which are mitigated, and which are in-scope but low-priority given the deployment context.

The "run it yourself" approach also misses custom rules. The DD ruleset includes patterns that generic public packs do not check — specific cloud provider credential patterns and other signals that matter for deals in this market.

## Bottom line

Static analysis output is the starting inventory, not the finding. Semgrep on a real codebase returns more issues than belong in a report. Reading the output with a deployment context in mind reduces 200 flags to 30 that matter and 3 that should be in the executive summary. That reading takes a senior engineer. The tool is the first 15 minutes. The judgment is the next 2 hours.`,
  },
  {
    slug: "git-history-forensics",
    title: "How to Read a Git History Like a Forensic Accountant",
    description:
      "Commit patterns tell stories that pitch decks do not. Velocity bursts, pre-deal cleanup, and AI-washed histories each leave a distinct trace. Here is how to read them.",
    pillar: "educational",
    publishDate: "2026-06-13",
    author: "William",
    tags: ["git", "forensics", "technical-due-diligence", "codebase-health", "commit-patterns"],
    body: `A git history is a time-stamped ledger of every decision an engineering team made. Forensic accountants look for patterns that diverge from normal business behavior — sudden write-offs, reclassifications, one-time entries timed around reporting periods. A git history rewards the same reading.

## Five patterns that mean something

After 20 years of reading histories — first as an engineer, then on paid technical reviews — five patterns have proven reliable signals. Not proof of anything, but signals worth investigating.

**Pattern 1: Dormancy with a recent burst.**

A repo goes quiet for 8 or 12 months and then shows a surge of commits in the 30 days before the deal. Run:

\`\`\`
git log --since='30 days ago' --shortstat --format='%H|%ai|%s'
\`\`\`

Three or more commits that each touched more than 20 files in the last 30 days is a "suspicious" flag on the rubric. This is the classic pre-deal grooming signal: someone cleaned up the code before inviting investors to look at it. The cleanup itself is not a problem. Cleanup that is not disclosed is the problem.

**Pattern 2: Velocity burst then flat.**

The history shows genuine acceleration — 50, 80, 100 commits a month — that then levels off completely. This pattern often corresponds to a founding sprint followed by a first major customer milestone, and then nothing. A team that stopped shipping is either stuck, stable, or waiting for investment to resume.

**Pattern 3: Accelerating velocity.**

The opposite is usually good news. Consistent month-over-month acceleration in commit activity over 6 to 12 months suggests a team building momentum, not coasting.

**Pattern 4: Commit messages that changed tone suddenly.**

Run:

\`\`\`
git log --format="%ai %s" | head -100
\`\`\`

A history that goes from "fix login token expiry edge case" to "refactor codebase for clarity" and "improve code quality" about 60 days before a raise is worth a follow-up. AI-assisted cleanup leaves a recognizable fingerprint: commit messages that are grammatically correct but semantically vague, usually clustered in a short window.

**Pattern 5: The contributor who disappeared.**

Run the last-12-months contributor list alongside the all-time contributor list. A name that holds 25% of all-time commits but has not committed in 14 months is a specific risk, not a generic one. Then look at the hotspot files:

\`\`\`
git log --format= --name-only --since='1 year ago' | grep -v '^$' | sort | uniq -c | sort -rn | head -20
\`\`\`

If the hotspot files were authored primarily by the departed contributor, the risk is concentrated.

## What the commands actually show

The git history skill in a structured review surfaces four outputs: bus factor (contributor concentration), velocity trend across the last 12 months, hotspot files by churn rate, and rushed pre-deal cleanup flags. The first pass runs in under 5 seconds.

Bus factor: top-1 contributor share above 50% triggers a concentration finding. Above 70% triggers a severe key-person risk flag. These thresholds come from the rubric; the interview adds the context.

Velocity trend classifications run from "dormant-over-year" (last commit more than 12 months ago — the first question this triggers is "is the team still working on this?") through "stable" and "accelerating." A dormant-over-year status surfaces in the top-3 red flags of any report, regardless of tier.

Hotspot files are the most-churned in the last year. High churn on a single file usually means one of two things: it is the most worked-on file because it is the most important, or it is the most worked-on file because it is structurally broken and gets patched constantly.

## What only a human catches

An automated pass catches the patterns. A human catches whether the patterns matter.

A 33% top-1 contributor share on a stable payments stack running for four years reads healthy on a rubric. The same number on a codebase where the top contributor handed in their notice last month reads as a deal risk. The rubric cannot tell the difference. The human interview can.

Reading a git history like a forensic accountant means knowing what normal business behavior looks like and noticing when the ledger diverges from it. Then asking why.

## Bottom line

Five patterns — dormancy-then-burst, burst-then-flat, accelerating activity, message tone shift, and the disappeared contributor — are reliable signals in git history reads. None are proof. All warrant a follow-up question. The commands take five minutes to run. The conversation they generate is the actual diligence.`,
  },
  {
    slug: "ten-question-tech-dd-angel",
    title: "Tech DD Any Angel Can Run in One Hour",
    description:
      "Ten questions across bus factor, test integrity, dependency health, infrastructure cost, and team velocity. Each answer reveals a specific risk before you write the check.",
    pillar: "educational",
    publishDate: "2026-06-06",
    author: "William",
    tags: ["angel-investing", "technical-due-diligence", "checklist", "seed", "codebase-health"],
    body: `An angel writing a €25k check cannot justify a €6k technical review. Sixty minutes of the right questions, asked in the right order, still catches roughly 60% of the risk. Here are ten questions that do that work, grouped by category.

## The ten questions

This framework covers five risk areas that a structured technical review examines at depth: contributor concentration, test integrity, dependency exposure, infrastructure cost, and team velocity. An hour of questions is not a rubric-based read. It is a first-pass filter that tells you which risks are worth paying to verify and which you can set aside.

**Bus factor (contributor concentration)**

*Question 1: Who are the two people who know the codebase best, and what is their plan for the 18 months after close?*

This surfaces key-person risk without requiring git access. A founder who cannot name two people immediately is telling you something. A founder who names the CTO and says "she's staying through the raise" is answering a different question — note the distinction between "staying through the raise" and "staying through the product build."

*Question 2: Has anyone significant left the engineering team in the last six months?*

Departures are often the story the git history is already telling. This question gives the founder a chance to contextualize the data before you pull it.

**Test integrity**

*Question 3: When did a test last catch a bug before it reached production?*

A team with genuine test discipline can name a specific example, usually in the last quarter. Vague answers ("we catch bugs all the time") are not the same thing. If the answer is "we have 80% coverage," you have not received an answer to the question.

*Question 4: What is your rule for a test to pass code review?*

A team that has thought about test quality has a rule. Common good rules: "every test must assert at least two outcomes," "no test without a failure message." The absence of a rule is an absence of a policy.

**Dependency health**

*Question 5: What is your dependency update cadence?*

A team that uses a bot (dependabot, renovate) and merges updates regularly has a manageable exposure surface. A team that hasn't updated dependencies in 18 months has accumulated the security exposure that goes with that.

*Question 6: Are there any dependencies you know are deprecated or end-of-life?*

Self-reporting here is a trust signal. A team that knows their dependency is EoL and has a migration plan is in a different position than a team that does not know. Either answer is informative.

**Infrastructure cost**

*Question 7: What is your monthly cloud spend, and what drives it?*

A founder who knows their compute cost by service has been watching the unit economics. A founder who answers "around €2k–€3k I think" for a product with significant usage may not have the cost visibility a post-investment team will need.

*Question 8: If you doubled your active users tomorrow, what breaks first?*

A CTO who has modeled this can answer it in one minute. A CTO who has not modeled it will hedge. The hedge is the answer.

**Team velocity**

*Question 9: How many features did you ship in the last 90 days? Which one took longest and why?*

The "which one took longest" follow-up is where risk surfaces. Long delivery cycles on features that should be routine often signal architectural coupling or technical debt.

*Question 10: What is the one technical decision from the last two years you would make differently?*

A team that has learned something concrete from a past architectural decision and can describe it plainly is a more reliable investment than one with no answer. The content matters less than whether an honest one exists.

## What the answers tell you

These ten questions form a first-pass filter, not a verdict. A good result across all ten does not mean the codebase is healthy. It means the risk surface is plausibly managed and the team has the self-awareness to know where the bodies are. A poor result on two or three of these is a signal that a structured technical read is worth the investment before the wire clears.

The questions work because they ask for specifics a team either knows or does not. Vague answers are not answers. Press once for the specific. If no specific emerges, treat the question as unanswered.

## Bottom line

Ten questions, one hour, five risk categories. This is not a substitute for a senior-engineer read — it does not surface CVEs, license risks, architectural debt, or rushed pre-deal cleanup in git history. It is a first-pass filter that identifies which deals warrant deeper technical work.`,
  },
  {
    slug: "coverage-number-is-theatre",
    title: "Test Coverage as a Metric Is Broken",
    description:
      "Coverage counts lines executed, not assertions made. One test file and 90 seconds is more diagnostic than any dashboard percentage. Here is the check.",
    pillar: "educational",
    publishDate: "2026-05-30",
    author: "William",
    tags: ["testing", "coverage", "technical-due-diligence", "code-quality", "assertions"],
    body: `A coverage number tells you how many lines of code were executed during a test run. It does not tell you how many of those executions checked anything. A test that calls a function, ignores the return value, and exits is a green line on the coverage report. This distinction matters more than the number.

## How the metric fails

Coverage tooling — Istanbul, JaCoCo, pytest-cov, SimpleCov — measures line execution. When a test calls a function, the lines inside that function are marked covered. If the test makes no assertion about what the function returned, the lines are still covered. The tool does not know the difference.

The practical consequence: teams can drive coverage to 80% or 90% without their tests catching any real bugs. The number looks like safety. The number is a count of how many lines got touched, nothing more.

The failure mode compounds with AI-generated test suites. A model asked to "write tests for this module" will call every public function and assert that no exception was thrown. That produces 100% line coverage on the happy path. It produces near-zero assertion coverage on anything that could go wrong. A six-hundred-test codebase where every test was AI-generated, every test passes, and none of them catch real bugs is the near-future version of this problem.

The 90-second check to run in any DD engagement: open one test file. Read three tests. Count the \`expect(\`, \`assert(\`, or \`Assert.\` calls. Under two per test on average and the coverage number is decorative.

In a spot-check on a PHP codebase with 71% reported coverage, the test-to-source ratio came back at 12% — lower than the coverage suggested. Opening one test file confirmed the pattern: most tests called the function under test and exited. The number was real. What it measured was not what it appeared to measure.

## The counter-example

When I ran QA at a mid Fintech managing government-scale payments, my team pushed line coverage from 40% to 82% over three months. In the same window, incidents dropped 68%. The two numbers looked correlated. They were not causal in the way they appeared.

The incident reduction came from a rule my team introduced: every test must assert at least two things. Not call two functions. Assert two outcomes. The coverage increase was a side effect of writing tests with a purpose. The assertions were the actual work.

What this means for a DD read: a team that went from 40% to 82% coverage is not necessarily in better shape than a team at 55% coverage with two assertions per test. The number is not the evidence. The assertion density is the evidence.

I ask for one test file in every engagement where coverage is cited as a quality indicator. One file, three tests, a count of \`assert\` calls. It takes 90 seconds. It tells me more than any dashboard.

## What to do differently

Before accepting a coverage number in due diligence:

Ask for one test file from the most-covered module. Not a cherry-picked example — the first file they would point to as representative.

Open it. Find three tests. Count assertion calls per test. Below two on average means the coverage number reflects execution, not verification.

Ask a follow-up: "When was the last time a test caught a bug before it reached production?" A team with genuine test discipline can name a recent example. A team with coverage theatre cannot, because their tests do not catch bugs.

If the repo uses AI-generated tests or has a high churn rate on test files, weight the coverage number even lower. AI-generated tests optimize for coverage. They do not optimize for catching the regression that ships next quarter.

The corrective is not more coverage. The corrective is an assertion rule: every test must check at least two outcomes. That rule, enforced in code review, produces tests that actually function as a safety net.

## Bottom line

A coverage percentage is a line-execution count. It is not a safety signal. One test file and 90 seconds of reading reveals whether the number reflects real verification or a nominal pass. Ask for that file before the coverage number goes into the deal memo.`,
  },
  {
    slug: "bus-factor-in-5-minutes",
    title: "Bus Factor in Five Minutes",
    description:
      "Three git commands reveal contributor concentration before you read a line of code. Here is what the numbers show and what only a human can catch.",
    pillar: "educational",
    publishDate: "2026-05-26",
    author: "William",
    tags: ["git", "bus-factor", "technical-due-diligence", "contributor-risk", "codebase-health"],
    body: `Every investor asks "who wrote this codebase?" before signing. Almost nobody runs the three commands that actually answer it. You do not need to clone the repo. You need read access on GitHub and a terminal.

## The shape of the problem

Bus factor is borrowed from engineering team theory: how many people would need to leave before the codebase becomes unmaintainable? At one, a single resignation reshuffles deal risk overnight. At three or above across a multi-year active history, concentration is unlikely to be an existential threat.

The question matters more at seed and Series A than later — teams are smaller, contributors are less replaceable, and institutional knowledge lives in fewer heads. A fund writing a €1M–€5M check should know the answer before the wire clears, not after the 30-day post-close discovery call.

Here are the three commands to run.

**Command one: all-time contributor ranking.**

\`\`\`
git shortlog -sne --all | head -20
\`\`\`

This ranks every contributor by commit count across all branches, with email. Read the top three names. Note what percentage of total commits the top-1 contributor holds.

**Command two: activity in the last twelve months.**

\`\`\`
git log --format="%an" --since="1 year ago" | sort | uniq -c | sort -rn | head -10
\`\`\`

Compare this against the all-time list. A name that dominates all-time but disappears in the last year is a warning: the person who knew the system has already moved on.

**Command three: first commit dates per contributor.**

\`\`\`
git log --format="%an %ad" --date=short | tail -20
\`\`\`

Read the first commit dates. A repo with four years of history and three consistent humans is substantially healthier than one with six months of history and one.

One filter to apply before drawing conclusions: remove dependabot, renovate, and github-actions from your count. Bots inflate contributor totals and can make a one-person repo look like a team.

## The counter-example

My rubric scores a top-1 contributor share at 50% or below as healthy over a multi-year window. I have reviewed repos where a single contributor held 33% of commits across four years and the score came back healthy — the history was stable, the team was intact, the velocity was consistent.

The same number on a different engagement told a different story. The top-1 share was 38%. On the rubric, that is healthy. The founder mentioned in the interview that the person holding those commits had handed in their notice the previous month. The rubric could not see that. The interview could.

This is where the 5-minute check ends and the actual diligence begins. Concentration numbers are a floor, not a finding. A high-concentration repo with a tenured engineer who has been there six years and plans to stay through the deal is a different risk profile than the same number attached to someone mid-exit.

When I led QA at a mid Fintech handling government-scale payments, we had two engineers who together owned roughly 70% of the commit history on the most sensitive service. The number was high; the actual exposure was managed because both people were long-tenure with strong documentation habits. A DD report that flagged the number without the context would have been technically accurate and strategically useless.

## What to do differently

Run the three commands above on any repo you are evaluating. Note the top-1 contributor share as a percentage of total commits, whether the top-1 contributor is still active in the last 12 months, and how many contributors appear in the last year versus all-time.

Then bring two questions to the technical interview: who are the two or three people who know the system best, and what is the plan if any of them leave in the 18 months after close?

The commands surface the pattern. The questions reveal whether the pattern matters.

## Bottom line

Contributor concentration takes five minutes to surface and one interview question to contextualize. A top-1 share above 50% warrants a follow-up question. A top-1 share above 70% is a red flag that belongs in the report header. Either way, the git commands are the start, not the verdict.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00Z");
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
