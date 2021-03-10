const express = require('express')
const { connect } = require('./config/mongodb')
const app = express()
const PORT = process.env.PORT || 4001


connect().then(() => {
  const router = require('./routes')
  const errorHandler = require('./middlewares/errorHandler')

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  app.use('/', router)
  app.use(errorHandler)
  app.listen(PORT, () => {
    console.log(`App listen to port : ${PORT}`);
  })
})