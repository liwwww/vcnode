<template> 
    <router-view></router-view>
</template>

<script>
import 'normalize.css';
import './commons/style/base.css';

import { getTopics } from './service/data';
import vHeader from './components/header';
import vfetch from './config/fetch';

export default {
  name: 'App',
  components: { vHeader },
  mounted() {
    vfetch('/topic/5433d5e4e737cbe96dcef312','GET').then((res) => {
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
#main {
  
}
</style>
