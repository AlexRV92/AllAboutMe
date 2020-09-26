const fs = require('fs')

try {
    fs.appendFileSync("files/hola-mundo.txt", "\n¡Hola mundo!")

    console.info('El fichero files/hola-mundo.txt ha sido editado')
} catch (e) {
    if (e.code === 'ENOENT') {
        console.info('Debes crear el directorio \"files\"')
    } else {
        console.info('Se ha producido otro error, inténtalo más tarde.')
    }
}