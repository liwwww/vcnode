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
                <el-button type="primary" :loading="btLogining" @click="login">login</el-button>
            </div>
        </div>
        <p class="login-row login-create">
            如何获取token?
            <a href="https://cnodejs.org/setting">进入cnode用户设置</a>
        </p>
    </div>
</template>

<script>
import { checkUser } from "@/service/data";
import vs from "@/config/storage";
export default {
  data() {
    return {
      saveToken: true,
      token: "",
      inputText: "是否保存token",
      loginMsg: "",
      btLogining: false,
      checkLogin: "",
      checkStatus: false,
      accessToken: "access_token",
      loginData: "login_data"
    };
  },
  created() {
    let storeToken = JSON.parse(vs.get(this.loginData))[this.accessToken];
    this.checkStoreToken(storeToken).then(() => {
      if (storeToken && this.checkStatus) {
        this.$router.push({ path: "/index", name: "index" });
      }
    });
  },
  methods: {
    getLoginUser() {
      this.checkStoreToken(this.token).then(() => {
        this.loginMsg = this.checkLogin.error_msg;
        this.btLogining = false;
        if (this.checkLogin.success) {
          let data = this.checkLogin;
          data[this.accessToken] = this.token;
          delete data.success;
          vs.set(this.loginData, JSON.stringify(data));
          this.$router.push({ path: "/index", name: "index" });
        }
      });
    },
    async checkStoreToken(token) {
      this.token = token;
      this.checkLogin = await checkUser(token);
      this.checkStatus = this.checkLogin.success;
      return this.checkStatus;
    },
    login() {
      this.loginMsg = "";
      this.btLogining = true;
      this.getLoginUser();
    }
  }
};
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
    color: #f56c6c;
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