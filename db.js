const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

module.exports = knex


//set up a way to communicate with the database
