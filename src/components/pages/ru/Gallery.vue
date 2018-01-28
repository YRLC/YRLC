<template>
  <div class="page">
    <div class="page-section black">
      <div class="container">
        <div class="row">
          <section class="gallery">
            <div class="container">
              <div class="row">
                <div class="gallery-heading">
                  <h1>Галерея</h1>
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
<style></style>
