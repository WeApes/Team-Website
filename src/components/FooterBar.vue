<template>
  <footer class="foot-style">
    <div class="top">
      <div class="left-section">
        <h1>关于<span>Apes Group.....</span></h1>
        <p>
          我们不仅仅是一个团队，同时也是一个社区：我们汇集满怀激情的软件精英，通过技术和客户共同应对最艰巨的挑战。同时我们寻求IT行业的革新，并致力于对社会产生积极的影响力。
        </p>
      </div>
      <div class="right-section">
        <h1>与我们互动</h1>
        <div class="icons">
          <div class="weibo"><a href="#">weibo</a></div>
          <div class="wechat"><a href="#">wechat</a></div>
          <div class="email"><a href="mailto:lawrencepeng233@gmail.com">email</a></div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <nav>
        <a v-link="{ path: '/' }">首页</a>
        <a v-link="{ path: '/' }">观点</a>
        <a v-link="{ path: '/' }">关于我们</a>
        <a v-link="{ path: '/' }">联系我们</a>
      </nav>
    </div>
  </footer>
</template>

<style lang="less" scoped>
  @font-color: #fff;

  footer.foot-style {
    display: flex;
    flex-direction: column;
    // justify-content: flex-end;
    margin-top: 5em;
    background-color: #808285;
    color: @font-color;
    a { color: @font-color; }
    h1 {
      font-size: 2.6em;
      span { font-weight: lighter; }
    }

    div.top {
      display: flex;
      flex-wrap: wrap;
      margin: 3.6em 4em 3.6em 7.7em;
    }

    div.left-section {
      margin: 1.6em 2em 1.6em;
      h1 { margin-bottom: .8em; }
      p {
        width: 30em;
        font-size: 1.2em;
      }
    }

    div.right-section {
      display: flex;
      flex-direction: column;
      margin: 2em 0 0 2em;

      h1 { margin-bottom: 1.8em; }
      div.icons {
        div {
          display: inline;
          margin: 2em 1em 0 0;
          padding: 1em;
          border-radius: 1em;
          background-color: #555;
          &:hover { background-color: black; }
        }
      }
    }

    div.bottom {
      border-top: 1px solid rgba(0,0,0,.3);
      padding: 1.8em 0;
      margin: 1em;
      a { padding: 0 .5em; }
    }
  }

</style>

<script>
</script>
