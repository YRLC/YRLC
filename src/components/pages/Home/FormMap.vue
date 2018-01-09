<template>
  <div class="page-section form-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17090.8139882362!2d39.902621446087515!3d57.6255055452249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1512851590710"></iframe>
    <div class="container">
      <div class="row">
        <section class="form-section">
          <div class="col-sm-6 col-xs-12 black pull-right">
            <div class="fill-form">
              <span class="heading">Apply Now</span>
              <span>
                Fill in the
                <a href="https://docs.google.com/forms/d/1DsK183f1L2Uya2NCxt_aTW15cg3F8RmdhVrqXggWv7A/edit?usp=sharing"
                   target="_blank">form</a>
                to apply to study at YRLC: <a href="https://docs.google.com/forms/d/1DsK183f1L2Uya2NCxt_aTW15cg3F8RmdhVrqXggWv7A/edit?usp=sharing" target="_blank">goo.gl/gosdHb</a></span>
              <a href="https://goo.gl/maps/apBVKtUCwJT2" target="_blank" class="address-link">
                <address class="address">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <i class="address-heading">Address</i>
                  <p class="address-whole">
                    Yaroslavl Russian Language Centre <br>
                    Ploshad Bogoyavlenia 2/27 <br>
                    Yaroslavl’ <br>
                    150000 <br>
                    Russia
                  </p>
                </address>
              </a>

              <span>We are always open to communication, e-mail us at <a href="mailto:info@yrlcentre.com">info@yrlcentre.com</a></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'form-map',
    data () {
      return {}
    }
  }
</script>
<style>
  .address {

  }
  .address-heading {
    display: inline-block;
    font-style: initial;
    font-size: 14px;
    font-weight: bold;
  }
  .address-whole {
    display: block;
    margin-left: 13px;
    font-size: 14px;
  }
  .address-link:hover {
    color: rgba(204, 204, 204, 0.5);
  }
</style>
