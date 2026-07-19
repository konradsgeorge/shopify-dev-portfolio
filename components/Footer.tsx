/**
 * Footer — global site footer.
 *
 * AGENTS.md §7: Footer is a reusable component built once and wired into
 * the root layout.
 *
 * Design decisions:
 * - Simple and quiet: name, role line, copyright, 3 utility links.
 * - Nav links are NOT repeated here. The site is small enough that
 *   echoing them would feel redundant (§ prompt guidance).
 * - Background: bg-alt — provides a subtle visual close without adding
 *   a competing section. Does not break the bg/bg-alt alternation rule
 *   because it is a layout element (outside section flow), not a section.
 *
 * PLACEHOLDER URLs — replace before launch:
 *   GitHub:  https://github.com/georgedonayre
 *   Resume:  https://drive.google.com/file/d/1vjzswF3vNgTlbT34Yq5NPku2zD9W25lW/view?usp=sharing
 */

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt" aria-label="Site footer">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* ---- Left: identity ---- */}
          <div>
            <p className="text-[length:var(--font-size-sm)] font-semibold text-text-primary">
              George Allen Donayre
            </p>
            <p className="mt-1 text-[length:var(--font-size-sm)] text-text-muted">
              Shopify Frontend Developer
            </p>
          </div>

          {/* ---- Right: links + copyright ---- */}
          <div className="flex flex-col gap-4 sm:items-end">
            {/* Utility links */}
            <ul
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
              role="list"
            >
              <li>
                <a
                  href="https://github.com/georgedonayre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[length:var(--font-size-sm)] text-text-muted transition-colors hover:text-text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1vjzswF3vNgTlbT34Yq5NPku2zD9W25lW/view?usp=sharing"
                  className="text-[length:var(--font-size-sm)] text-text-muted transition-colors hover:text-text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[length:var(--font-size-sm)] text-text-muted transition-colors hover:text-text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Copyright */}
            <p className="text-[length:var(--font-size-xs)] text-text-muted">
              &copy; {CURRENT_YEAR} George Allen Donayre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
