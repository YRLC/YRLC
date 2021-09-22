<template>
  <button class="language-switcher" v-on:click="changeLanguage">
    <img v-if="pageLanguage === 'en'" src="/static/images/flag_russia.png" alt="">
    <img v-else src="/static/images/flag_uk.png" alt="">
  </button>
</template>

<script>
  export default {
    name: 'language-switcher',
    props: {
      pageLanguage: {
        type: String,
        required: true
      },
      changeLanguage: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>
  .language-switcher {
    margin: 0;
    padding: 0;
    position: fixed;
    top: 200px;
    left: 5px;
    z-index: 10;
    width: 42px;
    cursor: pointer;
    border: 1px solid #000;
  }

  .language-switcher:hover {
    box-shadow: 0 0 5px 2px #000;
  }

  .language-switcher img {
    width: 40px;
  }
</style>
