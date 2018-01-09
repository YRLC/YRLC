<template>
  <div class="page">
    <gallery-component/>
  </div>
</template>

<script>
  import GalleryComponent from './Gallery/GalleryComponent'

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
