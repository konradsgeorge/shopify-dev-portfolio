/**
 * Testimonials section — structural scaffold only, NOT live.
 *
 * ⚠ DELIBERATE EXCEPTION TO AGENTS.md §5:
 * "Testimonials: omit entirely until real quotes exist — never fake or
 * placeholder-fill this section."
 *
 * This component exists purely for layout scaffolding so the design is ready
 * when real testimonials are collected. It is NOT imported into the homepage.
 * When real quotes are available:
 *   1. Replace the placeholder data below with actual client quotes.
 *   2. Import and add <Testimonials /> to app/page.tsx in position 7
 *      (after About, before FAQ).
 *   3. Remove or update this warning comment.
 *
 * Background would be bg when enabled (About above uses bg-alt).
 */

import TestimonialCard from "@/components/TestimonialCard";

/**
 * NOT REAL — placeholder data for layout testing only.
 * Replace every entry with a genuine client quote before enabling.
 */
const placeholderTestimonials = [
  {
    quote:
      "Placeholder quote text goes here. Replace with a real client testimonial before enabling this section on the live site.",
    name: "Name",
    role: "Role at Company",
  },
  {
    quote:
      "Placeholder quote text goes here. Replace with a real client testimonial before enabling this section on the live site.",
    name: "Name",
    role: "Role at Company",
  },
  {
    quote:
      "Placeholder quote text goes here. Replace with a real client testimonial before enabling this section on the live site.",
    name: "Name",
    role: "Role at Company",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-bg py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* ---- Section header ---- */}
        <div className="mb-12 max-w-[640px] sm:mb-16">
          <h2
            id="testimonials-heading"
            className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
          >
            What clients say
          </h2>
        </div>

        {/* ---- Testimonial grid ---- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderTestimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              quote={item.quote}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
