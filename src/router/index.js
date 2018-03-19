import Vue from 'vue'
import Router from 'vue-router'

import APP from '../App'
import index from '../page/index/index'
import share from '../page/share/share'
import detail from '../page/topic/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:APP,
      children: [
        { path: '/', component: index },
        { path: "/share", component: share },
        { path: "/detail", name: 'detail', component: detail },
        { path: '/index/:page', component: index }
      ]
    }
  ]
})
