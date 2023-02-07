const express = require('express')
const database = require('./modules/DB')
const bearerToken = require('express-bearer-token')
const cors = require('cors')


const app = express()


const usersRoute = require('./controllers/users')
const authRoute = require('./controllers/auth')
// 
const bookingsRoute = require('./controllers/bookings')
const officesRoute = require('./controllers/offices')

app.use(express.json())
app.use(bearerToken())
app.use(cors()) 

app.use(usersRoute)
app.use(authRoute)
app.use(officesRoute)
app.use(bookingsRoute)

database.connect() // Funcion para conectar la data base
module.exports = app