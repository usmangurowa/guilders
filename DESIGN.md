# Design System: Guilders Limited — "The Platform Standard"

**The one-liner:** The visual language of Africa's best platform companies — white canvas, one confident green, huge tight headlines, and product-real UI cards that show the work instead of describing it.

This site speaks the dialect of Paystack, Mono and their peers: calm, modern, evidence-first. Guilders is a diversified operating company, not a fintech — so where those companies show dashboards, we show operations: consignments in transit, deploys going live, invoices settled, leases renewed. Every visual is an operational artifact.

## Mode

**Persuade** (all public pages). Legal pages (privacy, terms) run in **Read** mode: quiet prose shells, max-width ~65ch equivalents, no decoration.

## Color

One accent. Green is the only voice of emphasis — never introduce a second accent.

| Token | Value | Role |
|---|---|---|
| `white` | `#ffffff` | Primary canvas |
| `ink` | `#0a1f18` | Headlines, primary text (green-tinted near-black) |
| `body` | `#4a5a52` | Body text on white (≈7:1) |
| `soft` | `#66756d` | Captions, labels, metadata |
| `green` | `#0b6e43` | THE accent: CTAs, links, section labels (≈5:1 on white) |
| `green-deep` | `#095c38` | Hover state of green |
| `green-bright` | `#17b26a` | Accent on dark surfaces only |
| `mint` | `#eef6f1` | Tinted section background, card chrome |
| `mint-deep` | `#ddefe6` | Status chips, check circles |
| `dark` | `#071b14` | Dark bands: CTA section, footer |
| `dark-2` | `#0b2f22` | Hover surface on dark |
| `line` | `#e5ece8` | Hairline borders on white |
| `line-dark` | `#1c3a2e` | Hairline borders on dark |

Dark-surface text is tinted from the green hue, never gray: `#d3e4db` (strong), `#a9c4b8` (secondary), `#7f9c8f` (muted). Illustrative card details may use `#f2b8b5`, `#f4d9a6`, `#b9e2cd` (traffic dots) and `#b7cec2` (pending route stroke).

## Typography

| Style | Font | Size | Usage |
|---|---|---|---|
| Display hero | Inter Tight 600, -0.035em | `clamp(2.625rem, 6.4vw, 4.75rem)` | H1 home only |
| Display section | Inter Tight 600, -0.03em | `clamp(2rem, 4vw, 3rem)` | Page H1s, band headings |
| Display sub | Inter Tight 600, -0.02em | `clamp(1.5rem, 2.6vw, 2rem)` | Section/division headings |
| Card heading | Inter Tight 600, tight | 1.125–1.25rem (`text-lg`/`text-xl`), `text-2xl`/`1.75rem` for stats | Cards, stats |
| Body | Inter 400 | 1rem–1.25rem / relaxed leading | Paragraphs |
| Small/UI | Inter 500–600 | 0.8125rem (`13px` code), 0.875rem, `15px` checklist | Labels, chips, card copy |
| Code | ui-monospace stack | 13px/1.5 | Terminal card only |

Section labels are small green semibold sentences ("Company", "Technology") — the Mono signature. Never uppercase-tracked eyebrows.

## Signature elements

1. **UI cards (`card-ui`)**: white, 16px radius, `line` border, layered shadow with offset+blur. Content is always a plausible operational artifact — tracking, terminal, order, lease, portfolio. Never nested cards.
2. **Dot grid (`dot-grid`)**: radial-dot backdrop behind hero cards only.
3. **Alternating division sections**: label → heading → summary → 3 checks → "More about X →", visual on the other column, flip each row.
4. **Dark bands**: closing CTA + footer on `dark` with white btn-on-dark.
5. **Facts strip**: honest registration numbers (RC 9819868, 2026, Makurdi, Five) in place of the category's vanity metrics. Never invent metrics, customers or logos.

## Motion

One authored moment: `card-rise` — hero cards rise 14px and fade in, 0.55s cubic-bezier(0.16,1,0.3,1), staggered 80/220ms. Everything else is 150ms color/border transitions. Full `prefers-reduced-motion` opt-out.

## Voice

Plain, confident, benefit-led. Short declaratives ("Five divisions. One standard of delivery."). No hype adjectives, no invented numbers. British-Nigerian spelling (organisation, ₦).

## Bans

No second accent, no gradient text, no zero-offset halo shadows, no uppercase-tracked eyebrows, no section numbering, no fake logos/metrics/testimonials, no serif or handwriting fonts, no nested cards, no gray text on colored surfaces.
