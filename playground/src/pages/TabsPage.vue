<template>
  <div class="page">
    <h2>标签页组件 ATabs</h2>

    <section class="demo-section">
      <h3>Slide 滑动动画</h3>
      <ATabs v-model="tab1" animation="slide">
        <ATabPane label="首页" name="1">
          <p>这是首页内容，切换标签时内容会滑动切换。</p>
        </ATabPane>
        <ATabPane label="用户管理" name="2">
          <p>这是用户管理页面的内容。</p>
        </ATabPane>
        <ATabPane label="系统设置" name="3">
          <p>这是系统设置页面的内容。</p>
        </ATabPane>
      </ATabs>
    </section>

    <section class="demo-section">
      <h3>Fade 淡入动画</h3>
      <ATabs v-model="tab2" animation="fade">
        <ATabPane label="标签一" name="1">
          <p>淡入淡出效果的内容切换。</p>
        </ATabPane>
        <ATabPane label="标签二" name="2">
          <p>第二个标签的内容。</p>
        </ATabPane>
        <ATabPane label="标签三" name="3">
          <p>第三个标签的内容。</p>
        </ATabPane>
      </ATabs>
    </section>

    <section class="demo-section">
      <h3>Scale 缩放动画</h3>
      <ATabs v-model="tab3" animation="scale">
        <ATabPane label="缩放一" name="1">
          <p>缩放效果的内容切换。</p>
        </ATabPane>
        <ATabPane label="缩放二" name="2">
          <p>第二个标签的内容。</p>
        </ATabPane>
      </ATabs>
    </section>

    <section class="demo-section">
      <h3>禁用标签</h3>
      <ATabs v-model="tab4" animation="slide">
        <ATabPane label="可用" name="1">
          <p>这个标签可以正常点击。</p>
        </ATabPane>
        <ATabPane label="禁用" name="2" disabled>
          <p>这个标签被禁用了。</p>
        </ATabPane>
        <ATabPane label="可用" name="3">
          <p>这个标签也可以正常点击。</p>
        </ATabPane>
      </ATabs>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab1 = ref('1')
const tab2 = ref('1')
const tab3 = ref('1')
const tab4 = ref('1')
</script>
