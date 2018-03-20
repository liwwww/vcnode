<template>
    <v-content>
        <div class="release-editor shadow-box">
            <div class="release-title"></div>
            <div class="release-tab"></div>
            <div class="release-content"></div>
            <div class="release-submit"></div>
        </div>
    </v-content>
</template>

<script>
import vContent from '@/components/content';
import markdownEditor from 'vue-simplemde/src/markdown-editor';

    export default {
        components: { vContent, markdownEditor }

    }
</script>

<style scoped lang="less">
.release-editor {
    width: 100%;
    height: 100%;
    min-height: 900px;
    margin-top: 16px;
    background-color: #fff;
}
</style>