// AMessage 类型定义

export type MessageType = 'success' | 'warning' | 'error' | 'info'
export type MessageAnimation = 'slide' | 'fade' | 'bounce'

export interface MessageProps {
  message: string
  type?: MessageType
  duration?: number
  showClose?: boolean
  animation?: MessageAnimation
}

export interface MessageInstance {
  id: string
  props: MessageProps
  close: () => void
}
