const express = require('express')

const port = process.env.PORT || 8081
const app = express()

const indexTemplate = '<h1>Página principal</h1>'
const aboutTemplate = '<h1>Página sobre nosotros</h1>'
const contactsTemplate = '<h1>Página listado de contactos</h1>'
const contactTemplate = '<h1>Página del contacto {{contactName}}</h1>'


app.get('/', (req, res) => {
    res.send(indexTemplate)
})

app.get('/about', (req, res) => {
    res.send(aboutTemplate)
})

app.get('/contacts', (req, res) => {
    res.send(contactsTemplate)
})

app.get('/contacts/:contactName', (req, res) => {
    let contactParsered = contactTemplate.replace('{{contactName}}', req.params.contactName)

    res.send(contactParsered)
})

app.listen(port, () => {
    console.info(`Server running in http://127.0.0.1:${port}`)
})