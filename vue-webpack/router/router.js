import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    component: About
  }
];

const router = new VueRouter({
  routes // `routes: routes`의 줄임
});

export default router;
