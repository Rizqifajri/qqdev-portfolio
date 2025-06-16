"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import emoji from "@/assets/emoji/emoji-about.png"

gsap.registerPlugin(ScrollTrigger)

export const AboutSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const emojiRef = useRef<HTMLDivElement>(null)
  const leftSectionRef = useRef<HTMLDivElement>(null)
  const rightSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const emoji = emojiRef.current
    const leftSection = leftSectionRef.current
    const rightSection = rightSectionRef.current

    if (title) {
      const text = title.textContent || ""
      title.innerHTML = text
        .split("")
        .map((char) =>
          char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
        )
        .join("")


      gsap.from(title.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          end: "top 35%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.05,
      })
    }

    if (subtitle) {
      const text = subtitle.textContent || ""
      subtitle.innerHTML = text
        .split("")
        .map((char) =>
          char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
        )
        .join("")

  
      gsap.from(subtitle.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: subtitle,
          start: "top 85%",
          end: "top 35%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.05,
      })
    }

    if (emoji) {
      gsap.from(emoji, {
        scrollTrigger: {
          trigger: emoji,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
        y: -100,
        opacity: 0,
        duration: 0.6,
      })
    }

    if (leftSection) {
      gsap.from(leftSection, {
        scrollTrigger: {
          trigger: leftSection,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
        x: -100,
        opacity: 0,
        duration: 0.5,
      })
    }

    if (rightSection) {
      gsap.from(rightSection, {
        scrollTrigger: {
          trigger: rightSection,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
        x: 100,
        opacity: 0,
        duration: 1.5,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="about" className=" flex flex-col h-screen items-center justify-center space-y-10">
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
