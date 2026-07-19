/**
 * ProcessStep — reusable timeline step for the Process section.
 *
 * Per AGENTS.md §7: build once, reuse everywhere.
 * Renders a numbered step with a title and short description.
 * No decorative motion — only structure and typography.
 */

interface ProcessStepProps {
  /** Step number, displayed as a label */
  step: number;
  /** Short title for this phase */
  title: string;
  /** One-sentence description of what happens in this phase */
  description: string;
}

export default function ProcessStep({
  step,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Step number — muted, small, uppercase label */}
      <span className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
        Step {step}
      </span>

      <h3 className="text-[length:var(--font-size-md)] font-semibold leading-snug text-text-primary">
        {title}
      </h3>

      <p className="text-[length:var(--font-size-sm)] leading-relaxed text-text-body sm:text-[length:var(--font-size-base)]">
        {description}
      </p>
    </div>
  );
}
