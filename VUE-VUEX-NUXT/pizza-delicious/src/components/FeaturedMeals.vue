<template>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center">
            <h2 class="mb-4">Hot Pizza Meals</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div class="container-wrap">
        <div class="row no-gutters d-flex">
          
         <ItemFeaturedMeal v-for="(item, index) in mealsFeatured" :key="index"
                          :title="item.title"
                          :isImageRight="index>2"
                          :desc="item.description"
                          :image="item.image"
                          :price="item.price"  />

        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center mb-5 pb-3 mt-5 pt-5">
          <div class="col-md-7 heading-section text-center">
            <h2 class="mb-4">Our Menu Pricing</h2>
            <p class="flip">
              <span class="deg1"></span><span class="deg2"></span
              ><span class="deg3"></span>
            </p>
            <p class="mt-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div class="row">
          <ItemMenuMeal v-for="(item,index) in meals " :key="index"
            :title="item.title"
            :desc="item.description"
            :image="item.image"
            :price="item.price"
          />
        </div>
      </div>
    </section>
</template>

<script>
import ItemFeaturedMeal from "../partials/ItemFeaturedMeal";
import ItemMenuMeal from "../partials/ItemMenuMeal";
export default {
  name: "FeaturedMeals",
  components: {
    ItemFeaturedMeal,
    ItemMenuMeal,
  },
  computed: {
    mealsFeatured(){
      return this.$store.getters.featuredProducts
    },
    meals(){
      return this.$store.state.products
    }
  }
};
</script>