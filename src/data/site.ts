import type { SiteConfig } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const githubUrl = "https://github.com/sheheryarahmed-dev";

export const siteConfig = {
  url: siteUrl || "http://localhost:3000",
  person: {
    name: "Sheheryar Ahmed",
    title: "Software Engineer & Backend Specialist",
    description:
      "Software Engineer specializing in Python, Django, FastAPI, Next.js, scalable backend systems, multi-tenant SaaS architecture and cloud solutions.",
  },
  hero: {
    availability: "Available for Opportunities",
    description:
      "I build scalable, secure, and high-performance web applications using modern technologies, with 6+ years of experience in backend development, system design, and cloud deployment.",
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Azure",
    ],
    statistics: [
      { value: "6+", label: "Years Experience", icon: "calendar" },
      { value: "6+", label: "Major Projects", icon: "layers" },
      { value: "15+", label: "Technologies", icon: "code" },
    ],
  },
  about: {
    heading: "Building reliable products that create",
    highlightedText: "real impact.",
    introduction:
      "I'm a Software Engineer and Backend Specialist focused on designing and delivering scalable, high-availability web applications.",
    specialization:
      "I specialize in backend architecture, multi-tenant SaaS platforms, API development, and building systems that prioritize performance, security, and long-term maintainability.",
    experience:
      "From developing multi-tenant business management platforms to building taxi dispatch and integration systems, I enjoy solving complex backend challenges and turning business requirements into reliable software solutions.",
    expertise: [
      {
        title: "Performance",
        description: "System optimization and scalability",
        icon: "activity",
      },
      {
        title: "SaaS Platforms",
        description: "Design and development of multi-tenant applications",
        icon: "layers",
      },
      {
        title: "API Development",
        description: "REST and GraphQL APIs, integrations and security",
        icon: "code",
      },
      {
        title: "Cloud & DevOps",
        description: "Azure, Docker, and CI/CD deployments",
        icon: "cloud",
      },
    ],
    focus: [
      "Backend Engineering",
      "System Design",
      "SaaS Architecture",
      "Cloud Solutions",
    ],
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    email: "sheheryarpk2@gmail.com",
    phone: "+92 311 5879518",
    location: "Islamabad, Pakistan",
    linkedinUrl: "https://www.linkedin.com/in/sheheryar-ahmed-dev",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: githubUrl,
    },
  ],
  githubUrl,
  cvPath: "/cv/SheheryarAhmed_SoftwareEngineer.pdf",
} satisfies SiteConfig;
