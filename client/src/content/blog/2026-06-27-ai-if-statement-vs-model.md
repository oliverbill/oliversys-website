---
title: "Is Their AI a Real Model or an If-Statement"
description: "Five questions separate a startup running real LLM inference from one routing through a wrapper. Each question has a tell. Here is how to read the answers."
pillar: ai-washing
publishDate: 2026-06-27
author: William
tags: [ai-washing, llm, technical-due-diligence, ai-verification, investor-questions]
canonicalTopic: ai-if-statement-vs-model
linkedinCompanion: ""
---

# Is Their AI a Real Model or an If-Statement

"AI-powered" appears in roughly 70% of pitch decks crossing European VC desks in 2026. A meaningful fraction of those products route a string through an API call once, surround the rest of the logic with conditionals, and call the result "AI." The five questions below separate these from startups that actually run models at scale. Each question has a tell.

## What the questions reveal

The tell is not whether the team uses AI. Most do, in some form. The tell is whether they have built the operational discipline that real model usage requires. A team running inference at scale has to monitor cost, manage model drift, plan for deprecation, and measure output quality. These are not optional engineering concerns — they are table stakes for any production AI system. A team that cannot answer questions about them is a team that is not running models at production scale.

**Question 1: Show me your eval harness.**

A real team runs evaluations on every deploy — or at minimum on every prompt change. An eval harness has: golden inputs (a fixed test set), expected outputs or scoring criteria, a CI job that runs the evals and gates on the score, and a history of how the score has moved over time.

The tell: "we test manually" or "we watch LangSmith and it looks fine" is not an eval harness. It is a monitoring dashboard with no gating. Every prompt change on a monitored-but-unevaluated system is a bet that the change did not break anything. A team with no evals is making unquantified bets on every deploy.

**Question 2: What is your cost per inference at the 90th percentile?**

Not the average — the 90th percentile. Real teams know this number because it determines whether the unit economics work. A good answer sounds specific: "€0.04 median, €0.19 at p90 on the deep-reasoning path." A shrug means the team is either not running at scale or not watching the bill.

The tell: uncertainty here is not always disqualifying at seed stage, where usage volumes may be too low to have meaningful p90 data. At Series A and beyond, no visibility into inference cost is a pricing and margin risk that belongs in the report.

**Question 3: Which model do you route to and why?**

A production AI system that handles different task types usually routes to different models based on task complexity and cost. A team that does this can describe their routing logic. A team using a single model for everything, with no routing layer, is either in an early stage of the build or has not needed to optimize yet. Both are legitimate — the answer reveals where they are in the maturity curve.

The tell: a team that cannot name the model they are using, or that says "we use OpenAI" without specifying which model or why, is likely at a lower integration depth than a team with a routing strategy. This is not disqualifying; it calibrates the AI maturity level accurately.

**Question 4: What happens when your model is deprecated?**

Anthropic and OpenAI deprecate models. Every team that has shipped seriously in AI over the last two years has done at least one model migration. A team that has done a migration can name the eval that failed first. That is the story you want to hear — not because migrations are good, but because they prove the team ran evaluations that caught the regression.

The tell: if the CTO has never done a model migration, they have not shipped a production AI system long enough to have one deprecated under them. This is a maturity signal, not a disqualification. It tells you the system is relatively new.

**Question 5: Show me one production prompt.**

A team running real models can show a prompt. They have one. It is in a prompt management system, a code file, a config file, or a database. A team that cannot produce a production prompt when asked — "it's too proprietary," "it's complicated to extract" — is usually protecting something that is less sophisticated than the pitch implies.

The tell: the prompt itself is less important than the team's fluency with it. A team that can explain why a specific phrase is in the prompt, what removing it would change, and how they tested that hypothesis is a team that understands what they shipped. A team that stares at the prompt without being able to explain specific choices has likely delegated more than they know.

## What real versus wrapped looks like

A real model integration answers most of these questions without hesitation. The team has thought about cost, drift, deprecation, and evaluation because production forces those questions. A wrapper — a startup that calls an API and presents the output as their AI — has not faced these operational realities yet, because the volume, the stakes, or the build depth have not demanded it.

I have shipped AI systems in production, including agentic pipelines with LLM routing, RAG integration, and multi-model orchestration. These are the questions I had to answer about my own stack when I was on the other side of the table. They are not trick questions. They are the minimum operational concerns any serious production AI team has already worked through.

## Bottom line

Five questions, 10 minutes, one CTO. An eval harness, inference cost at p90, routing logic, deprecation history, and one production prompt separate a team running models from a team calling an API with a confidence that exceeds their build depth. If any answer sounds rehearsed or vague, ask for the specific. The specific is where the real picture is.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
