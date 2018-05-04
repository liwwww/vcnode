<template>
    <div>
        <v-content>
            <div class="create-container shadow-box">
                <el-form label-width="40px">
                    <el-form-item label="标题">
                        <el-input v-model="title" placeholder="请输入标题" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="板块">
                        <el-radio-group v-model="radio">
                        <el-radio-button v-for="tabName in tabs" v-if="tabName.release" :key="tabName.tab" :label="tabName.name"></el-radio-button>
                    </el-radio-group>
                    </el-form-item>
                    <el-form-item label="正文">
                        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="createBtn()">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </v-content>
        <v-notify ref="notify"></v-notify>
    </div>
</template>

<script>
import vContent from '@/components/content';
import { markdownEditor } from 'vue-simplemde';
import vNotify from '@/components/notify'
import { getTab, createTopic, checkUser } from '../../service/data';
import vs from '@/config/storage';
export default {
    data() {
        return {
            tabs: '',
            tab: '',
            radio: '',
            title: '',
            content: '',
            loginData: vs.get('login_data'),                                    // markdown编辑器内容
            configs: {                                    // markdown编辑器配置参数
                status: false,                            // 禁用底部状态栏
                initialValue: '请输入要编辑的内容....',                // 设置初始值
                renderingConfig: {
                    codeSyntaxHighlighting: false,        // 开启代码高亮
                    highlightingTheme: 'atom-one-light' // 自定义代码高亮主题
                }
            }
        }
    },
    created() {
        let tabParam = this.$route.query.tab;
        let tabList = getTab();
        this.tabs = tabList;
        for (var i in tabList) {
            if (tabList.hasOwnProperty(i) === true && tabList[i].tab == tabParam) {
                this.radio = tabList[i].name;
                this.tab = tabList[i].tab;
                }
            }
    },
    components: {
        markdownEditor,
        vContent,
        vNotify
    },
    methods: {
        createBtn (){
            if(this.tab && this.content && this.title) {
                this.release();
            }else {
                this.$store.dispatch('getNotifyMsg', {
                    title: '创建话题',
                    info: '请补全信息',
                    type: 'error'
                });
                this.notify();
            }
        }, 
        release (){
            if(!this.loginData) {
                this.$router.push({ path: '/login' });
            }
            let _accessToken = JSON.parse(this.loginData).access_token;
            checkUser(_accessToken).then((msg) => {
                if(msg.success) {
                    let tabList = this.tabs;
                    for (var i in tabList) {
                        if (this.tabs.hasOwnProperty(i) === true && tabList[i].name == this.radio) {
                            this.tab = tabList[i].tab;
                            }
                        }
                    this.tab = this.tab ? this.tab : 'ask';
                    createTopic(_accessToken, this.title, this.tab, this.content).then((msg) => {
                        if(msg.success) {
                            this.$store.dispatch('getNotifyMsg', {
                            title: '创建话题',
                            info: '创建成功',
                            type: 'success'
                            });
                            this.notify();
                            this.$router.push({ path: '/detail', query: { id: msg.topic_id } });
                        }else {
                            this.$store.dispatch('getNotifyMsg', {
                            title: '创建话题',
                            info: '服务器或用户信息错误',
                            type: 'error'
                            });
                            this.notify();
                        }
                    });
                }
            })  
        },
        notify (){
            this.$refs.notify.openNotify();
        }
    }
}
</script>
<style lang="less">
@import '../../commons/style/simplemde.min.css';
@import '../../commons/style/mixin.less';
.create-container {
    margin-top: -33px;
    background-color: #fff;
    .mixin-screen-sm({
        padding: 10px;
    });
    padding: 50px 45px;
    box-sizing: border-box;
}
.editor-toolbar {
    .mixin-screen-sm({
        display: none;
    });
}
.el-radio-button {
    .mixin-screen-sm({
        zoom: .8;
    });
}
</style>
