<script setup>
// 禁止浏览器手动放大页面
window.onload = () => {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
  });
};
</script>
<template>
  <router-view />
</template>
