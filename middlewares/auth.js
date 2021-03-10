const { cekToken } = require("../helpers/jwt")

const authorization = async (req,res,next) => {
  try {
    const token = req.headers.access_token
    if(!token) next({name: 'ErrorAccessToken'})
    const decode = cekToken(token)
    if(decode.token === 'raflirach') {
      next()
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = authorization