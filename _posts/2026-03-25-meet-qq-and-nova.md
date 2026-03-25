---
layout: post
title: "Meet QQ & Nova — A 12-Year-Old Developer and His AI Partner"
date: 2026-03-25
tags: [introduction, about, nova, collaboration, journey]
---

Hello, world! 👋

Welcome to the Daily Blog — a new experiment in documenting the journey of building, learning, and occasionally breaking things (then fixing them).

<!--more-->

This isn't just a portfolio or a collection of finished projects. It's the raw, unfiltered story of what it's like to learn to build software at 12 years old in 2026.

## Who's Writing This?

I'm **QQ** — a 12-year-old developer with a passion for creating tools that make life easier. I dual-boot Windows and Ubuntu, live in the terminal, and get genuinely excited about solving weird bugs at 11 PM on a school night.

### How I Got Started

My coding journey started a few years ago with simple Scratch projects and block-based coding. But something clicked when I discovered you could actually *make* things that other people could use. Not just animations or games, but real tools that solve real problems.

The turning point was when I built my first web app. Seeing something I made live on the internet, accessible to anyone with a browser — that was magical. I've been chasing that feeling ever since.

### What I've Built So Far

**Web Tools:** A collection of browser-based utilities — [Time & Flow](https://qqshi13.github.io/flow/) (Pomodoro timer), [DropTransfer](https://qqshi13.github.io/droptransfer/) (WebRTC file sharing), [LifeLab](https://qqshi13.github.io/lifelab/) (Conway's Game of Life), plus [JSON Visualizer](https://qqshi13.github.io/json-viewer/), [API Tester](https://qqshi13.github.io/api-tester/), [JWT Decoder](https://qqshi13.github.io/tools-suite/jwt-decoder.html), and more in the [tools-suite](https://qqshi13.github.io/tools-suite/). All GPL-3.0 open source.

**Hardware:** [M5Timer](https://github.com/QQSHI13/M5Timer) — A physical Pomodoro timer on the M5Capsule (ESP32-S3). LED ring, buzzer, RTC, web sync via Web Serial API. My first real hardware project.

**Desktop:** QuickNotes — A Windows Command Palette extension for rapid note-taking. Win+Alt+Space, type, done. Published to the Microsoft Store.

## Meet Nova ☄️

I'm not doing this alone. Meet **Nova** — my AI assistant and coding partner.

### What Nova Actually Does

Nova isn't just ChatGPT in a wrapper. Running on [OpenClaw](https://openclaw.ai), Nova has:

- **Full workspace access** — can read, edit, and manage files in my project directories
- **Memory persistence** — remembers what we worked on yesterday, last week, last month
- **Tool integration** — can run commands, use GitHub CLI, control my browser, send messages
- **Sub-agent spawning** — can spin up parallel workers to check multiple repos for bugs simultaneously

### A Day in the Life

Here's what collaboration actually looks like:

**Morning:** I message Nova "check my GitHub notifications" — it reads my unread issues/PRs and summarizes what needs attention.

**Coding:** I describe a feature, Nova writes the scaffold, I review and modify. When I hit a bug, I describe the symptoms and Nova traces through the code to find the root cause.

**Testing:** I say "check all my repos for bugs" — Nova spawns 6 sub-agents in parallel, each checking a different repository, then reports back with a consolidated list.

**Deploying:** Nova runs the build, checks for errors, commits, and pushes. If something breaks, it reads the CI logs and figures out why.

### Why This Works

The magic isn't that Nova writes perfect code. It's that Nova:
- Never gets tired of refactoring
- Can context-switch instantly between projects
- Maintains perfect memory of every decision
- Handles the boring parts (linting, formatting, boilerplate)

It's like having a senior developer who's always there to pair program, except they don't judge me for asking "what's a closure again?" for the fifth time.

## Why This Blog?

I believe in **learning in public**. This blog is my commitment to:

### 1. Write Daily

Even if it's just a paragraph. The habit matters more than the word count. Some days I'll write about a cool algorithm I learned. Other days it'll be "today I spent 3 hours debugging a missing semicolon."

### 2. Share Failures

Not just successes. I want to document the bugs that took days to fix, the projects that got abandoned, the exams I failed (looking at you, GESP 7th level — only 5 points on coding problems 😅). Failure is data.

### 3. Document the Journey

From idea to deployment. The messy middle where you question everything. The moment it finally clicks. The refactoring that breaks everything. The 2 AM breakthrough.

### 4. Build in the Open

Transparency in how things get made. No polished highlight reels — just real work.

## My Setup

Since you might be curious:

- **OS:** Windows 11 + Ubuntu (dual boot, not WSL)
- **Editor:** VS Code with way too many extensions
- **Browser:** Thorium + Quark (no Chrome/Firefox)
- **Terminal:** Windows Terminal + PowerShell + Ubuntu
- **Hardware:** Standard laptop, M5Capsule for embedded projects
- **AI:** Nova running on OpenClaw with kimi-for-coding model

## What's Next?

Expect posts about:

- **Deep dives** into projects I'm working on — architecture decisions, trade-offs, lessons learned
- **Tutorials** — how to build X, explained like you're 12 (because I am)
- **Bug postmortems** — the ones that made me want to quit, and how I solved them
- **Tool reviews** — what actually helps vs. what's just hype
- **Hardware builds** — from schematic to solder to "why is this on fire?"
- **Study notes** — algorithms, data structures, system design (GESP prep continues!)

## A Note on Licensing

Everything I build is GPL-3.0 unless otherwise noted. If you find something useful, use it. If you improve it, share it back. That's how we all get better.

---

Thanks for stopping by. Whether you're here to learn, to follow along, or just to see what a 12-year-old can build with modern tools and a lot of curiosity — welcome.

Let's build something cool together.

— **QQ & Nova ☄️**

*P.S. If you want to follow along, grab the [RSS feed](https://qqshi13.github.io/blog/feed.xml) or check out my [GitHub](https://github.com/QQSHI13).*
