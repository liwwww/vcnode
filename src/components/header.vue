<template>
  <header>
    <div class="menu-top">
      <div class="menu-icon" @click="iconShow"><i></i></div>
      <span class="menu-text">VUE</span>
    </div>
      <transition name="slide-fade-mask" >
        <div class="menu-mask" @click="iconHide" v-show="maskShow"></div>
      </transition>
      <transition name="slide-fade">
        <el-col :span="16" v-show="iconIsClick">
          <el-menu default-active="1" class="menu-vertical" @open="handleOpen" @close="handleClose" background-color="#fff" text-color="#000" active-text-color="#000">
            <div class="menu-header">
              <img calss="menu-avatar" src="./user.png" style="width='80px',height='80px'" />
              <span class="menu-username">{{ username }}</span>
            </div>
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
          </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
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
      iconIsClick: false,
      maskShow: false,
      username: "liwww"
    };
  },
  methods: {
    iconShow() {
      this.iconIsClick = true;
      this.maskShow = true;
    },
    iconHide() {
      this.iconIsClick = false;
      this.maskShow = false;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
  height: 56px;
  z-index: 100;
  left: 0;
  top: 0;
  line-height: 56px;
  background-color: red;
  overflow: hidden;
  .menu-icon {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    left: 4%;
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

  .menu-text {
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 100%;
    font-size: 24px;
    left: 12%;
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