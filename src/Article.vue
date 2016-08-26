<template>
  <nav-bar></nav-bar>
  <div class="article-style">
    <h1>{{title}}</h1>
    <div>
      <span>{{author}}</span>
      <span>{{date}}</span>
    </div>
    <article>{{article}}</article>
  </div>
  <footer-bar></footer-bar>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import FooterBar from './components/FooterBar.vue';

  export default {
    data() {
      return {
        title: '',
        author: '',
        date: '',
        article: '',
      };
    },

    ready() {
    //   this.$http.get($route.path).then(response => {
    //     const json = JSON.parse(response);
    //
    //     const title = json.title;
    //     const author = json.author;
    //     const date = json.date;
    //     const article = json.article;
    //   });

      title = 'SYN Cookies';
      author = 'llp';
      date = '2016/8/24';
      article = '# Why?' +
'SYN Cookies是为了对抗[SYN Flooding](http://www.wikiwand.com/en/SYN_flood)' +
'的一种技术。它是由[DJB](http://www.wikiwand.com/en/Daniel_J._Bernstein)提出的。' +
'看下连接的建立过程，客户端向server发送SYN包，server回复SYN＋ACK，同时将这个处于SYN_RECV状态' +
'的连接保存到半连接队列。客户端返回ACK包完成三次握手，server将ESTABLISHED状态的连接移入accept队列，等待应用调用accept()。' +
'SYN Flooding简单地说就是客户端只发送SYN包发起握手而不回应ACK完成连接建立，填满server端的半连接队列，让它无法处理正常的握手请求。' +
'所以我们需要一种方法避免这种网络攻击。SYN Cookies正是为了解决这一问题产生的。' +
'# What?' +
'根据TCP的规范, TCP握手时的一端初始序列号可以为任意值。' +
'首先定义一下变量。' +
'- t为缓慢增加的时间戳。' +
'- m为本应该存入半连接队列的[MSS](http://www.wikiwand.com/en/Maximum_segment_size)。' +
'- s为24位的，以两端端口和host和t为键，由哈希函数生成的值。' +
'令SYN+ACK的序列号按照以下方式构造：' +
'- 头5位为t mod 32。' +
'- 随后接着3位代表MSS的再编码值。' +
'- 最后为24位的s。' +
'如果Client回复了对应的ACK，解析该ACK的Acknowledge Number。' +
'就可以将解析得到的信息加入accept队列中。' +
'解析过程如下：' +
'- 将Acknowledge Number - 1作为待解析码。' +
'- 抽取出t判断是否超时。' +
'- 如果未超时，重新计算出s，判定是否为合法的ACK。' +
'- 解析出m对应的MSS，加入accept队列。' +
'如此，就无需半连接队列的使用了。' +
'SYN Cookies对于SYN Flooding有一定的防御能力，但也有一些不足：' +
'- 由于m被定死为3位，所以只能有8种合法的MSS。' +
'- 其他TCP Options将无法使用。如大window size。（Linux 2.6中依然可以使用一些Option，如时间戳。）' +
'- 如果客户端ACK网络传输时丢失，服务器无法接受ACK，但客户端会认为连接已经建立。' +
'最终客户端会因为应用层链接超时关掉链接，不过那可能已经过了很久了。' +
'因为SYN Cookies的这些不足，后面有了[TCPCT](http://www.wikiwand.com/en/TCP_Cookie_Transactions)。' +
'它也是[RFC-6013](http://tools.ietf.org/html/rfc6013)。它原先是为DNSSEC设计的。09年被Linux实现，但在2013年被Linux移除。' +
'# How？' +
'配置网络时加上net.ipv4.tcp_syncookies即可。' +
'——' +
'好久没写Blog，算是回归吧。';
    },

    computed: {},
    attached() {},
    methods: {},

    components: {
      NavBar,
      FooterBar,
    },
  };
</script>

<style lang="less" scoped>
  .article-style {
    display: flex;
    h1 {
      margin-bottom: .8em;
    }
    div {
      display: flex;
      flex-direction: row;
      font-size: .12em;
      color: #aaa;
      &:first-child { margin-right: 1.2em; }
      &:last-child { font-style: italic; }
    }
    article {
      &::first-letter {
        float: left;
        padding: .5em 1em 0 .4em;
        font: 75px/60px Georgia;
        color: #903;
      }
    }
  }
</style>
