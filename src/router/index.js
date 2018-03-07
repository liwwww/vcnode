import Vue from 'vue'
import Router from 'vue-router'

import APP from '../App'
import index from '../page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:APP,
      children: [
        { path: "/", component: index }
      ]
    }
  ]
})
