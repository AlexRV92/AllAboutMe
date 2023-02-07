const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema ({

  name:{type:String, required:true},
  surname:{type:String, required:true},
  phone:{type:String, required:true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  profile: {type: String, default: "user"}
})

module.exports = itemSchema