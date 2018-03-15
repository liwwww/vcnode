<template>
    <div class="reply-comtainer">
        <div class="reply-box" v-for="reply in replyData" v-show="reply.reply_id == null">
            <div class="reply-left">
                <img :src="reply.author.avatar_url" alt="img" />
            </div>
            <div class="reply-list">
                <div class="reply-user">
                    <div class="reply-msg">
                        <a>{{ reply.author.loginname }}</a>
                        <span>{{'· '+reply.create_at}}</span>
                    </div>
                </div>
                <div class="reply-content" v-html="reply.content"></div>
                <p class="reply-tips">
                    <span class="reply-tips-zan"></span>
                    <span class="reply-tips-btn"></span>
                </p>
                <div class="reply-item-box">
                    <div class="reply-item-list">
                        <div class="reply-item-content">
                            这是一条楼中楼
                        </div>
                        <div class="reply-item-msg">
                            ——liwwww · 1秒钟前
                        </div>
                    </div>
                    <div class="reply-item-form">
                        <div class="reply-btn">
                            <el-button>回复</el-button>
                        </div>
                        <div class="reply-textarea">
                            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTopic } from '@/service/data'
export default {
    props: {
        topicId: {
            type: String
        }
    },
    data() {
        return {
            replyData: []
        }
    },
    created() {
        this.getTopicData(this.topicId);
    },
    methods: {
        async getTopicData(id) {
            let topicDetail = await getTopic(id);
            this.replyData = topicDetail.data.replies;
        }
    }
}
</script>

<style scoped lang="less">
@import '../commons/style/mixin.less';

.reply-comtainer {
    position: relative;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 20px;
    padding: 15px 18px;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #fff;
    .mixin-screen-lg( {
        max-width: 1060px;
    }
    );
    .mixin-screen-md( {
        max-width: 700px;
    }
    );
    .mixin-screen-sm( {
        max-width: 460px;
    }
    );
}

.reply-left {
    float: left;
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
}

.reply-box {
    padding: 10px 0;
    .reply-list {
        padding: 0 0 25px 47px;
        border-bottom: 1px solid #fafafa;
        box-sizing: border-box;
        .reply-user {
            width: 100%;
            overflow: hidden;
            margin-bottom: 10px;
            box-sizing: border-box;
            .reply-msg {
                a {
                    font-weight: bolder;
                }
                a,
                span {
                    vertical-align: middle;
                    font-size: 13px;
                }
            }
        }
        .reply-content {
            font-size: 15px;
            line-height: 1.6;
            word-wrap: break-word;
            margin: 1.3em 0;
        }
        .reply-tips {
            height: 14px;
            width: 100%;
            background-color: #000;
        }
        .reply-item-box {
            position: relative;
            margin-top: 10px;
            font-size: 13px;
            background-color: #FAFAFA;
            padding: 0 10px;
            color: #666;
            overflow: hidden;
            .reply-item-list {
                font-size: 14px;
                padding: 10px 0 10px 40px;
                border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
                word-break: break-word;
                div {
                    margin: 10px 0;
                }
            }
            .reply-item-form {
                width: 100%;
                overflow: hidden;
                padding: 14px 0;
                .reply-btn {
                    float: right;
                }
                .reply-textarea {
                    padding-right: 100px;
                }
            }
        }
    }
}
</style>