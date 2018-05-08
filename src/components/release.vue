<template>
<div class="release-btn">
    <i class="menu-btn" @click="navBtn">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu1"></use>
        </svg>
    </i>
    <div class="navbar" :class="{navbarClick: isClick}">
      <slot></slot>
      <ul class="tabs-menu" @click="navBtn">
        <li  v-for="tabs in tab" index=0 :key="tabs.name">
          <router-link :to="{path: '/', query:{tab:tabs.tab}}"><span>{{ tabs.name }}</span></router-link>
        </li>
      </ul>			
	  </div>
</div>
</template>

<script>
import { getTab } from '@/service/data';
import vs from "@/config/storage";
export default {
  data() {
    return {
      isClick: false,
      tab: []
    };
  },
  created() {
    this.userName = vs.get('login_data').loginname;
    this.tab = getTab();
  },
  methods: {
    navBtn() {
      this.isClick = !this.isClick;
    }
  }
};
</script>

<style scoped lang="less">
.release-btn {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 22px;
  border-radius: 50%;
  cursor: pointer;
  background: #409eff;
  box-shadow: -2px 3px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
  .menu-btn {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    z-index: 100;
  }
  .navbar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    text-align: center;
    background-color: #409eff;
    transition: 0.24s 0.2s;
    right: 0;
    bottom: 0;
    .user-menu {
      display: inline-block;
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
      cursor: default;
      border-radius: 50%;
      transition: transform 1.4s 0.07s;
      z-index: -1;
      li {
        display: inline-block;
        position: absolute;
        transform-origin: 100px;
        transition: all 0.5s 0.1s;
        a {
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          background: #409eff;
          position: absolute;
          transition: 0.6s;
          font-size: 26px;
        }
      }
    }
    .tabs-menu {
      display: inline-block;
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
      cursor: default;
      border-radius: 50%;
      transition: transform 1.4s 0.07s;
      z-index: -1;
      li {
        display: inline-block;
        position: absolute;
        transform-origin: 100px;
        transition: all 0.5s 0.1s;
        a {
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          background: #409eff;
          position: absolute;
          transition: 0.6s;
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
  .navbarClick {
    .user-menu {
      transition: transform 0.4s 0.08s, z-index 0s 0.5s;
      transform: scale(1);
      z-index: 1;
      li {
        transition: all 0.6s;
        &:nth-child(1) {
          transition-delay: 0.12s;
          transform: translateX(-10px);
        }
        &:nth-child(1) a {
          transition-delay: 0.24s;
          transform: translateX(-45px);
        }
        &:nth-child(2) {
          transition-delay: 0.14s;
          transform: translateX(-60px);
        }
        &:nth-child(2) a {
          transition-delay: 0.28s;
          transform: translateX(-50px);
        }
        &:nth-child(3) {
          transition-delay: 0.16s;
          transform: translateX(-110px);
        }
        &:nth-child(3) a {
          transition-delay: 0.32s;
          transform: translateX(-55px);
        }
        &:nth-child(4) {
          transition-delay: 0.16s;
          transform: translateX(-160px);
        }
        &:nth-child(4) a {
          transition-delay: 0.32s;
          transform: translateX(-60px);
        }
      }
    }
    .tabs-menu {
      transition: transform 0.4s 0.08s, z-index 0s 0.5s;
      transform: scale(1);
      z-index: 1;
      li {
        transition: all 0.6s;
        &:nth-child(1) {
          transition-delay: 0.12s;
          transform: translateY(-10px);
        }
        &:nth-child(1) a {
          transition-delay: 0.24s;
          transform: translateY(-45px);
        }
        &:nth-child(2) {
          transition-delay: 0.14s;
          transform: translateY(-60px);
        }
        &:nth-child(2) a {
          transition-delay: 0.28s;
          transform: translateY(-50px);
        }
        &:nth-child(3) {
          transition-delay: 0.16s;
          transform: translateY(-110px);
        }
        &:nth-child(3) a {
          transition-delay: 0.32s;
          transform: translateY(-55px);
        }
        &:nth-child(4) {
          transition-delay: 0.16s;
          transform: translateY(-160px);
        }
        &:nth-child(4) a {
          transition-delay: 0.32s;
          transform: translateY(-60px);
        }
        &:nth-child(5) {
          transition-delay: 0.16s;
          transform: translateY(-210px);
        }
        &:nth-child(5) a {
          transition-delay: 0.32s;
          transform: translateY(-65px);
        }
        &:nth-child(6) {
          transition-delay: 0.16s;
          transform: translateY(-260px);
        }
        &:nth-child(6) a {
          transition-delay: 0.32s;
          transform: translateY(-70px);
        }
      }
    }
  }
}
</style>