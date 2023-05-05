const express = require('express')
const bodyParser = require('body-parser')

// list of routers
const routerUser = require('./routes/user')

const app = express()
app.use(bodyParser.json())

// add routers
app.use(routerUser)

app.get('/', (request, response) => {
  response.send('welcome to ecommerce application')
})

app.listen(3000, '0.0.0.0', () => {
  console.log(`server started on port 3000`)
})
