import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Home from './Home.vue';
import Blog from './Blog.vue';
import Demo from './Demo.vue';
// import Article from './Article.vue';

Vue.use(Router);
Vue.use(VueResource);

const router = new Router();
router.map({
  '/': {
    component: Home,
  },
  '/blog': {
    component: Blog,
  },
  '/demo': {
    component: Demo,
  },
  // '/article/:title': {
  //   component: Article,
  // },
});

router.start(App, '#app');
