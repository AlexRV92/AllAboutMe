const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema ({

  address:{type:String, required:true},
  city:{type: String, required: true},
  capacity:{type: Number, required: true},
  price:{type:Number, required:true},
  thubnail:{type: String, required: true},
  images:{type:Array, required:true, 
    default:[
              "https://picsum.photos/1024/480/?image=10",
              "https://picsum.photos/1024/480/?image=12",
              "https://picsum.photos/1024/480/?image=22"
            ]
  },
  description: { type: String, required: true},
  services: { type: Array, required: true},
  isActive: {type: Boolean, required: true, default: "true"},
  notAvailableDays: {type: Object, required: false},
  rating:{ type: Object, required: false},
  map: {type: String, required: true, default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.211593432859!2d-4.484033884368897!3d36.69345298140024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fa019aa7b689%3A0xfd38c6397a22dbe8!2sPista%20Examen%20Moto%20Trafico%20DGT!5e0!3m2!1ses!2ses!4v1603708474763!5m2!1ses!2ses"}
})

module.exports = itemSchema