import Vue from 'vue';
import Vuex from 'vuex';
import vs from '@/config/storage';
import { checkUser, getUser } from '@/service/data';
import {
    GET_ACCESSTOKEN,
    CHECK_LOGININFO
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        loginInfo: '',
        accessToken: ''
    },
    mutations: {
        [GET_ACCESSTOKEN] (state, accessToken){
            state.accessToken = accessToken;
        },
        [CHECK_LOGININFO] (state, info, accessToken){
            if(info.success) {
                state.isLogin = true;
                state.loginInfo = info;
                state.accessToken = accessToken;
                vs.set('login_data', info);
            }
        }
    },
    actions: {
        async checkLoginInfo ({ commit }, accessToken){
            commit('CHECK_LOGININFO', await checkUser(accessToken), accessToken);
        }   
    }
})