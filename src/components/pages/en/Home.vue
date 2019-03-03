<template>
  <div class="page">
    <div class="justics-holder">
      <div id="carousel-example-generic102" class="carousel slide" data-ride="carousel">

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class="justices-img">
              <img src="/static/images/assumption-2614281_1920.jpg" width="1920" height="1060" alt="image" class="img">
              <div class="justices-img-background"></div>
              <div class="justics-text">
                <div class="txt">
                  <h1 class="main-heading">LEARN CONTEMPORARY RUSSIAN IN AN ANCIENT CITY</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section white yellow">
      <div class="container">
        <section class="welcome yellow">
          <div class="row">
            <div class="col-sm-4 col-xs-12 yellow">
              <div class="column yellow-1">
                <div class="img-holder">
                  <i class="icon-anchor"></i>
                </div>
                <span class="title">WHO WE ARE</span>
                <p>The Yaroslavl Russian Language Centre has been providing language courses since 2008.</p>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12 yellow">
              <div class="column yellow-2">
                <div class="img-holder">
                  <i class="icon-hourglass"></i>
                </div>
                <span class="title">our mission</span>
                <p>Immerse yourself in the language and become fluent during your stay in one of the most beautiful
                  cities of Russia!</p>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12 yellow">
              <div class="column yellow-3">
                <div class="img-holder">
                  <i class="icon-rocket"></i>
                </div>
                <span class="title">our vision</span>
                <p>Real life practice and first-hand experience of the Russian culture will keep you motivated and
                  broaden your horizons.</p>
              </div>
            </div>
          </div>
          <timeline :data="timelineData"/>
        </section>
      </div>
    </div>

    <div class="page-section">
      <div class="col-sm-12 col-xs-12 full-width-image-block">
        <div class="full-width-holder">
          <strong class="heading">A wide range of courses</strong>

          <span class="feel-free">Have any questions? Feel free to contact us!</span>
          <span class="tel">email:
            <a href="mailto:info@yrlccentre.com">info@yrlccentre.com</a>
          </span>
          <span class="tel">facebook:
            <a href="https://www.facebook.com/yaroslavlrussian/"
               target="_blank">yaroslavlrussian</a>
          </span>
          <span class="tel">youtube:
            <a href="https://www.youtube.com/channel/UCledpmqihk4dTMQoXsT691w"
               target="_blank">YRLC</a>
          </span>
        </div>
      </div>
    </div>

    <our-courses-component/>

    <students-quotes/>
    <latest-news/>
    <form-map/>

  </div>
</template>

<script>
  import FormMap from './Home/FormMap'
  import LatestNews from './Home/LatestNews'
  import StudentsQuotes from './Home/StudentsQuotes'
  import OurCoursesComponent from './Home/OurCoursesComponent'
  import Timeline from '../../shared/Home/Timeline'

  export default {
    name: 'home',
    components: {
      FormMap,
      LatestNews,
      StudentsQuotes,
      OurCoursesComponent,
      Timeline
    },
    data () {
      return {
        timelineData: [
          'founded in 2008',
          'students from several British universities',
          'students of&nbsp;all ages from&nbsp;&gt;15&nbsp;countries',
          `${new Date().getFullYear()}`
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 500px) {
    h1.main-heading {
      font-size: 21px;
      padding-top: 20px;
    }
  }
</style>
