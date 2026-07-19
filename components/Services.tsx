/**
 * Services section — what George actually delivers.
 *
 * Per AGENTS.md §5, this is section 3 in the homepage order.
 * Background: bg (white) — Selected Work above uses bg-alt, so alternation holds.
 * Every service reinforces "Shopify Frontend Developer" positioning (§1).
 * All copy is PLACEHOLDER — replace with final descriptions.
 */

import ServiceCard from "@/components/ServiceCard";

/** PLACEHOLDER service data — replace descriptions with final copy */
const services = [
  {
    title: "Theme customization",
    description:
      "Modifying existing Shopify themes to match approved designs. This includes adjusting layout, typography, color, and component behavior without breaking theme update compatibility.",
  },
  {
    title: "Custom sections and blocks",
    description:
      "Building new Liquid sections and blocks that merchants can configure through the Shopify theme editor. Reusable, well-structured, and documented for long-term maintenance.",
  },
  {
    title: "Metafields and metaobjects",
    description:
      "Setting up structured content using Shopify metafields and metaobjects, then surfacing that data on the storefront through Liquid templates. Useful for specs, FAQs, size guides, and other product-level content.",
  },
  {
    title: "Landing page builds",
    description:
      "Turning design files into production-ready Shopify pages using sections, blocks, and custom Liquid. Built so the marketing team can duplicate and adjust them without developer involvement.",
  },
  {
    title: "Storefront debugging and performance",
    description:
      "Diagnosing and fixing frontend issues in Shopify themes: broken layouts, slow load times, JavaScript errors, and Liquid rendering problems. Focused on measurable improvements, not vague optimization.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-bg py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* ---- Section header ---- */}
        <div className="mb-12 max-w-[640px] sm:mb-16">
          <h2
            id="services-heading"
            className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
          >
            What I do
          </h2>
          {/* PLACEHOLDER intro — replace with final copy */}
          <p className="mt-4 text-[length:var(--font-size-base)] leading-relaxed text-text-body">
            Shopify frontend work, scoped clearly and delivered as clean,
            maintainable code.
          </p>
        </div>

        {/* ---- Service grid ---- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
