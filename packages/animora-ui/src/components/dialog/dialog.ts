// ADialog 组件 - Props 和类型定义

import type { ExtractPropTypes, PropType } from 'vue-demi'

export type DialogAnimation = 'fade' | 'zoom' | 'slide-down' | 'slide-up' | 'flip' | 'bounce'

export const dialogProps = {
  /** 是否显示 */
  modelValue: {
    type: Boolean,
    default: false
  },
  /** 标题 */
  title: String,
  /** 宽度 */
  width: {
    type: String,
    default: '500px'
  },
  /** 是否显示关闭按钮 */
  showClose: {
    type: Boolean,
    default: true
  },
  /** 点击遮罩关闭 */
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  /** 动画效果 */
  animation: {
    type: String as PropType<DialogAnimation>,
    default: 'zoom'
  }
} as const

export type DialogProps = ExtractPropTypes<typeof dialogProps>

export const dialogEmits = {
  'update:modelValue': (val: boolean) => typeof val === 'boolean',
  close: () => true
}
