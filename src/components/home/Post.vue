<script setup>
import { HomeOutline, CaretUpOutline, ChatbubbleEllipses } from "@vicons/ionicons5";
import Comments from "./Comments.vue";
import { NIcon, NButton, NHr, NCollapseItem, NCollapse } from "naive-ui";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

// md 测试数据
const post = ref({
  title: "make 和 new 的区别",
  author: "千面妖",
  date: "2022-04-06",
  md: `
> 部分代码引用自 GO 源码

两个函数都是用于给变量划分内存空间

### make

make 主要用于给切片、映射和通道这种引用类型的变量分配内存空间。

可以看一下源码中的定义。

\`\`\`go
func make(t Type, size ...IntegerType) Type
\`\`\`

可以看到 go 源码中对 make 的定义，make 可以接收多个值，第一个是一个类型，后面的值可以用于分配初始容量，接收的是一个不定长的整数类型。

返回的是这个类型的本身。

可以看一下它在源码中的注释。

\`\`\`go
// The make built-in function allocates and initializes an object of type
// slice, map, or chan (only). Like new, the first argument is a type, not a
// value. Unlike new, make's return type is the same as the type of its
// argument, not a pointer to it. The specification of the result depends on
\`\`\`

第一段解释了 make 的作用，make 主要用于分配和初始化 map、slice、chan，第一个参数是一个类型，和 new 不同的是，make 返回的是该类型本身，而不是指针，因为 map、slice、chan 本来就是引用类型。

第二段则解释了对于不同类型的分配，需要注意的地方。

\`\`\`go
//\tSlice: The size specifies the length. The capacity of the slice is
//\tequal to its length. A second integer argument may be provided to
//\tspecify a different capacity; it must be no smaller than the
//\tlength. For example, make([]int, 0, 10) allocates an underlying array
//\tof size 10 and returns a slice of length 0 and capacity 10 that is
//\tbacked by this underlying array.

//\tMap: An empty map is allocated with enough space to hold the
//\tspecified number of elements. The size may be omitted, in which case
//\ta small starting size is allocated.

//\tChannel: The channel's buffer is initialized with the specified
//\tbuffer capacity. If zero, or the size is omitted, the channel is
//\tunbuffered.
\`\`\`

如果类型是 Slice，第一个参数是 Slice 的类型，后面需要接收容量和长度。

\`\`\`go
func main() {
\ttest := make([]int, 0, 10)
\tfmt.Println(test) // 输出是[]
}
\`\`\`

如果类型是 map，空间可以省略。

\`\`\`go
func main() {
\ttest := make(map[string]string)
\tfmt.Println(test) // 输出是 map[]
}
\`\`\`

如果类型是 chan，第二个参数指的是缓冲区，如果为 0 ，或者不指定，通道就没有缓冲。

\`\`\`go
func main() {
\ttest := make(chan string, 1)
\ttest <- "test"
\tfmt.Println(<-test) // 输出是 "test"
}
\`\`\`

### new

new 主要用于给数组、结构体和所有值类型的变量分配内存空间。

可以看一下源码中的定义。

\`\`\`go
// The new built-in function allocates memory. The first argument is a type,
// not a value, and the value returned is a pointer to a newly
// allocated zero value of that type.
func new(Type) *Type
\`\`\`

在注释中可以看到，该函数用于给变量分配内存，第一个参数是类型，并且返回的值是一个指向分配该类型零值的指针。

现在来测试一下。

\`\`\`go
func main() {
\ttest := new(string)
\tfmt.Printf("%T", test) // 这里会输出 *string
\tfmt.Println(*test) // 这里应该啥都没有，在 go 中字符串的零值就是空
}
\`\`\`

可以看到，new 函数返回的是一个指向该类型的指针，其值为该类型的零值。
  `,
});

const router = useRouter();
const homePush = () => {
  router.push("/");
};
const date = ref("2022-03-03");

// 获取目录结构
const menu = ref();
onMounted(() => {
  menu.value = Array.prototype.slice.call(document.querySelectorAll("h1,h2,h3,h4,h5,h6"));
  // 删除头部主题名和尾部评论数
  menu.value.splice(0, 1).splice(menu.value.length - 1, 1);
  // 循环出选定节点，然后添加一个 id 属性
  for (const i of menu.value) {
    const element = document.querySelector(`*[data-v-md-line="${i.dataset.vMdLine}"]`);
    element.id = `${i.innerText}`;
  }

  backTop();
});

// 跳转到指定区域
const jump = (id) => {
  // 平滑滚动到锚点
  document.getElementById(id).scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

//本页面的 URL
const localUrl = window.location.href;

// 回到顶部
const scrollHide = ref(true);
const backTop = () => {
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scrollHide.value = false;
    } else if (document.documentElement.scrollTop < 200) {
      scrollHide.value = true;
    }
  });
};
</script>

<template>
  <!--回到顶部-->
  <transition name="fade">
    <div v-if="!scrollHide">
      <div id="back-top" @click="jump('app')">
        <n-icon><caret-up-outline /></n-icon>
      </div>
      <div id="back-comments" @click="jump('comments')">
        <n-icon><chatbubble-ellipses /></n-icon>
      </div>
    </div>
  </transition>
  <!--文章主体容器-->
  <div class="article-container">
    <div class="post-header">
      <n-button @click="homePush">
        <template #icon>
          <n-icon :size="18" :component="HomeOutline" />
        </template>
        主页
      </n-button>
    </div>
    <div class="article-title">
      <div class="author">
        <h1>{{ post.title }}</h1>
        <span>{{ post.date }}</span>
        <span style="color: #d1d5db" class="mx-2">/</span>
        <a>{{ post.author }}</a>
      </div>
    </div>
    <!-- 目录组件 -->
    <div>
      <div class="menu">
        <n-collapse>
          <n-collapse-item title="目录" name="1">
            <div :id="value.localName" v-for="(value, index) of menu" :key="index">
              <a class="cursor-pointer menu-retract" @click="jump(value.id)">{{
                value.id
              }}</a>
            </div>
          </n-collapse-item>
        </n-collapse>
      </div>
    </div>
    <div>
      <v-md-preview id="post-content" :text="post.md"></v-md-preview>
      <div class="cc-border">
        <div>
          本文采用
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"
            >CC BY-4.0 协议</a
          >
          <br />
          如果您需要转载此文章，请署名本文章作者，并且注明来源
          <br />
          文章URL: <a :href="localUrl">{{ localUrl }}</a>
        </div>
      </div>
    </div>
    <!--导航-->
    <div class="navigation">更新时间: {{ date }}</div>
    <n-hr />
    <div class="post-footer">
      <comments />
      <div class="post-copyright">
        <p>
          自豪的使用
          <a href="https://github.com/AuroraProjects/newspaper-web">Newspaper</a> 驱动
        </p>
      </div>
    </div>
  </div>
</template>
