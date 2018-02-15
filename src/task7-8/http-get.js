const http = require('http')

module.exports = function httpGet(url, callback) {
  http.get(url, callback)
}
