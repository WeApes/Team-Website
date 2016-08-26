<template>
  <nav-bar></nav-bar>
  <div class="blogs-display">
    <!-- <a v-link="'/'">homepage</a> -->
    <each-blog v-for="blog in blogs"
               :link="blog.link"
               :title="blog.title"
               :simplecontent="blog.simplecontent"
               :date="blog.date"
               :author="blog.author">
    </each-blog>
    <more></more>
  </div>
  <footer-bar></footer-bar>
</template>

<style lang="less" scoped>
  .blogs-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.3em 0 0;
    padding-top: 2.8em;
    // background-color: #efefef;
    a {
      color: blue;
      font-size: 3em;
      margin-left: 1em;
    }
  }
</style>

<script>
  import NavBar from './components/NavBar.vue';
  import EachBlog from './components/EachBlog.vue';
  import More from './components/More.vue';
  import FooterBar from './components/FooterBar.vue';

  export default {
    data() {
      return {
        blogs: [
          {
            title: 'ReactiveCocoa中潜在的内存泄漏及解决方案',
            simplecontent: 'ReactiveCocoa是GitHub开源的一个函数响应式编程框架，目前在美团App中大量使用。' +
            '用过它的人都知道很好用，也确实为我们的生活带来了很多...',
            author: 'Jack Singleton',
            date: '20 AUG 2016',
          },
          {
            title: 'RestQL：现代化的 API 开发方式',
            simplecontent: '介绍如何利用 RestQL 来非常有效的减少「数据操作」相关的工作量。',
            author: 'Jon Snow',
            date: '23 AUG 2016',
          },
          {
            title: '分布式队列编程优化篇',
            simplecontent: ' 前言 “分布式队列编程”是一个系列文，之前我们已经发布了《分布式队列编程模型、实战》，' +
            '主要剖析了分布式队列编程模型的需求来源、定义、结构以及其变...',
            author: 'llphp',
            date: '23 AUG 2016',
          },
        ],
      };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},

    components: {
      NavBar,
      EachBlog,
      More,
      FooterBar,
    },
  };
</script>
