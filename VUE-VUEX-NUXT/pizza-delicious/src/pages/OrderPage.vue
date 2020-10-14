<template>
  <div>
    <Hero :small="true" subheading="Our products" image="images/bg_1.jpg" />

    <section class="ftco-menu">
      <div class="container-fluid">
        <div class="row d-md-flex">
          <div class="col-lg-12 p-md-5">
            <div class="row">
              <div class="col-md-12 nav-link-wrap mb-5 d-flex">
                <div class="nav nav-pills mx-auto">
                  <a
                    class="nav-link"
                    href="#"
                    :class="{ active: item.slug === currentCategory }"
                    @click.prevent="currentCategory = item.slug"
                    v-for="(item, index) in categories"
                    :key="index"
                    >{{ item.title }}</a
                  >
                </div>
              </div>
              <div class="col-md-12 d-flex align-items-center">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active">
                    <div class="row">
                      <ItemProduct
                        v-for="(item, index) in productsByCategory"
                        :item="item"
                        :key="index"
                        @click="addToCart"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-intro">
      <div class="container-wrap">
        <div class="wrap d-md-flex">
          <div class="info">
            <div class="row no-gutters">
              <div class="col-md-3 d-flex">
                <div class="text">
                  <h3>YOU ORDER</h3>
                  <p>Add your delicious order and press "Order" button</p>
                </div>
              </div>
              <div class="col-md-9 d-flex">
                <div class="text">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in cart" :key="index">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.product.price | toMoney }}</td>
                        <td>{{ (item.product.price * item.quantity) | toMoney }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="social d-md-flex pl-md-5 p-4 align-items-center">
            <div class="text">
              <h2>TOTAL</h2>
              <h4>{{ total | toMoney }}</h4>
            </div>
            <a @click.prevent="placeOrder"
              class="p-3 px-xl-4 py-xl-3 btn-white btn btn-outline-white" ref="orderBtn"
              >Order Now</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ItemProduct from "../partials/ItemProduct.vue";
import Hero from "../components/Hero.vue";
export default {
  components: { Hero, ItemProduct },
  name: "OrderPage",
  data() {
    return {
      currentCategory: "pizza",
      categories: [
        { title: "Pizza", slug: "pizza" },
        { title: "Drinks", slug: "bebidas" },
        { title: "Burgers", slug: "hamburguesas" },
        { title: "Pasta", slug: "pasta" },
      ],
      cart: [],
    }
  },
  computed: {
    products(){
      return this.$store.state.products
    },
    productsByCategory() {

      return this.products.filter(
        (item) => item.category === this.currentCategory
      );

    },
    total(){
      if (this.cart.length===0) return 0
      const prices = this.cart.map(item => item.product.price * item.quantity )
      return prices.reduce( (acc,current) => acc + current )
    },
  },
  methods: {
    addToCart(product) {
      const foundProduct = this.cart.find(
        (item) => item.product._id === product._id
      )

      if (!foundProduct) {
        const cartItem = {
          product: product,
          quantity: 1
        }

        this.cart.push(cartItem)
      }else{
        foundProduct.quantity++
      }
    },
    async placeOrder(){
      console.info('Enviamos el pedido')

      //etapa de validación
      //comprobar que el carrito esté vacío
        if(this.cart.length === 0){
          alert('Selecciona al menos 1 producto Pizza Delicious')
          return
        }
      //comprobar que haya un usuario identificado (usuario de tipo user)

      if(this.$store.state.isAuth === false){
          alert('Debes iniciar sesión con tu usuario para poder realizar el pedido')
          this.$router.push('/login')
          return
      }

      //etapa de preparación de datos
      //coger la información del carrito
      //coger la información de totales del pedido
      //coger la información del usuario logado
      let loggedUserData = await this.loadCurrentUserData()

      if(!loggedUserData){
        alert('No es posible enviar el pedido en este momento. Inténtalo más tarde.')
        return
      }


      let orderLines = this.cart.map((item) =>  {
        let orderLine = {
          title: item.product.title,
          category: item.product.category,
          description: item.product.description,
          image: item.product.image,
          price: item.product.price,
          quantity: item.quantity
        }

        return orderLine
      })

      let orderData = {
        user: {
          id: loggedUserData._id,
          firstname: loggedUserData.firstname,
          lastname: loggedUserData.lastname,
          address: loggedUserData.address,
          phone: loggedUserData.phone
        },
        products: orderLines,
        total: this.total
      }

      console.info(orderData)

      //etapa de petición
      //enviar la solicitud
      //recoger la respuesta
      //mostrar mensaje al usuario
      let currentUser = this.$store.state.user;
      let token = this.$store.state.token;
      const requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };

      try{

        let result = await this.axios.post("http://localhost:3000/orders", orderData, requestHeaders)

        this.cart = []

        alert('Tu pedido se ha registrado correctamente. El tiempo estimado de entrega es de 30-45 minutos.')
      }catch(error){
        alert('No hemos podido registrar tu pedido. Inténtalo más tarde.')
      }

    },
    async loadCurrentUserData() {
      let currentUser = this.$store.state.user;
      let token = this.$store.state.token;
      const requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };

      try {
        let result = await this.axios.get(
          "http://localhost:3000/users/" + currentUser.id,
          requestHeaders
        );

        return result.data
      } catch (error) {
        return null
      }
    }
  },
};
</script>

<style>
</style>
