import { Code2, BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { NavyWave } from "@/components/ui/NavyWave";
import { siteConfig } from "@/data/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const contact = siteConfig.contact;
  const configured = [
    process.env.RESEND_API_KEY,
    process.env.CONTACT_EMAIL_FROM,
    process.env.CONTACT_EMAIL_TO,
    process.env.TURNSTILE_SECRET_KEY,
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    process.env.NEXT_PUBLIC_SITE_URL,
  ].every((value) => Boolean(value?.trim()));
  const links = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    {
      icon: Phone,
      label: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: BriefcaseBusiness,
      label: "linkedin.com/in/sheheryar-ahmed-dev",
      href: contact.linkedinUrl,
    },
    {
      icon: Code2,
      label: "github.com/sheheryarahmed-dev",
      href: siteConfig.githubUrl,
    },
  ];
  return (
    <>
      <NavyWave id="education-contact-wave" className="relative -mb-px block" />
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="bg-navy border-t pt-6 pb-8 sm:pb-10 lg:pt-8 lg:pb-12"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, color-mix(in srgb, var(--navy-secondary) 90%, var(--navy)), var(--navy) 27rem)",
          borderTopColor:
            "color-mix(in srgb, var(--navy-secondary) 90%, var(--navy))",
        }}
      >
        <Container>
          <div className="mb-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="bg-coral h-1 w-10 rounded-full"
            />
            <h2
              id="contact-title"
              className="text-cream text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Contact
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-cream text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s Work Together
              </h3>
              <p className="text-cream-muted mt-4 max-w-lg text-base leading-7">
                Have a project in mind, a job opportunity, or just want to
                connect? I’d love to hear from you.
              </p>
              <ul className="mt-6 space-y-4">
                {links.map(({ icon: Icon, label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-cream hover:text-coral inline-flex max-w-full items-start gap-3 text-sm transition-colors sm:text-base"
                    >
                      <Icon
                        aria-hidden="true"
                        className="text-coral shrink-0"
                        size={22}
                      />
                      <span className="min-w-0 break-words">{label}</span>
                    </a>
                  </li>
                ))}
                <li className="text-cream-muted flex items-center gap-3 text-sm sm:text-base">
                  <MapPin
                    aria-hidden="true"
                    className="text-coral shrink-0"
                    size={22}
                  />
                  {contact.location}
                </li>
              </ul>
            </div>
            <Card className="min-w-0">
              <ContactForm
                configured={configured}
                siteKey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? ""
                }
              />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
