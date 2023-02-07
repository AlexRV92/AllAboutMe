const mongoose = require('mongoose')
const Schema = mongoose.Schema


let itemSchema = new Schema ({

  /* user: {type: Schema.Types.ObjectId, ref: 'users'}, */
  name:{type: String, required: true},
  office: {type: Schema.Types.ObjectId, ref: 'offices'},
  totalprice:{type:Number, required:true},
  bookingDate:{type:Object, required:true},
})

module.exports = itemSchema

