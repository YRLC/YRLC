<template>
  <footer class="bottom-footer inner">
    <span>&copy; Copyrights {{ currentYear }} Yaroslavl Russian Language Centre. All Rights Reserved</span>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {}
  },
  computed: {
    // get only
    currentYear: function () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  footer {
    flex-shrink: 0;
  }
</style>
