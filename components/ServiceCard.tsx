/**
 * ServiceCard — reusable block for displaying a single service offering.
 *
 * Per AGENTS.md §7: build once, reuse everywhere.
 * No icons unless using a minimal monochrome set (§3 allows hairline borders,
 * minimal motion, no colorful elements). We skip icons here for now.
 */

interface ServiceCardProps {
  /** Short service title */
  title: string;
  /** 1–2 sentence description of what's actually delivered */
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-line pt-6 sm:pt-8">
      <h3 className="text-[length:var(--font-size-md)] font-semibold leading-snug text-text-primary">
        {title}
      </h3>
      <p className="text-[length:var(--font-size-sm)] leading-relaxed text-text-body sm:text-[length:var(--font-size-base)]">
        {description}
      </p>
    </div>
  );
}
