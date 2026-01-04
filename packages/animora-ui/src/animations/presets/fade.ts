// Fade 动画预设

import type { AnimationConfig } from '../../types'

export const fadeIn: AnimationConfig = {
  name: 'fadeIn',
  keyframes: [
    { opacity: 0 },
    { opacity: 1 }
  ],
  duration: 300,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    ease: 'power2.out'
  }
}

export const fadeOut: AnimationConfig = {
  name: 'fadeOut',
  keyframes: [
    { opacity: 1 },
    { opacity: 0 }
  ],
  duration: 300,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 1 },
    to: { opacity: 0 },
    ease: 'power2.out'
  }
}

export const fadeInUp: AnimationConfig = {
  name: 'fadeInUp',
  keyframes: [
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    ease: 'power2.out'
  }
}

export const fadeInDown: AnimationConfig = {
  name: 'fadeInDown',
  keyframes: [
    { opacity: 0, transform: 'translateY(-20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, y: -20 },
    to: { opacity: 1, y: 0 },
    ease: 'power2.out'
  }
}

export const fadeInLeft: AnimationConfig = {
  name: 'fadeInLeft',
  keyframes: [
    { opacity: 0, transform: 'translateX(-20px)' },
    { opacity: 1, transform: 'translateX(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    ease: 'power2.out'
  }
}

export const fadeInRight: AnimationConfig = {
  name: 'fadeInRight',
  keyframes: [
    { opacity: 0, transform: 'translateX(20px)' },
    { opacity: 1, transform: 'translateX(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
    ease: 'power2.out'
  }
}
