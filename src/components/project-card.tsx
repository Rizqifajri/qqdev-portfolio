"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  color: string
  category: string
}

interface ProjectCard3DProps {
  project: Project
  index: number
}

export default function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const supportsHover = window.matchMedia("(hover: hover)").matches

    if (supportsHover) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out",
        })
      }

      card.addEventListener("mousemove", handleMouseMove)
      card.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        card.removeEventListener("mousemove", handleMouseMove)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="project-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[600px] 
                 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 
                 relative group cursor-pointer mx-2 sm:mx-4"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Main Card */}
      <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden 
                      bg-white/60 dark:bg-gradient-to-br dark:from-black dark:to-gray-900/80 
                      backdrop-blur-xl border border-black/10 dark:border-gray-900/40 shadow-2xl">

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Image */}
        <div className="relative h-1/2 sm:h-3/5 md:h-2/3 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute  " />

          {/* Category Badge */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <span className="px-2 py-1 sm:px-3 text-xs font-semibold 
                            bg-black/10 dark:bg-white/20 
                            backdrop-blur-md text-black dark:text-white 
                            rounded-full border border-black/10 dark:border-white/20">
              {project.category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-1 sm:space-x-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              className="bg-black/10 dark:bg-white/20 backdrop-blur-md 
                         hover:bg-black/20 dark:hover:bg-white/30 
                         text-black dark:text-white 
                         border border-black/10 dark:border-white/20 
                         h-8 w-8 p-0 sm:h-auto sm:w-auto sm:p-2"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-black/10 dark:bg-white/20 backdrop-blur-md 
                         hover:bg-black/20 dark:hover:bg-white/30 
                         text-black dark:text-white 
                         border border-black/10 dark:border-white/20 
                         h-8 w-8 p-0 sm:h-auto sm:w-auto sm:p-2"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-white/95 dark:from-slate-900/95 to-transparent backdrop-blur-sm">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
                         text-black dark:text-white mb-2 sm:mb-3 
                         group-hover:text-transparent group-hover:bg-gradient-to-r 
                         group-hover:from-black group-hover:to-gray-500
                         group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 
                        text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium 
                           bg-slate-200 dark:bg-slate-800 
                           text-black dark:text-white 
                           rounded-full border border-slate-300 dark:border-slate-600 
                           backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium 
                              bg-slate-300/50 dark:bg-slate-700/50 
                              text-slate-700 dark:text-slate-300 
                              rounded-full border border-slate-300/50 dark:border-slate-600/50 
                              backdrop-blur-sm">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${project.color} blur-xl opacity-20 dark:opacity-30`} />
        </div>
      </div>

      {/* 3D Shadow */}
      <div
        className="absolute inset-0 rounded-2xl md:rounded-3xl bg-white dark:bg-slate-900 blur-2xl 
                   transform translate-y-4 sm:translate-y-8 -z-10 
                   group-hover:translate-y-6 sm:group-hover:translate-y-12 transition-transform duration-500"
        style={{ transform: "translateZ(-50px) translateY(20px)" }}
      />
    </div>
  )
}
