"use client";

import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/useScrollSmooth";
import { ScrollTrigger, ScrollSmoother, SplitText } from "@/plugins";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import ProjectsSection3D from "@/components/project-section";
import TechStackSection from "@/components/tech-stack-section";
import ContactSection from "@/components/contact-section";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const App = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection3D />
        <ContactSection />
      </div>
    </div>
  )
};
export default App;