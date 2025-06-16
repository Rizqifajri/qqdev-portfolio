"use client"

import { useRef } from "react"
import { projects } from "@/lib/data.project"
import ProjectsBackgroundClean from "@/blocks/Backgrounds/Projects/projects-background"
import ProjectsHeader from "./project-header"
import { useProjectsAnimation } from "@/hooks/use-project-animation"
import ProjectCard3D from "./project-card"

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsWrapperRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  //@ts-ignore
  useProjectsAnimation({ projectsWrapperRef, progressBarRef })

  return (
    <section ref={sectionRef} className="relative mt-6 min-h-screen overflow-hidden">
      <ProjectsBackgroundClean sectionRef={sectionRef} />
      <div ref={containerRef} className="relative z-10">

        <ProjectsHeader />

        <div ref={projectsWrapperRef} className="relative flex items-center">
          <div className="flex space-x-6 px-6 sm:px-8 md:px-12 pb-24">
            {projects.map((project, index) => (

              <ProjectCard3D key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
