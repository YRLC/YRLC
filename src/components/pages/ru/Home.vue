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
                  <h1>УЧИТЕ РУССКИЙ В РОССИИ</h1>
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
                <span class="title">Кто мы?</span>
                <p>Ярославский Центр Русского Языка обучает иностранцев русскому языку с 2008 года.</p>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12 yellow">
              <div class="column yellow-2">
                <div class="img-holder">
                  <i class="icon-hourglass"></i>
                </div>
                <span class="title">Наша миссия</span>
                <p>Начните свободно общаться на русском в одном из самых красивых и древних городов России!</p>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12 yellow">
              <div class="column yellow-3">
                <div class="img-holder">
                  <i class="icon-rocket"></i>
                </div>
                <span class="title">Наше видение</span>
                <p>Практика в повседневном общении и отличное преподавание расширят границы ваших представлений о русском языке и культуре.</p>
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

    <div class="page-section white">
      <div class="container">
        <div class="row">
          <section class="celebrate-ten-years">
            <div class="col-xs-12 heading-holder">
              <h1>В честь 10-летнего юбилея нашего центра мы предоставляем бесплатную помощь в оформлении визы!</h1>
              <p>
                Приведите друга и получите скидку 10% на обучение!* <br/>
                *В случае бронирования курса Вашим другом.
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
