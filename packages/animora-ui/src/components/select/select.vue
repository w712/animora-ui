<template>
  <div
    ref="selectRef"
    :class="[
      'a-select',
      `a-select--${size}`,
      {
        'is-disabled': disabled,
        'is-focus': isOpen,
        'has-label': label,
        'has-value': hasValue
      }
    ]"
  >
    <!-- 浮动标签 -->
    <label v-if="label" class="a-select__label">{{ label }}</label>

    <!-- 触发器 -->
    <div class="a-select__trigger" @click="toggleDropdown">
      <div class="a-select__value">
        <!-- 多选标签 -->
        <template v-if="multiple && Array.isArray(modelValue)">
          <TransitionGroup name="a-select-tag">
            <span
              v-for="val in modelValue"
              :key="val"
              class="a-select__tag"
            >
              {{ getLabel(val) }}
              <span class="a-select__tag-close" @click.stop="removeTag(val)">×</span>
            </span>
          </TransitionGroup>
          <span v-if="modelValue.length === 0" class="a-select__placeholder">
            {{ placeholder }}
          </span>
        </template>
        <!-- 单选 -->
        <template v-else>
          <span v-if="hasValue">{{ selectedLabel }}</span>
          <span v-else class="a-select__placeholder">{{ placeholder }}</span>
        </template>
      </div>

      <!-- 图标 -->
      <span class="a-select__suffix">
        <span
          v-if="showClear"
          class="a-select__icon a-select__clear"
          @click.stop="handleClear"
        >×</span>
        <span :class="['a-select__icon a-select__arrow', { 'is-open': isOpen }]">▼</span>
      </span>
    </div>

    <!-- 下拉菜单 -->
    <Transition :name="`a-select-dropdown-${animation}`">
      <div v-show="isOpen" class="a-select__dropdown">
        <div class="a-select__options">
          <div
            v-for="option in options"
            :key="option.value"
            :class="[
              'a-select__option',
              {
                'is-selected': isSelected(option.value),
                'is-disabled': option.disabled
              }
            ]"
            @click="selectOption(option)"
          >
            {{ option.label }}
            <span v-if="isSelected(option.value)" class="a-select__check">✓</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, Transition, TransitionGroup } from 'vue-demi'
import { selectProps, selectEmits, type SelectOption } from './select'

defineOptions({ name: 'ASelect' })

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

const selectRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

const hasValue = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0
  }
  return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined
})

const selectedLabel = computed(() => {
  const option = props.options.find(o => o.value === props.modelValue)
  return option?.label || ''
})

const showClear = computed(() => {
  return props.clearable && hasValue.value && !props.disabled
})

const getLabel = (value: string | number) => {
  const option = props.options.find(o => o.value === value)
  return option?.label || value
}

const isSelected = (value: string | number) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value)
  }
  return props.modelValue === value
}

const toggleDropdown = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    emit('focus')
  } else {
    emit('blur')
  }
}

const selectOption = (option: SelectOption) => {
  if (option.disabled) return

  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = values.indexOf(option.value)
    if (index > -1) {
      values.splice(index, 1)
    } else {
      values.push(option.value)
    }
    emit('update:modelValue', values)
    emit('change', values)
  } else {
    emit('update:modelValue', option.value)
    emit('change', option.value)
    isOpen.value = false
  }
}

const removeTag = (value: string | number) => {
  if (props.disabled) return
  const values = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  const index = values.indexOf(value)
  if (index > -1) {
    values.splice(index, 1)
    emit('update:modelValue', values)
    emit('change', values)
  }
}

const handleClear = () => {
  const value = props.multiple ? [] : ''
  emit('update:modelValue', value)
  emit('clear')
}

// 点击外部关闭
const handleClickOutside = (e: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss">
@import './style/index.scss';
</style>
