/**
 * TestimonialCard — reusable card for a client testimonial.
 *
 * Per AGENTS.md §7: build once, reuse everywhere.
 *
 * ⚠ EXCEPTION TO AGENTS.md §5:
 * Section 5 says "Testimonials: omit entirely until real quotes exist — never
 * fake or placeholder-fill this section." This component is built as structural
 * scaffolding only and is NOT rendered on the live homepage. It exists so the
 * layout and styling are ready when real testimonials are collected.
 *
 * DO NOT import this into the homepage until real client quotes replace the
 * placeholder content below.
 */

interface TestimonialCardProps {
  /** The client's testimonial quote */
  quote: string;
  /** Client's full name */
  name: string;
  /** Client's role and company, e.g. "Founder, StoreName" */
  role: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <blockquote className="flex flex-col gap-4 border-t border-line pt-6 sm:pt-8">
      <p className="text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="flex flex-col gap-0.5">
        <cite className="not-italic text-[length:var(--font-size-sm)] font-semibold text-text-primary">
          {name}
        </cite>
        <span className="text-[length:var(--font-size-xs)] text-text-muted">
          {role}
        </span>
      </footer>
    </blockquote>
  );
}
