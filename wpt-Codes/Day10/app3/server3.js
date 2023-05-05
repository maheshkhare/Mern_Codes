const http = require('http')

const server = http.createServer((request, response) => {
  console.log(`request is received with`)
  console.log(`method = ${request.method}`)
  console.log(`url = ${request.url}`)

  if (request.url == '/product') {
    if (request.method == 'GET') {
      console.log('select * from product')
    } else if (request.method == 'POST') {
      console.log('insert into product ...')
    } else if (request.method == 'PUT') {
      console.log('update product ...')
    } else if (request.method == 'DELETE') {
      console.log('delete from product ...')
    }
  } else if (request.url == '/user') {
    if (request.method == 'GET') {
      console.log('select * from user ...')
    } else if (request.method == 'POST') {
      console.log('insert into user ...')
    } else if (request.method == 'PUT') {
      console.log('update user ....')
    } else if (request.method == 'DELETE') {
      console.log('delete from user ...')
    }
  }

  console.log(`------------------------------------------`)

  // send response back to the client
  response.end()
})

server.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
