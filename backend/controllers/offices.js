const express = require('express')
const router = express.Router()
const Office = require('../models/offices')

const authMiddleware = require('../middlewares/permits')
const allowedForAdmins = authMiddleware(['admin'], true)
const allowedForUsersAndAdmins = authMiddleware(['user','admin'],true)

// -----------------------------------------------------

router.route('/offices')

.get( async(req, res) => { 
  let officesList = await Office.find().exec()

  res.json(officesList)
})

.post(allowedForAdmins, async(req, res) => { 

  try { 

    let officeData = { 
      address: req.body.address,
      city: req.body.city,
      capacity: req.body.capacity,
      price: req.body.price,
      images: req.body.images,
      thubnail: req.body.thubnail,
      description: req.body.description,
      services: req.body.services,
      isActive: req.body.isActive,
      notAvailableDays: req.body.notAvailableDays,
      rating: req.body.rating,
      map: req.body.map
    }
    let newOffice = await new Office(officeData).save()

    res.status(201).json(newOffice)
  } catch (error){ 
    res.status(400).json({ message: error.message})
  }
})

.delete(allowedForAdmins, async(req, res) => { 
  let search = req.params._id

  let foundOffice = await Office.findOneAndDelete(search).exec()

  if(!foundOffice){ 
    res.status(404).json({ message: 'La oficina que intentas eliminar no existe.'})
    return
  }

  res.status(204).json()
})


router.route('/offices/:id')

    .get(async(req, res) => { 

      let search = req.params.id

      /* if(req.user.profile !== 'admin' && search !== req.user.id){ 
        res.status(403).json({ message: 'Permisos insuficientes o la id que buscas es incorrecta.'})
        return
      } */

      let foundOffice = await Office.findById(search).exec()

      if(!foundOffice){ 
        res.status(404).json({ message: 'La oficina que buscas no existe.'})
        return
      }

      
      res.json(foundOffice)
    })

    .put(allowedForUsersAndAdmins, async(req, res) => { 
      
      let search = req.params.id
      let filter = { _id: search}

      if( req.user.profile !== 'admin' && search !== req.user.id){
        res.status(403).json({message: 'Permisos insuficientes'})
        return
      }

      try {   
        let foundOffice = await Office.findOneAndUpdate(filter, req.body, { new: true}).exec()

        if(!foundOffice){ 
          res.status(404).json({ message: 'El usuario que buscas no existe'})
          return
        }

        res.json(foundOffice)
      } catch (error){ 
        res.status(400).json({ message: error.message})
      }
    })


    module.exports = router