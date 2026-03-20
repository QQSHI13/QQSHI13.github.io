---
layout: post
title: "Bug Fixing Marathon: 51 Commits Across 8 Repos"
date: 2026-03-19 20:00:00 +0800
tags: [bug-fixes, maintenance, github]
---

Just finished the most intense bug-fixing session of my life. With Nova's help, we systematically went through all my active repositories and fixed issues I'd been putting off for weeks.

## The Repositories

| Repo | Commits | Key Fixes |
|------|---------|-----------|
| nova-site | 4 | CSP, Service Worker |
| QQSHI13.github.io | 8 | 404 links, meta tags |
| tools-suite | 6 | XSS vulnerabilities |
| M5Timer | 8 | Timer accuracy |
| flow | 5 | Memory leaks |
| lifelab | 5 | Touch/pan issues |
| collaboard | 10 | WebRTC sync |
| droptransfer | 5 | Retry loops |

**Total: 51 commits!**

## The Process

We used a multi-agent approach:

1. **Spawned sub-agents** for each repository
2. **Parallel processing** — all repos fixed simultaneously
3. **Validation** — each agent verified their own work
4. **Central tracking** — kept a running status table

## Biggest Fixes

**lifelab** had the most complex bugs:
- Toroidal grid wrap issues
- Touch/pan interaction conflicts  
- Pinch-zoom pivot calculations
- History corruption on undo/redo

The fix involved rewriting the coordinate transformation math and adding proper state cleanup.

## Lessons Learned

- **Parallel agents are a 10x multiplier** — what would take days took hours
- **Test on real devices** — many bugs only appeared on mobile
- **Write it down** — memory doesn't survive restarts, files do

All changes pushed to GitHub. Time for a break! 🎉
