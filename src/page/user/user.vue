<template>
    <div>
        <v-header></v-header>
        <v-content>
            <div class="user-container">
                <div class="user-header">
                    <div class="user-avatar">
                        <img :src="userMsg.avatar_url" alt="user-avatar" />
                    </div>
                    <div class="user-msg">
                        <div class="msg-loginname">
                            <strong class="msgName-item">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-star"></use>
                                </svg>
                                {{userMsg.loginname}}
                            </strong>
                        </div>
                        <div class="msg-githubname" v-if="userMsg.githubUsername">
                            <a class="msgName-item" target="_blank" :href="githubLink" style="color:#666">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-github"></use>
                                </svg>
                                @{{userMsg.githubUsername}}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="user-detail">
                    <a class="detail-numberBorad userTab-active">
                        <div class="numberBorad-name">发帖</div>
                        <strong class="numberBorad-num">1</strong>
                    </a>
                    <a class="detail-numberBorad">
                        <div class="numberBorad-name">评论</div>
                        <strong class="numberBorad-num">1</strong>
                    </a>
                    <a class="detail-numberBorad">
                        <div class="numberBorad-name">收藏</div>
                        <strong class="numberBorad-num">0</strong>
                    </a>
                </div>
                <div class="user-topic">
                    <div class="topic-create">

                    </div>
                    <div class="topic-reply"></div>
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
.user-container {
  position: relative;
  margin-top: 10px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 2px;
  background-color: rgb(233, 237, 248);
  .user-header {
    display: flex;
    background: linear-gradient(right, rgb(242, 246, 252), rgb(191, 218, 245));
    padding: 14px 16px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    width: 100%;
    box-sizing: border-box;
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
      .msgName-item {
        display: flex;
        line-height: 0.9em;
        text-decoration: none;
      }
      svg {
        float: left;
        margin-right: 6px;
      }
    }
  }
  .user-detail {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 18px 16px 12px 16px;
      box-sizing: border-box;
      margin-bottom: 10px; 
      .detail-numberBorad {
          position: relative;
          text-align: center;
          flex: 1;
      }
  }
  .user-topic {
      position: relative;
      height: 30px;
      background-color: #fff;
      
  }
  .userTab-active {
      position: relative;
      &:after {
        content: "";
        border-bottom: 10px solid #fff;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        margin-left: -16px;
        bottom: -22px;
        }
  }
}
</style>