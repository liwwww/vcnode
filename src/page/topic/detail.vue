<template>
    <div>
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
                            <span>{{ detail.author.loginname }}</span>
                            </router-link>
                        </div>
                        <div class="user-create-time">{{ detail.create_at }}</div>
                    </div>
                    <div class="content-main" v-html='detail.content'></div>
                </div>
            </div>
        </v-content>
        <v-reply :topicId='id'></v-reply>
    </div>
</template>

<script>
import vHeader from '@/components/header.vue';
import vContent from '@/components/content.vue';
import vReply from '@/components/reply.vue';
import vs from '@/config/storage';
import { getTopic } from '@/service/data';
export default {
    data() {
        return {
            detail: '',
            id: '',
            detailName: 'topic_detail' 
        }
    },
    created () {
        getTopic(this.$route.query.id).then((msg) => {
            this.detail = msg.data;
            this.id = this.detail.id;
        });
    },
    components: { vHeader, vContent, vReply }
}
</script>

<style scoped lang="less">
.content {
    padding: 0;
    margin-top: 16px;
    border-radius: 2px;
    background-color: #fff;
    .content-menu {
        padding: 20px 16px;
        font-size: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #E4E7ED;
        .content-title {
            font-weight: bolder;
        }
    }
    .content-detail {
        padding: 14px 16px;
        box-sizing: border-box;
        .content-user {
            position: relative;
            width: 100%;
            overflow: hidden;
            font-size: 13px;
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
            }
            .user-create-time {
                margin: 5px 0 0 20px;
                float: right;
            }
        }
        .content-main {
            font-size: 14px;
            line-height: 22px;
            padding: 24px 26px;
        }
    }
}
</style>