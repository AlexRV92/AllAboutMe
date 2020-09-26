const express = require('express')
const memcache = require('memory-cache')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    setTimeout(() => {
        let now = new Date()

        res.send(`Aquí está mi respuesta estando a: ${now}`)
    }, 5000)
})

app.get('/contacto', (req, res) => {
    let contactCache = memcache.get('contacto')

    if (!contactCache) {
        //procesar la respuesta normalmente
        setTimeout(() => {
            let now = new Date()
            let resultHTML = `CONTACTO estando a: ${now}`

            memcache.put('contacto', resultHTML, 5000)
            res.send(resultHTML)
        }, 3000)
    }

    if (contactCache) {
        //devolver la respuesta cacheada
        res.send(contactCache)
    }
})

app.listen(port, () => {
    console.info(`Servidor corriendo en http://localhost:${port}`)
})