/*
Practica: montar servidor HTTP con Node:
1.- Crear un servidor Http que si no se le dice lo contrario se monte en el puerto 3000
2.- acceder mediante el navegador y comprobar que funciona
(MEDIANTE UN CONSOLE QUE SE EJECUTE CUANDO EL USUARIO HAGA UNA PETICIÓN)
3.- Probar a devolver diferentes respuestas con varias rutas en el servidor
4.- Si no es una ruta válida, mostrar un error 404
*/

const http = require('http')
const port = process.env.PORT || 3000
const allowedRoutes = ['/', '/quienes-somos', '/servicios', '/contacto', '/trabajos']

function isValidRoute(route) {
    return (allowedRoutes.indexOf(route) >= 0)
}


http.createServer((req, res) => {


    console.info('Petición recibida en el servidor', req.url)
        //esto se ejecutará cuando se levante el servidor (se esté ejecutando) y se haga una petición

    if (isValidRoute(req.url)) {
        console.info('mostrar página:', req.url)
        res.writeHead(200, { 'Content-Typ e': 'text/html;charset=UTF-8' })
        res.write(`<h1>Página ${req.url}</h1>`)
    }

    if (!isValidRoute(req.url)) {
        //página error
        console.info('mostrar error 404 (página no encontrada)')
        res.writeHead(404, { 'Content-Type': 'text/html;charset=UTF-8' })
        res.write("Página no encontrada")
    }

    res.end()
}).listen(port)
console.info(`Servidor funcionando en http://127.0.0.1:${port}`)