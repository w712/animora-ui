<template>
  <Transition :name="`a-tabs-${animation}`">
    <div v-if="isActive" class="a-tab-pane">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, Transition } from 'vue-demi'
import { tabPaneProps } from './tabs'

defineOptions({ name: 'ATabPane' })

const props = defineProps(tabPaneProps)

const tabs = inject<any>('tabs')

const isActive = computed(() => tabs?.activeTab.value === props.name)
const animation = computed(() => tabs?.animation?.value || 'slide')

onMounted(() => {
  tabs?.registerPane({
    name: props.name,
    label: props.label,
    disabled: props.disabled
  })
})

onUnmounted(() => {
  tabs?.unregisterPane(props.name)
})
</script>
