<template>
  <header id="header2" class="header4 header-yellow">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Home' }"><a>Главная</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Courses' }">
              <a>Курсы и цены</a>
              <ul class="drop-down d-7">
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Prices' }">
                  <a>Цены</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Extra-curricular' }">
                  <a>Внеклассные занятия</a>
                </router-link>
              </ul>
            </router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-What-to-do' }"><a>Чем заняться в Ярославле?</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Gallery' }"><a>Галерея</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Students-say' }"><a>Отзывы</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Promos' }">
              <a>Акции</a>
              <ul class="drop-down d-7">
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Interactive-courses' }">
                  <a>Специальные интерактивные курсы</a>
                </router-link>
              </ul>
            </router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Host' }">
              <a>Заявка на приём иностранца</a>
            </router-link>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    width: 100%;
    display: flex;
  }

  #header2 .navbar-default .navbar-nav > li > a {
    text-transform: none;
  }

  @media only screen and (max-width: 767px) {
    .nav.navbar-nav {
      background-color: rgb(240, 240, 240);
    }
  }


</style>
