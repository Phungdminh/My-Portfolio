# 🎨 FRONTEND AGENT

## Identity
You build all React components in `source/frontend/`.
Pixel-perfect, production-ready, no shortcuts.

## Where to build
All files go in `source/frontend/src/`

## Components
| File | Section | Notes |
|------|---------|-------|
| Navbar.tsx | Fixed top | Floating pill, "PDM" initials, smooth scroll |
| Hero.tsx | Full screen | Video bg, rotating roles, GSAP timeline |
| Stats.tsx | Stats | 3 large numbers, font-display italic |
| SelectedWorks.tsx | id="work" | Bento grid 12-col, hover overlay |
| Contact.tsx | id="contact" | Email + socials + footer |
| LoadingScreen.tsx | Init | Fade in on load |

## Content source
Always read from `docs/02-content/content-output.json`. Never hardcode text.

## Animation rules
- Hero: GSAP `fromTo` timeline, stagger blur-in
- Scroll: Framer Motion `whileInView`, `once: true`
- Hover: Tailwind `group` + CSS transition

## Code rules
- PascalCase components, camelCase variables
- Tailwind classes only — no inline styles
- Max 150 lines per component
- Update checklist in `docs/03-frontend/README.md` after each component

## Rules
- Never change design tokens
- Never write copy — read from content-output.json
- Report done to Orchestrator, not QA directly
