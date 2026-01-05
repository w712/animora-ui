// AMessage 服务 - 函数式调用

import { createApp, h, ref } from 'vue'
import MessageComponent from './message.vue'
import type { MessageProps, MessageType, MessageAnimation } from './message'

interface MessageOptions {
  message: string
  type?: MessageType
  duration?: number
  showClose?: boolean
  animation?: MessageAnimation
}

const instances = ref<HTMLElement[]>([])

function createMessage(options: MessageOptions) {
  const container = document.createElement('div')

  // 确保容器存在
  let wrapper = document.querySelector('.a-message-container')
  if (!wrapper) {
    wrapper = document.createElement('div')
    wrapper.className = 'a-message-container'
    document.body.appendChild(wrapper)
  }

  wrapper.appendChild(container)
  instances.value.push(container)

  const app = createApp({
    render() {
      return h(MessageComponent, {
        ...options,
        onDestroy: () => {
          app.unmount()
          container.remove()
          const idx = instances.value.indexOf(container)
          if (idx > -1) instances.value.splice(idx, 1)
        }
      })
    }
  })

  app.mount(container)
}

// 快捷方法
const AMessage = (options: MessageOptions | string) => {
  const opts = typeof options === 'string' ? { message: options } : options
  createMessage(opts)
}

AMessage.success = (message: string, options?: Partial<MessageOptions>) => {
  createMessage({ message, type: 'success', ...options })
}

AMessage.warning = (message: string, options?: Partial<MessageOptions>) => {
  createMessage({ message, type: 'warning', ...options })
}

AMessage.error = (message: string, options?: Partial<MessageOptions>) => {
  createMessage({ message, type: 'error', ...options })
}

AMessage.info = (message: string, options?: Partial<MessageOptions>) => {
  createMessage({ message, type: 'info', ...options })
}

export { AMessage }
export default AMessage
