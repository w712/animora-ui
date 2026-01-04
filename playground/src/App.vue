<template>
  <div class="playground">
    <aside class="sidebar">
      <h1 class="logo">Animora UI</h1>
      <nav class="nav">
        <a
          v-for="item in navItems"
          :key="item.name"
          :class="['nav-item', { active: currentPage === item.name }]"
          @click="currentPage = item.name"
        >
          {{ item.label }}
        </a>
      </nav>
    </aside>

    <main class="main">
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, markRaw } from 'vue'
import ButtonPage from './pages/ButtonPage.vue'
import CardPage from './pages/CardPage.vue'
import DialogPage from './pages/DialogPage.vue'
import TabsPage from './pages/TabsPage.vue'
import AnimatePage from './pages/AnimatePage.vue'

const navItems = [
  { name: 'button', label: 'Button 按钮' },
  { name: 'card', label: 'Card 卡片' },
  { name: 'dialog', label: 'Dialog 对话框' },
  { name: 'tabs', label: 'Tabs 标签页' },
  { name: 'animate', label: 'v-animate 指令' }
]

const pages: Record<string, any> = {
  button: markRaw(ButtonPage),
  card: markRaw(CardPage),
  dialog: markRaw(DialogPage),
  tabs: markRaw(TabsPage),
  animate: markRaw(AnimatePage)
}

const currentPage = ref('button')
const currentComponent = computed(() => pages[currentPage.value])
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
}

.playground {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 0;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.logo {
  color: white;
  font-size: 1.5rem;
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
}

.nav {
  display: flex;
  flex-direction: column;
}

.nav-item {
  color: rgba(255, 255, 255, 0.8);
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-left: 3px solid white;
}

.main {
  flex: 1;
  margin-left: 220px;
  padding: 30px;
}

.page h2 {
  color: #303133;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #667eea;
}

.demo-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.demo-section h3 {
  color: #606266;
  font-size: 16px;
  margin-bottom: 12px;
}

.demo-tip {
  color: #909399;
  font-size: 13px;
  margin-bottom: 16px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
