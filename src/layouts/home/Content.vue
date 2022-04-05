<script setup>
import { LogoGithub, LogoTwitter, Mail, StarOutline } from '@vicons/ionicons5';
import { ref } from 'vue';
// 测试数据
const data = ref([
  {
    title: 'Vue 学习指南',
    type: 'article',
    date: '2022-01-01',
  },
  {
    title: '这里只有一句话，没有其他的',
    type: 'log',
    date: '2022-01-02',
  },
]);
</script>

<template>
  <!-- 头部信息 -->
  <div class="home-header lg:mt-8 md:mt-2">
    <div>
      <h1 class="md:text-2xl lg:text-3xl">
        <span class="mr-2.5">👋</span> Hey, Here is the Newspaper
      </h1>
      <p class="md:text-sm lg:text-base">过着绝对没有意义的生活，没有完全无法实现的目标。</p>
    </div>
    <!-- 社交信息 -->
    <div class="social">
      <div>
        <n-button>
          <template #icon>
            <n-icon>
              <logo-github />
            </n-icon>
          </template>
          Github
        </n-button>
        <n-button>
          <template #icon>
            <n-icon>
              <logo-twitter />
            </n-icon>
          </template>
          Twitter
        </n-button>
        <n-button>
          <template #icon>
            <n-icon>
              <mail />
            </n-icon>
          </template>
          Email
        </n-button>
      </div>
    </div>
  </div>
  <!-- 文章列表 -->
  <div id="comments" class="content post-container">
    <div class="post-content" v-for="(item, index) of data" :key="index">
      <div>
        <article>
          <!-- 根据不同的文字文章类型渲染不通的样式 -->
          <!-- 日志类型的渲染 -->
          <div v-if="item.type === 'log'">
            <div class="type">{{ item.type }}</div>
            <p class="text-lg">{{ item.title }}</p>
          </div>
          <!-- 文章类型的渲染 -->
          <div v-if="item.type === 'article'">
            <div class="type">{{ item.type }}</div>
            <a href="/post/1">
              <h2 class="text-2xl">{{ item.title }}</h2>
            </a>
            <p>{{ item.introduction }}</p>
          </div>
        </article>
      </div>
      <div class="post-info">
        <n-icon color="#F87171">
          <star-outline />
        </n-icon>
        <span>·</span>
        <p>{{ item.date }}</p>
        <span>·</span>
        <p>其他信息</p>
      </div>
    </div>
  </div>
</template>
