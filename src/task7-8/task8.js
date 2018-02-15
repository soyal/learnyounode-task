const httpGet = require('./http-get')

const args = process.argv.slice(2)

httpGet(args[0], res => {
  let result = ''
  res.on('data', chunk => {
    result += chunk
  })

  res.on('end', () => {
    console.log(result.length)
    console.log(result)
  })
})
