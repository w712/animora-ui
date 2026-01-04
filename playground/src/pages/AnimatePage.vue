<template>
  <div class="page">
    <h2>v-animate 指令</h2>

    <section class="demo-section">
      <h3>入场动画</h3>
      <p class="demo-tip">页面加载时自动播放动画</p>
      <div class="demo-row">
        <div v-animate:fadeIn class="demo-box">fadeIn</div>
        <div v-animate:fadeInUp class="demo-box">fadeInUp</div>
        <div v-animate:slideInLeft class="demo-box">slideInLeft</div>
        <div v-animate:zoomIn class="demo-box">zoomIn</div>
        <div v-animate:bounceIn class="demo-box">bounceIn</div>
      </div>
    </section>

    <section class="demo-section">
      <h3>悬停触发</h3>
      <p class="demo-tip">鼠标悬停时触发动画</p>
      <div class="demo-row">
        <div v-animate:pulse.hover class="demo-box interactive">pulse</div>
        <div v-animate:shake.hover class="demo-box interactive">shake</div>
        <div v-animate:bounce.hover class="demo-box interactive">bounce</div>
        <div v-animate:swing.hover class="demo-box interactive">swing</div>
        <div v-animate:heartBeat.hover class="demo-box interactive">heartBeat</div>
      </div>
    </section>

    <section class="demo-section">
      <h3>点击触发</h3>
      <p class="demo-tip">点击元素时触发动画</p>
      <div class="demo-row">
        <div v-animate:tada.click class="demo-box interactive">tada</div>
        <div v-animate:wobble.click class="demo-box interactive">wobble</div>
        <div v-animate:flash.click class="demo-box interactive">flash</div>
      </div>
    </section>

    <section class="demo-section">
      <h3>滚动触发 (.scroll)</h3>
      <p class="demo-tip">向下滚动查看效果</p>
      <div class="scroll-container">
        <div v-animate:fadeInUp.scroll class="demo-box scroll-box">fadeInUp</div>
        <div v-animate:slideInLeft.scroll class="demo-box scroll-box">slideInLeft</div>
        <div v-animate:zoomIn.scroll class="demo-box scroll-box">zoomIn</div>
        <div v-animate:flipInX.scroll class="demo-box scroll-box">flipInX</div>
      </div>
    </section>

    <section class="demo-section">
      <h3>useMotion 运动控制</h3>
      <p class="demo-tip">响应式运动属性，自动动画过渡</p>
      <div class="motion-demo">
        <div ref="motionRef" class="motion-box">Motion</div>
        <div class="motion-controls">
          <AButton size="small" @click="motionX += 50">X +50</AButton>
          <AButton size="small" @click="motionX -= 50">X -50</AButton>
          <AButton size="small" @click="motionScale = motionScale === 1 ? 1.5 : 1">Scale</AButton>
          <AButton size="small" @click="motionRotate += 45">Rotate +45°</AButton>
          <AButton size="small" @click="resetMotion">Reset</AButton>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h3>useAnimate 命令式动画</h3>
      <p class="demo-tip">通过 JS 控制动画</p>
      <div class="animate-demo">
        <div ref="animateRef" class="demo-box">Target</div>
        <div class="animate-controls">
          <AButton size="small" @click="runAnimate('shake')">Shake</AButton>
          <AButton size="small" @click="runAnimate('pulse')">Pulse</AButton>
          <AButton size="small" @click="runAnimate('bounceIn')">BounceIn</AButton>
          <AButton size="small" @click="runAnimate('tada')">Tada</AButton>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h3>重新播放</h3>
      <AButton type="primary" @click="replay">重新播放入场动画</AButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMotion, useAnimate } from '../../../packages/animora-ui/src'

// useMotion demo
const motionRef = ref<HTMLElement | null>(null)
const { x: motionX, scale: motionScale, rotate: motionRotate, set: setMotion } = useMotion(motionRef, {
  duration: 0.4,
  ease: 'power2.out'
})

const resetMotion = () => {
  setMotion({ x: 0, y: 0, scale: 1, rotate: 0 })
}

// useAnimate demo
const animateRef = ref<HTMLElement | null>(null)
const { animate } = useAnimate(animateRef)

const runAnimate = (preset: string) => {
  animate(preset)
}

const replay = () => {
  window.location.reload()
}
</script>

<style scoped>
.demo-box {
  width: 100px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 500;
}

.demo-box.interactive {
  cursor: pointer;
}

.scroll-container {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 20px 0;
}

.scroll-box {
  width: 150px;
}

.motion-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.motion-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.motion-controls,
.animate-controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.animate-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
