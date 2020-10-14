<template>
      <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center">
            <h2 class="mb-4">Recent from blog</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div class="row d-flex">
          
            <ItemFeaturedBlog v-for="(item,index) in articles" :item="item" :key="index"  />

        </div>
      </div>
    </section>
</template>

<script>
import ItemFeaturedBlog from '../partials/ItemFeaturedBlog.vue'
export default {
    components: { 
        ItemFeaturedBlog 
    },
    name: "FeaturedBlog",
    data(){
        return {
            articles: [
                {
                    title: "The Delicious Pizza",  
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    image: "images/image_1.jpg",
                    author: "Álex",
                    commentsCount: 3,
                    date: new Date(2020,8,10)
                },
                 {
                    title: "The Delicious Pizza",  
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    image: "images/image_2.jpg",
                    author: "Admin",
                    commentsCount: 2,
                    date: new Date(2020,6,10)
                },
                {
                    title: "The Delicious Pizza",  
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    image: "images/image_3.jpg",
                    author: "Admin",
                    commentsCount: 3,
                    date: new Date(2020,4,20)
                }
            ]
        }
    }
}
</script>

<style>

</style>