<script setup>
import {
  LogoGithub,
  LogoTwitter,
  Mail,
  FolderOpenOutline,
  ChatbubbleEllipsesOutline,
  HeartOutline,
  HeartSharp,
} from '@vicons/ionicons5';
import { ref } from 'vue';
// 测试数据
const data = ref([
  {
    id: 1,
    title: 'Vue 学习指南',
    type: 'article',
    date: '2022-01-01',
    likeNum: '100'
  },
  {
    id: 2,
    title: '这里只有一句话，没有其他的',
    type: 'log',
    date: '2022-01-02',
    likeNum: '30'
  },
]);

// 喜欢此文章
const hear = ref(false)
const like = (id) => {
  hear.value = id
  setTimeout(() => {
    hear.value = undefined
  }, 500)
}
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
            <div class="type">
              <label>
                <n-icon>
                  <chatbubble-ellipses-outline />
                </n-icon>
                <span>{{ item.type }}</span>
              </label>
            </div>
            <p class="text-lg">{{ item.title }}</p>
          </div>
          <!-- 文章类型的渲染 -->
          <div v-if="item.type === 'article'">
            <div class="type">
              <label>
                <n-icon>
                  <folder-open-outline />
                </n-icon>
                <span>{{ item.type }}</span>
              </label>
            </div>
            <a href="/post/1">
              <h2 class="text-2xl">{{ item.title }}</h2>
            </a>
            <p>{{ item.introduction }}</p>
          </div>
        </article>
      </div>
      <div class="post-info">
        <!-- 未填充状态 -->
        <n-icon v-if="hear !== item.id"  @click="like(item.id)"  color="#F87171" size="18">
          <heart-outline />
        </n-icon>
        <!-- 填充状态 -->
        <n-icon v-if="hear === item.id"  color="#F87171" size="18">
          <heart-sharp />
        </n-icon>
        <span class="like">{{ item.likeNum }}</span>
        <span>·</span>
        <p>{{ item.date }}</p>
        <span>·</span>
        <p>{{ item.type === 'log' ? '日志' : item.type === 'article' ? '文章' : undefined  }}</p>
      </div>
    </div>
  </div>
</template>
