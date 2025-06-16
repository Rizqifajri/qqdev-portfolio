"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface UseProjectsAnimationMinimalProps {
  projectsWrapperRef: React.RefObject<HTMLDivElement>
  progressBarRef: React.RefObject<HTMLDivElement>
}

export function useProjectsAnimation({ projectsWrapperRef, progressBarRef }: UseProjectsAnimationMinimalProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".project-card", {
        x: 50,
        opacity: 0,
      })

      const projectCards = gsap.utils.toArray(".project-card") as HTMLElement[]
      const isMobile = window.innerWidth < 768
      const cardWidth = isMobile ? 320 : projectCards[0]?.offsetWidth
      const totalWidth = projectCards.length * cardWidth

      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsWrapperRef.current,
          start: "top 20%",
          end: `+=${totalWidth * 3}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            gsap.to(progressBarRef.current, {
              scaleX: self.progress,
              duration: 0.1,
            })
          },
        },
      })

      projectCards.forEach((card, index) => {
        horizontalTl.to(
          card,
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          index * 0.1,
        )

        if (index < projectCards.length - 1) {
          horizontalTl.to(
            card,
            {
              x: -cardWidth * 1.2,
              opacity: 0.7,
              duration: 0.8,
              ease: "power2.inOut",
            },
            index * 0.1 + 0.6,
          )
        }
      })
    })

    return () => ctx.revert()
  }, [projectsWrapperRef, progressBarRef])
}
