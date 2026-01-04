<template>
  <div class="page">
    <h2>对话框组件 ADialog</h2>

    <section class="demo-section">
      <h3>动画效果</h3>
      <p class="demo-tip">点击按钮查看不同的对话框动画</p>
      <div class="demo-row">
        <AButton type="primary" @click="open('zoom')">Zoom 缩放</AButton>
        <AButton type="success" @click="open('fade')">Fade 淡入</AButton>
        <AButton type="warning" @click="open('slide-down')">Slide Down</AButton>
        <AButton type="danger" @click="open('bounce')">Bounce 弹跳</AButton>
        <AButton @click="open('flip')">Flip 翻转</AButton>
      </div>
    </section>

    <section class="demo-section">
      <h3>不同宽度</h3>
      <div class="demo-row">
        <AButton @click="openWidth('400px')">小型对话框</AButton>
        <AButton @click="openWidth('600px')">中型对话框</AButton>
        <AButton @click="openWidth('800px')">大型对话框</AButton>
      </div>
    </section>

    <ADialog
      v-model="visible"
      :animation="animation"
      :width="width"
      :title="`${animation} 动画效果`"
    >
      <p>这是一个使用 <strong>{{ animation }}</strong> 动画效果的对话框。</p>
      <p style="margin-top: 12px; color: #909399;">点击遮罩层或关闭按钮可以关闭对话框。</p>
      <template #footer>
        <AButton @click="visible = false">取消</AButton>
        <AButton type="primary" @click="visible = false">确定</AButton>
      </template>
    </ADialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const animation = ref('zoom')
const width = ref('500px')

const open = (type: string) => {
  animation.value = type
  width.value = '500px'
  visible.value = true
}

const openWidth = (w: string) => {
  animation.value = 'zoom'
  width.value = w
  visible.value = true
}
</script>
