/**
 * About section — homepage teaser, links through to the full /about page.
 *
 * Per AGENTS.md §5, this is section 6 in the homepage order.
 * Background: bg-alt (Technologies above uses bg, alternation holds).
 * Copy rules (§4): no em dashes, no banned words, engineer tone.
 *
 * This section intentionally shows only a short intro. The full bio,
 * photo slot, and "How I work" breakdown live at /about.
 *
 * All copy is PLACEHOLDER — replace with real copy from George.
 */

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-bg-alt py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* ---- Left column: heading ---- */}
          <div>
            <h2
              id="about-heading"
              className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
            >
              About
            </h2>
          </div>

          {/* ---- Right column: teaser copy + link to full page ---- */}
          <div className="max-w-[640px]">
            {/* PLACEHOLDER — keep this shorter than the full /about page */}
            <p className="text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
              I&apos;m George Allen Donayre, a frontend developer focused on
              Shopify. I take approved designs and turn them into
              production-ready storefronts using Liquid, custom sections,
              metafields, and JavaScript.
            </p>

            {/* PLACEHOLDER paragraph 2 */}
            <p className="mt-6 text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
              I focus on clean, maintainable code that other developers can pick
              up without a walkthrough. My work is Shopify-specific: no page
              builders, no drag-and-drop editors for production themes.
            </p>

            {/* ---- Links ---- */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="/about"
                className="text-[length:var(--font-size-sm)] font-medium text-accent transition-colors hover:text-accent/80 focus-visible:outline-accent"
              >
                Read more about me →
              </a>
              <a
                href="https://drive.google.com/file/d/1vjzswF3vNgTlbT34Yq5NPku2zD9W25lW/view?usp=sharing"
                className="text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary focus-visible:outline-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
