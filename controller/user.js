const User = require('../models/user')
const { ObjectID } = require('mongodb')

class UserController {
  static async showAll(req, res, next) {
    try {
      const users = await User.findAll()
      res.status(200).json(users)
    } catch (err) {
      console.log(err);
    }
  }

  static async showByAccountNumber(req, res, next) {
    try {
      const { accountNumber } = req.params
      const user = await User.findOne({ accountNumber })
      if(user) res.status(200).json(user)
      else throw {name: 'ErrorNotFound'}
    } catch (err) {
      console.log(err);
    }
  }

  static async showByIdentityNumber(req, res, next) {
    try {
      const { identityNumber } = req.params
      const user = await User.findOne({ identityNumber })
      if(user) res.status(200).json(user)
      else throw {name: 'ErrorNotFound'}
    } catch (err) {
      console.log(err);
    }
  }

  static async create(req, res, next) {
    try {
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      console.log(req.body);
      const user = await User.create({ 
        userName, 
        accountNumber, 
        emailAddress, 
        identityNumber 
      })
      console.log(user);
      res.status(201).json(user.ops[0])
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

module.exports = UserController