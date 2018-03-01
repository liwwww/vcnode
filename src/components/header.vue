<template>
    <header>
      <div class="menu-top">
        <span class='menu-icon' @click="iconClick"></span>
        <h4 class="menu-text">VUE</h4>
      </div>
        <div class="menu-hide">
          <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
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
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      iconIsClick: false
    };
  },
  methods: {
    iconClick() {
      this.iconIsClick = true;
      console.log(this.iconIsClick);
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
.el-menu {
  border-right: none;
}
.mixin-line(@top) {
  position: absolute;
  display: inline-block;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 10px;
  margin-top: @top;
  background: #fff;
}

.menu-top {
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
      .mixin-line(18px);
    }

    &:before {
      .mixin-line(-18px);
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

.menu-hide {
    position: relative;
    z-index: 101;
  }
</style>