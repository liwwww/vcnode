<template>
    <div class="login">
        <div class="header-text">
            <h1>Sign in to Vcnode</h1>
        </div>
        <div class="login-form">
            <div class="header-logo">
                <i></i>
            </div>
            <div class="login-row token-input">
                <a>accessToken:</a>
                <el-input class="login-row" v-model="token" placeholder="请输入内容" clearable></el-input>
            </div>
            <div class="login-row login-msg">
                {{ loginMsg }}
            </div>
            <div class="login-row login-remember">
                <el-switch v-model="saveToken" :active-text="inputText">
                </el-switch>
            </div>
            <div class="login-btn">
                <el-button type="primary" :loading="logining" @click="login">login</el-button>
            </div>
        </div>
        <p class="login-row login-create">
            如何获取token?
            <a href="https://cnodejs.org/setting">进入cnode用户设置</a>
        </p>
    </div>
</template>

<script>
import { getUser, checkUser } from '@/service/data';
import vs from '@/config/storage';
export default {
    data() {
        return {
            saveToken: true,
            token: '',
            inputText: '是否保存token',
            loginMsg: '',
            logining: false,
            checkLogin: '',
            accessToken: 'access_token',
            loginData: 'login_data'
        }
    },
    methods: {
        async getUser (){
            this.checkLogin = await checkUser(this.token);
            this.loginMsg = this.checkLogin.error_msg;
            this.logining = false;
            if(this.checkLogin.success) {
                let data = this.checkLogin;
                delete data['success'];
                vs.set(accessToken,this.token);
                vs.set(loginData,JSON.stringify(data));
                this.$router.push({ path: '/index', name:'index' })
            }
        },
        login (){
            this.loginMsg = '';
            this.logining = true;
            this.getUser();
        }
    }
}
</script>

<style scoped lang="less">
.login-row {
    margin-top: 8px;
    margin-bottom: 12px;
}

.login {
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    width: 310px;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
    button {
        width: 100%;
    }
    .header-text {
        text-align: center;
        h1 {
            font-size: 24px;
            font-weight: 300;
            letter-spacing: -0.5px;
        }
    }
    .login-form {
        border: 1px solid #d8dee2;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        box-sizing: border-box;
    }
    .login-msg {
        text-align: center;
        color: #F56C6C;
    }
    .login-remember {
        height: 24px;
        line-height: 24px; 
        .el-switch {
            float: left;
        }
    }
    .login-create {
        padding: 15px 20px;
        text-align: center;
        border: 1px solid #d8dee2;
        border-radius: 5px;
        font-size: 13px;
        a {
            color: #0366d6;
            text-decoration: none;
        }
    }
}
</style>