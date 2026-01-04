# Animora UI

> 动画驱动的 Vue 组件库，让每一次交互都充满生命力

Vue 2 / Vue 3 双版本支持 | TypeScript | 开箱即用

---

## 项目定位

**不是又一个 UI 框架，而是 Vue 动画基础设施**

| 现有框架 | 问题 |
|----------|------|
| Element Plus | 动画贫瘠，偏功能 |
| Ant Design Vue | 动画克制，偏设计体系 |
| Naive UI | API 好，但动画不是卖点 |
| Arco Design | 企业味重，动画偏"安全" |

**Animora 填补的空位**：动画是第一公民，不是附加功能

适用场景：中后台系统 / 展示型官网 / 高交互产品 / 需要动画差异化的项目

---

## 核心卖点：动画系统

### 1. 预设动画库（50+）

```typescript
// 进入动画
fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight
slideInUp, slideInDown, slideInLeft, slideInRight
zoomIn, bounceIn, flipInX, flipInY, rotateIn

// 退出动画
fadeOut, slideOut, zoomOut, bounceOut, flipOut

// 强调动画
pulse, shake, bounce, swing, wobble, jello, heartBeat
rubberBand, headShake, tada, flash

// 特效动画
ripple       // 涟漪
glow         // 发光
stream       // 流光
float        // 浮动
morph        // 粘性融合（GSAP MorphSVG）
splitText    // 文字拆分动画（GSAP SplitText）
drawSVG      // SVG 路径绘制（GSAP DrawSVG）
```

### 2. v-animate 指令（传播利器）

```vue
<!-- 进入动画 -->
<div v-animate:fadeInUp>淡入上升</div>

<!-- 悬停触发 -->
<div v-animate:pulse.hover>悬停脉冲</div>

<!-- 滚动触发 -->
<div v-animate:slideInLeft.scroll>滚动显示</div>

<!-- 点击触发 -->
<div v-animate:shake.click>点击抖动</div>

<!-- 自定义配置 -->
<div v-animate:bounceIn="{ duration: 800, delay: 200 }">
  自定义配置
</div>
```

### 3. 自定义动画 API

```typescript
import { defineAnimation } from 'animora-ui'

// CSS 动画
const myShake = defineAnimation({
  name: 'myShake',
  keyframes: `
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  `,
  duration: '0.5s',
  timing: 'ease-in-out'
})

// JS 动画（GSAP）
const myBounce = defineAnimation({
  name: 'myBounce',
  animate: (el, done) => {
    gsap.to(el, {
      y: -20,
      duration: 0.3,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
      onComplete: done
    })
  }
})
```

### 4. Composables

```typescript
import { useAnimate, useMotion, useScrollAnimation } from 'animora-ui'

// 命令式动画
const { animate, stop, reverse } = useAnimate(elementRef)
animate('shake')
animate({ x: 100, rotate: 360 }, { duration: 1000 })

// 运动控制
const { x, y, scale, rotate } = useMotion(elementRef)
x.value = 100  // 自动动画过渡

// 滚动动画
const { progress, isInView } = useScrollAnimation(elementRef, {
  threshold: 0.5,
  animation: 'fadeInUp'
})
```

### 5. 全局配置

```typescript
import { setAnimationConfig } from 'animora-ui'

setAnimationConfig({
  duration: 300,
  easing: 'ease-out',
  reduceMotion: 'auto',  // 尊重系统设置
  stagger: 50,
})
```

---

## MVP 组件（v1.0 目标）

聚焦 8 个核心组件，把动画做到极致：

| 组件 | 动画特性 | 优先级 |
|------|----------|--------|
| **AButton** | 涟漪点击、流光边框、发光悬停、边框展开 | P0 |
| **ACard** | 3D翻转、悬停浮起、玻璃拟态、方向感知遮罩 | P0 |
| **ADialog** | 弹性弹出、模糊背景、多种进入方式 | P0 |
| **ATabs** | 滑动指示器、内容切换过渡 | P0 |
| **AInput** | 浮动标签、聚焦发光、抖动验证 | P1 |
| **ASelect** | 下拉展开、选项悬停、多选标签弹入 | P1 |
| **AMessage** | 顶部滑入、堆叠、自动消失 | P1 |
| **ALoading** | 粘性小球、炫彩爱心、波浪 | P1 |

---

## Planned 组件（v2.0+）

以下组件已规划，将在核心稳定后逐步实现：

<details>
<summary>表单组件</summary>

- ATextarea, AInputNumber, ASwitch, ACheckbox, ARadio
- ASlider, ARate, AColorPicker, ADatePicker, ATimePicker
- AUpload, ACascader, AAutoComplete, AForm

</details>

<details>
<summary>数据展示</summary>

- ATable, ATree, APagination, ATag, ABadge
- AAvatar, AProgress, ASkeleton, AEmpty, AStatistic

</details>

<details>
<summary>导航组件</summary>

- AMenu, ABreadcrumb, ADropdown, ASteps, APageHeader

</details>

<details>
<summary>反馈组件</summary>

- ADrawer, ANotification, AAlert, APopconfirm
- APopover, ATooltip, AMessageBox

</details>

<details>
<summary>布局组件</summary>

- ALayout, ASpace, ADivider, ACollapse, ATimeline

</details>

<details>
<summary>其他组件</summary>

- ACarousel, AImage, AAffix, ABacktop, AAnchor
- ATransfer, AWaterfall, AParallax, ATour, AWatermark

</details>

---

## 动画 Playground（核弹级功能）

在线可视化调试动画参数：

```
┌─────────────────────────────────────────────────┐
│  Animation Playground                           │
├─────────────────────────────────────────────────┤
│                                                 │
│    ┌─────────────┐                              │
│    │   Button    │  ← 实时预览                  │
│    └─────────────┘                              │
│                                                 │
│  Animation: [fadeInUp ▼]                        │
│  Duration:  [====●====] 300ms                   │
│  Easing:    [ease-out ▼]                        │
│  Delay:     [●========] 0ms                     │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │ <AButton animation="fadeInUp"           │   │
│  │   :duration="300" easing="ease-out">    │   │
│  │   Click Me                              │   │
│  │ </AButton>                              │   │
│  └─────────────────────────────────────────┘   │
│                        [Copy Code]              │
└─────────────────────────────────────────────────┘
```

功能：
- 拖拽调整 duration / delay / easing
- 实时预览动画效果
- 一键复制代码
- 支持自定义 keyframes 编辑

---

## 技术栈

| 技术 | 用途 |
|------|------|
| Vue 2 / Vue 3 | 双版本支持（vue-demi） |
| TypeScript | 类型安全 |
| GSAP（可选） | 高级动画引擎，用户自行安装 |
| CSS Variables | 主题系统 |
| Vite | 构建工具 |
| VitePress | 官网文档 |

> GSAP 作为 peerDependency，需要用户自行安装：`npm install gsap`

---

## 主题 & 暗黑模式

```scss
:root {
  // 动画变量
  --a-duration: 300ms;
  --a-easing: cubic-bezier(0.4, 0, 0.2, 1);

  // 颜色
  --a-color-primary: #6366f1;
  --a-color-success: #22c55e;
  --a-color-warning: #f59e0b;
  --a-color-danger: #ef4444;

  // 圆角
  --a-radius: 8px;
}

// 暗黑模式
html.dark {
  --a-color-primary: #818cf8;
  // ...
}
```

支持：
- CSS 变量自定义
- 暗黑模式（跟随系统 / 手动切换）
- 动画在暗黑模式下的适配

---

## 使用方式

### 安装

```bash
# Vue 3
npm install animora-ui

# Vue 2
npm install animora-ui @vue/composition-api
```

### 完整引入

```typescript
import { createApp } from 'vue'
import AnimoraUI from 'animora-ui'
import 'animora-ui/dist/style.css'

createApp(App).use(AnimoraUI)
```

### 按需引入（推荐）

```typescript
// vite.config.ts
import { AnimoraUIResolver } from 'animora-ui/resolver'
import Components from 'unplugin-vue-components/vite'

export default {
  plugins: [
    Components({
      resolvers: [AnimoraUIResolver()]
    })
  ]
}
```

### 只用动画系统

```typescript
// 不需要组件，只用动画能力
import { vAnimate, useAnimate, defineAnimation } from 'animora-ui/animations'
```

---

## 目录结构

```
animora-ui/
├── packages/
│   ├── animora-ui/                      # 主包（组件 + 动画）
│   │   ├── src/
│   │   │   ├── index.ts                 # 主入口
│   │   │   │
│   │   │   ├── components/              # ========== 组件 ==========
│   │   │   │   ├── index.ts             # 组件统一导出
│   │   │   │   │
│   │   │   │   ├── button/              # AButton 组件
│   │   │   │   │   ├── index.ts         # 组件导出
│   │   │   │   │   ├── button.vue       # 组件模板
│   │   │   │   │   ├── button.ts        # 组件逻辑（props/emits/types）
│   │   │   │   │   └── style/
│   │   │   │   │       ├── index.scss   # 组件样式
│   │   │   │   │       └── css.ts       # 样式导出（用于按需加载）
│   │   │   │   │
│   │   │   │   ├── card/                # ACard 组件
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── card.vue
│   │   │   │   │   ├── card.ts
│   │   │   │   │   └── style/
│   │   │   │   │
│   │   │   │   ├── dialog/              # ADialog 组件
│   │   │   │   ├── tabs/                # ATabs 组件
│   │   │   │   ├── input/               # AInput 组件
│   │   │   │   ├── select/              # ASelect 组件
│   │   │   │   ├── message/             # AMessage 组件
│   │   │   │   └── loading/             # ALoading 组件
│   │   │   │
│   │   │   ├── animations/              # ========== 动画系统 ==========
│   │   │   │   ├── index.ts             # 动画统一导出
│   │   │   │   │
│   │   │   │   ├── core/                # 动画核心引擎
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── engine.ts        # 动画执行引擎
│   │   │   │   │   ├── timeline.ts      # 时间线控制
│   │   │   │   │   └── gsap-adapter.ts  # GSAP 适配器（可选）
│   │   │   │   │
│   │   │   │   ├── presets/             # 预设动画
│   │   │   │   │   ├── index.ts         # 预设统一导出
│   │   │   │   │   ├── fade.ts          # fadeIn/fadeOut/fadeInUp...
│   │   │   │   │   ├── slide.ts         # slideIn/slideOut...
│   │   │   │   │   ├── zoom.ts          # zoomIn/zoomOut...
│   │   │   │   │   ├── bounce.ts        # bounceIn/bounceOut...
│   │   │   │   │   ├── rotate.ts        # rotateIn/rotateOut...
│   │   │   │   │   ├── flip.ts          # flipInX/flipInY...
│   │   │   │   │   ├── attention.ts     # pulse/shake/swing/wobble...
│   │   │   │   │   └── special.ts       # ripple/glow/stream/float...
│   │   │   │   │
│   │   │   │   ├── directive/           # v-animate 指令
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── v-animate.ts     # 指令实现
│   │   │   │   │
│   │   │   │   └── composables/         # 组合式 API
│   │   │   │       ├── index.ts
│   │   │   │       ├── useAnimate.ts    # 命令式动画
│   │   │   │       ├── useMotion.ts     # 运动控制
│   │   │   │       └── useScroll.ts     # 滚动动画
│   │   │   │
│   │   │   ├── styles/                  # ========== 样式系统 ==========
│   │   │   │   ├── index.scss           # 样式入口
│   │   │   │   ├── base.scss            # 基础样式/重置
│   │   │   │   ├── variables.scss       # SCSS 变量
│   │   │   │   ├── themes/
│   │   │   │   │   ├── light.scss       # 亮色主题
│   │   │   │   │   └── dark.scss        # 暗色主题
│   │   │   │   └── animations/          # 动画 CSS
│   │   │   │       ├── keyframes.scss   # @keyframes 定义
│   │   │   │       └── classes.scss     # 动画工具类
│   │   │   │
│   │   │   ├── hooks/                   # ========== 通用 Hooks ==========
│   │   │   │   ├── index.ts
│   │   │   │   ├── useNamespace.ts      # BEM 命名空间
│   │   │   │   └── useZIndex.ts         # z-index 管理
│   │   │   │
│   │   │   ├── utils/                   # ========== 工具函数 ==========
│   │   │   │   ├── index.ts
│   │   │   │   ├── dom.ts               # DOM 操作
│   │   │   │   ├── is.ts                # 类型判断
│   │   │   │   ├── props.ts             # props 工具
│   │   │   │   └── with-install.ts      # 组件安装器
│   │   │   │
│   │   │   └── types/                   # ========== 类型定义 ==========
│   │   │       ├── index.ts
│   │   │       ├── animation.ts         # 动画相关类型
│   │   │       └── component.ts         # 组件相关类型
│   │   │
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   │
│   └── resolver/                        # 自动导入解析器
│       ├── src/
│       │   └── index.ts
│       └── package.json
│
├── docs/                                # VitePress 官网
│   ├── .vitepress/
│   │   └── config.ts
│   ├── index.md                         # 首页
│   ├── guide/                           # 指南
│   │   ├── installation.md
│   │   ├── quickstart.md
│   │   └── theming.md
│   ├── components/                      # 组件文档
│   │   ├── button.md
│   │   ├── card.md
│   │   └── ...
│   └── animations/                      # 动画文档
│       ├── presets.md
│       ├── directive.md
│       └── composables.md
│
├── playground/                          # 动画 Playground
│   ├── src/
│   │   ├── App.vue
│   │   └── main.ts
│   ├── index.html
│   └── package.json
│
├── examples/                            # 示例项目
│   ├── vue3-demo/
│   └── vue2-demo/
│
├── scripts/                             # 构建脚本
│   ├── build.ts                         # 构建脚本
│   └── gen-component.ts                 # 组件生成器
│
├── package.json                         # 根配置
├── pnpm-workspace.yaml                  # pnpm 工作区
├── tsconfig.json                        # TS 配置
├── .eslintrc.js                         # ESLint 配置
└── README.md
```

---

## 代码架构设计

### 1. 组件结构（以 Button 为例）

```
button/
├── index.ts         # 导出入口
├── button.vue       # 模板（纯视图）
├── button.ts        # 逻辑（props/emits/types）
└── style/
    └── index.scss   # 样式
```

**button.ts** - 组件逻辑分离
```typescript
import type { ExtractPropTypes, PropType } from 'vue'

// Props 定义
export const buttonProps = {
  type: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger'>,
    default: 'default'
  },
  size: {
    type: String as PropType<'small' | 'default' | 'large'>,
    default: 'default'
  },
  loading: Boolean,
  disabled: Boolean,
  // 动画相关
  animation: {
    type: String as PropType<'ripple' | 'glow' | 'stream' | 'none'>,
    default: 'ripple'
  },
  hoverAnimation: {
    type: String as PropType<'scale' | 'glow' | 'none'>,
    default: 'scale'
  }
} as const

// 类型导出
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

// Emits 定义
export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
}
export type ButtonEmits = typeof buttonEmits
```

**button.vue** - 纯视图模板
```vue
<template>
  <button
    :class="[ns.b(), ns.m(type), ns.m(size), ns.is('loading', loading)]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" :class="ns.e('loading')">
      <AIcon name="loading" spin />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@animora-ui/hooks'
import { useButtonAnimation } from './use-button-animation'
import { buttonProps, buttonEmits } from './button'

defineOptions({ name: 'AButton' })

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const ns = useNamespace('button')
const { handleClick } = useButtonAnimation(props, emit)
</script>
```

### 2. 动画系统架构

```
animations/
├── core/            # 引擎层
│   ├── engine.ts    # 统一动画执行
│   └── gsap-adapter.ts
├── presets/         # 预设层
│   ├── fade.ts
│   └── ...
├── directive/       # 指令层
│   └── v-animate.ts
└── composables/     # API 层
    └── useAnimate.ts
```

**core/engine.ts** - 动画引擎（核心）
```typescript
import type { AnimationConfig, AnimationPreset } from '../types'

// 检测 GSAP 是否可用
const hasGSAP = () => typeof window !== 'undefined' && 'gsap' in window

// 统一动画执行器
export function animate(
  el: HTMLElement,
  preset: AnimationPreset | AnimationConfig,
  options?: { onComplete?: () => void }
) {
  // 如果是预设名称，获取预设配置
  const config = typeof preset === 'string'
    ? getPreset(preset)
    : preset

  // 优先使用 GSAP（如果用户安装了）
  if (hasGSAP() && config.gsap) {
    return animateWithGSAP(el, config, options)
  }

  // 降级使用 CSS Animation
  return animateWithCSS(el, config, options)
}

// CSS 动画实现
function animateWithCSS(el: HTMLElement, config: AnimationConfig, options?: any) {
  const { keyframes, duration = 300, easing = 'ease-out' } = config

  return el.animate(keyframes, {
    duration,
    easing,
    fill: 'forwards'
  })
}

// GSAP 动画实现（可选）
function animateWithGSAP(el: HTMLElement, config: AnimationConfig, options?: any) {
  const gsap = (window as any).gsap
  return gsap.to(el, {
    ...config.gsap,
    onComplete: options?.onComplete
  })
}
```

**presets/fade.ts** - 预设动画定义
```typescript
import { definePreset } from '../core'

export const fadeIn = definePreset({
  name: 'fadeIn',
  keyframes: [
    { opacity: 0 },
    { opacity: 1 }
  ],
  duration: 300,
  easing: 'ease-out',
  // GSAP 配置（可选，用户安装 GSAP 后生效）
  gsap: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.3,
    ease: 'power2.out'
  }
})

export const fadeInUp = definePreset({
  name: 'fadeInUp',
  keyframes: [
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ],
  duration: 400,
  easing: 'ease-out'
})

// ... fadeInDown, fadeInLeft, fadeInRight, fadeOut
```

**directive/v-animate.ts** - 指令实现
```typescript
import type { Directive } from 'vue'
import { animate } from '../core/engine'
import { getPreset } from '../presets'

export const vAnimate: Directive = {
  mounted(el, binding) {
    const presetName = binding.arg || 'fadeIn'
    const modifiers = binding.modifiers
    const options = binding.value || {}

    // 根据修饰符决定触发时机
    if (modifiers.hover) {
      el.addEventListener('mouseenter', () => animate(el, presetName, options))
    } else if (modifiers.click) {
      el.addEventListener('click', () => animate(el, presetName, options))
    } else if (modifiers.scroll) {
      observeScroll(el, () => animate(el, presetName, options))
    } else {
      // 默认：挂载时执行
      animate(el, presetName, options)
    }
  }
}

// 滚动观察器
function observeScroll(el: HTMLElement, callback: () => void) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      callback()
      observer.disconnect()
    }
  }, { threshold: 0.1 })
  observer.observe(el)
}
```

**composables/useAnimate.ts** - 组合式 API
```typescript
import { ref, unref, type Ref } from 'vue'
import { animate as runAnimate } from '../core/engine'

export function useAnimate(target: Ref<HTMLElement | null> | HTMLElement) {
  const isAnimating = ref(false)

  const animate = async (preset: string, options?: any) => {
    const el = unref(target)
    if (!el) return

    isAnimating.value = true
    await runAnimate(el, preset, options)
    isAnimating.value = false
  }

  const stop = () => {
    const el = unref(target)
    if (el) {
      el.getAnimations().forEach(a => a.cancel())
    }
    isAnimating.value = false
  }

  return { animate, stop, isAnimating }
}
```

### 3. 样式架构

**BEM 命名规范**
```scss
// 组件：a-button
// 元素：a-button__icon
// 修饰符：a-button--primary, a-button.is-loading

.a-button {
  // 基础样式

  &__icon {
    // 元素样式
  }

  &--primary {
    // 类型修饰
  }

  &.is-loading {
    // 状态修饰
  }
}
```

**CSS 变量主题**
```scss
// styles/variables.scss
:root {
  // 动画
  --a-duration-fast: 150ms;
  --a-duration-normal: 300ms;
  --a-duration-slow: 500ms;
  --a-easing: cubic-bezier(0.4, 0, 0.2, 1);

  // 颜色
  --a-color-primary: #6366f1;
  --a-color-primary-light: #818cf8;
  --a-color-primary-dark: #4f46e5;

  // 圆角
  --a-radius-sm: 4px;
  --a-radius-md: 8px;
  --a-radius-lg: 12px;
}

// 暗黑模式
html.dark {
  --a-color-primary: #818cf8;
}
```

---

## 开发路线

### Phase 1 - 动画系统（核心）

- [ ] 项目初始化（pnpm monorepo + TypeScript）
- [ ] vue-demi 双版本兼容
- [ ] 动画引擎（CSS + Web Animations API）
- [ ] 预设动画库（30+ 动画）
- [ ] v-animate 指令
- [ ] useAnimate / useMotion composables
- [ ] defineAnimation 自定义 API

### Phase 2 - MVP 组件

- [ ] AButton（涟漪、流光、发光）
- [ ] ACard（3D翻转、方向感知）
- [ ] ADialog（弹性弹出、模糊背景）
- [ ] ATabs（滑动指示器）

### Phase 3 - 补充组件

- [ ] AInput / ASelect
- [ ] AMessage / ALoading

### Phase 4 - 文档 & Playground

- [ ] VitePress 官网
- [ ] 动画 Playground（可视化调参）
- [ ] 组件文档 + 在线演示
- [ ] 发布 npm

### Phase 5 - 扩展（v2.0+）

- [ ] 更多组件
- [ ] 国际化
- [ ] 更多主题

---

## 性能 & 无障碍

- **GPU 加速**：transform / opacity 优先
- **60fps**：避免 layout thrashing
- **prefers-reduced-motion**：尊重系统设置，自动降级
- **低性能设备检测**：自动减少动画复杂度

---

## 浏览器支持

| 版本 | 支持 |
|------|------|
| Vue 3 | 现代浏览器（Chrome 88+, Firefox 78+, Safari 14+） |
| Vue 2 | IE11+（动画自动降级为 CSS transition） |

---

## 为什么选择 Animora？

| 特性 | Animora | Element Plus | Naive UI |
|------|---------|--------------|----------|
| 动画系统 | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| 自定义动画 | ✅ | ❌ | ❌ |
| v-animate 指令 | ✅ | ❌ | ❌ |
| Vue 2 支持 | ✅ | ❌ | ❌ |
| 动画 Playground | ✅ | ❌ | ❌ |
| 组件数量 | 8（MVP） | 70+ | 80+ |

**Animora 不是要替代 Element Plus**
**而是给你的项目加上「动画超能力」**

---

> Animora = Animation + Aura（动画光环）
>
> 让每一次交互都充满生命力

<!-- 但是要记住代码规范，以及不能一口一胖子，要让代码有质量，并且创建一个docs，每完成一步就创建一个文件  -->