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

export function useProjectsAnimation({
  projectsWrapperRef,
  progressBarRef,
}: UseProjectsAnimationMinimalProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Atur posisi awal semua project-card
      gsap.set(".project-card", {
        x: 50,
        opacity: 0,
      })

      const wrapper = projectsWrapperRef.current
      const projectCards = gsap.utils.toArray(".project-card") as HTMLElement[]

      if (!wrapper || projectCards.length === 0) return

      const isMobile = window.innerWidth < 768
      const computedStyle = window.getComputedStyle(projectCards[0])
      const gap =
        parseFloat(computedStyle.marginRight) ||
        parseFloat(computedStyle.gap) ||
        0

      const cardWidth = (projectCards[0]?.offsetWidth ?? 320) + gap

      // Scroll distance = total scroll lebar - container lebar
      const scrollWidth = wrapper.scrollWidth
      const clientWidth = wrapper.clientWidth
      const scrollDistance = scrollWidth - clientWidth

      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 20%",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: true,
          // Aktifkan marker kalau mau debug
          // markers: true,
          onUpdate: (self) => {
            gsap.to(progressBarRef.current, {
              scaleX: self.progress,
              duration: 0.1,
            })
          },
        },
      })

      projectCards.forEach((card, index) => {
        // in animation
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

        // out animation
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
