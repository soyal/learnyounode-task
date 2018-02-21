const http = require('http')

module.exports = function createServer(port) {
  const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
      res.writeHead(400, {
        'Content-Type': 'text/plain'
      })

      res.end('method not allowed')
      return
    }

    const reqChunks = []
    req.on('data', chunk => {
      reqChunks.push(chunk)
    })
    req.on('end', () => {
      const buf = Buffer.concat(reqChunks)
      res.end(buf.toString().toUpperCase())
    })
  })

  server.listen(port)
}
