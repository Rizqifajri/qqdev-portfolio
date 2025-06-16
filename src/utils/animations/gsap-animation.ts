'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeIn = (element: HTMLElement | null, options = {}) => {
  if (!element) return

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
    opacity: 0,
    duration: 0.8,
    ...options,
  })
}

export const slideFromLeft = (element: HTMLElement | null, options = {}) => {
  if (!element) return

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ...options,
  })
}


export const slideFromRight = (element: HTMLElement | null, options = {}) => {
  if (!element) return

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ...options,
  })
}
