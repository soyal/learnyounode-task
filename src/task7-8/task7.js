const httpGet = require('./http-get')

const args = process.argv.slice(2)

httpGet(args[0], res => {
  res.on('data', chunk => {
    console.log(chunk.toString())
  })
})
