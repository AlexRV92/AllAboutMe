//dependencias
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'
import jwtDecode from "jwt-decode";

//Páginas que continene mi app
import HomePage from '@/pages/HomePage'
import OrderPage from '@/pages/OrderPage'
import ErrorPage from '@/pages/ErrorPage'
import AdminPage from '@/pages/AdminPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import BlogPage from '@/pages/BlogPage'
import BlogAdmin from '@/components/admin/BlogAdmin'

// Sistema de rutas
const routes = [
    { path: "/", name: "home", component: HomePage },
    { path: "/orders", name: "orders", component: OrderPage },
    { path: "/admin", name: "admin", component: AdminPage, meta: { private: true, allowedProfiles: ['admin'] } },
    { path: "/blogadmin", name: "blogadmin", component: BlogAdmin, meta: { private: true, allowedProfiles: ['admin'] } },
    { path: "/login", name: "login", component: LoginPage },
    { path: "/register", name: "register", component: RegisterPage },
    { path: "/blog", name: "blog", component: BlogPage },
    { path: "/profile", name: "profile", component: ProfilePage, meta: { private: true, allowedProfiles: ['user'] } },
    { path: "*", name: "error", component: ErrorPage },
]

const router = new VueRouter({ routes, mode: "history" })

router.beforeEach((to, from, next) => {
        if (to.matched.some(route => route.meta.private)) {
            const isAuth = store.state.isAuth

            if (isAuth) {
                if (to.meta.hasOwnProperty('allowedProfiles')) {
                    console.info(to.meta.allowedProfiles)
                    if (!to.meta.allowedProfiles.includes(store.state.user.profile)) {
                        alert('No tienes permitida la entrada a esta ruta')
                        next('/')
                    }
                }

                next()
            } else {
                next("/login")
            }
        } else {
            next()
        }
    })
    //////////////////////////

// Vuex

Vue.use(Vuex)

const store = new Vuex.Store({
        state: {
            isAuth: false,
            token: null,
            user: null,
            products: [],
            articles: []
        },
        getters: {
            featuredProducts(state) {
                return state.products.filter(item => item.featured)
            }
        },
        mutations: {
            setProducts(state, payload) {
                state.products = payload
            },
            setArticles(state, payload) {
                state.articles = payload
            },

            setToken(state, token) {
                state.token = token
                state.isAuth = (token !== null)
                state.user = null

                if (null !== token) {
                    state.user = jwtDecode(token)
                }

                localStorage.setItem('token', token)
            }
        },
        actions: {
            async loadProducts(context) {
                const url = "http://localhost:3000/products"
                const response = await Vue.axios.get(url)

                context.commit("setProducts", response.data)
            },
            async loadArticles(context) {
                const urlArt = "http://localhost:3000/articles"
                const responseArticles = await Vue.axios.get(urlArt)

                context.commit("setArticles", responseArticles.data)
            },
            login(context, token = null) {
                context.commit('setToken', token)
            },
            logout(context) {
                context.commit('setToken', null)
            },
            checkToken(context) {
                let token = localStorage.getItem('token')

                if (token === 'null') {
                    token = null
                }

                context.commit('setToken', token)
            }
        }
    })
    ////////////

//configuramos los filtros de mi aplicación
Vue.filter('toDate', (date) => {
    let shortTime = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('en-BG', shortTime).format(date)
})

Vue.filter('toDateTime', (date) => {
    let shortTime = { year: 'numeric', month: 'short', day: 'numeric', hour };
    return new Intl.DateTimeFormat('en-BG', shortTime).format(date)
})


Vue.filter('statusLabel', (statusId) => {
    statusId--
    let statusList = ['Pendiente', 'Enviado', 'Entregrado', 'Cancelado'];

    return statusList[statusId]
})

Vue.filter("toMoney", (value) => {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value)
})

Vue.use(VueRouter)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

//creamos la instancia de VUE y la arrancamos
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
