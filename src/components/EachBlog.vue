<template>
  <div class="each-style move-state form" id="form">
    <div class="corner" id="corner"></div>
    <a v-link="link">
        <h2 class="title">{{title}}</h2>
        <div class="spans">
          <span class="author">{{author}}</span>
          <span class="date">{{date}}</span>
        </div>
        <p class="simplecontent">{{simplecontent}}</p>
        <div class="tags">
          <blog-tag v-for="tag in tags" :name="tag.name"></blog-tag>
        </div>
    </a>
  </div>
</template>

<style lang="less">
  .each-style {
    display: flex;
    border-bottom-left-radius: .5em;
    margin: 1.2em 1.8em;
    padding: 1em;
    width: 68%;

    position: relative;
    background-color: #eef;
    box-shadow: -.1em .22em 0 rgba(0, 0, 0, .2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      border-width: 0 1.8em 1.8em 0;
      border-style: solid;
      border-color: #fff #fff transparent transparent;
      display: block;
      box-shadow: 0 .1em 0 rgba(0,0,0,0.3), -.1em .1em .1em rgba(0,0,0,0.2);
    }

    h2.title {
      font-weight: bold;
      margin-bottom: .6em;
    }

    div.spans {
      display: flex;
      flex-direction: row;
      // justify-content: space-around;
      font-size: .12em;
      color: #aaa;
      .author { margin-right: 1.2em; }
      .date { font-style: italic; }
    }

    p.simplecontent {
      border-bottom: 1px dotted rgba(0,0,0,.3);
      margin: 1em 0;
      padding-bottom: .6em;
    }

    .tags {
      display: inline-flex;
      flex-wrap: wrap;
    }
  }

  .move-state:hover {
    transform: translate(0, -2px);
    cursor: pointer;
  }
</style>

<script>
  // (function() {
  //   const form = document.getElementById('form');
  //   const corner = document.getElementById('corner');
  //   const ftop = form.offsetTop;
  //   const fleft = form.offsetLeft;
  //   const switchopen = 0;
  //   corner.onmousedown = function(e) {
  //   e.preventDefault();
  //   form.style.cursor = 'move';
  //   switchopen = 1;
  // }
  //
  // form.onmousemove = function(e) {
  //   if(switchopen === 1) {
  //     if(e.pageX - fleft > 90 || e.pageY - ftop > 90) {
  //       corner.style.width=corner.style.height = 90 + 'px';
  //       corner.style.left = corner.style.top = -4 + 'px';
  //     }
  //
  //     else{
  //       corner.style.width = corner.style.height = e.pageY - ftop + 'px';
  //     }
  //   }
  // }
  //
  // form.onmouseup = function() {
  //   switchopen = 0;
  //   this.style.cursor = 'default';
  // }
  // })()

  import BlogTag from './BlogTag.vue';

  export default {
    data() {
      return {
        tags: [
          {
            name: 'HTMLdog',
          },
          {
            name: 'CSScat',
          },
          {
            name: 'Python snake',
          },
        ],
      };
    },

    components: {
      BlogTag,
    },

    props: {
      link: {
        type: String,
      },
      author: {
        type: String,
      },
      date: {
        type: String,
      },
      title: {
        type: String,
      },
      simplecontent: {
        type: String,
      },
    },
  };
</script>
