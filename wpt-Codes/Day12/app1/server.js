const express = require('express')

const app = express()

// **** user routes ****

app.post('/user/signup', (request, response) => {
  response.send('signed up')
})

app.post('/user/signin', (request, response) => {
  response.send('signed in')
})

// **** category routes ****

app.get('/category', (request, response) => {
  response.send('list of categories')
})

app.post('/category', (request, response) => {
  response.send('category created')
})

app.put('/category', (request, response) => {
  response.send('category updated')
})

app.delete('/category', (request, response) => {
  response.send('deleted category')
})

// **** company routes ****

app.get('/company', (request, response) => {
  response.send('list of categories')
})

app.post('/company', (request, response) => {
  response.send('company created')
})

app.put('/company', (request, response) => {
  response.send('updated company')
})

app.delete('/company', (request, response) => {
  response.send('deleted company')
})

// **** product routes ****

app.get('/product', (request, response) => {
  response.send('list of products')
})

app.post('/product', (request, response) => {
  response.send('product created')
})

app.put('/product', (request, response) => {
  response.send('product updated')
})

app.delete('/product', (request, response) => {
  response.send('deleted product')
})

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
