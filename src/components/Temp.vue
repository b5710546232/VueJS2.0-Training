<template lang="html">
  <div class="">
    temp
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    this.map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333
    })
  },
  methods: {},
  components: {}
}
</script>

<style scoped>
#map{
  width: 100%;
  height: 100vh;
}
</style>
