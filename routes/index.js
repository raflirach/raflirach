const router = require('express').Router() 

const AuthController = require('../controller/auth')
const userRouter = require('./user')

router.get('/', (req, res) => {
  res.status(200).json({
    repository: 'https://github.com/raflirach/raflirach',
    documentation: 'https://github.com/raflirach/raflirach/blob/main/api_doc.md'
  })
})

router.get('/token', AuthController.getToken)

router.use('/users', userRouter)

module.exports = router