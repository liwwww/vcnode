<template>
    <div>
        <v-content>
            <div class="create-container shadow-box">
                <el-form label-width="40px">
                    <el-form-item label="标题">
                        <el-input placeholder="请输入标题" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="板块">
                        <el-radio-group v-model="radio3">
                        <el-radio-button v-for="tabs in tab" v-if="tabs.tab" :key="tabs.name" :label="tabs.name"></el-radio-button>
                    </el-radio-group>
                    </el-form-item>
                    <el-form-item label="正文">
                        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </v-content>
    </div>
</template>

<script>
import vContent from '@/components/content';
import { markdownEditor } from 'vue-simplemde';
import { getTab } from '../../service/data';
export default {
    data() {
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
    },
    methods: {
    }
}
</script>
<style lang="less">
@import '../../commons/style/simplemde.min.css';
@import '../../commons/style/mixin.less';
.create-container {
    margin-top: 16px;
    background-color: #fff;
    .mixin-screen-sm({
        padding: 10px;
    });
    padding: 60px;
    box-sizing: border-box;
    .create-editor {}
}
.editor-toolbar {
    .mixin-screen-sm({
        display: none;
    });
}
.el-radio-button {
    .mixin-screen-sm({
        zoom: 0.5;
    });
}
</style>
