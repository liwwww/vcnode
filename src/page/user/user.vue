<template>
    <div>
        <v-header></v-header>
        <v-content>
            <div class="user-row">
                <div class="user-avatar">
                    <img :src="userMsg.avatar_url" alt="user-avatar" />
                </div>
                <div class="user-msg">
                    <div class="msg-loginname">
                        <strong>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-star"></use>
                            </svg>
                            {{userMsg.loginname}}
                        </strong>
                    </div>
                    <div class="msg-githubname" v-if="userMsg.githubUsername">
                        <a target="_blank" :href="githubLink" >
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-github"></use>
                            </svg>
                            @{{userMsg.githubUsername}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="user-row">
                    <div class="user-detail">

                    </div>
            </div>
        </v-content>
    </div>
</template>

<script>
import vHeader from "@/components/header";
import vContent from "@/components/content";
import { getUser } from "@/service/data";
export default {
  data() {
    return {
      userMsg: "",
      githubLink: "https://www.github.com/" + this.$route.params.name
    };
  },
  created() {
    setTimeout(() => {
      this.getUserMsg();
    }, 1000);
  },
  methods: {
    async getUserMsg() {
      this.userMsg = await getUser(this.$route.params.name);
      this.userMsg = this.userMsg.data;
      console.log(this.userMsg);
    }
  },
  components: { vHeader, vContent }
};
</script>

<style scoped lang="less">
@import "../../commons/style/mixin.less";
.user-row {
  background-color: #fff;
  position: relative;
  display: flex;
  margin-top: 10px;
  padding: 14px 16px;
  border-radius: 7px;
  box-sizing: border-box;
  overflow: hidden;
  .user-avatar {
    margin-right: 40px;
    display: inline-block;
    float: left;
    img {
      display: inline-block;
      width: 68px;
      height: 68px;
      border-radius: 100%;
    }
  }
  .user-msg {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .msg-loginname,
    .msg-githubname {
        padding: 5px 0;
    }
    strong,
    a {
      display: flex;
      line-height: 0.9em;
      text-decoration: none;
    }
    a {
      color: #666;
    }
    svg {
      float: left;
      margin-right: 6px;
    }
  }
}
.user-row {
    .user-detali {
        height: 200px;
    }
}
</style>