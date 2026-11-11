import type { Company } from "@/types";

export const experience = [
  {
    name: "XIOTS",
    startDate: "Jan 2021",
    roles: [
      {
        title: "Development Team Lead",
        startDate: "Jan 2024",
        location: "Islamabad, Pakistan (Hybrid)",
        achievements: [
          "Leading backend development of a modular, multi-tenant SaaS platform across domains.",
          "Including Taxi Dispatch, Accounts (Invoicing & Payments), CRM, Task Management, and Restaurant systems.",
          "Drive technical design, code quality, and team collaboration to deliver scalable and reliable solutions.",
        ],
      },
      {
        title: "Sr. Backend Developer",
        startDate: "Jan 2023",
        endDate: "Dec 2023",
        location: "Islamabad, Pakistan",
        achievements: [
          "Developed scalable REST APIs using Django REST Framework (DRF).",
          "Contributed to multi-tenant system design and implementation.",
        ],
      },
      {
        title: "Python/Django Developer",
        startDate: "Jan 2021",
        endDate: "Dec 2022",
        location: "Islamabad, Pakistan (On-site)",
        achievements: [
          "Built backend systems using Django for web and API-based applications.",
          "Designed database schemas and implemented core business logic.",
        ],
      },
    ],
  },
  {
    name: "Khastech Solutions",
    startDate: "Jun 2019",
    endDate: "Dec 2020",
    roles: [
      {
        title: "Software Engineer",
        startDate: "Aug 2020",
        endDate: "Dec 2020",
        location: "Islamabad, Pakistan",
        achievements: [
          "Web application development and feature implementation.",
          "Contributed to research and development initiatives within the company.",
        ],
      },
      {
        title: "Web Application Developer (Internship)",
        startDate: "Jun 2019",
        endDate: "Aug 2019",
        location: "Islamabad, Pakistan",
        achievements: [
          "Assisted in the development and maintenance of web applications.",
          "Gained hands-on experience in Python and Django development.",
        ],
      },
    ],
  },
] satisfies Company[];
