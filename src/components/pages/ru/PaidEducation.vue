<template>
  <div class="page">
    <div class="page-section">
      <div class="col-sm-12 col-xs-12">
        <div class="page-section white page-section--info">
          <div class="container">
            <div class="row">
              <section>
                <div class="col-xs-12" style="padding: 64px 0 32px;">
                  <h1>Платные образовательные услуги</h1>
                  <p>
                    <a href="/static/docs/образец dogovor_2021.docx" target="_blank" rel="noopener noreferer"><i class="fa fa-download" aria-hidden="true"></i> Пример заполнения договора со слушателем</a>
                  </p>

                  <p>
                    <b>Стоимость занятий</b> определяется в начале учебного года и зависит от количества учебных часов в
                    году
                    (исключаются праздничные дни и школьные каникулы). <br>
                    Оплата предоставляется на счет организации через систему “Сбербанк” по факту заключения договора.
                    <br>
                    Возможна дробная оплата, по семестрам, ежемесячная. <br>
                    <b>{{ costForHour }} рублей — академический час. (для групповых занятий)</b><br>
                    Организация вправе изменить цену на начало следующего учебного года. <br>
                  </p>

                  <section class="table yellow">
                    <div class="table-frame">
                      <table class="p-table">
                        <tr>
                          <th>Название программы</th>
                          <th>Кол-во часов</th>
                          <th>Стоимость</th>
                        </tr>
                        <tbody>
                        <tr>
                          <td>Английский для начинающих</td>
                          <td>{{ amountOfCoursesHours }}</td>
                          <td class="column-centered">{{ costForCourses }}</td>
                        </tr>
                        <tr>
                          <td>Английский, разговорная речь</td>
                          <td>{{ amountOfCoursesHours }}</td>
                          <td class="column-centered">{{ costForCourses }}</td>
                        </tr>
                        <tr>
                          <td>Юный лингвист - знаток русского языка</td>
                          <td>{{ amountOfCoursesHours }}</td>
                          <td class="column-centered">{{ costForCourses }}</td>
                        </tr>
                        <tr>
                          <td>Лабиринты русской лингвистики</td>
                          <td>{{ amountOfCoursesHours }}</td>
                          <td class="column-centered">{{ costForCourses }}</td>
                        </tr>
                        <tr>
                          <td>Русский язык как иностранный (один аспект - грамматика, СМИ, русская литература,
                            разговорная практика, синтаксис и перевод)
                          </td>
                          <td>{{ amountOfLastCourseHour }}</td>
                          <td class="column-centered">{{ costForLastCourse }}</td>
                        </tr>
                        </tbody>

                      </table>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'paid-education',
    data () {
      return {
        costForHour: 200,
        amountOfCoursesHours: 70,
        amountOfLastCourseHour: 80
      }
    },
    computed: {
      costForCourses () {
        return this.costForHour * this.amountOfCoursesHours
      },
      costForLastCourse () {
        return this.costForHour * this.amountOfLastCourseHour
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin: 0;
  }

  h1::after {
    display: none;
  }
</style>
