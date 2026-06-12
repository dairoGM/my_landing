# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite) at http://localhost:5173
npm run build      # Type-check with tsc then bundle with Vite
npm run preview    # Serve the production build locally
```

No linter or test runner is configured.

## Architecture

### Routing
`src/main.jsx` bootstraps React with `BrowserRouter`. Two routes:
- `/` → `App` (landing page)
- `/card` → `BusinessCard` (exportable business card)

`i18n` is imported before `App` in `main.jsx` — this is required for translations to be ready on first render.

### Landing page section order (`App.jsx`)
`Navbar → Hero → About → Services → Cases → Team → FAQ → Contact → Footer`

Each section is a self-contained component under `src/components/`. Sections animate in on scroll via `useInView` (one-shot — once visible, stays visible).

### Scroll-based active section detection (Navbar)
`Navbar.jsx` listens to `window.scroll` and checks `getBoundingClientRect()` against `SECTION_IDS` in order. An element is "active" when its `top <= window.innerHeight * 0.35`. The desktop nav collapses to hamburger at `≤1024px` (not 768px — 7 links require the wider breakpoint).

### Notification pipeline (`src/services/sendNotifications.js`)
`sendContactForm()` fires three channels in parallel with `Promise.allSettled`:
1. EmailJS (email to Gmail)
2. Telegram Bot → Dairo's chat
3. Telegram Bot → Yamila's chat

The form only throws if **all three** channels fail. Credentials live in `src/config/notifications.js` (committed intentionally — these are public-facing bot tokens, not server secrets).

### Internationalization
Three locale files: `src/i18n/es.js` (default), `en.js`, `pt.js`. All content — including section text, FAQ answers, and case study descriptions — lives in these files as plain JS objects, not a CMS. To add or edit visible content, edit the translation files only. Components consume translations with `useTranslation()` and `t('key')`.

Arrays (e.g. `services.items`, `faq.items`, `cases.items`) are retrieved with `t('key', { returnObjects: true })`.

### Responsive grid system
Defined in `src/index.css`:
- `.grid-2` — two columns, stacks at 768px
- `.grid-auto` — `repeat(auto-fit, minmax(min(300px, 100%), 1fr))` — the `min()` prevents overflow on 360px screens
- `.grid-values` — 2-col on mobile, 1-col at 480px

Global rule: `section` padding reduces at 768px and 480px via `!important` overrides.

### Business card export (`/card`)
`BusinessCard.jsx` renders two fixed-size `div`s (1050×600px each) and scales them visually with `ResizeObserver` + CSS `transform: scale()`. On export, the transform is reset to `none` before `html2canvas` captures, then restored. **Do not use `WebkitBackgroundClip: text` in card components** — html2canvas does not support it and will render a solid block instead of the gradient text.

### Static assets
CVs are served from `public/cv/` (Vite copies `public/` verbatim to `dist/`). Download is triggered programmatically via an `<a>` with `download` attribute.

### CSS variables (design tokens)
All colors reference variables defined in `:root` in `src/index.css`:
`--primary` (#6C63FF), `--accent` (#00D4AA), `--dark` / `--dark-2` / `--dark-3` / `--dark-4`, `--text`, `--text-muted`, `--glass`, `--glass-border`.
