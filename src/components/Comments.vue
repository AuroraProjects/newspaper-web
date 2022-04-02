<script setup>
import {NIcon, NHr} from "naive-ui"
import {LogoMarkdown} from '@vicons/ionicons5'
import {ref} from 'vue'

const list = ref([
  "1111111111111111111111111111111111111111111111111",
  "22222"
])
const demo = ref()
const submit = () => {
  list.value.unshift(demo.value)
}
</script>

<template>
  <div class="comments">
    <div class="comments-info">
      <input placeholder="昵称">
      <input placeholder="邮箱">
      <input placeholder="站点链接">
    </div>
    <div class="comments-input">
      <textarea placeholder="请输入您的评论..."></textarea>
    </div>
    <div class="comments-submit">
      <div class="icon">
        <span>
          <n-icon size="20">
            <logo-markdown/>
          </n-icon>
        </span>
      </div>
      <div class="submit-button">
        <button>提交</button>
      </div>
    </div>
  </div>
  <div class="comments-list-header">
    <h1> 100条评论 </h1>
    <p> 由羊皮卷驱动 </p>
  </div>
  <n-hr />
  <ul>
    <li>1</li>
  </ul>
</template>
