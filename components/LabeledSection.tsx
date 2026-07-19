/**
 * LabeledSection — reusable labeled text block for the case study page.
 *
 * AGENTS.md §7: build once, reuse everywhere.
 * Used for: Overview (Problem + Goal), Implementation, Result, Lessons learned.
 * ChallengeSolution extends this same visual pattern (see ChallengeSolution.tsx).
 *
 * Layout:
 *   - Left column: a small uppercase label (e.g. "Problem", "Implementation")
 *   - Right column: heading (optional) + body paragraphs
 *   - Optional screenshot placeholder block
 *   - Optional code snippet block
 *
 * All tokens come from globals.css @theme (AGENTS.md §3).
 * No new colors, fonts, or border radii introduced.
 */

import Image from "next/image";

interface CodeSnippetProps {
  /** Short label shown above the code block */
  label: string;
  /** Raw code string */
  code: string;
}

interface LabeledSectionProps {
  /**
   * Small uppercase section label rendered in the left column.
   * Examples: "Problem", "Goal", "Implementation", "Result"
   */
  label: string;
  /**
   * Optional visible heading above the body text.
   * Omit for sections where the label already conveys the heading (e.g. "Result").
   * When rendered, uses h2 sizing — section landmark heading.
   */
  heading?: string;
  /**
   * Body text. Pass an array of strings for multi-paragraph blocks.
   * Each string renders as its own <p> element.
   */
  body: string | string[];
  /**
   * Optional screenshot placeholder.
   * Value is the alt text for the image — used to describe the screenshot.
   */
  screenshotSrc?: string;
  screenshotAlt?: string;
  /**
   * Optional inline code snippet block.
   */
  codeSnippet?: CodeSnippetProps;
  /** Background variant. Defaults to "bg" (white). */
  background?: "bg" | "bg-alt";
}

export default function LabeledSection({
  label,
  heading,
  body,
  screenshotSrc,
  screenshotAlt,
  codeSnippet,
  background = "bg",
}: LabeledSectionProps) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section
      aria-label={label}
      className={`${
        background === "bg-alt" ? "bg-bg-alt" : "bg-bg"
      } py-16 sm:py-20`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          {/* ---- Left column: label ---- */}
          <div className="md:pt-1">
            <span className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
              {label}
            </span>
          </div>

          {/* ---- Right column: content ---- */}
          <div className="max-w-[640px]">
            {heading && (
              <h2 className="mb-6 text-[length:var(--font-size-lg)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-xl)]">
                {heading}
              </h2>
            )}

            {/* Body paragraphs */}
            <div className="flex flex-col gap-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[length:var(--font-size-base)] leading-relaxed text-text-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* ---- Optional screenshot ---- */}
            {(screenshotSrc || screenshotAlt) && (
              <div className="mt-10">
                {screenshotSrc ? (
                  <Image
                    src={`/screenshots/${screenshotSrc}`}
                    alt={screenshotAlt ?? ""}
                    width={1280}
                    height={800}
                    className="w-full rounded-[var(--radius-lg)] border border-line"
                  />
                ) : (
                  // Fallback placeholder when only alt text is set
                  <div
                    role="img"
                    aria-label={screenshotAlt}
                    className="flex aspect-[16/10] w-full items-center justify-center rounded-[var(--radius-lg)] border border-line bg-bg-alt"
                  >
                    <span className="text-[length:var(--font-size-xs)] text-text-muted">
                      Screenshot placeholder — replace with real image
                    </span>
                  </div>
                )}
                {screenshotAlt && (
                  <p className="mt-2 text-[length:var(--font-size-xs)] text-text-muted">
                    {screenshotAlt}
                  </p>
                )}
              </div>
            )}

            {/* ---- Optional code snippet ---- */}
            {codeSnippet && (
              <div className="mt-10">
                <p className="mb-2 text-[length:var(--font-size-xs)] font-semibold text-text-muted">
                  {codeSnippet.label}
                </p>
                {/*
                 * Code block styling: monospace, muted bg, hairline border.
                 * No syntax highlighting library added — keeps dependencies
                 * minimal per AGENTS.md §9 (Core Web Vitals matter here).
                 * If syntax highlighting is needed later, add a zero-runtime
                 * library like shiki with the "light-plus" theme.
                 */}
                <pre className="overflow-x-auto rounded-[var(--radius-lg)] border border-line bg-bg-alt p-6 text-[length:var(--font-size-xs)] leading-relaxed text-text-body">
                  <code>{codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
