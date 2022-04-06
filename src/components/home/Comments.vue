<script setup>
import { LogoMarkdown } from '@vicons/ionicons5';
import { ref } from 'vue';
const commentNumber = ref(100)

</script>

<template>
  <div id="comments" class="comments">
    <div class="comments-info">
      <input placeholder="昵称" />
      <input placeholder="邮箱" />
      <input placeholder="站点链接" />
    </div>
    <div class="comments-input">
      <textarea placeholder="请输入您的评论..."></textarea>
    </div>
    <div class="comments-submit">
      <div class="icon">
        <span>
          <n-icon size="20">
            <logo-markdown />
          </n-icon>
        </span>
      </div>
      <div class="submit-button">
        <button>提交</button>
      </div>
    </div>
  </div>
  <div class="comments-list-header">
    <div> {{ commentNumber  }} 条评论 </div>
    <p> <a href="https://github.com/AuroraProjects/newspaper-web">Newspaper</a> 驱动 </p>
  </div>
  <n-hr />
  <ul>
    <li></li>
  </ul>
</template>
