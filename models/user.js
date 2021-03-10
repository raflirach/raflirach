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
    users.createIndexes({ identityNumber: 1 }, { unique: true })
    users.createIndexes({ accountNumber: 1 }, { unique: true })
    users.createIndexes({ userName: 1 }, { unique: true })
    users.createIndexes({ emailAddress: 1 }, { unique: true })
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