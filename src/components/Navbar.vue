<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item is-brand" href="#">
        <!-- <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo"> -->
        <span>Rice Varity</span>
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item" href="#">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="nav-item" href="#">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </div>

    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu">
      <a class="nav-item" href="#">
         <router-link to="/">Home</router-link>
      </a>
      <a class="nav-item" href="#">
        <router-link to="/map">Map</router-link>
      </a>
      <a class="nav-item" href="#">
        Blog
      </a>

      <span class="nav-item">
        <a class="button" >
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
          <span>Tweet</span>
        </a>
        <a class="button is-primary" href="#">
          <!-- <span class="icon">
            <i class="fa fa-download"></i>
          </span> -->
          <span>Download</span>
        </a>
      </span>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
