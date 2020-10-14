<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>

export default {
  name: "App",
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
