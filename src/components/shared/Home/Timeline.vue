<template>
  <div class="row">
    <div class="col-xs-12">
      <ul class="w-list">
        <li v-for="(item, index) in data" :key="index">
          <span class="count-4" v-html="item"></span>
          <em class="one"></em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'timeline',
    props: ['data']
  }
</script>

<style scoped>
  @media (max-width: 768px) {
    .w-list {
      flex-direction: column;
    }

    .w-list li {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 100%;
      align-items: center;
    }

    .w-list em {
      margin: 0 0 0 20px;
    }
    .w-list span {
      margin-left: 100px;
    }
  }
  @media (max-width: 500px) {
    .w-list span {
      margin-left: 20px;
      text-align: left;
    }
    .w-list em {
      min-width: 17px;
      min-height: 17px;
    }
  }
</style>
