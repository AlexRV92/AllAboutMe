<template>
  <div>
    <Hero :small="true"
          title="BLOG"
          description="Blog PizzaDelicius"
          image="images/bg_1.jpg" />

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section  text-center">
            <h2 class="mb-4">Read our blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-md-4 d-flex " v-for="article  in articles" :key="article._id">
          	<div class="blog-entry align-self-stretch">
              <a href="#" class="block-20" :style="{backgroundImage:`url(${article.image})`}">
              </a>
              <div class="text py-4 d-block">
              	<div class="meta">
                  <div><a href="#">{{ transformDate(article) }}</a></div>
                  <div><a href="#">{{ article.author }}</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">{{ article.title }}</a></h3>
                <p>{{ article.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<script>
import Hero from '@/components/Hero'

export default {
  name: "BlogPage",
  data(){
    return {
    }
  },
  components:{
    Hero
  },
  methods: {
    transformDate(article) {
      let transform = new Date(article.date)
      let shortTime = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return new Intl.DateTimeFormat('en-US', shortTime).format(transform)
    }
  },
  computed: {
    articles(){
      return this.$store.state.articles
    }
  }
}
</script>

<style>

</style>
