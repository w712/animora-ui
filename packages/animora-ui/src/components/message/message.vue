<template>
  <Transition :name="`a-message-${animation}`" @after-leave="onAfterLeave">
    <div v-if="visible" :class="['a-message', `a-message--${type}`]">
      <span class="a-message__icon">{{ iconMap[type] }}</span>
      <span class="a-message__content">{{ message }}</span>
      <span v-if="showClose" class="a-message__close" @click="close">×</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { MessageType, MessageAnimation } from './message'

defineOptions({ name: 'AMessage' })

const props = withDefaults(defineProps<{
  message: string
  type?: MessageType
  duration?: number
  showClose?: boolean
  animation?: MessageAnimation
}>(), {
  type: 'info',
  duration: 3000,
  showClose: false,
  animation: 'slide'
})

const emit = defineEmits<{
  close: []
  destroy: []
}>()

const iconMap: Record<MessageType, string> = {
  success: '✓',
  warning: '⚠',
  error: '✕',
  info: 'ℹ'
}

const visible = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const close = () => {
  visible.value = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

const onAfterLeave = () => {
  emit('destroy')
}

const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(close, props.duration)
  }
}

onMounted(() => {
  visible.value = true
  startTimer()
})

defineExpose({ close })
</script>

<style lang="scss">
@import './style/index.scss';
</style>
