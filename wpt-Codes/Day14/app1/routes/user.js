const express = require('express')
const db = require('../db')
const crypto = require('crypto-js')
const mailer = require('../mailer')
const jwt = require('jsonwebtoken')
const config = require('../config')
const utils = require('../utils')

const router = express.Router()

router.get('/user/profile', (request, response) => {
  const statement = `select firstName, lastName, email, phone from user where id = ${request.id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post('/user/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  const statement = `insert into user (firstName, lastName, email, password) values (
    '${firstName}', '${lastName}', '${email}', '${encryptedPassword}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      mailer.sendEmail(
        'signup.html',
        'welcome to ecommerce application',
        email,
        (error, info) => {
          response.send(result)
        }
      )
    } else {
      response.send(result)
    }
  })
})

router.post('/user/signin', (request, response) => {
  const { email, password } = request.body

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  const statement = `select id, firstName, lastName, email, phone from user 
      where email = '${email}' and password = '${encryptedPassword}'`

  db.execute(statement, (error, users) => {
    const result = {
      status: '',
    }

    if (error != null) {
      // error while executing statement
      result['status'] = 'error'
      result['error'] = error
    } else {
      if (users.length == 0) {
        // user does not exist
        result['status'] = 'error'
        result['error'] = 'User does not exist'
      } else {
        const user = users[0]

        const payload = { id: user['id'] }
        const token = jwt.sign(payload, config.secret)

        result['status'] = 'success'
        result['data'] = {
          token: token,
          firstName: user['firstName'],
          lastName: user['lastName'],
          email: user['email'],
          phone: user['phone'],
        }
      }

      response.send(result)
    }
  })
})

module.exports = router