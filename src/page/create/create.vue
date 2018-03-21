<template>
    <div>
        <v-content>
            <div class="create-container shadow-box">
                <div class="create-title">
                    <el-input placeholder="请输入标题" clearable></el-input>
                </div>
                <div class="create-tab">
                    <el-radio-group v-model="radio3">
                        <el-radio-button v-for="tabs in tab" :key="tabs.name" :label="tabs.name"></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="create-editor">
                    <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
                </div>
                <div class="create-submit">
                    <el-button type="primary">提交</el-button>
                </div>
            </div>
        </v-content>
    </div>
</template>

<script>
import vContent from '@/components/content';
import { markdownEditor } from 'vue-simplemde';            // 导入markdownEditor组件
import { getTab } from '../../service/data';
export default {
    data: function() {
        return {
            tab: [],
            radio3: '分享',
            content: '',                                    // markdown编辑器内容
            configs: {                                    // markdown编辑器配置参数
                status: false,                            // 禁用底部状态栏
                initialValue: '请输入要编辑的内容....',                // 设置初始值
                renderingConfig: {
                    codeSyntaxHighlighting: true,        // 开启代码高亮
                    highlightingTheme: 'atom-one-light' // 自定义代码高亮主题
                }
            }
        }
    },
    created() {
        this.tab = getTab(); 
    },
    components: {
        markdownEditor,
        vContent
    }
}
</script>
<style lang="less">
@import '../../commons/style/simplemde.min.css';
.create-container {
    margin-top: 16px;
    background-color: #fff;
    .create-editor {}
}
</style>
