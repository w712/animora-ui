// v-animate 指令
// 用法: v-animate:fadeIn, v-animate:shake.hover, v-animate:slideInUp.scroll

import type { Directive, DirectiveBinding } from 'vue-demi'
import { animate } from '../core/engine'
import type { AnimationOptions } from '../../types'

interface AnimateBinding {
  arg?: string
  modifiers: Record<string, boolean>
  value?: AnimationOptions & {
    threshold?: number
    repeat?: boolean
  }
}

// 存储观察器引用，用于清理
const observerMap = new WeakMap<HTMLElement, IntersectionObserver>()

/**
 * 滚动观察器 - 元素进入视口时触发
 */
function observeScroll(
  el: HTMLElement,
  callback: () => void,
  options: { threshold?: number; repeat?: boolean } = {}
): void {
  const { threshold = 0.1, repeat = false } = options

  // 初始隐藏元素
  el.style.opacity = '0'

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        callback()
        if (!repeat) {
          observer.disconnect()
          observerMap.delete(el)
        }
      } else if (repeat) {
        // 如果允许重复，离开视口时重置透明度
        el.style.opacity = '0'
      }
    },
    { threshold }
  )

  observer.observe(el)
  observerMap.set(el, observer)
}

/**
 * v-animate 指令
 */
export const vAnimate: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<AnimationOptions>) {
    const { arg, modifiers, value } = binding as AnimateBinding
    const presetName = arg || 'fadeIn'
    const options = value || {}

    // 根据修饰符决定触发时机
    if (modifiers.hover) {
      // 悬停触发
      el.addEventListener('mouseenter', () => animate(el, presetName, options))
    } else if (modifiers.click) {
      // 点击触发
      el.addEventListener('click', () => animate(el, presetName, options))
    } else if (modifiers.scroll) {
      // 滚动进入视口触发
      observeScroll(el, () => animate(el, presetName, options), {
        threshold: options.threshold,
        repeat: options.repeat
      })
    } else {
      // 默认: 挂载时立即执行
      animate(el, presetName, options)
    }
  },

  unmounted(el: HTMLElement) {
    // 清理观察器
    const observer = observerMap.get(el)
    if (observer) {
      observer.disconnect()
      observerMap.delete(el)
    }
  }
}

export default vAnimate
