const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

router.get('/category', (request, response) => {
  const statement = `select id, title, description from category`
  db.execute(statement, (error, data) => {
    // const result = utils.createResult(error, data)
    // response.send(result)
    response.send(utils.createResult(error, data))
  })
})

router.post('/category', (request, response) => {
  const { title, description } = request.body
  const statement = `insert into category (title, description) values ('${title}','${description}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.put('/category/:id', (request, response) => {
  const { id } = request.params
  const { title, description } = request.body

  const statement = `update category set title = '${title}', description = '${description}' where id = ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.delete('/category/:id', (request, response) => {
  const { id } = request.params

  const statement = `delete from category where id = ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// export the router having all the routes related to the category
module.exports = router
