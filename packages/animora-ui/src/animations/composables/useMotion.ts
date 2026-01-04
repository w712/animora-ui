// useMotion - 运动控制 Composable
// 提供响应式的运动属性，自动动画过渡

import { ref, watch, unref, onMounted, type Ref } from 'vue-demi'
import { getGSAPInstance } from '../core/gsap-adapter'

type MaybeRef<T> = T | Ref<T>

export interface MotionOptions {
  /** 过渡时长 (秒) */
  duration?: number
  /** 缓动函数 */
  ease?: string
  /** 是否使用 GSAP (如果可用) */
  useGSAP?: boolean
}

export interface MotionValues {
  x: Ref<number>
  y: Ref<number>
  scale: Ref<number>
  scaleX: Ref<number>
  scaleY: Ref<number>
  rotate: Ref<number>
  rotateX: Ref<number>
  rotateY: Ref<number>
  opacity: Ref<number>
  skewX: Ref<number>
  skewY: Ref<number>
}

/**
 * useMotion - 运动控制
 *
 * @example
 * ```vue
 * <template>
 *   <div ref="boxRef">Move me</div>
 *   <button @click="x = 100">Move Right</button>
 *   <button @click="scale = 1.5">Scale Up</button>
 * </template>
 *
 * <script setup>
 * const boxRef = ref(null)
 * const { x, y, scale, rotate, opacity } = useMotion(boxRef, {
 *   duration: 0.5,
 *   ease: 'power2.out'
 * })
 * </script>
 * ```
 */
export function useMotion(
  target: MaybeRef<HTMLElement | null>,
  options: MotionOptions = {}
): MotionValues & { set: (values: Partial<Record<keyof MotionValues, number>>) => void } {
  const { duration = 0.3, ease = 'ease-out', useGSAP = true } = options

  // 运动属性
  const x = ref(0)
  const y = ref(0)
  const scale = ref(1)
  const scaleX = ref(1)
  const scaleY = ref(1)
  const rotate = ref(0)
  const rotateX = ref(0)
  const rotateY = ref(0)
  const opacity = ref(1)
  const skewX = ref(0)
  const skewY = ref(0)

  // 应用变换
  const applyTransform = () => {
    const el = unref(target)
    if (!el) return

    const gsap = useGSAP ? getGSAPInstance() : null

    if (gsap) {
      // 使用 GSAP 动画
      gsap.to(el, {
        x: x.value,
        y: y.value,
        scale: scale.value,
        scaleX: scaleX.value,
        scaleY: scaleY.value,
        rotation: rotate.value,
        rotationX: rotateX.value,
        rotationY: rotateY.value,
        opacity: opacity.value,
        skewX: skewX.value,
        skewY: skewY.value,
        duration,
        ease
      })
    } else {
      // 使用 CSS transition
      el.style.transition = `transform ${duration}s ${ease}, opacity ${duration}s ${ease}`
      el.style.transform = buildTransform()
      el.style.opacity = String(opacity.value)
    }
  }

  // 构建 CSS transform 字符串
  const buildTransform = (): string => {
    const transforms: string[] = []

    if (x.value !== 0 || y.value !== 0) {
      transforms.push(`translate(${x.value}px, ${y.value}px)`)
    }
    if (scale.value !== 1) {
      transforms.push(`scale(${scale.value})`)
    } else {
      if (scaleX.value !== 1) transforms.push(`scaleX(${scaleX.value})`)
      if (scaleY.value !== 1) transforms.push(`scaleY(${scaleY.value})`)
    }
    if (rotate.value !== 0) {
      transforms.push(`rotate(${rotate.value}deg)`)
    }
    if (rotateX.value !== 0) {
      transforms.push(`rotateX(${rotateX.value}deg)`)
    }
    if (rotateY.value !== 0) {
      transforms.push(`rotateY(${rotateY.value}deg)`)
    }
    if (skewX.value !== 0 || skewY.value !== 0) {
      transforms.push(`skew(${skewX.value}deg, ${skewY.value}deg)`)
    }

    return transforms.length > 0 ? transforms.join(' ') : 'none'
  }

  // 批量设置值
  const set = (values: Partial<Record<keyof MotionValues, number>>) => {
    if (values.x !== undefined) x.value = values.x
    if (values.y !== undefined) y.value = values.y
    if (values.scale !== undefined) scale.value = values.scale
    if (values.scaleX !== undefined) scaleX.value = values.scaleX
    if (values.scaleY !== undefined) scaleY.value = values.scaleY
    if (values.rotate !== undefined) rotate.value = values.rotate
    if (values.rotateX !== undefined) rotateX.value = values.rotateX
    if (values.rotateY !== undefined) rotateY.value = values.rotateY
    if (values.opacity !== undefined) opacity.value = values.opacity
    if (values.skewX !== undefined) skewX.value = values.skewX
    if (values.skewY !== undefined) skewY.value = values.skewY
  }

  // 监听所有属性变化
  watch([x, y, scale, scaleX, scaleY, rotate, rotateX, rotateY, opacity, skewX, skewY], applyTransform)

  // 初始化
  onMounted(() => {
    const el = unref(target)
    if (el) {
      el.style.willChange = 'transform, opacity'
    }
  })

  return {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotate,
    rotateX,
    rotateY,
    opacity,
    skewX,
    skewY,
    set
  }
}
