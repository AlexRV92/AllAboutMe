<template>
  <div>
    <Hero :small="true" subheading="404" title="Upps, página no encontrada" image="images/bg_1.jpg" />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
  name: "ErrorPage",
};
</script>

<style>
</style>