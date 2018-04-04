<template>
  <div id="carousel-example-generic231" class="carousel slide" data-ride="carousel">

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dK77FTXOZ4k"
              frameborder="0"
              gesture="media"
              allow="encrypted-media"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CfmSpfgBrmc"
              frameborder="0"
              gesture="media"
              allow="encrypted-media"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JnIFN2Jhw64"
            frameborder="0"
              gesture="media"
              allow="encrypted-media"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic231" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic231" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic231" data-slide-to="2"></li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'video-slider-component'
  }
</script>

<style scoped>

</style>
