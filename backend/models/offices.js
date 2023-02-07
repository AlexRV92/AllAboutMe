const mongoose = require('mongoose')
const OfficeSchema = require('./schemas/office')
const OfficeModel = mongoose.model('offices', OfficeSchema)

module.exports = OfficeModel