<template>
  <div
    :class="[
      'a-input',
      `a-input--${size}`,
      {
        'is-disabled': disabled,
        'is-focus': isFocused,
        'is-error': error,
        'has-label': label,
        'has-value': hasValue
      }
    ]"
    :data-focus-animation="focusAnimation"
  >
    <!-- 浮动标签 -->
    <label
      v-if="label"
      class="a-input__label"
    >{{ label }}</label>

    <div class="a-input__wrapper">
      <!-- 前缀 -->
      <span
        v-if="$slots.prefix || prefixIcon"
        class="a-input__prefix"
      >
        <slot name="prefix">
          <span
            v-if="prefixIcon"
            class="a-input__icon"
          >{{ prefixIcon }}</span>
        </slot>
      </span>

      <!-- 输入框 -->
      <input
        v-if="type !== 'textarea'"
        ref="inputRef"
        class="a-input__inner"
        :type="showPasswordVisible ? 'text' : type"
        :value="modelValue"
        :placeholder="label ? '' : placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >

      <!-- 文本域 -->
      <textarea
        v-else
        ref="inputRef"
        class="a-input__inner a-input__textarea"
        :value="modelValue"
        :placeholder="label ? '' : placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />

      <!-- 后缀 -->
      <span
        v-if="showSuffix"
        class="a-input__suffix"
      >
        <!-- 清空按钮 -->
        <span
          v-if="showClear"
          class="a-input__icon a-input__clear"
          @click="handleClear"
        >
          ✕
        </span>
        <!-- 密码切换 -->
        <span
          v-if="showPassword && type === 'password'"
          class="a-input__icon a-input__password"
          @click="togglePassword"
        >
          {{ showPasswordVisible ? '👁' : '👁‍🗨' }}
        </span>
        <!-- 自定义后缀 -->
        <slot name="suffix">
          <span
            v-if="suffixIcon"
            class="a-input__icon"
          >{{ suffixIcon }}</span>
        </slot>
      </span>
    </div>

    <!-- 错误信息 -->
    <Transition name="a-input-error">
      <div
        v-if="error && errorMessage"
        class="a-input__error"
      >
        {{ errorMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, Transition } from 'vue-demi'
import { inputProps, inputEmits } from './input'

defineOptions({ name: 'AInput' })

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const inputRef = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)
const isFocused = ref(false)
const showPasswordVisible = ref(false)

const hasValue = computed(() => {
  return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined
})

const showClear = computed(() => {
  return props.clearable && hasValue.value && !props.disabled && !props.readonly
})

const showSuffix = computed(() => {
  return showClear.value || props.showPassword || props.suffixIcon || !!inputRef.value
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
  emit('input', value)
}

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('change', value)
}

const handleFocus = (e: FocusEvent) => {
  isFocused.value = true
  emit('focus', e)
}

const handleBlur = (e: FocusEvent) => {
  isFocused.value = false
  emit('blur', e)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

const togglePassword = () => {
  showPasswordVisible.value = !showPasswordVisible.value
}

// 暴露方法
const focus = () => inputRef.value?.focus()
const blur = () => inputRef.value?.blur()

defineExpose({ focus, blur, inputRef })
</script>

<style lang="scss">
@import './style/index.scss';
</style>
