const mongoose = require('mongoose')
const config = require('./config')

class Database { 

  constructor(){ 
    this.db = null
  }

  async connect () { 

    this.db = mongoose.connection

    try { 

      await mongoose.connect(config.DB, { useFindAndModify:false, useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true})

      console.info("Se ha producido la conexión a mongodb")
    } catch(error){ 

      console.info("Error en la conexión a la base de datos")
      console.error(error)
    }
  }
}

module.exports = new Database()
