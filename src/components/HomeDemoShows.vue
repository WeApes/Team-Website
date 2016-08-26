<template>
  <div class="demo-shows">
    <h1 class="be-center">Our demos</h1>
    <slider-show></slider-show>
    <more link="/demo"></more>
  </div>
</template>

<style lang="less" scoped>
  .demo-shows {
    display: flex;
    flex-direction: column;
    h1 { margin: 2.8em auto 1em; }
  }
</style>


<script>
  import SliderShow from './SliderShow.vue';
  import More from './More.vue';

  export default {
    data() {
      return {};
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {
      SliderShow,
      More,
    },
  };
</script>
