import Vue from "vue";
import Vuex from "vuex";
import vs from "@/config/storage";
import { checkUser, getUser, getTopics, getUserCollect } from "@/service/data";
import {
  GET_ACCESSTOKEN,
  CHECK_LOGININFO,
  GET_NOTIFYMESSAGE,
  GET_LOCALSTORAGE,
  GET_USERNAME,
  GET_COLLECT
} from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    loginInfo: "",
    accessToken: "",
    notifytitle: "",
    notifyInfo: "",
    notifySuccess: "",
    isSession: vs.get("SESSION_STORAGE"),
    userName: vs.get("username" ,true),
    conlect: "",
    conlectList: "",
    nextContent: {
      dev: "",
      good: "",
      share: "",
      ask: "",
      all: "",
      job: ""
    }
  },
  mutations: {
    [GET_ACCESSTOKEN](state) {
      let isSession = vs.get("SESSION_STORAGE", false);
      let accessToken = vs.get("accessToken", isSession)
        ? vs.get("accessToken", isSession)
        : "";
      vs.set("accessToken", accessToken, true);
    },
    [CHECK_LOGININFO](state, infoArr) {
      if (infoArr.userInfo.success) {
        state.isLogin = true;
        state.loginInfo = infoArr.userInfo;
        state.accessToken = infoArr.accessToken;
        state.isSession = vs.get("SESSION_STORAGE");
        vs.set("login_data", infoArr.userInfo, state.isSession);
        vs.set("accessToken", infoArr.accessToken, state.isSession);
      } else {
        return false;
      }
    },
    [GET_NOTIFYMESSAGE](state, msg) {
      state.notifytitle = msg.title;
      state.notifyInfo = msg.info;
      state.notifySuccess = msg.type;
    },
    [GET_LOCALSTORAGE](state) {
      state.isSession = vs.get("SESSION_STORAGE");
    },
    [GET_USERNAME](state) {
      let isSession = vs.get("SESSION_STORAGE", false);
      let userName = vs.get("login_data", isSession)
        ? vs.get("login_data", isSession).loginname
        : "";
      vs.set("username", userName, true);
    },
    [GET_COLLECT](state, { collect, collectList, name }) {
      state.collect = collect;
      state.collectList = collectList;
      vs.set("collect_list", collect, true);
      if (state.userName) {
        vs.set("collect_id", collectList, true);
      }
    }
  },
  actions: {
    getAccessToken({ commit }) {
      commit("GET_ACCESSTOKEN");
    },
    async checkLoginInfo({ commit }, accessToken) {
      let info = await checkUser(accessToken);
      commit("CHECK_LOGININFO", { userInfo: info, accessToken: accessToken });
    },
    getNotifyMsg({ commit }, msg) {
      commit("GET_NOTIFYMESSAGE", msg);
    },
    getLocalStorage({ commit }) {
      commit("GET_LOCALSTORAGE");
    },
    getUserName({ commit }) {
      commit("GET_USERNAME");
    },
    async getUserCollect({ commit }, name) {
      let collect = await getUserCollect(name);
      collect = collect.data;
      const collectList = [];
      for (const i in collect) {
        if (collect.hasOwnProperty(i)) {
          let collectId = collect[i].id;
          collectList.push(collectId);
        }
      }
      commit("GET_COLLECT", { collect, collectList, name });
    }
  }
});
