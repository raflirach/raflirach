const { getDatabase } = require('../config/mongodb')
const users = getDatabase().collection('users')

class User {
  static findAll() {
    return users.find().toArray()
  }

  static create(user){
    users.ensureIndex({identityNumber: 1}, {unique: true})
    users.ensureIndex({accountNumber: 1}, {unique: true})
    return users.insertOne(user)
  }
}

module.exports = User