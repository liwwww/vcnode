<template>
  <header>
    <div class="menu-top">
      <span class='menu-icon' @click="iconShow"></span>
      <h4 class="menu-text">VUE</h4>
    </div>
    <div class="menu-hide" v-show="iconIsClick">
      <div class="menu-mask" @click="iconHide"></div>
      <el-col :span="16">
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
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      iconIsClick: false,
      username: 'liwww'
    };
  },
  methods: {
    iconShow() {
      this.iconIsClick = true;
      console.log(this.iconIsClick);
    },
    iconHide() {
      this.iconIsClick = false;
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
.mixin-line(@top,@color,@height,@topPosition,@leftPosition) {
  position: absolute;
  display: inline-block;
  content: "";
  top: @topPosition;
  left: @leftPosition;
  width: 100%;
  height: @height;
  margin-top: @top;
  background: @color;
}

.el-col {
  position: relative;
  height: 100%;
  z-index: 100;

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
  height: 66px;
  z-index: 100;
  left: 0;
  top: 0;
  line-height: 60px;
  background-color: red;
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
      .mixin-line(18px,#fff,2px,0,0);
    }

    &:before {
      .mixin-line(-18px,#fff,2px,0,0);
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
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 101;

  .menu-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
  }

  .menu-header {
    width: 100%;
    height: 25%;

    img {
      width: 60px;
      height: 60px;
      margin: 12% 0 0 22px;
      border-radius: 50%; 
    }

    span {
      display: block;
      padding: 24px 0 0 22px;
      box-sizing: border-box;
    }

    &:after {
        .mixin-line(10px, #666,1px,inherit,inherit);
      }
  }
}
</style>