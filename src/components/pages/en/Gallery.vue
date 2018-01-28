<template>
  <div class="page">
    <div class="page-section black page-section--info">
      <div class="container">
        <div class="row">
          <section class="gallery">
            <div class="container">
              <div class="row">
                <div class="gallery-heading">
                  <h1>GALLERY</h1>
                </div>
                <gallery-component/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GalleryComponent from '../../shared/Gallery/GalleryComponent'

  export default {
    name: 'gallery',
    components: {
      GalleryComponent
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
<style scoped>
  @media (max-width: 768px) {
    .page-section--info {
      padding-top: 60px;
    }
  }
</style>
