// useAnimate - 命令式动画 Composable

import { ref, unref, type Ref } from 'vue-demi'
import { animate as runAnimate, stopAnimation } from '../core/engine'
import type { AnimationOptions } from '../../types'

type MaybeRef<T> = T | Ref<T>

/**
 * useAnimate - 命令式动画控制
 *
 * @example
 * ```vue
 * <template>
 *   <div ref="boxRef">Animate me</div>
 *   <button @click="animate('shake')">Shake</button>
 * </template>
 *
 * <script setup>
 * const boxRef = ref(null)
 * const { animate, stop, isAnimating } = useAnimate(boxRef)
 * </script>
 * ```
 */
export function useAnimate(target: MaybeRef<HTMLElement | null>) {
  const isAnimating = ref(false)

  /**
   * 执行动画
   */
  const animate = async (
    preset: string,
    options?: AnimationOptions
  ): Promise<void> => {
    const el = unref(target)
    if (!el) return

    isAnimating.value = true

    return new Promise((resolve) => {
      runAnimate(el, preset, {
        ...options,
        onComplete: () => {
          isAnimating.value = false
          options?.onComplete?.()
          resolve()
        }
      })
    })
  }

  /**
   * 停止动画
   */
  const stop = (): void => {
    const el = unref(target)
    if (el) {
      stopAnimation(el)
    }
    isAnimating.value = false
  }

  return {
    animate,
    stop,
    isAnimating
  }
}
