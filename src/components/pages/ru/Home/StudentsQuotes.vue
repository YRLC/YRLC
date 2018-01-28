<template>
  <div class="page-section black">
    <section class="our-clients black">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 heading-area">
            <h1>Что говорят наши ученики</h1>
          </div>
          <div id="carousel-example-generic231" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <i class="fa fa-quote-left bg-img" aria-hidden="true"></i>
                    <p>
                      Пока я была в России, я поняла, что Ярославский Центр Русского Языка - отличный вариант для изучения русского. Я не только повысила уровень языка, но и участвовала в различных “типично русских” внеклассных занятиях, которые очень помогли мне понять русскую культуру.
                      Преподавание ведётся на высоком уровне, и я подружилась со многими замечательными людьми. Так что я очень рада, что этот опыт останется со мной на всю жизнь.
                    </p>
                    <small><strong>Джоанна Райт</strong> - Эксетерский Университет, Великобритания</small>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <i class="fa fa-quote-left bg-img" aria-hidden="true"></i>
                    <p>
                      Ярославль, как думаю, вы уже слышали, небольшой город, в котором есть что поделать и посмотреть. Но если, как и я, вы хотите увидеть разные города России, Ярославль - идеальная точка отправления для путешествий по стране. В то же время в этом городе Вы можете увидеть настоящую Россиию, которую не так легко найти в Санкт-Петербурге или Москве. Другие плюсы города - более глубокое погружение в изучаемый язык, здесь всё не так сильно подвержено влиянию запада как в столице, он не слишком большой и не слишком маленький.
                    </p>
                    <small><strong>Марк Джонсон</strong> - Оксфордский университет, Великобритания</small>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <i class="fa fa-quote-left bg-img" aria-hidden="true"></i>
                    <p>
                      Моё обучение в Ярославле стало совершенно новым опытом для меня. Я никогда раньше не был в России, но я слышал, что Ярославль называют “настоящей Россией”, и это очень заметно. Это не Москва и не Санкт-Петербург, но это даже плюс. Размеры города позволяют легко передвигаться по городу, и он определённо дешевле чем большие города. Огромное количество событий, проходящих здесь постоянно не дадут скучать. Мне удалось побывать на шашлыках в татарском стиле, увидеть конкурс “Мисс Ярославль”, позаниматься игрой на балалайке и подружиться с новыми людьми с помощью местного напитка - водки.
                    </p>
                    <small><strong>Крис Гинелл</strong> - Оксфордский Университет, Великобритания</small>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <i class="fa fa-quote-left bg-img" aria-hidden="true"></i>
                    <p>
                      Курс в Ярославском центре русского языка был одним из лучших за 6 лет моего изучения русского. Уроки хорошо и чётко организованы, однако намного важнее способность и желание учителей объяснить сложные моменты легко и и просто.

                      Хозяйки, у которых останавливаются студенты, замечательно и хорошо Вас накормят! Мне здесь очень понравилось и я очень рекомендую этот центр.
                      Ещё раз спасибо за всё и отдельное спасибо за помощь в составлении эссе!
                    </p>
                    <small><strong>Уильям Мур</strong> - Эксетерский Университет, Великобритания</small>
                  </div>
                </div>
              </div>

            </div>
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic231" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic231" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic231" data-slide-to="2"></li>
              <li data-target="#carousel-example-generic231" data-slide-to="3"></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Slick from 'vue-slick'

  export default {
    name: 'students-quotes',
    components: {
      Slick
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>
