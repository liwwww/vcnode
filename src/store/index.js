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
        [CHECK_LOGININFO] (state, infoArr){
            if(infoArr.userInfo.success) {
                state.isLogin = true;
                state.loginInfo = infoArr.userInfo;
                state.accessToken = infoArr.accessToken;
                vs.set('login_data', infoArr.userInfo);
                vs.set('accessToken', infoArr.accessToken);
            }
        }
    },
    actions: {
        async checkLoginInfo ({ commit }, accessToken){
            let info = await checkUser(accessToken);
            commit('CHECK_LOGININFO', { 'userInfo': info,'accessToken': accessToken });
        }   
    }
})