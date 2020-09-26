const express = require('express')
const fs = require('fs')
const memCacheMiddleware = require('./modules/mem-cache.js')
const incrementVisitsMiddleware = require('./modules/visits')

const app = express()
const serverPort = process.env.PORT || 8080

app.set('visitCount', 0)

try {
    let currentVisits = parseInt(fs.readFileSync('stats/visits.txt', 'utf8'));
    app.set('visitCount', currentVisits)
} catch (e) {
    console.info('old visit file not found. Counting form 0')
}

const indexTemplate = fs.readFileSync('templates/index.html', 'utf8')
const genericTemplate = fs.readFileSync('templates/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('templates/elements.html', 'utf8')
const errorTemplate = fs.readFileSync('templates/error-404.html', 'utf8')
const statsTemplate = fs.readFileSync('templates/stats.html', 'utf8')

//configuro el middleware y lo uso donde necesite (siempre tiene la misma configuración)
let memCacheMiddlewareConfigured = memCacheMiddleware(10000)

app.get('/', incrementVisitsMiddleware, memCacheMiddlewareConfigured, (req, res) => {
    res.send(indexTemplate)
})

app.get('/index', (req, res) => {
    res.redirect('/')
})

app.get('/generic', incrementVisitsMiddleware, memCacheMiddlewareConfigured, (req, res) => {
    res.send(genericTemplate)
})

app.get('/elements', incrementVisitsMiddleware, memCacheMiddleware(30000), (req, res) => {
    res.send(elementsTemplate)
})

app.get('/stats', (req, res) => {
    let currentVisits = app.get('visitCount')

    let parseredStatsTemplate = statsTemplate.replace("{{totalVisits}}", currentVisits).replace("{{totalVisitsDouble}}", currentVisits * 2);
    res.send(parseredStatsTemplate)
})


app.listen(serverPort, () => {
    console.info(`Running http server on http://localhost:${serverPort}`)
})