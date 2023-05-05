const nodemailer = require('nodemailer')
const fs = require('fs')

function sendEmail(template, subject, email, callback) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'atemp6123@gmail.com',
      pass: 'sunbeam@123',
    },
  })

  const contents = '' + fs.readFileSync('./email_templates/' + template)
  const mailOptions = {
    from: 'testing.snb@gmail.com',
    to: email,
    subject: subject,
    html: contents,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    console.log(error)
    console.log(info)

    callback(error, info)
  })
}

module.exports = {
  sendEmail: sendEmail,
}
