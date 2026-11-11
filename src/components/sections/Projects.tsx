import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { NavyWave } from "@/components/ui/NavyWave";
import { projects } from "@/data/projects";
import { ProjectCarousel } from "./ProjectCarousel";

export function Projects() {
  return (
    <>
      <NavyWave id="about-projects-wave" className="relative -mb-px block" />
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="bg-navy border-t pt-6 pb-8 sm:pb-10 lg:pt-8 lg:pb-12"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, color-mix(in srgb, var(--navy-secondary) 90%, var(--navy)), var(--navy) 27rem)",
          borderTopColor:
            "color-mix(in srgb, var(--navy-secondary) 90%, var(--navy))",
        }}
      >
        <Container>
          <header className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="bg-coral h-1 w-10 rounded-full"
              />
              <h2
                id="projects-title"
                className="text-cream text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Projects
              </h2>
            </div>
            <p className="text-cream-muted mt-4 text-base leading-7">
              A few real-world projects that showcase my experience in building
              scalable, reliable, and user-focused applications.
            </p>
          </header>
          <ProjectCarousel>
            {projects.map((project) => (
              <Card
                key={project.slug}
                className="h-full w-full overflow-hidden p-0!"
              >
                <article className="flex h-full flex-col">
                  <div className="bg-navy-secondary relative aspect-[3/2]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1280px) 440px, (min-width: 768px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="bg-coral text-navy w-fit rounded-full px-3 py-1 text-xs font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-cream mt-3 text-xl leading-7 font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-cream-muted mt-3 text-sm leading-6">
                      {project.description}
                    </p>
                    <ul
                      aria-label="Technology stack"
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {project.technologies.map((technology) => (
                        <li key={technology} className="max-w-full">
                          <Chip className="max-w-full break-words whitespace-normal">
                            {technology}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Card>
            ))}
          </ProjectCarousel>
        </Container>
      </section>
    </>
  );
}
