<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Shopify Frontend Developer Portfolio

This file is the source of truth for this project. Read it before building, editing, or styling any page or component. Every session works on one piece at a time (e.g. "just the hero," "just the FAQ") — this file exists so each piece still matches the others without re-explaining the brand every time.

If a new instruction in a prompt conflicts with this file, follow the prompt for that task, but flag the conflict and ask whether this file should be updated.

---

## 1. Who this site is for

Owner: George Allen Donayre — Shopify Frontend Developer.

Audience, in order: Shopify agencies, ecommerce founders, Shopify store owners, then freelance clients.

Every section on every page should be answering one of these, directly or indirectly:
Who is this person? What do they specialize in? Can they solve my problem? Have they done this before? Can I trust them? How do I contact them?

Do not write or design anything that reads as generic virtual assistant, Shopify operations/admin support, or general web developer. The specialization is Shopify Liquid, custom sections, metafields, metaobjects, Shopify Functions, and frontend implementation of approved designs.

---

## 2. Brand personality

Calm. Technical. Confident. Precise. Modern. Minimal. Premium. Human.

Not flashy. Never feels like a template. Reference point: an Apple product page, but understated, not showy.

---

## 3. Visual system — apply exactly, every page

### Colors

```
--color-bg: #FFFFFF;
--color-bg-alt: #F7F7F7;      /* section tint, used rarely, never two in a row */
--color-text-primary: #0A0A0A; /* headlines */
--color-text-body: #333333;    /* paragraphs */
--color-text-muted: #777777;   /* captions, meta, labels */
--color-line: #E5E5E5;         /* dividers, borders, table lines */
--color-accent: #2563EB;       /* links and primary CTA ONLY — nowhere else */
```

Rules:

- No gradients.
- No more than one accent color anywhere in the system.
- The accent color is reserved for links and the primary call-to-action button. It does not appear on icons, backgrounds, decorative elements, or secondary buttons.
- Hierarchy comes from type size, weight, and spacing — not from color.
- `--color-bg-alt` is for alternating section backgrounds only, and never on two consecutive sections.

### Typography

- One typeface family for the entire site. System font stack is acceptable: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`.
- Large type for headlines, generous line height for body copy (line-height ~1.5–1.6 for body text).
- Establish a clear type scale and reuse it everywhere — do not introduce a new font size per page. Suggested scale (px): 14, 16, 18, 21, 28, 36, 48, 64.
- Weight carries hierarchy: bold for headlines and emphasis, regular for body. Avoid italics except rare inline emphasis.

### Spacing

- 8px base spacing system. All margins, padding, and gaps are multiples of 8 (8, 16, 24, 32, 48, 64, 96...).
- Generous whitespace between sections. No section should visually touch the next without breathing room — minimum 64–96px vertical section padding on desktop.

### Shape and motion

- Rounded corners: 4–8px, applied consistently across all cards, buttons, and inputs. Never mix radii within the same component type.
- Minimal or no animation. Motion is only used to reinforce hierarchy (e.g. a subtle fade/slide on scroll into view). Never decorative, never bouncy, never attention-seeking.
- No drop shadows beyond a very subtle elevation on interactive elements, if used at all. Prefer hairline borders (`--color-line`) over shadows for separating cards.

### Layout

- Content max-width: keep a comfortable reading/scanning column (roughly 1100–1200px container, ~640–720px for long-form text blocks like case study prose).
- Every section should read cleanly on mobile at full width with the same spacing rules scaled down proportionally.

---

## 4. Copy rules — apply to every word on the site

Never use em dashes.

Never use these words: passionate, results-driven, innovative, leverage, cutting-edge, unlock, seamless, world-class, next-level, game-changing.

No generic marketing language, no filler adjectives.

Short paragraphs. Every sentence has a clear purpose. Sounds like an experienced engineer explaining real work, not a sales page.

Never exaggerate experience. Every project must specify exact contribution — never imply ownership of an entire store unless that's literally true. Example of the right level of specificity: "Implemented custom PDP using Shopify Liquid, JavaScript, metafields and reusable sections."

Hero headline direction — good examples:

- "I build custom Shopify storefronts that are easy to manage."
- "I turn approved designs into production-ready Shopify experiences."

Avoid headlines like: "I create amazing digital experiences."

---

## 5. Site structure

Pages: Home, Projects (case study index), Case study (template, one per project), About, Contact. Resume PDF and GitHub are linked assets, not separate pages.

Homepage section order — build in this order, one at a time, across sessions:

1. Hero
2. Selected Work (2–3 real case studies)
3. Services
4. Process
5. Technologies
6. About
7. Testimonials (omit entirely until real quotes exist — never fake or placeholder-fill this section)
8. FAQ
9. Contact

Do not build placeholder/lorem content into any section. If real content isn't ready for a section, leave that section out of the build rather than filling it with fake copy — flag it instead.

---

## 6. Case study template

Every project page follows this exact structure, in this order: Problem, Goal, My role, Technology, Implementation, Challenges, Solution, Result, Lessons learned. Tell the story in prose, don't just present a screenshot gallery.

---

## 7. Components — build once, reuse everywhere

Reusable components to establish early and reuse consistently rather than rebuilding per page: Button (primary/secondary), Card, Project card, Feature block, Tech stack item, Timeline/process step, CTA block, FAQ accordion item, Footer, Navigation (desktop and mobile).

Once a component exists, later sessions should reuse and extend it rather than creating a near-duplicate with slightly different styling. If a new section seems to need a new variant of an existing component, prefer extending the existing component's props/styles over creating a parallel one.

---

## 8. Tech stack

- Next.js
- TypeScript
- Tailwind CSS — configure the color, spacing, and type scale from Sections 3 as Tailwind theme tokens, not inline hex/px values scattered through components
- Framer Motion — only for the sparse, hierarchy-reinforcing motion described in Section 3, not default-added to every element
- Deployment: Vercel, with a proper purchased domain (pattern: firstnamelastname.com), not the default subdomain

Set up `tailwind.config` theme tokens (colors, spacing, fontSize) matching Section 3 before building any section, so every subsequent session pulls from the same source instead of hardcoding values.

---

## 9. Accessibility and performance — non-negotiable on every section built

- WCAG AA contrast minimum
- Full keyboard navigation and visible focus states
- Semantic HTML (proper heading levels, landmarks, alt text describing actual content, not keyword-stuffed)
- Lazy-load images, optimize images, minimal JavaScript, avoid unnecessary animation — Core Web Vitals matter on this site specifically because it's proof of technical competence

---

## 10. Working style for this project

- Build one section/page at a time across separate sessions. Before starting a new section, check this file for the relevant rules rather than re-deriving style choices.
- After building a section, it should look like it was built by the same person who built the last one — same spacing scale, same type scale, same component patterns, same button styles. If unsure whether something matches, default to reusing an existing pattern over inventing a new one.
- Never introduce a new color, font, spacing value, or border radius outside what's defined in Section 3 without flagging it as a deliberate exception first.
- Before marking any section "done," self-check against Section 4 (copy) and Section 9 (accessibility/performance) for that section specifically.

---

## 11. Final self-review (apply before considering the whole site launch-ready)

Is this believable? Does this sound human? Would a Shopify agency actually hire this person based on this page? Is every sentence necessary? Does this communicate technical ability, not just activity? Does this avoid AI writing patterns?

If any answer is no, revise before publishing.

<!-- END:nextjs-agent-rules -->
