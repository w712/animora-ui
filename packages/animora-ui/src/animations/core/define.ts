// 自定义动画 API

import type { AnimationConfig, GSAPConfig } from '../../types'
import { registerPreset } from '../presets'

export interface DefineAnimationOptions {
  /** 动画名称 */
  name: string
  /** CSS keyframes */
  keyframes?: Keyframe[]
  /** 动画时长 (ms) */
  duration?: number
  /** 缓动函数 */
  easing?: string
  /** 填充模式 */
  fill?: FillMode
  /** GSAP 配置 */
  gsap?: GSAPConfig
  /** JS 动画函数 (用于复杂动画) */
  animate?: (el: HTMLElement, done: () => void) => void
}

/**
 * 定义自定义动画
 * @example
 * // CSS 动画
 * const myShake = defineAnimation({
 *   name: 'myShake',
 *   keyframes: [
 *     { transform: 'translateX(0)' },
 *     { transform: 'translateX(-10px)' },
 *     { transform: 'translateX(10px)' },
 *     { transform: 'translateX(0)' }
 *   ],
 *   duration: 500,
 *   easing: 'ease-in-out'
 * })
 *
 * // JS 动画 (GSAP)
 * const myBounce = defineAnimation({
 *   name: 'myBounce',
 *   animate: (el, done) => {
 *     gsap.to(el, { y: -20, duration: 0.3, yoyo: true, repeat: 1, onComplete: done })
 *   }
 * })
 */
export function defineAnimation(options: DefineAnimationOptions): AnimationConfig {
  const { name, keyframes, duration = 300, easing = 'ease-out', fill = 'forwards', gsap, animate } = options

  // 如果提供了 JS 动画函数，包装成 keyframes
  const finalKeyframes = keyframes || (animate ? [] : [{ opacity: 1 }, { opacity: 1 }])

  const config: AnimationConfig & { animate?: (el: HTMLElement, done: () => void) => void } = {
    name,
    keyframes: finalKeyframes,
    duration,
    easing,
    fill,
    gsap
  }

  // 保存 JS 动画函数
  if (animate) {
    (config as unknown as Record<string, unknown>).animate = animate
  }

  // 自动注册到预设库
  registerPreset(name, config)

  return config
}
