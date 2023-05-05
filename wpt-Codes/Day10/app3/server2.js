const http = require('http')

const server = http.createServer((request, response) => {
  // console.log(request)
  console.log(`http Method = ${request.method}`)
  console.log(`path (url) = ${request.url}`)
  console.log(`----------------------------------------`)

  response.end()
})

server.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
