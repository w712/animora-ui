// 全局动画配置

export interface GlobalAnimationConfig {
  /** 默认动画时长 (ms) */
  duration: number
  /** 默认缓动函数 */
  easing: string
  /** 默认延迟 (ms) */
  delay: number
  /** 交错动画间隔 (ms) */
  stagger: number
  /** 减少动画模式: 'auto' 跟随系统, true 强制减少, false 忽略 */
  reduceMotion: 'auto' | boolean
}

// 默认配置
const defaultConfig: GlobalAnimationConfig = {
  duration: 300,
  easing: 'ease-out',
  delay: 0,
  stagger: 50,
  reduceMotion: 'auto'
}

// 当前配置
let currentConfig: GlobalAnimationConfig = { ...defaultConfig }

/**
 * 设置全局动画配置
 */
export function setAnimationConfig(config: Partial<GlobalAnimationConfig>): void {
  currentConfig = { ...currentConfig, ...config }
}

/**
 * 获取全局动画配置
 */
export function getAnimationConfig(): GlobalAnimationConfig {
  return { ...currentConfig }
}

/**
 * 重置为默认配置
 */
export function resetAnimationConfig(): void {
  currentConfig = { ...defaultConfig }
}

/**
 * 检测是否应该减少动画
 */
export function shouldReduceMotion(): boolean {
  if (currentConfig.reduceMotion === true) return true
  if (currentConfig.reduceMotion === false) return false

  // auto: 跟随系统设置
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}
