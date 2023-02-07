const express = require('express')
const router = express.Router()
const User = require('../models/users')

const authMiddleware = require('../middlewares/permits')
const allowedForAdmins = authMiddleware(['admin'], true)
const allowedForUsersAndAdmins = authMiddleware(['user','admin'],true)

// --------------------------------- //



router.route('/users')
  .get( allowedForAdmins, async(req, res) => { 
    let usersList = await User.find().exec()

    res.json(usersList)
  })

  .post(async(req, res) => { 

    try { 

      let userData = { 
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        profile: req.body.profile

      }
      let newUser = await new User(userData).save()

      res.status(201).json(newUser)
    } catch (error){ 
      res.status(400).json({ message: error.message})
    }
  })

  .delete(allowedForAdmins, async(req, res) => { 
    let search = req.params.email

    let foundUser = await User.findOneAndDelete(search).exec()

    if(!foundUser){ 
      res.status(404).json({ message: 'El usuario que intentas eliminar no existe.'})
      return
    }

    res.status(204).json()
  })
// -----------------------------------------------------

router.route('/users/:id')

    .get(allowedForUsersAndAdmins, async(req, res) => { 

      let search = req.params.id

      if(req.user.profile !== 'admin' && search !== req.user.id){ 
        res.status(403).json({ message: 'Permisos insuficientes o la id que buscas es incorrecta.'})
        return
      }

      let foundUser = await User.findById(search).exec()

      if(!foundUser){ 
        res.status(404).json({ message: 'El usuario que buscas no existe.'})
        return
      }

      let foundUserWithoutPassword = foundUser.toJSON()
      delete foundUserWithoutPassword.password
      res.json(foundUserWithoutPassword)
    })

    .put(allowedForUsersAndAdmins, async(req, res) => { 
      
      let search = req.params.id
      let filter = { _id: search}

      if( req.user.profile !== 'admin' && search !== req.user.id){
        res.status(403).json({message: 'Permisos insuficientes'})
        return
      }

      try { 
        
        let foundUser = await User.findOneAndUpdate(filter, req.body, { new: true}).exec()

        if(!foundUser){ 
          res.status(404).json({ message: 'El usuario que buscas no existe'})
          return
        }

        let foundUserWithoutPassword = foundUser.toJSON()
        delete foundUserWithoutPassword.password

        res.json(foundUserWithoutPassword)
      } catch (error){ 
        res.status(400).json({ message: error.message})
      }
    })

  
  module.exports = router
