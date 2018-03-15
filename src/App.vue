<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import './commons/style/reset.css';
import './commons/style/base.css';
import './commons/iconfont/zan/iconfont.js';

import vHeader from './components/header';

export default {
  name: 'App',
  components: { vHeader },
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
