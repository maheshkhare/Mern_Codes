// import the http module
const http = require('http')

// create server
const server = http.createServer((request, response) => {
  // processing the request

  // handle urls
  if (request.url == '/product') {
    console.log(`method = ${request.method}`)
    if (request.method == 'GET') {
      console.log('select * from product')
    } else if (request.method == 'POST') {
      console.log('insert into product')
    }
  } else if (request.url == '/category') {
    console.log(`method = ${request.method}`)
  } else if (request.url == '/user') {
    console.log(`method = ${request.method}`)
  }

  response.end('output from server')
})

// start listening on the port 4000
server.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
