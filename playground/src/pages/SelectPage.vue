<template>
  <div class="page">
    <h2>选择器组件 ASelect</h2>

    <section class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-row vertical">
        <ASelect v-model="select1" :options="options" placeholder="请选择" />
      </div>
    </section>

    <section class="demo-section">
      <h3>浮动标签</h3>
      <div class="demo-row vertical">
        <ASelect v-model="select2" :options="options" label="选择城市" />
      </div>
    </section>

    <section class="demo-section">
      <h3>下拉动画</h3>
      <p class="demo-tip">slide 滑动 / fade 淡入 / zoom 缩放</p>
      <div class="demo-row vertical">
        <ASelect v-model="animSelect1" :options="options" label="Slide (默认)" animation="slide" />
        <ASelect v-model="animSelect2" :options="options" label="Fade 淡入" animation="fade" />
        <ASelect v-model="animSelect3" :options="options" label="Zoom 缩放" animation="zoom" />
      </div>
    </section>

    <section class="demo-section">
      <h3>可清空</h3>
      <div class="demo-row vertical">
        <ASelect v-model="clearSelect" :options="options" label="可清空" clearable />
      </div>
    </section>

    <section class="demo-section">
      <h3>多选</h3>
      <p class="demo-tip">多选标签带弹入动画</p>
      <div class="demo-row vertical">
        <ASelect v-model="multiSelect" :options="options" label="多选" multiple clearable />
      </div>
    </section>

    <section class="demo-section">
      <h3>尺寸</h3>
      <div class="demo-row vertical">
        <ASelect v-model="sizeSelect" :options="options" label="小型" size="small" />
        <ASelect v-model="sizeSelect" :options="options" label="默认" />
        <ASelect v-model="sizeSelect" :options="options" label="大型" size="large" />
      </div>
    </section>

    <section class="demo-section">
      <h3>禁用状态</h3>
      <div class="demo-row vertical">
        <ASelect model-value="beijing" :options="options" label="禁用" disabled />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州', disabled: true }
]

const select1 = ref('')
const select2 = ref('')
const animSelect1 = ref('')
const animSelect2 = ref('')
const animSelect3 = ref('')
const clearSelect = ref('shanghai')
const multiSelect = ref<string[]>(['beijing', 'shanghai'])
const sizeSelect = ref('')
</script>

<style scoped>
.demo-row.vertical {
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
}
</style>
