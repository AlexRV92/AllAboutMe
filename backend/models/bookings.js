const mongoose = require('mongoose')
const BookingSchema = require('./schemas/booking')
const BookingModel = mongoose.model('bookings', BookingSchema)

module.exports = BookingModel