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
                    <a href="/static/docs/договор_2019_пример.docx" target="_blank" rel="noopener noreferer"><i class="fa fa-download" aria-hidden="true"></i> Пример заполнения договора со слушателем</a>
                  </p>

                  <p>
                    <b>Стоимость занятий</b> определяется в начале учебного года и зависит от количества учебных часов в
                    году
                    (исключаются праздничные дни и школьные каникулы). <br>
                    Оплата предоставляется на счет организации через систему “Сбербанк” по факту заключения договора.
                    <br>
                    Возможна дробная оплата, по семестрам, ежемесячная. <br>
                    <b>150 рублей — академический час. (для групповых занятий)</b><br>
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
                          <td>70</td>
                          <td class="column-centered">10500</td>
                        </tr>
                        <tr>
                          <td>Английский, разговорная речь</td>
                          <td>70</td>
                          <td class="column-centered">10500</td>
                        </tr>
                        <tr>
                          <td>Юный лингвист - знаток русского языка</td>
                          <td>70</td>
                          <td class="column-centered">10500</td>
                        </tr>
                        <tr>
                          <td>Лабиринты русской лингвистики</td>
                          <td>70</td>
                          <td class="column-centered">10500</td>
                        </tr>
                        <tr>
                          <td>Русский язык как иностранный (один аспект - грамматика, СМИ, русская литература,
                            разговорная практика, синтаксис и перевод)
                          </td>
                          <td>80</td>
                          <td class="column-centered">12000</td>
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
    components: {},
    data () {
      return {}
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
