<script setup>
import { ref } from 'vue';
// 测试数据
const data = ref([
  {
    title: '测试文章01',
    date: '2022-01-01',
  },
  {
    title: '测试文章02',
    date: '2022-01-02',
  },
]);
</script>

<template>
  <div id="comments" class="content post-container">
    <article v-for="(item, index) of data" :key="index">
      <a href="/post/1">
        <h2># {{ item.title }}</h2>
      </a>
      <div class="post-info">
        <span>{{ item.date }}</span>
      </div>
    </article>
  </div>
</template>
