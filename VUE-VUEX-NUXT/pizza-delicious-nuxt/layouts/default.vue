<template>
  <div>
    <MainNav />

    <Nuxt />

    <MainFooter />
  </div>
</template>

<script>
import MainNav from  '@/components/MainNav'
import MainFooter from  '@/components/MainFooter'

export default {
  name: "App",
  components: {
    MainNav,
    MainFooter
  },
  mounted(){
    console.info('-- mi componente principal está cargado --')

    //this.$store.dispatch('loadProducts')
  },
  async fetch(){
    console.info("## cargamos la cookie en servidor ##")
    await this.$store.dispatch('loadProducts')
  }
};
</script>
