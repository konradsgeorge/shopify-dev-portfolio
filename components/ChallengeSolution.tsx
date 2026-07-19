/**
 * ChallengeSolution — Section 5 of the case study page template.
 *
 * AGENTS.md §7: build once, reuse everywhere.
 * Paired block: one obstacle, one fix — visually linked, not two disconnected sections.
 *
 * Uses the same two-column (label + content) layout as LabeledSection, extended
 * with a divider between the two halves. Intentionally NOT a separate visual
 * design — the label column pattern is identical to LabeledSection so the
 * whole page reads as one system.
 *
 * No deliberate exceptions to AGENTS.md.
 */

interface ChallengeSolutionProps {
  /** The real obstacle encountered — one to three sentences */
  challenge: string;
  /** The specific fix — not vague, matches engineer tone of AGENTS.md §4 */
  solution: string;
}

export default function ChallengeSolution({
  challenge,
  solution,
}: ChallengeSolutionProps) {
  return (
    <section
      aria-label="Challenge and solution"
      className="bg-bg-alt py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          {/* ---- Left column: label (same pattern as LabeledSection) ---- */}
          <div className="md:pt-1">
            <span className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
              Challenge&nbsp;&amp;&nbsp;Solution
            </span>
          </div>

          {/* ---- Right column: paired blocks ---- */}
          <div className="max-w-[640px]">
            {/* Challenge */}
            <div>
              <h2 className="mb-3 text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
                The challenge
              </h2>
              <p className="text-[length:var(--font-size-base)] leading-relaxed text-text-body">
                {challenge}
              </p>
            </div>

            {/* Visual link between the two halves */}
            <div className="my-8 flex items-center gap-3" aria-hidden="true">
              <div className="h-px flex-1 bg-line" />
              <span className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
                How it was fixed
              </span>
              <div className="h-px flex-1 bg-line" />
            </div>

            {/* Solution */}
            <div>
              <h2 className="mb-3 text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
                The solution
              </h2>
              <p className="text-[length:var(--font-size-base)] leading-relaxed text-text-body">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
