const https = require('https')
const fs = require('fs')
const port = process.env.PORT || 8080

const sslOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}

https.createServer(sslOptions, (req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    res.write('¡Hola mundo!')
    res.end()

}).listen(port)
console.info(`Servidor funcionando en: https://127.0.0.1:${port}`);