<template>
  <section class="ftco-section contact-section">
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <form action="#" class="contact-form">
            <input v-model="userData.email" type="hidden" />
            <div class="row">
              <div class="col-md-12 mb-5">
                <h3><img :src="userAvatar" :alt="userFullName" /> Hola {{userData.firstname}}</h3>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="userData.firstname"
                    type="text"
                    class="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.phone"
                    type="phone"
                    class="form-control"
                    placeholder="Your phone"
                    required
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="userData.lastname"
                    type="text"
                    class="form-control"
                    placeholder="Your surname"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.password"
                    type="password"
                    minlength="4"
                    class="form-control"
                    placeholder="Your password"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.address"
                    type="text"
                    class="form-control"
                    placeholder="Your address"
                    required
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <div class="form-group d-flex justify-content-center">
              <input
                @click.prevent="update"
                type="submit"
                value="Actualizar"
                class="btn btn-primary py-3 px-5"
              />
              <input
                @click.prevent="logout"
                type="submit"
                value="Cerrar sesión"
                class="btn btn-primary py-3 px-5 ml-4"
              />
            </div>
          </form>
        </div>

      </div>
      <div class="row">
          <div class="col-md-12 mb-5 text-center">
            <h3> Mis pedidos</h3>
          </div>
      </div>
      <div v-for="order in userOrders" :key="order._id" class="row">
        <div class="col-md-12 mb-1">
          <div class="row order-item-header">
            <div class="col-md-4 font-weight-bold">{{ order._id }}</div>
            <div class="col-md-4">{{createDateFromString(order.created_at) | toDate }}</div>
            <div class="col-md-4 text-right">{{order.status | statusLabel }}</div>
            <div class="col-md-4 font-weight-bold">{{order.user.firstname}} {{order.user.lastname}}</div>
            <div class="col-md-4">{{order.user.address}}</div>
            <div class="col-md-4"><a :href="'tel:' + order.user.phone" style="text-decoration: underline;">{{order.user.phone}}</a></div>
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="row mb-3">
              <div class="col-md-3"></div>
              <div class="col-md-5">Producto</div>
              <div class="col-md-2">Cantidad</div>
              <div class="col-md-2">Subtotal</div>
          </div>
          <div class="row mb-3" v-for="product in order.products" :key="product._id">
              <div class="col-md-2"><img width="100%" :src="product.image" :alt="product.title" /></div>
              <div class="col-md-5">
                <h5>{{product.title}}</h5>
                <p>{{product.description}}</p>
                </div>
              <div class="col-md-2">{{product.quantity}}</div>
              <div class="col-md-2">{{product.quantity * product.price | toMoney}}</div>
          </div>
          <div class="row mb-3 order-total">
              <div class="col-md-3"></div>
              <div class="col-md-5"></div>
              <div class="col-md-2"></div>
              <div class="col-md-2"><h3>{{order.total | toMoney}}</h3></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      userData: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      },
      userOrders: []
    };
  },
  computed: {
      userFullName(){
          if(!this.$store.state.user){
              return ''
          }
        
        return this.$store.state.user.firstname+" "+this.$store.state.user.lastname;
      },
      userAvatar(){
          if(!this.$store.state.user.hasOwnProperty('avatar')){
              return ''
          }

          return this.$store.state.user.avatar;
      }
  },
  methods: {
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
        
        this.userData.password = ''
        this.userData.firstname = result.data.firstname
        this.userData.lastname = result.data.lastname
        this.userData.email = result.data.email
        this.userData.phone = result.data.phone
        this.userData.address = result.data.address
      } catch (error) {
        alert(
          "No se ha podido obtener la información del usuario"
        );

        this.$router.push('/')
      }
    },
    async update(){
        let currentUser = this.$store.state.user;
        let token = this.$store.state.token;
        const requestHeaders = {
            headers: { Authorization: "Bearer " + token },
        };

        console.info('Enviamos los datos para solicitar el registro de un nuevo usuario')

        try{
            let result = await this.axios.put('http://localhost:3000/users/'+currentUser.id, this.userData, requestHeaders)

            alert('Has actualizado tu perfil.')
            
            this.userData.password = ''
            this.$router.reload()
        }catch(error){
            alert('Se ha producido un error al registrar el usuario. Revisa los datos introducidos.')
        }
    },
    logout(){
        this.$store.dispatch('logout')

        this.$router.push("/")
    },
    async loadCurrentUserOrders() {
      let currentUser = this.$store.state.user;
      let token = this.$store.state.token;
      const requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };

      try {
        let result = await this.axios.get(
          "http://localhost:3000/orders",
          requestHeaders
        );
        
        this.userOrders = result.data
      } catch (error) {
        alert(
          "No se ha podido obtener la información de los pedidos"
        )
      }
    },
    createDateFromString(dateString){
      return new Date(dateString)
    }
  },
  mounted() {
    this.loadCurrentUserData()
    this.loadCurrentUserOrders()
  },
};
</script>

<style scoped>
.order-item-header{
  background-color: rgba(255,255,255,0.7);
  padding: 1rem;
  color: #000;
}

.order-item-header a{
  color: #000;
}

.order-total{
  background-color: rgb(255,255,255);
  padding: 0.25rem;
}

.order-total h3{
  color: #000;
  margin-bottom: 0;
}
</style>