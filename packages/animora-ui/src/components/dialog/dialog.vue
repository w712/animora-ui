<template>
  <Teleport to="body">
    <Transition :name="`a-dialog-${animation}`">
      <div v-if="modelValue" class="a-dialog-overlay" @click.self="handleOverlayClick">
        <div class="a-dialog" :style="{ width }">
          <div v-if="title || $slots.header" class="a-dialog__header">
            <slot name="header">
              <span class="a-dialog__title">{{ title }}</span>
            </slot>
            <button v-if="showClose" class="a-dialog__close" @click="handleClose">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          <div class="a-dialog__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="a-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport, Transition } from 'vue-demi'
import { dialogProps, dialogEmits } from './dialog'

defineOptions({ name: 'ADialog' })

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  }
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
