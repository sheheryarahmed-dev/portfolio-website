import { CalendarDays, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { NavyWave } from "@/components/ui/NavyWave";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <>
      <NavyWave
        id="projects-experience-wave"
        className="relative -mb-px block"
      />
      <section
        id="experience"
        aria-labelledby="experience-title"
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
                id="experience-title"
                className="text-cream text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Experience
              </h2>
            </div>
            <p className="text-cream-muted mt-4 text-base leading-7">
              My professional journey building scalable products, leading
              technical initiatives, and delivering business value.
            </p>
          </header>

          <div className="mt-8 space-y-4">
            {experience.map((company) => (
              <Card key={company.name} className="p-5 sm:p-6">
                <article aria-label={`Experience at ${company.name}`}>
                  <header className="flex flex-wrap items-start gap-3 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="border-navy-border bg-navy-secondary text-cream flex size-12 shrink-0 items-center justify-center rounded-lg border text-sm font-bold"
                    >
                      {company.name === "XIOTS" ? "XI" : "KS"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-cream text-lg font-semibold">
                        {company.name}
                      </h3>
                      <p className="text-cream-muted mt-1 flex items-center gap-2 text-sm">
                        <CalendarDays
                          aria-hidden="true"
                          size={15}
                          className="shrink-0"
                        />
                        {company.startDate} – {company.endDate ?? "Present"}
                      </p>
                    </div>
                    {!company.endDate && (
                      <span className="border-coral/40 bg-coral/10 text-coral rounded-full border px-3 py-1 text-xs font-semibold">
                        Current
                      </span>
                    )}
                  </header>

                  <ol className="mt-6 space-y-6 pl-1 sm:ml-6 sm:pl-10">
                    {company.roles.map((role, index) => (
                      <li
                        key={`${role.title}-${role.startDate}`}
                        className="relative pl-6"
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute top-1.5 left-0 size-2.5 rounded-full ${index === 0 ? "bg-coral" : "bg-cream-muted"}`}
                        />
                        {index < company.roles.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="bg-navy-border absolute top-4 -bottom-7 left-1 w-px"
                          />
                        )}
                        <h4 className="text-cream text-base font-semibold">
                          {role.title}
                        </h4>
                        <div className="text-cream-muted mt-2 flex flex-col gap-2 text-xs sm:flex-row sm:flex-wrap sm:gap-x-6 sm:text-sm">
                          <p className="flex items-center gap-2">
                            <CalendarDays
                              aria-hidden="true"
                              size={14}
                              className="shrink-0"
                            />
                            {role.startDate} – {role.endDate ?? "Present"}
                          </p>
                          <p className="flex items-start gap-2">
                            <MapPin
                              aria-hidden="true"
                              size={14}
                              className="mt-0.5 shrink-0"
                            />
                            {role.location}
                          </p>
                        </div>
                        <ul className="text-cream-muted marker:text-cream-muted mt-3 list-disc space-y-1 pl-4 text-sm leading-6">
                          {role.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </article>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
