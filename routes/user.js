const router = require('express').Router()

const UserController = require('../controller/user')
const authorization = require('../middlewares/auth')


router.use(authorization)
router.route('/')
  .get(UserController.showAll)
  .post(UserController.create)

router.get('/account/:accountNumber', UserController.showByAccountNumber)
router.get('/identity/:identityNumber', UserController.showByIdentityNumber)

router.route('/:id')
  .get(UserController.showOne)
  .put(UserController.edit)
  .delete(UserController.delete)

module.exports = router