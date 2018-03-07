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
.main-wrapper {
    position: relative;
    max-width: 960px;
    min-height: 80px;
    margin: 0 auto;
    left: 0;
    right: 0;
}
</style>