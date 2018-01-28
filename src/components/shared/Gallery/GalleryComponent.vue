<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item" v-for="(row) in rows" :class="{ active: row.active}">
          <div class="row">
            <div class="col-sm-4 col-xs-12" v-for="photo in row.images">
              <div class="gallery-img">
                <img :src="'/static/images/gallery/' + photo + '.jpg'" width="360" height="350" alt="image">
                <div class="hover">
                  <ul>
                    <li>
                      <a :href="'/static/images/gallery/' + photo + '.jpg'" download>
                        <img src="/static/images/icon-56.png" width="16" height="17"
                             alt="image" class="normal">
                        <img src="/static/images/icon-57.png" width="16" height="17"
                             alt="image" class="hover-img">
                      </a>
                    </li>
                    <!--<li>
                      <a href="#">
                        <img src="/static/images/icon-58.png" width="16" height="16"
                             alt="image" class="normal">
                        <img src="/static/images/icon-59.png" width="16" height="16"
                             alt="image" class="hover-img">
                      </a>
                    </li>-->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->

    </div>
    <div class="control-box">
      <a class="left carousel-control" href="#carousel-example-generic" role="button"
         data-slide="prev">
        <span><i class="fa fa-angle-left" aria-hidden="true"></i></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button"
         data-slide="next">
        <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gallery-component',
    data () {
      return {
        rows: [
          {
            active: true,
            images: [
              'gallery_1',
              'gallery_2',
              'gallery_3',
              'gallery_4',
              'gallery_5',
              'gallery_6',
              'gallery_7',
              'gallery_8',
              'gallery_9'
            ]
          },
          {
            active: false,
            images: [
              'gallery_10',
              'gallery_11',
              'gallery_12',
              'gallery_13',
              'gallery_14',
              'gallery_15',
              'gallery_16',
              'gallery_17',
              'gallery_18'
            ]
          },
          {
            active: false,
            images: [
              'gallery_19',
              'gallery_20',
              'gallery_21'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .gallery .gallery-img > img {
    width: 360px;
    height: 350px;
    object-fit: cover;
  }
</style>
