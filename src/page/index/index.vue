<template>
    <div>
        <v-content>
            <div class="main-today">
                <el-row class="list" v-for="n in 10" :key="n.index" v-if="!loading">
                    <vtloding></vtloding>
                </el-row>
                <el-row class="list shadow-box" v-for="(nav, index) in list" :key="nav.id" v-if="loading">
                    <div class="list-avatar">
                        <router-link :to="{ name: 'user', params: { name: nav.author.loginname }}"><img :src="nav.author.avatar_url"/></router-link>
                    </div>
                    <div class="list-main" @click="getDetail( nav.id )">
                        <a>{{ nav.title }}</a>
                        <p>{{ nav.content.replace(new RegExp('<[^>]*>','g'),'') }}</p>
                        <div class="list-tips" style="font-size:13px;color:#999;">
                            <span class="tips-top">
                                <i>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-crown"></use>
                                    </svg>
                                </i>
                            </span>
                            <span class="tips-good">
                                <i style="margin: 10px 0 0 15px;">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-star"></use>
                                    </svg>
                                </i>
                            </span>
                            <span>
                                <i class="el-icon-view" style="margin: 10px 0 0 15px;"></i>{{ nav.visit_count }}</span>
                            <span>
                                <i class="el-icon-edit-outline" style="margin: 10px 0 0 15px;"></i>{{ nav.reply_count }}</span>
                            <span>
                                <i class="el-icon-refresh" style="margin: 10px 0 0 15px;"></i>{{ nav.last_reply_at | formatTime }}</span>
                        </div>
                    </div>
                    <i class="list-pin" @click="pinClick(nav, index)" v-bind:class="{ isPin: nav.checkPin }"></i>
                </el-row>
                <div class="load-container">
                    <el-button class="loadBtn" type="primary" :loading="isLoading" @click="isLoad">加载更多</el-button>
                </div>
            </div>
        </v-content>
        <v-release>
            <ul class="user-menu">
            <li v-if="userName"><router-link :to="{ path: '/create', query: { tab: pageTab } }">
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xie"></use>
                    </svg>
                </a></router-link>
            </li>
			<li v-if="userName"><router-link :to="{ path: '/create', query: { tab: pageTab } }">
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-i-mail"></use>
                    </svg>
                </a></router-link>
            </li>
			<li v-if="userName"><router-link :to="{ path: '/user/'+userName }">
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-user11"></use>
                    </svg>
                </a></router-link>
            </li>
            <li v-if="!userName"><router-link :to="{ path: '/login' }">
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-user11"></use>
                    </svg>
                </a></router-link>
            </li>
          </ul>
        </v-release>
    </div>
</template>

<script>
import { getTopics } from "@/service/data";
import vContent from "@/components/content";
import vHeader from "@/components/header";
import vRelease from "@/components/release";
import vtloding from "@/components/topicLoading";
import vs from "@/config/storage";

export default {
  data() {
    return {
      clickPin: "",
      list: [],
      pageTab: "",
      loading: false,
      nowPage: "",
      _params: "",
      userName: "",
      test: "",
      isSession: vs.get("SESSION_STORAGE", false),
      isLoading: false
    };
  },
  components: { vContent, vHeader, vRelease, vtloding },
  activated() {
    let tab = this.$route.query.tab ? this.$route.query.tab : "all";
    this.userName = vs.get("login_data", this.isSession)
      ? vs.get("login_data", this.isSession).loginname
      : "";
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.init();
  },
  created() {
    this._params = this.$route.query.tab;
    this.init(); //this.loadList();
    this.nowPage = this._params;
  },
  methods: {
    loadList() {
      setTimeout(() => {
        this.getTopicsData(this.$route.query.tab);
        this.pageTab = this.$route.query.tab;
      }, 1000);
    },
    pinClick(nav, index) {
      nav.checkPin = !nav.checkPin;
    },
    async getTopicsData(tab = "", page = "", load = false) {
      let topicsDetail = await getTopics(tab, page);
      if (load) {
        this.list = this.list.concat(topicsDetail.data);
        this.$store.state.nextContent[tab] = this.list;
      } else {
        this.list = topicsDetail.data;
      }
      this.loading = true;
    },
    getDetail(id) {
      this.$router.push({ path: "/detail", query: { id: id } });
    },
    isLoad() {
      this.isLoading = !this.isLoading;
      let getTab = this.$route.query.tab ? this.$route.query.tab : "all";
      let pageNum = this.list ? ~~(this.list.length / 15) + 1 : 2;
      this.getTopicsData(getTab, pageNum, true);
      this.isLoading = !this.isLoading;
    },
    init() {
      let tab = this.$route.query.tab ? this.$route.query.tab : "all";
      /*console.log(tab);
        if(this.nowPage !== tab) {
            this.loading = false;
            this.loadList();
        }*/
      if (this.$store.state.nextContent[tab]) {
        this.list = this.$store.state.nextContent[tab];
      } else {
        this.loading = false;
        this.loadList();
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../../commons/style/mixin.less";
@avatarSize: 42px;
@pinPosition: 20px;
@pinSize: 20px;
.isPin {
  background-image: url(../../commons/img/ypin.png) !important;
}

.main-today {
  position: relative;
  width: 100%;
  .list {
    position: relative;
    width: 100%;
    margin-top: 16px;
    padding: 16px 20px;
    border-radius: 2px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    &:hover {
      background-color: #eff3f6; /*#f5f5f5*/
    }
    .list-avatar {
      float: left;
      img {
        width: @avatarSize;
        height: @avatarSize;
        background-size: @avatarSize @avatarSize;
        border-radius: 100%;
      }
    }
    .list-main {
      position: relative;
      padding-left: 15px;
      cursor: pointer;
      overflow: hidden;
      p,
      a {
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      a {
        width: 80%;
        .mixin-screen-md( {
                    font-size: 16px;
                }
                );
        .mixin-screen-sm( {
                    font-size: 14px;
                }
                );
        .mixin-screen-xs( {
                    font-size: 12px;
                    font-weight: bolder;
                }
                );
      }
      p {
        width: 95%;
        line-height: 1.6;
        margin-top: 10px;
        font-size: 12px;
        color: #909399;
      }
      .list-tips {
        .tips-top,
        .tips-good {
          display: none;
        }
      }
    }
    .list-pin {
      position: absolute;
      top: 16px;
      display: block;
      width: @pinPosition;
      height: @pinPosition;
      right: @pinSize;
      background-size: @pinSize @pinSize;
      background-position: top right;
      background-repeat: no-repeat;
      background-image: url(../../commons/img/npin.png);
      cursor: pointer;
      &:hover {
        background-image: url(../../commons/img/ypin.png);
      }
    }
  }
  .load-container {
    position: relative;
    width: 100%;
    padding: 14px 10px;
    .loadBtn {
      position: relative;
      display: inherit;
      width: 180px;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
    }
  }
}
.tipsShowTop {
  .tips-top {
    display: inline-block !important;
  }
}
.tipsShowGood {
  .tips-good {
    display: inline-block !important;
  }
}
</style>