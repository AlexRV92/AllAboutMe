const fs = require('fs')

try {
    let data = fs.readFileSync("files/hola-mundo.txt", "utf8")

    console.log(data)
} catch (e) {
    if (e.code === 'ENOENT') {
        console.info('Debes crear el directorio \"files\" y/o el fichero \"hola-mundo.txt\"')
    } else {
        console.info('Se ha producido otro error, inténtalo más tarde.')
    }
}