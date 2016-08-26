<template>
  <div class="blog-shows">
    <h1 class="be-center">Our Newest Views</h1>
    <div class="cards">
      <card v-for='card in cards'
            :link="card.link"
            :article="card.article"
            :column="card.column"
            :date="card.date"
            :title="card.title"
            :tag="card.tag"
            :author="card.author">
      </card>
    </div>
    <more link="/blog"></more>
  </div>
</template>

<style lang="less">
  div.blog-shows {
    display: flex;
    flex-direction: column;
    padding: 4.8em 0 3.6em;
    background-color: rgb(238, 238, 238);

    h1 { margin-bottom: 2em; }
    div.cards { display: inline-flex; }
  }
</style>


<script>
  import Card from './Card.vue';
  import More from './More.vue';

  export default {
    data() {
      return {
        cards: [
          {
            column: 0,
            title: 'Building Reliable Digital Operations',
            date: '20 AUG 2016',
            tag: 'Safe',
            author: 'Jack Singleton',
          },
          {
            column: 1,
            title: 'Blockchain: Under the Hood',
            date: '20 AUG 2016',
            tag: 'Design',
            author: 'Dan Mutton',
          },
          {
            column: 2,
            title: 'AppSec101: Welcoming all Roles to the World of Security',
            date: '20 AUG 2016',
            tag: 'Service',
            author: 'Prashant Gandhi',
          },
        ],

      };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {
      Card,
      More,
    },
  };
</script>
