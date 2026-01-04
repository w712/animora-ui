// Attention 动画预设 - 强调动画

import type { AnimationConfig } from '../../types'

export const pulse: AnimationConfig = {
  name: 'pulse',
  keyframes: [
    { transform: 'scale(1)' },
    { transform: 'scale(1.05)' },
    { transform: 'scale(1)' }
  ],
  duration: 500,
  easing: 'ease-in-out'
}

export const shake: AnimationConfig = {
  name: 'shake',
  keyframes: [
    { transform: 'translateX(0)' },
    { transform: 'translateX(-10px)' },
    { transform: 'translateX(10px)' },
    { transform: 'translateX(-10px)' },
    { transform: 'translateX(10px)' },
    { transform: 'translateX(0)' }
  ],
  duration: 500,
  easing: 'ease-in-out'
}

export const bounce: AnimationConfig = {
  name: 'bounce',
  keyframes: [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-20px)' },
    { transform: 'translateY(0)' },
    { transform: 'translateY(-10px)' },
    { transform: 'translateY(0)' }
  ],
  duration: 600,
  easing: 'ease-out'
}

export const swing: AnimationConfig = {
  name: 'swing',
  keyframes: [
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(15deg)' },
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(5deg)' },
    { transform: 'rotate(-5deg)' },
    { transform: 'rotate(0deg)' }
  ],
  duration: 600,
  easing: 'ease-in-out'
}

export const wobble: AnimationConfig = {
  name: 'wobble',
  keyframes: [
    { transform: 'translateX(0) rotate(0)' },
    { transform: 'translateX(-25%) rotate(-5deg)' },
    { transform: 'translateX(20%) rotate(3deg)' },
    { transform: 'translateX(-15%) rotate(-3deg)' },
    { transform: 'translateX(10%) rotate(2deg)' },
    { transform: 'translateX(-5%) rotate(-1deg)' },
    { transform: 'translateX(0) rotate(0)' }
  ],
  duration: 800,
  easing: 'ease-in-out'
}

export const heartBeat: AnimationConfig = {
  name: 'heartBeat',
  keyframes: [
    { transform: 'scale(1)' },
    { transform: 'scale(1.3)' },
    { transform: 'scale(1)' },
    { transform: 'scale(1.3)' },
    { transform: 'scale(1)' }
  ],
  duration: 800,
  easing: 'ease-in-out'
}

export const flash: AnimationConfig = {
  name: 'flash',
  keyframes: [
    { opacity: 1 },
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 },
    { opacity: 1 }
  ],
  duration: 600,
  easing: 'ease-in-out'
}

export const tada: AnimationConfig = {
  name: 'tada',
  keyframes: [
    { transform: 'scale(1) rotate(0)' },
    { transform: 'scale(0.9) rotate(-3deg)' },
    { transform: 'scale(1.1) rotate(3deg)' },
    { transform: 'scale(1.1) rotate(-3deg)' },
    { transform: 'scale(1.1) rotate(3deg)' },
    { transform: 'scale(1.1) rotate(-3deg)' },
    { transform: 'scale(1) rotate(0)' }
  ],
  duration: 800,
  easing: 'ease-in-out'
}
