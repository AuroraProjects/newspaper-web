<script setup>
import HeaderView from '../components/home/layouts/Herder.vue';
import FooterView from '../components/home/layouts/Footer.vue';
import ContentView from '../components/home/layouts/Content.vue';
</script>

<template>
  <div class="container">
    <!--头部-->
    <header-view />
    <!-- 内容区 -->
    <content-view />
    <!-- 翻页 -->
    <div class="paging cursor-pointer">
      <a class="prev-page"> 上一页 </a>
      <a class="next-page"> 下一页 </a>
    </div>
    <!-- 底部 -->
    <footer-view />
  </div>
</template>
