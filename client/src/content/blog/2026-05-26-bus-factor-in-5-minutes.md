---
title: "Bus Factor in Five Minutes"
description: "Three git commands reveal contributor concentration before you read a line of code. Here is what the numbers show and what only a human can catch."
pillar: educational
publishDate: 2026-05-26
author: William
tags: [git, bus-factor, technical-due-diligence, contributor-risk, codebase-health]
canonicalTopic: bus-factor-in-5-minutes
linkedinCompanion: content/linkedin-posted/w29-tue-bus-factor-in-5-minutes.md
---

# Bus Factor in Five Minutes

Every investor asks "who wrote this codebase?" before signing. Almost nobody runs the three commands that actually answer it. You do not need to clone the repo. You need read access on GitHub and a terminal.

## The shape of the problem

Bus factor is borrowed from engineering team theory: how many people would need to leave before the codebase becomes unmaintainable? At one, a single resignation reshuffles deal risk overnight. At three or above across a multi-year active history, concentration is unlikely to be an existential threat.

The question matters more at seed and Series A than later — teams are smaller, contributors are less replaceable, and institutional knowledge lives in fewer heads. A fund writing a €1M–€5M check should know the answer before the wire clears, not after the 30-day post-close discovery call.

Here are the three commands to run.

**Command one: all-time contributor ranking.**

```
git shortlog -sne --all | head -20
```

This ranks every contributor by commit count across all branches, with email. Read the top three names. Note what percentage of total commits the top-1 contributor holds.

**Command two: activity in the last twelve months.**

```
git log --format="%an" --since="1 year ago" | sort | uniq -c | sort -rn | head -10
```

Compare this against the all-time list. A name that dominates all-time but disappears in the last year is a warning: the person who knew the system has already moved on. The codebase looks staffed; it may not be.

**Command three: first commit dates per contributor.**

```
git log --format="%an %ad" --date=short | tail -20
```

Read the first commit dates. A repo with four years of history and three consistent humans is substantially healthier than one with six months of history and one. Duration of shared ownership is at least as important as raw numbers.

One filter to apply before drawing conclusions: remove dependabot, renovate, and github-actions from your count. Bots inflate contributor totals and can make a one-person repo look like a team.

## The counter-example

My rubric scores a top-1 contributor share at 50% or below as healthy over a multi-year window. I have reviewed repos where a single contributor held 33% of commits across four years and the score came back healthy — the history was stable, the team was intact, the velocity was consistent.

The same number on a different engagement told a different story. The top-1 share was 38%. On the rubric, that is healthy. The founder mentioned in the interview that the person holding those commits had handed in their notice the previous month. The rubric could not see that. The interview could.

This is where the 5-minute check ends and the actual diligence begins. Concentration numbers are a floor, not a finding. A high-concentration repo with a tenured engineer who has been there six years and plans to stay through the deal is a different risk profile than the same number attached to someone mid-exit.

When I led QA at a mid Fintech handling government-scale payments, we had two engineers who together owned roughly 70% of the commit history on the most sensitive service. That was a risk I flagged internally every quarter. It was also a stable situation because both people were lifers with equity, clear documentation habits, and institutional memory they shared actively. The number was high; the actual exposure was managed. A DD report that flagged the number without the context would have been technically accurate and strategically useless.

## What to do differently

Run the three commands above on any repo you are evaluating. They take under five minutes. Note:

- The top-1 contributor share as a percentage of total commits.
- Whether the top-1 contributor is still active in the last 12 months.
- How many contributors appear in the last year versus all-time. A shrinking team is a velocity and bus-factor signal simultaneously.
- Whether there are any bots inflating the count. Filter them before forming a view.

Then bring two questions to the technical interview: who are the two or three people who know the system best, and what is the plan if any of them leave in the 18 months after close?

The commands surface the pattern. The questions reveal whether the pattern matters.

A rubric score of "healthy" on bus factor is the start of the conversation, not the end. The number tells you where to focus; the interview tells you what it means for this specific deal.

## Bottom line

Contributor concentration takes five minutes to surface and one interview question to contextualize. A top-1 share above 50% warrants a follow-up question. A top-1 share above 70% is a red flag that belongs in the report header. Either way, the git commands are the start, not the verdict.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
