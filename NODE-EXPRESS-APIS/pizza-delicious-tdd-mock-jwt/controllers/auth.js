const express = require('express')
const router = express.Router()
const sha512 = require('js-sha512').sha512
const md5 = require('md5')
const jwt = require('jsonwebtoken')

/** AUTH **/


function loginUser(req, res) {
    let users = req.app.get('users')

    console.info(req.body)

    let foundUser = users.find((user) => {
        return user.email === req.body.email && user.password === sha512(req.body.password) && user.enabled
    })

    console.info(foundUser)

    if (foundUser) {

        //1. generamos el payload del token
        let payload = {
            _id: foundUser.id,
            profile: foundUser.profile,
            firstname: foundUser.firstname,
            lastname: foundUser.lastname,
            avatar: 'https://www.gravatar.com/avatar/' + md5(foundUser.email)
        }

        //2. generamos el token
        let token = jwt.sign(payload, process.env.PASSPHRASE, {
            expiresIn: process.env.JWT_EXP_TIME_IN_DAYS
        })
        console.info(token)

        //3. devolvemos el token
        res.json({ token: token })
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