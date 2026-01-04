// Slide 动画预设

import type { AnimationConfig } from '../../types'

export const slideInUp: AnimationConfig = {
  name: 'slideInUp',
  keyframes: [
    { transform: 'translateY(100%)' },
    { transform: 'translateY(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { y: '100%' },
    to: { y: 0 },
    ease: 'power2.out'
  }
}

export const slideInDown: AnimationConfig = {
  name: 'slideInDown',
  keyframes: [
    { transform: 'translateY(-100%)' },
    { transform: 'translateY(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { y: '-100%' },
    to: { y: 0 },
    ease: 'power2.out'
  }
}

export const slideInLeft: AnimationConfig = {
  name: 'slideInLeft',
  keyframes: [
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { x: '-100%' },
    to: { x: 0 },
    ease: 'power2.out'
  }
}

export const slideInRight: AnimationConfig = {
  name: 'slideInRight',
  keyframes: [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(0)' }
  ],
  duration: 400,
  easing: 'ease-out',
  gsap: {
    from: { x: '100%' },
    to: { x: 0 },
    ease: 'power2.out'
  }
}

export const slideOutUp: AnimationConfig = {
  name: 'slideOutUp',
  keyframes: [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
  ],
  duration: 400,
  easing: 'ease-in'
}

export const slideOutDown: AnimationConfig = {
  name: 'slideOutDown',
  keyframes: [
    { transform: 'translateY(0)' },
    { transform: 'translateY(100%)' }
  ],
  duration: 400,
  easing: 'ease-in'
}

export const slideOutLeft: AnimationConfig = {
  name: 'slideOutLeft',
  keyframes: [
    { transform: 'translateX(0)' },
    { transform: 'translateX(-100%)' }
  ],
  duration: 400,
  easing: 'ease-in'
}

export const slideOutRight: AnimationConfig = {
  name: 'slideOutRight',
  keyframes: [
    { transform: 'translateX(0)' },
    { transform: 'translateX(100%)' }
  ],
  duration: 400,
  easing: 'ease-in'
}
