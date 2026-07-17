---
title: "Semgrep Flagged 200 Issues. Thirty Mattered."
description: "Static analysis produces signal and noise in roughly equal measure. Here is how a senior engineer reads Semgrep output to rank what belongs in a DD report."
pillar: behind-machine
publishDate: 2026-06-20
author: William
tags: [static-analysis, semgrep, security, technical-due-diligence, sast]
canonicalTopic: what-static-analysis-misses
linkedinCompanion: ""
---

# Semgrep Flagged 200 Issues. Thirty Mattered.

Semgrep on a moderately complex codebase returns between 80 and 300 findings on a first run. The count is not the finding. The count is the starting point for a read that takes judgment to complete.

## The signal-to-noise problem in static analysis

Static analysis tools (Semgrep, Bandit, ESLint with security plugins, CodeQL) work by matching patterns against source code. They are rule-based. A rule that flags SQL string concatenation will fire on every SQL string concatenation in the repo, regardless of whether that concatenation is in a production query handler or a database migration script that runs once at deploy time and is wrapped in a transaction that rolls back on failure.

The tool cannot know the context. It sees a pattern; it fires a rule.

The structured summary from a Semgrep run in a technical review captures the count of ERROR, WARNING, and INFO findings, the top 10 by severity, and any custom rule hits from the DD-specific ruleset layered on top of the public rulesets. It does not capture whether the findings are exploitable in this specific deployment context.

That read is the human's job.

The rulesets in a structured review use the `p/security-audit` and `p/secrets` packs as a baseline, with language-specific packs added on top (TypeScript, Python, Java, PHP, and others). Each pack targets a different class of vulnerability. The volume of findings scales with codebase size and language mix. A 50kLOC TypeScript monorepo running five Semgrep rulesets will produce more raw findings than a 10kLOC Go service running two.

A 15-minute timeout applies at spot-check tier. 30 minutes at Tier 1. 60 minutes at Tier 2. If Semgrep times out, the result is DEGRADED — partial output is still useful, and the status is explicit in the report rather than silently omitted.

## The contextual read: what makes a finding real

Three questions determine whether a static analysis finding belongs in a deal report.

**Is the code path reachable in production?** A SQL injection pattern in a database seed script that runs at deploy time under an admin account is not the same vulnerability as a SQL injection pattern in a public API endpoint that takes user input. Both fire the same Semgrep rule. Only one is an exploitable finding.

**Is the exposure surface user-facing?** A hardcoded credential in a test fixture file (a common false positive in `p/secrets`) is different from a hardcoded credential in a production configuration file. The pattern is identical; the consequence is not. The file path disambiguates.

**Has the team already mitigated it?** Some findings represent known risks that are mitigated at a different layer (a WAF rule, a network boundary, an input sanitizer that Semgrep cannot trace through). A team that can name the mitigation and show it in the infrastructure review is in a different position from a team that does not know the finding exists.

Running Semgrep is a 15-minute automated step. Reading the output is a 2-hour human step. The ratio is not accidental.

## Why "run Semgrep yourself" is not a substitute

When an investor asks "has someone done static analysis on this repo?" and the answer is "yes, we ran Semgrep in CI and it's green," that is not the same statement as "a senior engineer read the Semgrep output and ranked the findings against the deployment context."

A CI gate with Semgrep typically blocks on ERROR-severity findings only, ignores WARNING and INFO, and allows teams to suppress specific rules inline with comments. A repo with a clean Semgrep CI gate may have 40 WARNING-level findings that are suppressed rather than fixed, and a senior reading of those suppressions would reveal that several of them were suppressed without justification.

The static analysis skill in a structured review does not suppress anything. It captures everything Semgrep finds, ranks by severity, and presents the top 10 findings with file paths and line numbers. The founder then reads those 10 and decides which are real, which are mitigated, and which are in-scope but low-priority given the deployment context.

The "run it yourself" approach also misses custom rules. The DD ruleset includes patterns that generic public packs do not check — Iberian payment processor API key formats, specific cloud provider credential patterns, and other signals that matter for deals in this market.

## Bottom line

Static analysis output is the starting inventory, not the finding. Semgrep on a real codebase returns more issues than belong in a report. Reading the output with a deployment context in mind reduces 200 flags to 30 that matter and 3 that should be in the executive summary. That reading takes a senior engineer. The tool is the first 15 minutes. The judgment is the next 2 hours.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
