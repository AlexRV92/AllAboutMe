<template>
  <div class="col-md-6">
    <div class="pricing-entry d-flex">
      <div class="img" :style="{backgroundImage:`url('${image}')`}"></div>
      <div class="desc pl-3">
        <div class="d-flex text align-items-center">
          <h3><span>{{ title }}</span></h3>
          <span class="price">{{ priceFormatted }}</span>
        </div>
        <div class="d-block">
          <p>{{desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMenuMeal",
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
