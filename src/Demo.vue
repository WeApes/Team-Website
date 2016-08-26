<template>
  <nav-bar></nav-bar>
  <br>
  <br>
  <br>
  <br>
  <br>
  <a v-link="'/'" style="color: yellow; font-size: 3em; margin-left: 1em;">homepage</a>
  <footer-bar></footer-bar>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import FooterBar from './components/FooterBar.vue';

  export default {
    components: {
      NavBar,
      FooterBar,
    },
  };
</script>

<style lang="less" scoped>
</style>
