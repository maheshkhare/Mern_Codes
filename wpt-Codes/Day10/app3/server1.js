// step 1: load http module
const http = require('http')

// step 2: create server instance
const server = http.createServer((request, response) => {
  // request : received by user
  // response: empty object need to be filled with required response

  console.log('received a request')

  // send an empty response to the client
  // response.end()

  // send a hello message to the client
  // response.end('hello from server...')

  // send a html message to the client
  // response.end(
  //   '<h1 style="color: red; font-family: arial">hello from server...</h1>'
  // )

  // send a json message to the client
  const person = { name: 'person1', age: 30, address: 'pune' }

  // convert the json object to a string
  const strPerson = JSON.stringify(person)
  response.end(strPerson)
})

// step 3: start server on port 3000
server.listen(3000, '0.0.0.0', () => {
  console.log('server started successfully on port 3000')
})
