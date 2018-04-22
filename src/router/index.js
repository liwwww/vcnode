import Vue from 'vue'
import Router from 'vue-router'

import APP from '../App'
import Index from '../page/index/index'
import Detail from '../page/topic/detail'
import Create from '../page/create/create'
import Login from '../page/login/login'

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
        { path: '/', name:'index', component: Index },
        { path: '/detail', name: 'detail', component: Detail },
        { path: '/tab/:page', name: 'page', component: Index },
        { path: '/create', name:'create', component: Create}
      ]
    },
    { path: '/login', name: 'login', component: Login }
  ]
})
