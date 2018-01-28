<template>
  <div class="page">
    <div class="page-section white page-section--info">
      <div class="container">
        <div class="row">
          <section>
            <div class="col-xs-12">
              <h2>Promos</h2>
              <div class="row">
                <promo class="col-xs-12 col-md-6 col-lg-4 col-xl-3"
                       v-for="(discount, index) in discounts" :key="index"
                       :discount="discount"/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Promo from '../../shared/Promo'

  export default {
    name: 'promos',
    components: {
      Promo
    },
    data () {
      return {
        discounts: [
          {
            title: 'Early birds',
            description: [
              'A 5% early booking discount for those who wish to do an 18-week course in 2018-2019.',
              'A 10% early booking discount for a 36-week course. Early booking deadline is 15.07.2018. The discount is eligible when payment is not less than 50% of the full course cost.'
            ]
          },
          {
            title: 'Welcome back',
            description: ['If you have completed a full one-level course (e.g. Elementary) at our centre and wish to continue your studies on the next level, you may get a discount up to 7%.']
          },
          {
            title: 'Welcome back back',
            description: ['Coming back for the third, fourth or fifth time?', 'Get a 10% discount for your course.']
          },
          {
            title: 'All at once',
            description: ['If you do a one-time payment 2 months before the start of your course, you get a 5% discount.']
          },
          {
            title: 'A Family Discount',
            description: ['2 members of the same family get a 20% discount if they are doing a group course.']
          },
          {
            title: 'A corporate Discount',
            description: ['A 15% discount for three employees doing a group course together.']
          },
          {
            title: 'Cooperation',
            description: ['We consider cooperation with online schools, language centres, tutors, intermediaries and private Russian teachers in terms of promotion of our centre.']
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .page-section--info {
    padding-top: 60px;
  }
</style>
