import Link from "next/link";
import Lanyard from "./lanyard";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactSection() {
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
  })

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        <div className="flex-1 text-center lg:text-left">
          <h1 ref={titleRef} className="text-4xl md:text-7xl  font-bold leading-tight mb-4">
            Let's Build <br className="hidden md:block" /> Something Together
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl font-light italic text-white max-w-xl mx-auto lg:mx-0 mb-8">
            Feel free to reach out to me through the contact info below.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="" target="_blank">
              <Button className="cursor-pointer hover:scale-110 transition-all rounded-xl px-6 py-3 w-full sm:w-auto">LinkedIn</Button>
            </Link>
            <Link href="" target="_blank">
              <Button className="cursor-pointer hover:scale-110 transition-all rounded-xl px-6 py-3 w-full sm:w-auto">Instagram</Button>
            </Link>
            <Link href="">
              <Button className="cursor-pointer hover:scale-110 transition-all rounded-xl px-6 py-3 w-full sm:w-auto">Email</Button>
            </Link>
            <Link href="" target="_blank">
              <Button className="cursor-pointer hover:scale-110 transition-all rounded-xl px-6 py-3 w-full sm:w-auto">TikTok</Button>
            </Link>
          </div>
        </div>

        {/* LANYARD */}
        <div className="flex-1 w-full h-[400px] md:h-[600px] lg:h-[900px]">
          <Lanyard />
        </div>
      </div>
    </section>
  );
}
