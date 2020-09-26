const express = require('express')
const router = express.Router()
const sha512 = require('js-sha512').sha512

/** AUTH **/


function loginUser(req, res) {
    let users = req.app.get('users')

    console.info(req.body)

    let foundUser = users.find((user) => {
        return user.email === req.body.email && user.password === sha512(req.body.password) && user.enabled
    })

    console.info(foundUser)

    if (foundUser) {
        res.json({ message: 'Todo correcto!!!!! más cuando lleguemos a la parte de autenticación' })
    }

    if (!foundUser) {
        //error
        res.status(401).json({ message: 'Usuario y/o contraseña no son correctos' })
    }

    res.json()
}


router.route('/login')
    .post(loginUser)

module.exports = router
