// 动画相关类型定义

/**
 * 动画配置
 */
export interface AnimationConfig {
  /** 动画名称 */
  name: string
  /** CSS keyframes */
  keyframes: Keyframe[]
  /** 动画时长 (ms) */
  duration?: number
  /** 缓动函数 */
  easing?: string
  /** 延迟 (ms) */
  delay?: number
  /** 填充模式 */
  fill?: FillMode
  /** GSAP 配置 (可选) */
  gsap?: GSAPConfig
}

/**
 * GSAP 动画配置
 */
export interface GSAPConfig {
  from?: Record<string, unknown>
  to?: Record<string, unknown>
  duration?: number
  ease?: string
  delay?: number
  yoyo?: boolean
  repeat?: number
}

/**
 * 动画选项
 */
export interface AnimationOptions {
  duration?: number
  easing?: string
  delay?: number
  onStart?: () => void
  onComplete?: () => void
}

/**
 * 预设动画名称
 */
export type PresetName =
  // Fade
  | 'fadeIn' | 'fadeOut' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight'
  // Slide
  | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight'
  | 'slideOutUp' | 'slideOutDown' | 'slideOutLeft' | 'slideOutRight'
  // Zoom
  | 'zoomIn' | 'zoomOut' | 'zoomInUp' | 'zoomInDown'
  // Bounce
  | 'bounceIn' | 'bounceOut' | 'bounceInUp' | 'bounceInDown'
  // Flip
  | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY'
  // Rotate
  | 'rotateIn' | 'rotateOut'
  // Attention
  | 'pulse' | 'shake' | 'bounce' | 'swing' | 'wobble' | 'jello' | 'heartBeat' | 'flash' | 'tada'
  // Special
  | 'ripple' | 'glow' | 'stream' | 'float'
