/**
 * CaseStudyCTA — Section 8 (Closing CTA) of the case study page template.
 *
 * AGENTS.md §7: build once, reuse everywhere.
 * Small component that closes each case study with one connecting line and
 * two links: contact anchor and an optional "next project" link.
 *
 * Button style matches the primary CTA used in Hero and Contact:
 *   - bg-accent, text-white, h-12, rounded-[var(--radius-md)], font-semibold
 *   - Hover: bg-accent/90
 * Secondary link matches the text-link style used in Hero and About.
 *
 * No deliberate exceptions to AGENTS.md.
 */

interface CaseStudyCTAProps {
  /** One sentence connecting this project to an inquiry */
  ctaLine: string;
  /**
   * Optional slug of the next project.
   * PLACEHOLDER: set to undefined when only one project exists.
   */
  nextProjectSlug?: string;
  /** Display title of the next project — used as the link label */
  nextProjectTitle?: string;
}

export default function CaseStudyCTA({
  ctaLine,
  nextProjectSlug,
  nextProjectTitle,
}: CaseStudyCTAProps) {
  return (
    <section
      aria-label="Get in touch"
      className="border-t border-line bg-bg py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* ---- Copy ---- */}
        <p className="max-w-[560px] text-[length:var(--font-size-md)] leading-relaxed text-text-body sm:text-[length:var(--font-size-lg)]">
          {ctaLine}
        </p>

        {/* ---- Actions ---- */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {/* Primary CTA — same style as Hero and Contact buttons */}
          <a
            href="/#contact"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-8 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent"
          >
            Get in touch
          </a>

          {/* Optional "next project" link — text link, same style as Hero secondary */}
          {nextProjectSlug && nextProjectTitle && (
            <a
              href={`/projects/${nextProjectSlug}`}
              className="inline-flex items-center gap-1.5 text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary focus-visible:outline-accent"
            >
              Next: {nextProjectTitle}
              <span aria-hidden="true" className="text-xs">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
