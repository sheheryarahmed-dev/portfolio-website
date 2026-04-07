import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import finalyearproject from "@/public/Visitor_Counting_Identification.jpeg";
import iclerkproject from "@/public/iclerk-project.png";
import cablineproject from "@/public/cabline-dashboard.webp";
import genmarkproject from "@/public/Genmark-project.jpeg";
import dropproject from "@/public/drop.jpeg";
import iqracityproject from "@/public/iqracity.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "Foundation University Islamabad, Pakistan",
    description:
    "Graduated with a Bachelor’s degree in Computer Science, achieving a CGPA of 3.72/4.0. Awarded a merit certificate for outstanding academic performance, ranking among the top 3 students in the department.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 – 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "KhasTech Solutions, Islamabad, Pakistan",
    description:
    "My role involved contributing to the development of secure and scalable web applications using Django, Jinja templates, and PostgreSQL. I implemented robust backend logic, designed efficient database schemas, and ensured reliable performance across the platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2020 – Dec 2020",
  },
  {
    title: "Sr. Back-end Developer (Python/Django/FastAPI)",
    location: "XIOTS LTD, Blackburn, United Kingdom",
    description:
      "My primary role involves developing secure, scalable backend systems using Python, Django, and FastAPI, while leading the development team, overseeing system architecture, and ensuring high-quality delivery. I also manage deployments on cloud platforms using Azure and Docker, maintaining reliable and efficient production environments.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Multi-Tenant Modular Business Management System",
    description:
      "Enterprise-level multi-tenant platform with modular components: invoicing, cab booking, CRM, task management, restaurant management (inventory control), and voucher systems. Features real-time dashboards, EPOS integrations, waiter apps, and live table booking status.",
    tags: [
      "Python",
      "Django",
      "FastAPI",
      "DRF",
      "WebSockets",
      "FCM",
      "Stripe",
      "Wise Bank API",
      "iCabbi API",
      "Autocab API",
      "PostgreSQL",
      "Microservices",
      "Azure",
      "Multi-tenant Database",
      "Real-time Data Sync"
    ],
    imageUrl: iclerkproject,
  },
  {
    title: "Taxi Dispatch Management System",
    description:
      "Multi-tenant taxi dispatch system managing bookings, addresses, vehicle assignments, driver management, dynamic tariff calculations, and zone-based routing with WebSocket integration.",
    tags: [
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
      "SQLAlchemy"
    ],
    imageUrl: cablineproject,
  },
  {
    title: "Genmark - Generator Set Tracking Portal",
    description:
      "Comprehensive portal for genset monitoring with subscription management, real-time tracking, user authorization, and a reporting dashboard.",
    tags: [
      "Python",
      "DRF",
      "Websockets",
      "JWT Authentication",
      "PostgreSQL",
      "Role-based Access Control",
      "Azure"
    ],
    imageUrl: genmarkproject,
  },
  {
    title: "Multi-Vendor E-Commerce System for Restaurants",
    description:
      "Marketplace platform enabling multiple restaurant vendors to manage menus, orders, and customer relationships through a unified API backend.",
    tags: [
      "Python",
      "Django",
      "Django Oscar",
      "Django Channels",
      "Stripe API",
      "JWT Authentication",
      "PostgreSQL"
    ],
    imageUrl: dropproject,
  },
  {
    title: "Online Learning Platform",
    description:
      "Virtual learning and meeting platform for schools and offices. Implemented role-based access for students and teams, with integrated video conferencing.",
    tags: [
      "Django",
      "BigBlueButton Integration",
      "RBAC"
    ],
    imageUrl: iqracityproject,
  },
  {
    title: "Visitor Counting & Identification System",
    description:
      "Facial recognition-based system for automated visitor counting and identification with backend API for data processing and analytics.",
    tags: [
      "Python",
      "Django",
      "OpenCV",
      "PostgreSQL",
      "Machine Learning"
    ],
    imageUrl: finalyearproject,
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "Django Rest Framework (DRF)",
  "FastAPI",
  "RESTful APIs",
  "GraphQL",
  "WebSockets",
  "PostgreSQL",
  "MySQL",
  "ORM",
  "Database Design",
  "Query Optimization",
  "Redis (Caching)",
  "third-party API Integration",
  "Stripe",
  "Pubnub",
  "Pusher",
  "OpenStreetMaps",
  "Firebase Cloud Messaging (FCM)",
  "Multi-tenant Architecture",
  "Monolithic Architecture",
  "Modular Architecture",
  "Microservices",
  "Authentication & Authorization",
  "JWT",
  "Role-based Access Control (RBAC)",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "Docker",
  "Containerization",
  "Azure",
  "Heroku",
  "Vercel",
  "DNS Management",
  "Git",
  "GitHub",
  "Pytest",
] as const;
