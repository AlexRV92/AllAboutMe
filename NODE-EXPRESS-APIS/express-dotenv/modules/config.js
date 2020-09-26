const dotenv = require('dotenv')
let dotenvResult = null;

if (process.env.NODE_ENV !== 'production') {
    dotenvResult = dotenv.config()

    if (dotenvResult.error) {
        throw new Error('Error cargando parámetros de configuración a variables de entorno.')
    }
}

module.exports = process.env