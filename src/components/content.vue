<template>
<div>
    <keep-alive>
<v-header></v-header>
    </keep-alive>
    <div class="container">
        <slot></slot>
    </div>
</div>
</template>

<script>
import vHeader from '@/components/header';
    export default {
        components: {vHeader}
    }
</script>

<style scoped lang="less">
@import '../commons/style/mixin.less';

.container {
    position: relative;
    min-height: 80px;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding-top: 49px;
    .mixin-screen-lg({
        max-width: 1060px;
    });
    .mixin-screen-md({
        max-width: 700px;
    });
    .mixin-screen-sm({
        max-width: 460px;
    });
}
</style>