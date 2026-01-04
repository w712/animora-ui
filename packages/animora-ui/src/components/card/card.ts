// ACard 组件 - Props 和类型定义

import type { ExtractPropTypes, PropType } from 'vue-demi'

export type CardAnimation = 'hover-lift' | 'hover-glow' | 'flip' | 'tilt' | 'none'

export const cardProps = {
  /** 卡片标题 */
  title: String,
  /** 卡片阴影 */
  shadow: {
    type: String as PropType<'always' | 'hover' | 'never'>,
    default: 'always'
  },
  /** 是否有边框 */
  bordered: {
    type: Boolean,
    default: true
  },
  /** 动画效果 */
  animation: {
    type: String as PropType<CardAnimation>,
    default: 'hover-lift'
  }
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
