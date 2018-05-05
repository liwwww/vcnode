// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import vs from './config/storage'
import * as filters from './filters/index'

import {
  Menu, 
  MenuItem, 
  Row, 
  Submenu, 
  Col, 
  MenuItemGroup, 
  Switch, 
  Input, 
  Button, 
  Radio, 
  RadioGroup, 
  RadioButton, 
  Form, 
  FormItem, 
  Table, 
  Loading,
  Notification
} from 'element-ui'

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Submenu);
Vue.use(Col);
Vue.use(MenuItemGroup);
Vue.use(Switch);
Vue.use(Input);
Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Form);
Vue.use(FormItem);
/*Vue.use(Table);
Vue.use(Loading.directive);


Vue.prototype.$loading = Loading.service;*/
Vue.prototype.$notify = Notification;

Vue.config.productionTip = false

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!vs.get('accessToken')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
