"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    function updateActiveSection() {
      frame = 0;
      const sections = siteConfig.navigation.flatMap(({ href }) => {
        const section = document.getElementById(href.slice(1));
        return section ? [{ href, section }] : [];
      });
      let active = sections[0]?.href ?? "#home";
      for (const { href, section } of sections) {
        if (section.getBoundingClientRect().top <= 100) active = href;
      }
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
      ) {
        active = sections.at(-1)?.href ?? active;
      }
      setActiveSection(active);
    }
    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    }
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);
    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className="border-navy-border/50 bg-navy/95 sticky top-0 z-30 border-b"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          closeMenu();
          menuButtonRef.current?.focus();
        }
      }}
    >
      <Container className="flex min-h-16 items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          aria-label={`${siteConfig.person.name}, home`}
          className="inline-flex min-w-0 items-center gap-3"
          href="#home"
          onClick={closeMenu}
        >
          <span className="text-cream text-xl font-bold tracking-tight">
            SA<span className="text-coral">.</span>
          </span>
          <span className="text-cream hidden truncate text-sm font-medium sm:inline">
            {siteConfig.person.name}
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {siteConfig.navigation.map((item) => {
            const isActive = item.href === activeSection;

            return (
              <a
                key={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`hover:text-cream relative py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cream after:bg-coral after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:rounded-full"
                    : "text-cream-muted"
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 lg:justify-self-end">
          <a
            className="border-coral bg-coral text-navy focus-visible:outline-coral inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-3.5 text-sm font-semibold transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-4"
            download
            href={siteConfig.cvPath}
          >
            <Download aria-hidden="true" size={16} />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sr-only sm:hidden">Download CV</span>
          </a>

          <button
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="border-navy-border text-cream hover:bg-navy-secondary focus-visible:outline-coral inline-flex size-10 items-center justify-center rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`border-navy-border bg-navy-secondary shadow-navy/30 absolute inset-x-0 top-full border-b px-5 py-3 shadow-lg lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col">
          {siteConfig.navigation.map((item) => {
            const isActive = item.href === activeSection;

            return (
              <li key={item.href}>
                <a
                  aria-current={isActive ? "location" : undefined}
                  className={`hover:bg-navy-card hover:text-cream block rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-coral underline decoration-2 underline-offset-8"
                      : "text-cream-muted"
                  }`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
