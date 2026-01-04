// 动画系统统一导出

// 核心引擎
export {
  animate,
  stopAnimation,
  hasGSAP,
  getGSAP,
  // 全局配置
  setAnimationConfig,
  getAnimationConfig,
  resetAnimationConfig,
  shouldReduceMotion,
  // 自定义动画
  defineAnimation,
  // GSAP 适配器
  getGSAPInstance,
  isGSAPAvailable,
  gsapAnimate,
  gsapFromTo,
  createTimeline,
  gsapStagger
} from './core'

export type {
  GlobalAnimationConfig,
  DefineAnimationOptions,
  GSAPInstance,
  GSAPTarget,
  GSAPVars,
  GSAPStaggerVars,
  GSAPTimelineVars,
  GSAPTween,
  GSAPTimeline
} from './core'

// 预设动画
export {
  getPreset,
  registerPreset,
  getPresetNames,
  // Fade
  fadeIn,
  fadeOut,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  // Slide
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideOutUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  // Zoom
  zoomIn,
  zoomOut,
  zoomInUp,
  zoomInDown,
  // Flip
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  // Rotate
  rotateIn,
  rotateOut,
  rotateInDownLeft,
  rotateInDownRight,
  // Bounce
  bounceIn,
  bounceOut,
  bounceInUp,
  bounceInDown,
  // Attention
  pulse,
  shake,
  bounce,
  swing,
  wobble,
  heartBeat,
  flash,
  tada
} from './presets'

// 指令
export { vAnimate } from './directive'

// Composables
export { useAnimate, useScrollAnimation, useMotion } from './composables'
export type { ScrollAnimationOptions, MotionOptions, MotionValues } from './composables'
