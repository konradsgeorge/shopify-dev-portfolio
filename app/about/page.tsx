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
import Image from "next/image";
import BioParagraphs from "@/components/BioParagraphs";

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
            {/* ---- Left: photo ---- */}
            <div className="overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src="/george-headshot.jpg"
                alt="George Allen Donayre, Shopify frontend developer"
                width={240}
                height={300}
                className="aspect-[4/5] w-full max-w-[240px] object-cover object-top"
                priority
              />
            </div>

            {/* ---- Right: bio copy ---- */}
            <div className="max-w-[640px]">
              <h2 id="about-bio-heading" className="sr-only">
                Background
              </h2>

              {/* Expandable bio — first 2 paragraphs shown, rest behind toggle */}
              <BioParagraphs />

              {/* ---- CTA links ---- */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-8 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent"
                >
                  Get in touch
                </a>
                <a
                  href="https://drive.google.com/file/d/1X7geV7pYPvKKN5N0ApA5ZmYiYoRCjsmj/view?usp=sharing"
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
        aria-labelledby="working-style-heading"
        className="border-t border-line bg-bg-alt py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] md:gap-16">
            {/* Left label — same pattern as LabeledSection on case study pages */}
            <div className="md:pt-1">
              <span
                id="working-style-heading"
                className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted"
              >
                Working style
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
                See the step-by-step process on the homepage
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
