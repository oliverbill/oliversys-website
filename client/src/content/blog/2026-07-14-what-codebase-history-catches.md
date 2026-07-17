---
title: "What the Git-Forensics Agent Catches, and What Doesn't"
description: "The agent surfaces bus factor, velocity, and hotspots in under 5 seconds. The human catches whether the pattern is a warning or a founder story."
pillar: behind-machine
publishDate: 2026-07-14
author: William
tags: [git, forensics, technical-due-diligence, codebase-history, human-judgment]
canonicalTopic: what-codebase-history-catches
linkedinCompanion: content/complete-posts/w30-tue-what-codebase-history-catches.md
---

# What the Git-Forensics Agent Catches, and What Doesn't

Top-1 contributor at 33% over 4 years. The rubric calls that healthy. The person had already handed in their notice.

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

The git-forensics agent surfaces bus factor, velocity, hotspots, and pre-deal cleanup flags in under 5 seconds. The human catches whether a "healthy" concentration score is healthy in context, whether "declining" velocity is a pause or a collapse, and whether the top-1 contributor is a stability anchor or a flight risk. The agent sets the agenda. The human writes the finding.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
