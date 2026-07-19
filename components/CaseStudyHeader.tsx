/**
 * CaseStudyHeader — Section 1 of the case study page template.
 *
 * AGENTS.md §7: build once, reuse everywhere.
 * Renders: project title (H1), one-line role summary, tech tags, optional live link.
 * Tag style matches ProjectCard exactly — same class string, same component pattern.
 *
 * No deliberate exceptions to AGENTS.md.
 */

interface CaseStudyHeaderProps {
  /** Project display name — rendered as H1 */
  title: string;
  /** Teaser shown in full below the title — same text shown clamped on the ProjectCard */
  teaser: string;
  /** Technology tags — same style as ProjectCard tags */
  tags: string[];
  /**
   * Optional URL of the live site.
   * PLACEHOLDER: omit until a real URL is confirmed.
   */
  liveUrl?: string;
}

export default function CaseStudyHeader({
  title,
  teaser,
  tags,
  liveUrl,
}: CaseStudyHeaderProps) {
  return (
    <div className="border-b border-line bg-bg py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* Back link — lets keyboard and screen reader users orient quickly */}
        <a
          href="/projects"
          className="mb-10 inline-flex items-center gap-1.5 text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary focus-visible:outline-accent"
        >
          <span aria-hidden="true">←</span>
          All projects
        </a>

        {/* ---- Title (H1) ---- */}
        <h1 className="max-w-[800px] text-[length:var(--font-size-2xl)] font-bold leading-[1.1] tracking-tight text-text-primary sm:text-[length:var(--font-size-3xl)]">
          {title}
        </h1>

        {/* ---- Description ---- */}
        <p className="mt-6 max-w-[640px] text-[length:var(--font-size-base)] leading-relaxed text-text-body sm:text-[length:var(--font-size-md)]">
          {teaser}
        </p>

        {/* ---- Tags — identical class string to ProjectCard ---- */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-sm)] border border-line px-2.5 py-1 text-[length:var(--font-size-xs)] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ---- Optional live site link ---- */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 text-[length:var(--font-size-sm)] font-medium text-accent transition-colors hover:text-accent/80 focus-visible:outline-accent"
          >
            View live site
            <span aria-hidden="true" className="text-xs">
              ↗
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
