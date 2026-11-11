import type { SiteConfig } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  url: siteUrl || "http://localhost:3000",
  person: {
    name: "Sheheryar Ahmed",
    title: "Software Engineer & Backend Specialist",
    description:
      "Software Engineer specializing in Python, Django, FastAPI, Next.js, scalable backend systems, multi-tenant SaaS architecture and cloud solutions.",
  },
  navigation: [],
  contact: {},
  socialLinks: [],
} satisfies SiteConfig;
