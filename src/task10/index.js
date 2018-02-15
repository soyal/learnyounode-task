const createServer = require('./create-server')
const moment = require('moment')

const port = process.argv[2]
console.log(`port: ${port}`)
const server = createServer(port)

server.on('connection', socket => {
  console.log('connected')
  socket.write(moment(Date.now()).format('YYYY-MM-DD HH:mm'))
  socket.end('\n')
  socket.on('end', () => {
    console.log('end')
  })
})
