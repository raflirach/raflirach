const AuthController = require('../controller/auth')
const UserController = require('../controller/user')
const authorization = require('../middlewares/auth')

const router = require('express').Router()

router.get('/token', AuthController.getToken)

router.use(authorization)
router.route('/users')
  .get(UserController.showAll)
  .post(UserController.create)

router.get('/users/account/:accountNumber', UserController.showByAccountNumber)
router.get('/users/identity/:identityNumber', UserController.showByIdentityNumber)

router.route('/users/:id')
  .get(UserController.showOne)
  .put(UserController.edit)
  .delete(UserController.delete)

module.exports = router