<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <span class="flaticon-pizza-1 mr-1"></span>Pizza<br />
        <small>Delicious</small>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="(item,index) in menu" :key="index">
            <router-link :to="item.path" class="nav-link">
				{{item.title}}
			</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
    };
  },
  computed: {
    menu(){
      let menuItems = [
		  {title: "Home", path: "/"},
		  {title: "Pedidos", path: "/orders"},
		  {title: "Blog", path: "/"},
      {title: "Contacto", path: "/"}
    ]

    if(this.$store.state.isAuth && this.$store.state.user.profile === 'admin'){
      menuItems.push({title: "Admin", path: "/admin"})
    }

    if(this.$store.state.isAuth && this.$store.state.user.profile === 'user'){
      menuItems.push({title: "Mi cuenta", path: "/profile"})
    }

    if(!this.$store.state.isAuth){
      menuItems.push({title: "Identifícate", path: "/login"})
    }

    return menuItems
    }
  }
};
</script>
