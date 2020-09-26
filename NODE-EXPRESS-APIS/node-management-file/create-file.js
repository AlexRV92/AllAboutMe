const fs = require('fs')

try {
    fs.writeFileSync("files/hola-mundo.txt", "¡Hola mundo!")

    console.info('El fichero files/hola-mundo.txt ha sido creado')
} catch (e) {
    if (e.code === 'ENOENT') {
        console.info('Debes crear el directorio \"files\"')
    } else {
        console.info('Se ha producido otro error, inténtalo más tarde.')
    }
}