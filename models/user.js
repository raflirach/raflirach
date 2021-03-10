const { getDatabase } = require('../config/mongodb')
const users = getDatabase().collection('users')

class User {
  static findAll() {
    return users.find().toArray()
  }

  static findOne(filter) {
    return users.findOne(filter)
  }

  static create(user){
    users.ensureIndex({identityNumber: 1}, {unique: true})
    users.ensureIndex({accountNumber: 1}, {unique: true})
    return users.insertOne(user)
  }

  static update(filter, update) {
    return users.updateMany(filter, update)
  }

  static delete(filter) {
    return users.deleteMany(filter)
  }
}

module.exports = User