<template>
<div>
    <v-header></v-header>
        <div class="container">
            <div class="user-container shadow-box">
                <div class="user-header">
                    <div class="user-avatar">
                        <img :src="userMsg.avatar_url" alt="user-avatar" />
                    </div>
                    <div class="user-msg">
                        <div class="msg-loginname">
                            <strong class="msgName-item">
                                <!--<svg class="icon" aria-hidden="true">
                                    <use xlink:href="#-github"></use>
                                </svg>
                                {{userMsg.loginname}}-->
                                <a class="msg-githubName msgName-item" target="_blank" :href="githubLink" style="color:#666">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-github"></use>
                                </svg>
                                {{userMsg.loginname}}
                            </a>
                            </strong>
                        </div>
                        <div class="msg-score" v-if="userMsg.githubUsername">
                            <a class="msgName-item" target="_blank" :href="githubLink" style="color:#666">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-qianbi-"></use>
                                </svg>
                                {{userMsg.score}}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="user-detail">
                    <a class="detail-numberBorad" :class="{ userTabActive: index === listName.arrow }" v-for="(numBorad, key, index) in topicList" :key="numBorad.id" @click="getList(numBorad, index)">
                        <div class="numberBorad-name">{{ listName[key] }}</div>
                        <div class="numberBorad-num test" v-if="index === 1">{{ lastTime | formatTime }}活跃</div>
                        <div class="numberBorad-num" v-if="index != 1">{{ numBorad.length }}</div>
                    </a>
                    <!--<a class="detail-numberBorad" @click="getList(replies)">
                        <div class="numberBorad-name">最近评论</div>
                        <strong class="numberBorad-num">{{ replies.length }}</strong>
                    </a>
                    <a class="detail-numberBorad" @click="getList(collect)">
                        <div class="numberBorad-name">收藏</div>
                        <strong class="numberBorad-num">{{ collect.length }}</strong>
                    </a>-->
                </div>
                <div class="user-topic">
                    <div class="topic-item" v-for="list in detailList" :key="list.index">
                        <div class="item-avatar" @click="linkUser(list.author.loginname)">
                            <img :src="list.author.avatar_url" alt="author_avatar" />
                        </div>
                        <div class="item-title" @click="linkDetail(list.id)">{{ list.title }}</div>
                        <div class="item-time">{{ list.create_at ? list.create_at : list.last_reply_at | formatTime }}</div>
                    </div>
                    <div class="item-empty" v-if="detailList <= 0">暂无数据~~</div>
                </div>
            </div>
            
        </div>
    
    </div>
</template>

<script>
import vHeader from "@/components/header";
import vContent from "@/components/content";
import vs from "@/config/storage";
import { getUser, getUserCollect } from "@/service/data";
export default {
  data() {
    return {
      userMsg: "",
      githubLink: "https://www.github.com/" + this.$route.params.name,
      detailList: '',
      topicList: '',
      lastTime: '',
      listName: {_topics:'发帖', _replies:'最近回复', _collect:'收藏', arrow: 0}
    };
  },
  created() {
    setTimeout(() => {
      this.getUserMsg();
    }, 1000);
  },
  watch: {
    '$route'(to, from) {
        this.getUserMsg();
        this.listName.arrow = 0;
    }
  },
  methods: {
    async getUserMsg() {
      let name = this.$route.params.name;
      this.userMsg = await getUser(name);
      //this.collect = await getUserCollect(name); 
      //const collect = this.collect.data;
      this.$store.dispatch('getUserCollect', name);
      const collect = this.$store.state.collect || vs.get('collect_list', true);
      this.userMsg = this.userMsg.data;
      const topics =  this.userMsg.recent_topics
      this.detailList = topics;
      const replies = this.userMsg.recent_replies;
      this.lastTime = replies[0].last_reply_at;
      this.topicList = {'_topics': topics, '_replies': replies, '_collect': collect};
    },
    getList(list, index) {
        this.detailList = list;
        this.listName.arrow = index;
    },
    linkDetail(id) {
        this.$router.push({path: '/detail', query: { id: id}});
    },
    linkUser(name) {
        this.$router.push({ path: '/user/'+name });
    }
  },
  components: { vHeader, vContent }
};
</script>

<style scoped lang="less">
@import "../../commons/style/mixin.less";
.container {
    position: relative;
    min-height: 80px;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding-top: 49px;
    .mixin-screen-lg({
        max-width: 1060px;
    });
    .mixin-screen-md({
        max-width: 700px;
    });
    .mixin-screen-sm({
        max-width: 460px;
    });
}
.user-container {
  position: relative;
  margin-top: 10px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 2px;
  background: linear-gradient(to left, #BFDAF5, #F2F6FC);
  .user-header {
    display: flex;
    padding: 14px 16px;
    background-color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    .user-avatar {
      width: 64px;
      height: 64px;
      border-radius: 100%;
      margin-right: 40px;
      display: inline-block;
      float: left;
      img {
        display: inline-block;
        width: 64px;
        height: 64px;
        border-radius: 100%;
      }
    }
    .user-msg {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .msg-githubName {
          //margin-left: 10px;
      }
      .msg-loginname,
      .msg-score {
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
          .numberBorad-num {
              font-weight: bold;
          }
      }
  }
  .user-topic {
      position: relative;
      background-color: #fff;//rgb(233, 237, 248)
      padding-top: 12px; 
      .topic-item {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 13px;
          box-sizing: border-box;
          border-bottom: 1px solid #E9EDF8;
          cursor: pointer;
          &:hover {
              background-color: #F2F6FC;
          }
          .item-avatar {
              margin-right: 20px;
              img {
                  width: 34px;
                  height: 34px;
                  border-radius: 100%;
              }
          }
          .item-title {
            width: 80%;
            .mixin-screen-md({
                width: 52%;
            });
            box-sizing: border-box;  
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .item-time {
              margin-left: auto;
              font-size: 12px;
          }
      }
      .item-empty {
          text-align: center;
          vertical-align: middle;
          line-height: 100px;
          color: darkgray;
          height: 100px;
        }
  }
  .userTabActive {
      position: relative;
      &:after {
        content: "";
        border-bottom: 10px solid #fff;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        margin-left: -9px;
        bottom: -22px;
        }
  }
}
.test {
    font-size: 1em;
}
</style>