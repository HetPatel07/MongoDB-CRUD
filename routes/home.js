const express = require('express')
const router = express.Router()
    // const users = require('../models/users')
const userController = require('../controller/userController')

// getHomePage
router.get('/', userController.getHome)
router.post('/add', userController.addUser)

// update get request


router.get('/update/:id', userController.getDataForUpdate)

// update  post request
router.post('/update/:id', userController.updateData)
    // delete


router.get('/delete/:id', userController.deleteData)


module.exports = router