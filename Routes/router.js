const express = require('express')

const userController = require('../Controllers/userController')

const dataController = require('../Controllers/dataController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')





const router = new express.Router()


router.post('/register',userController.register)

router.post('/login',userController.login)

router.post('/logout', jwtMiddleware, userController.logout); 

router.post('/data/add',jwtMiddleware,dataController.addData)

router.post('/reset',jwtMiddleware, userController.resetPassword);







module.exports = router