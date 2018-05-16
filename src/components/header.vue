<template>
  <header>
    <div class="menu-top">
      <router-link :to="{ path: '/' }"><span class="menu-text">VUE</span></router-link>
      <!--<el-switch v-model="value2" active-color="#F2F6FC" inactive-color="#67C23A"></el-switch>-->
    </div>
  </header>
</template>

<script>
import { getTab } from '../service/data';
export default {
  data() {
    return {
      menuClick: false,
      username: "liwww",
      value2: '',
      tab: []
    }
  },
  created() {
    this.tab = getTab();
  },
  methods: {
    menuCtrl() {
      this.menuClick = !this.menuClick;
    }
  }
};
</script>

<style lang="less">
@import "../commons/style/mixin.less";
@import "../commons/style/animation.less";
.el-col {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 103;
  .menuitem {
    height: 100%;
  }
  .el-menu {
    height: 100%;
    border-right: none;
  }
}

header {
  overflow: hidden;
}

.menu-top {
  position: fixed;
  width: 100%;
  height: 48px;
  line-height: 48px;
  left: 0;
  top: 0;
  .el-switch__button {
    width: 28px !important;
    height: 28px !important;
    left: -5px !important;
    top: -5px !important;
    background-image: url(../commons/img/pin.png) !important;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: rgba(0, 0, 0, 0) !important;
  }
  padding: 0 40px;
  box-sizing: border-box;
  background-color: #409EFF;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(26,26,26,.2);
  z-index: 100;
  .menu-icon {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 24px;
    line-height: 24px;
    vertical-align: text-bottom;
    cursor: pointer;
    i {
      display: inline-block;
      width: 100%;
      height: 2px;
      box-sizing: border-box;
      vertical-align: middle;
      background-color: #fff;
      &:after {
        .mixin-border-line(#fff, 2px, auto, 0);
      }
      &:before {
        .mixin-border-line(#fff, 2px, 2px, auto);
      }
    }
  }

  .menu-text {
    position: relative;
    display: inline-block;
    top: 0;
    bottom: 0;
    margin: auto 0;
    line-height: 24px;
    font-size: 24px;
    color: #fff;
    box-sizing: border-box;
  }
}

.menu-header {
  position: relative;
  width: 100%;
  padding-bottom: 16px;
  img {
    width: 60px;
    height: 60px;
    margin: 22px 0 0 22px;
    border-radius: 50%;
  }
  span {
    display: block;
    padding: 24px 0 0 22px;
    box-sizing: border-box;
  }
  &:after {
    .mixin-border-line( #666, 1px, inherit, 0);
  }
}

.menu-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 102;
}
</style>