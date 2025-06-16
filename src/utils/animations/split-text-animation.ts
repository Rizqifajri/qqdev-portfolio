'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const splitTextAnimation = (element: HTMLElement | null, options = {}) => {
  if (!element) return

  const text = element.textContent || ''
  element.innerHTML = text
    .split('')
    .map((char) =>
      char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    )
    .join('')

  gsap.from(element.querySelectorAll('span'), {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 35%',
      scrub: true,
    },
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.05,
    ...options,
  })
}
