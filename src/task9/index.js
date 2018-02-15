const httpGet = require('./http-get')

const args = process.argv.slice(2)

Promise.all(
  args.map(url => {
    return httpGet(url)
  })
).then(results => {
  results.forEach(result => {
    console.log(result)
  })
})
