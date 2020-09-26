const mongoose = require('mongoose')

//creamos la estructura de datos (SCHEMA) que tendrá cada uno de nuestros productos
//cada documento en Mongo
//exportamos el SCHEMA para usarlo en cualquier sitio
//NUNCA trabajaremos directamente con el SCHEMA, SIEMPRE a través del modelo
module.exports = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
    enabled: { type: Boolean, default: false }
})