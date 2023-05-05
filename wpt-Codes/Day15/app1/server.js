const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')

// list of routers
const routerUser = require('./routes/user')
const routerCategory = require('./routes/category')
const routerCompany = require('./routes/company')
const routerProduct = require('./routes/product')
const routerCart = require('./routes/cart')
const routerOrder = require('./routes/order')

const app = express()

// enable frontend application to call the APIs
app.use(cors('*'))

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use((request, response, next) => {
  // skip checking the token for following APIs
  // signin and signup

  if (
    request.url == '/user/signin' ||
    request.url == '/user/signup' ||
    request.url.startsWith('/user/verify') ||
    request.url.startsWith('/user/status')
  ) {
    // skip checking the token
    next()
  } else {
    // get the token from headers
    const token = request.headers['token']

    try {
      // verify if the token is original or intact
      const payload = jwt.verify(token, config.secret)

      // get id from the token
      // add the user id in the request object so that it can be used
      // in ever other APIs
      request.id = payload['id']

      // call the next handler
      next()
    } catch (ex) {
      response.send({
        status: 'error',
        error: 'unauthorized access',
      })
    }
  }
})

// add routers
app.use(routerUser)
app.use(routerCategory)
app.use(routerCompany)
app.use(routerProduct)
app.use(routerCart)
app.use(routerOrder)

app.get('/', (request, response) => {
  response.send('welcome to ecommerce application')
})

app.listen(3000, '0.0.0.0', () => {
  console.log(`server started on port 3000`)
})
