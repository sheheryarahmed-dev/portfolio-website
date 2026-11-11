import Image from "next/image";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import {
  CalendarDays,
  Cloud,
  Code2,
  Database,
  Layers3,
  PanelsTopLeft,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { NavyWave } from "@/components/ui/NavyWave";
import { siteConfig } from "@/data/site";

const technologyIcons: Record<string, LucideIcon> = {
  Python: Code2,
  Django: PanelsTopLeft,
  FastAPI: Zap,
  "Next.js": PanelsTopLeft,
  PostgreSQL: Database,
  Azure: Cloud,
};

const statisticIcons: Record<
  (typeof siteConfig.hero.statistics)[number]["icon"],
  LucideIcon
> = {
  calendar: CalendarDays,
  layers: Layers3,
  code: Code2,
};

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-12 sm:pb-16 xl:pb-20"
    >
      <Container className="grid items-center gap-8 pt-12 sm:pt-16 xl:grid-cols-[1.35fr_1fr] xl:items-stretch xl:gap-12 xl:pt-12">
        <div className="relative z-10 min-w-0 xl:pb-6">
          <div className="border-navy-border bg-navy-secondary/80 text-cream-muted mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm">
            <Sparkles aria-hidden="true" className="text-coral" size={15} />
            {siteConfig.hero.availability}
          </div>

          <h1
            id="hero-title"
            className="text-display text-cream max-w-[15ch] leading-[1.08] font-bold tracking-tight xl:max-w-none xl:text-[clamp(2.75rem,4.5vw,4rem)]"
          >
            <span className="xl:block">Software Engineer &amp;</span>{" "}
            <span className="xl:block">Backend Specialist</span>
          </h1>

          <p className="text-cream-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 xl:max-w-none xl:text-xl">
            {siteConfig.hero.description}
          </p>

          <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
            {siteConfig.hero.technologies.map((technology) => {
              const Icon = technologyIcons[technology];

              return (
                <li key={technology}>
                  <Chip className="border-navy-border/90 bg-navy-secondary/80 text-cream gap-1.5 px-2.5 py-1.5">
                    {Icon && (
                      <Icon
                        aria-hidden="true"
                        className="text-coral"
                        size={14}
                      />
                    )}
                    {technology}
                  </Chip>
                </li>
              );
            })}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="border-coral bg-coral text-navy focus-visible:outline-coral inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2"
              href="#projects"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </a>
            <a
              className="border-navy-border text-cream hover:border-cream-muted hover:bg-navy-secondary focus-visible:outline-coral inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border bg-transparent px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              href={siteConfig.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon size={17} />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <ul
            aria-label="Career statistics"
            className="border-navy-border/80 mt-8 grid max-w-xl grid-cols-3 border-t pt-5"
          >
            {siteConfig.hero.statistics.map((statistic) => {
              const Icon = statisticIcons[statistic.icon];

              return (
                <li
                  key={statistic.label}
                  className="[&:not(:first-child)]:border-navy-border/80 flex min-w-0 flex-col items-center gap-1.5 px-2 text-center first:pl-0 last:pr-0 sm:flex-row sm:gap-3 sm:px-4 sm:text-left [&:not(:first-child)]:border-l"
                >
                  <span className="bg-navy-card text-coral flex size-9 shrink-0 items-center justify-center rounded-full sm:size-10">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="text-cream block text-lg leading-tight font-bold sm:text-xl">
                      {statistic.value}
                    </span>
                    <span className="text-cream-muted mt-1 block text-[0.68rem] leading-tight sm:text-xs">
                      {statistic.label}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative isolate z-10 mx-auto aspect-[1280/1229] w-full max-w-[27rem] translate-y-4 sm:translate-y-6 xl:mx-0 xl:aspect-auto xl:max-w-none xl:translate-y-10">
          <svg
            aria-hidden="true"
            className="text-coral absolute top-0 left-0 z-0 h-full w-full xl:top-[12%] xl:h-[90%]"
            preserveAspectRatio="none"
            viewBox="0 0 540 560"
          >
            <path
              d="M440 20C516 0 550 39 530 122L435 517L170 543C69 536 7 487 24 402C43 307 140 252 218 192C302 122 345 45 440 20Z"
              fill="currentColor"
            />
          </svg>
          <div
            aria-hidden="true"
            className="border-navy-border bg-navy-secondary absolute top-[16%] left-0 z-10 w-[36%] rounded-xl border p-1.5 font-mono text-[clamp(0.35rem,1.8vw,0.625rem)] leading-[1.65] sm:p-2 sm:text-[9px] xl:p-2.5 xl:text-[clamp(0.625rem,0.78vw,0.75rem)]"
          >
            <div className="mb-2 flex gap-1 sm:mb-3 sm:gap-1.5">
              <span className="bg-coral size-1 rounded-full sm:size-1.5" />
              <span className="bg-editor-window-yellow size-1 rounded-full sm:size-1.5" />
              <span className="bg-editor-window-green size-1 rounded-full sm:size-1.5" />
            </div>
            <div className="grid grid-cols-[0.5rem_1fr] gap-x-1 sm:grid-cols-[0.625rem_1fr] xl:grid-cols-[0.75rem_1fr]">
              <pre className="text-cream-muted text-right">
                {"1\n2\n3\n4\n5\n6"}
              </pre>
              <pre className="text-cream">
                <code>
                  <span className="text-coral">def</span>
                  {" build_product():\n    "}
                  <span className="text-coral">return</span>
                  {" {\n"}
                  <span className="text-coral">
                    {
                      '        "Scalable",\n        "Reliable",\n        "Maintainable"\n'
                    }
                  </span>
                  {"    }"}
                </code>
              </pre>
            </div>
            <span className="bg-coral text-cream absolute -top-3 right-2 flex size-6 items-center justify-center rounded-lg sm:right-3 sm:size-8 xl:-top-4 xl:right-4 xl:size-10">
              <Code2 className="size-3 sm:size-4 xl:size-5" />
            </span>
          </div>
          <Image
            alt={`${siteConfig.person.name}, ${siteConfig.person.title}`}
            className="absolute right-0 -bottom-8 z-20 h-auto w-[90%] object-contain"
            height={1229}
            priority
            sizes="(max-width: 471px) calc(90vw - 2.25rem), (max-width: 1279px) 389px, (max-width: 1519px) 34vw, 515px"
            src="/images/photo/profile-photo.png"
            width={1280}
          />
        </div>
      </Container>

      <NavyWave
        id="hero-about-wave"
        className="absolute right-0 -bottom-px left-0 z-20"
      />
    </section>
  );
}
