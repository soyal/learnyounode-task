// 创建tcp server
const net = require('net')

module.exports = function createServer(port) {
  const server = net.createServer()
  server.listen(port, () => {
    console.log('server bind')
  })
  return server
}
