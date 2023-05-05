const express = require('express')

const app = express()

// middleware function
function log(request, response, handler) {
  console.log('inside log function')
  console.log(`method = ${request.method}`)
  console.log(`url = ${request.url}`)
  console.log('-----------------------------------')

  // call the nex handler
  handler()
}

function log2(request, response, next) {
  console.log('inside log2 function')
  console.log('-----------------------------------')

  // call the nex handler
  next()
}

// call the function log before calling the route handler
app.use(log)
app.use(log2)

app.get('/', (request, response) => {
  console.log('inside GET / handler function')
  response.send('GET /')
})

app.post('/', (request, response) => {
  console.log('inside POST / handler function')
  response.send('POST /')
})

app.put('/', (request, response) => {
  console.log('inside PUT / handler function')
  response.send('PUT /')
})

app.delete('/', (request, response) => {
  console.log('inside DELETE / handler function')
  response.send('DELETE /')
})

app.listen(3000, '0.0.0.0', () => {
  console.log('app started on port 3000')
})
