const jwt = require('jsonwebtoken')
const secret = '123412341234'

function client() {
  const data = { id: 1 }

  const token = jwt.sign(data, secret)
  console.log(token)
}

// client()

function server() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjExMjA3Nzk1fQ.rTazibu4M-Tr1jlx6JNGjjz3JMtwU2Gn1iOBP5YfpMA'

  const data = jwt.verify(token, secret)
  console.log(data)
}

server()
