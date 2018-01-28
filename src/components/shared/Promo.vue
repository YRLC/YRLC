<template>
  <div>
    <div class="card">
      <h3 class="card__title">{{discount.title}}</h3>
      <div class="card__description" v-for="description in discount.description">
        {{description}}<br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'promo',
    props: ['discount']
  }
</script>

<style scoped>
  .card {
    box-sizing: border-box;
    background-color: #eee;
    border-radius: 5px;
    padding: 20px 30px 30px;
    margin-top: 15px;
    margin-bottom: 15px;
    min-height: 282px;
  }

  .page-section.page-section--info .card__title {
    color: #444;
  }
</style>
