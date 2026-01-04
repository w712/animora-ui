<template>
  <div class="page">
    <h2>按钮组件 AButton</h2>

    <section class="demo-section">
      <h3>按钮类型</h3>
      <div class="demo-row">
        <AButton>默认按钮</AButton>
        <AButton type="primary">主要按钮</AButton>
        <AButton type="success">成功按钮</AButton>
        <AButton type="warning">警告按钮</AButton>
        <AButton type="danger">危险按钮</AButton>
      </div>
    </section>

    <section class="demo-section">
      <h3>按钮尺寸</h3>
      <div class="demo-row">
        <AButton size="small">小型按钮</AButton>
        <AButton>默认按钮</AButton>
        <AButton size="large">大型按钮</AButton>
      </div>
    </section>

    <section class="demo-section">
      <h3>按钮状态</h3>
      <div class="demo-row">
        <AButton :loading="true">加载中</AButton>
        <AButton disabled>禁用按钮</AButton>
        <AButton round type="primary">圆角按钮</AButton>
      </div>
    </section>

    <section class="demo-section">
      <h3>动画效果</h3>
      <p class="demo-tip">点击或悬停查看动画效果</p>
      <div class="demo-row">
        <AButton animation="ripple" type="primary">涟漪效果</AButton>
        <AButton animation="pulse" type="success">脉冲动画</AButton>
        <AButton animation="shake" type="warning">抖动动画</AButton>
        <AButton animation="bounce" type="danger">弹跳动画</AButton>
        <AButton animation="glow" type="primary">发光动画</AButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Button 演示页面
</script>
