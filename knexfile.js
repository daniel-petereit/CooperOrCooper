// Update with your config settings.
const path = require('path')
require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://localhost:5432/Q2`
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
