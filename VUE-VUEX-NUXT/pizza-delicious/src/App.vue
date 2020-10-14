<template>
  <div id="app">
    <MainNav />

    <router-view></router-view>

    <MainFooter />
  </div>
</template>

<script>
import MainNav from  './components/MainNav'
import MainFooter from  './components/MainFooter'

export default {
  name: "App",
  components: {
    MainNav,
    MainFooter
  },
  mounted(){
    console.info('-- mi componente principal está cargado --')
    this.$store.dispatch('checkToken')
    this.$store.dispatch('loadProducts')
    this.$store.dispatch('loadArticles')
  }
};
</script>
