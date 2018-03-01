<template>
    <header id='menu-top'>
        <span class='menu-icon'></span>
        <h4 class="menu-text">VUE</h4>
        <div class="top-toggle">
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
#menu-top {
    position: fixed;
    width: 100%;
    height: 66px;
    z-index: 100;
    left: 0;
    top: 0;
    line-height: 60px;
    background-color: #000;
    overflow: hidden;

    .menu-icon {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 2px;
        box-sizing: border-box;
        left: 4%;
        vertical-align: middle;
        background-color: #fff;

        &:after {
            position: absolute;
            display: inline-block;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            border-radius: 10px;
            margin-top: 18px;
            background: #fff;
        }

        &:before {
            position: absolute;
            display: inline-block;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            margin-top: -18px;
            background: #fff;
        }
    }

    .menu-text {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        left: 5%;
        font-size: 24px;
        margin: 0 46px;
        color: #fff;
        cursor: pointer;
    }
}





.menu-icon::after {}

.menu-icon::before {}
</style>