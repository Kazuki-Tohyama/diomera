import Vue from 'vue'
import VueRouter from 'vue-router';

import store from './store.js';

import Home from './views/Home';
import Signin from './views/Signin';
import Signup from './views/Signup';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requireAuth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth) && !store.state.isLoggedIn) {
    // 認証していなければログインページにリダイレクトする
    next({
      path: '/signin',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
})

export default router;
