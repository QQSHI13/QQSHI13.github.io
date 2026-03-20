---
layout: post
title: "Building a Pomodoro Timer with PWA Support"
date: 2026-03-20 09:00:00 +0800
tags: [javascript, pwa, productivity]
---

Today I built a fully-featured Pomodoro timer with Progressive Web App support. This is something I've wanted to make for a while because I need better focus sessions for my coding work.

<!--more-->

## What I Built

**Flow** — a clean, keyboard-driven Pomodoro timer that works offline and can be installed on any device.

Key features:
- ⏱️ Customizable work/break intervals
- ⌨️ Full keyboard shortcut support (space to start/pause)
- 📱 PWA support — install on phone/desktop
- 🎵 Optional audio notifications
- 💾 Settings saved locally

## The Challenge

The hardest part was implementing the PWA manifest and service worker correctly. I ran into issues with:

1. **Cache strategies** — had to balance offline functionality with updates
2. **Background sync** — making sure timers work even when the tab is inactive
3. **Icon sizes** — needed multiple sizes for different platforms

## Code Snippet

Here's the service worker cache strategy I settled on:

```javascript
// Cache-first for static assets, network-first for API calls
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image' || 
      event.request.destination === 'script') {
    event.respondWith(cacheFirst(event.request));
  }
});
```

## What I Learned

- Service workers are powerful but tricky to debug
- Testing PWAs on real devices is essential (simulators lie)
- The `beforeinstallprompt` event lets you customize the install experience

## Tomorrow's Plan

Going to add:
- Stats tracking (daily/weekly focus hours)
- Integration with my M5Timer hardware project
- Dark mode toggle

Check it out live: [https://qqshi13.github.io/flow/](https://qqshi13.github.io/flow/)

---

*Built with ❤️ by QQ & Nova ☄️*
