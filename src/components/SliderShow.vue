<template>
  <input type="radio" checked name="slider" id="l1">
  <input type="radio" checked name="slider" id="l2">
  <input type="radio" checked name="slider" id="l3">

  <div class="wrap">
    <ul class="slider">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>

  <div class="opts">
    <label for="l1">1</label>
    <label for="l2">2</label>
    <label for="l3">3</label>
  </div>
</template>

<style lang="less" scoped>
  ul { list-style:none; }

  .wrap {
    width: 600px;
    height: 400px;
    margin: 30px auto;
    // border: 1px solid #9cc5ef;
    overflow: hidden;

    .slider {
      width: 300%;
      font: 100px/400px Microsoft Yahei;
      text-align: center;
      color: #fff;
      margin-left: 0;
      animation: slide1 3s ease-out infinite;

      li {
        width: 600px;
        float: left;
        &:nth-child(1) { background: #6bacef; }
        &:nth-child(2) { background: #297cd3; }
        &:nth-child(3) { background: #01254a; }
      }
    }
  }

  /*创建三种动画策略*/
  @keyframes slide1 {
    0% { margin-left: 0; }
    23% { margin-left: 0; }
    33% { margin-left: -600px; }
    56% { margin-left: -600px; }
    66% { margin-left: -1200px; }
    90% { margin-left: -1200px; }
    100% { margin-left: 0; }
  }

  @keyframes slide2 {
    0% { margin-left: -600px; }
    23% { margin-left: -600px; }
    33% { margin-left: -1200px; }
    56% { margin-left: -1200px; }
    66% { margin-left: 0; }
    90% { margin-left: 0; }
    100% { margin-left: -600px; }
  }

  @-keyframes slide3 {
    0% { margin-left: -1200px; }
    23% { margin-left: -1200px; }
    33% { margin-left: 0; }
    56% { margin-left: 0; }
    66% { margin-left: -600px; }
    90% { margin-left: -600px; }
    100% { margin-left: -1200px; }
  }

  /*修改动画名称*/
  #l1:checked ~ .wrap .slider { animation-name: slide1; }
  #l2:checked ~ .wrap .slider { animation-name: slide2; }
  #l3:checked ~ .wrap .slider { animation-name: slide3; }

  /*短暂地取消动画名称，模拟重启动画*/
  #l1:active ~ .wrap .slider {
    animation-name: none;
    margin-left: 0;
  }
  #l2:active ~ .wrap .slider {
    animation-name: none;
    margin-left: -600px;
  }
  #l3:active ~ .wrap .slider {
    animation-name: none;
    margin-left: -1200px;
  }

  .opts {
    // height: 40px;
    color: #fff;
    text-align: center;
    font: 20px/40px Microsoft Yahei;

    label {
      padding: .5em 1em;
      margin-right: .2em;
      background: #01254a;
      &:hover { background:#405871; }
    }
  }

  #l1, #l2, #l3 { display: none; }
</style>

<script>
  export default {
    data() {
      return {
      };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {},

    props: {
      link: {
        type: String,
      },

      img: {},
    },
  };
</script>
