const User = require('../models/user')
const { ObjectID } = require('mongodb');
const isValidId = require('../helpers/isValidId');
const redis = require('../helpers/redis');

class UserController {
  static async showAll(req, res, next) {
    try {
      const dataUser = await redis.get('data:users')
      if(dataUser) return res.status(200).json(JSON.parse(dataUser))
      else {
        const users = await User.findAll()
        redis.set('data:users', JSON.stringify(users))
        return res.status(200).json(users)
      }
    } catch (err) {
      next(err)
    }
  }

  static async showByAccountNumber(req, res, next) {
    try {
      const { accountNumber } = req.params
      const user = await User.findOne({ accountNumber })
      if(user) res.status(200).json(user)
      else throw {name: 'ErrorNotFound'}
    } catch (err) {
      next(err)
    }
  }

  static async showByIdentityNumber(req, res, next) {
    try {
      const { identityNumber } = req.params
      const user = await User.findOne({ identityNumber })
      if(user) res.status(200).json(user)
      else throw {name: 'ErrorNotFound'}
    } catch (err) {
      next(err)
    }
  }

  static async create(req, res, next) {
    try {
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const user = await User.create({ 
        userName, 
        accountNumber, 
        emailAddress, 
        identityNumber 
      })
      redis.del('data:users')
      res.status(201).json(user.ops[0])
    } catch (err) {
      next(err)
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params
      if(!isValidId(id)) throw {name: 'ErrorNotFound'}
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const input = { 
        userName, 
        accountNumber, 
        emailAddress, 
        identityNumber
      }
      const user = await User.update({ _id: new ObjectID(id) }, { $set: input })
      if(user.result.n) {
        input._id = id
        redis.del('data:users')
        res.status(200).json(input)
      }
      else next({name: 'ErrorNotFound'})
    } catch (err) {
      next(err)
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params
      if(!isValidId(id)) throw {name: 'ErrorNotFound'}
      const user = await User.delete({ _id: new ObjectID(id) })
      if(user.result.n) {
        redis.del('data:users')
        res.status(200).json({ message: 'user deleted successfully' })
      }
      else next({name: 'ErrorNotFound'})
    } catch (err) {
      next(err);
    }
  }

  static async showOne(req, res, next) {
    try {
      const { id } = req.params
      if(!isValidId(id)) throw {name: 'ErrorNotFound'}
      const user = await User.findOne({ _id: new ObjectID(id) })
      if(user) res.status(200).json(user)
      else throw {name: 'ErrorNotFound'}
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController