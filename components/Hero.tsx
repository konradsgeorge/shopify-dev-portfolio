/**
 * Hero section — homepage above-the-fold.
 *
 * Design tokens come from globals.css @theme (AGENTS.md §3).
 * Copy follows AGENTS.md §4: no em dashes, no banned words, engineer tone.
 */

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[calc(100vh-64px)] items-center bg-bg"
    >
      {/* Container — 1200px max, centered, 8px-grid padding */}
      <div className="mx-auto w-full max-w-[1200px] px-6 py-24 sm:px-8 md:py-32">
        {/* ---- Copy block ---- */}
        <div className="max-w-[720px]">
          {/* PLACEHOLDER headline — replace with final client-approved copy */}
          <h1
            id="hero-heading"
            className="text-[length:var(--font-size-2xl)] font-bold leading-[1.1] tracking-tight text-text-primary sm:text-[length:var(--font-size-3xl)]"
          >
            I build custom Shopify storefronts that clients can actually manage.
          </h1>

          {/* PLACEHOLDER subheadline — replace with final copy */}
          <p className="mt-6 max-w-[560px] text-[length:var(--font-size-md)] leading-relaxed text-text-body sm:mt-8 sm:text-[length:var(--font-size-lg)]">
            Liquid, sections, metafields, and frontend code that works the way
            your store needs it to.
          </p>

          {/* ---- Actions ---- */}
          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-6">
            {/* Primary CTA — accent color, reserved for this button only */}
            <a
              href="#selected-work"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-8 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent"
            >
              View selected work
            </a>

            {/* Secondary action — text link, no second loud button */}
            <a
              href="https://drive.google.com/file/d/1X7geV7pYPvKKN5N0ApA5ZmYiYoRCjsmj/view?usp=sharing"
              className="inline-flex items-center gap-1.5 text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
