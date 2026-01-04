<template>
  <div class="a-tabs">
    <div class="a-tabs__header">
      <div
        v-for="(pane, index) in panes"
        :key="pane.name"
        ref="tabRefs"
        :class="['a-tabs__item', { 'is-active': modelValue === pane.name, 'is-disabled': pane.disabled }]"
        @click="handleTabClick(pane)"
      >
        {{ pane.label }}
      </div>
      <div class="a-tabs__indicator" :style="indicatorStyle" />
    </div>
    <div class="a-tabs__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, watch, nextTick, onMounted } from 'vue-demi'
import { tabsProps, tabsEmits } from './tabs'

defineOptions({ name: 'ATabs' })

const props = defineProps(tabsProps)
const emit = defineEmits(tabsEmits)

interface PaneInfo {
  name: string | number
  label: string
  disabled: boolean
}

const panes = ref<PaneInfo[]>([])
const tabRefs = ref<HTMLElement[]>([])
const indicatorWidth = ref(0)
const indicatorLeft = ref(0)

const registerPane = (pane: PaneInfo) => {
  panes.value.push(pane)
  if (!props.modelValue && panes.value.length === 1) {
    emit('update:modelValue', pane.name)
  }
}

const unregisterPane = (name: string | number) => {
  const index = panes.value.findIndex(p => p.name === name)
  if (index > -1) panes.value.splice(index, 1)
}

provide('tabs', {
  registerPane,
  unregisterPane,
  activeTab: computed(() => props.modelValue),
  animation: computed(() => props.animation)
})

const updateIndicator = () => {
  const index = panes.value.findIndex(p => p.name === props.modelValue)
  if (index === -1 || !tabRefs.value[index]) return
  const el = tabRefs.value[index]
  indicatorWidth.value = el.offsetWidth
  indicatorLeft.value = el.offsetLeft
}

const indicatorStyle = computed(() => ({
  width: `${indicatorWidth.value}px`,
  transform: `translateX(${indicatorLeft.value}px)`
}))

watch(() => props.modelValue, () => {
  nextTick(updateIndicator)
})

onMounted(() => {
  nextTick(updateIndicator)
})

const handleTabClick = (pane: PaneInfo) => {
  if (pane.disabled) return
  emit('update:modelValue', pane.name)
  emit('change', pane.name)
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
