# Notes landing page — React components

Ten components plus a content file. Drop the folder in as `src/components/landing/`.

## Assumptions

- **Next.js App Router + TypeScript.** Files are `.tsx` and use `next/link` and `next/image`. For a plain React app, swap `<Link href>` for `<a href>` and `<Image>` for `<img>`.
- **Tailwind CSS v4 with your existing tokens.** Every color is a semantic alias already defined in `src/app/globals.css` — `background`, `foreground`, `card`, `accent`, `border`, `muted-foreground`, `primary`, `primary-foreground`. Nothing new was added. Dark mode works through your existing `.dark` class.
- **shadcn Button.** All CTAs use `@/components/ui/button` with `asChild` so the link is the button. If your `Button` has no `asChild`, wrap the `Link` around the `Button` instead.
- **Logo at `/logo.svg`** in `public/` (already there).

## Mount it

```tsx
// src/app/page.tsx
import { LandingPage } from "@/components/landing";

export default function Home() {
  return <LandingPage />;
}
```

Or compose sections yourself:

```tsx
import { Navbar, Hero, Features, Faq, FinalCta, Footer } from "@/components/landing";
```

## Files

| File | What it is |
| --- | --- |
| `LandingPage.tsx` | Composes all sections in order |
| `Navbar.tsx` | Sticky header, nav links, persistent sign-up CTA |
| `Hero.tsx` | Type-only hero, badge, headline, two CTAs |
| `AppPreview.tsx` | Static three-pane app shot (local `NoteCard` + `TagChip`) |
| `Features.tsx` | Four-up icon feature row |
| `HowItWorks.tsx` | Three numbered steps on the accent band + repeat CTA |
| `Benefits.tsx` | Two-by-two hairline benefit grid |
| `Security.tsx` | Trust points and the stack line |
| `Faq.tsx` | Accordion — the only client component (`"use client"`) |
| `FinalCta.tsx` | Closing call-to-value |
| `Footer.tsx` | Wordmark, links, legal line |
| `Section.tsx` | Shared section shell, title, and lead |
| `LandingIcon.tsx` | The 11 Notes glyphs this page uses, inlined |
| `content.ts` | All copy, as data |

## Two things to decide

1. **Icons.** `LandingIcon` inlines the glyphs so the landing page has no import coupling. Your app already ships one component per glyph in `src/components/icons` — if you'd rather use those, delete `LandingIcon.tsx` and swap the `name` props for the real components.
2. **Type scale.** The design system tops out at 24px; a landing hero cannot. The hero and section headings use `clamp()` above that cap (58px / 34px). Tracking stays on the system's negative curve. That is the one deliberate departure.

## Accessibility notes

- FAQ triggers are real `<button>` elements with `aria-expanded`.
- The preview pane scrolls horizontally below 860px rather than reflowing, matching how the app itself collapses.
- No section relies on color alone; the only accent is blue-500 on glyphs, buttons, and the badge.
