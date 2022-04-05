<script setup>
import { HomeOutline, CaretUpOutline, ChatbubbleEllipses } from '@vicons/ionicons5'
import Comments from './Comments.vue'
import { NIcon, NButton, NHr, NCollapseItem, NCollapse } from 'naive-ui'
import { useRouter } from 'vue-router'
import {ref, onMounted} from "vue"

// md 测试数据
const text = `
##  关于机器的作用

本文档简述了一下每台机器的作用和必须性，具体依据可见扩容方案中的详细描述

\`\`\`python
print("hello")
\`\`\`

[百度](https://baidu.com)

### 1. 第一部分 数据库

#### 2.test

需要 4 台机器，两台域控服务器，两台数据库服务器。

数据库服务器一台作为主节点，一台作为备节点，采用的是AlwaysOn高可用方案，实现的效果是主节点如果出现故障，将会直接转移到备节点上，使整个系统保持正常的运行。

其中的域控服务器用于对需要链接数据库的一些外部服务做审计，实现集中管理和权限控制

### 2. 第二部分 组件

需要 1 台机器，其中的 Redis 用于缓存临时交换数据，包含登录，车辆基础信息等。

kafaka 消息队列用来处理所有终端传入的信息，所有行为都是问了缓解后端处理数据的压力。

### 1. 第一部分 数据库

需要 4 台机器，两台域控服务器，两台数据库服务器。

数据库服务器一台作为主节点，一台作为备节点，采用的是AlwaysOn高可用方案，实现的效果是主节点如果出现故障，将会直接转移到备节点上，使整个系统保持正常的运行。

其中的域控服务器用于对需要链接数据库的一些外部服务做审计，实现集中管理和权限控制

### 2. 第二部分 组件

需要 1 台机器，其中的 Redis 用于缓存临时交换数据，包含登录，车辆基础信息等。

kafaka 消息队列用来处理所有终端传入的信息，所有行为都是问了缓解后端处理数据的压力。

### 1. 第一部分 数据库

需要 4 台机器，两台域控服务器，两台数据库服务器。

数据库服务器一台作为主节点，一台作为备节点，采用的是AlwaysOn高可用方案，实现的效果是主节点如果出现故障，将会直接转移到备节点上，使整个系统保持正常的运行。

其中的域控服务器用于对需要链接数据库的一些外部服务做审计，实现集中管理和权限控制

### 2. 第二部分 组件

需要 1 台机器，其中的 Redis 用于缓存临时交换数据，包含登录，车辆基础信息等。

kafaka 消息队列用来处理所有终端传入的信息，所有行为都是问了缓解后端处理数据的压力。

`

const router = useRouter()
const homePush = () => {
  router.push("/")
}
const date = ref("2022-03-03")

// 获取目录结构
const menu = ref()
onMounted(() => {
  menu.value = Array.prototype.slice.call(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
  // 删除头部主题名和尾部评论数
  menu.value.splice(0,1).splice(menu.value.length - 1, 1)
  // 循环出选定节点，然后添加一个 id 属性
  for (const i of menu.value) {
    const element = document.querySelector(`*[data-v-md-line="${i.dataset.vMdLine}"]`)
    element.id = `${i.innerText}`
  }

  backTop()
})

// 跳转到指定区域
const jump = (id) => {
  // 平滑滚动到锚点
  document.getElementById(id).scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })
}

//本页面的 URL
const localUrl = window.location.href

// 回到顶部
const scrollHide = ref(true)
const backTop = () => {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
      scrollHide.value = false
    } else if (document.documentElement.scrollTop < 200) {
      scrollHide.value = true
    }
  })
}

</script>

<template>
  <!--回到顶部-->
  <div :class="{'back-hide': scrollHide}">
    <div id="back-top" @click="jump('app')">
      <n-icon><caret-up-outline /></n-icon>
    </div>
    <div id="back-comments" @click="jump('comments')">
      <n-icon><chatbubble-ellipses/></n-icon>
    </div>
  </div>
  <!--滚动容器-->
  <div class="article-container">
    <div class="post-header">
      <n-button type="primary" color="#f4f4f5" text-color="#2c3e50" @click="homePush">
        <template #icon>
          <n-icon :size="18" :component="HomeOutline" />
        </template>
        主页
      </n-button>
    </div>
    <div class="article-title">
      <div class="author">
        <h1>测试数据</h1>
        <span>2022-01-02</span>
        <span style="color: #D1D5DB" class="mx-2">/</span>
        <a>千面妖</a>
      </div>
    </div>
    <div class="">
      <div class="menu">
        <n-collapse>
          <n-collapse-item title="目录" name="1">
            <div :id="value.localName" v-for="(value, index) of menu" :key="index">
              <a class="cursor-pointer menu-retract" @click="jump(value.id)">{{ value.id }}</a>
            </div>
          </n-collapse-item>
        </n-collapse>
      </div>
    </div>
    <div>
      <v-md-preview id="post-content" :text="text"></v-md-preview>
      <div class="cc-border">
        <div>
          本文采用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">CC BY-4.0 协议</a>
          <br>
          如果您需要转载此文章，请署名本文章作者，并且注明来源
          <br>
          文章URL: <a :href="localUrl">{{ localUrl }}</a>
        </div>
      </div>
    </div>
    <!--导航-->
    <div class="navigation">
      更新时间: {{ date }}
    </div>
    <n-hr />
    <div class="post-footer">
      <comments />
      <div>
        底部版权
      </div>
    </div>
  </div>
</template>
