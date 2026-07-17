---
title: "Tech DD Any Angel Can Run in One Hour"
description: "Ten questions across bus factor, test integrity, dependencies, infra cost, and team velocity. Each answer reveals a specific risk before you write the check."
pillar: educational
publishDate: 2026-06-06
author: William
tags: [angel-investing, technical-due-diligence, checklist, seed, codebase-health]
canonicalTopic: ten-question-tech-dd-angel
linkedinCompanion: ""
---

# Tech DD Any Angel Can Run in One Hour

An angel writing a €25k check cannot justify a €6k technical review. Sixty minutes of the right questions, asked in the right order, still catches roughly 60% of the risk. Here are ten questions that do that work, grouped by category.

## The ten questions

This framework is based on the same five risk areas that a structured technical review examines at depth: contributor concentration, test integrity, dependency exposure, infrastructure cost, and team velocity. The difference is scope and confidence level. An hour of questions is not a rubric-based read. It is a first-pass filter that tells you which risks are worth paying to verify and which you can set aside.

**Bus factor (contributor concentration)**

*Question 1: Who are the two people who know the codebase best, and what is their plan for the 18 months after close?*

This surfaces key-person risk without requiring git access. A founder who cannot name two people immediately is telling you something. A founder who names the CTO and says "she's staying through the raise" is answering a different question — note the distinction between "staying through the raise" and "staying through the product build."

*Question 2: Has anyone significant left the engineering team in the last six months?*

Departures are often the story the git history is already telling. This question gives the founder a chance to contextualize the data before you pull it.

**Test integrity**

*Question 3: When did a test last catch a bug before it reached production?*

A team with genuine test discipline can name a specific example, usually in the last quarter. Vague answers ("we catch bugs all the time") are not the same thing. If the answer is "we have 80% coverage," you have not received an answer to the question.

*Question 4: What is your rule for a test to pass code review?*

A team that has thought about test quality has a rule. Common good rules: "every test must assert at least two outcomes," "no test without a failure message," "no mocked dependencies in integration tests without justification." The absence of a rule is an absence of a policy.

**Dependency health**

*Question 5: What is your dependency update cadence?*

A team that uses a bot (dependabot, renovate) and merges updates regularly has a manageable exposure surface. A team that hasn't updated dependencies in 18 months has accumulated the security exposure that goes with that. You do not need to run a CVE scanner to form a first-pass view.

*Question 6: Are there any dependencies you know are deprecated or end-of-life?*

Self-reporting here is a trust signal. A team that knows their critical dependency is EoL and has a migration plan is in a different position than a team that does not know. Either answer is informative.

**Infrastructure cost**

*Question 7: What is your monthly cloud spend, and what drives it?*

The number itself is less important than whether the founder can answer it. A founder who knows their compute cost, storage cost, and API call cost by service has been watching the unit economics. A founder who answers "around €2k–€3k I think" for a product with significant usage may not have the cost visibility a post-investment team will need.

*Question 8: If you doubled your active users tomorrow, what breaks first?*

This is a scalability question framed as a thought experiment. A CTO who has modeled this can answer it in one minute. A CTO who has not modeled it will hedge. The hedge is the answer.

**Team velocity**

*Question 9: How many features did you ship in the last 90 days? Which one took longest and why?*

Velocity is partially revealed by the question, but the "which one took longest" follow-up is where risk surfaces. Long delivery cycles on features that should be routine often signal architectural coupling, technical debt, or team bandwidth constraints that are not visible in the pitch.

*Question 10: What is the one technical decision from the last two years you would make differently?*

This is a maturity question. A team that has learned something concrete from a past architectural decision and can describe it plainly is a more reliable investment than one with no answer. The content of the answer is less important than whether an honest one exists.

## What the answers tell you

These ten questions form a first-pass filter, not a verdict. A good result across all ten does not mean the codebase is healthy. It means the risk surface is plausibly managed and the team has the self-awareness to know where the bodies are. A poor result on two or three of these is a signal that a structured technical read is worth the investment before the wire clears.

The questions work because they ask for specifics a team either knows or does not. Vague answers — "we keep it updated," "we're well-tested," "the system scales well" — are not answers. Press once for the specific. If no specific emerges, treat the question as unanswered.

## Bottom line

Ten questions, one hour, five risk categories. This is not a substitute for a senior-engineer read — it does not surface CVEs, license risks, architectural debt, or rushed pre-deal cleanup in git history. It is a first-pass filter that identifies which deals warrant deeper technical work and which are clearly outside the risk band for the check size.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
