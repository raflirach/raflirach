const jwt = require('jsonwebtoken');

const SECRET_KEY = 'raflirach'

const generateToken = payload => jwt.sign(payload, SECRET_KEY)

const cekToken = token => jwt.verify(token, SECRET_KEY)

module.exports = {
  generateToken,
  cekToken
}