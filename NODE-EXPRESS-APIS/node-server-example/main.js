const http = require('http')
const port = process.env.PORT || 8080

function manageServerRequest(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    res.write('<html><head><title>HOLA MUNDO DESDE NODE</title></head><body><h1>HOLA MUNDO</h1></body></html>')
    res.end();

}

http.createServer(manageServerRequest).listen(port)
console.info(`Servidor funcionando en: http://127.0.0.1:${port}`);