<template>
  <header>
    <div class="menu-top">
      <div class="menu-icon" @click="menuShow"><i></i></div>
      <span class="menu-text">VUE</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
      <transition name="slide-fade-mask" >
        <div class="menu-mask" @click="menuHide" v-show="maskShow"></div>
      </transition>
      <transition name="slide-fade-menu">
        <el-col :span="16" v-show="menuClick">
          <el-menu default-active="1" class="menu-vertical" background-color="#fff" text-color="#000" active-text-color="#000">
            <div class="menu-header">
              <img calss="menu-avatar" src="./user.png" style="width='80px',height='80px'" />
              <span class="menu-username">{{ username }}</span>
            </div>
            <el-menu-item index="1">
              <i class="el-icon-tickets"></i>
              <span slot="title">全部</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">精华</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-share"></i>
              <span slot="title">分享</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">问答</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </transition>
    </header>
</template>

<script>
export default {
  data() {
    return {
      menuClick: false,
      maskShow: false,
      username: "liwww",
      value1: true,
      value2: true
    };
  },
  methods: {
    menuShow() {
      this.menuClick = true;
      this.maskShow = true;
    },
    menuHide() {
      this.menuClick = false;
      this.maskShow = false;
    }
  }
};
</script>

<style scoped lang="less">
@import "../commons/style/mixin.less";
@import "../commons/style/animation.less";
.el-col {
  position: fixed;
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

.menu-top {
  position: fixed;
  width: 100%;
  height: 48px;
  line-height: 48px;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: #409EFF;
  overflow: hidden;
  .menu-icon {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    margin: 0 40px;
    cursor: pointer;
    i {
      display: inline-block;
      width: 100%;
      height: 2px;
      box-sizing: border-box;
      vertical-align: middle;
      background-color: #fff;
      &:after {
        .mixin-border-line(#fff,2px,auto,0);
      }
      &:before {
        .mixin-border-line(#fff,2px,0,auto);
      }
    }
  }
  .el-switch {
    float: right;
    height: inherit;
    margin-right: 40px;
  }

  .menu-text {
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 100%;
    font-size: 24px;
    color: #fff;
    box-sizing: border-box;
    cursor: pointer;
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
    .mixin-border-line( #666,1px,inherit,0);
  }
}

.menu-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 102;
}
</style>