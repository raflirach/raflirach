const Redis = require("ioredis");
const redis = new Redis(
  process.env.REDISLAB_HOST,
  {
    password: process.env.REDISLAB_PASSWORD
  }
);

module.exports = redis