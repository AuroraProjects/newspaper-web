<script setup>
import { LogoGithub, LogoTwitter, Mail } from '@vicons/ionicons5';
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
    {
    title: '测试文章01',
    date: '2022-01-01',
  },
    {
    title: '测试文章01',
    date: '2022-01-01',
  },
    {
    title: '测试文章01',
    date: '2022-01-01',
  },
    {
    title: '测试文章01',
    date: '2022-01-01',
  },
    {
    title: '测试文章01',
    date: '2022-01-01',
  },
    {
    title: '测试文章01',
    date: '2022-01-01',
  },

]);
</script>

<template>
  <!-- 头部信息 -->
  <div class="home-header lg:mt-8 md:mt-2">
    <div>
      <h1 class="md:text-2xl lg:text-3xl">
        <span class="mr-2.5">👋</span> Hey, Here is the Newspaper
        <!-- <span class="md:hidden">
        Go Github 
        <n-icon>
          <arrow-forward/>
        </n-icon>
        </span> -->
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
    <article v-for="(item, index) of data" :key="index">
      <a href="/post/1">
        <h2 class="text-2xl"># {{ item.title }}</h2>
      </a>
      <div class="post-info">
        <span>{{ item.date }}</span>
      </div>
    </article>
  </div>
</template>
