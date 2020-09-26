'use strict'

const express = require('express')
const app = express()


let articles = []
let products = [{
        id: '1nmPRyNTTP7B2Ga52bhzLH',
        category: 'pizza',
        title: 'Pizza carbonara XL',
        description: "Descripción de la pizza carbonara",
        image: 'https://picsum.photos/200',
        featured: true,
        enabled: true,
        price: 15.99
    },
    {
        id: '1nmPRyNTTP7B2Ga52bhzLD',
        category: 'bebidas',
        title: 'Cola light',
        description: "Descripción de la cola light",
        image: 'https://picsum.photos/200',
        featured: false,
        enabled: true,
        price: 1.66
    },
    {
        id: '1nmPRyNTTP7B2Ga52bhzLC',
        category: 'pizza',
        title: 'Pizza Hawaiana',
        description: "Descripción de la pizza hawaiana",
        image: 'https://picsum.photos/200',
        featured: false,
        enabled: true,
        price: 13.99
    }
]
let orders = [{
    id: "PetFShr5zTPeMeBECKyekt",
    products: [{
            id: "1nmPRyNTTP7B2Ga52bhzLH",
            image: "https://picsum.photos/200",
            category: "pizza",
            title: "Pizza carbonara XL",
            price: 15.99,
            quantity: 1
        },
        {
            id: "1nmPRyNTTP7B2Ga52bhzLD",
            image: "https://picsum.photos/200",
            category: "bebidas",
            title: "Cola light",
            price: 1.66
        }
    ],
    total: 22.623,
    user: {
        firstname: "Juan Manuel",
        lastname: "Castillo",
        email: "juanmanuel@flashexperience.net",
        phone: "(+34) 666 66 66 66",
        address: "C/ ejemplo 23, Sevilla, Sevilla 40011 (España)"
    },
    dated_at: "2020-09-17T08:54:57.587Z",
    status: 1,
    status_at: null
}]
let users = [{
    id: "AyKKGPSFJRVNFXQy4xQJkC",
    firstname: "Juan Manuel",
    lastname: "Castillo",
    email: "juanmanuel@flashexperience.net",
    password: "ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413",
    phone: "(+34) 666 66 66 66",
    address: "C/ ejemplo 23, Sevilla, Sevilla 40011 (España)",
    profile: "ROLE_ADMIN",
    enabled: true
}]

app.set('articles', articles)
app.set('orders', orders)
app.set('products', products)
app.set('users', users)

app.use(express.json())

app.get('/', (req, res) => {
    console.info(new Date())
    res.send('Bienvenido a la API de Pizza Delicious')
})

const articlesRoutes = require('./controllers/articles')
const productsRoutes = require('./controllers/products')
const ordersRoutes = require('./controllers/orders')
const usersRoutes = require('./controllers/users')
const authRoutes = require('./controllers/auth')


app.use('/articles', articlesRoutes)
app.use('/products', productsRoutes)
app.use('/orders', ordersRoutes)
app.use('/users', usersRoutes)
app.use('/auth', authRoutes)

module.exports = app
