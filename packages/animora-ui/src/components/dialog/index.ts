// ADialog 组件导出

import type { App } from 'vue-demi'
import ADialog from './dialog.vue'

ADialog.install = (app: App) => {
  app.component('ADialog', ADialog)
}

export { ADialog }
export default ADialog
export * from './dialog'
