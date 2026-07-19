"use client";

/**
 * BioParagraphs — expandable bio copy block for /about.
 *
 * Shows the first two paragraphs by default; the remaining three
 * are hidden behind a "Read more" toggle. This keeps the bio section
 * compact without removing content from the page.
 *
 * Motion: a single CSS max-height transition — no bounce, no spring.
 * Consistent with AGENTS.md §3 (motion only reinforces hierarchy).
 */

import { useState } from "react";

const pClass =
  "text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]";

export default function BioParagraphs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ---- Always-visible paragraphs (1 & 2) ---- */}
      <p className={pClass}>
        {/* PLACEHOLDER paragraph 1 — replace with real background copy */}
        I&apos;m George Allen Donayre. I build Shopify storefronts using Liquid,
        custom sections, metafields, and JavaScript. Most of my work starts with
        a Figma file and ends with a theme that merchants can manage without
        touching code.
      </p>

      <p className={`mt-6 ${pClass}`}>
        {/* PLACEHOLDER paragraph 2 — replace with real working-style copy */}
        I come in at the implementation stage. I read the design files, ask the
        questions that surface edge cases before they become revisions, and write
        code that makes sense to the next developer who opens it. I don&apos;t
        use page builders or drag-and-drop editors for production work.
      </p>

      {/* ---- Collapsible paragraphs (3, 4, 5) ---- */}
      <div
        aria-hidden={!expanded}
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: expanded ? "600px" : "0px",
          opacity: expanded ? 1 : 0,
        }}
      >
        <p className={`mt-6 ${pClass}`}>
          {/* PLACEHOLDER paragraph 3 — specialization */}
          My focus is Shopify-specific: theme architecture, custom section
          schemas, metafield and metaobject integration, and the JavaScript that
          keeps product pages, filters, and cart interactions running correctly.
          I don&apos;t do Shopify admin operations, marketing, or store setup
          work.
        </p>

        <p className={`mt-6 ${pClass}`}>
          {/* PLACEHOLDER paragraph 4 — experience level */}
          I&apos;ve worked on projects ranging from isolated section builds to
          full Dawn-based theme customizations. I&apos;ve collaborated with
          design agencies that hand off Figma files and need them implemented
          exactly, and with store owners who need a specific feature added
          without disrupting what already works.
        </p>

        <p className={`mt-6 ${pClass}`}>
          {/* PLACEHOLDER paragraph 5 — personal note */}
          I care about accessible markup and fast page loads not because they
          check a box, but because they affect whether a store actually converts.
          Clean, readable code matters on this kind of site because someone will
          maintain it after I hand it off.
        </p>
      </div>

      {/* ---- Toggle button ---- */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-5 inline-flex items-center gap-1 text-[length:var(--font-size-sm)] font-medium text-accent transition-colors hover:text-accent/80 focus-visible:outline-accent"
      >
        {expanded ? "Show less" : "Read more"}
        <span
          aria-hidden="true"
          className="inline-block text-xs transition-transform duration-200"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ↓
        </span>
      </button>
    </>
  );
}
