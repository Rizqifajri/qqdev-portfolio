import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import emoji from '@/assets/emoji/emoji-skuy.png'
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col h-screen items-center justify-center pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <Image src={emoji} alt="emoji" className="z-10 w-56 md:w-96 md:h-96" />
      <SplitText
        text="Hi, I'm Qiqi. A Digital Architect."
        className="z-10 text-2xl md:text-5xl lg:text-6xl font-semibold text-center h-60"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </section>
  );
};
