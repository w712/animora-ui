// Flip 动画预设

import type { AnimationConfig } from '../../types'

export const flipInX: AnimationConfig = {
  name: 'flipInX',
  keyframes: [
    { opacity: 0, transform: 'perspective(400px) rotateX(90deg)' },
    { opacity: 1, transform: 'perspective(400px) rotateX(0)' }
  ],
  duration: 500,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, rotationX: 90 },
    to: { opacity: 1, rotationX: 0 },
    ease: 'power2.out'
  }
}

export const flipInY: AnimationConfig = {
  name: 'flipInY',
  keyframes: [
    { opacity: 0, transform: 'perspective(400px) rotateY(90deg)' },
    { opacity: 1, transform: 'perspective(400px) rotateY(0)' }
  ],
  duration: 500,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, rotationY: 90 },
    to: { opacity: 1, rotationY: 0 },
    ease: 'power2.out'
  }
}

export const flipOutX: AnimationConfig = {
  name: 'flipOutX',
  keyframes: [
    { opacity: 1, transform: 'perspective(400px) rotateX(0)' },
    { opacity: 0, transform: 'perspective(400px) rotateX(90deg)' }
  ],
  duration: 500,
  easing: 'ease-in'
}

export const flipOutY: AnimationConfig = {
  name: 'flipOutY',
  keyframes: [
    { opacity: 1, transform: 'perspective(400px) rotateY(0)' },
    { opacity: 0, transform: 'perspective(400px) rotateY(90deg)' }
  ],
  duration: 500,
  easing: 'ease-in'
}
