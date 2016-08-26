<template>
  <nav class="container" style="position: fixed; top: -0px;">
    <a v-link="{ path: '/' }">Home</a>
    <a v-link="{ path: '/blog' }">Blog</a>
    <a v-link="{ path: '/demo' }">Demo</a>
    <a >About us</a>
  </nav>
</template>

<style lang="less" scoped>
  .container {
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
    border-top: 2px solid rgba(92, 153, 214, 0.5);
    border-bottom: 2px solid rgba(15, 38, 61, 0.5);
    width: 100%;
    &:hover { background-color: #1d365d; }

    a {
      display: inline-flex;
      padding: 0px 15px;
      line-height: 2.8em;
      font-size: 16px;
      text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.5);
      color: #fff;
      &:hover { background-color: #262626; }
    }
  }
</style>

<script>
</script>
