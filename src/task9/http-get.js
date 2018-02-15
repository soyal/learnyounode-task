const http = require('http')

module.exports = function httpGet(url) {
  return new Promise(resolve => {
    http
      .get(url, res => {
        let result = ''

        res.on('data', chunk => {
          result += chunk
        })

        res.on('end', () => {
          resolve(result)
        })
      })
      .on('error', err => {
        console.error(err)
      })
  })
}
