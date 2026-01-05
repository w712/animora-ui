// ASelect 组件类型定义

import type { ExtractPropTypes, PropType } from 'vue-demi'

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export const selectProps = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | (string | number)[]>,
    default: ''
  },
  /** 选项列表 */
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => []
  },
  /** 占位文本 */
  placeholder: {
    type: String,
    default: '请选择'
  },
  /** 浮动标签 */
  label: {
    type: String,
    default: ''
  },
  /** 尺寸 */
  size: {
    type: String as PropType<'small' | 'default' | 'large'>,
    default: 'default'
  },
  /** 禁用 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** 可清空 */
  clearable: {
    type: Boolean,
    default: false
  },
  /** 多选 */
  multiple: {
    type: Boolean,
    default: false
  },
  /** 下拉动画 */
  animation: {
    type: String as PropType<'slide' | 'fade' | 'zoom'>,
    default: 'slide'
  }
} as const

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = {
  'update:modelValue': (value: string | number | (string | number)[]) => true,
  change: (value: string | number | (string | number)[]) => true,
  focus: () => true,
  blur: () => true,
  clear: () => true
}

export type SelectEmits = typeof selectEmits
