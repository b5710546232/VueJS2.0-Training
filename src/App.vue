<template>
  <div id="app">
    <Navbar></Navbar>
    <Temp></Temp>
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="view"></router-view>
    <!-- <input v-model="vm.searchPlace" v-gTemp-searchbox="vm" placeholder="enter some.."> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Temp from './components/Temp.vue'
export default {
  name: 'app',
  data () {
    return {
      vm: {
        searchPlace: '',
        location: {}

      }
    }
  },
  components : {
    Navbar,
    Temp
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
  /*margin-top: 60px;*/
}
</style>
