const express = require('express')
const utils = require('../utils')
const mysql2 = require('mysql2/promise')
const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'ecommerce',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})
const moment = require('moment')

// router will be used to add routes in the app server
const router = express.Router()

router.get('/order', (request, response) => {})

router.post('/order', (request, response) => {
  // closure
  ;(async () => {
    // step 1:
    // - get all the products from cart
    const statementCart = `
      select 
          c.id as cartId, 
          p.id as productId, 
          p.price as price,
          c.quantity as quantity
      from cart c
          inner join product p on c.product = p.id
          where user = ${request.id}
    `
    const [items] = await pool.execute(statementCart)
    let total = 0
    for (const item of items) {
      total += item['quantity'] * item['price']
    }

    // steps 2:
    // - add these products to an order
    const date = moment().format('DD/MM/YYYY')
    const statementOrder = `
      insert into myOrder 
        (user, totalPrice, orderDate, paidAmount, orderStatus)
      values
        (${request.id}, ${total}, '${date}', ${total}, 0)
    `
    console.log(statementOrder)

    // place an order
    const [order] = await pool.execute(statementOrder)
    console.log(order)

    // get the orderId
    const orderId = order['insertId']

    for (const item of items) {
      const statementOrderDetails = `
        insert into orderDetails 
          (orderId, product, price, quantity)
        values
          (${orderId}, ${item['productId']}, ${item['price']}, ${item['quantity']})
      `
      console.log(statementOrderDetails)
      await pool.execute(statementOrderDetails)
    }

    // step 3
    // - delete all the items from the cart
    const statementCartDeleteItems = `delete from cart where user = ${request.id}`
    await pool.execute(statementCartDeleteItems)

    response.send({ status: 'success' })
  })()
})

module.exports = router
