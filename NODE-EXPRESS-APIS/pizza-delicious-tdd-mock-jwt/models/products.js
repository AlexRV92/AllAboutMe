const mongoose = require('mongoose')
const ProductSchema = require('./schemas/product-schema')

//creamos y exportamos el modelo para poder operar con los productos
module.exports = mongoose.model('products', ProductSchema);