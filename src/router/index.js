import Vue from "vue";
import Router from "vue-router";

import APP from "../App";
import Index from "@/page/index/index";
import Detail from "@/page/topic/detail";
import Create from "@/page/create/create";
import Login from "@/page/login/login";
import User from "@/page/user/user";
import Message from "@/page/message/message";
Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      component: APP,
      children: [
        {
          path: "/",
          name: "index",
          component: Index,
          meta: {
            keepAlive: true
          }
        },
        {
          path: "/detail",
          name: "detail",
          component: Detail,
          meta: {
            keepAlive: false
          }
        },
        {
          path: "/create",
          name: "create",
          component: Create,
          meta: {
            keepAlive: false,
            login: true
          }
        },
        {
          path: "/user/:name",
          name: "user",
          component: User,
          meta: {
            keepAlive: false
          }
        },
        {
          path: "/message",
          name: "message",
          component: Message,
          meta: {
            keepAlive: false,
            login: true
          }
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
