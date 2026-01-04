// 预设动画统一导出和注册

import type { AnimationConfig } from '../../types'

// 导入所有预设
import * as fade from './fade'
import * as slide from './slide'
import * as attention from './attention'
import * as zoom from './zoom'
import * as flip from './flip'
import * as rotate from './rotate'
import * as bounce from './bounce'

// 预设注册表
const presetRegistry = new Map<string, AnimationConfig>()

// 注册预设
function registerPresets(presets: Record<string, AnimationConfig>) {
  Object.values(presets).forEach((preset) => {
    presetRegistry.set(preset.name, preset)
  })
}

// 初始化注册
registerPresets(fade)
registerPresets(slide)
registerPresets(attention)
registerPresets(zoom)
registerPresets(flip)
registerPresets(rotate)
registerPresets(bounce)

/**
 * 获取预设动画配置
 */
export function getPreset(name: string): AnimationConfig | undefined {
  return presetRegistry.get(name)
}

/**
 * 注册自定义预设
 */
export function registerPreset(name: string, config: AnimationConfig): void
export function registerPreset(config: AnimationConfig): void
export function registerPreset(nameOrConfig: string | AnimationConfig, config?: AnimationConfig): void {
  if (typeof nameOrConfig === 'string') {
    presetRegistry.set(nameOrConfig, config!)
  } else {
    presetRegistry.set(nameOrConfig.name, nameOrConfig)
  }
}

/**
 * 获取所有预设名称
 */
export function getPresetNames(): string[] {
  return Array.from(presetRegistry.keys())
}

// 导出所有预设
export * from './fade'
export * from './slide'
export * from './attention'
export * from './zoom'
export * from './flip'
export * from './rotate'
export * from './bounce'
