<template>
  <div class="each-tag">
    {{ name }}
  </div>
</template>

<style lang="less" scoped>
  .each-tag {
    margin: .6em;
    padding: .6em;
    border-radius: 1em;
    background-color: #ccc;
    color: white;
    &:hover {
      background-color: #eee;
      color: #999;
    }
  }
</style>

<script>
  export default {
    props: {
      name: String,
    },
    data() {
      return {
      };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {},
  };
</script>
