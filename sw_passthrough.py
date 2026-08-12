"""QQSHI13.github.io hook: pass project-site navigations through to the
network instead of DocsForge's SW 404 page.

DocsForge's service worker serves pages listed in cache-manifest.json and
returns its own 404 page for anything else. Project pages deployed from
their own repositories under the same origin (qqshi13.github.io/flow/,
/droptransfer/, ...) are never in the manifest, so browsers with the SW
active would get DocsForge's 404 instead of the project site.

This hook runs at `on_build_done` — after DocsForge generated sw.js — and
prepends a fetch guard that passes navigations to non-managed same-origin
paths straight to the network (serving the site's 404 page only when
offline). Managed paths (blog, assets, static pages) are left untouched.
"""
from __future__ import annotations

from pathlib import Path

GUARD = """\
// QQSHI13.github.io override (hook): pass project-site navigations
// (/flow/, /droptransfer/, ...) through to the network instead of serving
// DocsForge's 404 page. Runs before DocsForge's own fetch handler.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== 'GET') return;
  if (event.request.destination !== 'document' && event.request.mode !== 'navigate') return;
  const p = url.pathname.replace(/\\/+$/, '');
  const managed =
    p === '' || p === '/index.html' || p === '/404.html' ||
    p.startsWith('/blog') || p.startsWith('/assets') ||
    ['/projects.html', '/24.html', '/web-sync.html', '/robots.txt',
     '/manifest.json', '/sitemap.xml', '/sw.js', '/cache-manifest.json'].includes(p);
  if (managed) return;
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(new URL('/404.html', self.location.origin).href)
    )
  );
});

"""


def on_build_done(config, **kwargs):
    """Prepend the passthrough guard to the generated service worker."""
    sw = Path(config.site_dir) / "sw.js"
    if not sw.is_file():
        return
    content = sw.read_text(encoding="utf-8")
    if "QQSHI13.github.io override" in content:
        return  # idempotent across serve rebuilds
    sw.write_text(GUARD + content, encoding="utf-8")
