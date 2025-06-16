import { useEffect, useRef } from "react";
import { MarqueeExperience } from "./marquee-experience";
import { TechStack } from "./techstack";
import { title } from "process";
import gsap from "gsap";

export default function TechStackSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current

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
        duration: 1,
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
        duration: 1,
        stagger: 0.05,
      })
  }
  }, [])
  

  return (
    <section className=" flex flex-col h-screen items-center justify-center py-10">
      <div className="container md:ml-24 w-full p-3 text-left flex-col">
        <h1 ref={titleRef} className="animate-text text-4xl md:text-8xl font-semibold text-left">
          Where I've Built ?
        </h1>
        <p ref={subtitleRef} className="animate-text text-xl md:text-4xl font-light italic">Architecting a career, one project at a time, <br />founded on a deep expertise in these technologies.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-fit items-center justify-center">
        <TechStack />
        <MarqueeExperience />
      </div>

    </section>
  );
}