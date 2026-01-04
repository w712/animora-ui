// Bounce 动画预设 - 弹跳进入/退出

import type { AnimationConfig } from '../../types'

export const bounceIn: AnimationConfig = {
  name: 'bounceIn',
  keyframes: [
    { opacity: 0, transform: 'scale(0.3)' },
    { transform: 'scale(1.05)' },
    { transform: 'scale(0.9)' },
    { opacity: 1, transform: 'scale(1)' }
  ],
  duration: 600,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, scale: 0.3 },
    to: { opacity: 1, scale: 1 },
    ease: 'elastic.out(1, 0.5)'
  }
}

export const bounceOut: AnimationConfig = {
  name: 'bounceOut',
  keyframes: [
    { transform: 'scale(1)' },
    { transform: 'scale(0.9)' },
    { transform: 'scale(1.05)' },
    { opacity: 0, transform: 'scale(0.3)' }
  ],
  duration: 600,
  easing: 'ease-in'
}

export const bounceInUp: AnimationConfig = {
  name: 'bounceInUp',
  keyframes: [
    { opacity: 0, transform: 'translateY(100px)' },
    { transform: 'translateY(-20px)' },
    { transform: 'translateY(10px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ],
  duration: 600,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    ease: 'bounce.out'
  }
}

export const bounceInDown: AnimationConfig = {
  name: 'bounceInDown',
  keyframes: [
    { opacity: 0, transform: 'translateY(-100px)' },
    { transform: 'translateY(20px)' },
    { transform: 'translateY(-10px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ],
  duration: 600,
  easing: 'ease-out',
  gsap: {
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },
    ease: 'bounce.out'
  }
}
