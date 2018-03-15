<template>
    <div>
        <v-content>
            <div class="main-today">
                <el-row class="list" v-for="(nav, index) in list" :key="nav.index">
                    <div class="list-avatar">
                        <img :src = "nav.author.avatar_url"></img>
                    </div>
                    <div class="list-main" @click="getDetail(nav)">
                        <a>{{ nav.title }}</a>
                        <p>{{ nav.content.replace(new RegExp('<[^>]*>','g'),'') }}</p>
                    </div>
                    <i @click="pinClick(nav, index)" v-bind:class="{ isPin: nav.checkPin }"></i>
                </el-row>
            </div>
        </v-content>
    </div>
</template>

<script>
import { getTopics } from '@/service/data';
import vContent from '@/components/content';
import vHeader from '@/components/header';

export default {
    data() {
        return {
            clickPin: '',
            list: []
        };
    },
    created() {
        this.getTopicsData();
    },
    methods: {
        pinClick(nav, index) {
            nav.checkPin = !nav.checkPin;
        },
        async getTopicsData() {
            let topicsDetail = await getTopics();
            this.list = topicsDetail.data;
        },
        getDetail(nav) {
            window.localStorage.setItem('detail',JSON.stringify(nav));
            this.$router.push({path: 'detail'})
        }
    },
    components: { vContent, vHeader }
}
</script>

<style scoped lang="less">
@import "../../commons/style/mixin.less";
@avatarSize: 42px;
@pinPosition: 40px;
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
                background-color: #f5f5f5;
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
                .mixin-screen-md({
                    font-size: 16px;
                });
                .mixin-screen-sm({
                    font-size: 14px;
                });
                .mixin-screen-xs({
                    font-size: 12px;
                    font-weight: bolder;
                });
            }
            p {
                width: 95%;
                line-height: 1.6;
                margin-top: 10px;
                font-size: 12px;
                color: #909399;
            }
        }
       
        i {
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
            .mixin-screen-lg({
                &:hover {
                    background-image: url(../../commons/img/ypin.png);
                }
            });
            
        }
    }
}
</style>