<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12 nav-link-wrap mb-5 d-flex">
                <div class="nav nav-pills mx-auto my-5">
                  <a v-for="section in sectionList" :key="section.id"
                    class="nav-link mr-2"
                    href="#"
                    :class="{ active: section.id === currentCategory }"
                    @click.prevent="openAdminSection(section)"
                    >{{ section.title}}</a
                  >
                  <a
                    class="btn btn-primary py-3 px-5 ml-4"
                    href="#"
                    @click.prevent="logout"
                    >Cerrar sesión</a
                  >
                </div>
              </div>
        </div>

        <component :is="currentComponent" ></component>

      </div>
    </section>
  </div>
</template>

<script>
import ProductsAdmin from "@/components/admin/ProductsAdmin.vue";
import OrdersAdmin from "@/components/admin/OrdersAdmin.vue";
import BlogAdmin from "@/components/admin/BlogAdmin.vue";
import UsersAdmin from "@/components/admin/UsersAdmin.vue";

export default {
  name: "AdminPage",
  middleware: 'authAsAdmin',
  data(){
    return {
      sectionList: [
        {id:'admin-products', title: 'Productos', component: ProductsAdmin },
        {id:'admin-orders', title: 'Pedidos', component: OrdersAdmin},
        {id:'admin-blog', title: 'Blog', component: BlogAdmin},
        {id:'admin-users', title: 'Usuarios', component: UsersAdmin},
      ],
      currentCategory: 'admin-products',
      currentComponent: ProductsAdmin
    }
  },
  methods: {
    openAdminSection(section){
      this.currentCategory = section.id
      this.currentComponent = section.component
    },
    logout(){
        this.$store.dispatch('logout')

        this.$router.push("/")
    }
  }
};
</script>

<style>
</style>
