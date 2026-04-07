"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Results-driven Backend Developer with 5+ years of experience designing and implementing scalable, high-performance APIs and microservices. Expert in the Python ecosystem with deep proficiency in Django and FastAPI frameworks. Proven track record of architecting complex multi-tenant systems, integrating third-party payment solutions, and deploying robust applications on cloud platforms. Specialized in RESTful and GraphQL API design, database optimization, and building secure authentication systems. Passionate about clean code, system architecture, and delivering solutions that drive business value.
      </p>
    </motion.section>
  );
}
