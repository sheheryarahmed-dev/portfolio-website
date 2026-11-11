import {
  Cloud,
  Code2,
  Database,
  Layers3,
  Link2,
  Monitor,
  Wrench,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { NavyWave } from "@/components/ui/NavyWave";
import { skills } from "@/data/skills";

const skillIcons = {
  "Backend Development": Code2,
  Databases: Database,
  "Architecture & Security": Layers3,
  "DevOps & Cloud": Cloud,
  "Integrations & Services": Link2,
  "Frontend Development": Monitor,
  "Tools & Testing": Wrench,
} as const;

export function Skills() {
  return (
    <>
      <NavyWave id="experience-skills-wave" className="relative -mb-px block" />
      <section
        id="skills"
        aria-labelledby="skills-title"
        className="bg-navy border-t pt-6 pb-8 sm:pb-10 lg:pt-8 lg:pb-12"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, color-mix(in srgb, var(--navy-secondary) 90%, var(--navy)), var(--navy) 27rem)",
          borderTopColor:
            "color-mix(in srgb, var(--navy-secondary) 90%, var(--navy))",
        }}
      >
        <Container>
          <header>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="bg-coral h-1 w-10 rounded-full"
              />
              <h2
                id="skills-title"
                className="text-cream text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Skills
              </h2>
            </div>
            <p className="text-cream-muted mt-4 text-base leading-7">
              A comprehensive set of technologies and tools I use to build,
              ship, and scale products.
            </p>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">
            {skills.map((group, index) => {
              const Icon = skillIcons[group.category];
              return (
                <Card
                  key={group.category}
                  className={`min-w-0 ${index < 3 ? "xl:col-span-4" : "xl:col-span-3"}`}
                >
                  <h3 className="text-cream flex items-start gap-2 text-base font-semibold">
                    <Icon
                      aria-hidden="true"
                      className="text-coral shrink-0"
                      size={24}
                    />
                    {group.category}
                  </h3>
                  <ul
                    aria-label={`${group.category} skills`}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {group.skills.map((skill) => (
                      <li key={skill} className="max-w-full">
                        <Chip className="max-w-full break-words whitespace-normal">
                          {skill}
                        </Chip>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
