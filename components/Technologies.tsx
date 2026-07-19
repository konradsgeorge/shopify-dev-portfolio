/**
 * Technologies section — specialist tech stack, not a generic skills dump.
 *
 * Per AGENTS.md §5, this is section 5 in the homepage order.
 * Background: bg-alt — Services above uses bg, maintaining alternation.
 * Groups reinforce Shopify frontend specialization (§1).
 * These are real technologies, not placeholder content.
 */

import TechGroup from "@/components/TechGroup";

const techGroups = [
  {
    category: "Shopify",
    items: [
      "Liquid",
      "Sections & Blocks",
      "Metafields & Metaobjects",
      "Shopify Functions",
      "Theme Architecture",
      "Shopify Ajax API",
    ],
  },
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "Tailwind CSS",
      "React / Next.js",
      "Git",
    ],
  },
  {
    category: "Tooling & Automation",
    items: [
      "Playwright",
      "REST & GraphQL APIs",
      "Shopify CLI",
      "Figma (developer handoff)",
    ],
  },
];

export default function Technologies() {
  return (
    <section
      aria-labelledby="technologies-heading"
      className="bg-bg py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* ---- Section header ---- */}
        <div className="mb-12 max-w-[640px] sm:mb-16">
          <h2
            id="technologies-heading"
            className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
          >
            Technologies
          </h2>
          <p className="mt-4 text-[length:var(--font-size-base)] leading-relaxed text-text-body">
            The tools I use daily, grouped by where they fit in the build
            process.
          </p>
        </div>

        {/* ---- Tech groups grid ---- */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {techGroups.map((group) => (
            <TechGroup
              key={group.category}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
