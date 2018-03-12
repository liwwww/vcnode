<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
@import '../commons/style/mixin.less';

.container {
    position: relative;
    .mixin-screen-lg({
        max-width: 1060px;
    });
    .mixin-screen-md({
        max-width: 700px;
    });
    .mixin-screen-sm({
        max-width: 460px;
    });
    min-height: 80px;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding-top: 49px;
}
</style>