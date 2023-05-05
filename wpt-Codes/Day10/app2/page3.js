const fs = require('fs')

const path = './data.txt'

function synchronousRead() {
  console.log('started reading file')

  // blocking the next statement
  // blocking API (function)
  // synchronous API (function)
  const data = fs.readFileSync(path)
  console.log('finished with reading file')
  //   console.log(`data = ${data}`)

  console.log('started evaluating expression')
  const answer =
    858464846465161655 * 8651154651166846465651 * 6465651616564446554
  console.log('finished evaluating expression')
  console.log(`answer = ${answer}`)
}

// synchronousRead()

function asynchronousRead() {
  console.log('started reading file')

  // the function (param2) will be called
  // when readFile is done with reading the contents
  // of the file on the path

  // non-blocking API (function)
  // asynchrous API (function)
  fs.readFile(path, (error, data) => {
    console.log('finished with reading file')
    console.log(`data = ${data}`)
  })

  console.log('started evaluating expression')
  const answer =
    858464846465161655 * 8651154651166846465651 * 6465651616564446554
  console.log('finished evaluating expression')
  console.log(`answer = ${answer}`)
}

asynchronousRead()
