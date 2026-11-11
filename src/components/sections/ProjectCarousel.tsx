"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ProjectCarousel({ children }: { children: ReactNode[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function update() {
      if (!track) return;
      const first = track.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step = first.getBoundingClientRect().width + 24;
      setLastPosition(
        Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / step)),
      );
      setPosition(Math.round(track.scrollLeft / step));
    }

    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!track || !(card instanceof HTMLElement)) return;
    track.scrollTo({
      left: card.offsetLeft,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  const controlClass =
    "border-navy-border text-cream hover:border-coral hover:text-coral inline-flex size-11 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div
      aria-label="Portfolio projects"
      aria-roledescription="carousel"
      role="region"
      className="mt-8"
    >
      <ul
        id="project-carousel"
        ref={trackRef}
        aria-label="Project cards"
        tabIndex={0}
        className="rounded-card relative flex snap-x snap-mandatory [scrollbar-width:thin] items-stretch gap-6 overflow-x-auto pb-4"
      >
        {children.map((child, index) => (
          <li
            key={index}
            className="flex min-w-0 shrink-0 basis-full snap-start md:basis-[calc((100%-1.5rem)/2)] xl:basis-[calc((100%-3rem)/3)]"
          >
            {child}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-center gap-5">
        <button
          aria-label="Previous projects"
          aria-controls="project-carousel"
          className={controlClass}
          disabled={position === 0}
          onClick={() => goTo(position - 1)}
          type="button"
        >
          <ArrowLeft aria-hidden="true" size={20} />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: lastPosition + 1 }, (_, index) => (
            <button
              key={index}
              aria-label={`Show projects from card ${index + 1}`}
              aria-current={position === index ? "true" : undefined}
              aria-controls="project-carousel"
              onClick={() => goTo(index)}
              className="flex size-8 items-center justify-center rounded-full"
              type="button"
            >
              <span
                className={`size-2.5 rounded-full ${position === index ? "bg-coral" : "bg-cream-muted"}`}
              />
            </button>
          ))}
        </div>
        <button
          aria-label="Next projects"
          aria-controls="project-carousel"
          className={controlClass}
          disabled={position === lastPosition}
          onClick={() => goTo(position + 1)}
          type="button"
        >
          <ArrowRight aria-hidden="true" size={20} />
        </button>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Project position {position + 1} of {lastPosition + 1}
      </p>
    </div>
  );
}
