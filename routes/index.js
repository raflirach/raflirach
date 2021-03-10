const router = require('express').Router() 

const AuthController = require('../controller/auth')
const userRouter = require('./user')

router.get('/token', AuthController.getToken)

router.use('/users', userRouter)

module.exports = router