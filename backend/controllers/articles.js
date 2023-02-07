const express = require('express')
const router = express.Router()
const Article = require('../models/articles')

const authMiddleware = require('../middlewares/permits')
const allowedForAdmins = authMiddleware(['admin'], true)


// -----------------------------------------------------

router.route('/articles')

.get( async(req, res) => { 
  let articlesList = await Article.find().exec()

  res.json(articlesList)
})

.post(allowedForAdmins, async(req, res) => { 

  try { 

    let articleData = { 
      title: req.body.title,
      subtitle: req.body.subtitle,
      content: req.body.content,
      image: req.body.image,
      published_at: req.body.published_at,
      
    }
    let newArticle = await new Article(articleData).save()

    res.status(201).json(newArticle)
  } catch (error){ 
    res.status(400).json({ message: error.message})
  }
})

.delete(allowedForAdmins, async(req, res) => { 
  let search = req.params._id

  let foundArticle = await Article.findOneAndDelete(search).exec()

  if(!foundArticle){ 
    res.status(404).json({ message: 'La oficina que intentas eliminar no existe.'})
    return
  }

  res.status(204).json()
})


router.route('/articles/:id')

    .get(async(req, res) => { 

      let search = req.params._id

      let foundArticle = await Article.findById(search).exec()

      if(!foundArticle){ 
        res.status(404).json({ message: 'El usuario que buscas no existe.'})
        return
      }

      
      res.json(foundArticle)
    })

    .put(allowedForAdmins, async(req, res) => { 
      
      let search = req.params.id
      let filter = { _id: search}

      if( req.user.profile !== 'admin'){
        res.status(403).json({message: 'Permisos insuficientes'})
        return
      }

      try {   
        let foundArticle = await Article.findOneAndUpdate(filter, req.body, { new: true}).exec()

        if(!foundArticle){ 
          res.status(404).json({ message: 'El articulo que buscas no existe'})
          return
        }

        res.json(foundArticle)
      } catch (error){ 
        res.status(400).json({ message: error.message})
      }
    })


    module.exports = router