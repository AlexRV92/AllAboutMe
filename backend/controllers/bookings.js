const express = require('express')
const router = express.Router()
const Booking = require('../models/bookings')

const authMiddleware = require('../middlewares/permits')
const allowedForAdmins = authMiddleware(['admin'], true)
const allowedForUsersAndAdmins = authMiddleware(['user','admin'],true)

// -----------------------------------------------------

router.route('/bookings')

.get(/*  allowedForAdmins,  */async(req, res) => { 

  
  let BookingList = await Booking.find().
  populate('user').populate('office').exec()

  res.json(BookingList)
})

.post(allowedForUsersAndAdmins, async(req, res) => { 

  try { 

    let bookingData = { 
      user: req.body.user,
      office: req.body.office,
      totalprice: req.body.totalprice,
      bookingDate: req.body.bookingDate,
      
    }
    let newBooking = await new Booking(bookingData).save()

    res.status(201).json(newBooking)
  } catch (error){ 
    res.status(400).json({ message: error.message})
  }
})


router.route('/bookings/:id')

    .get(async(req, res) => { 

      let search = req.params._id

      /* if(req.user.profile !== 'admin' && search !== req.user.id){ 
        res.status(403).json({ message: 'Permisos insuficientes o la id que buscas es incorrecta.'})
        return
      } */

      let foundBooking = await Booking.findById(search).exec()

      if(!foundBooking){ 
        res.status(404).json({ message: 'La reserva que buscas no existe.'})
        return
      }

      
      res.json(foundBooking)
    })

    .delete(allowedForUsersAndAdmins, async(req, res) => { 
      
      let search = req.params.id
      let filter = { _id: search}

      if( req.user.profile !== 'admin' && search !== req.user.id){
        res.status(403).json({message: 'Permisos insuficientes'})
        return
      }

      try {   
        let foundBooking = await Booking.findOneAndDelete(filter).exec()

        if(!foundBooking){ 
          res.status(404).json({ message: 'La reserva que buscas no existe'})
          return
        }

        res.json(foundBooking)

      } catch (error){ 
        res.status(400).json({ message: error.message})
      }
    })


    module.exports = router