/**
 * projects.ts — central data store for all case studies.
 *
 * Adding a new project = adding one object to the `projects` array.
 * The dynamic page at app/projects/[slug]/page.tsx reads from here.
 *
 * All text follows AGENTS.md §4:
 *   - No em dashes
 *   - No banned words (passionate, innovative, leverage, seamless, etc.)
 *   - Short paragraphs, engineer tone, exact contribution stated
 *   - Never imply full ownership unless literally true
 *
 * PLACEHOLDER data is marked with // PLACEHOLDER comments throughout.
 * Replace each field with real project content before launch.
 */

/** An optional code snippet to display inline inside the Implementation section. */
export interface CodeSnippet {
  /** Short label shown above the block, e.g. "Liquid — product-card.liquid" */
  label: string;
  /** The raw code string */
  code: string;
}

/**
 * One case study entry.
 * Every field maps to a named section on the case study page template.
 */
export interface CaseStudy {
  /** URL-safe slug, e.g. "custom-collection-filtering" */
  slug: string;

  // ---- Section 1: Header ----
  /** Display title shown as the H1 */
  title: string;
  /**
   * Short card teaser — 1-2 sentences, written to be read in full at a glance.
   * Shown clamped on the ProjectCard and in full in the CaseStudyHeader.
   * This is NOT a truncated version of any long-form section.
   * Copy rules: no em dashes, no banned words, engineer tone, exact contribution.
   */
  teaser: string;
  /** Technology tags — reuses the same tag style as ProjectCard */
  tags: string[];
  /**
   * Optional live store URL.
   * PLACEHOLDER: set to undefined until a real URL is confirmed.
   */
  liveUrl?: string;

  // ---- Section 2: Overview ----
  /** What the client or store needed — one to three sentences */
  problem: string;
  /** What success looked like at handoff — one to three sentences */
  goal: string;

  // ---- Section 3: Role + Technology ----
  /** Exact contribution, plainly stated — not implied full ownership */
  myRole: string;
  /** Expanded technology breakdown for this project */
  technologies: string[];

  // ---- Section 4: Implementation ----
  /** How it was actually built — two to four short paragraphs */
  implementation: string[];
  /**
   * Optional screenshot placeholder.
   * When a real screenshot is ready, replace this string with a path to an
   * optimized image (e.g. "/screenshots/project-slug.webp") and update the
   * <LabeledSection> render to use <Image> instead of the placeholder div.
   * PLACEHOLDER: set to undefined to omit the screenshot block.
   */
  screenshotAlt?: string;
  /**
   * Optional inline code snippet.
   * PLACEHOLDER: set to undefined to omit the code block.
   */
  codeSnippet?: CodeSnippet;

  // ---- Section 5: Challenge → Solution ----
  /** One real obstacle encountered */
  challenge: string;
  /** The fix — specific, not vague */
  solution: string;

  // ---- Section 6: Result ----
  /**
   * Outcome of the work.
   * PLACEHOLDER: do not invent numbers or metrics. Replace with real data only.
   */
  result: string;

  // ---- Section 7: Lessons learned ----
  /** One to two sentences of genuine reflection */
  lessonsLearned: string;

  // ---- Section 8: Closing CTA ----
  /** One line connecting this project to the next inquiry */
  ctaLine: string;
  /**
   * Slug of the "next" project to link to at the bottom of this page.
   * PLACEHOLDER: set to undefined if only one project exists.
   */
  nextProjectSlug?: string;
  /** Display title of the next project (used for the link label) */
  nextProjectTitle?: string;
}

// =============================================================================
// PROJECT DATA
// =============================================================================

/**
 * PLACEHOLDER project — replace every field with real content.
 * This entry exists so the case study template can be previewed end to end.
 */
const placeholderProject: CaseStudy = {
  slug: "custom-bundle-builder",

  // Header
  title: "Tiered Bundle Builder with Live Discount Feedback",
  // PLACEHOLDER: replace with real 1-2 sentence card teaser
  teaser:
    "Built an interactive bundle builder where shoppers add products to a set and see their discount tier update live. Implemented the Liquid section, cart-quantity logic, and tiered discount messaging tied to Shopify's native discount functions.",
  tags: ["Liquid", "JavaScript", "Shopify Functions", "Cart API"],
  liveUrl: undefined, // PLACEHOLDER: set to real URL, e.g. "https://example-store.com/collections/all"

  // Overview
  problem:
    // PLACEHOLDER: replace with real client problem
    "The merchant wanted to reward shoppers for buying multiple products at once, but the store had no way to communicate progressive savings before checkout. Shoppers would add items individually with no visibility into how close they were to unlocking a better discount, which meant the incentive wasn't doing its job at the moment it mattered most: the product page.",
  goal:
    // PLACEHOLDER: replace with real success definition
    "Build a bundle builder where shoppers pick from an eligible product set, see a running item count, and get live feedback on which discount tier they're in (e.g. 3 items = 15% off, 4 items = 20% off, 6+ items = 25% off) before they ever reach checkout.",
  // Role + Technology
  myRole:
    // PLACEHOLDER: replace with exact contribution
    "I built the frontend: the Liquid section for the bundle builder UI, the JavaScript that tracks selected items and recalculates the active tier in real time, and the styling for tier progress states. Tier discount amounts were configured through Shopify's native discount functions on the backend, which I integrated against but did not build myself.",
  technologies: [
    "Shopify Liquid",
    "Vanilla JavaScript (ES2020)",
    "Shopify Cart AJAX API",
    "Shopify Functions (discount integration)",
    "CSS custom properties",
    "Dawn theme (base)",
  ],

  // Implementation
  implementation: [
    // PLACEHOLDER: replace with real implementation paragraphs
    "The bundle builder renders as a Liquid section pulling from a curated product list, set by the merchant through a metafield-linked collection. Each product has an add/remove control that updates a local JavaScript state object tracking selected item count.",
    "As items are added or removed, a small tier-progress bar updates instantly, showing shoppers which discount threshold they're currently in and how many more items would unlock the next tier. This calculation happens entirely client-side for instant feedback, with the actual discount applied server-side through Shopify's discount function once the cart is updated, so the displayed tier always matches what happens at checkout.",
    "I added a debounce on the cart-update call so rapid add/remove clicks don't fire multiple redundant network requests, which mattered once the merchant's product set grew past a dozen items.",
    // PLACEHOLDER: add a fourth paragraph if the project warrants it
  ],
  screenshotAlt:
    // PLACEHOLDER: replace with a real image path and descriptive alt text
    // When replacing: swap the placeholder div in LabeledSection for:
    // <Image src="/screenshots/custom-filtering.webp" alt={project.screenshotAlt} ... />
    'The bundle builder mid-selection, showing four items added, the active 20%-off tier highlighted, and the "add one more to unlock 25% off" prompt.',
  codeSnippet: {
    label: "JavaScript — tier calculation",
    code: `function getActiveTier(itemCount, tiers) {
  return tiers
    .filter(tier => itemCount >= tier.minItems)
    .sort((a, b) => b.minItems - a.minItems)[0] || null;
}`,
  },

  // Challenge → Solution
  challenge:
    'Client-side tier calculation and the server-side discount function occasionally disagreed at the boundary — a shopper could see "20% off" in the builder UI, but the actual discount function evaluated cart contents slightly differently at checkout, causing a mismatch.',
  solution:
    "I mirrored the exact tier thresholds and rounding logic from the discount function's configuration into the frontend calculation, rather than approximating it, and added an inline note clarifying the displayed tier reflects the same thresholds applied at checkout. This removed the discrepancy without needing to change the discount function itself.",

  // Result
  result:
    "Insert real outcome here. If you have measured metrics (e.g. average order value change, bundle conversion rate), include them. If not, describe the qualitative change: what shoppers can now see and do that they couldn't before, and how it changed the merchant's ability to run this kind of promotion.",

  // Lessons learned
  lessonsLearned:
    "When a frontend calculation mirrors a backend rule, keep the source of truth in one place and mirror it exactly rather than approximating — small rounding or threshold differences show up immediately to shoppers and erode trust in the discount shown.",

  // Closing CTA
  ctaLine:
    "If you're running tiered pricing or bundle promotions and want shoppers to see their savings update live instead of guessing at checkout, that's the kind of feature I can build directly into your theme.",
  nextProjectSlug: "cart-threshold-gift-selector",
  nextProjectTitle: "Cart-Threshold Gift Selector",
};

const cartThresholdProject: CaseStudy = {
  slug: "cart-threshold-gift-selector",
  title: "Cart-Threshold Gift Selector",
  teaser:
    "Built a cart drawer widget that reveals free gift options as spend thresholds are reached. Implemented the live cart-total watcher, conditional gift-grid UI, and Liquid section pulling eligible gifts from a metafield list.",
  tags: ["Liquid", "JavaScript", "Metafields", "Cart API"],
  liveUrl: undefined,

  problem:
    "The merchant wanted to reward shoppers for hitting specific spend thresholds (e.g. $50, $90) with a free gift, but needed shoppers to actually notice and pick a gift inside the cart drawer rather than missing the offer entirely. A static banner was not enough; shoppers needed to see their progress toward the next threshold and choose from eligible gifts without leaving the cart.",
  goal:
    "Build a cart drawer experience where the gift selector activates automatically as cart total crosses each threshold, shows shoppers which threshold they have hit, and lets them pick one gift per tier from a merchant-managed list, all without a page reload.",
  myRole:
    "I built the frontend: the cart-total watcher in JavaScript, the conditional display logic for each gift tier, the gift-selection grid UI in the cart drawer, and the Liquid section that renders eligible gifts from a metafield-defined list. Discount/free-item logic on the order itself was applied through Shopify's native cart and discount tooling, which I integrated against but did not configure myself.",
  technologies: [
    "Shopify Liquid",
    "Vanilla JavaScript (ES2020)",
    "Shopify Cart AJAX API",
    "Product metafields",
    "CSS custom properties",
    "Dawn theme (base)",
  ],
  implementation: [
    "The gift tiers and their eligible products are defined through a metafield list the merchant manages from the admin, so adding a new threshold or swapping which products count as gifts does not require a code change.",
    "A JavaScript listener watches the cart subtotal on every cart update (add, remove, quantity change) and compares it against the configured thresholds. When a threshold is crossed, the corresponding gift tier activates in the cart drawer with a short transition, and a grid of eligible gift products appears for that tier, letting the shopper pick one.",
    "Selecting a gift adds it to the cart as a $0 line item through the Cart API, tagged so it is identifiable as a promotional gift rather than a purchased item. If the shopper's total later drops below a threshold (e.g. after removing an item), the corresponding gift is automatically removed from the cart to prevent an ineligible free item at checkout.",
  ],
  screenshotAlt:
    "The cart drawer with the $50 gift tier active, showing the gift-selection grid and a progress indicator toward the $90 tier.",
  codeSnippet: {
    label: "JavaScript — threshold check and gift sync",
    code: `function syncGiftTiers(cartTotal, tiers, cart) {
  tiers.forEach(tier => {
    const eligible = cartTotal >= tier.threshold;
    const giftInCart = cart.items.find(item => item.properties?._gift_tier === tier.id);

    if (eligible && !giftInCart) {
      activateGiftTier(tier);
    } else if (!eligible && giftInCart) {
      removeGiftFromCart(giftInCart);
    }
  });
}`,
  },
  challenge:
    "Shoppers could add a gift, then remove a regular product to drop below the threshold, leaving a free gift in the cart the merchant never intended to honor at that order value.",
  solution:
    "I tied each gift line item to its triggering tier using a line item property, then re-ran the threshold check on every cart mutation, not just on add. If a shopper's total drops below a tier's threshold, that tier's gift is automatically removed before the cart updates, so the cart state always reflects what the shopper has actually earned.",
  result:
    "Insert real outcome here. If you have measured metrics (e.g. average order value change, bundle conversion rate), include them. If not, describe the qualitative change: what shoppers can now see and do that they couldn't before, and how it changed the merchant's ability to run this kind of promotion.",
  lessonsLearned:
    "Any feature that auto-adds something to the cart needs an equally solid auto-remove path; the failure mode that matters most is not the happy path, it is the shopper undoing part of their order after the reward already triggered.",
  ctaLine:
    "If you're running spend-based promotions and want gifts to activate automatically in the cart instead of relying on a shopper noticing a banner, that's the kind of cart logic I can build directly into your theme.",
  nextProjectSlug: "before-after-carousel",
  nextProjectTitle: "Structured Before/After Results Carousel",
};

const beforeAfterCarouselProject: CaseStudy = {
  slug: "before-after-carousel",
  title: "Structured Before/After Results Carousel",
  teaser:
    "Built a metaobject-driven carousel for displaying customer before/after results, letting the merchant add new entries from the Shopify admin without touching the section's code.",
  tags: ["Liquid", "Metaobjects", "JavaScript", "CSS"],
  liveUrl: undefined,

  problem:
    "The merchant wanted to feature customer before/after results with a photo, quote, timeframe, and result category, but the existing setup required a developer to edit the template every time a new result was added. Non-technical staff had no way to add, reorder, or remove entries on their own.",
  goal:
    "Build a carousel section backed by a reusable content structure so the marketing team can add new before/after entries, reorder them, and tag each with a result category, entirely from the Shopify admin.",
  myRole:
    "I built the frontend: the metaobject field structure for each result entry, the Liquid section that queries and renders those entries, the carousel/slider behavior in JavaScript, and the responsive styling. Content entry (photos, quotes, categories) is handled by the merchant's team, not by me.",
  technologies: [
    "Shopify Liquid",
    "Shopify Metaobjects",
    "Metaobject definitions",
    "Vanilla JavaScript",
    "CSS scroll-snap",
    "Dawn theme (base)",
  ],
  implementation: [
    "Each before/after entry is stored as a metaobject with fields for before image, after image, customer name, duration (e.g. '3 weeks'), quote, and a result category tag that links to a relevant collection. This keeps the content structured and validated at the admin level, rather than relying on freeform text fields that are easy to enter inconsistently.",
    "The Liquid section queries all published entries of this metaobject type, sorted by the merchant's chosen order, and renders each as a slide. Category tags render as clickable links pointing to the matching collection, so the carousel also functions as a soft navigation aid, not just a testimonial display.",
    "The carousel itself uses native CSS scroll-snap rather than a JavaScript slider library, with a small amount of JavaScript to handle the next/previous button controls and keep the slide counter (e.g. '1 / of 4') in sync with scroll position. This kept the section lightweight and avoided pulling in a dependency for what is fundamentally a horizontal scroll behavior.",
  ],
  screenshotAlt:
    "The results carousel showing one entry expanded, with before/after image toggle, customer quote, duration, and a linked result-category tag.",
  codeSnippet: {
    label: "JavaScript — syncing slide counter to scroll position",
    code: `function updateSlideCounter(track, counterEl, totalSlides) {
  const index = Math.round(track.scrollLeft / track.clientWidth);
  counterEl.textContent = \`\${index + 1} / of \${totalSlides}\`;
}`,
  },
  challenge:
    "Metaobject entries with a missing 'after' image caused the before/after toggle to break, since the toggle assumed both images always existed.",
  solution:
    "I added a Liquid conditional that falls back to displaying only the before image with the toggle control hidden entirely when no after image is present, rather than showing a broken or empty state. This kept incomplete entries from looking like a bug.",
  result:
    "Insert real outcome here. If you have measured metrics (e.g. engagement with the carousel, click-through to linked collections), include them. If not, describe the qualitative change: what the marketing team can now do independently that they couldn't before, and how that changed their ability to keep this section current.",
  lessonsLearned:
    "Structured content only pays off if every optional field is actually treated as optional in the template; assuming a field will always be filled in is what turns a flexible content model into a fragile one.",
  ctaLine:
    "If you want a testimonial or results section your team can update on their own without waiting on a developer, that's the kind of metaobject-driven build I can set up in your theme.",
  nextProjectSlug: "custom-bundle-builder",
  nextProjectTitle: "Tiered Bundle Builder with Live Discount Feedback",
};

/**
 * All published case studies.
 * The dynamic route reads from this array — add new entries here as projects are ready.
 */
export const projects: CaseStudy[] = [
  placeholderProject,
  cartThresholdProject,
  beforeAfterCarouselProject,
];

/** Look up one project by slug. Returns undefined if not found (triggers 404). */
export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
