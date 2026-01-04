// 动画核心模块导出

export { animate, stopAnimation, hasGSAP, getGSAP } from './engine'
export { setAnimationConfig, getAnimationConfig, resetAnimationConfig, shouldReduceMotion } from './config'
export type { GlobalAnimationConfig } from './config'
export { defineAnimation } from './define'
export type { DefineAnimationOptions } from './define'
export {
  getGSAPInstance,
  isGSAPAvailable,
  gsapAnimate,
  gsapFromTo,
  createTimeline,
  gsapStagger
} from './gsap-adapter'
export type {
  GSAPInstance,
  GSAPTarget,
  GSAPVars,
  GSAPStaggerVars,
  GSAPTimelineVars,
  GSAPTween,
  GSAPTimeline
} from './gsap-adapter'
