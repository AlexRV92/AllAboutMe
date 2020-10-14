<template>
  <div>
    <Hero subheading="Welcome"
          title="WE COOKED YOUR DESIRED PIZZA RECIPE"
          description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          linkTitle="Order Now"
          linkUrl="/orders"
    />
    <SocialMedia />
    <FeaturedMeals />
    <Services />
    <FeaturedBlog />
  </div>
</template>
<script>
import FeaturedBlog from '../components/FeaturedBlog.vue'
import Services from '../components/Services.vue'
import Hero from "../components/Hero";
import SocialMedia from "../components/SocialMedia";
import FeaturedMeals from "../components/FeaturedMeals";

export default {
  name: "HomePage",
  components: {
    Hero,
    FeaturedMeals,
    SocialMedia,
    Services,
    FeaturedBlog
  },
};
</script>
