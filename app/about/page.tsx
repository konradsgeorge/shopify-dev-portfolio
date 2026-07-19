/**
 * /about — standalone About page.
 *
 * The homepage About section (components/About.tsx) shows a short teaser
 * and links here for the full version. This page goes deeper on George's
 * background, how he works, and what kind of projects he takes on.
 *
 * Copy rules (AGENTS.md §4): no em dashes, no banned words, first-person,
 * engineer tone, short paragraphs, no exaggeration, exact contribution stated.
 * Every sentence reinforces "Shopify Frontend Developer" positioning (§1).
 *
 * Layout: text-focused, single column body (max 640px), same spacing as all
 * other sections. No new visual language introduced.
 *
 * All bio copy is PLACEHOLDER — replace with real copy from George before launch.
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — George Allen Donayre",
  description:
    "George Allen Donayre is a Shopify Frontend Developer who builds custom storefronts using Liquid, custom sections, metafields, and clean JavaScript.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ================================================================
          Page header
          ================================================================ */}
      <div className="border-b border-line bg-bg py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
          {/* PLACEHOLDER headline — replace with final copy */}
          <h1 className="max-w-[720px] text-[length:var(--font-size-2xl)] font-bold leading-[1.1] tracking-tight text-text-primary sm:text-[length:var(--font-size-3xl)]">
            About me
          </h1>
          {/* PLACEHOLDER intro line — replace with final copy */}
          <p className="mt-4 max-w-[560px] text-[length:var(--font-size-md)] leading-relaxed text-text-muted sm:text-[length:var(--font-size-lg)]">
            Shopify Frontend Developer based in the Philippines.
          </p>
        </div>
      </div>

      {/* ================================================================
          Bio — main body
          ================================================================ */}
      <section
        aria-labelledby="about-bio-heading"
        className="bg-bg py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* ---- Left: photo slot ---- */}
            <div>
              {/*
               * PLACEHOLDER photo slot.
               * Replace this div with a real headshot when available:
               *
               * import Image from "next/image";
               * <div className="overflow-hidden rounded-[var(--radius-lg)]">
               *   <Image
               *     src="/george.jpg"
               *     alt="George Allen Donayre"
               *     width={240}
               *     height={300}
               *     className="h-full w-full object-cover"
               *     priority
               *   />
               * </div>
               *
               * alt text should describe the image honestly, not keyword-stuff.
               */}
              <div
                role="img"
                aria-label="Photo placeholder — replace with real headshot"
                className="aspect-[4/5] w-full max-w-[240px] rounded-[var(--radius-lg)] bg-bg-alt"
              />
            </div>

            {/* ---- Right: bio copy ---- */}
            <div className="max-w-[640px]">
              <h2 id="about-bio-heading" className="sr-only">
                Background
              </h2>

              {/* PLACEHOLDER paragraph 1 — background */}
              <p className="text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
                {/* PLACEHOLDER: replace with George's real background paragraph */}
                I&apos;m George Allen Donayre. I build Shopify storefronts using
                Liquid, custom sections, metafields, and JavaScript. Most of my
                work starts with a Figma file and ends with a theme that
                merchants can manage without touching code.
              </p>

              {/* PLACEHOLDER paragraph 2 — how George works */}
              <p className="mt-6 text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
                {/* PLACEHOLDER: replace with real copy describing George's working style */}
                I come in at the implementation stage. I read the design files,
                ask the questions that surface edge cases before they become
                revisions, and write code that makes sense to the next developer
                who opens it. I don&apos;t use page builders or drag-and-drop
                editors for production work.
              </p>

              {/* PLACEHOLDER paragraph 3 — specialization */}
              <p className="mt-6 text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
                {/* PLACEHOLDER: replace with real specialization copy */}
                My focus is Shopify-specific: theme architecture, custom section
                schemas, metafield and metaobject integration, and the
                JavaScript that keeps product pages, filters, and cart
                interactions running correctly. I don&apos;t do Shopify admin
                operations, marketing, or store setup work.
              </p>

              {/* PLACEHOLDER paragraph 4 — experience level */}
              <p className="mt-6 text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
                {/* PLACEHOLDER: replace with honest, specific experience statement */}
                I&apos;ve worked on projects ranging from isolated section
                builds to full Dawn-based theme customizations. I&apos;ve
                collaborated with design agencies that hand off Figma files and
                need them implemented exactly, and with store owners who need a
                specific feature added without disrupting what already works.
              </p>

              {/* PLACEHOLDER paragraph 5 — personal note, optional */}
              <p className="mt-6 text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
                {/* PLACEHOLDER: replace or remove this paragraph — keep only if it adds
                    something real about George that helps an agency or founder trust him */}
                I care about accessible markup and fast page loads not because
                they check a box, but because they affect whether a store
                actually converts. Clean, readable code matters on this kind of
                site because someone will maintain it after I hand it off.
              </p>

              {/* ---- CTA links ---- */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-8 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent"
                >
                  Get in touch
                </a>
                <a
                  href="https://drive.google.com/file/d/1vjzswF3vNgTlbT34Yq5NPku2zD9W25lW/view?usp=sharing"
                  className="inline-flex items-center gap-1.5 text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary focus-visible:outline-accent"
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

      {/* ================================================================
          How I work — compact sub-section
          Links to the homepage Process section for the full breakdown.
          ================================================================ */}
      <section
        aria-labelledby="how-i-work-heading"
        className="border-t border-line bg-bg-alt py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] md:gap-16">
            {/* Left label — same pattern as LabeledSection on case study pages */}
            <div className="md:pt-1">
              <span className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
                How I work
              </span>
            </div>

            {/* Right content */}
            <div className="max-w-[640px]">
              {/* PLACEHOLDER — replace with real working style points */}
              <ul className="flex flex-col gap-5" role="list">
                <li className="flex flex-col gap-1">
                  <span className="text-[length:var(--font-size-sm)] font-semibold text-text-primary">
                    Async-first
                  </span>
                  <p className="text-[length:var(--font-size-sm)] leading-relaxed text-text-body">
                    {/* PLACEHOLDER */}I work across time zones and communicate
                    in writing. You get regular updates, not silence until a
                    delivery. If something changes scope or timeline, I flag it
                    early.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[length:var(--font-size-sm)] font-semibold text-text-primary">
                    Development theme first
                  </span>
                  <p className="text-[length:var(--font-size-sm)] leading-relaxed text-text-body">
                    {/* PLACEHOLDER */}
                    Work happens in a development theme so nothing touches the
                    live store until you&apos;ve reviewed it. I publish only
                    after a QA pass and your sign-off.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[length:var(--font-size-sm)] font-semibold text-text-primary">
                    Documented handoff
                  </span>
                  <p className="text-[length:var(--font-size-sm)] leading-relaxed text-text-body">
                    {/* PLACEHOLDER */}
                    At handoff I note anything the team needs to know: how to
                    use the theme editor controls I built, what metafields drive
                    what content, and where to look if something needs
                    adjusting.
                  </p>
                </li>
              </ul>

              <a
                href="/#process"
                className="mt-8 inline-flex items-center gap-1.5 text-[length:var(--font-size-sm)] font-medium text-accent transition-colors hover:text-accent/80 focus-visible:outline-accent"
              >
                See the full process breakdown
                <span aria-hidden="true" className="text-xs">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
