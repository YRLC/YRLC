<template>
  <div class="page black">
    <video-slider-component/>
  </div>
</template>

<script>
  import VideoSliderComponent from './StudentsSay/VideoSliderComponent'

  export default {
    name: 'studentsSay',
    components: {
      VideoSliderComponent
    },
    mounted: () => {
      const page = document.querySelector('#wrapper')
      page.classList.add('black')
    },
    beforeDestroy: () => {
      const page = document.querySelector('#wrapper')
      page.classList.remove('black')
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
