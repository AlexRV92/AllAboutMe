const http = require('http')
const url = require('url')

function manageRequestServer(req, res) {
    console.info(req.url)
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" })
        res.write("Página principal")
    } else if (req.url === "/contacto") {
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" })
        res.write("Página de contacto")
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=UTF-8' });
        res.write("404, ¡Página no encontrada!");
    }

    res.end();
}

http.createServer(manageRequestServer).listen(process.env.PORT || 8080);