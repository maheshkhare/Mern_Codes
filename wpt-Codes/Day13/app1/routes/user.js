const express = require('express')
const db = require('../db')
const crypto = require('crypto-js')
const mailer = require('../mailer')

const router = express.Router()

router.post('/user/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  const statement = `insert into user (firstName, lastName, email, password) values (
    '${firstName}', '${lastName}', '${email}', '${encryptedPassword}'
  )`

  db.execute(statement, (error, data) => {
    // result
    const result = {
      status: '',
    }

    if (error != null) {
      // there is an error while performing the operation
      result['status'] = 'error'
      result['error'] = error
      response.send(result)
    } else {
      // there is no error
      result['status'] = 'success'
      result['data'] = data
      mailer.sendEmail(
        'signup.html',
        'welcome to ecommerce application',
        email,
        (error, info) => {
          response.send(result)
        }
      )
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
        result['status'] = 'success'
        result['data'] = {
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
