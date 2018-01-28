<template>
  <div id="app">
    <main>
      <div id="wrapper">
        <Header v-if="pageLanguage === 'en'"/>
        <RuHeader v-else="pageLanguage === 'ru'"/>
        <router-view></router-view>
        <Footer v-if="pageLanguage === 'en'"/>
        <RuFooter v-else="pageLanguage === 'ru'"/>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from './components/pages/en/Header'
  import Footer from './components/pages/en/Footer'
  import RuHeader from './components/pages/ru/Header'
  import RuFooter from './components/pages/ru/Footer'

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
      RuHeader,
      RuFooter
    },
    computed: {
      // a computed getter
      pageLanguage: function () {
        return window.location.pathname.includes('/ru') ? 'ru' : 'en'
      }
    }
  }
</script>

<style>
body {
  margin: 0;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
}
</style>
