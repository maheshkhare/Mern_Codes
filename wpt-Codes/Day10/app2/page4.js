const fs = require('fs')

const path = './data1.txt'

function synchronousRead() {
  try {
    const data = fs.readFileSync(path)
    console.log(`data = ${data}`)
  } catch (ex) {
    console.log(`exception = ${ex}`)
  } finally {
    console.log(`finally block called`)
  }
}

// synchronousRead()

function asynchronousRead() {
  fs.readFile(path, (error, data) => {
    if (error) {
      // the error object is valid
      // error caused while performing the job
      console.log(`error = ${error}`)
    } else {
      // the error object is null or undefined
      // job has been performed successfully
      console.log(`data = ${data}`)
    }
  })
}

asynchronousRead()
