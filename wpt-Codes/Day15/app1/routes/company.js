const express = require('express')
const utils = require('../utils')
const db = require('../db')

const router = express.Router()

router.get('/company', (request, response) => {
  const statement = `select id,title,description from company`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post('/company', (request, response) => {
  const { title, description } = request.body
  const statement = `insert into company ( title, description ) values ('${title}','${description}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.put('/company/:id', (request, response) => {
  const { id } = request.params
  const { title, description } = request.body

  const statement = `update company set title = '${title}',description='${description}' where id= ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.delete('/company/:id', (request, response) => {
  const { id } = request.params

  const statement = `delete from category where id = ${id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router
