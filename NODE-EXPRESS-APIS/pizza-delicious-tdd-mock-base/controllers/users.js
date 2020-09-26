const express = require('express')
const router = express.Router()
const UIDGenerator = require('uid-generator')
const sha512 = require('js-sha512').sha512

const uidgen = new UIDGenerator()

/** USERS **/

function listUsers(req, res) {
    let users = req.app.get('users')

    users = users.map((item) => {
        let clonedItem = {...item }

        delete clonedItem.password

        return clonedItem
    })

    res.json(users)
}

async function createUser(req, res) {
    let users = req.app.get('users')
    let generatedID = await uidgen.generate()

    let foundUser = users.find((user) => user.email === req.body.email)

    if (foundUser) {
        res.status(409).json({ 'message': 'El email ya existe en la base de datos' })
    }

    if (!foundUser) {
        let createdUser = {
            id: generatedID,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: sha512(req.body.password),
            phone: req.body.phone,
            address: req.body.address,
            profile: 'ROLE_USER',
            enabled: true
        }

        users.push(createdUser)
        req.app.set('users', users)

        let clonedItem = {...createdUser }
        delete clonedItem.password

        res.status(201).json(clonedItem)
    }
}

function getUser(req, res) {
    let users = req.app.get('users')
    const userId = req.params.userId

    let foundItem = users.find((item) => item.id === userId)

    if (foundItem) {

        let clonedItem = {...foundItem }

        delete clonedItem.password

        res.json(clonedItem)
    }

    if (!foundItem) {
        res.status(404).json({ message: `elemento con id ${userId} no encontrado` })
    }
}

function updateUser(req, res) {
    let users = req.app.get('users')
    const userId = req.params.userId

    let updatedUser = users.find((item) => item.id === userId)

    if (updatedUser) {
        updatedUser.firstname = req.body.firstname
        updatedUser.lastname = req.body.lastname
        updatedUser.email = req.body.email
        if (req.body.hasOwnProperty('password')) {
            updatedUser.password = sha512(req.body.password)
        }
        updatedUser.phone = req.body.phone
        if (req.body.hasOwnProperty('address')) {
            updatedUser.address = req.body.address
        }
        if (req.body.hasOwnProperty('enabled')) {
            updatedUser.enabled = req.body.enabled
        }

        let itemPosition = users.findIndex((item) => item.id === userId)

        users[itemPosition] = updatedUser
        req.app.set('users', users)

        let clonedItem = {...updatedUser }
        delete clonedItem.password

        res.json(clonedItem)
    }

    if (!updatedUser) {
        res.status(404).json({ message: `elemento con id ${userId} no encontrado` })
    }
}

function deleteUser(req, res) {

    let users = req.app.get('users')
    const userId = req.params.userId

    let foundItemIndex = users.findIndex((item) => item.id === userId)

    if (foundItemIndex >= 0) {
        users.splice(foundItemIndex, 1)

        req.app.set('users', users)

        res.status(204).json()
    }

    if (foundItemIndex === -1) {
        res.status(404).json({ message: `elemento con id ${userId} no encontrado` })
    }
}

router.route('/')
    .get(listUsers)
    .post(createUser)


router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router
