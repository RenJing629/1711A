import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

// 引入路由组件
// import Home from '@/views/Home.vue';
// import Detail from '@/views/Detail.vue';
// import Dealer from '@/views/Dealer.vue';
// import Img from '@/views/Img.vue';
const Home = () => import('@/views/Home.vue')
const Detail = () => import('@/views/Detail.vue')
const Dealer = () => import('@/views/Dealer.vue')
const Img = () => import('@/views/Img.vue')


Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/detail/:id?',
    name: 'Detail',
    component: Detail
  }, {
    path: '/dealer/:id?',
    name: 'Dealer',
    component: Dealer
  }, {
    path: '/img/:id?',
    name: 'Img',
    component: Img
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
