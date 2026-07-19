"use client";

/**
 * Contact section — homepage teaser, links through to the full /contact page.
 *
 * Per AGENTS.md §5, this is section 9 (final) in the homepage order.
 * Background: bg-alt (FAQ above uses bg, alternation holds).
 *
 * This section is now a short teaser only — the full form lives at /contact.
 * Keeping a mini form here (name + email + message) is reasonable for a
 * single-page portfolio, but given the standalone /contact page now exists,
 * we direct visitors there rather than duplicating the form.
 *
 * PLACEHOLDER intro copy — replace with final version.
 */

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-bg-alt py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="max-w-[560px]">
          {/* ---- Section header ---- */}
          <h2
            id="contact-heading"
            className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
          >
            Get in touch
          </h2>

          {/* PLACEHOLDER intro — replace with final copy */}
          <p className="mt-4 text-[length:var(--font-size-base)] leading-relaxed text-text-body">
            Have a Shopify project in mind? I&apos;ll follow up with scope and
            timeline.
          </p>

          {/* ---- CTA ---- */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            {/* Primary CTA — same button style as Hero and CaseStudyCTA */}
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-8 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent"
            >
              Open contact page
            </a>

            {/* Direct email — secondary, plain text */}
            {/* PLACEHOLDER: replace mailto address with real email */}
            <a
              href="mailto:georgedonayre.work@gmail.com"
              className="inline-flex items-center text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary focus-visible:outline-accent"
            >
              georgedonayre.work@gmail.com {/* PLACEHOLDER */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
