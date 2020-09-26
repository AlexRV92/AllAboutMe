const dotenv = require('dotenv')
const express = require('express')

const app = express()

if (process.env.NODE_ENV !== 'production') {
    let myEnvVars = dotenv.config()
}

const allowedLanguages = process.env.ALLOWED_LANGUAGES.split(",")
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    console.info("gestión de la ruta principal")
    let resultMsg = process.env.MESSAGE || 'variable de entorno no encontrada'

    res.send(resultMsg)
})


app.listen(port, () => {
    console.info(`Server running in http://localhost:${port}`)
})



/*
4.- El mensaje a devolver en la ruta / debe ser configurable desde aquí.
5.- Cambia la configuración y realiza pruebas
*/
