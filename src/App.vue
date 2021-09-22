<template>
  <div id="app">
    <main>
      <div id="wrapper">
        <Header v-if="pageLanguage === 'en'"/>
        <RuHeader v-else-if="pageLanguage === 'ru'"/>

        <VisuallyImpairedButton :language="pageLanguage" />
        <language-switcher :pageLanguage="pageLanguage" :changeLanguage="changeLanguage"/>
        <router-view></router-view>
        <Footer v-if="pageLanguage === 'en'"/>
        <RuFooter v-else-if="pageLanguage === 'ru'"/>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from './components/pages/en/Header'
  import Footer from './components/pages/en/Footer'
  import RuHeader from './components/pages/ru/Header'
  import RuFooter from './components/pages/ru/Footer'
  import LanguageSwitcher from './components/shared/LanguageSwitcher'
  import VisuallyImpairedButton from './components/shared/VisuallyImpairedButton'

  const russian = false

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
      RuHeader,
      RuFooter,
      LanguageSwitcher,
      VisuallyImpairedButton
    },
    data () {
      return {
        pageLanguage: russian
          ? window.location.pathname.includes('/en') ? 'en' : 'ru'
          : window.location.pathname.includes('/ru') ? 'ru' : 'en'
      }
    },
    methods: {
      changeLanguage: function () {
        const splittedUrl = location.pathname.split('/')
        const typeToSwitch = this.pageLanguage === 'en' ? 'ru' : 'en'
        this.pageLanguage = typeToSwitch
        this.$router.push({ path: `/${typeToSwitch}/${splittedUrl[splittedUrl.length - 1]}` })
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
