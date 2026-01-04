// useScrollAnimation - 滚动触发动画 Composable

import { ref, unref, onMounted, onUnmounted, type Ref } from 'vue-demi'
import { animate as runAnimate } from '../core/engine'
import type { AnimationOptions } from '../../types'

type MaybeRef<T> = T | Ref<T>

export interface ScrollAnimationOptions extends AnimationOptions {
  /** 触发阈值 0-1，元素可见比例 */
  threshold?: number
  /** 根元素边距 */
  rootMargin?: string
  /** 是否只触发一次 */
  once?: boolean
  /** 动画预设名称 */
  animation?: string
  /** 是否禁用 */
  disabled?: boolean
}

/**
 * useScrollAnimation - 滚动触发动画
 *
 * @example
 * ```vue
 * <template>
 *   <div ref="boxRef">Scroll to see me</div>
 * </template>
 *
 * <script setup>
 * const boxRef = ref(null)
 * const { isInView, progress } = useScrollAnimation(boxRef, {
 *   animation: 'fadeInUp',
 *   threshold: 0.5,
 *   once: true
 * })
 * </script>
 * ```
 */
export function useScrollAnimation(
  target: MaybeRef<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    animation = 'fadeIn',
    disabled = false,
    ...animationOptions
  } = options

  const isInView = ref(false)
  const hasAnimated = ref(false)
  const progress = ref(0)

  let observer: IntersectionObserver | null = null

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry) return

    // 更新进度
    progress.value = entry.intersectionRatio

    // 进入视口
    if (entry.isIntersecting) {
      isInView.value = true

      // 如果已经动画过且只触发一次，跳过
      if (once && hasAnimated.value) return

      // 执行动画
      const el = unref(target)
      if (el && animation) {
        runAnimate(el, animation, animationOptions)
        hasAnimated.value = true

        // 如果只触发一次，断开观察
        if (once) {
          observer?.disconnect()
        }
      }
    } else {
      isInView.value = false
    }
  }

  const startObserving = () => {
    if (disabled) return

    const el = unref(target)
    if (!el) return

    // 初始隐藏元素
    el.style.opacity = '0'

    observer = new IntersectionObserver(handleIntersect, {
      threshold: Array.isArray(threshold) ? threshold : [threshold],
      rootMargin
    })

    observer.observe(el)
  }

  const stopObserving = () => {
    observer?.disconnect()
    observer = null
  }

  const reset = () => {
    hasAnimated.value = false
    isInView.value = false
    progress.value = 0

    const el = unref(target)
    if (el) {
      el.style.opacity = '0'
    }

    // 重新开始观察
    stopObserving()
    startObserving()
  }

  onMounted(() => {
    startObserving()
  })

  onUnmounted(() => {
    stopObserving()
  })

  return {
    /** 元素是否在视口内 */
    isInView,
    /** 元素可见比例 0-1 */
    progress,
    /** 是否已执行过动画 */
    hasAnimated,
    /** 重置动画状态 */
    reset,
    /** 停止观察 */
    stop: stopObserving
  }
}
