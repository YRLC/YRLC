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
            <router-link tag="li" exact-active-class="active" :to="{ name: 'Home' }"><a>Home</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'Courses' }">
              <a>Courses at YRLC</a>
              <ul class="drop-down d-7">
                <router-link tag="li" exact-active-class="active" :to="{ name: 'Current-courses' }">
                  <a>Current Courses at YRLC</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'Prices' }">
                  <a>Prices</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'Extra-curricular' }">
                  <a>Extra-curricular Activities</a>
                </router-link>
                <router-link tag="li" exact-active-class="active" :to="{ name: 'Teaching-practice' }">
                  <a>Teaching English Practice</a>
                </router-link>
              </ul>
            </router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'Accommodation' }"><a>Accommodation</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'Travel' }"><a>Travelling to Yaroslavl</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'What-to-do' }">
              <a>What to do in Yaroslavl</a>
              <ul class="drop-down d-7">
                <router-link tag="li" exact-active-class="active" :to="{ name: 'Excursions' }">
                  <a>Trips and excursions</a>
                </router-link>
              </ul>
            </router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'Gallery' }"><a>Gallery</a></router-link>
            <router-link tag="li" exact-active-class="active" :to="{ name: 'Students-say' }"><a>What our students say</a></router-link>
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
<style></style>
