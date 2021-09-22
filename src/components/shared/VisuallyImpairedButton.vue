<template>
  <div class="visually-impaired-button-relative-position-wrapper">
    <div class="visually-impaired-button-absolute-position-wrapper">
      <a id="specialButton" class="visually-impaired-button" href="#">
        <img src="https://lidrekon.ru/images/special.png" :alt="title" :title="title" />
        <b>{{ title }}</b>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VisuallyImpairedButton',
    props: {
      language: {
        type: String,
        required: true
      }
    },
    computed: {
      title () {
        return this.language === 'ru' ? 'Версия для слабовидящих' : 'For visually impaired'
      }
    }
  }
</script>

<style scoped>
  .visually-impaired-button-relative-position-wrapper {
    position: relative;
    top: 5px;
    z-index: 10;
  }

  .visually-impaired-button-absolute-position-wrapper {
    position: absolute;
    left: 5px;
  }

  .visually-impaired-button {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #6A6A73;
    border-radius: 4px;
    padding: 2px 4px;
    background: white;
    font-size: 18px;
    color: black;
  }

  .visually-impaired-button:hover {
    padding: 4px 5px;
    border: 1px solid #6A6A73;
  }

  .visually-impaired-button img {
      width: 45px;
  }

  .visually-impaired-button b {
    margin-left: 5px;
  }
</style>
