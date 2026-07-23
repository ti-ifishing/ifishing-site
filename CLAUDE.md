# iFishing Site

Astro 4 static site, GitHub Pages at ifishing.com.br. Tailwind CSS, no JS framework.

## Deploy

`git push origin main` = production, immediately. No CI, no staging, no rollback button. Never push without explicit user authorization.

## Hard constraints

**Fonts**: Google Fonts loaded async (`media="print"` + `onload`) with `display=optional`. Do NOT switch to `display=swap` (causes CLS ~0.25 on desktop) and do NOT make it synchronous (blocks LCP on mobile). Trade-off: custom fonts only show on cached visits.

**Button contrast**: `btn-primary` uses `bg-brand-dark` (`#0F7A35`), not `bg-brand` (`#18A348`). White on brand fails WCAG AA (3.30:1). Any new CTA with white text must use `bg-brand-dark`.

**Copy**: No em dashes (—). Use comma or colon instead.

**Dark mode**: Not supported. `color-scheme: light` is forced in `global.css`. Do not add `dark:` variants.

## Conventions

**SVG icon arrays** (beneficios in para-guias.astro, steps in como-funciona.astro): the `svg` field holds inner HTML only (path/circle/polyline), rendered via `set:html={...}` on a wrapping `<svg viewBox="0 0 24 24">`. Do not change this to separate components.

**Title format**: `iFishing · {title}` for sub-pages, `iFishing` alone for home. SEO.astro builds this — pass just the page name to BaseLayout, never include "iFishing" in the string.

**Announcement bar**: hardcoded in BaseLayout. Edit there directly if the copy changes.

**`noindex={true}`**: required on all app-internal pages: guide, chat, redefinir-senha, email-confirmado, android, ios. These exist for deep links or auth flows, not for search indexing.

**Containers**: `container-page` (max-w-6xl) for marketing pages, `container-prose` (max-w-4xl) for legal and text-heavy pages.

**Single source of truth**: `src/lib/site.ts` holds app store URLs, WhatsApp, support email, and legal info. Never hardcode these in pages.

## Deep-link bridge pages

`/guide/[id]` and `/chat/[...slug]` statically build only a `preview` param. On mobile, iOS Universal Links and Android App Links intercept the URL before the browser loads HTML. When the app is not installed, `OpenInApp.astro` reads `window.location.pathname` client-side to extract the real ID and constructs the `ifishing://` deep link.

## Images

App screenshots use WebP (`/screen-*.webp`) with explicit `width` and `height` on every `<img>` (required to prevent CLS). Original PNGs remain in `public/` but are not referenced in code. The LCP image (`screen-home.webp`) has a `<link rel="preload">` in index.astro's head slot.

## Sitemap

Astro outputs `sitemap-index.xml` + `sitemap-0.xml`. When submitting to Google Search Console, submit `sitemap-0.xml` directly. The filter in `astro.config.mjs` already excludes all noindex pages.
