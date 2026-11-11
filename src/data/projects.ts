import type { Project } from "@/types";

export const projects = [
  {
    slug: "multi-tenant-business-management",
    name: "Multi-Tenant Modular Business Management System",
    category: "SaaS Platform",
    description:
      "Enterprise-level multi-tenant platform with modular components: invoicing, cab booking, CRM, task management, restaurant management (inventory control), and voucher systems. Features real-time dashboards, EPOS integrations, waiter apps, and live table booking status.",
    technologies: [
      "Python",
      "Django Rest Framework",
      "FastAPI",
      "WebSockets",
      "FCM",
      "Stripe",
      "iCabbi APIs",
      "Autocab APIs",
      "PostgreSQL (multi-schema architecture)",
      "Microservices",
      "Azure",
    ],
    image: {
      src: "/images/projects/business-management-dashboard.png",
      alt: "Business management system accounts dashboard with invoicing, payments, and financial charts",
    },
  },
  {
    slug: "taxi-dispatch-management",
    name: "Taxi Dispatch Management System",
    category: "SaaS Platform",
    description:
      "Multi-tenant taxi dispatch system managing bookings, addresses, vehicle assignments, driver management, dynamic tariff calculations, and zone-based routing with WebSocket integration.",
    technologies: [
      "Python",
      "FastAPI",
      "Django",
      "Redis",
      "PubNub",
      "JWT Authentication",
      "Access Control",
      "Stripe",
      "OpenStreetMaps",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    image: {
      src: "/images/projects/taxi-dispatch-dashboard.png",
      alt: "Taxi dispatch dashboard with a map, driver availability, booking statuses, and dispatch controls",
    },
  },
  {
    slug: "genmark-generator-set-tracking",
    name: "Genmark - Generator Set Tracking Portal",
    category: "Real-Time Monitoring",
    description:
      "Comprehensive portal for genset monitoring with subscription management, real-time genset and driver tracking, user authorization, and a reporting dashboard.",
    technologies: [
      "Python",
      "DRF",
      "Websockets",
      "JWT Authentication",
      "PostgreSQL",
      "NextJs",
      "Typescript",
      "Azure",
    ],
    image: {
      src: "/images/projects/genmark-dashboard.png",
      alt: "Genmark genset monitoring dashboard with fleet status, a live tracking map, and generator details",
    },
  },
  {
    slug: "multi-vendor-restaurant-ecommerce",
    name: "Multi-Vendor E-Commerce System for Restaurants",
    category: "E-commerce",
    description:
      "Marketplace platform enabling multiple restaurant vendors to manage menus, orders, and customer relationships through a unified API backend.",
    technologies: [
      "Python",
      "Django",
      "Django Oscar",
      "Django Channels",
      "Stripe API",
      "JWT Authentication",
      "PostgreSQL",
    ],
    image: {
      src: "/images/projects/restaurant-marketplace.jpg",
      alt: "Restaurant marketplace website with postcode search and sections for delivery riders and restaurant partners",
    },
  },
  {
    slug: "visitor-counting-identification",
    name: "Visitor Counting & Identification System",
    category: "Computer Vision",
    description:
      "Facial recognition-based system for automated visitor counting and identification with backend API for data processing and analytics.",
    technologies: [
      "Python",
      "Django",
      "OpenCV",
      "PostgreSQL",
      "Machine Learning",
    ],
    image: {
      src: "/images/projects/visitor-identification.jpg",
      alt: "Visitor analytics dashboard preview with camera-based recognition, visitor counts, and backend API visualization",
    },
  },
] satisfies Project[];
