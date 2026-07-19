/**
 * ProjectCard — reusable card for displaying a project in the Selected Work section.
 *
 * Per AGENTS.md §7: build once, reuse everywhere.
 * Tokens from globals.css @theme (AGENTS.md §3).
 * Copy rules: AGENTS.md §4 — no em dashes, no banned words, engineer tone.
 *
 * Accepts a single `project` prop typed as a pick of CaseStudy so both the
 * card and the case study page read the same shape from the same data file.
 */

import type { CaseStudy } from "@/lib/projects";

interface ProjectCardProps {
  /** Subset of CaseStudy fields needed to render the card. */
  project: Pick<CaseStudy, "slug" | "title" | "teaser" | "tags">;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, teaser, tags } = project;
  const href = `/projects/${slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line">
      {/* ---- Image placeholder — replace with real screenshot ---- */}
      <div className="aspect-[16/10] w-full bg-bg-alt" aria-hidden="true">
        {/* Replace this div with an optimized <Image> of the actual project screenshot */}
      </div>

      {/* ---- Card body ---- */}
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
        <h3 className="text-[length:var(--font-size-md)] font-semibold leading-snug text-text-primary sm:text-[length:var(--font-size-lg)]">
          {title}
        </h3>

        {/*
         * 2-line clamp via -webkit-line-clamp (supported in all modern browsers).
         * max-height fallback: 2 lines * 1.6 line-height * 1.125rem (--font-size-base).
         * overflow: hidden ensures the fallback also clips the text.
         */}
        <p
          className="text-[length:var(--font-size-sm)] text-text-body sm:text-[length:var(--font-size-base)]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            maxHeight: "calc(2 * 1.6 * 1.125rem)",
            lineHeight: 1.6,
          }}
        >
          {teaser}
        </p>

        {/* ---- Tech tags ---- */}
        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-sm)] border border-line px-2.5 py-1 text-[length:var(--font-size-xs)] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ---- Link — accent color reserved for links per §3 ---- */}
        <a
          href={href}
          className="mt-auto inline-flex items-center gap-1 pt-4 text-[length:var(--font-size-sm)] font-medium text-accent transition-colors hover:text-accent/80"
        >
          Read case study
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}
