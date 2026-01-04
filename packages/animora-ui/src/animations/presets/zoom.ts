// Zoom 动画预设

import type { AnimationConfig } from '../../types'

export const zoomIn: AnimationConfig = {
  name: 'zoomIn',
  keyframes: [
    { opacity: 0, transform: 'scale(0.3)' },
    { opacity: 1, transform: 'scale(1)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, scale: 0.3 },
    to: { opacity: 1, scale: 1 },
    ease: 'back.out(1.7)'
  }
}

export const zoomOut: AnimationConfig = {
  name: 'zoomOut',
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.3)' }
  ],
  duration: 400,
  easing: 'ease-in'
}

export const zoomInUp: AnimationConfig = {
  name: 'zoomInUp',
  keyframes: [
    { opacity: 0, transform: 'scale(0.3) translateY(100px)' },
    { opacity: 1, transform: 'scale(1) translateY(0)' }
  ],
  duration: 500,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, scale: 0.3, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    ease: 'back.out(1.7)'
  }
}

export const zoomInDown: AnimationConfig = {
  name: 'zoomInDown',
  keyframes: [
    { opacity: 0, transform: 'scale(0.3) translateY(-100px)' },
    { opacity: 1, transform: 'scale(1) translateY(0)' }
  ],
  duration: 500,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, scale: 0.3, y: -100 },
    to: { opacity: 1, scale: 1, y: 0 },
    ease: 'back.out(1.7)'
  }
}
