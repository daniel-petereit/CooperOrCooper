let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser')
const controller = require('../controller/controller.js')

router.use(bodyParser.json())

router.get('/getTwoPictures', (req, res, next) => {
  controller.getTwoPictures (req, res, next)
})

router.post('/vote/:id', (req, res, next) => {
  controller.castVote (req, res, next)
})

module.exports = router
