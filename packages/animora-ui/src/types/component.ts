// 组件相关类型定义

import type { ExtractPropTypes, PropType } from 'vue-demi'

/**
 * 组件尺寸
 */
export type ComponentSize = 'small' | 'default' | 'large'

/**
 * 组件类型
 */
export type ComponentType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

/**
 * 创建 Props 类型
 */
export type PropsType<T> = ExtractPropTypes<T>

/**
 * 可空类型
 */
export type Nullable<T> = T | null

/**
 * 可选类型
 */
export type Optional<T> = T | undefined
