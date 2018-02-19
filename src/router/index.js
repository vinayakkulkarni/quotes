import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '/' : '/quotes/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
