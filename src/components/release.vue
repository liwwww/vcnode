<template>
    <div>
        <div class="release-btn"></div>
        <div class="release-editor">
            <div class="release-title"></div>
            <div class="release-tab"></div>
            <div class="release-content"></div>
            <div class="release-submit"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
.release-btn {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    margin: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: #F56C6C;
    box-shadow: -2px 3px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
    z-index: 10;
    &:after {
        position: absolute;
        display: inline-block;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 16px;
        height: 1px;
        background-color: #fff;
        z-index: 11;
    }
    &:before {
        position: absolute;
        display: inline-block;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1px;
        height: 16px;
        background-color: #fff;
        z-index: 11;
    }
    &:hover {
        background-color: #d9534f;
    }
}
</style>