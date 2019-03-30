<template>
  <div class="page-section form-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17090.8139882362!2d39.902621446087515!3d57.6255055452249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1512851590710"></iframe>
    <div class="container">
      <div class="row">
        <section class="form-section">
          <div class="col-sm-6 col-xs-12 black pull-right">
            <div class="fill-form">
              <span>Свяжитесь с нами <a href="mailto:info@yrlccentre.com">info@yrlccentre.com</a></span>
              <a href="https://goo.gl/maps/apBVKtUCwJT2" target="_blank" class="address-link">
                <address class="address">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <i class="address-heading">Юридический адрес</i>
                  <p class="address-whole">
                    “Ярославский Центр Русского Языка”<br>
                    пл. Богоявления,2/27 <br>
                    Ярославль <br>
                    Индекс 150000 <br>
                    Россия
                  </p>
                </address>
              </a>
              <span><a href="https://www.facebook.com/yaroslavlrussian/">Facebook</a></span>
              <span><a href="https://www.youtube.com/channel/UCledpmqihk4dTMQoXsT691w">Youtube</a></span>
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
