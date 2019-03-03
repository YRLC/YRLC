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
                  <h1 class="main-heading">УЧИТЕ РУССКИЙ В РОССИИ</h1>
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
                <p>Практика в повседневном общении и отличное преподавание расширят границы ваших представлений о
                  русском языке и культуре.</p>
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
          <strong class="heading">Разнообразные курсы</strong>

          <span class="feel-free">Есть вопросы? Свяжитесь с нами!</span>
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


    <div class="page-section">
      <div class="col-sm-12 col-xs-12">
        <div class="page-section white page-section--info">
          <div class="container">
            <div class="row">
              <section>
                <div class="col-xs-12" style="padding: 64px 0 32px;">
                  <h3>Школа английского языка при ЯЦРЯ предлагает:</h3>
                  <p style="padding: 16px 0 0 0">
                    1. Курсы английского языка для начинающих (для детей 6-7,7-8, 8-9 лет). <br/>
                    Занятия проводятся 2 раза в неделю в небольших группах по 5-6 человек. Продолжительность занятия - 1
                    академический час.
                    <br/>
                    Закладываются основные навыки использования англ. языка: чтение, говорение, письмо, слушание. <br/>
                    Продолжительность курса - 1 учебный год с возможностью перехода на следующий уровень. <br/>
                    <br/>
                    2. Английский, разговорная речь (для учащихся средних и старших классов от 10 до 18 лет). <br/>
                    Занятия в небольших группах 2 раза в неделю. Продолжительность занятия - 1 академический час. <br/>
                    Занятия нацелены на развитие навыков говорения, понимания англоязычной речи. На уроках
                    предоставляется возможность прямого общения с носителями языка. Предусмотрено участие в праздниках и
                    спектаклях.<br/>
                  </p>

                  <h3>Школа русского языка при ЯЦРЯ предлагает курсы по следующим программам:</h3>

                  <h4 style="padding-top: 8px">“Юный лингвист-знаток родного языка”</h4>

                  <p>
                    Разработана для детей 10-12 лет, для которых недостаточно уроков русского языка в школе и которые
                    хотят более углубленно и расширенно изучать родной русский язык. Занятия организуются в интересных
                    формах и способствуют развитию творческих возможностей учащихся, повышают их языковую культуру.<br/>
                    Основная цель курса - развитие интереса к родному языку, воспитание бережного отношения к слову и
                    богатствам языка, посредством развития основных языковых навыков.<br/>
                  </p>
                  <h4 style="padding-top: 8px">“Лабиринты русской лингвистики”</h4>
                  <p>
                    Разработана для детей 13-14 лет.<br/>
                    Цель программы: обучение практическим и теоретическим знаниям устной и письменной русской речи за
                    пределами школьной программы, изучение истории языка и лингвистического краеведения.<br/>
                    Задачи курса: расширить словарный запас, обогатить речь учащихся, привить навык грамотного письма,
                    овладеть элементарными способами анализа изучаемых языковых явлений.<br/>
                  </p>
                  <h4 style="padding-top: 8px">“Русский язык как иностранный”.</h4>
                  <p>
                    Программа предназначена для учащихся, чей русский язык не родной.<br/>
                    Цель курса: обучение основам русского языка как иностранного (грамматика, лексика, фонетика,
                    говорение, чтение, слушание, письмо). При необходимости возможна индивидуальная корректировка курса.
                    по требованию учащегося.<br/>
                    Количество учебных часов определяется индивидуально.<br/>
                  </p>

                  <p>

                    Стоимость занятий определяется в начале учебного года и зависит от количества учебных часов в году
                    (исключаются праздничные дни и школьные каникулы).<br/>
                    Оплата предоставляется на счет организации через систему “Сбербанк” по факту заключения договора.
                    Возможна дробная оплата, по семестрам, ежемесячная.<br/>
                    150 рублей - академический час.<br/>
                    Организация вправе изменить цену на начало следующего учебного года.<br/>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          'Центр основан в 2008',
          'Студенты из нескольких британских университетов',
          'Студенты всех возрастов из&nbsp;>15&nbsp;стран',
          `${new Date().getFullYear()} — ${new Date().getFullYear() - 2008} лет работы`
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
