import { ArrowUp, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { siteConfig } from "@/data/site";

export function Footer() {
  const links = [
    {
      label: "LinkedIn",
      href: siteConfig.contact.linkedinUrl,
      icon: (
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: siteConfig.githubUrl,
      icon: <GitHubIcon />,
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.contact.email}`,
      icon: <Mail aria-hidden="true" size={20} />,
    },
  ];

  return (
    <footer className="border-navy-border bg-navy border-t py-5">
      <Container className="flex flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            href="#home"
            aria-label={`${siteConfig.person.name}, home`}
            className="text-cream inline-flex items-center gap-3"
          >
            <span className="text-xl font-bold tracking-tight">
              SA<span className="text-coral">.</span>
            </span>
            <span className="text-sm font-medium">
              {siteConfig.person.name}
            </span>
          </a>
          <p className="text-cream-muted text-center text-xs">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#home"
            className="text-cream hover:text-coral inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors"
          >
            Back to Top
            <ArrowUp aria-hidden="true" size={16} />
          </a>
          <nav
            aria-label="Footer social links"
            className="border-navy-border flex items-center gap-1 border-l pl-3"
          >
            {links.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={
                  label === "Email" ? label : `${label} (opens in a new tab)`
                }
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="text-coral hover:text-cream inline-flex size-11 items-center justify-center rounded-lg transition-colors"
              >
                {icon}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
