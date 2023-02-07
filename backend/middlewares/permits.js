const jwt = require('jsonwebtoken')
const config = require('../modules/config')
const defaultUser = "user"


function verifyUser( permitedTypes, authRequired = true){ 
  return async(req, res, next) => { 

    req.user = null

    if(!authRequired && !req.token){ 
      next()
      return

    }

    if(!req.token){
      res.status(401).json({ message: "Necesitas estar logueado (FALTA TOKEN)"})
      return
    }

    try { 
      let tokenData = await jwt.verify(req.token, config.APP_SECRET)
      console.log(tokenData)

      let userAccount = tokenData.profile || defaultUser 

      if(!isPermitted(userAccount, permitedTypes)){ 
        res.status(403).json({message: "No tienes permisos. Estas en el middleware"})
        return
      }

      req.user = tokenData 
      next()

    } catch(error){ 
      res.status(401).json({message: "Sesión cerrada"})
      return
    }
  }
}


function isPermitted(current, alloweds){ 
  if (typeof alloweds === 'string'){ 
    alloweds = [alloweds]
  }

  return (alloweds.indexOf(current) !== -1) ? true : false
}


module.exports = verifyUser