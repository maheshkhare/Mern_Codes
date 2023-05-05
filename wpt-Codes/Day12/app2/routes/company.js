const express = require('express')
const router = express.Router()

router.get('/company', (request, response) => {
  response.send('list of companies')
})

router.post('/company', (request, response) => {
  response.send('company created')
})

router.put('/company', (request, response) => {
  response.send('updated company')
})

router.delete('/company', (request, response) => {
  response.send('deleted company')
})

module.exports = router
