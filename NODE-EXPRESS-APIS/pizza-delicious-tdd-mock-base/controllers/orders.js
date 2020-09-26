const express = require('express')
const router = express.Router()
const UIDGenerator = require('uid-generator')
const uidgen = new UIDGenerator()

/** PEDIDOS **/

function listOrders(req, res) {
    let orders = req.app.get('orders')

    res.json(orders)
}

async function createOrder(req, res) {
    let orders = req.app.get('orders')
    let generatedID = await uidgen.generate()

    let createdOrder = {
        id: generatedID,
        products: getRequestProducts(req),
        total: req.body.total,
        user: {
            firstname: req.body.user.firstname,
            lastname: req.body.user.lastname,
            email: req.body.user.email,
            phone: req.body.user.phone,
            address: req.body.user.address
        },
        dated_at: new Date(),
        status: 1,
        status_at: null
    }

    orders.push(createdOrder)
    req.app.set('orders', orders)

    res.status(201).json(createdOrder)
}

function getRequestProducts(req) {
    let productList = []

    for (let i = 0; i < req.body.products.length; i++) {
        const productItem = req.body.products[i]

        productList.push({
            id: productItem.id,
            image: productItem.image,
            category: productItem.category,
            title: productItem.title,
            price: productItem.price,
            quantity: productItem.quantity,
        })
    }

    return productList
}

function getOrder(req, res) {
    let orders = req.app.get('orders')
    const orderId = req.params.orderId

    let foundItem = orders.find((item) => item.id === orderId)

    if (foundItem) {
        res.json(foundItem)
    }

    if (!foundItem) {
        res.status(404).json({ message: `elemento con id ${orderId} no encontrado` })
    }
}

function updateOrder(req, res) {
    let orders = req.app.get('orders')
    const orderId = req.params.orderId

    let updatedOrder = orders.find((item) => item.id === orderId)

    if (updatedOrder) {
        updatedOrder.total = req.body.total
        updatedOrder.products = getRequestProducts(req)
        updatedOrder.user.firstname = req.body.user.firstname
        updatedOrder.user.lastname = req.body.user.lastname
        updatedOrder.user.email = req.body.user.email
        updatedOrder.user.phone = req.body.user.phone
        updatedOrder.user.address = req.body.user.address
        updatedOrder.status = req.body.status
        updatedOrder.status_at = req.body.status_at

        let itemPosition = orders.findIndex((item) => item.id === orderId)

        orders[itemPosition] = updatedOrder
        req.app.set('orders', orders)

        res.json(updatedOrder)
    }

    if (!updatedOrder) {
        res.status(404).json({ message: `elemento con id ${orderId} no encontrado` })
    }
}

function updateOrderStatus(req, res) {
    let orders = req.app.get('orders')
    const orderId = req.params.orderId

    let updatedOrder = orders.find((item) => item.id === orderId)

    if (updatedOrder) {
        updatedOrder.status = req.body.status
        updatedOrder.status_at = new Date()

        let itemPosition = orders.findIndex((item) => item.id === orderId)

        orders[itemPosition] = updatedOrder
        req.app.set('orders', orders)

        res.json(updatedOrder)
    }

    if (!updatedOrder) {
        res.status(404).json({ message: `elemento con id ${orderId} no encontrado` })
    }
}

function deleteOrder(req, res) {
    let orders = req.app.get('orders')
    const orderId = req.params.orderId

    let foundItemIndex = orders.findIndex((item) => item.id === orderId)

    if (foundItemIndex >= 0) {
        orders.splice(foundItemIndex, 1)

        req.app.set('orders', orders)

        res.status(204).json()
    }

    if (foundItemIndex === -1) {
        res.status(404).json({ message: `elemento con id ${orderId} no encontrado` })
    }
}

router.route('/')
    .get(listOrders)
    .post(createOrder)


router.route('/:orderId')
    .get(getOrder)
    .put(updateOrder)
    .delete(deleteOrder)

router.route('/:orderId/states')
    .put(updateOrderStatus)

module.exports = router
