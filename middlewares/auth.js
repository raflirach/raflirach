const { cekToken } = require("../helpers/jwt")

const authorization = async (req,res,next) => {
  try {
    const token = req.headers.access_token
    if(!token) throw {name: 'ErrorAccessToken'}
    const decode = cekToken(token)
    if(decode.token === 'raflirach') {
      next()
    } else {
      throw {name: 'ErrorAccessToken'}
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authorization