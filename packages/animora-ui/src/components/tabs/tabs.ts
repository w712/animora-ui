// ATabs 组件 - Props 和类型定义

import type { ExtractPropTypes, PropType } from 'vue-demi'

export type TabsAnimation = 'slide' | 'fade' | 'scale' | 'flip'

export const tabsProps = {
  /** 当前激活的 tab */
  modelValue: {
    type: [String, Number],
    default: ''
  },
  /** 动画效果 */
  animation: {
    type: String as PropType<TabsAnimation>,
    default: 'slide'
  }
} as const

export type TabsProps = ExtractPropTypes<typeof tabsProps>

export const tabsEmits = {
  'update:modelValue': (val: string | number) => true,
  change: (val: string | number) => true
}

export const tabPaneProps = {
  /** 标签名 */
  label: {
    type: String,
    required: true
  },
  /** 唯一标识 */
  name: {
    type: [String, Number],
    required: true
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>
