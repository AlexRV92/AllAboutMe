const express = require('express')

const port = process.env.PORT || 8081
const app = express()

app.get('/dni/:dni', (req, res) => {

    if (isNaN(req.params.dni)) {
        console.info('El dni recibido no es un dni válido')
        res.send('El dni introducido no es válido')
    } else {
        let nif = getDNILetter(req.params.dni)

        res.send(nif)
    }
})

app.listen(port, () => {
    console.info(`Server running in http://127.0.0.1:${port}`)
})

function getDNILetter(dni) {
    let cadena = 'TRWAGMYFPDXBNJZSQVHLCKET'
    let posicion = dni % 23
    letra = cadena.substring(posicion, posicion + 1)

    return dni + letra
}