// load the module named mymath.js
// and return the exported object of mymath module

// importing a custom module
const math = require('./mymath')

console.log(math)

math.myadd(10, 20)
math.subtract(100, 80)
math.mymultiply(20, 13)
math.divide(30, 5)
console.log(`pi = ${math.pi}`)
