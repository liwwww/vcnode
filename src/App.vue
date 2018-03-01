<template>
  <div id="app">
    <vHeader></vHeader>
  </div>
</template>

<script>
import 'normalize.css';

import { getTopics } from './service/data';
import vHeader from './components/header'

export default {
  name: 'App',
  components: {
    'vHeader': vHeader 
  },
  mounted() {
    getTopics().then((res) => {
      console.log(res);
    })
  }
}
</script>

<style>
#app {

}
</style>
