// 动画引擎 - 核心执行器
// 自动检测 GSAP，无则降级为 CSS Animation

import type { AnimationConfig, AnimationOptions } from '../../types'
import { getPreset } from '../presets'
import { getAnimationConfig, shouldReduceMotion } from './config'

/**
 * 检测 GSAP 是否可用
 */
export const hasGSAP = (): boolean => {
  return typeof window !== 'undefined' && 'gsap' in window
}

/**
 * 获取 GSAP 实例
 */
export const getGSAP = () => {
  if (hasGSAP()) {
    return (window as unknown as { gsap: unknown }).gsap
  }
  return null
}

/**
 * 统一动画执行器
 * @param el - 目标元素
 * @param preset - 预设名称或动画配置
 * @param options - 动画选项
 */
export function animate(
  el: HTMLElement,
  preset: string | AnimationConfig,
  options?: AnimationOptions
): Animation | null {
  if (!el) return null

  // 检查是否应该减少动画
  if (shouldReduceMotion()) {
    options?.onStart?.()
    options?.onComplete?.()
    return null
  }

  // 获取动画配置
  const config = typeof preset === 'string' ? getPreset(preset) : preset
  if (!config) {
    console.warn(`[Animora] Animation preset "${preset}" not found`)
    return null
  }

  // 检查是否有 JS 动画函数
  const jsAnimate = (config as unknown as Record<string, unknown>).animate as ((el: HTMLElement, done: () => void) => void) | undefined
  if (jsAnimate) {
    options?.onStart?.()
    jsAnimate(el, () => options?.onComplete?.())
    return null
  }

  // 获取全局配置
  const globalConfig = getAnimationConfig()

  // 合并选项
  const mergedOptions = {
    duration: options?.duration ?? config.duration ?? globalConfig.duration,
    easing: options?.easing ?? config.easing ?? globalConfig.easing,
    delay: options?.delay ?? config.delay ?? globalConfig.delay
  }

  // 优先使用 GSAP（如果可用且有 GSAP 配置）
  if (hasGSAP() && config.gsap) {
    return animateWithGSAP(el, config, mergedOptions, options)
  }

  // 降级使用 CSS Animation
  return animateWithCSS(el, config, mergedOptions, options)
}

/**
 * CSS Animation 实现
 */
function animateWithCSS(
  el: HTMLElement,
  config: AnimationConfig,
  mergedOptions: { duration: number; easing: string; delay: number },
  options?: AnimationOptions
): Animation {
  const { duration, easing, delay } = mergedOptions

  options?.onStart?.()

  const animation = el.animate(config.keyframes, {
    duration,
    easing,
    delay,
    fill: config.fill ?? 'forwards'
  })

  animation.onfinish = () => {
    options?.onComplete?.()
  }

  return animation
}

/**
 * GSAP Animation 实现
 */
function animateWithGSAP(
  el: HTMLElement,
  config: AnimationConfig,
  mergedOptions: { duration: number; easing: string; delay: number },
  options?: AnimationOptions
): Animation | null {
  const gsap = getGSAP() as {
    to: (el: HTMLElement, config: Record<string, unknown>) => unknown
    fromTo: (el: HTMLElement, from: Record<string, unknown>, to: Record<string, unknown>) => unknown
  }

  if (!gsap || !config.gsap) return null

  const gsapConfig = {
    ...config.gsap.to,
    duration: mergedOptions.duration / 1000,
    ease: config.gsap.ease ?? 'power2.out',
    delay: mergedOptions.delay / 1000,
    onStart: options?.onStart,
    onComplete: options?.onComplete
  }

  if (config.gsap.from) {
    gsap.fromTo(el, config.gsap.from, gsapConfig)
  } else {
    gsap.to(el, gsapConfig)
  }

  // GSAP 不返回标准 Animation 对象，返回 null
  return null
}

/**
 * 停止元素上的所有动画
 */
export function stopAnimation(el: HTMLElement): void {
  if (!el) return
  el.getAnimations().forEach((animation) => animation.cancel())
}
