const { generateToken } = require("../helpers/jwt");

class AuthController {
  static async getToken(req, res, next) {
    try {
      const payload = {
        token : 'raflirach'
      }
      const access_token = generateToken(payload)
      res.status(200).json({ access_token })
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AuthController