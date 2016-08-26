<template>
  <nav-bar></nav-bar>
  <div class="flex-display">
    <h1 class="be-center main-title">
      Who are we?
    </h1>
    <h2 class="be-center mainless-title">
      We are apes who do programming in Shenzhen University!
    </h2>
    <home-blog-shows></home-blog-shows>
    <home-demo-shows></home-demo-shows>
  </div>
  <footer-bar></footer-bar>
</template>

<style lang="less">
  .flex-display {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1.main-title { margin-top: 3em; }
  h2.mainless-title {
    margin: 2em 2.8em 3em;
    font-weight: lighter;
  }

  .be-center { align-self: center; }

  .move-state:hover {
    transform: translate(0, -2px);
    cursor: pointer;
  }
</style>

<script>
  import NavBar from './components/NavBar.vue';
  import FooterBar from './components/FooterBar.vue';
  import HomeDemoShows from './components/HomeDemoShows.vue';
  import HomeBlogShows from './components/HomeBlogShows.vue';

  export default {
    data() {
      return {};
    },
    components: {
      NavBar,
      FooterBar,
      HomeDemoShows,
      HomeBlogShows,
    },
  };
</script>
