<template>
    <div class="reply-comtainer shadow-box">
        <div class="reply-box" v-for="(reply, key) in replyData" :key="reply.id" v-if="reply&&!reply.reply_id">
            <div class="reply-left">
                <router-link :to="{ path:'/user/'+reply.author.loginname }"><img :src="reply.author.avatar_url" alt="img" /></router-link>
            </div>
            <div class="reply-list">
                <div class="reply-user">
                    <div class="reply-msg">
                        <a>{{ reply.author.loginname }}</a>
                        <i v-if="author_name == reply.author.loginname">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-star"></use>
                            </svg>
                        </i>
                        <span>· {{ reply.create_at | formatTime }}</span>
                    </div>
                </div>
                <div class="reply-content" v-html="reply.content"></div>
                <p class="reply-tips">
                    <i>
                        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-like__easyico"></use></svg>
                    </i>
                    <span class="reply-tips-zan" @click="ups(reply.id, reply)">{{ reply.ups.indexOf(userId) === -1 ? '赞':'已赞' }}
                        <a v-if="reply.ups.length > 0 ">
                            + {{ reply.ups.length }}
                        </a>
                    </span>
                    <span class="reply-tips-btn" @click="replyBtn(key)">回复({{reply.replies.length}})</span>
                </p>
                <div class="reply-item-box" v-if="replyBtnCheck == key && replyBtnCheck >= 0">
                    <div class="reply-item-list" v-for="replies in reply.replies" :key="replies.id">
                        <div class="reply-item-content" v-html="replies.content"></div>
                        <div class="reply-item-msg">
                            ——<router-link :to="{path: '/user/'+replies.author.loginname}">{{replies.author.loginname}} </router-link><i v-if="author_name == replies.author.loginname"><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-star"></use>
                            </svg>
                        </i> · {{ replies.create_at | formatTime }}
                        </div>
                    </div>
                    <div class="reply-item-form">
                        <div class="reply-btn">
                            <el-button @click="postReplies(reply.id, reply.author.loginname)">回复</el-button>
                        </div>
                        <div class="reply-textarea">
                            <el-input type="textarea" v-model="inputData" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="reply-comments">
            <div class="comments-header">
                <strong>评论</strong>
            </div>
            <div class="comments-textarea">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="inputData2"></el-input>
            </div>
            <div class="comments-btn">
                <el-button @click="postReplies('')">回复</el-button>
            </div>
        </div>
        <v-notify ref="notify" v-show='true' ></v-notify>
    </div>
</template>

<script>
import { getTopic, createReplies, upsReply } from '@/service/data';
import vNotify from '@/components/notify';
import vs from '@/config/storage';
export default {
    props: {
        topicId: {
            type: String
        }
    },
    components: { vNotify },
    data() {
        return {
            replyData: [],
            author_name: '',
            replyBtnCheck: -1,
            inputData: '',
            inputData2: '',
            postData: '',
            commentsData: '',
            userId: '',
            isSession: vs.get('SESSION_STORAGE', false)
        }
    },
    created() {
        this.getTopicData(this.topicId);
        this.userId = vs.get('login_data', this.isSession);
        this.userId = this.userId.id || ''
    },
    methods: {
        async getTopicData(id) {
            let topicDetail = await getTopic(id);
            let replyData = topicDetail.data.replies;
            for (const i in replyData) {
                if (replyData.hasOwnProperty(i)&&!replyData[i].reply_id) {
                    let childId = '';
                    let childName = '';
                    replyData[i] = {...replyData[i], 'replies': []};
                    for (const j in replyData) {
                        if (replyData.hasOwnProperty(j)&&replyData[j].reply_id&&replyData[j].reply_id === replyData[i].id) {
                            replyData[i].replies = replyData[i].replies.concat(replyData[j]);
                            childId = replyData[j].id;
                            childName = replyData[j].author.loginname;
                        }
                        if (replyData.hasOwnProperty(j)&&replyData[j].reply_id&&replyData[j].reply_id === childId) {
                            replyData[j].content = '<span style="font-size:14px;float:left;line-height:1.7;">回复 '+childName+'：'+'</span>'+replyData[j].content
                            replyData[i].replies = replyData[i].replies.concat(replyData[j]);
                            childId = replyData[j].id;
                            childName = replyData[j].author.loginname;
                        }
                    }              
                }
            }
            this.replyData = replyData;
            this.author_name = topicDetail.data.author.loginname;
        },
        replyBtn(id, data) {
            this.replyBtnCheck === id ? this.replyBtnCheck = -1:this.replyBtnCheck = id;
            this.inputData = '';
        },
        async postReplies(id, name) {
            let _accessToken = vs.get('accessToken', this.isSession);
            let inputData = id && name ? this.inputData : this.inputData2;
            this.postData = inputData;
            if(_accessToken) {
                try {
                    if(name) {
                        inputData = '@'+name+' '+inputData;
                    }  
                  await createReplies(this.topicId, id, inputData, _accessToken).then((msg) => {
                      if(msg.success) {
                          this.$store.dispatch('getNotifyMsg', {
                              title: '评论',
                              info: '评论成功',
                              type: 'success'
                          });
                          this.notify();
                          this.getTopicData(this.topicId);
                          inputData = '';
                      }
                  });
                } catch (error) {
                    this.$store.dispatch('getNotifyMsg', {
                              title: '评论',
                              info: '评论失败',
                              type: 'error'
                          });
                    this.notify();
                }
            }else {
                this.$router.push({ path: '/login' });
            }
        },
        async ups (id, replyItem) {
            let _accessToken = vs.get('accessToken', this.isSession);
            if(_accessToken) {
                try {
                    let upsMsg = await upsReply(id, _accessToken);
                    if(upsMsg.action === 'up') {
                        replyItem.ups.push(this.userId);
                    }else {
                        replyItem.ups.splice(replyItem.ups.indexOf(this.userId), 1);
                    }
                } catch (error) {
                    console.log(error);
                }
            }else {
                this.$router.push({ path: '/login' });
            }
        },
        notify (){
            this.$refs.notify.openNotify();
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
    position: relative;
    padding: 10px 0;
    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #E4E7ED;
    }
    .reply-list {
        padding: 0 0 20px 47px;
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
            width: 100%;
            font-size: 13px;
            span {
                color: #666;
                margin-right: 15px;
                cursor: pointer;
            }
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
                padding: 10px 0;
                border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
                word-break: break-word;
                div {
                    margin: 10px 0;
                    font-size: 12px;
                }
            }
            .reply-item-msg {
                a{
                    text-decoration: none;
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
.reply-comments {
    padding: 10px 0;
    overflow: hidden;
    .comments-header {
        margin-bottom: 20px;
    }
    .comments-textarea {
        margin-bottom: 20px;
    }
    .comments-btn {
        float: right;
    }
}
</style>