// importing a system module
const os = require('os')

// console.log(os)

console.log(`hostname: ${os.hostname()}`)
console.log(`home directory: ${os.homedir()}`)

console.log(`platform: ${os.platform()}`)
console.log(`total memory: ${os.totalmem() / (1024 * 1024 * 1024)}GB`)
console.log(`free memory: ${os.freemem() / (1024 * 1024 * 1024)}GB`)
console.log(`CPU architecture: ${os.arch()}`)

const cpus = os.cpus()
for (const cpu of cpus) {
  console.log(cpu)
}
