<template>
  <div class="page">
    <h2>卡片组件 ACard</h2>

    <section class="demo-section">
      <h3>悬停上浮</h3>
      <p class="demo-tip">鼠标悬停时卡片向上浮起</p>
      <div class="demo-row card-row">
        <ACard title="卡片标题" animation="hover-lift" class="demo-card">
          <p>这是卡片内容，鼠标悬停时会向上浮起并增加阴影效果。</p>
        </ACard>
        <ACard title="无边框卡片" animation="hover-lift" :bordered="false" class="demo-card">
          <p>这是无边框的卡片样式。</p>
        </ACard>
      </div>
    </section>

    <section class="demo-section">
      <h3>悬停发光</h3>
      <p class="demo-tip">鼠标悬停时卡片发出光晕</p>
      <div class="demo-row card-row">
        <ACard title="发光效果" animation="hover-glow" class="demo-card">
          <p>悬停时会有蓝色光晕效果。</p>
        </ACard>
      </div>
    </section>

    <section class="demo-section">
      <h3>3D 倾斜</h3>
      <p class="demo-tip">卡片跟随鼠标位置进行 3D 倾斜</p>
      <div class="demo-row card-row">
        <ACard title="3D 倾斜效果" animation="tilt" class="demo-card">
          <p>移动鼠标，卡片会跟随鼠标位置进行 3D 倾斜变换。</p>
        </ACard>
      </div>
    </section>

    <section class="demo-section">
      <h3>带插槽的卡片</h3>
      <div class="demo-row card-row">
        <ACard animation="hover-lift" class="demo-card">
          <template #header>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>自定义头部</span>
              <AButton size="small" type="primary">操作</AButton>
            </div>
          </template>
          <p>卡片内容区域</p>
          <template #footer>
            <span style="color: #909399; font-size: 12px;">底部信息</span>
          </template>
        </ACard>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Card 演示页面
</script>

<style scoped>
.card-row {
  gap: 20px;
}

.demo-card {
  width: 280px;
}
</style>
