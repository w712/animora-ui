<template>
  <div
    :class="cardClass"
    :animation="animation"
    :style="tiltStyle"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      v-if="title || $slots.header"
      class="a-card__header"
    >
      <slot name="header">
        <span class="a-card__title">{{ title }}</span>
      </slot>
    </div>
    <div class="a-card__body">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="a-card__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue-demi'
import { cardProps } from './card'

defineOptions({ name: 'ACard' })

const props = defineProps(cardProps)

const tiltX = ref(0)
const tiltY = ref(0)

const cardClass = computed(() => [
  'a-card',
  `a-card--shadow-${props.shadow}`,
  {
    'a-card--bordered': props.bordered,
    [`a-card--${props.animation}`]: props.animation !== 'none'
  }
])

const tiltStyle = computed(() => {
  if (props.animation !== 'tilt') return {}
  return {
    transform: `perspective(1000px) rotateX(${tiltY.value}deg) rotateY(${tiltX.value}deg)`
  }
})

const handleMouseMove = (e: MouseEvent) => {
  if (props.animation !== 'tilt') return
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  tiltX.value = ((x - centerX) / centerX) * 10
  tiltY.value = ((centerY - y) / centerY) * 10
}

const handleMouseLeave = () => {
  tiltX.value = 0
  tiltY.value = 0
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
