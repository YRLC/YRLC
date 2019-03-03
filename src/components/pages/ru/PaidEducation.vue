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

                    <b>Пример заполнения договора со слушателем —</b>
                    https://drive.google.com/file/d/1bfC8w6twJerb-rkaCc0p0SPZqQ6eQfiM/view?usp=sharing
                  </p>

                  <p>
                    <b>Стоимость занятий</b> определяется в начале учебного года и зависит от количества учебных часов в году
                    (исключаются праздничные дни и школьные каникулы). <br>
                    Оплата предоставляется на счет организации через систему “Сбербанк” по факту заключения договора.
                    <br>
                    Возможна дробная оплата, по семестрам, ежемесячная. <br>
                    <b>150 рублей — академический час. </b><br>
                    Организация вправе изменить цену на начало следующего учебного года. <br>
                  </p>

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
