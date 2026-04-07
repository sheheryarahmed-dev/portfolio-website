"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import ProjectDetailModal from "./project-detail-modal";
import { useState } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const [modalProject, setModalProject] = useState<null | typeof projectsData[number]>(null);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} onClick={() => setModalProject(project)} />
          </React.Fragment>
        ))}
      </div>
      {modalProject && (
        <ProjectDetailModal
          isOpen={!!modalProject}
          onClose={() => setModalProject(null)}
          title={modalProject.title}
          description={modalProject.description}
          tags={[...modalProject.tags]}
          imageUrl={typeof modalProject.imageUrl === "string" ? modalProject.imageUrl : modalProject.imageUrl.src}
        />
      )}
    </section>
  );
}
