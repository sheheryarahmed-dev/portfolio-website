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
          "Re-architected iClerk from a monolithic application into microservices, separating authentication, accounting and invoicing, dispatch, and other product services.",
          "Built and maintained multi-tenant SaaS services using Django, Django REST Framework, Django-tenants, and FastAPI, with PostgreSQL multi-schema architecture, tenant isolation, and secure access control.",
          "Owned end-to-end backend development for Support, a Trello-like task management module, Driver Rent, CRM, and Review, and contributed to Restaurant Management and Inventory.",
          "Led feature planning, task allocation, architectural decisions, and coordination with management while mentoring developers and reviewing implementation quality.",
          "Improved iClerk API performance by 40% through query optimization, database indexing, Redis caching, Celery background processing, and code refactoring, supporting APIs handling 50K+ daily requests.",
          "Integrated Stripe and Wise payment workflows, including transaction handling and webhooks, with Stripe processing £500K+ in monthly payment volume.",
          "Delivered end-to-end iCabbi and Autocab integrations for fare quotes, booking creation, and webhook-based status tracking, connecting bookings to automated invoicing and payment flows.",
          "Implemented GitHub Actions CI/CD pipelines, containerized applications with Docker, and managed Kubernetes deployments, rollouts, configuration, and troubleshooting.",
          "Developed backend functionality for Genmark, a client genset monitoring portal, processing IoT webhooks containing battery, temperature, fuel, and location data to support equipment-condition monitoring and genset and driver tracking.",
        ],
      },
      {
        title: "Senior Backend Engineer",
        startDate: "Jan 2023",
        endDate: "Dec 2023",
        location: "Islamabad, Pakistan",
        achievements: [
          "Developed new features for the multi-tenant e-commerce platform while contributing to the initial development of iClerk, a multi-tenant business management SaaS product.",
          "Built backend APIs for iClerk's Accounts & Billing module, covering invoicing, Stripe payments, recurring billing, expense management, and refunds, using Django REST Framework and PostgreSQL multi-schema architecture.",
          "Developed the Scan to Pay and Scan to Book modules, integrating iCabbi and Autocab APIs to enable QR-code-based taxi bookings using pickup locations associated with each QR code and customer-provided details.",
          "Developed backend services for an ERP job portal, enabling company registration and job posting, with JWT authentication, Elasticsearch-powered search, FCM notifications, and SMTP2GO email integration.",
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
