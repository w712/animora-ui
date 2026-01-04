// ATabs 组件导出

import type { App } from 'vue-demi'
import ATabs from './tabs.vue'
import ATabPane from './tab-pane.vue'

ATabs.install = (app: App) => {
  app.component('ATabs', ATabs)
  app.component('ATabPane', ATabPane)
}

export { ATabs, ATabPane }
export default ATabs
export * from './tabs'
