const express = require('express')
const router = express.Router()
const UIDGenerator = require('uid-generator')
const slugify = require('slugify')

const uidgen = new UIDGenerator()

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
    .post(createArticle)

router.route('/:articleId')
    .get(getArticle)
    .put(updateArticle)
    .delete(deleteArticle)

module.exports = router
