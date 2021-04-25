<template>
  <div class="page">
    <div class="page-section white page-section--info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>Prices</h2>
            <section class="table yellow">
            <div class="table-frame">
              <table class="p-table">
                <tr>
                  <th>Course</th>
                  <th>Course Fee</th>
                  <th>* Homestay</th>
                </tr>
                <tbody>
                <tr>
                  <td>
                    <b>Individual course</b>
                  </td>
                  <td>1000 roubles per lesson (45 minutes)</td>
                  <td rowspan="4">
                    1000 roubles per day, 3 meals included
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Combined group course (17 weeks)</b>
                  </td>
                  <td>1600 EUR</td>
                </tr>
                <tr>
                  <td>
                    <b>Summer / Winter Russian School</b>
                  </td>
                  <td>The cost of 1 week of the intensive course is 80 EUR (4 hours per day, 5 times a week).
                    <br><br>
                    Extracurricular activities and excursions:  25 EUR for a 2-week course and 50 EUR for a 3 or 4-week course</td>
                </tr>
                <tr>
                  <td>
                    <b>Individually organised group courses</b>
                  </td>
                  <td>The price is discussed depending on the number of students in the group</td>
                </tr>

                </tbody>
              </table>
            </div>
          </section>
          </div>
        </div>
        <div class="row">
          <section>
            <div class="col-xs-12">
              <p>
                If you are doing an individual course, one lesson costs 1000 roubles.
              </p>
              <p>
                We offer visa assistance. The visa admin fee is not included in the cost of the course and is paid for separately.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'prices',
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
</style>
