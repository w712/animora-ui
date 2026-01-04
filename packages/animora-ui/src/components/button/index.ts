// AButton 组件导出

import type { App } from 'vue-demi'
import AButton from './button.vue'

// 支持 app.use() 安装
AButton.install = (app: App) => {
  app.component('AButton', AButton)
}

export { AButton }
export default AButton
export * from './button'
