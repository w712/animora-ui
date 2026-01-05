// AInput 组件类型定义

import type { ExtractPropTypes, PropType } from 'vue-demi'

export const inputProps = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  /** 输入框类型 */
  type: {
    type: String as PropType<'text' | 'password' | 'textarea' | 'number'>,
    default: 'text'
  },
  /** 占位文本 */
  placeholder: {
    type: String,
    default: ''
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
  /** 只读 */
  readonly: {
    type: Boolean,
    default: false
  },
  /** 可清空 */
  clearable: {
    type: Boolean,
    default: false
  },
  /** 显示密码切换 */
  showPassword: {
    type: Boolean,
    default: false
  },
  /** 前缀图标 */
  prefixIcon: {
    type: String,
    default: ''
  },
  /** 后缀图标 */
  suffixIcon: {
    type: String,
    default: ''
  },
  /** 最大长度 */
  maxlength: {
    type: Number
  },
  /** 错误状态 */
  error: {
    type: Boolean,
    default: false
  },
  /** 错误信息 */
  errorMessage: {
    type: String,
    default: ''
  },
  /** 聚焦动画 */
  focusAnimation: {
    type: String as PropType<'glow' | 'border' | 'none'>,
    default: 'glow'
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  'update:modelValue': (value: string | number) => true,
  input: (value: string | number) => true,
  change: (value: string | number) => true,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true
}

export type InputEmits = typeof inputEmits
