<template>
  <div class="page">
    <div class="page-section white page-section--info">
      <div class="container">
        <div class="row">
          <section>
            <div class="col-xs-12">
              <h2>Current Courses at YRLC</h2>
              <h3>Individual courses</h3>
              <p>
                We organize individual courses for masters students, professionals such as interpreters, businessmen, engineers, cooks, pharmacists and now even aircraft engineers. They can be of any required length and intensity.
              </p>
              <p>
                And fun courses for school children during the holidays when we combine classes with entertainment such as skiing, snowboarding, skating in winter and hiking, paintball, boating, horse riding in summer.
              </p>
              <p>
                Please <a href="mailto:info@yrlccentre.com">contact us</a> for details.
              </p>
              <h3>Group Courses (17 weeks)</h3>
              <video src="static/videos/Language-Course.mp4" autoplay loop></video>

              <h4>A combined course consists of 2 parts:</h4>
              <ol>
                <li>
                  <h5>A Preparation course “Russian Bootcamp” (5 weeks online, 15 hours per week).</h5>
                  <p>The course introduces the students to the basics of communication in Russian and is adjusted to the students’ current level. Students will have speaking and grammar classes,learn about culture and traditions. It is a chance to prepare for the rest of the immersive course in Russia.</p>
                </li>
                <li>
                  <h5>An Intensive Russian course “Hit the Ground Running” ( 12 weeks, 20 hours per week).</h5>
                  <p>Students get a chance to immerse themselves into the language during their stay in Russia. They stay with Russian host families  and can participate in a number of extracurricular activities and trips they can choose from.</p>
                  <p>Extracurricular activities we offer: painting Russian dolls, Russian singing classes, Russian classes in local museums, ceramics workshops where students can make their own plates, cups, etc., cooking masterclasses (Russian, Georgian, Uzbek cuisine, etc.) and many more!</p>
                </li>
              </ol>

            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'currentCourses',
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
  ul {
    padding: 15px 40px 30px;
  }
  ul li {
    padding-bottom: 7px;
    line-height: 1.4;
  }

  ol li h5 {
    font-weight: bold;
  }
  video {
    max-width: 100%;
  }
</style>
