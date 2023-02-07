const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema ({

  title:{type:String, required:true},
  subtitle:{type:String, required: true},
  content:{type:String, required:true},
  image:{type:String, required:true},
  published_at:{ type: Date, default: Date.now}
})

module.exports = itemSchema