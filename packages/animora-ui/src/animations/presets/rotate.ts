// Rotate 动画预设

import type { AnimationConfig } from '../../types'

export const rotateIn: AnimationConfig = {
  name: 'rotateIn',
  keyframes: [
    { opacity: 0, transform: 'rotate(-200deg)' },
    { opacity: 1, transform: 'rotate(0)' }
  ],
  duration: 500,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, rotation: -200 },
    to: { opacity: 1, rotation: 0 },
    ease: 'power2.out'
  }
}

export const rotateOut: AnimationConfig = {
  name: 'rotateOut',
  keyframes: [
    { opacity: 1, transform: 'rotate(0)' },
    { opacity: 0, transform: 'rotate(200deg)' }
  ],
  duration: 500,
  easing: 'ease-in'
}

export const rotateInDownLeft: AnimationConfig = {
  name: 'rotateInDownLeft',
  keyframes: [
    { opacity: 0, transform: 'rotate(-45deg)', transformOrigin: 'left bottom' },
    { opacity: 1, transform: 'rotate(0)', transformOrigin: 'left bottom' }
  ],
  duration: 500,
  easing: 'ease-out'
}

export const rotateInDownRight: AnimationConfig = {
  name: 'rotateInDownRight',
  keyframes: [
    { opacity: 0, transform: 'rotate(45deg)', transformOrigin: 'right bottom' },
    { opacity: 1, transform: 'rotate(0)', transformOrigin: 'right bottom' }
  ],
  duration: 500,
  easing: 'ease-out'
}
