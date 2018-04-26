<template>
    <div>
        <v-content>
            <div class="main-today">
                <el-row class="list" v-for="n in 10" :key="n.index" v-if="!loading">
                    <vtloding></vtloding>
                </el-row>
                <el-row class="list" v-for="(nav, index) in list" :key="nav.index" v-if="loading">
                    <div class="list-avatar">
                        <router-link :to="{ name: 'user', params: { name: nav.author.loginname }}"><img :src="nav.author.avatar_url"/></router-link>
                    </div>
                    <div class="list-main" @click="getDetail( nav.id )">
                        <a>{{ nav.title }}</a>
                        <p>{{ nav.content.replace(new RegExp('<[^>]*>','g'),'') }}</p>
                        <div class="list-tips" style="font-size:13px;color:#999;">
                            <span>
                                <i class="el-icon-view"></i>{{ nav.visit_count }}</span>
                            <span>
                                <i class="el-icon-edit-outline" style="margin: 10px 0 0 15px;"></i>{{ nav.reply_count }}</span>
                            <span>
                                <i class="el-icon-refresh" style="margin: 10px 0 0 15px;"></i>5 秒前</span>
                        </div>
                    </div>
                    <i class="list-pin" @click="pinClick(nav, index)" v-bind:class="{ isPin: nav.checkPin }"></i>
                </el-row>
            </div>
        </v-content>
        <v-release><router-link :to="{ path: '/create', query: { tab: pageTab } }"><div class="release-btn"></div></router-link></v-release>
    </div>
</template>

<script>
import { getTopics } from '@/service/data';
import vContent from '@/components/content';
import vHeader from '@/components/header';
import vRelease from '@/components/release';
import vtloding from '@/components/topicLoading';
import vs from '@/config/storage';

export default {
    data() {
        return {
            clickPin: '',
            list: [],
            pageTab: '',
            loading: false,
            nowPage: '',
            _params: ''
        };
    },
    beforeRouteUpdate (to, from, next) {
        next();
            if(this.nowPage !== this.$route.query.tab) {
                    this.loading = false;
                    this.loadList();
                }
            
  },
    created() {
        this._params = this.$route.query.tab;
         this.loadList();
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
        async getTopicsData(tab = '') {
            let topicsDetail = await getTopics(tab);
            this.list = topicsDetail.data;
            this.loading = true;
        },
        getDetail(id) {
            this.$router.push({path: '/detail', query: { id: id}});
        }
    },
    components: { vContent, vHeader, vRelease, vtloding }
}
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
            .mixin-screen-lg( {
                &:hover {
                    background-image: url(../../commons/img/ypin.png);
                }
            }
            );
        }
    }
}
.release-btn {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    margin: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: #409EFF;
    box-shadow: -2px 3px 12px rgba(0, 0, 0, .23), 0 10px 40px rgba(0, 0, 0, .19);
    z-index: 10;
    &:after {
        position: absolute;
        display: inline-block;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 16px;
        height: 1px;
        background-color: #fff;
        z-index: 11;
    }
    &:before {
        position: absolute;
        display: inline-block;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1px;
        height: 16px;
        background-color: #fff;
        z-index: 11;
    }
    &:hover {
        background-color: #337ab7;
    }
}
</style>