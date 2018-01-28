<template>
  <div class="page black">
    <div class="page-section black">
      <section class="our-clients black">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 heading-area">
              <h1>WHAT OUR STUDENT SAY</h1>
            </div>
            <video-slider-component/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import VideoSliderComponent from '../../shared/StudentsSay/VideoSliderComponent'

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
