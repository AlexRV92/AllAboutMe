<template>
  <div class="col-lg-4 d-flex">
    <div class="services-wrap d-flex">
      <a
        href="#"
        class="img"
        :class="{'order-lg-last': isImageRight}"
        :style="{backgroundImage:`url(${image})`}"
      ></a>
      <div class="text p-4">
        <h3>{{title}}</h3>
        <p>
          {{desc}}
        </p>
        <p class="price">
          <span>{{ priceFormatted }}</span>
          <a href="#" class="ml-2 btn btn-white btn-outline-white">Order</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ItemFeaturedMeal",
    props:{
      title:{
        type: String,
        default: ""
      },
      desc:{
        type: String,
        default: ""
      },
      image:{
        type: String,
        default: ""
      },
      price:{
        type: Number,
        default: 0
      },
      isImageRight: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      priceFormatted(){
        return new Intl.NumberFormat("es-ES", {style: "currency", currency: "EUR"}).format(this.price)
      }
    }
};
</script>

<style>
</style>