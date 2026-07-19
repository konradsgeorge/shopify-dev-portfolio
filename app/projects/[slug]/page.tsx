/**
 * app/projects/[slug]/page.tsx — Case Study page template.
 *
 * Dynamic route: /projects/[slug]
 * Data source: lib/projects.ts — add a new entry there to add a new case study.
 *
 * Sections in order (per AGENTS.md §6):
 *   1. CaseStudyHeader   — title, tags, role summary, optional live link
 *   2. LabeledSection    — Problem (from Overview)
 *   3. LabeledSection    — Goal (from Overview)
 *   4. LabeledSection    — My Role + Technology
 *   5. LabeledSection    — Implementation (multi-paragraph + optional screenshot/code)
 *   6. ChallengeSolution — paired challenge / solution
 *   7. LabeledSection    — Result
 *   8. LabeledSection    — Lessons learned
 *   9. CaseStudyCTA      — closing CTA with contact link and optional next project
 *
 * Background alternation:
 *   Header  → bg (white)
 *   Problem → bg-alt
 *   Goal    → bg
 *   Role    → bg-alt
 *   Impl    → bg
 *   C+S     → bg-alt  (ChallengeSolution hardcodes this — intentionally quiet section)
 *   Result  → bg
 *   Lessons → bg-alt
 *   CTA     → bg (border-t instead of bg change to close the page)
 *
 * Accessibility:
 *   - One H1 per page (CaseStudyHeader)
 *   - Each LabeledSection is a <section> with aria-label
 *   - All interactive elements have visible focus states (globals.css *:focus-visible)
 *   - Back link and live site link are keyboard reachable
 *
 * Params: uses async params per Next.js App Router convention for dynamic segments.
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getProjectBySlug, projects } from "@/lib/projects";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import LabeledSection from "@/components/LabeledSection";
import ChallengeSolution from "@/components/ChallengeSolution";
import CaseStudyCTA from "@/components/CaseStudyCTA";

// ---------------------------------------------------------------------------
// Static params — prerender all known slugs at build time
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// ---------------------------------------------------------------------------
// Metadata — per-project title and description for SEO
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found — George Allen Donayre",
    };
  }

  return {
    title: `${project.title} — George Allen Donayre`,
    description: `${project.teaser} A Shopify frontend case study by George Allen Donayre.`,
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Unknown slugs render a 404 — no custom error page needed for now
  if (!project) notFound();

  return (
    <main>
      {/* 1. Header */}
      <CaseStudyHeader
        title={project.title}
        teaser={project.teaser}
        tags={project.tags}
        liveUrl={project.liveUrl}
      />

      {/* 2. Problem */}
      <LabeledSection
        label="Problem"
        body={project.problem}
        background="bg-alt"
      />

      {/* 3. Goal */}
      <LabeledSection label="Goal" body={project.goal} background="bg" />

      {/* 4. My role + technology */}
      {/*
       * Role and technology are combined into one section intentionally.
       * Keeping them together keeps the page compact and avoids a separate
       * "Tech stack" section that would be redundant given the tags in the header.
       */}
      <LabeledSection
        label="My role"
        body={[
          project.myRole,
          `Technologies: ${project.technologies.join(", ")}.`,
        ]}
        background="bg-alt"
      />

      {/* 5. Implementation */}
      <LabeledSection
        label="Implementation"
        body={project.implementation}
        screenshotAlt={project.screenshotAlt}
        codeSnippet={project.codeSnippet}
        background="bg"
      />

      {/* 6. Challenge + Solution */}
      <ChallengeSolution
        challenge={project.challenge}
        solution={project.solution}
      />

      {/* 7. Result */}
      <LabeledSection label="Result" body={project.result} background="bg" />

      {/* 8. Lessons learned */}
      <LabeledSection
        label="Lessons learned"
        body={project.lessonsLearned}
        background="bg-alt"
      />

      {/* 9. Closing CTA */}
      <CaseStudyCTA
        ctaLine={project.ctaLine}
        nextProjectSlug={project.nextProjectSlug}
        nextProjectTitle={project.nextProjectTitle}
      />
    </main>
  );
}
