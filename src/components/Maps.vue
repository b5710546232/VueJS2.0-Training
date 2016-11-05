<template lang="html">
  <div id="map"></div>
  <!-- <div class="columns"> -->
  <!-- </div> -->
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
  methods: {
    initMap(){}
  },
  components: {}
}
</script>

<style scoped>
#map{
  display: flex;
  width: 100%;
  height: 100vh;
  transform-origin: 0px 0px;
  transform: scale(0.5, 0.5);
}
</style>
