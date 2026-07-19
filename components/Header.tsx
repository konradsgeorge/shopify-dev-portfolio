"use client";

/**
 * Header — global site navigation.
 *
 * AGENTS.md §7: Navigation (desktop and mobile) is a reusable component,
 * built once and wired into the root layout.
 *
 * Design decisions:
 * - Static (not sticky): fits the calm, minimal brand. The Hero section
 *   already accounts for the 64px header height via min-h-[calc(100vh-64px)].
 * - Flat link list only: no dropdowns, no mega nav (§ prompt).
 * - "Work" links to the standalone /projects page.
 *   "Services" is an anchor link to the homepage Services section.
 *   "About" links to the standalone /about page.
 *   "Contact" links to the standalone /contact page.
 * - Primary CTA uses accent color per §3 — same style as Hero/Contact buttons.
 * - Mobile nav: toggled via state, keyboard-accessible, proper ARIA on trigger.
 *
 * No deliberate exceptions to AGENTS.md.
 */

import { useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "/#selected-work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="border-b border-line bg-bg">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 sm:px-8">
        {/* ---- Wordmark ---- */}
        <a
          href="/"
          className="text-[length:var(--font-size-sm)] font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
          aria-label="George Allen Donayre — home"
        >
          George Donayre
        </a>

        {/* ---- Desktop nav ---- */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[length:var(--font-size-sm)] font-medium text-text-body transition-colors hover:text-text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---- Desktop CTA ---- */}
        <a
          href="/contact"
          className="hidden h-10 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent md:inline-flex"
        >
          Get in touch
        </a>

        {/* ---- Mobile menu toggle ---- */}
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-text-body transition-colors hover:bg-bg-alt focus-visible:outline-accent md:hidden"
        >
          {/* Hamburger icon — two lines that cross when open */}
          <span className="sr-only">{menuOpen ? "Close menu" : "Menu"}</span>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              /* × icon */
              <>
                <line
                  x1="4"
                  y1="4"
                  x2="16"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <line
                  x1="16"
                  y1="4"
                  x2="4"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </>
            ) : (
              /* ≡ icon */
              <>
                <line
                  x1="3"
                  y1="6"
                  x2="17"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <line
                  x1="3"
                  y1="10"
                  x2="17"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <line
                  x1="3"
                  y1="14"
                  x2="17"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ---- Mobile menu panel ---- */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="flex flex-col px-6 py-4 sm:px-8" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-3 text-[length:var(--font-size-base)] font-medium text-text-body transition-colors hover:text-text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
            {/* Mobile CTA */}
            <li className="pt-4">
              <a
                href="/contact"
                onClick={closeMenu}
                className="inline-flex h-11 w-full items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
