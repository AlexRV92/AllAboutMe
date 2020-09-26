const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = process.env.PORT || 8080

const nunjucksENV = nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', (req, res) => {
    res.render()
    console.info('-- hola desde la pagina principal')
})

app.get('/index', (req, res) => {
    res.redirect('/')
})

app.get('/generic', (req, res) => {
    res.redirect('/')
})

app.get('/elements', (req, res) => {
    res.redirect('/')
})


app.listen(port, function() {
    console.log(`Servidor activo en http://localhost:${port}`)
})