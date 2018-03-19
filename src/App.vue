<template>
  <div>
    <v-header></v-header>
    <v-release></v-release>
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css';
import './commons/style/base.css';
import './commons/style/markdown.css';
import './commons/iconfont/index/iconfont.js';

import vHeader from './components/header';
import vRelease from './components/release';

export default {
  name: 'App',
  components: { vHeader, vRelease },
  data() {
    chekClick : 'false'
    return {}
  },
  methods: {
    clikIcon() {
      this.chekClick = 'true';
    }
  }
}
</script>

<style>
</style>
