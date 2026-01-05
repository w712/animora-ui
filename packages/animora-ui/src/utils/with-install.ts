// 组件安装工具

import type { App, Component } from 'vue-demi'

type SFCWithInstall<T> = T & {
  install: (app: App) => void
}

export function withInstall<T extends Component>(component: T): SFCWithInstall<T> {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as { name?: string }).name
    if (name) {
      app.component(name, component)
    }
  }
  return component as SFCWithInstall<T>
}
