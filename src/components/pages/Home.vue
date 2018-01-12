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
                  <h1>LEARN CONTEMPORARY RUSSIAN IN AN ANCIENT CITY</h1>
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
          <div class="row">
            <div class="col-xs-12">
              <ul class="w-list">
                <li>
                  <span class="count-4">founded in 2008</span>
                  <em class="one"></em>
                </li>
                <li>
                  <span class="count-4">students from several British universities</span>
                  <em class="one"></em>
                </li>
                <li>
                  <span class="count-4">students of&nbsp;all ages from&nbsp;&gt;15&nbsp;countries</span>
                  <em class="one"></em>
                </li>
                <li>
                  <span class="count-4">2018&nbsp;&mdash; celebrating 10&nbsp;years of&nbsp;work</span>
                  <em class="one"></em>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="page-section">
      <div class="col-sm-12 col-xs-12 full-width-image-block">
        <div class="full-width-holder">
          <strong class="heading">A wide range of courses</strong>

          <span class="feel-free">Have any questions? Feel free to contact us!</span>
          <span class="tel">email: <a href="mailto:info@yrlccentre.com">info@yrlccentre.com</a></span>
        </div>
      </div>
    </div>

    <div class="page-section white">
      <div class="container">
        <div class="row">
          <section class="celebrate-ten-years">
            <div class="col-xs-12 heading-holder">
              <h1>To celebrate 10 years of our centre we offer free visa application assistance!</h1>
              <p>
                A 10% discount for inviting one of your friends to do our courses!* <br/>
                *In case your friend books a course.
              </p>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1-tTkXOVWBw"
              frameborder="0"
              gesture="media"
              allow="encrypted-media"
              allowfullscreen></iframe>
          </section>
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

  export default {
    name: 'home',
    components: {
      FormMap,
      LatestNews,
      StudentsQuotes,
      OurCoursesComponent
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
