'use client'

import { useRef, useEffect } from "react"
import Image from "next/image"
import emoji from "@/assets/emoji/emoji-about.png"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { splitTextAnimation } from "@/utils/animations/split-text-animation"
import { fadeIn, slideFromLeft, slideFromRight } from "@/utils/animations/gsap-animation"

export const AboutSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const emojiRef = useRef<HTMLDivElement>(null)
  const leftSectionRef = useRef<HTMLDivElement>(null)
  const rightSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    splitTextAnimation(titleRef.current)
    splitTextAnimation(subtitleRef.current)

    fadeIn(emojiRef.current, { y: -100, duration: 0.6 })
    slideFromLeft(leftSectionRef.current, { duration: 0.5 })
    slideFromRight(rightSectionRef.current, { duration: 1.5 })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="about" className="relative flex flex-col h-screen items-center justify-center space-y-10">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <h1
        ref={titleRef}
        className="animated-text text-2xl md:text-7xl font-semibold text-center"
      >
        I'm a Frontend Developer
      </h1>

      <div ref={emojiRef} className="animated-emoji">
        <Image src={emoji} alt="emoji" className="w-40 md:w-60 mx-auto" />
      </div>

      <p
        ref={subtitleRef}
        className="text-center italic font-light w-full px-4 text-sm sm:text-base md:text-xl lg:text-2xl mx-auto"
      >
        "I'm the bridge between creative ideas and technical execution, turning thoughtful design into clean, interactive code."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div
          ref={leftSectionRef}
          className="flex flex-col bg-black text-white p-3"
        >
          <h1 className="text-5xl md:text-9xl font-semibold text-left">
            Art & <br />
            Aesthetics.
          </h1>
          <p className="text-left font-light mt-4 md:text-7xl">
            "Great digital experiences are born from beautiful, intuitive design."
          </p>
        </div>

        <div
          ref={rightSectionRef}
          className="flex flex-col bg-white text-black p-3"
        >
          <h1 className="text-5xl md:text-9xl font-semibold text-right">
            Logic & <br />
            Structure.
          </h1>
          <p className="text-right font-light mt-4 md:text-7xl">
            "And brought to life with clean, efficient, and scalable code."
          </p>
        </div>
      </div>
    </section>
  )
}
