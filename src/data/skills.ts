import type { SkillGroup } from "@/types";

export const skills = [
  {
    category: "Backend Development",
    skills: [
      "Python",
      "Django",
      "DRF",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "ORM",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    category: "Architecture & Security",
    skills: [
      "Multi-tenant Architecture",
      "Modular Architecture",
      "Microservices",
      "Event-driven Design",
      "API Design",
      "Authentication & Authorization",
      "JWT",
      "Role-based Access Control",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker",
      "Containerization",
      "Azure",
      "Heroku",
      "Vercel",
      "Kubernetes",
    ],
  },
  {
    category: "Integrations & Services",
    skills: [
      "Third-party API Integration",
      "Stripe",
      "PubNub",
      "Pusher",
      "OpenStreetMaps",
      "Firebase Cloud Messaging (FCM)",
    ],
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Next.js"],
  },
  {
    category: "Tools & Testing",
    skills: ["Git", "GitHub", "Pytest"],
  },
] as const satisfies SkillGroup[];
