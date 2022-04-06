<script setup>
import HeaderView from "../layouts/home/Herder.vue";
import FooterView from "../layouts/home/Footer.vue";
import ContentView from "../layouts/home/Content.vue";
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
</script>

<template>
  <!-- 全局容器 -->
  <div class="global-container">
    <!--头部-->
    <header-view />
    <!-- 内容区 -->
    <content-view />
    <!-- 翻页 -->
    <div class="paging">
      <a class="prev-page">
        <n-icon>
          <arrow-back />
        </n-icon>
        上一页
      </a>
      <a class="next-page">
        下一页
        <n-icon>
          <arrow-forward />
        </n-icon>
      </a>
    </div>
    <!-- 底部 -->
    <footer-view />
  </div>
</template>
