// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {Menu, MenuItem, Row, Submenu, Col, MenuItemGroup, Switch, Input, Button, Radio, RadioGroup, RadioButton, Form, FormItem, Table, Loading} from 'element-ui'

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
