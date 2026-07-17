---
title: "How to Read a Git History Like a Forensic Accountant"
description: "Commit patterns tell stories pitch decks do not. Velocity bursts, pre-deal cleanup, and AI-washed histories each leave a distinct trace. Here is how to read it."
pillar: educational
publishDate: 2026-06-13
author: William
tags: [git, forensics, technical-due-diligence, codebase-health, commit-patterns]
canonicalTopic: git-history-forensics
linkedinCompanion: ""
---

# How to Read a Git History Like a Forensic Accountant

A git history is a time-stamped ledger of every decision an engineering team made. Forensic accountants look for patterns that diverge from normal business behavior — sudden write-offs, reclassifications, one-time entries timed around reporting periods. A git history rewards the same reading.

## Five patterns that mean something

After 20 years of reading histories — first as an engineer, then on paid technical reviews — five patterns have proven reliable signals. Not proof of anything, but signals worth investigating.

**Pattern 1: Dormancy with a recent burst.**

A repo goes quiet for 8 or 12 months and then shows a surge of commits in the 30 days before the deal. Run:

```
git log --since='30 days ago' --shortstat --format='%H|%ai|%s'
```

Three or more commits that each touched more than 20 files in the last 30 days is a "suspicious" flag on the rubric. This is the classic pre-deal grooming signal: someone cleaned up the code before inviting investors to look at it. The cleanup itself is not a problem. Cleanup that is not disclosed is the problem.

**Pattern 2: Velocity burst then flat.**

The history shows genuine acceleration — 50, 80, 100 commits a month — that then levels off completely. This pattern often corresponds to a founding sprint followed by a first major customer milestone, and then nothing. A team that stopped shipping is either stuck, stable, or waiting for investment to resume. These are very different situations. The pattern surfaces the question; the interview answers it.

**Pattern 3: Accelerating velocity.**

The opposite is usually good news. Consistent month-over-month acceleration in commit activity over 6 to 12 months suggests a team building momentum, not coasting. A stable-then-accelerating pattern is the healthiest profile.

**Pattern 4: Commit messages that changed tone suddenly.**

This is the subtler signal. Run:

```
git log --format="%ai %s" | head -100
```

Read the message style over time. A history that goes from "fix login token expiry edge case" to "refactor codebase for clarity" and "improve code quality" about 60 days before a raise is worth a follow-up. Meaningful changes come with meaningful messages; cosmetic messages often accompany cosmetic changes. AI-assisted cleanup leaves a recognizable fingerprint: commit messages that are grammatically correct but semantically vague, usually clustered in a short window.

**Pattern 5: The contributor who disappeared.**

Run the last-12-months contributor list alongside the all-time contributor list. A name that holds 25% of all-time commits but has not committed in 14 months is a specific risk, not a generic one. The question is not "is this person gone?" but "did anyone pick up what they were carrying?" Look at the hotspot files — the most-churned files in the last year:

```
git log --format= --name-only --since='1 year ago' | grep -v '^$' | sort | uniq -c | sort -rn | head -20
```

If the hotspot files were authored primarily by the departed contributor, the risk is concentrated.

## What the commands actually show

The git history skill in a structured review surfaces four outputs: bus factor (contributor concentration), velocity trend across the last 12 months, hotspot files by churn rate, and rushed pre-deal cleanup flags. The first pass runs in under 5 seconds. The findings take an hour to contextualize.

Bus factor: top-1 contributor share above 50% triggers a concentration finding. Above 70% triggers a severe key-person risk flag. These thresholds come from the rubric; the interview adds the context.

Velocity trend classifications run from "dormant-over-year" (last commit more than 12 months ago — the first question this triggers is "is the team still working on this?") through "stable" and "accelerating." A dormant-over-year status surfaces in the top-3 red flags of any report, regardless of tier.

Hotspot files are the most-churned in the last year. High churn on a single file usually means one of two things: it is the most worked-on file because it is the most important, or it is the most worked-on file because it is structurally broken and gets patched constantly. The file path often disambiguates (a payment service core versus a CSS utility class).

## What only a human catches

An automated pass catches the patterns. A human catches whether the patterns matter.

A 33% top-1 contributor share on a stable payments stack running for four years reads healthy on a rubric. The same number on a codebase where the top contributor handed in their notice last month reads as a deal risk. The rubric cannot tell the difference. The human interview can.

The "burst before DD" pattern triggers a flag. But a team that added a new engineer two months ago and asked them to clean up documentation and test coverage is also going to show this pattern, and it is not suspicious. The flag is the start of a question, not the answer to it.

Reading a git history like a forensic accountant means knowing what normal business behavior looks like and noticing when the ledger diverges from it. Then asking why.

## Bottom line

Five patterns — dormancy-then-burst, burst-then-flat, accelerating activity, message tone shift, and the disappeared contributor — are reliable signals in git history reads. None are proof. All warrant a follow-up question. The commands take five minutes to run. The conversation they generate is the actual diligence.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
