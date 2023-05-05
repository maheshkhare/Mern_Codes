// import express
const express = require('express')

// import mysql2
const mysql2 = require('mysql2')

// create express app
const app = express()

// configure the route
app.get('/product', (request, response) => {
  // connect to mysql database and open connection
  const connection = mysql2.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: 'root',
    database: 'ecommerce',
    port: 3306,
  })

  // prepare statement to execute the select query
  const statement = `select id, title, description, price from product`

  // execute query and call the callback function (arrow function)
  connection.query(statement, (isError, products) => {
    // close connection;
    connection.end()

    console.log(isError)
    console.log(products)

    response.send(products)
  })
})

// start app on port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
