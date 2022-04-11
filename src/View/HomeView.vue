<script setup>
import HeaderView from "../layouts/home/Herder.vue";
import FooterView from "../layouts/home/Footer.vue";
import ContentView from "../layouts/home/Content.vue";
</script>

<template>
  <!-- 全局容器 -->
  <div class="global-container">
    <!--头部-->
    <header-view />
    <!-- 内容区 -->
    <content-view />
    <!-- 底部 -->
    <footer-view />
  </div>
</template>
