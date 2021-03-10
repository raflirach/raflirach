const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "ErrorNotFound":
      res.status(404).json({
        status: 'error',
        message: 'data not found'
      })
      break;
    case "ErrorAccessToken":
      res.status(403).json({
        status: 'error',
        message: 'invalid access_token'
      })
      break;
    case "MongoError" :
      res.status(400).json({
        status: 'error',
        message: `${Object.keys(err.keyValue)} ${Object.values(err.keyValue)} already registered`
      })
      break;
    default:
      res.status(500).json({
        status: 'error',
        error: err
      })
      break;
  }
}

module.exports = errorHandler