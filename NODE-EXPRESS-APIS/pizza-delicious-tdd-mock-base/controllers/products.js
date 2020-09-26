const express = require('express')
const router = express.Router()
const UIDGenerator = require('uid-generator')
const uidgen = new UIDGenerator()

/** PRODUCTOS **/

function listProducts(req, res) {
    let products = req.app.get('products')
    let productList = products

    if (req.query.hasOwnProperty('filter') && req.query.filter.hasOwnProperty('featured')) {
        productList = productList.filter((product) => product.featured === Boolean(parseInt(req.query.filter.featured)))
    }

    if (req.query.hasOwnProperty('filter') && req.query.filter.hasOwnProperty('category')) {
        productList = productList.filter((product) => product.category === req.query.filter.category)
    }

    res.json(productList)
}

async function createProduct(req, res) {
    let products = req.app.get('products')
    let generatedID = await uidgen.generate()

    let createdProduct = {
        id: generatedID,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        featured: req.body.featured,
        enabled: req.body.enabled
    }

    products.push(createdProduct)
    req.app.set('products', products)

    res.status(201).json(createdProduct)
}

function getProduct(req, res) {
    let products = req.app.get('products')
    const productId = req.params.productId

    let foundItem = products.find((item) => item.id === productId)

    if (foundItem) {
        res.json(foundItem)
    }

    if (!foundItem) {
        res.status(404).json({ message: `elemento con id ${productId} no encontrado` })
    }
}

function updateProduct(req, res) {
    let products = req.app.get('products')
    const productId = req.params.productId

    let updatedProduct = products.find((item) => item.id === productId)

    if (updatedProduct) {
        updatedProduct.title = req.body.title
        updatedProduct.description = req.body.description
        updatedProduct.category = req.body.category
        updatedProduct.image = req.body.image
        updatedProduct.price = req.body.price
        updatedProduct.featured = req.body.featured
        updatedProduct.enabled = req.body.enabled

        let itemPosition = products.findIndex((item) => item.id === productId)

        products[itemPosition] = updatedProduct
        req.app.set('products', products)

        res.json(updatedProduct)
    }

    if (!updatedProduct) {
        res.status(404).json({ message: `elemento con id ${productId} no encontrado` })
    }
}

function deleteProduct(req, res) {
    let products = req.app.get('products')
    const productId = req.params.productId

    let foundItemIndex = products.findIndex((item) => item.id === productId)

    if (foundItemIndex >= 0) {
        products.splice(foundItemIndex, 1)
        req.app.set('products', products)

        res.status(204).json()
    }

    if (foundItemIndex === -1) {
        res.status(404).json({ message: `elemento con id ${productId} no encontrado` })
    }
}

router.route('/')
    .get(listProducts)
    .post(createProduct)

router.route('/:productId')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router
