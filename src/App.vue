<template>
  <div id="app">
    <v-header></v-header>
    <v-hide-nav></v-hide-nav>
  </div>
</template>

<script>
import 'normalize.css';

import { getTopics, getTest } from './service/data';
import vHeader from './components/header';
import vHideNav from './components/hideNav';

export default {
  name: 'App',
  components: {
    vHeader, vHideNav
  },
  mounted() {
    getTest().then((res) => {
      console.log(res);
    })
  },
  data() {
    chekClick : 'false'

    return {}
  },
  methods: {
    clikIcon() {
      this.chekClick = 'true';
      console.log(chekClick);
    }
  }
}
</script>

<style>
#app {

}
</style>
