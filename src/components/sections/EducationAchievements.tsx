import { Award, GraduationCap, Trophy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { NavyWave } from "@/components/ui/NavyWave";
import { achievements, education } from "@/data/education";

export function EducationAchievements() {
  return (
    <>
      <NavyWave id="skills-education-wave" className="relative -mb-px block" />
      <section
        id="education"
        aria-labelledby="education-achievements-title"
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
                className="bg-coral h-1 w-10 shrink-0 rounded-full"
              />
              <h2
                id="education-achievements-title"
                className="text-cream text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Education &amp; Achievements
              </h2>
            </div>
            <p className="text-cream-muted mt-4 text-base leading-7">
              My academic background and key accomplishments.
            </p>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <Card>
              <h3 className="text-cream flex items-center gap-3 text-lg font-semibold">
                <GraduationCap
                  aria-hidden="true"
                  className="text-coral shrink-0"
                  size={26}
                />
                Education
              </h3>
              <ol className="mt-5 space-y-6">
                {education.map((item, index) => (
                  <li key={item.degree} className="relative ml-3 pl-7">
                    <span
                      aria-hidden="true"
                      className={`absolute top-1.5 left-0 size-2.5 rounded-full ${index === 0 ? "bg-coral" : "bg-cream-muted"}`}
                    />
                    {index < education.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="bg-navy-border absolute top-4 -bottom-7 left-1 w-px"
                      />
                    )}
                    <h4 className="text-cream text-base font-semibold">
                      {item.degree}
                    </h4>
                    <p className="text-cream-muted mt-1 text-sm leading-6">
                      {item.institution}
                    </p>
                    <ul
                      aria-label={`${item.degree} results`}
                      className="mt-2 flex flex-wrap gap-2"
                    >
                      {item.achievements.map((achievement) => (
                        <li key={achievement.title}>
                          <Chip>{achievement.title}</Chip>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Card>

            <Card>
              <h3 className="text-cream flex items-center gap-3 text-lg font-semibold">
                <Trophy
                  aria-hidden="true"
                  className="text-coral shrink-0"
                  size={26}
                />
                Achievements
              </h3>
              <ul className="divide-navy-border mt-5 divide-y">
                {achievements.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <Award
                      aria-hidden="true"
                      className="text-coral shrink-0"
                      size={28}
                    />
                    <div className="min-w-0">
                      <h4 className="text-cream text-base font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-cream-muted mt-1 text-sm leading-6">
                        {item.description} · {item.date}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
