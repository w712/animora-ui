<template>
  <div class="page">
    <h2>输入框组件 AInput</h2>

    <section class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-row vertical">
        <AInput
          v-model="input1"
          placeholder="请输入内容"
          clearable
        />
        <AInput
          v-model="input2"
          placeholder="带清空按钮"
          clearable
        />
      </div>
    </section>

    <section class="demo-section">
      <h3>浮动标签动画</h3>
      <p class="demo-tip">
        聚焦或有值时，标签上浮并缩小
      </p>
      <div class="demo-row vertical">
        <AInput
          v-model="labelInput1"
          label="用户名"
        />
        <AInput
          v-model="labelInput2"
          label="邮箱地址"
        />
        <AInput
          v-model="labelInput3"
          label="手机号码"
        />
      </div>
    </section>

    <section class="demo-section">
      <h3>聚焦动画</h3>
      <p class="demo-tip">
        glow 发光 / border 底部边框
      </p>
      <div class="demo-row vertical">
        <AInput
          v-model="focusInput1"
          label="发光效果 (默认)"
          focus-animation="glow"
        />
        <AInput
          v-model="focusInput2"
          label="边框效果"
          focus-animation="border"
        />
        <AInput
          v-model="focusInput3"
          label="无动画"
          focus-animation="none"
        />
      </div>
    </section>

    <section class="demo-section">
      <h3>错误状态 & 抖动验证</h3>
      <p class="demo-tip">
        错误时输入框抖动
      </p>
      <div class="demo-row vertical">
        <AInput
          v-model="errorInput"
          label="密码"
          type="password"
          show-password
          :error="showError"
          :error-message="showError ? '密码长度至少6位' : ''"
        />
        <AButton
          size="small"
          @click="validateInput"
        >
          验证
        </AButton>
      </div>
    </section>

    <section class="demo-section">
      <h3>尺寸</h3>
      <div class="demo-row vertical">
        <AInput
          v-model="sizeInput"
          label="小型"
          size="small"
        />
        <AInput
          v-model="sizeInput"
          label="默认"
        />
        <AInput
          v-model="sizeInput"
          label="大型"
          size="large"
        />
      </div>
    </section>

    <section class="demo-section">
      <h3>文本域</h3>
      <div class="demo-row vertical">
        <AInput
          v-model="textarea"
          type="textarea"
          label="个人简介"
        />
      </div>
    </section>

    <section class="demo-section">
      <h3>禁用状态</h3>
      <div class="demo-row vertical">
        <AInput
          model-value="禁用的输入框"
          label="禁用"
          disabled
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('可清空的内容')

const labelInput1 = ref('')
const labelInput2 = ref('')
const labelInput3 = ref('')

const focusInput1 = ref('')
const focusInput2 = ref('')
const focusInput3 = ref('')

const errorInput = ref('')
const showError = ref(false)

const validateInput = () => {
  showError.value = errorInput.value.length < 6
  // 重置错误状态以便再次触发抖动
  if (showError.value) {
    setTimeout(() => {
      showError.value = false
      setTimeout(() => {
        showError.value = errorInput.value.length < 6
      }, 50)
    }, 500)
  }
}

const sizeInput = ref('')
const textarea = ref('')
</script>

<style scoped>
.demo-row.vertical {
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
}
</style>
