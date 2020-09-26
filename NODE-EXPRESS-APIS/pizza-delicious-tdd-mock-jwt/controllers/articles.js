const express = require('express')
const router = express.Router()
const UIDGenerator = require('uid-generator')
const slugify = require('slugify')
const jwt = require('jsonwebtoken')

const uidgen = new UIDGenerator()

async function onlyAdminAllowed(req, res, next) {
    let users = req.app.get('users')
    let token = req.token

    if (token === undefined) {
        return res.status(403).json({
            success: false,
            message: 'Debes estar autenticado para usar este servicio.'
        });
    }

    if (token) {
        try {
            let decodedToken = await jwt.verify(req.token, process.env.PASSPHRASE)

            //comprobar si el usuario sigue existiendo en la base datos
            let foundUser = users.find((user) => {
                return user.id === decodedToken._id && user.enabled
            })

            if (!foundUser) {
                res.status(403).json({ success: false, message: 'El usuario autenticado ya no está en el sistema' })
                return
            }

            //que su perfil es el adecuado para la acción que ha solictado
            if (decodedToken.profile !== 'ROLE_ADMIN') {
                res.status(403).json({ success: false, message: 'Debes ser administrador para poder crear elementos.' })
                return
            }

            next()

        } catch (e) {
            res.status(403).json({ status: false, message: 'No hemos podido comprobar las credenciales, autentícate nuevamente.' })
            return
        }
    }
}


/** ARTICULOS **/

function listArticles(req, res) {
    let articles = req.app.get('articles')

    res.json(articles)
}

async function createArticle(req, res) {
    let articles = req.app.get('articles')
    let generatedID = await uidgen.generate()

    let createdArticle = {
        id: generatedID,
        title: req.body.title,
        slug: slugify(req.body.title),
        content: req.body.content,
        excerpt: req.body.content.substring(0, 20) + '...',
        image: req.body.image,
        published_at: req.body.published_at,
        author: req.body.author,
        enabled: req.body.enabled
    }

    articles.push(createdArticle)
    req.app.set('articles', articles)

    res.status(201).json(createdArticle)
}

function getArticle(req, res) {
    let articles = req.app.get('articles')
    const articleId = req.params.articleId

    let foundItem = articles.find((item) => item.id === articleId)

    if (foundItem) {
        res.json(foundItem)
    }

    if (!foundItem) {
        res.status(404).json({ message: `elemento con id ${articleId} no encontrado` })
    }
}

function updateArticle(req, res) {
    let articles = req.app.get('articles')
    const articleId = req.params.articleId

    let updatedArticle = articles.find((item) => item.id === articleId)

    if (updatedArticle) {
        updatedArticle.title = req.body.title
        updatedArticle.slug = slugify(req.body.title)
        updatedArticle.content = req.body.content
        updatedArticle.excerpt = req.body.content.substring(0, 20) + '...'
        updatedArticle.published_at = req.body.published_at
        updatedArticle.image = req.body.image
        updatedArticle.author = req.body.author
        updatedArticle.enabled = req.body.enabled

        let itemPosition = articles.findIndex((item) => item.id === articleId)

        articles[itemPosition] = updatedArticle
        req.app.set('articles', articles)

        res.json(updatedArticle)
    }

    if (!updatedArticle) {
        res.status(404).json({ message: `elemento con id ${articleId} no encontrado` })
    }
}

function deleteArticle(req, res) {
    let articles = req.app.get('articles')
    const articleId = req.params.articleId

    let foundItemIndex = articles.findIndex((item) => item.id === articleId)

    if (foundItemIndex >= 0) {
        articles.splice(foundItemIndex, 1)

        req.app.set('articles', articles)

        res.status(204).json()
    }

    if (foundItemIndex === -1) {
        res.status(404).json({ message: `elemento con id ${articleId} no encontrado` })
    }
}

router.route('/')
    .get(listArticles)
    .post(onlyAdminAllowed, createArticle)

router.route('/:articleId')
    .get(getArticle)
    .put(onlyAdminAllowed, updateArticle)
    .delete(onlyAdminAllowed, deleteArticle)

module.exports = router