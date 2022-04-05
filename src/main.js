import { createApp } from 'vue'
import App from './App.vue'
// md 编辑器
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'
// md 文章页面渲染
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from "highlight.js"
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
// 引入 tailwind.css
import "tailwindcss/tailwind.css"
import './assets/style.sass'
import './assets/rewrite.sass'

import store from './router/index.js'
import router from './store/index.js'
// 评论组件



// md 解析器
VMdPreview.use(githubTheme, {
  Hljs: hljs
}).use(createLineNumbertPlugin())

// md 编辑器
VueMarkdownEditor.use(vuepressTheme, {
  Prism
}).use(createLineNumbertPlugin())

const app = createApp(App)
  .use(VueMarkdownEditor)
  .use(VMdPreview)
  .use(store)
  .use(router)
app.mount('#app')
