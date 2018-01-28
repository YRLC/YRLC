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
  button {
    margin: 0;
    padding: 0;
  }
  .language-switcher {
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 1;
    width: 42px;
    border: 1px solid #000;
    cursor: pointer;
  }
  .language-switcher img {
    width: 40px;
  }
</style>
