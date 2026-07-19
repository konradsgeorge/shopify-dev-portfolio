/**
 * Selected Work section — homepage project showcase.
 *
 * Per AGENTS.md §5, this is section 2 in the homepage order.
 * Uses bg-alt background (Hero above uses bg, so alternation is correct).
 *
 * Data source: lib/projects.ts — the same array the case study pages read from.
 * Adding a new case study to projects.ts automatically adds a card here.
 */

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="bg-bg-alt py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* ---- Section header ---- */}
        <div className="mb-12 max-w-[640px] sm:mb-16">
          <h2
            id="selected-work-heading"
            className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
          >
            Selected work
          </h2>
          {/* PLACEHOLDER intro line — replace with final copy */}
          <p className="mt-4 text-[length:var(--font-size-base)] leading-relaxed text-text-body">
            Recent Shopify projects where I handled the frontend implementation
            from approved designs through to production.
          </p>
        </div>

        {/* ---- Project grid ---- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
