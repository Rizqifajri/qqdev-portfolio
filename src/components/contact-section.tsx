'use client'

import Link from "next/link"
import Lanyard from "./lanyard"
import { Button } from "./ui/button"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { splitTextAnimation } from "@/utils/animations/split-text-animation"
import { fadeIn } from "@/utils/animations/gsap-animation"

export default function ContactSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    splitTextAnimation(titleRef.current)
    fadeIn(subtitleRef.current)

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-white dark:bg-black text-white px-4 sm:px-8 md:px-16 py-16 flex flex-col justify-center">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="grid grid-cols-1 dark:text-white text-black md:grid-cols-2 items-center justify-betweenw w-fit mx-auto lg:mx-52">

        <div className="flex-1 w-full text-center lg:text-left">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 whitespace-pre-line"
          >
            {"Let's Build\nSomething Together"}
          </h1>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl font-light italic max-w-xl mx-auto lg:mx-0 mb-10"
          >
            Feel free to reach out to me through the contact info below.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {["LinkedIn", "Instagram", "Email", "TikTok"].map((label, index) => (
              <Link href="#" key={index} target="_blank">
                <Button
                  className="hover:scale-105 active:scale-95 active:translate-y-0.5 border-t-gray bg-white text-black hover:text-white border-b-2 border-r-2 border-black transition-all duration-150 rounded-md px-6 py-3 w-full sm:w-auto shadow-md active:shadow-inner"
                >
                  {label}
                </Button>

              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
          <Lanyard />
        </div>
      </div>

    </section>

  )
}
