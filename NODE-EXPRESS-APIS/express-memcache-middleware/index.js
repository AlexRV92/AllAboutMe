const express = require('express')
const dotenv = require('dotenv')
const memcacheMiddleware = require('./middlewares/mem-cache.js')


if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const app = express()
const port = process.env.PORT || 3000
const timeLeftCache = parseInt(process.env.TIME_LEFT_CACHE) || 10000

//app.use(memcacheMiddleware(timeLeftCache))

app.get('/', memcacheMiddleware(timeLeftCache, process.env.NODE_ENV), (req, res) => {

    console.info('Middlware de procesado de respuesta ejecutado')
    setTimeout(() => {
        let now = new Date()
        console.info('@@ setTimeout 5000 ejecutado @@')
        res.send('(HOME) Hola desde el servidor a fecha/hora de ' + now)
    }, 5000)
})

app.get('/contacto', memcacheMiddleware(10000, process.env.NODE_ENV), (req, res) => {

    console.info('Middlware de procesado de respuesta ejecutado')
    setTimeout(() => {
        let now = new Date()

        res.send('(CONTACTO) Hola desde el servidor a fecha/hora de ' + now)
    }, 8000)
})

app.get('/admin', (req, res) => {

    console.info('Middlware de procesado de respuesta ejecutado')
    setTimeout(() => {
        let now = new Date()

        res.send('(ADMIN) Hola desde el servidor a fecha/hora de ' + now)
    }, 8000)
})

app.listen(port, () => {
    console.info(`Servidor corriendo en http://localhost:${port}`)
})
