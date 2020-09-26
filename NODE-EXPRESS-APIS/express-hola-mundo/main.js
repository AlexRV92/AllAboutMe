const https = require('https')
const fs = require('fs')
const express = require('express')

const port = process.env.PORT || 8081
const app = express()

const sslOptions = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
}

app.get('/', (req, res) => {
    res.json({ message: "Hola mundo" })
})

app.get('/contact', (req, res) => {
    res.json({ message: "Hola mundo desde contact" })
})

/*
app.listen(port, () => {
    console.info(`Server running in http://127.0.0.1:${port}`)
})*/

https.createServer(sslOptions, app).listen(port)
console.info(`Server running in https://127.0.0.1:${port}`)