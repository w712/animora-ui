// Animora UI - 主入口
// 动画驱动的 Vue 组件库

import type { App } from 'vue-demi'
import { AButton } from './components'
import { ACard } from './components'
import { ADialog } from './components'
import { ATabs, ATabPane } from './components'
import { vAnimate } from './animations'

// 导出动画系统
export * from './animations'

// 导出组件
export * from './components'

// 导出类型
export * from './types'

// 组件列表
const components = [AButton, ACard, ADialog, ATabs, ATabPane]

// 安装函数
export function install(app: App) {
  // 注册组件
  components.forEach(component => {
    app.component(component.name || 'AButton', component)
  })
  // 注册指令
  app.directive('animate', vAnimate)
}

// 命名导出
export const AnimoraUI = { install }

// 默认导出
export default AnimoraUI
