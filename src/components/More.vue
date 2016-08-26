<template>
  <div class="at-bottom more be-center move-state">
    <a v-link="link">了解更多</a>
  </div>
</template>

<style lang="less" scoped>
  @darken-grey: #333;

  .at-bottom {
    display: flex;
    justify-content: flex-end;
    margin: 3em;
    padding: .8em .6em;
    background-color: black;
    &:hover { background-color: @darken-grey; }
    a { color: white; }
  }
</style>

<script>
  export default {
    data() {
      return {
      };
    },
    components: {},
    props: {
      link: {
        type: String,
        required: true,
      },
    },
  };
</script>
