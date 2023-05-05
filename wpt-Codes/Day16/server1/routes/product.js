const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

// /product/
router.get('/', (request, response) => {
  const statement = `select 
    p.id as productId, 
    p.title as productTitle, 
    p.description as productDescription,
    price,
    c.title as categoryTitle
  from product p
  inner join category c on p.category = c.id`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// /product/
router.post('/', (request, response) => {
  const { title, description, price, category, company } = request.body
  const statement = `insert into product (title, description, price, category, company) values 
        ('${title}','${description}', '${price}', '${category}', '${company}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// /product/:id
router.put('/:id', (request, response) => {
  const { id } = request.params
  const { title, description, price, category, company } = request.body
  const statement = `update product set 
        title = '${title}',
        description = '${description}',
        price = '${price}', 
        category = ${category}, 
        company = ${company}
    where id = ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// /product/:id
router.delete('/:id', (request, response) => {
  const { id } = request.params

  const statement = `delete from product where id = ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router
