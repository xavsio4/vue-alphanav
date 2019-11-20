<template>
  <div id="app">
    <alphanav :showClear="true" clearLinkText="reset" direction="horizontal" @selected="selected" @clear="clearAlpha"/>
    <h2 align="center">{{ selectedAlpha }}</h2>
    <div class="selected-letter">&nbsp;{{ selectedAlpha}} {{ selectedAlpha.toLowerCase().trim() }}</div>
  </div>
</template>

<script>
import Alphanav from './components/Alphanav.vue'

export default {
  name: 'app',
  components: {
    Alphanav,
  },
  data () {
      return {
        selectedAlpha: '',
      }
  },
  methods: {
    clearAlpha() {
      this.selectedAlpha = '';
    },
    selected(e) {
      this.selectedAlpha = e.value
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
