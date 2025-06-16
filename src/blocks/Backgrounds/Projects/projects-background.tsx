"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ProjectsBackgroundProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function ProjectsBackground({ sectionRef }: ProjectsBackgroundProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(".bg-gradient", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [sectionRef])

  return (
    <>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient opacity-20">
        <div className="bg-gradient absolute inset-0 bg-gradient-to-r from-black via-gray to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="
  absolute inset-0 
  bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] 
  dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] 
  bg-[size:50px_50px]
"></div>

    </>
  )
}
