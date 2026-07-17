---
title: "Test Coverage as a Metric Is Broken"
description: "Coverage counts lines executed, not assertions made. One test file and 90 seconds is more diagnostic than any dashboard percentage. Here is the check."
pillar: educational
publishDate: 2026-05-30
author: William
tags: [testing, coverage, technical-due-diligence, code-quality, assertions]
canonicalTopic: coverage-number-is-theatre
linkedinCompanion: content/complete-posts/w30-wed-coverage-number-is-theatre.md
---

# Test Coverage as a Metric Is Broken

A coverage number tells you how many lines of code were executed during a test run. It does not tell you how many of those executions checked anything. A test that calls a function, ignores the return value, and exits is a green line on the coverage report. This distinction matters more than the number.

## How the metric fails

Coverage tooling — Istanbul, JaCoCo, pytest-cov, SimpleCov — measures line execution. When a test calls a function, the lines inside that function are marked covered. If the test makes no assertion about what the function returned, the lines are still covered. The tool does not know the difference.

The practical consequence: teams can drive coverage to 80% or 90% without their tests catching any real bugs. The number looks like safety. The number is a count of how many lines got touched, nothing more.

The failure mode compounds with AI-generated test suites. A model asked to "write tests for this module" will call every public function and assert that no exception was thrown. That produces 100% line coverage on the happy path. It produces near-zero assertion coverage on anything that could go wrong. A six-hundred-test codebase where every test was AI-generated, every test passes, and none of them catch real bugs is the near-future version of this problem. A six-test codebase where the founder knows what each test checks is the honest version of the same problem.

The 90-second check to run in any DD engagement: open one test file. Read three tests. Count the `expect(`, `assert(`, or `Assert.` calls. Under two per test on average and the coverage number is decorative.

In a spot-check on a PHP codebase with 71% reported coverage, the test-to-source ratio came back at 12% — lower than the coverage suggested. Opening one test file confirmed the pattern: most tests called the function under test and exited. The number was real. What it measured was not what it appeared to measure.

## The counter-example

When I ran QA at a mid Fintech managing government-scale payments, my team pushed line coverage from 40% to 82% over three months. In the same window, incidents dropped 68%. The two numbers looked correlated. They were not causal in the way they appeared.

The incident reduction came from a rule my team introduced: every test must assert at least two things. Not call two functions. Assert two outcomes. The coverage increase was a side effect of writing tests with a purpose. The assertions were the actual work.

This distinction took two months to surface clearly. Coverage went up first. Incidents lagged by about six weeks, which is when the new assertion discipline had worked through the highest-traffic service. If we had measured coverage at the end of month two and stopped there, the story would have been incomplete.

What this means for a DD read: a team that went from 40% to 82% coverage is not necessarily in better shape than a team at 55% coverage with two assertions per test. The number is not the evidence. The assertion density is the evidence.

I ask for one test file in every engagement where coverage is cited as a quality indicator. One file, three tests, a count of `assert` calls. It takes 90 seconds. It tells me more than any dashboard.

## What to do differently

Before accepting a coverage number in due diligence:

Ask the founder or CTO for one test file from the most-covered module. Not a cherry-picked example — the first file they would point to as representative.

Open it. Find three tests. Count assertion calls per test. Below two on average means the coverage number reflects execution, not verification.

Ask a follow-up: "When was the last time a test caught a bug before it reached production?" A team with genuine test discipline can name a recent example. A team with coverage theatre cannot, because their tests do not catch bugs.

If the repo uses AI-generated tests or has a high churn rate on test files (a hotspot signal in git history), weight the coverage number even lower. AI-generated tests optimize for coverage. They do not optimize for catching the regression that ships next quarter.

The corrective is not more coverage. The corrective is an assertion rule: every test must check at least two outcomes. That rule, enforced in code review, produces tests that actually function as a safety net.

## Bottom line

A coverage percentage is a line-execution count. It is not a safety signal. One test file and 90 seconds of reading reveals whether the number reflects real verification or a nominal pass. Ask for that file before the coverage number goes into the deal memo.

---

*I do senior-engineer tech due diligence for Iberian seed and Series A. If you have a repo on the desk this week, DM me on LinkedIn.*
