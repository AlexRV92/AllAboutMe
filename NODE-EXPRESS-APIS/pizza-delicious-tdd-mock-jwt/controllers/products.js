const express = require('express')
const router = express.Router()

//importo el modelo de productos para trabajar sobre él
const Product = require('../models/products')

/** PRODUCTOS **/

async function listProducts(req, res) {

    let filters = {}

    if (req.query.hasOwnProperty('filter') && req.query.filter.hasOwnProperty('featured')) {
        filters.featured = Boolean(parseInt(req.query.filter.featured))
    }

    if (req.query.hasOwnProperty('filter') && req.query.filter.hasOwnProperty('category')) {
        filters.category = req.query.filter.category
    }

    let productList = await Product.find(filters).exec()

    res.json(productList)
}

async function createProduct(req, res) {

    let createdProduct = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        featured: req.body.featured,
        enabled: req.body.enabled
    }

    try {
        let item = await new Product(createdProduct).save()

        res.status(201).json(item)
    } catch (e) {
        console.info(err)
        res.status(400).json({ message: 'No se puede crear el elemento' })
    }

}

async function getProduct(req, res) {
    const productId = req.params.productId

    try {
        let foundItem = await Product.findById(productId).exec()

        if (!foundItem) {
            res.status(404).json({ message: `elemento con id ${productId} no encontrado` })
        }

        if (foundItem) {
            res.json(foundItem)
        }

    } catch (e) {
        console.info(e)
        res.status(500).json({ message: 'Se ha producido un error al intentar obtener el elemento' })
    }
}

async function updateProduct(req, res) {
    const productId = req.params.productId

    let updatedFields = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        featured: req.body.featured,
        enabled: req.body.enabled
    }

    let updatedItem = await Product.findOneAndUpdate({ _id: productId }, updatedFields).exec()

    if (!updatedItem) {
        res.status(404).json({ message: `elemento con id ${productId} no encontrado` })
    }

    if (updatedItem) {
        res.json(updatedItem)
    }
}

async function deleteProduct(req, res) {
    const productId = req.params.productId

    let deletedItem = await Product.findOneAndDelete({ _id: productId }).exec()

    if (!deletedItem) {
        res.status(404).json({ message: `elemento con id ${productId} no encontrado` })
    }

    if (deletedItem) {
        res.status(204).json()
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