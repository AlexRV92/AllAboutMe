<template>
      <section  class="home-slider owl-carousel img"
                :class="{'slider-small': small}"
      >
        
      <div class="slider-item" :style="`background-image: url(${image})`">
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text justify-content-center align-items-center"
            data-scrollax-parent="true"
          >
            <div class="col-md-7 col-sm-12 text-center">
              <span class="subheading">{{subheading}}</span>
              <h1 class="mb-4">{{title}}</h1>
              <p class="mb-4 mb-md-5">
                {{description}}
              </p>
              <p v-if="linkTitle">
                <a :href="linkUrl" class="btn btn-primary p-3 px-xl-4 py-xl-3">
                  {{linkTitle}}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "Hero",
    props: {
      image: {
        type: String,
        default: "images/bg_3.jpg"
      },
      small: {
        type: Boolean,
        default: false
      },
      subheading: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      linkTitle: {
        type: String,
        default: ""
      },
      linkUrl: {
        type: String,
        default: ""
      },
    }
}
</script>

<style scoped>
.home-slider.slider-small,
.home-slider.slider-small .slider-item,
.home-slider.slider-small .slider-item .slider-text {
  height: 400px;
}
</style>