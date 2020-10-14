<template>
  <div class="col-md-4 text-center">
    <div class="menu-wrap">
      <a
        href="#"
        class="menu-img img mb-4"
        :style="`background-image: url(${item.image})`"
      ></a>
      <div class="text">
        <h3><a href="#">{{item.title}}</a></h3>
        <p>
         {{item.description}}
        </p>
        <p class="price"><span>{{ item.price | toMoney }}</span></p>
        <p>
          <a href="#" @click.prevent="$emit('click', item)" class="btn btn-white btn-outline-white">Add to cart</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemProduct",
  props: {
    item: {
      type: Object,
      default: {
        title: "",
        description: "",
        price: 0,
        image: "",
        category: "pizza",
      },
    },
  },
};
</script>

<style>
</style>