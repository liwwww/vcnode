<template>
    <div>
        <v-header></v-header>
        <v-content>
            <div class="main-today">
                <el-row class="list" v-for="(nav, index) in list" :key="nav.index">
                    <el-col class="list-avatar" :span="4">
                        <i></i>
                    </el-col>
                    <el-col :span="19" class="list-main">
                        <a>{{ nav.title }}</a>
                        <p>{{ nav.content }}</p>
                    </el-col>
                    <i @click="pinClick(nav, index)" v-bind:class="{ isPin: nav.checkPin }"></i>
                </el-row>
            </div>
        </v-content>
    </div>
</template>

<script>
import vContent from '../components/content';
import vHeader from '../components/header';

export default {
    data() {
        return {
            clickPin: '',
            list: [
                {title: '哈哈哈哈', content: '和范德萨很发达是否考虑结婚的刷卡后方可', checkPin: false},
                {title: '哈哈哈哈', content: '和范德萨很发达是否考虑结婚的刷卡后方可', checkPin: false}
            ]
        };
    },
    methods: {
        pinClick(nav, index) {
           nav.checkPin = !nav.checkPin 
        }
    },
    components: { vContent, vHeader }
}
</script>

<style scoped lang="less">
.isPin {
    background-image: url(../commons/img/ypin.png) !important;
}
.main-today {
    position: relative;
    width: 100%;
    .list {
        position: relative;
        width: 100%;
        margin: 16px 0;
        padding: 16px 20px 0 20px;
        border-radius: 2px;
        box-sizing: border-box;
        background-color: #fff;
        overflow: hidden;
        .list-avatar {
            @avatarSize: 42px;
            width: @avatarSize;
            height: @avatarSize;
            border-radius: 100%;
            background-color: #000;
        }
        .list-main {
            margin-left: 15px;
            p {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
        @pinPosition: 40px;
        @pinSize: 20px;
        i {
            position: absolute;
            display: block;
            width: @pinPosition;
            height: @pinPosition;
            right: @pinSize;
            background-size: @pinSize @pinSize;
            background-position: top right;
            background-repeat: no-repeat;
            background-image: url(../commons/img/npin.png)
        }
    }
}
</style>