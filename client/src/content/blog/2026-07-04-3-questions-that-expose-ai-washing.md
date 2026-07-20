---
title: "Three Questions That Expose AI-Washing in Ten Minutes"
description: "Eval harness, inference cost at p90, model deprecation plan. Any CTO running real AI answers these in ten minutes. Here is what the answers reveal."
pillar: ai-washing
publishDate: 2026-07-04
author: William
tags: [ai-washing, llm, technical-due-diligence, ai-verification, cto-interview]
canonicalTopic: 3-questions-that-expose-ai-washing
linkedinCompanion: content/linkedin-posted/w30-thu-3-questions-that-expose-ai-washing.md
---

# Three Questions That Expose AI-Washing in Ten Minutes

You have 10 minutes with the CTO before the call ends. Three questions will tell you whether the "AI" in the pitch is a production system or a positioning claim. If any answer sounds rehearsed, you have a wrapper.

## The three questions and what they reveal

Most AI-washing in venture-backed startups is not deliberate fraud. It is a maturity gap between what the team has shipped and how the team has described what they shipped. The language is genuine; the technical substance has not caught up to it yet. These three questions probe for the operational discipline that production AI requires. A team that has it can answer quickly. A team that is still catching up will hedge.

**Question 1: What does your eval harness look like?**

A real team runs evals on every deploy. The word "harness" is deliberate — it implies a structured test apparatus, not a check someone runs when they remember to. A production eval harness has: a fixed set of golden inputs, scoring criteria for outputs (rubric-based, model-judged, or human-labelled), a CI job that runs the evals on every prompt change, and a record of how the score has moved over time.

A good answer sounds like: "We have 200 golden cases, scored by a judge model against a rubric. The CI job runs on every PR that touches the prompt layer. We've had two regressions in the last quarter — one we caught before shipping, one we didn't, and that one got fixed in 48 hours."

A bad answer sounds like: "We test manually," "we use LangSmith and it looks fine," or "our users would tell us if something was wrong." These are not eval harnesses. They are reactive monitoring after the fact.

No harness means no measurement of regression. Every prompt change is an unquantified bet. A team in this position is operating the AI layer the way early web startups operated security — by hoping.

**Question 2: What is your cost per inference at the 90th percentile?**

Not the average. The 90th percentile. Average cost hides the tail — the rare, expensive calls that occur when the model receives a complex input, takes a reasoning path, or makes multiple API calls in an agentic loop. Real teams watch the tail because it sets the floor for unit economics. If the p90 cost per inference is €0.19 and the gross margin model assumes €0.04, the model has a structural problem.

A good answer sounds like: "€0.04 median, €0.19 at p90 on the deep-reasoning path. We route short classification tasks to a cheaper model to keep the median down." This answer demonstrates that the team has disaggregated cost by task type, which requires real operational instrumentation.

A bad answer is a shrug, "I'd have to check," or a number that is clearly the average presented as if it represents the range. A team that does not know their inference cost at scale either does not run at scale or is not watching the bill — both are material to a margin analysis.

At seed stage, low volumes may mean p90 data is too thin to be meaningful. This is not disqualifying. It calibrates the stage accurately. At Series A, no cost visibility is a red flag.

**Question 3: When Anthropic or OpenAI deprecates your model, what breaks first?**

The model providers deprecate regularly. Every team that has shipped seriously in AI over the last two years has migrated at least once. A team that has done a migration can name what broke first — usually the eval that failed, occasionally a production regression, occasionally both.

The value of the question is not the answer about deprecation specifically. It is the evidence that the team has run evaluations that would detect a regression. A team that says "we've migrated from GPT-4 to GPT-4o and our eval on sentiment classification dropped 3 points, which we fixed by adjusting the system prompt" has demonstrated: they have evals, they run them on model changes, and they know how to respond to regression.

A CTO who has never done a model migration has not shipped a production AI system long enough to experience one. This is a temporal signal — the system is either new or at low volume. Frame it that way, not as a disqualification.

A CTO who has shipped seriously and cannot name an eval that failed during a migration is the concerning case: they migrated, but they were not watching what changed. That means the AI layer is operating without quality measurement.

## What the patterns look like in practice

A genuine AI team answers all three questions in under five minutes without visible stress. They have thought about these things because production forced the questions. Cost monitors, eval pipelines, and migration histories are part of daily operations for a team running models at any serious scale.

A wrapper — a startup calling an API, presenting the output as an AI feature, and not yet having built the operational infrastructure around it — will hedge on at least two of the three. The hedges are informative: they tell you where the build depth actually is versus where the pitch locates it.

I have shipped AI systems in production, including multi-agent pipelines with LLM routing, retrieval-augmented generation, and model deprecation cycles. These are the questions I answered about my own stack. They are not designed to trip people up. They are the minimum operational questions any team running models at production scale should have already worked through.

## Bottom line

Eval harness, inference cost at p90, deprecation plan. Three questions. Ten minutes. A team with genuine production AI depth answers all three without hesitation. If any answer is vague after one follow-up, you have found the gap between the pitch and the build.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
