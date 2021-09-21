<template>
  <a id="specialButton" class="visually-impaired-button" href="#">
    <img src="https://lidrekon.ru/images/special.png" alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" />
  </a>
</template>

<script>
  export default {
    name: 'VisuallyImpairedButton'
  }
</script>

<style scoped>
  .visually-impaired-button {
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 150px;
    left: 5px;
    z-index: 1;
    cursor: pointer;
    border: 1px solid #6A6A73;
    border-radius: 4px;
    padding: 2px 3px;
    background: white;
  }

  .visually-impaired-button:hover {
    padding: 4px 5px;
    border: 1px solid #6A6A73;
  }

  .visually-impaired-button img {
      width: 45px;
  }
</style>
