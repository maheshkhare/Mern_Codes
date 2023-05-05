const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()

router.get('/cart', (request, response) => {
  const statement = `select 
      c.id as cartId, p.id as productId, 
      p.title as productTitle, c.quantity as quantity
    from cart c
    inner join product p on c.product = p.id
    where user = ${request.id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post('/cart', (request, response) => {
  const { product, quantity } = request.body
  const statement = `insert into cart (user, product, quantity)
      values ('${request.id}', '${product}', '${quantity}')
  `
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.patch('/cart/quantity/:id', (request, response) => {
  const { id } = request.params
  const { quantity } = request.body
  const statement = `update cart set quantity = ${quantity} 
    where id = ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.delete('/cart/:id', (request, response) => {
  const { id } = request.params
  const statement = `delete from cart where id = ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router
