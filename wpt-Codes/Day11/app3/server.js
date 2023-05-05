const express = require('express')
const mysql2 = require('mysql2')

// import body parser
const bodyParser = require('body-parser')
const e = require('express')

const app = express()

// use the bodyParser's json parser to parse body from request body
const jsonParser = bodyParser.json()
app.use(jsonParser)

app.get('/', (request, response) => {
  console.log('inside GET /')
  response.send('response from server')
})

app.post('/', (request, response) => {
  console.log('inside POST /')
  console.log('body = ')
  console.log(request.body)

  // destructuring request.body object
  const { title, description, price } = request.body
  const statement = `insert into product (title, description, price) values ('${title}', '${description}' , '${price}')`
  console.log(`statement = ${statement}`)

  const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'ecommerce',
  })

  connection.query(statement, (error, result) => {
    connection.end()

    if (error) {
      console.log(`error = ${error}`)
    } else {
      console.log(`result = ${JSON.stringify(result)}`)
    }

    response.send('response from server')
  })
})

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
