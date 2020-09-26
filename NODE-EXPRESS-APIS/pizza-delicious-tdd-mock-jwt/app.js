//modo estricto JS
'use strict'

//nos traemos los módulos
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressBearerToken = require('express-bearer-token')

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')

    dotenv.config()
}

//Creamos variables globales para almacenar la información (DEPRECATED!!!)
let articles = []
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
    password: "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
    phone: "(+34) 666 66 66 66",
    address: "C/ ejemplo 23, Sevilla, Sevilla 40011 (España)",
    profile: "ROLE_ADMIN",
    enabled: true
}]

//Guardamos como variables GLOBALES para almacenar la información (DEPRECATED!!!)
app.set('articles', articles)
app.set('orders', orders)
app.set('users', users)

//enganchamos de forma GLOBAL el middleware JSON (parsea el cuerpo JSON válido de las peticiones a un objeto JS)
app.use(express.json())

//enganchamos de forma GLOBAL el middleware EXPRESS BEARE TOKEN (coge el token bearer de la cabecera Authorization y lo pone en la petición: req)
app.use(expressBearerToken())


//ruta principal (para que aparezca algo)
app.get('/', (req, res) => {
    console.info(new Date())
    res.send('Bienvenido a la API de Pizza Delicious')
})

//nos traemos los controladores desde sus respectivos ficheros
const articlesRoutes = require('./controllers/articles')
const productsRoutes = require('./controllers/products')
const ordersRoutes = require('./controllers/orders')
const usersRoutes = require('./controllers/users')
const authRoutes = require('./controllers/auth')


//enganchamos los diferentes controladores y configuramos un prefijo para sus rutas
app.use('/articles', articlesRoutes)
app.use('/products', productsRoutes)
app.use('/orders', ordersRoutes)
app.use('/users', usersRoutes)
app.use('/auth', authRoutes)


//función que conecta con la base de datos en MONGO ATLAS
async function connectToDatabase() {
    try {
        //recibe la cadena SRV (obtenida de MONGO ATLAS) y las opciones de configuración
        //si no se puede conectar lo captura el catch
        //hemos ejecutado la función de manera síncrona (es un requisito indispensable para mi aplicación antes de ejecutarse)
        await mongoose.connect('mongodb+srv://pizzadelicioususer:p0cbGogyPMx7QybY@pizza-delicious.efb7q.mongodb.net/pizza-delicious?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

        console.info('Conectado a la base de datos')
    } catch (e) {
        console.error('error conectando a la base de datos')
    }
}

connectToDatabase()

module.exports = app