# 开发日志 - 动画系统完善

日期: 2026-01-03

## 完成内容

### 1. defineAnimation - 自定义动画 API

允许用户定义自己的动画预设：

```typescript
import { defineAnimation } from 'animora-ui'

// CSS 动画
const myShake = defineAnimation({
  name: 'myShake',
  keyframes: [
    { transform: 'translateX(0)' },
    { transform: 'translateX(-10px)' },
    { transform: 'translateX(10px)' },
    { transform: 'translateX(0)' }
  ],
  duration: 500,
  easing: 'ease-in-out'
})

// JS 动画 (GSAP)
const myBounce = defineAnimation({
  name: 'myBounce',
  animate: (el, done) => {
    gsap.to(el, { y: -20, duration: 0.3, yoyo: true, repeat: 1, onComplete: done })
  }
})
```

文件: `packages/animora-ui/src/animations/core/define.ts`

### 2. setAnimationConfig - 全局配置

全局动画配置，支持 reduceMotion 无障碍：

```typescript
import { setAnimationConfig } from 'animora-ui'

setAnimationConfig({
  duration: 300,
  easing: 'ease-out',
  stagger: 50,
  reduceMotion: 'auto'  // 跟随系统设置
})
```

文件: `packages/animora-ui/src/animations/core/config.ts`

### 3. GSAP 适配器

类型安全的 GSAP 封装：

```typescript
import { gsapAnimate, gsapFromTo, createTimeline, gsapStagger } from 'animora-ui'

// 基础动画
gsapAnimate(el, { x: 100, rotation: 360, duration: 1 })

// fromTo 动画
gsapFromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5 })

// 时间线
const tl = createTimeline()
tl.to(el1, { x: 100 })
  .to(el2, { y: 100 }, '-=0.5')

// 交错动画
gsapStagger(elements, { opacity: 1, y: 0 }, 0.1)
```

文件: `packages/animora-ui/src/animations/core/gsap-adapter.ts`

### 4. useScrollAnimation - 滚动触发动画

元素进入视口时触发动画：

```vue
<script setup>
import { useScrollAnimation } from 'animora-ui'

const boxRef = ref(null)
const { isInView, progress, hasAnimated } = useScrollAnimation(boxRef, {
  animation: 'fadeInUp',
  threshold: 0.5,
  once: true
})
</script>
```

文件: `packages/animora-ui/src/animations/composables/useScrollAnimation.ts`

### 5. useMotion - 运动控制

响应式运动属性，自动动画过渡：

```vue
<script setup>
import { useMotion } from 'animora-ui'

const boxRef = ref(null)
const { x, y, scale, rotate, opacity } = useMotion(boxRef, {
  duration: 0.5,
  ease: 'power2.out'
})

// 修改值自动触发动画
x.value = 100
scale.value = 1.5
rotate.value = 45
</script>
```

文件: `packages/animora-ui/src/animations/composables/useMotion.ts`

### 6. v-animate .scroll 修饰符增强

滚动触发动画指令：

```vue
<!-- 基础用法 -->
<div v-animate:fadeInUp.scroll>滚动显示</div>

<!-- 自定义阈值 -->
<div v-animate:slideInLeft.scroll="{ threshold: 0.5 }">50% 可见时触发</div>

<!-- 允许重复 -->
<div v-animate:zoomIn.scroll="{ repeat: true }">每次进入视口都触发</div>
```

文件: `packages/animora-ui/src/animations/directive/v-animate.ts`

## 文件变更

新增文件:
- `packages/animora-ui/src/animations/core/config.ts`
- `packages/animora-ui/src/animations/core/define.ts`
- `packages/animora-ui/src/animations/core/gsap-adapter.ts`
- `packages/animora-ui/src/animations/composables/useScrollAnimation.ts`
- `packages/animora-ui/src/animations/composables/useMotion.ts`

修改文件:
- `packages/animora-ui/src/animations/core/index.ts` - 导出新模块
- `packages/animora-ui/src/animations/core/engine.ts` - 集成全局配置和 JS 动画
- `packages/animora-ui/src/animations/composables/index.ts` - 导出新 composables
- `packages/animora-ui/src/animations/directive/v-animate.ts` - 增强 .scroll 修饰符
- `packages/animora-ui/src/animations/index.ts` - 统一导出
- `packages/animora-ui/src/animations/presets/index.ts` - 支持动态注册

## Phase 1 完成度

| 功能 | 状态 |
|------|------|
| 项目初始化 | ✅ |
| vue-demi 双版本兼容 | ✅ |
| 动画引擎 | ✅ |
| 预设动画库 | ✅ |
| v-animate 指令 | ✅ |
| useAnimate | ✅ |
| useMotion | ✅ |
| useScrollAnimation | ✅ |
| defineAnimation | ✅ |
| 全局配置 | ✅ |
| GSAP 适配器 | ✅ |
| .scroll 修饰符 | ✅ |

**Phase 1 动画系统 100% 完成！**
