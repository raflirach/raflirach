const { MongoClient } = require('mongodb')

let database = null

async function connect() {
  try {
    const uri = `mongodb://localhost:27017`
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    
    await client.connect()

    const db = client.db(`raflirach`)

    database = db

  } catch (err) {
    next(err);
  }
}

const getDatabase = () => database

module.exports = {
  connect,
  getDatabase
}