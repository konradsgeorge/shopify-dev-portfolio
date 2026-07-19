/**
 * Process section — how an engagement works, step by step.
 *
 * Per AGENTS.md §5, this is section 4 in the homepage order.
 * Background: bg-alt — Services above uses bg, alternation holds.
 * Copy rules (§4): engineer tone, reflects real async/remote workflow.
 *
 * All step descriptions are PLACEHOLDER — replace with George's real process.
 */

import ProcessStep from "@/components/ProcessStep";

/** PLACEHOLDER process steps — replace descriptions with real workflow copy */
const steps = [
  {
    title: "Brief and scope",
    description:
      "You share the design files, requirements, and any existing theme context. I review everything and confirm scope, timeline, and deliverables before any code is written.",
  },
  {
    title: "Build",
    description:
      "I build in a development theme so nothing touches your live store. You get daily or every-other-day progress updates, not silence until a big reveal.",
  },
  {
    title: "Review",
    description:
      "You review the work against the original design. I address feedback in focused rounds so revisions stay organized and nothing gets lost.",
  },
  {
    title: "QA and handoff",
    description:
      "I test across browsers and devices, check accessibility basics, and confirm everything works in the theme editor. Then I publish to your live theme and document anything the team needs to know.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-bg-alt py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* ---- Section header ---- */}
        <div className="mb-12 max-w-[640px] sm:mb-16">
          <h2
            id="process-heading"
            className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
          >
            How I work
          </h2>
          {/* PLACEHOLDER intro — replace with final copy */}
          <p className="mt-4 text-[length:var(--font-size-base)] leading-relaxed text-text-body">
            A clear process so you always know where things stand, even across
            time zones.
          </p>
        </div>

        {/* ---- Steps grid — 4 columns on desktop, stacks on mobile ---- */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              step={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
