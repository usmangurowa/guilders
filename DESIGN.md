---
name: Guilders Limited
description: The company's own stamped Nigerian trade paperwork, rendered as a website
colors:
  desk: "#e6dfca"
  paper: "#faf7ec"
  paper-2: "#f1ebd8"
  copy-pink: "#f7e9e6"
  copy-gold: "#f4ead0"
  ink: "#221f16"
  ink-soft: "#5a5648"
  form-blue: "#274690"
  rule-blue: "#b6bfd8"
  stamp-red: "#b02e20"
typography:
  display:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.04em"
  body:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 2
  label:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.18em"
  script:
    fontFamily: "Homemade Apple, cursive"
    fontSize: "1.5rem"
    fontWeight: 400
rounded:
  none: "0px"
  stamp: "6px"
spacing:
  ruling: "2rem"
  section: "4rem"
components:
  button-stamp:
    backgroundColor: "transparent"
    textColor: "{colors.stamp-red}"
    rounded: "{rounded.stamp}"
    padding: "0.8rem 1.6rem"
  button-stamp-hover:
    backgroundColor: "{colors.stamp-red}"
    textColor: "{colors.paper}"
  link-typed:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  tab-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  tab-inactive:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-soft}"
---

# Design System: Guilders Limited

## Overview

**Creative North Star: "The Operations Manifest"**

The entire site is Guilders Limited's own stamped trade paperwork. Every page is a numbered form sheet (GL-01 through GL-06, GL-99 for errors) resting on a desk surface: letterhead at the top, printed-form chrome in blue, entries typed in Courier, a red rubber stamp for registration, and an authorised signature at the foot. A young Nigerian trading company earns trust by showing its papers, not by imitating fintech gradients — so nothing here is decoration; every element is something a real waybill, registry extract, or continuation sheet would carry.

The voice is factual and registry-flavoured. Density is document-density: ruled paragraphs, tabular consignment lines, letterspaced form labels. Rejected outright: gradient heroes, icon-card grids, glassmorphism, dark "premium" themes, stock photography.

**Key Characteristics:**
- Every page is a numbered paper form on a desk, never a "web page"
- Two inks on paper: form-blue for printed chrome, typed ink for content; stamp-red is scarce
- Real paper material: subtle grain on desk and sheets, broken ink on the stamp
- File-folder tab navigation; legal pages are pink/gold carbon copies
- All facts verifiable (RC number, dates, address); no invented claims

## Colors

A paper-and-two-inks palette: warm paper neutrals, one printed-form blue, one rubber-stamp red.

### Primary
- **Form Blue** (#274690): the printed chrome of every form — labels, table headers, rules, microprint, tab numbers, link underlines. This is the color the "printer" used.
- **Stamp Red** (#b02e20): the rubber stamp and the single CTA only. Its scarcity is what makes the stamp feel official.

### Neutral
- **Desk** (#e6dfca): the page background the sheets rest on.
- **Paper** (#faf7ec): the primary sheet.
- **Paper 2** (#f1ebd8): inactive folder tabs and secondary surfaces.
- **Carbon Pink** (#f7e9e6): privacy policy sheet (pink copy — data protection file).
- **Carbon Gold** (#f4ead0): terms sheet (gold copy — conditions file).
- **Ink** (#221f16): typed content.
- **Ink Soft** (#5a5648): secondary typed content, blank-line strokes.
- **Rule Blue** (#b6bfd8): the faint ledger ruling behind ruled paragraphs.

### Named Rules
**The Two-Inks Rule.** Content is typed in ink; chrome is printed in form-blue; stamp-red appears only as the REGISTERED stamp and the single stamp-box CTA per page. No other hues exist.

**The Carbon-Copy Rule.** Legal pages are not styled differently — they are the same form on pink or gold carbon paper.

## Typography

**Display Font:** Courier Prime (with Courier New) — the company "typed" its own headings
**Body Font:** Courier Prime (with Courier New)
**Label Font:** Libre Franklin (with Franklin Gothic Medium, Arial) — the printed form voice
**Script Font:** Homemade Apple — the authorised signature only

**Character:** A typewriter did the content; a printing press did the chrome; a person signed it. The tension between the three is the identity.

### Hierarchy
- **Display** (700, clamp(1.875rem–3rem), lh 1.1, tracking 0.06em, uppercase): page titles and the letterhead company name.
- **Headline** (700, 1.25rem, uppercase, underlined): section and line-item headings.
- **Body** (400, 0.875rem, lh 2rem on ruled paper): typed paragraphs; max width 70ch.
- **Label** (Franklin 700, 0.6875rem, tracking 0.18em, uppercase, form-blue): printed form labels — LINE, DESCRIPTION OF BUSINESS, MEMO CLAUSE, STATUS.
- **Script** (1.5rem, form-blue): the director's signature, nothing else.

### Named Rules
**The Ruling Rule.** Ruled paragraphs sit exactly on the 2rem ledger ruling: `line-height: 2rem`, no margins between ruled lines.

## Layout

A single centered sheet per page, max-width ~72rem, with the desk visible around it. Folder tabs sit flush on the sheet's top edge; the active tab fuses into the sheet. Inside the sheet: letterhead → form number → content sections separated by 4rem rhythm → enquiries strip → signature footer → distribution line → microprint edge. Mobile keeps the same document; tabs scroll horizontally, tables collapse the memo-clause column, the stamp moves from overlapping-absolute to in-flow. Body copy never exceeds 70ch.

## Elevation & Depth

No shadow vocabulary beyond the one physical fact: the sheet rests on the desk (`0 1px 2px` + `0 12px 32px -12px` ink-tinted). Nothing else lifts. Depth inside the sheet is conveyed by paper tint (paper-2, carbon tints) and rules, never shadows.

**The One-Sheet Rule.** Only the sheet casts a shadow. Elements on the paper are printed or stamped flat.

## Shapes

Radius 0 everywhere — paper has corners. The two exceptions are physical: the rubber stamp and stamp-box CTA (6px, because rubber stamps are rounded) and the stamp's inner border (4px). Borders are 1px ink-tinted for the sheet, 2–3px stamp-red for stamps, 1px form-blue/rule-blue for table chrome. The recurring silhouette is the rotated stamp (-8deg) breaking table geometry.

## Components

### Buttons
- **Shape:** stamp-box — 2.5px stamp-red border, 6px radius, rotated -0.75deg
- **Primary (.stampbtn):** transparent bg, stamp-red Franklin 800 letterspaced text, 0.8rem × 1.6rem padding
- **Hover / Focus:** fills stamp-red with paper text; focus uses the global 2px form-blue outline
- **There is no secondary button.** Secondary actions are typed links.

### Links (.typedlink)
- **Style:** typed text underlined in form-blue (1.5px, 4px offset)
- **Hover:** faint form-blue wash (rgba(39,70,144,0.1))

### Tables (consignment/manifest)
- **Chrome:** form-blue letterspaced Franklin header labels, 2px ink top rule, 1px rule-blue row rules
- **Entries:** Courier; line numbers 01–05 bold

### Navigation (folder tabs)
- **Style:** Franklin caps labels + form-blue form numbers on paper-2 tabs; active tab is paper with no bottom border, fusing into the sheet; `aria-current="page"`; horizontal scroll on mobile

### The Stamp (signature component)
- CSS double-border rubber stamp: 3px + 1px stamp-red borders, rotated -8deg, `mix-blend-mode: multiply`, opacity 0.93, ink voids via white-speckle noise overlay (.stampink). Lands once per page at most, overlapping content like a real stamp. Motion: one 0.34s stamp-in scale (1.55→1) with 0.4s delay, disabled under reduced-motion.

### Form Sheet (FormSheet)
- Letterhead (company name, address, contact), № GL-XX form number top-right, FormFooter (signature, RC line, distribution note, pink/gold copy links), microprint edge strip.

## Do's and Don'ts

### Do:
- **Do** render every new page as a numbered form sheet with letterhead, footer, and microprint — extend the GL-XX series.
- **Do** keep body copy on the 2rem ruling at ≤70ch and labels in Franklin 700 / 0.18em tracking / form-blue.
- **Do** apply the shared grain (`--grain`) to any new paper surface.
- **Do** keep stamp-red scarce: one stamp and/or one CTA per page.

### Don't:
- **Don't** add gradients, glass, icon cards, hero imagery, or drop shadows inside the paper.
- **Don't** introduce new hues, rounded corners (beyond the stamp's 6px), or a second button style.
- **Don't** invent claims, metrics, or testimonials — every fact must be verifiable against the company record.
- **Don't** animate anything except the stamp landing.
