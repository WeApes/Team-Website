<template>
  <div class="cardstyle move-state"
       :class="{ 'first-column': column === 0,
                'middle-column': column === 1,
                'last-column': column === 2 }">
    <a v-link="link">
      <p class="date">{{date}}</p>
      <div class="tag">
        <div class="content">{{tag}}</div>
      </div>
      <h2 class="title">{{title}}</h2>
      <span class="author">{{author}}</span>
    </a>
  </div>
</template>

<style lang="less" scoped>
  @card-width: 30%;

  .cardstyle {
    display: flex;
    flex-direction: column;
    padding: 1em 0 .6em;
    width: @card-width;
    color: white;
  }

  .first-column {
    margin-left: 8%;
    background-color: #9e785f;
    &:hover { background-color: lighten(#9e785f, 8%); }
  }
  .middle-column {
    margin-left: 1.2em;
    margin-right: 1.2em;
    background-color: #11aa58;
    &:hover { background-color: lighten(#11aa58, 8%); }
  }
  .last-column {
    margin-right: 8%;
    background-color: #26bdcf;
    &:hover { background-color: lighten(#26bdcf, 8%); }
  }

  p.date {
    color: black;
    font-size: 1.1em;
    font-weight: lighter;
    font-style: italic;
    margin: 0 0 .8em .6em;
  }

  div.tag {
    div.content {
      float: left;
      padding: .8em;
      font-size: 1em;
      align-self: center;
      background-color: rgba(0,0,0,.3);
    }
  }

  h2.title {
    clear: both;
    margin: 3.3em .5em 0 .8em;
    height: 5em;
    line-height: 1.2em;
    font-size: 1.6em;
    font-weight: lighter;
  }

  span.author {
    border-top: 1px solid rgba(0,0,0,.3);
    padding-top: .6em;
    margin: 2em .5em;
    font-size: 1em;
    font-weight: bolder;
    font-style: italic;
    color: black;
  }

</style>

<script>
  export default {
    props: {
      column: {
        type: Number,
        required: true,
      },
      link: {
        type: String,
      },
      date: {
        type: String,
      },
      tag: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    },
  };
</script>
