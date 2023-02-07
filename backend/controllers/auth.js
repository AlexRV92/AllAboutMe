const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/users')
const config = require('../modules/config')




router.route('/auth/login')
  .post(async (req, res) => {

  

    let userToFind = {
      
         email: req.body.email ,
         password: req.body.password ,
      
    }

    let foundUser = await User.findOne(userToFind).exec()

    if (!foundUser) {
      res.status(401).json({ message: 'Usuario o contraseña incorrectos.' })
      return
    }

    let jwtPayload = {
      id: foundUser._id,
      name: foundUser.name,
      surname: foundUser.surname,
      phone: foundUser.phone,
      email: foundUser.email,
      profile: foundUser.profile,
      active: foundUser.active
    }

    let newToken = await jwt.sign(jwtPayload, config.APP_SECRET)

    if (!newToken) {
      res.status(500).json({ message: 'El servicio no esta disponible actualmente. Inténtelo más tarde.' })

      return
    }

    res.json({

      token: newToken

    })

  })


module.exports = router