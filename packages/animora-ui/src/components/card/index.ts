// ACard 组件导出

import type { App } from 'vue-demi'
import ACard from './card.vue'

ACard.install = (app: App) => {
  app.component('ACard', ACard)
}

export { ACard }
export default ACard
export * from './card'
