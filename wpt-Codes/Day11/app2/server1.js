// import express
const express = require('express')

// create a new instance of express application
const app = express()

// route
app.get('/product', (request, response) => {
  console.log('inside a route for GET /product')

  response.end('response sent from express')
})

// route
app.post('/product', (request, response) => {
  console.log('inside a route for POST /product')
  response.end('response sent from express')
})

// route
app.put('/product', (request, response) => {
  console.log('inside a route for PUT /product')
  response.end('response sent from express')
})

// route
app.delete('/product', (request, response) => {
  console.log('inside a route for DELETE /product')
  response.end('response sent from express')
})

// start application listening on a port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log(`express application started on port 3000`)
})
