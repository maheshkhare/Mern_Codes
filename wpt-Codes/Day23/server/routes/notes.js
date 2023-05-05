const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')
const router = express.Router()

router.get('/', (request, response) => {
  const statement = `select * from notes where userId = ${request.id}`
  db.execute(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.post('/', (request, response) => {
  const { title, contents } = request.body
  const statement = `insert into notes (title, contents, userId) values ('${title}', '${contents}', '${request.id}')`
  db.execute(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
