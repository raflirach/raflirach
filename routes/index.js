const AuthController = require('../controller/auth')
const UserController = require('../controller/user')
const authorization = require('../middlewares/auth')

const router = require('express').Router()

router.get('/token', AuthController.getToken)

router.use(authorization)
router.get('/users', UserController.showAll)
router.post('/users', UserController.create)

module.exports = router