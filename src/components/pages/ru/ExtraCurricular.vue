<template>
  <div class="page">
    <div class="page-section white page-section--info">
      <div class="container">
        <div class="row">
          <section>
            <div class="col-xs-12">
              <h2>Внеклассные занятия</h2>

              <p>
                После уроков Вы можете попробовать наши внеклассные занятия:
              </p>

              <ul>
                <li>Раскрашивание матрёшек</li>
                <li>Игра на балалайке</li>
                <li>Пение на русском языке и русские народные танцы</li>
                <li>Просмотр русских фильмов с заданиями от преподавателя</li>
                <li>Изучение актёрского мастерства и постановка пьесы на русском</li>
                <li>Лепка глиной</li>
                <li>и многое другое! </li>
              </ul>

              <h4>Спортивные занятия (в районе школы)</h4>
              <ul>
                <li>Спортзал</li>
                <li>Спортивные центры с занятиями по аэробике, Зумбе, йоге, пилатесу, танцам и т.д.</li>
                <li>Сауна и бассейн</li>
                <li>Пробежки в местном парке</li>
              </ul>

              <p>
                Также организовываются встречи с русскими студентами, экскурсии и вечеринки по желанию учеников. У учеников есть возможность попробовать себя в роли учителя английского языка в нашем центре.
              </p>

              <div class="row">
                <div class="video-frame">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wdHIL6TfPnQ"
                    frameborder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'extraCurricular',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-section--info {
    padding-top: 60px;
  }
  h2, p, ul {
    padding-bottom: 20px
  }
</style>
