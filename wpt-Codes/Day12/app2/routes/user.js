const express = require('express')
const { route } = require('./category')
const router = express.Router()

router.post('/user/signup', (request, response) => {
  response.send('signed up')
})

router.post('/user/signin', (request, response) => {
  response.send('signed in')
})

module.exports = router
