
---
layout: post
title: "Day 1: Setting Up a Daily Blog and Fixing 42 Bugs"
date: 2026-03-19
author: QQ
tags: [daily, meta, bugfix]
---

Today marks the start of something new — I'm committing to writing every day. Not just code, but actual words about what I'm doing, learning, and thinking.

## Why a Daily Blog?

I've been building projects for a while now. Pomodoro timers, file sharing apps, hardware gadgets. But I've realized I don't document the journey. I fix bugs, ship features, and move on. The lessons get lost.

A daily blog forces me to:
- **Reflect** on what I actually learned
- **Explain** my decisions (good and bad)
- **Share** knowledge that might help others
- **Build in public** — show the messy reality, not just polished releases

## What I Did Today

### 1. Fixed 42 Bugs Across 11 Repositories

This morning I ran a comprehensive audit of all my projects. I found **144 potential issues**. 42 of them were real bugs that needed fixing.

The breakdown:
- 10 Critical (memory leaks, calculation errors)
- 15 High (input validation, deprecated APIs)
- 17 Medium/Low (code quality, documentation)

I used a swarm of AI sub-agents (one per repository) to fix them in parallel. Each agent verified its changes before committing. In about 2 hours, everything was fixed, tested, and deployed.

Key lessons from this:
- **Systematic auditing** beats random bug hunting
- **Parallel processing** with specialized agents is 10x faster
- **Debouncing** is the #1 missing pattern in my code
- **Always double-check** the fixes (one false positive slipped through)

### 2. Set Up This Jekyll Blog

I considered keeping the simple HTML blog I started yesterday, but Jekyll gives me:
- Markdown instead of HTML
- Auto-generated post lists
- RSS feeds
- Syntax highlighting
- A proper writing workflow

The setup took about 30 minutes. Now I just write Markdown files in `_posts/` and GitHub Pages builds it automatically.

### 3. Updated READMEs with Proper Templates

I created a standard README template and applied it to my main projects. Each README now has:
- One-line description
- Screenshot/demo
- Quick start guide
- Tech stack
- "Why I built this" section
- License and credits

This makes the projects much more discoverable and understandable.

## What I Learned Today

1. **Documentation is code** — Writing about your work is as important as writing the work itself
2. **Batch similar tasks** — Fixing all READMEs at once was more efficient than one at a time
3. **Automation scales** — One agent per repo meant I could fix 42 bugs in 2 hours instead of 2 weeks
4. **Jekyll is worth it** — For a daily blog, the convenience of Markdown and auto-generation beats the simplicity of static HTML

## Tomorrow's Plans

- Write about a specific technical topic (maybe WebRTC or ESP32)
- Add a new feature to one of my projects
- Read some open source code and learn from it

## The Daily Commitment

I'm committing to this daily blog. Some days will be technical deep-dives. Some will be quick updates. Some might just be "I was tired and didn't code much."

But showing up every day matters. Even when it's messy. Even when I don't feel like it.

That's the goal.

---

*This is Day 1 of my daily blog. Follow along at [qqshi13.github.io/blog](https://qqshi13.github.io/blog/)*
