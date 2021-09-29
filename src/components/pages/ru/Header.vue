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
            <li>
              <a class="no-click">Сведения об образовательной организации</a>
              <ul class="drop-down d-7" style="width: 500px;">
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Information' }">
                  <a>Основные сведения</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Governing' }">
                  <a>Структура и органы управления образовательной организации.</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Documents' }">
                  <a>Документы</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Education' }">
                  <a>Образование</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Standards' }">
                  <a>Образовательные стандарты</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Teachers' }">
                  <a>Руководство. Педагогический (научно-педагогический) состав</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Equipment' }">
                  <a>Материально-техническое обеспечение и оснащенность образовательного процесса</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Scholarships' }">
                  <a>Стипендии и иные виды образовательной поддержки</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Paid-Education' }">
                  <a>Платные образовательные услуги</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Financial' }">
                  <a>Финансово-хозяйственная деятельность (финансовое обеспечение за счет бюджета)</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Vacant-Seats' }">
                  <a>Вакантные места для приема</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'RU-Partnership' }">
                  <a>Международное сотрудничество</a>
                </router-link>
              </ul>
            </li>
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
  .no-click {
    cursor: pointer;
  }
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
