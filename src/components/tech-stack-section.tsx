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
    <section className="relative flex flex-col h-screen items-center justify-center py-10">
      <div className="container md:ml-24 w-full p-3 text-left flex-col">
        <h1 ref={titleRef} className="animate-text text-4xl md:text-8xl font-semibold text-left">
          Where I've Built ?
        </h1>
        <p ref={subtitleRef} className="animate-text text-xl md:text-4xl font-light italic">
          Architecting a career, one project at a time, <br />
          founded on a deep expertise in these technologies.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-fit items-center justify-center">
        <TechStack />
        <MarqueeExperience />
      </div>
      <ArrowUpFromDot width={60} height={60} className="absolute rotate-180 bottom-10 animate-bounce" />
    </section>
  )
}
