const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./app/api-routes/routes');


app.disable('x-powered-by')
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/api', routes);

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use((err, req, res, next) => {
  const status = err.status || 500
  console.log(err);
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => console.log(`Listening on port ${port}!`)

app.listen(port, listener)

module.exports = app
