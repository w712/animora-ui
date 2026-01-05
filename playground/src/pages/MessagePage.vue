<template>
  <div class="page">
    <h2>消息提示 AMessage</h2>

    <section class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-row">
        <AButton @click="showInfo">Info</AButton>
        <AButton type="success" @click="showSuccess">Success</AButton>
        <AButton type="warning" @click="showWarning">Warning</AButton>
        <AButton type="danger" @click="showError">Error</AButton>
      </div>
    </section>

    <section class="demo-section">
      <h3>可关闭</h3>
      <div class="demo-row">
        <AButton @click="showClosable">显示可关闭消息</AButton>
      </div>
    </section>

    <section class="demo-section">
      <h3>动画效果</h3>
      <p class="demo-tip">slide 滑入 / fade 淡入 / bounce 弹跳</p>
      <div class="demo-row">
        <AButton @click="showSlide">Slide (默认)</AButton>
        <AButton @click="showFade">Fade 淡入</AButton>
        <AButton @click="showBounce">Bounce 弹跳</AButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { AMessage } from 'animora-ui'

const showInfo = () => AMessage.info('这是一条信息提示')
const showSuccess = () => AMessage.success('操作成功！')
const showWarning = () => AMessage.warning('请注意！')
const showError = () => AMessage.error('操作失败')

const showClosable = () => {
  AMessage({ message: '点击右侧关闭', showClose: true, duration: 0 })
}

const showSlide = () => AMessage({ message: 'Slide 动画', animation: 'slide' })
const showFade = () => AMessage({ message: 'Fade 动画', animation: 'fade' })
const showBounce = () => AMessage({ message: 'Bounce 动画', animation: 'bounce' })
</script>
