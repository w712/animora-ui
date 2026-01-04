// AButton 组件 - Props 和类型定义

import type { ExtractPropTypes, PropType } from 'vue-demi'

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'small' | 'default' | 'large'
export type ButtonAnimation = 'ripple' | 'pulse' | 'shake' | 'bounce' | 'glow' | 'none'

export const buttonProps = {
  /** 按钮类型 */
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  /** 按钮尺寸 */
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default'
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** 是否加载中 */
  loading: {
    type: Boolean,
    default: false
  },
  /** 是否圆角 */
  round: {
    type: Boolean,
    default: false
  },
  /** 是否圆形 */
  circle: {
    type: Boolean,
    default: false
  },
  /** 点击动画 */
  animation: {
    type: String as PropType<ButtonAnimation>,
    default: 'ripple'
  },
  /** 悬停动画 */
  hoverAnimation: {
    type: String as PropType<'scale' | 'glow' | 'none'>,
    default: 'scale'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits
