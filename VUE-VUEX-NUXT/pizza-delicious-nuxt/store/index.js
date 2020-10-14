import jwtDecode from "jwt-decode"
import Cookies from 'js-cookie'
const cookie = require('cookie')

export const state = () => ({
    isAuth: false,
    token: null,
    user: null,
    products: []
})

export const mutations = {
    setProducts(state, payload) {
        state.products = payload
    },
    setToken(state, token) {
        state.token = token
        state.isAuth = (token !== null)
        state.user = null

        if (null !== token) {
            state.user = jwtDecode(token)
            Cookies.set('token', token)
        }

        if (null === token) {
            Cookies.remove('token')
        }
    }
}

export const actions = {
    async nuxtServerInit(context, app) {
        const req = app.req

        if (req.headers.cookie) {
            const cookieData = cookie.parse(req.headers.cookie)

            if (cookieData.hasOwnProperty('token') && cookieData.token !== '') {
                await context.dispatch('login', cookieData.token)
            } else {
                await context.dispatch('logout')
            }
        }
    },
    async loadProducts(context) {
        const url = "http://localhost:3000/products"
        const response = await this.$axios.$get(url)

        context.commit("setProducts", response)
    },
    async login(context, token = null) {
        context.commit('setToken', token)
    },
    async logout(context) {
        context.commit('setToken', null)
    }
}

export const getters = {
    featuredProducts(state) {
        return state.products.filter(item => item.featured)
    }
}