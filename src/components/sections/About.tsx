import { Activity, Cloud, Code2, Download, Layers3, Mail } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

const expertiseIcons = {
  activity: Activity,
  layers: Layers3,
  code: Code2,
  cloud: Cloud,
} as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-navy border-t py-8 sm:py-10 lg:py-12"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, color-mix(in srgb, var(--navy-secondary) 90%, var(--navy)), var(--navy) 27rem)",
        borderTopColor:
          "color-mix(in srgb, var(--navy-secondary) 90%, var(--navy))",
      }}
    >
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="bg-coral h-1 w-10 rounded-full"
            />
            <p className="text-cream text-xl font-semibold tracking-tight sm:text-2xl">
              About Me
            </p>
          </div>

          <h2
            id="about-title"
            className="text-cream max-w-[19ch] text-3xl leading-[1.12] font-bold tracking-tight sm:text-4xl"
          >
            {siteConfig.about.heading}{" "}
            <span className="text-coral">
              {siteConfig.about.highlightedText}
            </span>
          </h2>

          <div className="text-cream-muted mt-5 space-y-3 text-sm leading-6 sm:text-base sm:leading-7">
            <p>{siteConfig.about.introduction}</p>
            <p>{siteConfig.about.specialization}</p>
          </div>

          <p className="border-coral text-cream mt-5 border-l-4 pl-4 text-sm leading-6 sm:text-base sm:leading-6">
            {siteConfig.about.experience}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="border-coral bg-coral text-navy focus-visible:outline-coral inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2"
              download
              href={siteConfig.cvPath}
            >
              <Download aria-hidden="true" size={16} />
              Download CV
            </a>
            <a
              className="border-navy-border text-cream hover:border-cream-muted hover:bg-navy-secondary focus-visible:outline-coral inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border bg-transparent px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              href="#contact"
            >
              <Mail aria-hidden="true" size={16} />
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div>
          <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {siteConfig.about.expertise.map((item) => {
              const Icon = expertiseIcons[item.icon];

              return (
                <Card key={item.title} className="min-h-32 p-4 sm:p-5">
                  <Icon
                    aria-hidden="true"
                    className="text-coral"
                    size={24}
                    strokeWidth={2.25}
                  />
                  <h3 className="text-cream mt-2 text-base font-semibold sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-cream-muted mt-1 text-sm leading-5">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="border-navy-border mt-5 border-t pt-4 sm:mt-6 sm:pt-5">
            <h3 className="text-cream text-sm font-semibold sm:text-base">
              Core engineering focus
            </h3>
            <ul
              aria-label="Core engineering focus"
              className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3"
            >
              {siteConfig.about.focus.map((item) => (
                <li key={item}>
                  <Chip className="bg-navy-secondary text-cream w-full justify-center px-3 py-2 text-center">
                    {item}
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
