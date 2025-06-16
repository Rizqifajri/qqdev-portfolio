'use client'

import { useEffect, useRef } from "react"
import { MarqueeExperience } from "./marquee-experience"
import { TechStack } from "./techstack"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { splitTextAnimation } from "@/utils/animations/split-text-animation"
import { ArrowUpFromDot } from "lucide-react"

export default function TechStackSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    splitTextAnimation(titleRef.current)
    splitTextAnimation(subtitleRef.current)

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center px-4 py-20 md:py-32 space-y-16">
      <div className="w-full max-w-6xl text-left space-y-6">
        <h1
          ref={titleRef}
          className="animate-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight"
        >
          Where I've Built?
        </h1>
        <p
          ref={subtitleRef}
          className="animate-text text-base sm:text-lg md:text-2xl lg:text-3xl font-light italic"
        >
          Architecting a career, one project at a time, <br className="hidden md:block" />
          founded on a deep expertise in these technologies.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
        <TechStack />
        <MarqueeExperience />
      </div>

      <ArrowUpFromDot
        width={48}
        height={48}
        className="absolute rotate-180 bottom-6 text-gray-400 animate-bounce"
      />
    </section>
  )
}
