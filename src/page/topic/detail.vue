<template>
    <div @click="clickMore = false">
        <v-content>
            <div class="content shadow-box">
                <div class="content-menu">
                    <div class="content-title">{{ detail.title }}</div>
                    <div class="content-tip"></div>
                </div>
                <div class="content-detail">
                    <div class="content-user">
                        <div class="user-detail">
                            <router-link :to="{ path: '/user/'+detail.author.loginname }">
                            <img :src="detail.author.avatar_url" alt="头像" />
                            </router-link>
                            <span>{{ detail.author.loginname }} · {{ detail.create_at | formatTime }}</span>
                        </div>
                        <div class="user-create-more" @click.stop="clickMore = !clickMore" v-if="userName">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gengduo"></use>
                            </svg>
                        </div>
                    <div class="more-list" v-if="clickMore">
                        <ul>
                            <li @click="collectBtn">{{ isCollect >= 0 ? '已收藏':'收藏' }}</li>
                            <li>编辑</li>
                        </ul>
                        <span></span>            
                    </div>
                    <div class="clearfloat" style="clear: both;"></div>
                    </div>
                    <div class="content-main" v-html='detail.content'></div>
                </div>
            </div>
        </v-content>
        <v-reply :topicId='id'></v-reply>
    </div>
</template>

<script>
import vHeader from "@/components/header.vue";
import vContent from "@/components/content.vue";
import vReply from "@/components/reply.vue";
import vs from "@/config/storage";
import { getTopic, collectTopic, deCollectTopic } from "@/service/data";
export default {
  data() {
    return {
      detail: {
        author: {
          loginname: "",
          avatar_url: "",
          collectList: ''
        }
      },
      id: this.$route.query.id,
      detailName: "topic_detail",
      clickMore: false,
      userName: '',
      isCollect: '',
      accessToken: ''
    };
  },
  components: { vHeader, vContent, vReply },
  created() {
    this.$store.dispatch('getUserName');
    this.userName = vs.get('username', true) || '';
    setTimeout(() => {
      this.getCollectList();
    }, 500);
    getTopic(this.$route.query.id).then(msg => {
      this.detail = msg.data;
    });
  },
  methods: {
    getCollectList (){
      if(this.userName) {
        this.$store.dispatch('getUserCollect', this.userName);
        this.collectList = vs.get('collect_id', true);
        this.isCollect = this.collectList.indexOf(this.id);
      }
    },
    async collectBtn (){
      this.$store.dispatch('getAccessToken');
      let _accessToken = vs.get('accessToken', true);
      if(this.isCollect >= 0) {
        await deCollectTopic(_accessToken, this.id);
        this.isCollect = -1;
      }else {
        await collectTopic(_accessToken, this.id);
        this.getCollectList();
        this.isCollect = 2;
      }
    }
  }
};
</script>

<style scoped lang="less">
.content {
  position: relative;
  padding: 0;
  margin-top: 16px;
  border-radius: 2px;
  background-color: #fff;
  z-index: 1;
  .content-menu {
    padding: 20px 16px;
    font-size: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #e4e7ed;
    .content-title {
      font-weight: bolder;
    }
  }
  .content-detail {
    position: relative;
    padding: 14px 16px;
    box-sizing: border-box;
    z-index: 10;
    .content-user {
      position: relative;
      width: 100%;
      font-size: 13px;
      z-index: 200;
      .user-detail {
        float: left;
        img {
          width: 40px;
          height: 40px;
          border-radius: 100%;
        }
        span {
          display: inline-block;
          margin: 5px 0 0 20px;
          vertical-align: top;
          font-weight: bolder;
        }
        a {
          text-decoration: none;
        }
      }
      .user-create-more {
        position: relative;
        margin: 5px 0 0 20px;
        float: right;
        font-size: 26px;
        cursor: pointer;
      }
      .more-list {
        position: absolute;
        text-align: center;
        right: 0;
        bottom: -73px;
        width: 120px;
        font-size: 14px;
        background: #fff;
        border: 1px solid #ebebeb;
        color: #8590a6;
        border-radius: 4px;
        box-shadow: 0 5px 20px rgba(26, 26, 26, 0.1);
        span {
          position: absolute;
          top: -15px;
          right: 5px;
          width: 0;
          height: 0;
          border: 7px solid transparent;
          border-bottom-color: #ebebeb;
          &:after {
            content: "";
            position: absolute;
            display: block;
            top: -7px;
            right: 0;
            width: 0;
            height: 0;
            transform: translateX(50%);
            border: 8px solid transparent;
            border-bottom-color: #fff;
          }
        }
        ul {
          padding: 6px 0;
          li {
            display: block;
            width: 100%;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
            line-height: 28px;
            box-sizing: border-box;
            z-index: 200;
            &:hover {
              background-color: #f6f6f6;
              color: #77839c;
            }
          }
        }
      }
    }
    .content-main {
      position: relative;
      font-size: 14px;
      line-height: 22px;
      padding: 24px 26px;
      box-sizing: border-box;
      overflow: hidden;
      z-index: 101;
    }
  }
}
</style>