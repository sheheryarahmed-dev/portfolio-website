import type { Company } from "@/types";

export const experience = [
  {
    name: "XIOTS",
    startDate: "Jan 2021",
    roles: [
      {
        title: "Senior Software Engineer | Team Lead",
        startDate: "Jan 2024",
        location: "Islamabad, Pakistan (Hybrid)",
        achievements: [
          "Leading backend development of a modular, multi-tenant SaaS platform across domains.",
          "Including Taxi Dispatch, Accounts (Invoicing & Payments), CRM, Task Management, and Restaurant systems.",
          "Drive technical design, code quality, and team collaboration to deliver scalable and reliable solutions.",
        ],
      },
      {
        title: "Senior Backend Engineer",
        startDate: "Jan 2023",
        endDate: "Dec 2023",
        location: "Islamabad, Pakistan",
        achievements: [
          "Developed scalable REST APIs using Django REST Framework (DRF).",
          "Contributed to multi-tenant system design and implementation.",
        ],
      },
      {
        title: "Backend Engineer",
        startDate: "Jan 2021",
        endDate: "Dec 2022",
        location: "Islamabad, Pakistan (On-site)",
        achievements: [
          "Contributed significantly to a multi-tenant e-commerce platform by adapting and extending Django Oscar to support multi-tenant architecture.",
          "Developed REST APIs using Django REST Framework for multiple applications, including the admin dashboard, vendor dashboard, customer website, and rider app.",
          "Implemented real-time order and rider location tracking using Django Channels, enabling live updates in the rider application.",
          "Implemented JWT authentication and role-based access control using user groups to manage permissions across different portals.",
          "Collaborated with management to clarify requirements and translate business needs into backend functionality.",
          "Managed application deployments on Heroku.",
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
          "Contributed to the development of an online learning platform using Django, implemented backend functionality and application features.",
          "Implemented authentication and role-based access control (RBAC) to manage user permissions and secure access to platform features",
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
