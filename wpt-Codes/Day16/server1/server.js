const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routerProduct = require('./routes/product')

const app = express()
app.use(cors('*'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// use routerProduct for all the routes starting with /product
app.use('/product', routerProduct)

app.get('/', (request, response) => {
  response.send('welcome')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('server started listening on port 4000')
})
