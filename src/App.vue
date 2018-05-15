<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import "normalize.css";
import "./commons/style/base.css";
import "./commons/style/markdown.css";
import "./commons/iconfont/index/iconfont.js";

import vHeader from "./components/header";
import vRelease from "./components/release";

export default {
  name: "App",
  components: { vHeader, vRelease },
  data() {
    chekClick: "false";
    return {};
  },
  methods: {
    clikIcon() {
      this.chekClick = "true";
    }
  }
};
</script>

<style>

</style>
