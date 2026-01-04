<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    :animation="animation"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="loading" class="a-button__loading">
      <svg class="a-button__loading-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="31.4" stroke-linecap="round" />
      </svg>
    </span>
    <span class="a-button__content">
      <slot />
    </span>
    <!-- 涟漪效果容器 -->
    <span v-if="animation === 'ripple'" ref="rippleRef" class="a-button__ripple-container" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue-demi'
import { buttonProps, buttonEmits } from './button'

defineOptions({ name: 'AButton' })

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const rippleRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)

// 计算按钮类名
const buttonClass = computed(() => {
  return [
    'a-button',
    `a-button--${props.type}`,
    `a-button--${props.size}`,
    {
      'is-disabled': props.disabled,
      'is-loading': props.loading,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-hovered': isHovered.value,
      [`a-button--hover-${props.hoverAnimation}`]: props.hoverAnimation !== 'none'
    }
  ]
})

// 点击处理
const handleClick = (e: MouseEvent) => {
  if (props.disabled || props.loading) return

  // 涟漪动画
  if (props.animation === 'ripple' && rippleRef.value) {
    createRipple(e)
  }

  emit('click', e)
}

// 创建涟漪效果
const createRipple = (e: MouseEvent) => {
  const button = e.currentTarget as HTMLElement
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = e.clientX - rect.left - size / 2
  const y = e.clientY - rect.top - size / 2

  const ripple = document.createElement('span')
  ripple.className = 'a-button__ripple'
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  rippleRef.value?.appendChild(ripple)

  ripple.addEventListener('animationend', () => {
    ripple.remove()
  })
}

// 悬停处理
const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
