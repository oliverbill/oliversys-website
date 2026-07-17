---
title: "One Consultant With Agents Versus a Five-Person Firm"
description: "Agents changed the unit economics of professional services. Senior judgment plus agent throughput changes what a solo practice can deliver on one repo."
pillar: industry-take
publishDate: 2026-07-10
author: William
tags: [ai-agents, professional-services, solo-consulting, unit-economics, technical-due-diligence]
canonicalTopic: solo-consultant-with-agents-thesis
linkedinCompanion: ""
---

# One Consultant With Agents Versus a Five-Person Firm

The five-person technical due diligence firm is a cost structure answer to a throughput problem. Without automation, the analysis work that fills a 40-page report — static analysis, dependency audits, git history forensics, security scanning, architecture reconstruction — takes a team of five analysts 3 to 4 weeks to produce with consistent quality. The firm charges €25k to €80k to cover that labor cost plus margin.

The throughput problem has changed. The labor cost structure has not yet caught up to that change.

## Why the firm model was the only viable structure

Before agents and capable language models, there was no way to compress the analysis phase of a technical review without compressing quality. A single senior engineer doing all the analysis manually takes roughly the same wall-clock time as a team — the work is not easily parallelizable by one person. You cannot run Semgrep, audit 400 dependencies, reconstruct an architecture from 200k lines of code, and read a 4-year git history simultaneously as one human. You sequence them, and each one takes hours.

The firm model exists because it solves this serialization problem with headcount. Four junior analysts run the tools in parallel. A senior partner synthesizes. The output is a report that took 120 to 200 hours of aggregate human time to produce.

At €25k minimum, the firm is charging roughly €125 to €200 per aggregate human hour. That is the market rate for this structure.

## What agents changed

An agent pipeline running automated analysis — static analysis via Semgrep, dependency CVE scanning via Trivy, secret scanning via Gitleaks, git history forensics via pure git commands, license audit via SPDX tooling — compresses the analysis phase from 60 to 80 analyst-hours to 4 to 6 hours of wall-clock time. The tools run sequentially or in parallel depending on the orchestration. The raw outputs are written to disk. The structured summaries — the ≤1000-token distilled findings from each tool — are assembled into a manifest that the synthesis step reads.

The senior engineer who previously supervised a team of analysts now runs the pipeline and reads the manifest. The analysis phase that previously required four parallel workers now requires one pipeline with a timeout budget.

What the pipeline does not change: the judgment layer. Whether a 40% top-1 contributor share is a bus-factor risk or a stable founding-engineer concentration depends on whether that engineer is staying. Semgrep finds 200 findings; reading which 30 matter in this deployment context takes a senior engineer. The AI surface scan surfaces whether the codebase calls a model; verifying whether the calling pattern constitutes a real production integration requires domain knowledge.

The judgment layer is still human. It is the product. The analysis layer is now automated. It is the enabler.

## The unit economics argument

The firm charges €25k minimum to cover 120 to 200 aggregate analyst-hours plus overhead. At €6k for a Tier 1 read, the solo-with-agents model covers approximately 25 to 35 hours of the founder's time — the judgment layer — plus tool costs of €150 to €400 per engagement. Gross margin is around 95%.

The effective hourly rate at that price point and time commitment is €170 to €240 per hour for judgment-only work. That is competitive with the senior-partner billing rate at a firm, without the firm overhead or the junior-analyst variance in output quality.

The moat in this model is not the tooling. The tools — Semgrep, Trivy, Gitleaks, standard git commands — are public and replicable. Any engineer can run them. The moat is: the judgment that comes from 20 years in production systems, including QA transformation at government-scale payments infrastructure, engineering at an e-commerce SaaS, and building a production agentic system; the signature on the report (which is a specific engineer the client can call with a follow-up question); and the niche expertise in markets and deal types where that background is directly relevant.

A five-person firm can replicate the tooling. It cannot replicate the specific judgment, the specific background, or the specific price point that the solo-with-agents structure enables.

## What this means for the market

The "20x company" thesis — named after Garry Tan's articulation of how AI compounds force in small teams — applies in professional services as well as in software development. A solo practice with agent throughput can now deliver what a five-person team delivered in 2023, at a price that opens market segments the five-person team could not serve.

The Iberian seed market is the immediate example: deals at €500k to €2M that previously could not support a €25k technical review can now support a €6k or sub-€1k read. That is a new customer class for technical diligence services. It exists because the cost structure changed.

## Bottom line

The five-person firm was the only viable structure for professional technical diligence because the analysis work required parallel human execution. Agent pipelines changed that. Senior judgment plus agent throughput delivers comparable analysis quality at a cost structure that opens market segments the firm model could not reach. The moat is judgment and signature, not tooling.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
