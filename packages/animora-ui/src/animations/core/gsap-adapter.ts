// GSAP 适配器
// 提供 GSAP 动画的封装和类型安全

import type { AnimationOptions } from '../../types'

// GSAP 类型定义
export interface GSAPInstance {
  to: (target: GSAPTarget, vars: GSAPVars) => GSAPTween
  from: (target: GSAPTarget, vars: GSAPVars) => GSAPTween
  fromTo: (target: GSAPTarget, fromVars: GSAPVars, toVars: GSAPVars) => GSAPTween
  set: (target: GSAPTarget, vars: GSAPVars) => GSAPTween
  timeline: (vars?: GSAPTimelineVars) => GSAPTimeline
  registerPlugin: (...plugins: unknown[]) => void
}

export type GSAPTarget = HTMLElement | HTMLElement[] | string

export interface GSAPVars {
  duration?: number
  delay?: number
  ease?: string
  x?: number | string
  y?: number | string
  scale?: number
  scaleX?: number
  scaleY?: number
  rotation?: number
  rotationX?: number
  rotationY?: number
  opacity?: number
  transformOrigin?: string
  stagger?: number | GSAPStaggerVars
  yoyo?: boolean
  repeat?: number
  onStart?: () => void
  onComplete?: () => void
  onUpdate?: () => void
  [key: string]: unknown
}

export interface GSAPStaggerVars {
  each?: number
  from?: 'start' | 'end' | 'center' | 'edges' | 'random' | number
  grid?: [number, number] | 'auto'
  axis?: 'x' | 'y'
}

export interface GSAPTimelineVars {
  defaults?: GSAPVars
  paused?: boolean
  repeat?: number
  yoyo?: boolean
  onComplete?: () => void
}

export interface GSAPTween {
  play: () => GSAPTween
  pause: () => GSAPTween
  reverse: () => GSAPTween
  restart: () => GSAPTween
  kill: () => void
  progress: (value?: number) => number | GSAPTween
  duration: (value?: number) => number | GSAPTween
  time: (value?: number) => number | GSAPTween
}

export interface GSAPTimeline extends GSAPTween {
  to: (target: GSAPTarget, vars: GSAPVars, position?: string | number) => GSAPTimeline
  from: (target: GSAPTarget, vars: GSAPVars, position?: string | number) => GSAPTimeline
  fromTo: (target: GSAPTarget, fromVars: GSAPVars, toVars: GSAPVars, position?: string | number) => GSAPTimeline
  add: (child: GSAPTween | GSAPTimeline | (() => void), position?: string | number) => GSAPTimeline
}

/**
 * 获取 GSAP 实例（类型安全）
 */
export function getGSAPInstance(): GSAPInstance | null {
  if (typeof window !== 'undefined' && 'gsap' in window) {
    return (window as unknown as { gsap: GSAPInstance }).gsap
  }
  return null
}

/**
 * 检测 GSAP 是否可用
 */
export function isGSAPAvailable(): boolean {
  return getGSAPInstance() !== null
}

/**
 * GSAP 动画封装
 */
export function gsapAnimate(
  el: HTMLElement | HTMLElement[],
  vars: GSAPVars,
  options?: AnimationOptions
): GSAPTween | null {
  const gsap = getGSAPInstance()
  if (!gsap) {
    console.warn('[Animora] GSAP not found. Please install gsap: npm install gsap')
    return null
  }

  return gsap.to(el, {
    ...vars,
    onStart: options?.onStart,
    onComplete: options?.onComplete
  })
}

/**
 * GSAP fromTo 动画封装
 */
export function gsapFromTo(
  el: HTMLElement | HTMLElement[],
  fromVars: GSAPVars,
  toVars: GSAPVars,
  options?: AnimationOptions
): GSAPTween | null {
  const gsap = getGSAPInstance()
  if (!gsap) return null

  return gsap.fromTo(el, fromVars, {
    ...toVars,
    onStart: options?.onStart,
    onComplete: options?.onComplete
  })
}

/**
 * 创建 GSAP 时间线
 */
export function createTimeline(vars?: GSAPTimelineVars): GSAPTimeline | null {
  const gsap = getGSAPInstance()
  if (!gsap) return null

  return gsap.timeline(vars)
}

/**
 * 交错动画
 */
export function gsapStagger(
  els: HTMLElement[],
  vars: GSAPVars,
  stagger: number | GSAPStaggerVars = 0.1
): GSAPTween | null {
  const gsap = getGSAPInstance()
  if (!gsap) return null

  return gsap.to(els, {
    ...vars,
    stagger
  })
}
