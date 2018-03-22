import Vue from 'vue'
import Router from 'vue-router'

import APP from '../App'
import index from '../page/index/index'
import detail from '../page/topic/detail'
import create from '../page/create/create'
import login from '../page/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: APP,
      children: [
        { path: '/', component: index },
        { path: '/detail', name: 'detail', component: detail },
        { path: '/index/:page', name: 'index', component: index },
        { path: '/create', component: create}
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
})
