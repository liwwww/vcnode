<template>
    <div class="main-wrapper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
@import '../commons/style/mixin.less';

.main-wrapper {
    position: relative;
    .minxin-screen-sm({
        max-width: 460px;
    });
    .minxin-screen-md({
        max-width: 960px;
    });
    .minxin-screen-lg({
        max-width: 1200px;
    });
    min-height: 80px;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 60px 0;
}
</style>