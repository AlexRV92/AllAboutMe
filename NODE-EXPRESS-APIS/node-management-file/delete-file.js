const fs = require('fs')

try {
    fs.unlinkSync("files/hola-mundo.txt")

    console.info('El fichero files/hola-mundo.txt ha sido borrado con éxito')
} catch (e) {
    if (e.code === 'ENOENT') {
        console.info('el fichero \"files/hola-mundo.txt\" no existe.')
    } else {
        console.info('Se ha producido otro error, inténtalo más tarde.')
    }
}